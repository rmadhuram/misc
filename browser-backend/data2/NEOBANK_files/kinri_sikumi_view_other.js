$(function(){
	for(i = 0; i < s_arr.length; i++){

		//商品ごとのフラグ用変数定義
		var flg =0;

		//配列[s_arr]にオブジェクトがある場合
		if(eval(s_arr[i]) != undefined){

				//配列[s_arr]ごとの処理
				//配列内の各keyにアクセス
				var key = 0;
				for(key in eval(s_arr[i])){

					//クラス名定義・要素の値をセット
					var eName = s_arr[i] + '_' + key;

					//配列 s_arr[i]の[key]の各要素ごとの処理））
					for(s = 0; s < eval(s_arr[i])[key].length; s++){

						//クラス名定義・要素の値をセット
						var eClass = eName + '_' + (s+1);
						var eData = eval(s_arr[i])[key][s];
						eval(eClass + '= eData');

						//フラグをセット
						if(key == 'base' && s == 0){
							flg = eData;
						}

						//各要素のタイプを判定
						eType = typeof(eData);

						//文字の処理
						if(eType == 'string'){

							//日付の処理
							if(s >=1 && s <=10){
								var dateArr = getDateFormat(eData);

								var eClassWd = eClass + '_weekD';				//曜日表示
								eval(eClassWd + '= dateArr[0];');

								$("." + eClassWd).text(eval(eClassWd));

							//押しフラグの処理
//							}else if(s == 12 || s == 13){
//								var cCodeArr = getRecFag(eData);
//								var eClassEn = eClass + '_recEn'			//英語表示
//								eval(eClassEn + '= cCodeArr[0];');
//								var eClassJp = eClass + '_recJp'			//日本語表示
//								eval(eClassJp + '= cCodeArr[1];');
//								var eClassIndex = eClass + '_crncyIndex'			//インデックス番号
//								eval(eClassIndex + '= cCodeArr[2];');
//
//								$("." + eClassEn).text(eval(eClassEn));
//								$("." + eClassJp).text(eval(eClassJp));

//								var Flag = 'https://contents-cache.netbk.co.jp/pc/img/' + getFlag(cCodeArr[0]);
//								$("img." + eClass + "_flag").attr("src",Flag);

							//募集要項の処理
							}else if(s == 24){
								var Link = '/contents/resources/pdf/' + getOutline(eData);
								$("a." + eClass + "_pdf").attr("href",Link);

							//金利の処理（%処理不要、少数第3位以下四捨五入）
							}else if(s >=14 && s <=23){

								var eClassFixed =  eClass + '_fixed';			//小数点2ケタ表記
								//文字列に変換
								eDataStr = String(Math.multiply(eData, 100) / 100);
								//金利（文字列）を小数点から3ケタ目で削除し数値変換したものを小数点第2位まで0埋め
								eval(eClassFixed + '= Number(getSliceDot(eDataStr, 3)).toFixed(2);');

								var eClassAftertax = eClass + '_atfixed';			//税引き後金利（* 0.79685）
								//税引後金利計算後、文字列に変換
								eDataAtfixedStr = String(Math.multiply(eData, 79.685) / 100);
								//税引後金利（文字列）を小数点から3ケタ目で削除し数値変換したものを小数点第2位まで0埋め
								eval(eClassAftertax + '= Number(getSliceDot(eDataAtfixedStr, 3)).toFixed(2);');

								$("." + eClassFixed).text(eval(eClassFixed));
								$("." + eClassAftertax).text(eval(eClassAftertax));
							}
						}
						$("." + eClass).text(eData);
					}

					//プレーオフの場合のみ受領総額例（1年、10年）
//					if(s_arr[i].indexOf('siP') != -1){
//						getAmount(1000000,eName,1);
//						getAmount(1000000,eName,10);
//					}

					//押しフラグに該当する通貨の金利を検索
//					if(((s_arr[i] == 'siD') || (s_arr[i] == 'siO')) && (key == 'base')){
//					if(eval(eName + '_13') != undefined){
//						getRecRate(eName,13);		//一押し（配列番号12+1）
//						getRecRate(eName,14);		//二押し（配列番号13+1）
//					}
//					}
				}

				//商品別ブロックの表示制御
				getViewArea(s_arr[i] + '_base',flg,s_arr[i] + '_base_2',s_arr[i] + '_base_3',s_arr[i] + '_base_4',s_arr[i] + '_base_5');
				//商品ごとのリスト表示切替
//				getViewList(s_arr[i],flg);
		}else{
		}
	}
});
/*--乗算処理--*/
/*JavaScriptがIEEE 754規格により小数計算の誤差が出るため、
数値文字列からドットを取り除くことで整数値のみで乗算を行う。
その後、小数点の桁数Nの数だけ10^Nで除算する*/
var Math = Math || {};
Math._getDecimalLength = function(value) {
    var list = (value + '').split('.'), result = 0;
    if (list[1] !== undefined && list[1].length > 0) {
        result = list[1].length;
    }
    return result;
};

Math.multiply = function(value1, value2) {
    var intValue1 = +(value1 + '').replace('.', ''),
        intValue2 = +(value2 + '').replace('.', ''),
        decimalLength = Math._getDecimalLength(value1) + Math._getDecimalLength(value2),
        result;
 
    result = (intValue1 * intValue2) / Math.pow(10, decimalLength);
 
    return result;
};

/*--小数点以下切捨て（桁数指定）--*/
function getSliceDot(str, num){
	var pos = str.indexOf('.');
	var slicedot = (pos !== -1) ? str.slice(0, pos + num) : str;
    return slicedot;
}

/*--国旗画像URLを出力---*/
//function getFlag(fCode){
//	var fileName = 'skm_i_flag_' + fCode.toLowerCase() + '_01.gif';
//	return fileName;
//}

/*--募集要項URLを出力---*/
function getOutline(sCode){
	var fileName = 'deposit_outline_' + sCode + '.pdf';
	return fileName;
}

/*--押しフラグに該当する通貨の金利を取得---*/
function getRecRate(rName,i){

	var rIndex = Number(eval(rName + '_' + i + '_crncyIndex'));		//押しフラグに該当する通貨の列を指定
	var searchClass = rName + '_' + (rIndex + 1);

	var rClassFixed = rName + '_' + i + '_recFixed';			//小数点2ケタ表記
	eval(rClassFixed + '=' + searchClass + '_fixed;');			
	var rClassAftertax = rName + '_' + i + '_recAtFixed';		//税引き後金利（* 0.79685）
	eval(rClassAftertax + '=' + searchClass + '_atfixed;');		

	$("." + rClassFixed).text(eval(rClassFixed));
	$("." + rClassAftertax).text(eval(rClassAftertax));
}

/*---商品別ブロックの表示制御---*/
function getViewArea(vName,vFlg,tS,tE,nS,nE){

	//募集フラグごとにスタイル「on」「off」を切り返る
	if(eval(vFlg) == 1){
		$("."+ vName + "_on").removeClass('off').addClass('on');
		$("."+ vName + "_off").removeClass('on').addClass('off');
		$("."+ vName + "_onterm").html(getTerm(vFlg,tS,tE));		//募集期間の表示
	}else if(eval(vFlg) == 0){
		$("."+ vName + "_on").removeClass('on').addClass('off');
		$("."+ vName + "_off").removeClass('off').addClass('on');
		$("."+ vName + "_offterm").html(getTerm(vFlg,nS,nE));		//募集期間の表示
	}
}

/*----募集期間の表示------------------*/
function getTerm (pFlg,start,end){

	//募集フラグ「1」の場合に現在の募集期間を表示する
	if(eval(pFlg) == 1){
		if(eval(start) && eval(end)){
			var mes = '<img src="https://contents-cache.netbk.co.jp/pc/img/skm_i_boshu_01.png" alt="募集中！" height="30" width="86" class="spnon">';
			mes += '<span><span class="spnon">募集期間：<em>' + eval(start + '_weekD') + '～</em></span><em>' + eval(end + '_weekD') + '</em>まで</span>';
		}else{
		}
	}else if(eval(pFlg) == 0){
		if(eval(start) && eval(end)){
			var mes;
			mes = '<dl class="yotei01"><dt><span class="spnon">次回の募集予定</span></dt><dd>' + eval(start + '_weekD') + '～<br class="pcnon">' + eval(end + '_weekD') + '</dd></dl>';
		}else{
			var mes;
			mes = '<p class="large01"><strong>次回の募集予定は未定です</strong></p>';
		}
	}
	return mes;
}

/*----満期日までの受領総額処理（配列を返す）------------------*/
//function getAmount(depo,dName,years){
//	var amountInt = 0;				//利息合計
//	var amountIntS;				//利息合計（桁区切り表示）
//	var amountValue;				//受取総額
//	var amountValueS;				//受取総額（桁区切り表示）
//	var depoS = separate(depo);		//預入金額（桁区切り表示）
//	var formula = '';				//表示用計算式
//
//	var dClass = eval(dName + '_15');
//	if(isNaN(dClass)){
//
//	}else{
//		//表示用計算式の生成
//		for(s = 0; s<years; s++){
//
//			var rate = eval(dName + '_' + (15 + s));
//			if(isNaN(rate)){
//
//			}else{
//				var dClassAtFixed = eval(dName + '_' + (15 + s) + '_atfixed;');
//
//				var interest = depo * dClassAtFixed / 100;
//				amountInt += interest;
//
//				if(formula == ''){
//					formula = depoS + '×' + dClassAtFixed + '％';
//				}else{
//					formula += '＋' + depoS + '×' + dClassAtFixed + '％';
//				}
//			}
//		}
//
//		amountIntS = separate(amountInt);
//		formula += '＝' + amountIntS;
//
//		//桁区切り表示の生成
//		amountValue = depo + amountInt;
//		amountValueS = separate(amountValue);
//
//		var amountArr = [dName,years,depoS,amountIntS,amountValueS,formula];
//
//		$("." + dName + '_amount' + years + '_y').text(amountArr[1]);
//		$("." + dName + '_amount' + years + '_p').text(amountArr[2]);
//		$("." + dName + '_amount' + years + '_aI').text(amountArr[3]);
//		$("." + dName + '_amount' + years + '_aV').text(amountArr[4]);
//		$("." + dName + '_amount' + years + '_f').text(amountArr[5]);
//
//		return amountArr;
//	}
//}

/*----桁区切り用関数----*/
function separate(num){
	return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

/*----日付と曜日の処理------------------------*/
function getDateFormat(elem){
	var date = new Date(elem);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var w = ['日','月','火','水','木','金','土'];
	var wD = w[date.getDay()];
	var eDate = y + '年' + m + '月' + d + '日（' + wD + '）';
	return [eDate];
}

/*----国の識別--------------------------------*/
var CCode = {
	USD: ['USD','米ドル','14'],
	EUR: ['EUR','ユーロ','15'],
	AUD: ['AUD','豪ドル','16'],
	NZD: ['NZD','NZドル','17'],
	ZAR: ['ZAR','南アランド','18']
	};
function getRecFag(element){
	var cCode = CCode[element];
	return cCode;
}

/*----円預金トップ リスト表示------------------------*/
//function getViewList(vArr,vFlg){
//
	//募集フラグごとにリストを表示
//	if(eval(vFlg) == 1){
//		var listCont = 0;
//		switch(vArr){
//			case 'siP':
//				$("div.depositList-p span").addClass('onTerm').text('募集中!');
//				break;
//			case 'siPusd':
//				$("div.depositList-pg span").addClass('onTerm').text('募集中!');
//				break;
//			case 'siD':
//				$("div.depositList-d span").addClass('onTerm').text('募集中!');
//				break;
//			case 'siO':
//				$("div.depositList-o span").addClass('onTerm').text('募集中!');
//				break;
//		}
//	}else if(eval(vFlg) == 0){
//		switch(vArr){
//			case 'siP':
//				$("div.depositList-p span").text('募集前');
//				break;
//			case 'siPusd':
//				$("div.depositList-pg span").text('募集前');
//				break;
//			case 'siD':
//				$("div.depositList-d span").text('募集前');
//				break;
//			case 'siO':
//				$("div.depositList-o span").text('募集前');
//				break;
//		}
//	}
//}
