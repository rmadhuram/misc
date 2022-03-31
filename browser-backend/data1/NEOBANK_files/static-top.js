/*var arrImages = [
  "/contents/cdn-img/top/static/img_mirai_01_sp.jpg",
  "/contents/cdn-img/top/static/img_mirai_02_sp.jpg",
  "/contents/cdn-img/top/static/img_mirai_03_sp.jpg",
  "/contents/cdn-img/top/static/img_mirai_04_sp.jpg",
  "/contents/cdn-img/top/static/img_mirai_05_sp.jpg"
] ;
var viewImage = arrImages [Math.floor (Math.random() * arrImages.length)] ;
$('.top-mainvisual-link a').append('<img src="' + viewImage + '" class="sp" alt="つくる、かわる、ミライ。私たちが目指すもの">');*/

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports) {

module.exports = function () {

  //rate
  var rate = function () {

    var CLASS_ACTIVE = 'm-sim-active';
    var NUM_CHART = sbinetbk.getChartPeriod;
    var dataRateData = {};
    var dataChartData = {};
    var objApiDummy = {};
    var apiPath = {};

    /*
     * 為替レート
     */
    dataRateData = {
      rateDate: "",
      rateDataYEN: {
        USD: {},
        EUR: {},
        GBP: {},
        AUD: {},
        NZD: {},
        CAD: {},
        CHF: {},
        HKD: {},
        ZAR: {}
      },
      rateDataUSD: {
        EUR: {},
        GBP: {},
        AUD: {},
        NZD: {},
        CAD: {},
        CHF: {},
        HKD: {}
      }

      /*
       * 為替チャート
       */
    };dataChartData = {
      chartDate: "",
      CP_0201: {},
      CP_0301: {},
      CP_0401: {},
      CP_0501: {},
      CP_0601: {},
      CP_0701: {},
      CP_0801: {},
      CP_0901: {},
      CP_1001: {},
      CP_0302: {},
      CP_0402: {},
      CP_0502: {},
      CP_0602: {},
      CP_0207: {},
      CP_0208: {},
      CP_0209: {}

      /*
       * API ダミーデータ
       */
    };objApiDummy = '/contents/assets/js/simulation/json/rate/';

    /*
     * API 呼び出しパラメータ
     */
    apiPath = {
      rate: '',
      chart: {
        bar: sbinetbk.getChartBar,
        currencyPair: '0201'
      }

      /*
       * 初回レンダリング
       */
    };FirstRendering = function () {
      function FirstRendering(element) {

        this.target = $(element);
        this.apiData = {};

        // 初期化
        this.init();

        // セットAPI
        // this.setAPI();

        // イベント
        this.event();
      }

      /*
       * 初期化
       */
      FirstRendering.prototype.init = function () {

        //set エラーメッセージ
        var source_rate = '<div class="m-boxError" data-js-simulation-msg="error">' + sbinetbk.getMsgApiErrRate + '</div>';
        $('[data-js-simulation-exchange="rate"]').prepend(source_rate);

        var source_chart = '<div class="m-boxError" data-js-simulation-msg="error"><p>' + sbinetbk.getMsgApiErrChart + '</p></div>';
        $('[data-js-simulation-exchange^="chart"]').prepend(source_chart);

        setAPI();
      };

      /*
       * セットAPI
       */

      function setAPI() {
        var $el = this.target;
        var $el_output_rate = $('[data-js-simulation-exchange="rate"]');
        var $el_output_chart = $('[data-js-simulation-exchange^="chart"]');

        $el_output_rate.prev($('[data-js-simulation-loadingarea="loading"]')).show();
        $el_output_rate.hide();
        $el_output_chart.prev($('[data-js-simulation-loadingarea="loading"]')).show();
        $el_output_chart.hide();

        // ----- レート -----
        var ajax = new sbinetbk.simAjaxRate($el, apiPath.rate, objApiDummy, 'rate');
        ajax.getJson(function (obj_data) {
          this.apiData = obj_data;

          //エラー判別
          var _data_err = this.apiData.plReturnCode;

          if (typeof _data_err === 'undefined') {
            //データ格納
            storageData(this.apiData);

            //データセット
            setData($el);
          } else {
            //APIレスポンスエラー 文字列挿入
            $el_output_rate.find('.m-boxError').addClass(CLASS_ACTIVE);

            //コンテンツ表示
            $el_output_rate.find('.top-diff').hide();
            $el_output_rate.find('.top-trade').hide();
          }

          //ローディング完了
          $el_output_rate.prev($('[data-js-simulation-loadingarea="loading"]')).hide();
          $el_output_rate.show();
        });

        // ----- チャート -----
        $el_output_chart.each(function (index, el) {
          var $el = $(this);
          var value_para = $el.attr('data-js-simulation-exchange');
          var _currencyPair = value_para.slice(-4);
          apiPath.chart.currencyPair = _currencyPair;
          var ajax = new sbinetbk.simAjaxRate($el, apiPath.chart, objApiDummy, 'chart');
          ajax.getJson(function (obj_data) {
            this.apiData = obj_data;
            //エラー判別
            var _data_err = this.apiData.plReturnCode;
            if (typeof _data_err === 'undefined') {
              //データ格納
              storageDataChart(this.apiData, _currencyPair);
              //データセット
              setChart($el, _currencyPair);
            } else {
              //APIレスポンスエラー 文字列挿入
              $el.find('.m-boxError').addClass(CLASS_ACTIVE);
              //コンテンツ表示
              $el.find('a').hide();
            }
            //ローディング完了
            $el.prev($('[data-js-simulation-loadingarea="loading"]')).hide();
            $el.show();
          });
        });
      }

      /*
       * イベント
       */
      FirstRendering.prototype.event = function () {
        //更新
        var $el = this.target;
        $el.find('[data-js-simulation-gaika-btn="get"]').on('click', function (event) {
          setAPI();
        });
      };

      /*
       * データセット
       */
      function setData(element) {
        $('[data-js-simulation-area]').each(function (index, el) {
          var $el_target = $(this);
          setRateNow($el_target);
        });
      }

      return FirstRendering;
    }();

    /*
     * データセット チャート
     */
    function setChart(element, id_cp) {
      var $el_target = element.closest('[data-js-simulation-result-unique="rateserver"]');

      //更新日時
      var _date = dataChartData.chartDate.substr(0, 8);
      var _time = dataChartData.chartDate.substr(8, 4);
      sbinetbk.simUtility.setResultValueDate($el_target, 'changeDate', _date, 'day');
      sbinetbk.simUtility.setResultValueTime($el_target, 'changeTime', _time, 'minutes');

      //チャート描画
      var _id = 'CP_' + id_cp;
      var _data = dataChartData[_id];
      sbinetbk.simUtility.doHighcharts('sim-exchange-rate-' + id_cp, _data);
    }

    /*
     * データ格納 チャート
     */
    function storageDataChart(obj_data, id_cp) {
      var data = obj_data.data;
      //日付
      dataChartData.chartDate = data.CHART_DATE_TIME;

      //過去５時間分（末尾20個）
      var _rate = data.L_RATE_DATE.slice(-NUM_CHART);
      var _open = data.L_OPEN.slice(-NUM_CHART);

      //対円レート
      var objDataAll = [];
      for (var i = 0; i < _rate.length; i++) {
        var _priceDt = _rate[i];
        var _purchaseUnitPrice = _open[i];

        var apiData = [];
        var _year = _priceDt.substr(0, 4);
        var _month = Number(_priceDt.substr(4, 2)) - 1;
        var _day = Number(_priceDt.substr(6, 2));
        var _hour = Number(_priceDt.substr(8, 2));
        var _minits = Number(_priceDt.substr(10, 2));
        var objData = {
          x: '',
          y: ''
        };

        objData.x = Date.UTC(_year, _month, _day, _hour, _minits);
        objData.y = Number(_purchaseUnitPrice);
        objDataAll.push(objData);
      }
      var _id = 'CP_' + id_cp;
      dataChartData[_id] = objDataAll;
    }

    /*
     * データ格納
     */
    function storageData(obj_data) {

      var data = obj_data.data;

      //日付
      dataRateData.rateDate = data.RATE_UPD_DATE;

      //対円レート
      for (var i = 0; i < data.L_BID_RATE_R_DISP_YEN.length; i++) {

        var _v = data.L_BID_RATE_R_DISP_YEN[i];
        var result = sbinetbk.simUtility.getUnescapeUnicode(_v);

        var objRateDataDetail = {
          bidRateRDisp: result,
          bidRateNowDisp: data.L_BID_RATE_NOW_DISP_YEN[i],
          askRateNowDisp: data.L_ASK_RATE_NOW_DISP_YEN[i]
        };
        dataRateData.rateDataYEN[getCodeYen(i)] = objRateDataDetail;
      }

      //対米ドルレート
      for (var i = 0; i < data.L_BID_RATE_R_DISP_USD.length; i++) {
        var objRateDataDetail = {
          bidRateRDisp: data.L_BID_RATE_R_DISP_USD[i],
          bidRateNowDisp: data.L_BID_RATE_NOW_DISP_USD[i],
          askRateNowDisp: data.L_ASK_RATE_NOW_DISP_USD[i]
        };
        dataRateData.rateDataUSD[getCodeUsd(i)] = objRateDataDetail;
      }
    }

    /*
     * 現在のレート
     */
    function setRateNow(element) {
      var $el_target = element;
      var value_id = $el_target.attr('data-js-simulation-area');

      //更新日時
      var _date = dataRateData.rateDate.substr(0, 8);
      var _time = dataRateData.rateDate.substr(8, 4);
      sbinetbk.simUtility.setResultValueDate($el_target, 'changeDate', _date, 'day');
      sbinetbk.simUtility.setResultValueTime($el_target, 'changeTime', _time, 'minutes');

      // ----- 対円レート -----
      for (key in dataRateData.rateDataYEN) {

        var _code = getCode(key);

        var _data = dataRateData.rateDataYEN[key];
        //売却レート
        sbinetbk.simUtility.setResultValueSimple($el_target, 'bidRateNowDisp_' + _code, _data.bidRateNowDisp);

        //買付レート
        sbinetbk.simUtility.setResultValueSimple($el_target, 'askRateNowDisp_' + _code, _data.askRateNowDisp);

        //前日比
        var _bidRateRDisp = _data.bidRateRDisp;
        var _str1st2 = _bidRateRDisp.slice(0, 1);
        var _class2 = _str1st2 == '-' ? 'm-txtMinus' : 'm-txtPlus';
        if (_str1st2 == '+' || _str1st2 == '-') {
          var _class2 = _str1st2 == '-' ? 'm-txtMinus' : 'm-txtPlus';
          $el_target.find('[data-js-simulation-output="bidRateRDisp_' + _code + '"]').addClass(_class2);
        }
        sbinetbk.simUtility.setResultValueSimple($el_target, 'bidRateRDisp_' + _code, _bidRateRDisp);
      }

      // ----- 対米ドルレート -----
      for (key in dataRateData.rateDataUSD) {

        var _code = getCode(key);
        var _data = dataRateData.rateDataUSD[key];

        //売却レート
        sbinetbk.simUtility.setResultValueSimple($el_target, 'bidRateNowDisp_usd_' + _code, _data.bidRateNowDisp);

        //買付レート
        sbinetbk.simUtility.setResultValueSimple($el_target, 'askRateNowDisp_usd_' + _code, _data.askRateNowDisp);

        //前日比
        var _bidRateRDisp = _data.bidRateRDisp;
        if (typeof _bidRateRDisp === 'undefined') {} else {
          var _str1st2 = _bidRateRDisp.slice(0, 1);
          var _class2 = _str1st2 == '-' ? 'm-txtMinus' : 'm-txtPlus';
          if (_str1st2 == '+' || _str1st2 == '-') {
            var _class2 = _str1st2 == '-' ? 'm-txtMinus' : 'm-txtPlus';
            $el_target.find('[data-js-simulation-output="bidRateRDisp_usd_' + _code + '"]').addClass(_class2);
          }
        }
        sbinetbk.simUtility.setResultValueSimple($el_target, 'bidRateRDisp_usd_' + _code, _bidRateRDisp);
      }
    }

    function getCode(key) {
      var _code = "";

      switch (key) {
        case 'USD':
          _code = 'us';
          break;
        case 'EUR':
          _code = 'eu';
          break;
        case 'GBP':
          _code = 'uk';
          break;
        case 'AUD':
          _code = 'au';
          break;
        case 'NZD':
          _code = 'nz';
          break;
        case 'CAD':
          _code = 'ca';
          break;
        case 'CHF':
          _code = 'ch';
          break;
        case 'HKD':
          _code = 'hk';
          break;
        case 'ZAR':
          _code = 'za';
          break;
      }

      return _code;
    }

    function getCodeYen(key) {
      var _code = "";
      switch (key) {
        case 0:
          _code = 'USD';
          break;
        case 1:
          _code = 'EUR';
          break;
        case 2:
          _code = 'GBP';
          break;
        case 3:
          _code = 'AUD';
          break;
        case 4:
          _code = 'NZD';
          break;
        case 5:
          _code = 'CAD';
          break;
        case 6:
          _code = 'CHF';
          break;
        case 7:
          _code = 'HKD';
          break;
        case 8:
          _code = 'ZAR';
          break;
      }
      return _code;
    }
    function getCodeUsd(key) {
      var _code = "";
      switch (key) {
        case 0:
          _code = 'EUR';
          break;
        case 1:
          _code = 'GBP';
          break;
        case 2:
          _code = 'AUD';
          break;
        case 3:
          _code = 'NZD';
          break;
        case 4:
          _code = 'CAD';
          break;
        case 5:
          _code = 'CHF';
          break;
        case 6:
          _code = 'HKD';
          break;
      }
      return _code;
    }

    // =============== スタート ===============
    //ローディング
    $('[data-js-simulation-loadingarea="output"]').each(function () {
      new sbinetbk.simLoading(this);
    });

    //初回実行
    $('[data-js-simulation-result-unique="rateserver"]').each(function () {
      new FirstRendering(this);
    });
  }();
}();

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = function () {

  //rate
  var rate = function () {

    var FirstRendering;
    var CLASS_ACTIVE = 'm-sim-active';
    var apiPath = {};

    /*
     * API ダミーデータ
     */
    var apiDummy_01 = '/contents/assets/js/simulation/json/A30030101.json';
    var apiDummy_02 = '/contents/assets/js/simulation/json/A30030301.json';

    /*
     * API 入力パラメータ
     */
    sbinetbk.simInputParameter = {
      A30030301: {
        active4Menu: [1, 'M01']
      }
    };

    /*
     * API 呼び出しパラメータ
     */
    apiPath_01 = {
      path_control: 'i300301CT',
      path_page: 'NoPageID',
      path_action: 'NoActionID'
    };
    apiPath_02 = {
      path_control: 'i300303CT',
      path_page: 'NoPageID',
      path_action: 'NoActionID'

      /*
       * 初回レンダリング
       */
    };FirstRendering = function () {
      function FirstRendering(element) {

        this.target = $(element);
        this.apiData = {};

        // 初期化
        this.init();

        // セットAPI
        this.setAPI();
      }

      /*
       * 初期化
       */
      FirstRendering.prototype.init = function () {};

      /*
       * セットAPI
       */

      FirstRendering.prototype.setAPI = function () {
        var $el = this.target;
        //api実行「円定期預金」
        var ajax_01 = new sbinetbk.simAjax($el, apiPath_01, apiDummy_01, 0);
        ajax_01.getJson(function (obj_data) {
          this.apiData = obj_data;

          //エラー判別
          var _data_err = this.apiData.plReturnCode;

          if (_data_err == "0") {
            //データセット
            setData_01($el, this.apiData);
          }
        });

        //api実行「外貨定期預金 米ドル」
        var ajax_02 = new sbinetbk.simAjax($el, apiPath_02, apiDummy_02, 1);
        ajax_02.getJson(function (obj_data) {
          this.apiData = obj_data;

          //エラー判別
          var _data_err = this.apiData.plReturnCode;

          if (_data_err == "0") {
            //データセット
            setData_02($el, this.apiData);
          }
        });
      };

      return FirstRendering;
    }();

    /*
     * セットデータ「円定期預金」
     */
    function setData_01(element, data) {

      //円定期預金
      var _val = data.dsb.decoded_sbji050001YenRateInfo[2].rateDisp['999999'];
      $('[data-js-simulation-output="sbji050001YenRateInfo"]').text(_val);
    }

    /*
     * セットデータ「外貨定期預金 米ドル」
     */
    function setData_02(element, data) {
      var _val = sbinetbk.simUtility.getFloatFix(data.dsb.decoded_interestData[0].interest[6], 3);
      $('[data-js-simulation-output="interestData"]').text(_val);
    }

    // =============== スタート ===============
    //初回実行
    $('[data-js-simulation-area="rateinfo"]').each(function () {
      new FirstRendering(this);
    });
  }();
}();

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = function () {

  //login
  var login = function () {

    //init
    sbinetbk.setFlgTop();
  }();
}();

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(18);
__webpack_require__(19);

/***/ })

/******/ });
//# sourceMappingURL=static.js.map