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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = function () {
  /*
   * Ajax
   */
  sbinetbk.simAjax = function () {
    function Ajax(element, path_api, path_dummy, flg_para){
      this.path       = '';
      this.target     = element;
      this.path_api   = path_api;
      this.path_dummy = path_dummy;
      this.flg        = sbinetbk.getFlgSimDebug;
      this.flg_para   = flg_para;
      this.postData   = null;

      // APIレスポンスエラー:タイムアウトエラー
      this.json_error = {
        "plReturnCode": "1",
        "errorInfos": [{"errorMessage": sbinetbk.getMsgApiErr}]
      };

      this.init();
    }

    Ajax.prototype.init = function(){
      this.path = $.map(this.path_api, function(v,k){return v;}).join('/');

      // sbinetbk.simInputParameter[KEY] がある場合、parameters の成形を行う。
      if(this.flg_para){
        var o     = sbinetbk.simInputParameter[this.target.attr('data-js-simulation-resultbtn')];
        var q     = '/' + $.map(o, function(v,k){return v[1];}).join('/');
        this.path = this.path + q;
      };
    };

    Ajax.prototype.setPostData = function(data){
      this.postData = data;
    };

    Ajax.prototype.formatPostData = function(data){
      var o = {};
      $.map(data, function(v, k){o[k] = v[1];});
      return o;
    };

    Ajax.prototype.getJson = function(callback){
      var _flg     = this.flg;
      var _path    = _flg ? this.path_dummy : sbinetbk.getPathDoman + this.path;
      var _msg_err = this.json_error;
      var postData = {};
      var method   = 'GET';

      // POST method
      if(this.postData !== null){
        postData = this.postData;
        method   = 'POST';
      };

      $.ajax({
        type: method,
        url: _path,
        headers: {
          'WPL-Request-Source' : 'SPA'
        },
        dataType: 'json',
        jsonpCallback: 'callback',
        timeout: 5000,
        cache: true,
        data: postData,
        error: function(xhr, status, err){
          callback && callback(_msg_err);
        },
        success: function(data, status, xhr){
          if(typeof(data) === 'string'){
            callback && callback(JSON.parse(data));
          }
          else if(typeof(data) === 'object'){
            callback && callback(JSON.parse(JSON.stringify(data)));
          }
          else{
            callback && callback(_msg_err);
          }
        }
      })
    };

    return Ajax;
  }();
}();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function () {

  /*
   * Ajax
   */
  sbinetbk.simAjaxRate = function () {
    function Ajax(element, path_api, path_dummy, type) {
      this.target     = element;
      this.path_api   = path_api;
      this.path_dummy = path_dummy;
      this.flg        = sbinetbk.getFlgSimDebug;
      this.type       = type;

      //APIレスポンスエラー:タイムアウトエラー
      this.json_error = {
        "plReturnCode": "1",
        "errorInfos": [{
          "errorMessage": sbinetbk.getMsgApiErr
        }]
      };
      this.path = "";

      this.init();
    }

    Ajax.prototype.init = function () {
      //パラメータ生成
      var _path_fix = '';
      switch (this.type) {
        case 'rate':
          _path_fix = 'rate.json';
          break;
        case 'chart':
          _path_fix = 'chart_' + this.path_api.bar + '_' + this.path_api.currencyPair + '.json';
          break;

      }
      this.path = _path_fix;
    };

    Ajax.prototype.getJson = function (callback) {
      var _flg = this.flg;
      var _path = _flg ? this.path_dummy + this.path : sbinetbk.getPathDomanRate + this.path;
      var _msg_err = this.json_error;
      $.ajax({
        type: 'GET',
        url: _path,
        dataType: 'json',
        jsonpCallback: 'callback',
        timeout: 5000,
        cache: true,
        data: null,
        error: function error() {
          //読み込み失敗
          callback && callback(_msg_err);
        },
        success: function success(obj_data){
          //読み込み成功
          callback && callback(jsonParser(obj_data));
        }
      });

      function jsonParser(data){
        return (typeof data === "string") ? JSON.parse(data) : data;
      }
    };

    return Ajax;
  }();
}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function () {

  /*
   * Rate
   */
  sbinetbk.simLoading = function () {
    var CLASS_ACTIVE = 'm-sim-active';

    function loading(element) {
      this.target = $(element);

      // 初期化
      this.init();
    }

    /*
     * 初期化
     */
    loading.prototype.init = function () {
      var $el = this.target;
      var source = getHtmlSource();
      $el.before(source);
    };

    //ソース
    function getHtmlSource() {

      var source = "";
      source += '<div data-js-simulation-loadingarea="loading">';
      source += '<div class="loadingServer">';
      source += '<div class="loadingServer-circle">';
      source += '<div class="loadingServer-loader">Loading...<span class="loadingServer-loader-before"></span><span class="loadingServer-loader-after"></span>';
      source += '</div>';
      source += '</div>';
      source += '</div>';
      source += '</div>';

      return source;
    }

    return loading;
  }();
}();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function () {

  /*
   * Rate
   */
  sbinetbk.simRate = function () {
    var CLASS_ACTIVE = 'm-sim-active';
    var CLASS_OK = 'm-validateOK';
    var CLASS_NG = 'm-validateErr';
    var flgCSV = true;
    var flgCSVData = false;
    var objCSV_hloan = {};
    var objCSV_rate = {
      full: '',
      first: '',
      none: ''
    };
    var timerCSV;
    var timerArray = new Array();

    function Rate(element) {
      this.target = $(element);
      this.name = this.target.find('.m-formRadio input').attr('name');

      // 初期化
      this.init();

      // イベント
      this.event();
    }

    /*
     * get CSV
     */
    function getDataCSV(type, plan, year, num) {
      var year_temp = Number(year);
      if (type == "mr" && plan == "full" && num == "2" && year_temp >= 2) {
        year = "2";
      }
      var type_fix = type == "mr" ? "hlMrNew" : "nlNone";
      var year_fix = year == "1" ? "float" : "fixed" + year;
      var classname = type_fix + "_" + plan + "_" + year_fix + "_" + num;
      var value = objCSV_hloan[classname];
      return value;
    }

    /*
     * 初期化
     */
    Rate.prototype.init = function () {

      var $el_unique = this.target;

      //非表示
      $el_unique.closest('[data-js-simulation-uniquewrap]').find('[data-js-simulation-unique]').hide();
      //表示
      $el_unique.closest('[data-js-simulation-uniquewrap]').find('[data-js-simulation-unique="rateYear-01"].m-sim-active').show();

      //set CSV
      timerArray.push(timerCSV = setInterval(setCsvRateYear, 500));

      //CSVタイムアウト
      setTimeout(function () {
        if (!flgCSVData) {
          clearInterval(timerArray.shift());
          $('[data-js-simulation-msg="error-csv"]').addClass(CLASS_ACTIVE);

          //非表示
          var $el_rateYear01 = $el_unique.closest('[data-js-simulation-uniquewrap]').find('[data-js-simulation-unique="rateYear-01"]');
          $el_rateYear01.hide();
          $el_rateYear01.removeClass(CLASS_ACTIVE);
        }
      }, 5000);
    };

    /*
     * set CSV 金利
     */
    function setCsvRateYear() {

      var arr_temp = [];

      var $el_temp = $('[data-js-simulation-csv="temp"]');
      $el_temp.find('p').each(function (index, el) {
        var _id = $(this).attr('class');
        var _val = $(this).text();

        //CSVデータ格納
        objCSV_hloan[_id] = _val;
        arr_temp.push(_val);
      });

      if (arr_temp.indexOf("") < 0) {
        flgCSVData = true;
        clearInterval(timerArray.shift());
      }
    }

    /*
     * イベント
     */
    Rate.prototype.event = function () {
      var $el = this.target;
      $el.find('.m-formRadio input, .m-formRadioV input').on('click', function (event) {
        var _state = $el.find('input:radio[name=' + this.name + ']:checked').val();

        //非表示
        $el.closest('[data-js-simulation-uniquewrap]').find('[data-js-simulation-unique]').hide();

        var $el_target = $el.closest('[data-js-simulation-uniquewrap]').find('[data-js-simulation-unique="rateYear-' + _state + '"].m-sim-active');

        //表示
        $el_target.show();

        var val = "";
        var $el_csv_err = $el.find('[data-js-simulation-msg="error-csv"]');
        if (_state == "01") {
          //条件を設定・算出する
          val = $el_target.find('[data-js-simulation="rateYear"]').text();
          //CSVエラー
          if (!flgCSVData) $el_csv_err.addClass(CLASS_ACTIVE);
        } else {
          //任意入力する
          val = $el_target.find('[data-js-simulation="rateYear"]').val();
          //CSVエラー
          $el_csv_err.removeClass(CLASS_ACTIVE);
        }

        //setInput
        var value = sbinetbk.simUtility.getNumber(val);
        var data = 'data-js-simulation-area';
        var value_id = $el.closest('[' + data + ']').attr(data);
        var value_para = 'rateYear';
        if (value) {
          sbinetbk.simUtility.setParameter(value_id, value_para, value);
        } else {
          sbinetbk.simUtility.setParameter(value_id, value_para, "");
        }
      });

      // =============== プルダウン ===============
      $el.find('[data-js-simulation-csv="select"]').on('click', function () {
        var $el = $(this);
        if ($el.closest('[data-js="formPulldownWrap"]').hasClass('m-open')) {} else {
          var _txt = $el.find('a').html();
          if (_txt.indexOf("選択してください") >= 0) {
            $el.closest('.m-formWrapPlural-data').removeClass(CLASS_OK);
            $el.closest('.m-formWrapPlural-data').addClass(CLASS_NG);
          }
        }
      });

      var flgPulldown = true;
      $el.find('.m-formPulldown-list li').on('mousedown', function (event) {
        flgPulldown = false;
      });
      $el.find('.m-formPulldown-list li').on('mouseup', function (event) {
        flgPulldown = true;
        setPulldownList($(this).closest('[data-js="formPulldownWrap"]'));
      });

      $el.find('[data-js-simulation-csv="select"]').on('blur', function () {
        var $el = $(this);
        setPulldownList($el);
      });
      function setPulldownList(element) {
        if (flgPulldown) {
          var _txt = element.find('a').html();
          if (_txt.indexOf("選択してください") >= 0) {
            element.closest('.m-formWrapPlural-data').removeClass(CLASS_OK);
            element.closest('.m-formWrapPlural-data').addClass(CLASS_NG);
          }
        }
      }

      // =============== お借入商品 ===============
      var $el_csv_product = $('[data-js-simulation-csv="product"]');
      $el_csv_product.find('[data-js-simulation-csv="select"]').on('click', function (event) {
        var $el_temp = $('[data-js-simulation-csv="temp"]');
        var _temp = $el_temp.find('.hlMrNew_full_float_1').text();
        if (_temp != "") {
          //「金利タイプ」小数点下駄揃え
          if (flgCSV) {
            var $el_type_list = $el.closest('[data-js-simulation-uniquewrap="rateYear"]').find('[data-js-simulation-csv="type"] li');
            $el_type_list.each(function (index, el) {
              var $el_type_list_data = $(this);
              var _val_csv = $el_type_list_data.find('span').text();
              var _val_csv_fix = sbinetbk.simUtility.getFloatFix(_val_csv, 3);
              $el_type_list_data.find('span').text(_val_csv_fix);
            });
            flgCSV = false;
          }

          $el_temp.find('p').each(function (index, el) {
            var _id = $(this).attr('class');
            var _val = $(this).text();

            //CSVデータ格納
            objCSV_hloan[_id] = _val;
          });
        }
      });

      $el_csv_product.find('.m-formPulldown-list li').on('click', function (event) {
        var $el_list = $(this);

        var $el_type = $el_list.closest('[data-js-simulation-uniquewrap="rateYear"]').find('[data-js-simulation-csv="type"]');

        //「金利プラン」非表示
        $el_list.closest('[data-js-simulation-uniquewrap="rateYear"]').find('[data-js-simulation-csv="plan"]').removeClass(CLASS_ACTIVE).hide();

        //金利結果非表示
        $el_list.closest('[data-js-simulation-uniquewrap="rateYear"]').find('[data-js-simulation-csv="plan"] .m-limit-balloon').hide();

        //「金利タイプ」リセット
        $el_type.find('.m-formPulldown-select .m-fix').html('<a href="#">選択してください</a>');
        $el_type.find('.m-formWrapPlural-data').removeClass('m-validateOK');

        //「金利」リセット
        $el_type.closest('[data-js-simulation-uniquewrap="rateYear"]').find('[data-js-simulation-csv="plan"] [data-js-simulation="rateYear"]').text("");

        //バリデート
        var data = 'data-js-simulation-area';
        var value_id = $el_list.closest('[' + data + ']').attr(data);
        sbinetbk.simUtility.setParameter(value_id, 'rateYear', "");

        var _txt = $el_list.closest('[data-js-simulation]').find('.m-formPulldown-select a').html();
        if (_txt.indexOf("選択してください") < 0) {
          var _type = $el_list.attr('data-js-csv');
          $el_type.addClass(CLASS_ACTIVE);
          $el_type.show();
          $el_type.find('[data-js-simulation-csv-type]').removeClass(CLASS_ACTIVE);
          $el_type.find('[data-js-simulation-csv-type="' + _type + '"]').addClass(CLASS_ACTIVE);
        } else {}
      });

      // =============== 金利タイプ ===============
      var $el_csv_type = $('[data-js-simulation-csv="type"]');
      $el_csv_type.find('.m-formPulldown-list li').on('click', function (event) {
        var $el_list = $(this);

        //金利リセット
        $el_plan = $el_list.closest('[data-js-simulation-uniquewrap="rateYear"]').find('[data-js-simulation-csv="plan"]');
        $el_plan.find('.m-formPulldown-select .m-fix').html('<a href="#">選択してください</a>');
        $el_plan.find('.m-formWrapPlural-data').removeClass('m-validateOK');
        $el_plan.find('[data-js-simulation="rateYear"]').text("");

        //金利結果非表示
        $el_list.closest('[data-js-simulation-uniquewrap="rateYear"]').find('[data-js-simulation-csv="plan"] .m-limit-balloon').hide();

        //バリデート
        var data = 'data-js-simulation-area';
        var value_id = $el_list.closest('[' + data + ']').attr(data);
        sbinetbk.simUtility.setParameter(value_id, 'rateYear', "");

        var $el_type = $el_list.closest('[data-js-simulation-csv-type]');
        var _type = $el_type.attr('data-js-simulation-csv-type');

        var _data = $el_list.attr('data-js-csv');

        //引下げ幅
        var val_full_2 = getDataCSV(_type, 'full', _data, '2');
        var val_first_2 = getDataCSV(_type, 'first', _data, '2');

        //小数点桁数揃え
        val_full_2 = sbinetbk.simUtility.getFloatFix(val_full_2, 3);
        val_first_2 = sbinetbk.simUtility.getFloatFix(val_first_2, 3);

        //符号削除
        val_full_2 = val_full_2.slice(1);
        val_first_2 = val_first_2.slice(1);

        //適用金利
        var val_full_1 = getDataCSV(_type, 'full', _data, '1');
        var val_first_1 = getDataCSV(_type, 'first', _data, '1');

        //小数点桁数揃え
        val_full_1 = sbinetbk.simUtility.getFloatFix(val_full_1, 3);
        val_first_1 = sbinetbk.simUtility.getFloatFix(val_first_1, 3);

        //値保持
        objCSV_rate.full = val_full_1;
        objCSV_rate.first = val_first_1;
        objCSV_rate.none = $el_list.find('span').text();

        var $el_type = $el_list.closest('[data-js-simulation-uniquewrap="rateYear"]').find('[data-js-simulation-csv="plan"]');

        //データ挿入
        var $el_plan = $el_type.find('[data-js-simulation-csv-plan="' + _type + '"]');
        $el_plan.find('[data-js-csv-value="full"]').text(val_full_2);
        $el_plan.find('[data-js-csv-value="first"]').text(val_first_2);

        //表示
        $el_type.addClass(CLASS_ACTIVE);
        $el_type.show();

        $el_type.find('[data-js-simulation-csv-plan]').removeClass(CLASS_ACTIVE);
        $el_type.find('[data-js-simulation-csv-plan="' + _type + '"]').addClass(CLASS_ACTIVE);
      });

      // =============== 金利プラン ===============
      var $el_csv_plan = $('[data-js-simulation-csv="plan"]');
      $el_csv_plan.find('.m-formPulldown-list li').on('click', function (event) {
        var $el_list = $(this);

        var $el_type = $el_list.closest('[data-js-simulation-csv-plan]');
        var _type = $el_type.attr('data-js-simulation-csv-plan');
        var _data = $el_list.attr('data-js-csv');

        var _val = '';
        switch (_data) {
          case 'full':
            _val = objCSV_rate.full;
            break;
          case 'first':
            _val = objCSV_rate.first;
            break;
          case 'none':
            _val = objCSV_rate.none;
            break;
        }

        //値挿入
        var $el_rateYear = $el_csv_plan.closest('[data-js-simulation-csv="plan"]').find('[data-js-simulation="rateYear"]');
        $el_rateYear.text(_val);

        //金利結果表示
        $el_list.closest('[data-js-simulation-csv="plan"]').find('.m-limit-balloon').show();

        //バリデート
        var data = 'data-js-simulation-area';
        var value_id = $el.closest('[' + data + ']').attr(data);
        sbinetbk.simUtility.setParameter(value_id, 'rateYear', _val);
        var $el_type = $el_list.closest('[data-js-simulation-uniquewrap="rateYear"]').find('[data-js-simulation-csv="plan"]');
      });
    };

    return Rate;
  }();
}();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function () {

  /*
   * Validation
   */

  sbinetbk.simResult = function () {
    function Result(el) {

      this.target = $(el);

      // 初期化
      this.init();

      // イベント
      this.event();
    }

    /*
     * 初期化
     */
    Result.prototype.init = function () {};

    /*
     * イベント
     */
    Result.prototype.event = function () {
      var $el = this.target;

      $el.on('click', function (event) {

        //ローディング表示
        $(this).attr('disabled', 'disabled').append('<span class="is-loader">').find('>span').not('.is-loader').addClass('is-fade');

        //監視
        function start() {
          timer = setInterval(function () {
            if ($el.hasClass('is-load')) {
              $el.attr('disabled', false).removeClass('is-load').find('>span').not('.is-loader').removeClass('is-fade');
              $el.removeClass('is-error').find('.is-loader').remove();
              stop();
            } else {
              if ($el.parent().hasClass('is-error')) {
                $el.addClass('is-error').parent().removeClass('is-error').find('.is-loader').addClass('is-error is-active');
              } else {
                $el.parent().addClass('is-error').find('.is-loader').addClass('is-check is-active');
              }
              $el.addClass('is-load');
            }
          }, 2000);
        }
        function stop() {
          clearInterval(timer);
        }
      });
    };

    return Result;
  }();
}();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function () {

  /*
   * Utility
   */

  sbinetbk.simUtility = {
    /*
     * touchイベントが有効かを確認する
     * @return {boolean}
     */
    isTouch: function isTouch() {
      return 'ontouchstart' in window;
    },

    /*
     * touchmoveバリデーション発火
     * @return {boolean}
     */
    isTouchMove: function isTouchMove(value) {
      var w = $(window).scrollTop();
      var p = value.offset().top;
      if (p - w < 45) {
        return true;
      } else {
        return false;
      }
    },

    /*
     * 文字列からカンマを取り除く処理
     * @return {string}
     */
    getNumber: function getNumber(value) {
      return value.replace(/,/g, '');
    },

    /*
     * 全角を半角に変換
     * @return {string}
     */
    getHankaku: function getHankaku(value) {
      var value_half = value.replace(/[！-～]/g, function (tmpStr) {
        return String.fromCharCode(tmpStr.charCodeAt(0) - 0xFEE0);
      });
      return value_half.replace(/”/g, "\"").replace(/’/g, "'").replace(/‘/g, "`").replace(/￥/g, "\\").replace(/　/g, " ").replace(/〜/g, "~");
    },

    /*
     * 数値をカンマ区切りにして返す
     * @return {string}
     */
    getComma: function getComma(value) {
      value = this.getHankaku(value);
      return value.replace(/^(-?[0-9]+)(?=\.|$)/, function (s) {
        return s.replace(/([0-9]+?)(?=(?:[0-9]{3})+$)/g, '$1,');
      });
    },

    /*
     * 小数点の桁数を揃える
     * @return {string}
     */
    getFloatFix: function getFloatFix(value, num) {
      value = parseFloat(value);
      value = value.toFixed(num);
      return value;
    },

    /*
     * set input
     */
    setInput: function setInput(target, value) {
      var data = 'data-js-simulation-area';
      var value_id = target.closest('[' + data + ']').attr(data);
      var value_para = target.attr('data-js-simulation');
      var flg = sbinetbk.simInputParameter[value_id][value_para][0];
      if (value) {
        value = this.getHankaku(value);
        value = this.getNumber(value);
        var value_fix = this.getComma(value);
        target.val(value_fix);
        this.setValidateOK(target);
        this.setParameter(value_id, value_para, value);
      } else {
        this.setValidateNG(target, flg);
        this.setParameter(value_id, value_para, "");
      }
    },

    /*
     * set select
     */
    setSelect: function setSelect(target, value) {
      var data       = 'data-js-simulation-area';
      var value_id   = target.closest('[' + data + ']').attr(data);
      var value_para = target.attr('data-js-simulation');
      var flg        = sbinetbk.simInputParameter[value_id][value_para][0];

      if (value.indexOf("選択してください") >= 0 || value.indexOf("--") >= 0) {
        this.setValidateNG(target, flg);
        this.setParameter(value_id, value_para, "");
      } else {
        this.setValidateOK(target);
        this.setParameter(value_id, value_para, value);
      }
    },

    /*
     * set radio
     */
    setRadio: function setRadio(target, value) {
      var data = 'data-js-simulation-area';
      var value_id = target.closest('[' + data + ']').attr(data);
      var value_para = target.attr('data-js-simulation');
      this.setParameter(value_id, value_para, value);
    },

    /*
     * set pulldown
     */
    setPulldown: function setPulldown(target, value) {
      var data = 'data-js-simulation-area';
      var value_id = target.closest('[' + data + ']').attr(data);
      var value_para = target.attr('data-js-simulation');
      if (sbinetbk.simInputParameter[value_id][value_para]) {
        var flg = sbinetbk.simInputParameter[value_id][value_para][0];
        if (value != "") {
          this.setValidateOK(target);
          this.setParameter(value_id, value_para, value);
        } else {
          this.setValidateNG(target);
          this.setParameter(value_id, value_para, "");
        }
      } else {
        this.setValidateOK(target);
      }
    },

    /*
     * set バリデートOK
     */
    setValidateOK: function setValidateOK(target) {
      var _class_def = '.m-formWrap-data';
      var _class_plual = '.m-formWrapPlural-data';
      var _class_row = '.m-formRow-yen';
      var _plual = target.closest(_class_plual);
      var _row = target.closest(_class_row);

      var _class_fix = _class_def;
      if (_plual.length) {
        _class_fix = _class_plual;
      } else if (_row.length) {
        _class_fix = _class_row;
      }
      target.closest(_class_fix).removeClass('m-validateErr');
      target.closest(_class_fix).addClass('m-validateOK');
    },

    /*
     * set バリデートNG
     */
    setValidateNG: function setValidateNG(target, flg) {
      var _class_def = '.m-formWrap-data';
      var _class_plual = '.m-formWrapPlural-data';
      var _class_row = '.m-formRow-yen';
      var _plual = target.closest(_class_plual);
      var _row = target.closest(_class_row);

      var _class_fix = _class_def;
      if (_plual.length) {
        _class_fix = _class_plual;
      } else if (_row.length) {
        _class_fix = _class_row;
      }
      target.closest(_class_fix).removeClass('m-validateOK');
      if (flg) target.closest(_class_fix).addClass('m-validateErr');
    },

    /*
     * set パラメータ
     */
    setParameter: function setParameter(value_id, value_para, value) {
      if (sbinetbk.getFlgSimDebug) console.log(value_id, value_para, value);
      if (value_para in sbinetbk.simInputParameter[value_id]) {
        sbinetbk.simInputParameter[value_id][value_para][1] = value;
      }
    },

    /*
     * check validation
     */
    checkValidationAll: function checkValidationAll(value_id) {
      var counter = 0;
      var flg = true;
      for (key in sbinetbk.simInputParameter[value_id]) {
        var _flg = sbinetbk.simInputParameter[value_id][key][0];
        if (_flg && sbinetbk.simInputParameter[value_id][key][1] == "") {
          //エラー表示
          var _target = $('[data-js-simulation-area="' + value_id + '"] [data-js-simulation="' + key + '"]');

          //金利 判別
          var $el_rateYear = _target.closest('[data-js-simulation-uniquewrap="rateYear"]');
          var _len = $el_rateYear.length;
          if ($el_rateYear.length) {
            $el_rateYear.find('[data-js-simulation-csv="select"]').each(function (index, el) {
              var _wrap_state = $(this).closest('[data-js="formPulldownWrap"]').css('display');
              if (_wrap_state != "none") {
                var _txt = $(this).find('a').html();
                if (_txt.indexOf("選択してください") >= 0) {
                  $(this).closest('.m-formWrapPlural-data').addClass('m-validateErr');
                }
              }
            });
          } else {
            this.setValidateNG(_target, _flg);
          }

          //カウンター
          counter++;
        }
      }

      if (sbinetbk.getFlgSimDebug) console.log("counter:" + counter);
      if (counter) {
        //エラー
        flg = false;
      } else {
        //OK
        flg = true;
      }
      return flg;
    },

    /*
     * set result value simple
     */
    setResultValueSimple: function setResultValueSimple(element, id, value) {
      var data_output = 'data-js-simulation-output';
      var val = this.getComma(String(value));
      element.find('[' + data_output + '="' + id + '"]').text(val);
    },

    /*
     * set result value plain
     */
    setResultValuePlain: function setResultValuePlain(element, id, value) {
      var data_output = 'data-js-simulation-output';
      element.find('[' + data_output + '="' + id + '"]').text(value);
    },

    /*
     * set result value date
     */
    setResultValueDate: function setResultValueDate(element, id, value, type) {
      var data_output = 'data-js-simulation-output';
      var val_str = String(value);
      var val = '';
      var _year = val_str.substr(0, 4);
      var _month = val_str.substr(4, 2);
      var _month_fix = Number(_month);

      switch (type) {
        case 'year':
          val = _year + '年';
          break;
        case 'month':
          val = _year + '年' + _month_fix + '月';
          break;
        case 'day':
          var _day = val_str.substr(6, 2);
          var _day_fix = Number(_day);
          val = _year + '年' + _month_fix + '月' + _day_fix + '日';
          break;

      }
      element.find('[' + data_output + '="' + id + '"]').text(val);
    },

    /*
     * set result value time
     */
    setResultValueTime: function setResultValueTime(element, id, value, type) {
      var data_output = 'data-js-simulation-output';
      var val_str = String(value);
      var val = '';
      var _hour = val_str.substr(0, 2);
      var _minutes = val_str.substr(2, 2);

      switch (type) {
        case 'hour':
          val = _hour + '時';
          break;
        case 'minutes':
          val = _hour + ':' + _minutes;
          break;
        case 'second':
          var _second = val_str.substr(4, 2);
          val = _hour + ':' + _minutes + ':' + _second;
          break;

      }
      element.find('[' + data_output + '="' + id + '"]').text(val);
    },

    /*
     * APIレスポンスエラー 文字列挿入
     */
    setApiErrorStr: function setApiErrorStr(element, data, flg1st) {
      var $el = element;
      var obj = data.errorInfos;
      var source = "";
      for (key in obj) {
        var _data = obj[key].errorMessage;
        source = source + '<li>' + _data + '</li>';
      }

      //エラーメッセージ表示
      var _target = $el.closest('[data-js-simulation-area]').find('[data-js-simulation-msg="error"]');
      if (!_target.length){
        var _target_btn = $el.attr('data-js-simulation-resultbtn');

        if (typeof _target_btn === "undefined") {
          var _data_unique    = 'data-js-simulation-result-unique';
          var _target_area    = $el.closest('[data-js-simulation-result-unique]');
          var _target_area_id = _target_area.attr(_data_unique);
          _target             = $('[data-js-simulation-errormsg-cmn="' + _target_area_id + '"]');
        }
        else{
          _target = $('[data-js-simulation-errormsg="' + _target_btn + '"]');
        }
      }

      _target.addClass('m-sim-active');
      _target.find('ul').html(source);

      //エラー位置までスクロール
      if (!flg1st) this.doScrollError(_target);
    },

    /*
     * レスポンスエラー位置までスクロール
     */
    doScrollError: function doScrollError(element) {
      var _pos = element.offset().top;
      $("html,body").animate({ scrollTop: _pos - 30 }, 300);
    },

    /*
     * バリデートエラー位置までスクロール
     */
    doScrollValidationError: function doScrollValidationError(value) {
      var _pos;
      if (typeof value === 'undefined') {
        _pos = $('.m-validateErr:parent:first').offset().top;
      } else {
        _pos = $('[data-js-simulation-area="' + value + '"]').find('.m-validateErr:first').offset().top;
      }
      $("html,body").animate({ scrollTop: _pos - 20 }, 300);
    },

    /*
     * 結果位置までスクロール
     */
    doScrollResult: function doScrollResult(element) {
      var _pos = element.offset().top;
      $("html,body").animate({ scrollTop: _pos - 15 }, 300);
    },

    /*
     * ローディング完了
     */
    setLoadingComplete: function setLoadingComplete() {
      $('[data-js-simulation-loadingarea="loading"]').hide();
      $('[data-js-simulation-loadingarea="output"]').show();
    },

    /*
     * 離脱防止
     */
    setBreakaway: function setBreakaway() {
      $(window).on('beforeunload', function () {
        return 'この画面を離れると入力内容が無効になります。このまま移動しますか？';
      });

      // 対象外
      $('[data-js="breakaway"] a').on('click', function () {
        $(window).off('beforeunload');
      });
    },

    /*
     * get Unicode
     */
    getUnescapeUnicode: function getUnescapeUnicode(value) {
      return value.replace(/\\u([a-fA-F0-9]{4})/g, function (m0, m1) {
        return String.fromCharCode(parseInt(m1, 16));
      });
    },

    /*
     * set highcharts
     */
    doHighcharts: function doHighcharts(target, value) {
      options = {
        chart: {
          renderTo: target,
          zoomType: 'x'
        },
        title: { text: null },
        xAxis: {
          title: null,
          type: 'datetime',
          dateTimeLabelFormats: {
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%m/%e',
            week: '%m/%e',
            month: '%Y/%m',
            year: '%Y/%m'
          }
        },
        yAxis: {
          title: {
            text: null
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          area: {
            color: '#34d3fd',
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [[0, '#b1e9f7', Highcharts.getOptions().colors[0]], [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]]
            },
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            threshold: null
          }
        },
        tooltip: {
          xDateFormat: '%Y/%m/%d %H:%M:%S'
        },
        series: [{
          type: 'area',
          name: 'レート',
          data: value,
          animation: false
        }],
        credits: {
          enabled: false,
        },
      };
      chart = new Highcharts.Chart(options);
    }

  };
}();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function () {

  /*
   * Validation
   */

  sbinetbk.simValidation = function () {
    function Validation(el) {

      this.target = $(el);

      // 初期化
      this.init();

      // イベント
      this.event();
    }

    /*
     * 初期化
     */
    Validation.prototype.init = function () {};

    /*
     * イベント
     */
    Validation.prototype.event = function () {

      var element = this.target.context.localName;

      if (element == "input") {
        // input
        this.target.on('focus', function () {
          var $el = $(this);
          var _v = $el.val();
          var v = sbinetbk.simUtility.getNumber(_v);
          $el.val(v);
        }).on('blur', function () {
          var $el = $(this);
          var _v = $el.val();
          var v = sbinetbk.simUtility.getNumber(_v);
          sbinetbk.simUtility.setInput($el, v);
        });
      } else if (element == "select") {
        // select
        var _target = this.target;
        var _id = this.target.attr('id');
        var _id_btn = '#' + _id + '-button';
        var _id_menu = '#' + _id + '-menu';

        var flg = true;
        $(_id_btn).on('click', function (event) {
          var $el = $(this);
          if (flg) {
            flg = false;
            $(_id_menu).find('>li').on('click', function (event) {
              var $el_list = $(this);
              var _txt = $el_list.text();
              var _txt_fix = "";

              var $el_formSelect;
              if ($el.closest('.m-formSelect').length > 0) {
                $el_formSelect = $el.closest('.m-formSelect');
              } else if ($el.closest('.m-formSelectDate').length > 0) {
                $el_formSelect = $el.closest('.m-formSelectDate');
              }

              $el_formSelect.find('select option').each(function (index, el) {
                var $el_option = $(this);
                var _val_option = $el_option.text();
                if (_txt == _val_option) _txt_fix = $el_option.val();
              });
              sbinetbk.simUtility.setSelect(_target, _txt_fix);
            });
          }
        });

        // キーボード
        $(_id_btn).on('blur', function () {
          var $el = $(this);
          var _txt = $el.find('.ui-selectmenu-text').text();

          var _txt_fix = "";
          var $el_formSelect;
          if ($el.closest('.m-formSelect').length > 0) {
            $el_formSelect = $el.closest('.m-formSelect');
          } else if ($el.closest('.m-formSelectDate').length > 0) {
            $el_formSelect = $el.closest('.m-formSelectDate');
          }

          $el_formSelect.find('select option').each(function (index, el) {
            var $el_option = $(this);
            var _val_option = $el_option.text();
            if (_txt == _val_option) _txt_fix = $el_option.val();
          });

          sbinetbk.simUtility.setSelect(_target, _txt_fix);
        });
      }
      else if(this.target.hasClass('m-formRadio')){
        // radio
        var _target = this.target;
        var _name = _target.find('input').attr('name');
        var _state = _target.find('input:radio[name=' + _name + ']:checked').val();
        if (typeof _state === 'undefined') _state = "";
        sbinetbk.simUtility.setRadio(_target, _state);

        _target.find('input').on('click', function (event) {
          var $el = $(this);
          var _state = _target.find('input:radio[name=' + _name + ']:checked').val();
          sbinetbk.simUtility.setRadio(_target, _state);
        });
      }
      else if(this.target.hasClass('m-formPulldown')){
        // pulldown
        var _target = this.target;
        _target.find(".m-formPulldown-list li").on('click', function (event) {
          var _txt = $(this).attr('data-js-simulation-value');
          sbinetbk.simUtility.setPulldown(_target, _txt);
        });
      }
    };

    return Validation;
  }();
}();

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * simulation
 */
__webpack_require__(12);
__webpack_require__(9);
__webpack_require__(13);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(11);
__webpack_require__(10);

/***/ })
/******/ ]);
//# sourceMappingURL=common.js.map
