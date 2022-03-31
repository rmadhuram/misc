$(function(){

	for(i = 0; i < hloan_array.length; i++){
		//配列[hloan_array]にオブジェクトデータがある場合のみ処理
		if(eval(hloan_array[i]) != undefined){

			//配列[hloan_array]ごとの処理
			//基準金利の場合の処理
			if(i == 0 || i == 5){
				var key;
				for(key in eval(hloan_array[i])){

					//配列[hloan_array]の要素の最上位のキー（float*、fixed*（12個）ごとの処理））
					//console.log(eval(hloan_array[i])[key]);
					for(s = 0; s < eval(hloan_array[i])[key].length; s++){
						//eval('var ' + hloan_array[i] + "_" + key + "_" + (s+1) + '=' + hloan_array[i] + '[key][s];')
						eval('var ' + hloan_array[i] + "_" + key + "_" + (s+1) + ';')
						var elemClass = hloan_array[i] + "_" + key + "_" + (s+1);
						var elemData = eval(hloan_array[i])[key][s];
						//console.log(elemClass + ':'+ elemData);
						elemtype = typeof(elemData);
						if(elemtype == 'number'){
							//console.log(elemData);
							//パーセント処理
							elemData = Math.round(elemData * 100000) / 1000;

							//小数点3ケタの文字列に変換し、右端の文字が0がどうか判定
							elemDataStr = elemData.toFixed(3);
							zero3Cut = elemDataStr.substr(elemDataStr.length - 1, 1);
							if(zero3Cut == '0'){
								//0だったら
								elemData = elemData.toFixed(2);
							}
						}
						$("." + elemClass).text(elemData);
					}
				}
			//基準金利以外の場合の処理
			}else{
				var key;
				for(key in eval(hloan_array[i])){

					//配列[hloan_array]の要素の最上位のキー（full、firstごとの処理）） 
					//console.log(hloan_array[i] + '_' + key + ':' + eval(hloan_array[i])[key]); 最上位のキー出力
					var elem;
					for(elem in eval(hloan_array[i])[key]){
						//配列[hloan_array]の要素の2番目のキー（float*、fixed*（12個）ごとの処理））
						//console.log(eval(hloan_array[i])[key][elem]);　2番目のキーのオブジェクトを出力
						for(s = 0; s < eval(hloan_array[i])[key][elem].length; s++){
							//eval('var ' + hloan_array[i] + "_" + key + "_" + elem + "_" + (s+1) + '=' + hloan_array[i] + '[key][elem][s];')
							eval('var ' + hloan_array[i] + "_" + key + "_" + elem + "_" + (s+1) + ';')
							var elemClass = hloan_array[i] + "_" + key + "_" + elem + "_" + (s+1);
							var elemData = eval(hloan_array[i])[key][elem][s];
							//console.log(elemClass + ':'+ elemData);
							elemtype = typeof(elemData);
							if(elemtype == 'number'){
								//console.log(elemData);
								//パーセント処理
								elemData = Math.round(elemData * 100000) / 1000;

								//小数点3ケタの文字列に変換し、右端の文字が0がどうか判定
								elemDataStr = elemData.toFixed(3);
								zero3Cut = elemDataStr.substr(elemDataStr.length - 1, 1);
								if(zero3Cut == '0'){
									//0だったら
									elemData = elemData.toFixed(2);
								}

							}
							$("." + elemClass).text(elemData);
						}
					}
				}
			}
		}else{}
	}
});