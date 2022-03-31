
// 外貨定期預金特別金利おすすめフラグ用JSONの呼び出し
let _recInt = [];
let ow_conditions = {};

function cbGaikaTeikiRec(json) { cbGaikaTeikiRec = json; };
var k_gt_rec = document.createElement('script');
k_gt_rec.src = '/contents/data/csv/kinri_gt_rec.js';
document.getElementsByTagName('body')[0].appendChild(k_gt_rec);


var t_DI01000200_0010 = setInterval(function() { if($ !== undefined && ($('body').hasClass('logout') || $('body').hasClass('login'))) {

　// おすすめフラグの1つ目の通貨と期間を取得
	if(cbGaikaTeikiRec && cbGaikaTeikiRec[0]){

			for(var i=0; i < cbGaikaTeikiRec.length; i++){
				if(cbGaikaTeikiRec[i][2] == '1'){
					_recInt.push(cbGaikaTeikiRec[i]);
				}
			}

			if(_recInt[0]){
					ow_conditions = {
				        // 外貨
					    crncyName: _recInt[0][0], // 設定可能文字列: '米ドル', 'ユーロ', '英ポンド', '豪ドル', 'NZドル', 'カナダドル', 'スイスフラン','南アランド'
					    // 期間
					    period: _recInt[0][1] // 設定可能文字列: '1', '2', '3', '6', '12', '24', '36'
					}
			}
	}

  var s_static = document.createElement('script'); s_static.src = '/contents/assets/js/static.js';
  var s_common = document.createElement('script'); s_common.src = '/contents/assets/js/simulation/common.js';
  var s_datext = document.createElement('script'); s_datext.src = '/contents/data/js/text.js';

  var d_body = document.getElementsByTagName('body');
  if ($('body').hasClass('logout')) {
    //ログイン前の場合は text.js を読む
    d_body[0].appendChild(s_datext); s_datext.onload = function() {
      topKinriView();
    }
  } else {
    //ログイン後の場合は static.js、common.js、text.js を読む
    d_body[0].appendChild(s_static); s_static.onload = function() { d_body[0].appendChild(s_common); s_common.onload = function() { d_body[0].appendChild(s_datext); s_datext.onload = function() {
      topKinriView();
    }}}
  }
  clearInterval(t_DI01000200_0010);
}}, 500);


var topKinriView = function() {
(function (window, layzyRun, utility, recommend) {
    'use strict';

    /*
     * 表示設定
     *
     * 通常運用では setting を編集し、金利情報の出し分け設定をします。
     *
     *
     * 【設定例】
     *
     *   // 「お預け入れ」の設定項目
     *   deposit: {
     *
     *       kinriJoho: { // 商品名（任意の文字列を設定可能ですが、 config で設定する商品名と合わせる必要があります。）
     *           display: true, // 表示・非表示のフラグ（true → 表示、 false → 非表示）
     *           sortNo: 1, // 表示順の数値（設定されていない場合は、ソースコード上で記載されている順に表示されます。）
     *           conditions: {} // 各金利情報の表示条件（設定できる条件については各金利情報の conditions 内コメントをご参照ください。）
     *       },
     *
     *       …
     *       省略
     *       …
     *   },
     *
     *   // 「お借り入れ」の設定項目
     *   borrow: {
     *       …
     *       deposit と同様に設定
     *       …
     *   }
     *
     */
    let setting = {

        // 「お預け入れ」の設定項目
        deposit: {

            // 円定期預金
            yenteiki: {
                display: true,
                sortNo: 3,
                conditions: {
                    // 期間
                    period: '12' // 設定可能文字列: '1', '2', '3', '6', '12', '24', '36', '48', '60'
                }
            },

            // 円定期預金 新規口座
            yenTeikiShinki: {
                display: false,
                sortNo: 1
            },
			
			// 円定期預金特別金利 既存顧客
			yenTeikiKizon: {
				display: false,
				sortNo: 2
			},

            // 外貨定期預金
            gaikaTeiki: {
                display: true,
                sortNo: 2,
                conditions: {
                    // 外貨
                    crncyName: '米ドル', // 設定可能文字列: '米ドル', 'ユーロ', '英ポンド', '豪ドル', 'NZドル', 'カナダドル', 'スイスフラン'
                    // 期間
                    period: '12' // 設定可能文字列: '1', '2', '3', '6', '12', '24', '36'
                }
            },

            // 外貨定期預金 円からのお預入れ限定
            gaikaTeikiYen: {
                display: true,
                sortNo: 1,
                conditions: {
                    // 外貨
                    crncyName: '南アランド', // 設定可能文字列: '米ドル', 'ユーロ', '英ポンド', '豪ドル', 'NZドル', 'カナダドル', 'スイスフラン','南アランド'
                    // 期間
                    period: '1' // 設定可能文字列: '1', '2', '3', '6', '12', '24', '36'
                }
            },

            // 円プレーオフ
            yenPlayoff: {
                display: false,
                sortNo: 3,
                conditions: {
                    // 
                    rateType: 'フラット' // 設定可能文字列: 'フラット', 'ステップアップ'
                }
            },

            // 外貨プレーオフ
            gaikaPlayoff: {
                display: false,
                sortNo: 3,
                conditions: {
                    // 外貨
                    crncyName: '豪ドル' // 設定可能文字列: '米ドル', '豪ドル'
                }
            },

            // コイントス
            yenDeposit: {
                display: false,
                sortNo: 3,
                conditions: {
                    // 外貨
                    crncyName: '米ドル' // 設定可能文字列: '米ドル', '豪ドル', '南アランド'
                }
            },

            // オセロ
            gaikaOthello: {
                display: false,
                sortNo: 3,
                conditions: {
                    // 外貨
                    crncyName: '南アランド' // 設定可能文字列: '米ドル', '豪ドル', '南アランド'
                }
            }

        },

        // 「お借り入れ」の設定項目
        borrow: {

            // 住宅ローン 変動金利・新規
            homeLoanFloat: {
                display: false,
                sortNo: 1,
                conditions: {
                    // 引下げプラン
                    plan: '通期引下げプラン' // 設定可能文字列: '通期引下げプラン', '当初引下げプラン'
                }
            },

            // 住宅ローン 変動金利・借換え
            homeLoanFloatRe: {
                display: true,
                sortNo: 1,
                conditions: {
                    // 引下げプラン
                    plan: '通期引下げプラン' // 設定可能文字列: '通期引下げプラン', '当初引下げプラン'
                }
            },

            // 住宅ローン 固定金利
            homeLoanFixed: {
                display: false,
                sortNo: 3,
                conditions: {
                    // 引下げプラン
                    plan: '通期引下げプラン', // 設定可能文字列: '通期引下げプラン', '当初引下げプラン'
                    // 借入期間（年）
                    period: '2' // 設定可能文字列: '2', '3', '5', '7', '10', '15', '20', '30', '35'
                }
            },

            // カードローン
            cardLoan: {
                display: true,
                sortNo: 2
            },

            // 自動車ローン
            carLoan: {
                display: true,
                sortNo: 3
            },

            // 教育ローン
            educationLoan: {
                display: false,
                sortNo: 3
            },

            // 不動産担保ローン
            realestateLoan: {
                display: false,
                sortNo: 3
            }
        }
    };

    /*
     * データ取得・出力定義
     *
     * データ取得先のAPIが変更になった場合や
     * データ検索条件、出力マークアップの変更の場合に config を編集します。
     *
     *
     * 【設定例】
     *
     *   // 「お預け入れ」の設定項目
     *   deposit: {
     *
     *       kinriJoho: { // 商品名（任意の文字列を設定可能ですが、 setting で設定した商品名と合わせる必要があります。）
     *           apiPath: { // API 取得先（下記設定の場合、取得先 URL は '/wpl/NBGate/i300301CT/NoPageID/NoActionID' となります。）
     *               path_control: 'i300301CT',
     *               path_page: 'NoPageID',
     *               path_action: 'NoActionID'
     *           },
     *           jsonPath: '', // JSON 取得先（取得先 URL を記載します。）
     *           callbackName: '', // JSONP コールバック関数名（JSONP の場合のみ必要です。）
     *           createFunction: function (data, conditions) {
     *               // ページに表示する金利情報のマークアップを出力します。
     *               //
     *               // 引数 data には API または JSON で取得したデータが格納されています。
     *               // 引数 conditions には setting.conditions で設定した値が格納されています。
     *               //
     *               // マークアップ文字列を返すことで、金利情報のDOMが構築されます。
     *               // 【例】
     *               // return '<a href="#"><span>金利情報</span></a>';
     *               // ↓ 出力されるマークアップ（li 要素は自動的に付与されます。）
     *               // <li><a href="#"><span>金利情報</span></a></li>
     *           }
     *       },
     *
     *       …
     *       省略
     *       …
     *   },
     *
     *   // 「お借り入れ」の設定項目
     *   borrow: {
     *       …
     *       deposit と同様に設定
     *       …
     *   }
     *
     */
    let config = {

        // 「お預け入れ」の設定項目
        deposit: {

            // 円定期預金
            yenteiki: {
                apiPath: {
                    path_control: 'i300301CT',
                    path_page: 'NoPageID',
                    path_action: 'NoActionID'
                },
                createFunction: function (data, conditions) {
                    let htmlStr = '';
                    let displayInfo = {};
                    let matchFlg = false;
                    let periodDisp = '--ヵ月';
                    let rateDisp = '----';
                    let taxExcludeDisp = '----';
                    let dateDisp = utility.getDateDisp();

                    if (data && data.dsb && data.dsb.decoded_sbji050001YenRateInfo) {
                        matchFlg = data.dsb.decoded_sbji050001YenRateInfo.some(function (info) {
                            displayInfo = info;

                            return Object.keys(conditions).every(function (conditionName) {
                                return info[conditionName] === this[conditionName];
                            }, conditions);
                        });
                    }

                    if (matchFlg) {
                        periodDisp = displayInfo.periodDisp;
                        rateDisp = displayInfo.rateDisp['999999'];
                        taxExcludeDisp = utility.getTaxExclude(displayInfo.rateDisp['999999']);
                    }

                    htmlStr += '<a class="top-box m-icon-ps_yenteiki" href="/contents/lineup/yen/teiki/">';
                    htmlStr += '<p class="top-box-tit"><span>円定期預金<br>' + periodDisp + 'もの</span></p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + rateDisp + '</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">（税引後 年' + taxExcludeDisp + '%）</p>';
                    htmlStr += '<p class="top-box-txt">' + dateDisp + '現在</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // 円定期預金 新規口座
            yenTeikiShinki: {
                createFunction: function () {
                    let htmlStr = '';
                    let dateDisp = utility.getDateDisp();

                    htmlStr += '<a class="top-box m-icon-ps_yenteiki" href="/contents/lineup/yen/teiki/">';
                    htmlStr += '<p class="top-box-tit"><span>新規口座限定<br>円定期預金 特別金利<br>1ヵ月もの</span></p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">99.999</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">（税引後 年99.999%）</p>';
                    htmlStr += '<p class="top-box-txt">2999年12月31日現在</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },
			
            // 円定期預金特別金利 既存顧客
            yenTeikiKizon: {
                createFunction: function () {
                    let htmlStr = '';
                    let dateDisp = utility.getDateDisp();

                    htmlStr += '<a class="top-box m-icon-ps_yenteiki" href="/contents/campaign/yen/teiki/211206/" target="_blank">';
                    htmlStr += '<p class="top-box-tit"><span>円定期預金<br>特別金利<br>１年もの</span></p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">0.10</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">（税引後 年0.07%）</p>';
                    htmlStr += '<p class="top-box-txt">2021年12月6日～<br class="pc">2022年2月6日</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // 外貨定期預金
            gaikaTeiki: {
                apiPath: {
                    path_control: 'i300303CT',
                    path_page: 'NoPageID',
                    path_action: 'NoActionID'
                },
                createFunction: function (data, conditions) {
                    let htmlStr = '';
                    let displayInfo = {};
                    let matchFlg = false;
                    let crncyNameDisp = '----';
                    let periodDisp = '--ヵ月';
                    let interestDisp = '----';
                    let taxExcludeDisp = '----';
                    let dateDisp = utility.getDateDisp();

                    if (data && data.dsb && data.dsb.decoded_interestData && conditions) {

												// [decoded_interestData]配列内でcrncyNameが一致したらtrueを返し、処理をやめる
                        matchFlg = data.dsb.decoded_interestData.some(function (info) {
                            displayInfo = info;

                            return (info.campaignKbn == "0") && (info.crncyName === conditions.crncyName);

                        });

                    }

                    if (matchFlg) {
                        crncyNameDisp = displayInfo.crncyName;
                        periodDisp = utility.convertPeriodDisp(conditions.period);

                        if ( crncyNameDisp == '米ドル' | crncyNameDisp == '豪ドル' | crncyNameDisp == 'NZドル') {
                           interestDisp = utility.floatFixed(displayInfo.interest[conditions.period], 2);
                        }else{
                           interestDisp = utility.floatFixed(displayInfo.interest[conditions.period], 2);
                         }
                        taxExcludeDisp = utility.getTaxExclude(displayInfo.interest[conditions.period]);
                        if ( crncyNameDisp == '米ドル') {
                           var linkSort = '#rate_us';
                        }else if ( crncyNameDisp == '豪ドル'){
                           linkSort = '#rate_au';
                        }else if ( crncyNameDisp == 'NZドル'){
                           linkSort = '#rate_nz';
                        }
                    }

                    htmlStr += '<a class="top-box m-icon-ps_gaikateiki" href="/contents/lineup/gaika/teiki/' + linkSort + '">';
                    htmlStr += '<p class="top-box-tit"><span>外貨定期預金<br>' + crncyNameDisp + '<br>' + periodDisp + 'もの</span></p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + interestDisp + '</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">（税引後 年' + taxExcludeDisp + '%）</p>';
                    htmlStr += '<p class="top-box-txt">' + dateDisp + '現在</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // 外貨定期預金 円からのお預入れ限定
            gaikaTeikiYen: {
                apiPath: {
                    path_control: 'i300303CT',
                    path_page: 'NoPageID',
                    path_action: 'NoActionID'
                },
                createFunction: function (data, conditions) {

                    let htmlStr = '';
                    let crncyNameDisp = '----';
                    let periodDisp = '--ヵ月';
                    let interestDisp = '----';
                    let taxExcludeDisp = '----';
                    let dateDisp = utility.getDateDisp();
					let matchFlg = false;

										if(data && data.dsb && conditions){

												let matchFlg_nm = false;
												let matchFlg_sp = false;
												let _decoded_interestData = [];	// 金利データ一式
  		                  let _displayInfo_sp = {};	// 特別金利（通貨名・キャンペーン区分・通貨単位　指定）
												let _displayInfo_nm = {};	// 通常金利（通貨名・キャンペーン区分・通貨単位　指定）
  		                  let displayInfo = {};	// 最終表示金利（通貨名・キャンペーン区分・通貨単位　指定）
												let _period = '';
												let _interest1 = '';

												/*
												 * フラグ設定用（設定値、フラグ名）
												 */
												function matchFlgSet(_conditions, flgName){

														// 金利データ配列を変数にセット（南アor香港ドルorそれ以外）
														if(_conditions.crncyName == '南アランド'){
																_decoded_interestData = data.dsb.decoded_interestDataZAR;
														}else if(_conditions.crncyName == '香港ドル'){
																_decoded_interestData = data.dsb.decoded_interestDataHKD;
														}else{
																_decoded_interestData = data.dsb.decoded_interestData;
														}

														// 通常金利：金利データ配列内で、通貨名・キャンペーン区分・通貨単位が一致する要素を取り出しtrueを返す
												    matchFlg_nm = _decoded_interestData.some(function (info) {
												    		_displayInfo_nm = info;

												    		if(_conditions.crncyName == '南アランド' || _conditions.crncyName =='香港ドル')
												    				return (info.campaignKbn == "0") && (info.crncyName === _conditions.crncyName) && (info.moneyHierarchy === "9999999");　// 10万通貨未満に固定
												    		else{
												    				return (info.campaignKbn == "0") && (info.crncyName === _conditions.crncyName);
												    		}

												    });

														// 特別金利：金利データ配列内で、通貨名・キャンペーン区分・通貨単位が一致する要素を取り出しtrueを返す
												    matchFlg_sp = _decoded_interestData.some(function (info) {
												    		_displayInfo_sp = info;

												    		if(_conditions.crncyName == '南アランド' || _conditions.crncyName =='香港ドル')
												    				return (info.campaignKbn == "1") && (info.crncyName === _conditions.crncyName) && (info.moneyHierarchy === "9999999");
												    		else{
												    				return (info.campaignKbn == "1") && (info.crncyName === _conditions.crncyName);
												    		}

												    });

														// 特別金利が通常金利より大きい場合に、フラグを設定
														if(matchFlg_nm && matchFlg_sp){
																if((_displayInfo_nm.interest[_conditions.period] !== undefined) && (_displayInfo_sp.interest[_conditions.period] !== undefined)){
																		if(_displayInfo_sp.interest[_conditions.period] > _displayInfo_nm.interest[_conditions.period]){
																			matchFlg = flgName;
																			displayInfo = _displayInfo_sp;
		                    							_period = _conditions.period;
																		}
																}
														}
												}

											  /*
											   * 金利計算＆小数点桁数処理
											   */
												function floatCalc(val1, val2, digit){

													let valArr1 = separate(val1);
													let valArr2 = separate(val2);

													// 整数部分の乗算
													let valInt = String(valArr1[0] * valArr2[0]);
													// 整数部分の桁数
													let valIntLen = valInt.length;
													// 指数桁数の合計
													let valColumn = valArr1[1] + valArr2[1];

													let val ='';

													if(valColumn >= valIntLen){
														let zero = valColumn - valIntLen;
														let value = '0.';
														if(zero > 0){
															for(i=0; i<zero; i++){
																value = value + '0';
															}
														}
														val = value + valInt;
													}else{
														let textCount = valIntLen - valColumn;
														let value1 = valInt.slice(0, textCount);
														let value2 = valInt.slice(textCount, valIntLen);
														val = value1 + '.' + value2;
													}

													let toFixedVal;
												　let toFixedValArr = val.split('.');
													if(toFixedValArr[1].length < digit){
														let zero2 = digit - toFixedValArr[1].length;
														let value2 = '';
														for(i=0; i<zero2; i++){
															value2 = value2 + '0';
														}
														toFixedVal = toFixedValArr[0] + '.' + toFixedValArr[1] + value2;
													}else{
														toFixedVal = toFixedValArr[0] + '.' + toFixedValArr[1].slice(0, digit);
													}

													return toFixedVal;

													// 整数と指数桁数に分ける
													function separate(arg){																		// 例：0.009999999999

														// 小数点の位置を取得（例：2）
														let dpIndex = arg.indexOf('.');
														let argInt;
														let argColumn;

														if(dpIndex > 0){
															// 小数点の前後の数値を配列に格納
															let args = arg.split('.');
															argInt = parseFloat(args[0] + args[1]); 							// 整数化（例：0009999999999）
															argColumn = args[1].length;														// 小数点以下桁数（例：10）
														}else{
															argInt = parseFloat(arg); 														// 整数化（例：9999999999）
															argColumn = 0;																				// 小数点以下桁数
														}

														return [argInt, argColumn];
													}
												}


												// おすすめフラグがある場合：おすすめフラグで処理
												if(ow_conditions.crncyName){
														matchFlgSet(ow_conditions, 'ow');
												}

												// おすすめフラグが無いor条件に合わない場合：初期設定値で処理
												if(matchFlg !== 'ow'){
														matchFlgSet(conditions, 'df');
												}

												if((matchFlg == 'ow') || (matchFlg == 'df')){
				                    crncyNameDisp = displayInfo.crncyName;
				                    periodDisp = utility.convertPeriodDisp(_period);

				                    interestDisp = floatCalc(displayInfo.interest[_period], '1', 2);																		/* 金利（小数点以下処理） */
				                    taxExcludeDisp = floatCalc(displayInfo.interest[_period], '0.79685', 2);													/* 税引後金利（小数点以下処理） */

				                    htmlStr += '<a class="top-box m-icon-ps_gaikateiki" href="/contents/lineup/gaika/teiki/#rate_special">';
				                    htmlStr += '<p class="top-box-tit"><span>円からの預入限定</span><br><span class="m-inlineBlock">外貨定期預金 特別金利</span><br><span class="m-inlineBlock">' + crncyNameDisp + '</span> <span class="m-inlineBlock">' + periodDisp + 'もの</span></p>';

				                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + interestDisp + '</span><span class="top-unit">%</span></p>';
				                    htmlStr += '<p class="top-box-txt">（税引後 年' + taxExcludeDisp + '%）</p>';
				                    htmlStr += '<p class="top-box-txt">' + dateDisp + '現在</p>';
				                    htmlStr += '</a>';
												}
										}

                    return htmlStr;

                }
            },

            // 円プレーオフ
            yenPlayoff: {
                jsonPath: '/contents/data/csv/kinri_sikumi_playoff.js',
                callbackName: 'callbackSikumiPlayoff',
                createFunction: function (data, conditions) {
                    let htmlStr = '';
                    let interestDisp = '----';
                    let taxExcludeDisp = '----';
                    let dateFromDisp = '----年--月--日';
                    let dateToDisp = '----年--月--日';
/*
                    if (data && data.base && data.flat) {
                        interestDisp = data.flat[14]; // 配列のインデックス15が金利
                        dateFromDisp = utility.formatDateDisp(data.base[1]); // 2番目の日付が募集開始日
                        dateToDisp = utility.formatDateDisp(data.base[2]); // 3番目の日付が募集終了日
                        taxExcludeDisp = utility.getTaxExclude(data.flat[14]);
                    }
*/

                    if (data && data.base && conditions.rateType) {

                        var rateTypeDisp = conditions.rateType;

                        if(conditions.rateType == 'フラット'){
                        		interestDisp = data.flat[14]; // 配列のインデックス15が金利
                        		taxExcludeDisp = utility.getTaxExclude(data.flat[14]);
                        }else{
                       			interestDisp = data.stepup[14]; // 配列のインデックス15が金利
                      	  	taxExcludeDisp = utility.getTaxExclude(data.stepup[14]);
                        }
                        dateFromDisp = utility.formatDateDisp(data.base[1]); // 2番目の日付が募集開始日
                        dateToDisp = utility.formatDateDisp(data.base[2]); // 3番目の日付が募集終了日
                    }

                    htmlStr += '<a class="top-box m-icon-ps_yenplayoff" href="/contents/lineup/yen/shikumi/playoff/">';
                    htmlStr += '<p class="top-box-tit"><span>円仕組預金</span> <span class="m-inlineBlock">プレーオフ</span> <span class="m-inlineBlock">' + rateTypeDisp + '</span></p>';
                    htmlStr += '<p class="top-box-txt">最短1年 最長10年</p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + interestDisp + '</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">（税引後 年' + taxExcludeDisp + '%）</p>';
                    htmlStr += '<p class="top-box-txt">' + dateFromDisp + '～<span class="m-inlineBlock">' + dateToDisp + '募集分</span></p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // 外貨プレーオフ
            gaikaPlayoff: {
                jsonPath: [{
                    crncyName: '米ドル',
                    jsonPath: '/contents/data/csv/kinri_sikumi_playoff_usd.js'
                }, {
                    crncyName: '豪ドル',
                    jsonPath: '/contents/data/csv/kinri_sikumi_playoff_aud.js'
                }],
                callbackName: [{
                    crncyName: '米ドル',
                    callbackName: 'callbackSikumiPlayoffUSD'
                }, {
                    crncyName: '豪ドル',
                    callbackName: 'callbackSikumiPlayoffAUD'
                }],
                createFunction: function (data, conditions) {
                    let htmlStr = '';
                    let crncyNameDisp = '----';
                    let interestDisp = '----';
                    let taxExcludeDisp = '----';
                    let dateFromDisp = '----年--月--日';
                    let dateToDisp = '----年--月--日';

                    if (data && data.base && data.flat) {
                        interestDisp = data.flat[14]; // 配列のインデックス15が金利
                        dateFromDisp = utility.formatDateDisp(data.base[1]); // 2番目の日付が募集開始日
                        dateToDisp = utility.formatDateDisp(data.base[2]); // 3番目の日付が募集終了日
                        taxExcludeDisp = utility.getTaxExclude(data.flat[14]);
                    }
                    if (conditions && conditions.crncyName) {
                        crncyNameDisp = conditions.crncyName;
                    }

                    htmlStr += '<a class="top-box m-icon-ps_gaikaplayoff" href="/contents/lineup/yen/shikumi/playoff02/">';
                    htmlStr += '<p class="top-box-tit"><span>外貨仕組預金</span> <span class="m-inlineBlock">プレーオフ</span> <span class="m-inlineBlock">フラット</span> <span class="m-inlineBlock">' + crncyNameDisp + '</span></p>';
                    htmlStr += '<p class="top-box-txt">最短1年 最長5年</p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + interestDisp + '</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">（税引後 年' + taxExcludeDisp + '%）</p>';
                    htmlStr += '<p class="top-box-txt">' + dateFromDisp + '～<span class="m-inlineBlock">' + dateToDisp + '募集分</span></p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // コイントス
            yenDeposit: {
                jsonPath: '/contents/data/csv/kinri_sikumi_deposit.js', //コイントス
                callbackName: 'callbackSikumiDeposit',
                createFunction: function (data, conditions) {

                    let htmlStr = '';
                    let interestDisp = '----';
                    let taxExcludeDisp = '----';
                    let dateFromDisp = '----年--月--日';
                    let dateToDisp = '----年--月--日';

                    if (data && data.base && conditions.crncyName) {

                        var crncyNameDisp = conditions.crncyName;

		                    if(conditions.crncyName == '米ドル'){
		                        interestDisp = data.base[14]; // 金利（米ドル）
		                        taxExcludeDisp = utility.getTaxExclude(data.base[14]);
		                    }else if(conditions.crncyName == '豪ドル'){
		                        interestDisp = data.base[16]; // 金利（豪ドル）
		                        taxExcludeDisp = utility.getTaxExclude(data.base[16]);
		                    }else{
		                        interestDisp = data.base[18]; // 金利（南アランド）
		                        taxExcludeDisp = utility.getTaxExclude(data.base[18]);
		                    }

                        dateFromDisp = utility.formatDateDisp(data.base[1]); // 2番目の日付が募集開始日
                        dateToDisp = utility.formatDateDisp(data.base[2]); // 3番目の日付が募集終了日
                    }

                    htmlStr += '<a class="top-box m-icon-ps_yenplayoff" href="/contents/lineup/yen/shikumi/cointoss/">';
                    htmlStr += '<p class="top-box-tit"><span>円仕組預金</span> <span class="m-inlineBlock">コイントス</span> <span class="m-inlineBlock">' + crncyNameDisp + '</span></p>';
                    htmlStr += '<p class="top-box-txt">1ヵ月満期</p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + interestDisp + '</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">（税引後 年' + taxExcludeDisp + '%）</p>';
                    htmlStr += '<p class="top-box-txt">' + dateFromDisp + '～<span class="m-inlineBlock">' + dateToDisp + '募集分</span></p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // オセロ
            gaikaOthello: {
                jsonPath: '/contents/data/csv/kinri_sikumi_othello.js', //オセロ

                callbackName: 'callbackSikumiOthello',
                createFunction: function (data, conditions) {
                    let htmlStr = '';
                    let interestDisp = '----';
                    let taxExcludeDisp = '----';
                    let dateFromDisp = '----年--月--日';
                    let dateToDisp = '----年--月--日';

                    if (data && data.base && conditions.crncyName) {

                        var crncyNameDisp = conditions.crncyName;

		                    if(conditions.crncyName == '米ドル'){
		                        interestDisp = data.base[14]; // 金利（米ドル）
		                        taxExcludeDisp = utility.getTaxExclude(data.base[14]);
		                    }else if(conditions.crncyName == '豪ドル'){
		                        interestDisp = data.base[16]; // 金利（豪ドル）
		                        taxExcludeDisp = utility.getTaxExclude(data.base[16]);
		                    }else{
		                        interestDisp = data.base[18]; // 金利（南アランド）
		                        taxExcludeDisp = utility.getTaxExclude(data.base[18]);
		                    }

                        dateFromDisp = utility.formatDateDisp(data.base[1]); // 2番目の日付が募集開始日
                        dateToDisp = utility.formatDateDisp(data.base[2]); // 3番目の日付が募集終了日
                    }

                    htmlStr += '<a class="top-box m-icon-ps_yenplayoff" href="/contents/lineup/yen/shikumi/othello02/">';
                    htmlStr += '<p class="top-box-tit"><span>外貨仕組預金</span> <span class="m-inlineBlock">オセロ</span> <span class="m-inlineBlock">' + crncyNameDisp + '</span></p>';
                    htmlStr += '<p class="top-box-txt">1ヵ月満期</p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + interestDisp + '</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">（税引後 年' + taxExcludeDisp + '%）</p>';
                    htmlStr += '<p class="top-box-txt">' + dateFromDisp + '～<span class="m-inlineBlock">' + dateToDisp + '募集分</span></p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            }
        },

        // 「お借り入れ」の設定項目
        borrow: {

            // 住宅ローン 変動金利・新規
            homeLoanFloat: {
                jsonPath: '/contents/data/csv/kinri_nl_none.js',
                callbackName: 'callbackNLNone',
                createFunction: function (data, conditions) {
                    let htmlStr = '';
                    let planKey = '';
                    let typeKey = '';
                    let planDisp = '----';
                    let interestDisp = '----';

                    if (data && conditions) {
                        switch (conditions.plan) {
                        case '通期引下げプラン':
                            planKey = 'full';
                            break;
                        case '当初引下げプラン':
                            planKey = 'first';
                            break;
                        default:
                            break;
                        }

                        typeKey = 'float';

                        if (data[planKey] && data[planKey][typeKey] && data[planKey][typeKey][0]) {
                            planDisp = conditions.plan;
                            interestDisp = utility.floatFixed(data[planKey][typeKey][0] * 100, 3);
                        }
                    }

                    htmlStr += '<a class="top-box m-icon-ps_home" href="/contents/lineup/home-loan/net/">';
                    htmlStr += '<p class="top-box-tit"><span>ネット専用<br>住宅ローン</span></p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + interestDisp + '</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">変動金利・新規・<span class="m-inlineBlock">' + planDisp + '</span></p>';
                    htmlStr += '<p class="top-box-txt"><span class="smtbhlkinriyymm">----年--月</span>適用金利</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // 住宅ローン 変動金利・借換え
            homeLoanFloatRe: {
                jsonPath: '/contents/data/csv/kinri_nl_noneCP.js',
                callbackName: 'callbackNLNoneCP',
                createFunction: function (data, conditions) {
                    let htmlStr = '';
                    let planKey = '';
                    let typeKey = '';
                    let planDisp = '----';
                    let interestDisp = '----';

                    if (data && conditions) {
                        switch (conditions.plan) {
                        case '通期引下げプラン':
                            planKey = 'full';
                            break;
                        case '当初引下げプラン':
                            planKey = 'first';
                            break;
                        default:
                            break;
                        }

                        typeKey = 'floatRe';

                        if (data[planKey] && data[planKey][typeKey] && data[planKey][typeKey][0]) {
                            planDisp = conditions.plan;
                            interestDisp = utility.floatFixed(data[planKey][typeKey][0] * 100, 3);
                        }
                    }

                    htmlStr += '<a class="top-box m-icon-ps_home" href="/contents/lineup/home-loan/net/">';
                    htmlStr += '<p class="top-box-tit"><span>ネット専用<br>住宅ローン<br>キャンペーン金利</span></p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + interestDisp + '</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">変動金利・借換え・<span class="m-inlineBlock">' + planDisp + '</span></p>';
                    htmlStr += '<p class="top-box-txt"><span class="smtbhlkinriyymm">----年--月</span>適用金利</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // 住宅ローン 固定金利
            homeLoanFixed: {
                jsonPath: '/contents/data/csv/kinri_nl_none.js',
                callbackName: 'callbackNLNone',
                createFunction: function (data, conditions) {
                    let htmlStr = '';
                    let planKey = '';
                    let typeKey = '';
                    let planDisp = '----';
                    let interestDisp = '----';
                    let periodDisp = '--年';

                    if (data && conditions) {
                        switch (conditions.plan) {
                        case '通期引下げプラン':
                            planKey = 'full';
                            break;
                        case '当初引下げプラン':
                            planKey = 'first';
                            break;
                        default:
                            break;
                        }

                        typeKey = 'fixed' + conditions.period;

                        if (data[planKey] && data[planKey][typeKey] && data[planKey][typeKey][0]) {
                            planDisp = conditions.plan;
                            interestDisp = utility.floatFixed(data[planKey][typeKey][0] * 100, 3);
                            periodDisp = conditions.period + '年';
                        }
                    }

                    htmlStr += '<a class="top-box m-icon-ps_home" href="/contents/lineup/home-loan/net/">';
                    htmlStr += '<p class="top-box-tit"><span>ネット専用<br>住宅ローン</span></p>';
                    htmlStr += '<p class="top-box-num">年<span class="m-txtEx">' + interestDisp + '</span><span class="top-unit">%</span></p>';
                    htmlStr += '<p class="top-box-txt">固定金利・' + periodDisp + '・<span class="m-inlineBlock">' + planDisp + '</p>';
                    htmlStr += '<p class="top-box-txt"><span class="smtbhlkinriyymm">----年--月</span>適用金利</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // カードローン
            cardLoan: {
                createFunction: function () {
                    let htmlStr = '';

                    htmlStr += '<a class="top-box m-icon-ps_cardloan" href="/contents/lineup/card-loan/">';
                    htmlStr += '<p class="top-box-tit"><span>カードローン</span></p>';
                    htmlStr += '<p class="top-box-num top-box-num-range">年<span class="m-txtEx">1.59</span><span class="top-unit">%</span><span class="top-end m-txtEx">~14.79<span class="top-unit">%</span></span></p>';
                    htmlStr += '<p class="top-box-txt">所定の条件を満たすと、基準金利から最大年0.6%引下げ</p>';
                    htmlStr += '<p class="top-box-txt"><span class="clkinriyymm">----年--月</span>適用金利</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // 自動車ローン
            carLoan: {
                createFunction: function () {
                    let htmlStr = '';

                    htmlStr += '<a class="top-box m-icon-ps_aim-loan" href="/contents/lineup/loan/car/">';
                    htmlStr += '<p class="top-box-tit"><span>自動車ローン</span></p>';
                    htmlStr += '<p class="top-box-num top-box-num-range">年<span class="m-txtEx">1.775</span><span class="top-unit">%</span>*<span class="top-end m-txtEx">~3.975<span class="top-unit">%</span></span></p>';
                    htmlStr += '<p class="top-box-txt">*年1.0％の引下げ適用後</p>';
                    htmlStr += '<p class="top-box-txt"><span class="mlkinriyymm">----年--月</span>適用金利</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // 教育ローン
            educationLoan: {
                createFunction: function () {
                    let htmlStr = '';

                    htmlStr += '<a class="top-box m-icon-ps_loan_education" href="/contents/lineup/loan/education/">';
                    htmlStr += '<p class="top-box-tit"><span>教育ローン</span></p>';
                    htmlStr += '<p class="top-box-num top-box-num-range">年<span class="m-txtEx">1.775</span><span class="top-unit">%</span>*<span class="top-end m-txtEx">~3.975<span class="top-unit">%</span></span></p>';
                    htmlStr += '<p class="top-box-txt">*年0.1％の引下げ適用後</p>';
                    htmlStr += '<p class="top-box-txt"><span class="mlkinriyymm">----年--月</span>適用金利</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            },

            // 不動産担保ローン
            realestateLoan: {
                createFunction: function () {
                    let htmlStr = '';

                    htmlStr += '<a class="top-box m-icon-ps_loan_realestate" href="/contents/lineup/loan/realestate/">';
                    htmlStr += '<p class="top-box-tit"><span>不動産担保ローン</span></p>';
                    htmlStr += '<p class="top-box-num top-box-num-range">年<span class="m-txtEx">2.95</span><span class="top-unit">%</span><span class="top-end m-txtEx">~8.9<span class="top-unit">%</span></span></p>';
                    htmlStr += '<p class="top-box-txt"><span class="flkinriyymm">----年--月</span>適用金利</p>';
                    htmlStr += '</a>';

                    return htmlStr;
                }
            }
        }
    };

    /*
     *
     * 以下、メインロジック（※ 通常運用での修正は不要）
     *
     */

    let factory = recommend(window.$, 'data-js-recommend-rate', setting, config);

    layzyRun(function () {
        factory.init(window.$);
        factory.deploy();
    });
}(this, function (callbackFunc) {
    'use strict';

    const INTERVAL = 500;
    const MAX_DELAY = 3000;
    const MAX_COUNT = MAX_DELAY / INTERVAL;
    let timerId = 0;
    let timerCount = 0;

    timerId = setInterval(function () {
        try {
            if (typeof $ === 'function') {
                callbackFunc();

                timerCount = MAX_COUNT;
            }
            if (++timerCount >= MAX_COUNT) {
                clearInterval(timerId);
            }
        } catch (error) {
            console.error(error);
            clearInterval(timerId);
        }
    }, INTERVAL);
}, (function () {
    'use strict';

    return {

        /* 指定文字数で数値をゼロ埋め */
        floatFixed: function (value, digit) {
            return parseFloat(value).toFixed(digit);
        },

        /* 期間を表示用に変換 */
        convertPeriodDisp: function (period) {
            let periodNum = parseInt(period, 10);
            let periodDisp = (periodNum >= 12) ? (periodNum / 12) : periodNum;
            let unitDisp = (periodNum >= 12) ? '年' : 'ヵ月';

            return periodDisp + unitDisp;
        },

        /* 税引後金利を取得する */
        getTaxExclude: function (value) {
            const TAX_RATE = 0.20315;
            const CALC_RATE = 1 - TAX_RATE; // 0.79685

            return Math.floor(parseFloat(value) * CALC_RATE * 100) / 100;
        },

        /* 本日の日付を「yyyy年m月d日」形式で取得する */
        getDateDisp: function () {
            let now = new Date();
            let todayDisp = '';

            todayDisp += now.getFullYear() + '年';
            todayDisp += (now.getMonth() + 1) + '月';
            todayDisp += now.getDate() + '日';

            return todayDisp;
        },

        /* 「yyyy/mm/dd」形式の日付を「yyyy年m月d日」形式に整形する */
        formatDateDisp: function (date) {
            let ymdArray = date.split(/[/-]/);
            let ymdDispArray = ymdArray.map(function (ymd, i) {
                let unitArray = ['年', '月', '日'];

                return parseInt(ymd, 10) + unitArray[i];
            });

            return ymdDispArray.join('');
        }
    };
}()), function ($, dataAttrName, setting, config) {
    'use strict';

    /*
     * 金利情報アイテム
     */
    let RateCardItem = function ($list, rateData) {
        this.$list = $list;
        this.$item = $();
        this.rateData = rateData;
        this.buildDefer = new $.Deferred();
    };

    RateCardItem.prototype = {

        /* 初期処理 */
        init: function () {
            this.$item = $(document.createElement('li'));
            this.create = this.rateData.createFunction;
            this.set();
        },

        /* 初期設定 */
        set: function () {
            return false;
        },

        /* データ取得 */
        load: function () {
            this.buildDefer.resolve();
        },

        /* HTMLソースコードの生成 */
        create: function () {
            return '';
        },

        /* 金利情報アイテムのDOMを構築 */
        build: function () {
            let self = this;
            let promise = self.buildDefer.promise();
            self.$list.append(self.$item);
            self.load();

            promise.done(function (data, path) {
                if (path) {
                    self.responseCache.set(data, path);
                }
            }).always(function (data) {
                var _h = self.create(data, self.rateData.conditions); // htmlStrを_hに代入
                (_h != '') ? self.$item.html(_h) : self.$item.remove(); // _hが空の場合は要素を削除
//                self.$item.html(self.create(data, self.rateData.conditions));
            });

            return promise;
        },

        responseCache: (function () {
            let cacheArray = [];

            return {
                init: function (model, path) {
                    let initFlg = !cacheArray.some(function (cache) {
                        let matchFlg = cache.path === path;

                        if (matchFlg) {
                            cache.waitModelArray.push(model);
                        }

                        return matchFlg;
                    });

                    if (initFlg) {
                        cacheArray.push({
                            path: path,
                            promise: {},
                            data: {},
                            waitModelArray: []
                        });
                    }

                    return initFlg;
                },

                setPromise: function (promise, path) {
                    cacheArray.some(function (cache) {
                        let matchFlg = cache.path === path;

                        if (matchFlg) {
                            cache.promise = promise;

                            cache.promise.done(function () {
                                cache.waitModelArray.forEach(function (model) {
                                    model.buildDefer.resolve(cache.data);
                                });
                            }).fail(function () {
                                cache.waitModelArray.forEach(function (model) {
                                    model.buildDefer.reject();
                                });
                            });
                        }

                        return matchFlg;
                    });
                },

                set: function (data, path) {
                    cacheArray.some(function (cache) {
                        let matchFlg = cache.path === path;

                        if (matchFlg) {
                            cache.data = data;
                        }

                        return matchFlg;
                    });
                },

                get: function (path) {
                    let data = null;

                    cacheArray.some(function (cache) {
                        let matchFlg = cache.path === path;

                        if (matchFlg) {
                            data = cache.data;
                        }

                        return matchFlg;
                    });

                    return data;
                }
            };
        }())
    };

    /*
     * 金利情報アイテム（APIからデータ取得用）
     */
    let RateCardItemApi = function ($list, rateData) {
        RateCardItem.call(this, $list, rateData);

        this.apiPath = {};
        this.conditions = {};
    };

    RateCardItemApi.prototype = Object.create(RateCardItem.prototype);
    RateCardItemApi.prototype.constructor = RateCardItemApi;

    /* 初期設定 */
    RateCardItemApi.prototype.set = function () {
        this.apiPath = this.rateData.apiPath;
        this.conditions = this.rateData.conditions || {};
    };

    /* データ取得 */
    RateCardItemApi.prototype.load = function () {
        let self = this;
        let ajax = new sbinetbk.simAjax(self.$list[0], self.apiPath, '/contents/assets/js/simulation/json/' + self.apiPath.path_control + '.json', 0);

        // デバッグ用
        ajax.flg = false;

        setTimeout( function(){ ajax.getJson(function (data) { //API連続アクセスを避けるため2秒待つ
            // APIエラー無し
            if (data && data.plReturnCode === '0') {
                self.buildDefer.resolve(data, self.apiPath);
            } else {
                self.buildDefer.reject();
            }
        });}, 2000);
    };

    /*
     * 金利情報アイテム（JSONからデータ取得用）
     */
    let RateCardItemJson = function ($list, rateData) {
        RateCardItem.call(this, $list, rateData);

        this.jsonPath = '';
        this.conditions = {};
    };

    RateCardItemJson.prototype = Object.create(RateCardItem.prototype);
    RateCardItemJson.prototype.constructor = RateCardItemJson;

    /* 初期設定 */
    RateCardItemJson.prototype.set = function () {
        let self = this;

        self.conditions = self.rateData.conditions || {};

        if (Array.isArray(self.rateData.jsonPath)) {
            self.rateData.jsonPath.some(function (jsonPathData) {
                self.jsonPath = jsonPathData.jsonPath;

                return Object.keys(self.conditions).every(function (conditionName) {
                    return jsonPathData[conditionName] === this[conditionName];
                }, self.conditions);
            });
        } else {
            self.jsonPath = self.rateData.jsonPath;
        }

        if (Array.isArray(self.rateData.callbackName)) {
            self.rateData.callbackName.some(function (callbackNameData) {
                self.callbackName = callbackNameData.callbackName;

                return Object.keys(self.conditions).every(function (conditionName) {
                    return callbackNameData[conditionName] === this[conditionName];
                }, self.conditions);
            });
        } else {
            self.callbackName = self.rateData.callbackName;
        }
    };

    /* データ取得 */
    RateCardItemJson.prototype.load = function () {
        let self = this;
        let promise = {};
        let initFlg = self.responseCache.init(self, self.jsonPath);

        if (initFlg) {
            promise = $.ajax({
                url: self.jsonPath,
                dataType: self.callbackName ? 'jsonp' : 'json',
                jsonpCallback: self.callbackName,
                success: function (data) {
                    self.buildDefer.resolve(data, self.jsonPath);
                },
                error: function (jqXhr, status, error) {
                    console.error(status);
                    self.buildDefer.reject();
                }
            });

            self.responseCache.setPromise(promise, self.jsonPath);
        }
    };

    /*
     * 金利情報リスト
     */
    let RateCardList = function ($wrapper, settingData) {
        this.$wrapper = $wrapper;
        this.$list = $();
        this.settingData = settingData;
        this.promiseArray = [];
    };

    RateCardList.prototype = {

        /* 初期処理 */
        init: function () {
            this.$list = $(document.createElement('ul'));
        },

        /* 金利情報リストのDOM構築 */
        build: function () {
            let self = this;
            let displayDataArray = [];

            Object.keys(self.settingData).forEach(function (rateName) {
                let _rateData = this[rateName];

                if (_rateData.display) {
                    displayDataArray.push(_rateData);
                }
            }, self.settingData);

            displayDataArray.sort(function (a, b) {
                return a.sortNo - b.sortNo;
            });

            displayDataArray.forEach(function (data) {
                let constructor;

                if (data.apiPath && Object.keys(data.apiPath).length > 0) {
                    constructor = RateCardItemApi;
                } else if (data.jsonPath) {
                    constructor = RateCardItemJson;
                } else {
                    constructor = RateCardItem;
                }

                data.cardItemModel = new constructor(self.$list, data);
                data.cardItemModel.init();
                self.promiseArray.push(data.cardItemModel.build());

            });

            this.$wrapper.append(this.$list);

            setKinriDate();
        }
    };

    return {
        /* 初期処理 */
        init: function (jQ) {
            $ = jQ;
        },

        /* ロジックの展開 */
        deploy: function () {
            let $target = $('[' + dataAttrName + ']');
            let promiseArray = [];

            for (let i = 0, l = $target.length; i < l; i++) {
                let _$target = $target.eq(i);
                let _type = _$target.attr(dataAttrName);
                let _settingData = $.extend(true, setting[_type], config[_type]);
                let _cardListModel = new RateCardList(_$target, _settingData);

                _cardListModel.init();
                _cardListModel.build();

                promiseArray = promiseArray.concat(_cardListModel.promiseArray);
            }

            $.when.apply($, promiseArray).done(function () {
                if (typeof window.setKinriDate === 'function') {
                    window.setKinriDate();
                }
            });
        }
    };
}));
}
