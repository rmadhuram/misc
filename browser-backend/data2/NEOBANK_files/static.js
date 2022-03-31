/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId]) {
/******/      return installedModules[moduleId].exports;
/******/    }
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.l = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };
/******/
/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };
/******/
/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };
/******/
/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports) {

module.exports = function () {

  //login
  var login = function () {

    // 変数：デバッグフラグ
    var DEBUG_MODE = false; //true:デバッグモード false:本番


    // 定数：cookie名
    var COOKIE_ID_PERSISTENT = 'NB_HALFLOGIN';
    var COOKIE_ID_SESSION = 'NB_LOGIN';

    // 定数：ログイン、ログアウトページURL
    var URL_LOGIN  = '/contents/pages/wpl010101/i010101CT/DI01010210';
    var URL_LOGOUT = '/contents/pages/wpl010001/i010001CT/DI01000100';

    // 定数：ログイン前、ログイン後 トップページURL
    var URL_TOP_AFTER = '/contents/pages/wpl010002/i010002CT/DI01000200';
    var URL_TOP_BEFORE = '/contents/';

    // 変数：要素
    var $body = $('body');
    var $header_logo = $('[data-js="headerLogo"]');
    var $header_login = $('[data-js="headerLogin"]');
    var $header_logout = $('[data-js="headerLogout"]');
    var $header_opening = $('[data-js="headerOpening"]');
    var $header_personal = $('[data-js="headerPersonal"]');
    var $navi_home = $('[data-js="naviLinkHome"]');
    var $topicpath_home = $('[data-js="topicpathHome"]');
    var $loginstatus_show_before = $('[data-js="loginStatusShow-before"]');
    var $loginstatus_show_after = $('[data-js="loginStatusShow-after"]');
    var $loginstatus_tab_before = $('[data-js="loginStatusTab-before"]');
    var $loginstatus_tab_after = $('[data-js="loginStatusTab-after"]');
    var $haveaccount_show_before = $('[data-js="haveAccountShow-before"]');
    var $haveaccount_show_after = $('[data-js="haveAccountShow-after"]');
    var $haveaccount_tab_before = $('[data-js="haveAccountTab-before"]');
    var $haveaccount_tab_after = $('[data-js="haveAccountTab-after"]');

    // 変数：Cookieの読み込み用クラス
    var CookieReader;

    // 変数：ログイン状態
    var loginStatus;

    /*
     * Cookieの読み込み用クラス
     */
    CookieReader = function () {
      function CookieReader(persistent, session) {
        this.name_persistent = persistent;
        this.name_session = session;
      }

      /*
       * initialize
       */
      CookieReader.prototype.initialize = function () {};

      /*
       * @param {string} cookieName
       * COOKIE_ID_PERSISTENT ログイン履歴
       * COOKIE_ID_SESSION ログインセッション
       *
       * @return {string} cookie名に対応する値
       */
      CookieReader.prototype.get = function (key) {
        var start, end;
        var tmp = document.cookie + ";";
        var keyposition = tmp.indexOf(key, 0);
        if (keyposition != -1) {
          tmp = tmp.substring(keyposition, tmp.length);
          start = tmp.indexOf("=", 0) + 1;
          end = tmp.indexOf(";", start);
          return unescape(tmp.substring(start, end));
        }
        return "";
      };

      /*
       * @return {boolean} ログイン履歴があるか
       */
      CookieReader.prototype.isPersistent = function () {
        var flg = this.get(COOKIE_ID_PERSISTENT) != "" ? true : false;
        return flg;
      };

      /*
       * @return {boolean} ログインセッションがあるか
       */
      CookieReader.prototype.isSession = function () {
        var flg = this.get(COOKIE_ID_SESSION) != "" ? true : false;
        return flg;
      };

      /*
       * @param {boolean} cookie値
       * COOKIE_ID_PERSISTENT ログイン履歴
       * COOKIE_ID_SESSION ログインセッション
       *
       * @return {string} cookie値に対応するログイン状態
       * logout ログイン前
       * login ログイン後
       * half ハーフログイン
       */
      CookieReader.prototype.getStatus = function (val_p, val_s) {
        var status;
        var str;
        var STR_LOGOUT = "logout";
        var STR_LOGIN = "login";
        var STR_HALH = "half";
        if (!val_p) {
          //ログイン履歴：なし
          switch (val_s) {
            case false:
              // 1C
              str = "1C";
              status = STR_LOGOUT;
              break;
            case true:
              // 3C
              str = "3C";
              status = STR_LOGOUT;
              // 異常系
              setExceptional();
              break;
          }
        } else {
          //ログイン履歴：あり
          switch (val_s) {
            case false:
              // 4C
              str = "4C";
              status = STR_HALH;
              break;
            case true:
              // 12C
              str = "12C";
              status = STR_LOGIN;
              break;
          }
        }

        trace("処理No : " + str);

        return status;
      };

      /*
       * トップ
       * @param {boolean} cookie値
       * COOKIE_ID_PERSISTENT ログイン履歴
       * COOKIE_ID_SESSION ログインセッション
       *
       * @return {string} cookie値に対応するログイン状態
       * logout ログイン前
       * login ログイン後
       * half ハーフログイン
       */
      CookieReader.prototype.getStatusTop = function (val_p, val_s) {
        var status;
        var str;
        var STR_LOGOUT = "logout";
        var STR_LOGIN = "login";
        var STR_HALH = "half";
        if (!val_p) {
          //ログイン履歴：なし
          switch (val_s) {
            case false:
              // 1A
              str = "1A";
              status = STR_LOGOUT;
              break;
            case true:
              // 3A
              str = "3A";
              status = STR_LOGOUT;
              // 異常系
              setExceptional();
              break;
          }
        } else {
          //ログイン履歴：あり
          switch (val_s) {
            case false:
              // 4A
              str = "4A";
              status = STR_HALH;
              break;
            case true:
              // 12A
              str = "12A";
              status = STR_LOGIN;
              break;
          }
        }

        trace("処理No : " + str);

        return status;
      };

      return CookieReader;
    }();

    /*
     * セット イベント
     */
    function setEvent() {
      //ログイン処理
      $header_login.on('click', function (e) {
        e.preventDefault();
        trace('click Login');
        doLogin();
      });

      //ログアウト処理
      $header_logout.on('click', function (e) {
        e.preventDefault();
        trace('click Logout');
        doLogout();
      });
    }

    /*
     * ログインボタン押下
     */
    function doLogin() {
      //loginStatus
      trace("割り込みログイン処理");
      location.href = URL_LOGIN;
    }

    /*
     * ログアウトボタン押下
     */
    function doLogout() {
      trace("ログアウト処理");
      location.href = URL_LOGOUT;
    }

    /*
     * ログアウト処理
     */
    function setLogout() {
      $body.addClass('logout');
      $header_logout.hide();
      $header_personal.hide();
      $header_login.show();
      $header_opening.show();
      $loginstatus_show_before.show();
      $loginstatus_show_after.hide();
      var t_tabClickValidateFlag = setInterval(function() { if (typeof tabClickValidateFlag !== 'undefined') {
        $loginstatus_tab_before.click();
      clearInterval(t_tabClickValidateFlag);}}, 500);
    }

    /*
     * ログイン処理
     */
    function setLogin() {
      $body.addClass('login');
      $header_logout.show();
      $header_personal.show();
      $header_login.hide();
      $header_opening.hide();
      $loginstatus_show_before.hide();
      $loginstatus_show_after.show();
      var t_tabClickValidateFlag = setInterval(function() { if (typeof tabClickValidateFlag !== 'undefined') {
        $loginstatus_tab_after.click();
      clearInterval(t_tabClickValidateFlag);}}, 500);
    }

    /*
     * トップページへのリンク先変更
     * @param {str} 
     * login,logout,half
     */
    function setTopLink(str) {
      var url = str == "login" ? URL_TOP_AFTER : URL_TOP_BEFORE;
      $header_logo.attr('href', url);
      $navi_home.attr('href', url);
      $topicpath_home.attr('href', url);
    }

    /*
     * ページ内表示要素
     * @param {str} 
     * login,logout,half
     */
    function setShowElement(str) {
      //ページ内表示要素
      if (str == "half" || str == "login") {
        //口座未開設ユーザ向け情報の非表示
        $haveaccount_show_before.hide();
        $haveaccount_show_after.show();
        $haveaccount_tab_after.click();
      } else {
        //全要素表示
        $haveaccount_show_before.show();
        $haveaccount_show_after.hide();
        $haveaccount_tab_before.click();
      }
    }

    /*
     * トップページ コンテンツ内 ログインボタン状態
     * @param {str} 
     * login,logout,half
     */
    function setTopShowLoginBtn(str) {
      var $el_before = $('[data-js="top-haveaccount-before"]');
      var $el_after = $('[data-js="top-haveaccount-after"]');
      if (str == "half") {
        // ログインボタン表示
        $el_before.hide();
        $el_after.show();
      } else {
        // 新規
        $el_after.hide();
        $el_before.show();
      }
    }

    /*
     * 異常系処理
     */
    function setExceptional() {
      trace("-- 異常系 --");
    }

    /*
     * コンソール
     */
    function trace(str) {
      if (DEBUG_MODE) console.log(str);
      // console.log(str)
    }

    /* *********************************
    * スタート
    * ********************************* */
    // ▼ ----- デバッグ用 ----- ▼
    if (DEBUG_MODE) {
      trace("*********** ログイン判定 デバッグモード ***********");
      var debug_mode = function () {
        var Cookie = {
          setCookie: function setCookie(key, val) {
            var tmp = key + "=" + escape(val) + ";";
            time = new Date();
            time.setTime(time.getTime() + 60 * 60 * 24 * 1000);
            timeSet = "expires=" + time.toGMTString();
            document.cookie = tmp + timeSet;
            return true;
          }, delCookie: function delCookie(key) {
            var date = new Date('1999-12-31T23:59:59Z');
            date.setTime(0);
            document.cookie = key + "=;expires=" + date.toGMTString();
            return true;
          }
        };

        //URLからテスト用データ取得
        var objPara = {};
        var url_para = location.search.substring(1).split('&');
        for (var i = 0; url_para[i]; i++) {
          var data = url_para[i].split('=');
          objPara[data[0]] = data[1];
        }

        // set cookie ログイン履歴
        var _login_persistent = objPara.login_persistent;

        if (_login_persistent == "1") {
          trace("ログイン履歴 : あり");
          Cookie.setCookie(COOKIE_ID_PERSISTENT, _login_persistent);
        } else {
          trace("ログイン履歴 : なし");
          Cookie.delCookie(COOKIE_ID_PERSISTENT);
        }

        // set cookie ログインセッション
        var _login_session = objPara.login_session;
        if (_login_session == "1") {
          trace("ログインセッション : あり");
          Cookie.setCookie(COOKIE_ID_SESSION, _login_session);
        } else {
          trace("ログインセッション : なし");
          Cookie.delCookie(COOKIE_ID_SESSION);
        }
      }();
    }
    // ▲ ----- デバッグ用 ----- ▲

    //init
    var cookiereader = new CookieReader();

    //ログイン履歴の有無
    var val_p = cookiereader.isPersistent();
    // trace(val_p)

    //ログインセッションの有無
    var val_s = cookiereader.isSession();
    // trace(val_s)

    //値をグローバル変数に挿入
    sbinetbk.setCookie(val_p, val_s);

    //トップページ以外の処理
    window.addEventListener('load', function () {
      //event
      setEvent();

      var _flg = sbinetbk.getFlgTop.flg;
      if (!_flg) {
        trace("ページ属性 : トップ以外");

        //ログイン状態
        var status = cookiereader.getStatus(val_p, val_s);
        trace("ログイン状態 : " + status);

        switch (status) {
          case "logout":
            // ログイン前
            setLogout();
            break;
          case "half":
            // ハーフログイン
            setLogout();
            break;
          case "login":
            // ログイン後
            setLogin();
            break;
          default:
            // ログイン前
            setLogout();
        }

        //set ログイン状態
        loginStatus = status;

        //トップページのリンク先変更
        setTopLink(loginStatus);

        //ページ内表示要素
        setShowElement(loginStatus);
      } else {
        trace("ページ属性：トップ");

        //ログイン状態
        var status = cookiereader.getStatusTop(val_p, val_s);
        trace("ログイン状態 : " + status);

        switch (status) {
          case "logout":
            // ログイン前
            setLogout();
            break;
          case "half":
            // ハーフログイン
            setLogout();
            break;
          case "login":
            // ログイン後
            // ログ後トップへリダイレクト
            location.href = URL_TOP_AFTER;
            break;
          default:
            // ログイン前
            setLogout();
        }

        //set ログイン状態
        loginStatus = status;

        //トップページのリンク先変更
        setTopLink(loginStatus);

        //トップページ コンテンツ内 ログインボタン状態
        setTopShowLoginBtn(loginStatus);
      }
    });
  }();
}();

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {

  var TableScrollFix = function () {
    function TableScrollFix(element) {
      _classCallCheck(this, TableScrollFix);

      this.target = $(element);
      this.target_h = this.target.outerHeight();
      this.target_head = this.target.find('.m-head');
      this.target_head_h = this.target_head.height();
      this.target_body = this.target.find('tbody');
      this.win = $(window);

      this.init();
      this.layout();
      this.position();
      this.event();

      this.arrW = [];
    }

    _createClass(TableScrollFix, [{
      key: 'init',
      value: function init() {
        var head_clone = this.target.find("thead").clone();
        head_clone.addClass('m-head');
        this.target.find('table').append(head_clone);
        this.target_head = this.target.find('.m-head');
      }

      // セル幅指定

    }, {
      key: 'layout',
      value: function layout() {
        this.target_h = this.target.outerHeight();
        var window_w = window.innerWidth;
        if (window_w < 560) {
          //SP
          this.target.addClass('m-tblScroll-headfix');

          //ヘッダー高さ
          this.target_head_h = this.target_head.height();

          //全体幅
          var body_w = this.target_body.outerWidth();
          if (body_w != "0") this.target_head.css('width', body_w + 'px');

          //セル幅
          var arrW = [];
          this.target.find('tbody tr').eq(0).children().each(function (index, el) {
            var $el = $(el);
            var _t = $el.outerWidth();
            arrW.push(_t);
          });
          this.arrW = arrW;

          var count = 0;
          this.target.find('thead.m-head tr').children().each(function (index, el) {
            var $el = $(el);
            var colspan = $el.attr('colspan');
            if (typeof colspan === 'undefined') {
              colspan = 0;
              if (arrW[count] != "0") $el.css('width', arrW[count] + 'px');
              count++;
            }
          });
        } else {
          //解除
          this.target.removeClass('m-tblScroll-headfix');
          this.target_head.css('width', 'auto');
          this.target.find('thead.m-head tr').children().each(function (index, el) {
            $(el).css('width', 'auto');
          });
        }
      }

      // 位置固定

    }, {
      key: 'position',
      value: function position() {
        var win_top = $(window).scrollTop();
        var target_top = parseInt(this.target.offset().top);
        if (win_top >= target_top) {
          var diff = win_top - target_top - 2;
          this.target_head.css('top', diff + 'px');
          this.target_head.addClass("m-fix");
          if (win_top >= target_top + this.target_h - this.target_head_h - 10) {
            this.target_head.css('top', '0px');
            this.target_head.removeClass("m-fix");
          }
        } else {
          this.target_head.css('top', '0px');
          this.target_head.removeClass("m-fix");
        }
      }
    }, {
      key: 'event',
      value: function event() {
        var _this = this;

        this.win.on('resize', function () {
          _this.layout();
        });
        this.win.on('scroll', function () {
          _this.layout();
          _this.position();
        });
      }
    }]);

    return TableScrollFix;
  }();

  //インスタンス化
  $('[data-js="tableScrollFix"]').each(function () {
    var tablescrollfix = new TableScrollFix(this);
  });
}();

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

window.sbinetbk = function () {
  var objCookie = {};
  var flgTop = { 'flg': false };

  //simulation
  var SIM_DEBUG_MODE = false; //true:デバッグモード false:本番

  // SIM_PATH_DOMAIN 用。
  // true: デバッグモード。false: 本番。
  var SIM_PATH_DEBUG_MODE = false;

  var SIM_MSG_API_ERR = 'データを取得できませんでした。時間をおいてから再度ご確認ください。';
  var SIM_MSG_API_ERR_RATE = 'レートのデータを取得できませんでした。 <br>時間をおいてから再度ご確認ください。';
  var SIM_MSG_API_ERR_CHART = 'チャートのデータを取得できませんでした。<br>時間をおいてから再度ご確認ください。';

  var SIM_PATH_DOMAIN      = SIM_PATH_DEBUG_MODE ? '/api?u=/' : '/wpl/NBGate/';
  var SIM_PATH_DOMAIN_RATE = SIM_PATH_DEBUG_MODE ? '/api?u=/' : getGaikaRateApiUrl();

  var SIM_CHART_BAR = 5;
  var SIM_CHART_PERIOD = 60;

  var simUtility = {};
  var simAjax = {};
  var simAjaxRate = {};
  var simValidation;
  var simResult;
  var simRate;
  var simLoading;
  var simInputParameter = {};

  return {
    setCookie: function setCookie(val_p, val_s) {
      objCookie.persistent = val_p;
      objCookie.session = val_s;
    },
    getCookie: objCookie,
    setFlgTop: function setFlgTop() {
      flgTop.flg = true;
    },
    getFlgTop: flgTop,
    getFlgSimDebug: SIM_DEBUG_MODE,
    getMsgApiErr: SIM_MSG_API_ERR,
    getMsgApiErrRate: SIM_MSG_API_ERR_RATE,
    getMsgApiErrChart: SIM_MSG_API_ERR_CHART,
    getPathDoman: SIM_PATH_DOMAIN,
    getPathDomanRate: SIM_PATH_DOMAIN_RATE,
    getChartBar: SIM_CHART_BAR,
    getChartPeriod: SIM_CHART_PERIOD
  };
}.call(this);
__webpack_require__(14);
__webpack_require__(15);

/***/ })

/******/ });
//# sourceMappingURL=static.js.map
