/******/ (function(modules) { // webpackBootstrap
/******/   // The module cache
/******/   var installedModules = {};
/******/
/******/   // The require function
/******/   function __webpack_require__(moduleId) {
/******/
/******/     // Check if module is in cache
/******/     if(installedModules[moduleId]) {
/******/       return installedModules[moduleId].exports;
/******/     }
/******/     // Create a new module (and put it into the cache)
/******/     var module = installedModules[moduleId] = {
/******/       i: moduleId,
/******/       l: false,
/******/       exports: {}
/******/     };
/******/
/******/     // Execute the module function
/******/     modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/     // Flag the module as loaded
/******/     module.l = true;
/******/
/******/     // Return the exports of the module
/******/     return module.exports;
/******/   }
/******/
/******/
/******/   // expose the modules object (__webpack_modules__)
/******/   __webpack_require__.m = modules;
/******/
/******/   // expose the module cache
/******/   __webpack_require__.c = installedModules;
/******/
/******/   // identity function for calling harmony imports with the correct context
/******/   __webpack_require__.i = function(value) { return value; };
/******/
/******/   // define getter function for harmony exports
/******/   __webpack_require__.d = function(exports, name, getter) {
/******/     if(!__webpack_require__.o(exports, name)) {
/******/       Object.defineProperty(exports, name, {
/******/         configurable: false,
/******/         enumerable: true,
/******/         get: getter
/******/       });
/******/     }
/******/   };
/******/
/******/   // getDefaultExport function for compatibility with non-harmony modules
/******/   __webpack_require__.n = function(module) {
/******/     var getter = module && module.__esModule ?
/******/       function getDefault() { return module['default']; } :
/******/       function getModuleExports() { return module; };
/******/     __webpack_require__.d(getter, 'a', getter);
/******/     return getter;
/******/   };
/******/
/******/   // Object.prototype.hasOwnProperty.call
/******/   __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/   // __webpack_public_path__
/******/   __webpack_require__.p = "";
/******/
/******/   // Load entry module and return exports
/******/   return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function () {

  //header
  var header = function () {

    var window_w = window.innerWidth;
    var SWITCH_SIZE = 820;
    var SPEED = 300;
    var flgNavi = true;
    var navi_now = 0;
    var navi_pre = 0;

    //append
    var source_over = '<div class="navi-overlay" data-js="naviClose"></div>';
    $('body').append(source_over);

// navi current
naviCurrent = function () {
  var current_path_home = new Array(
    '/contents/',
    '/contents/pages/wpl010002/i010002CT/DI01000200?CallerScreen=1'
  );
  var current_path_koza = new Array(
    '/contents/pages/wpl020101/i020101CT/DI02010100?CallerScreen=2',
    '/contents/pages/wpl020101A/i020101CT/DI02010105',
    '/contents/pages/wpl020201/i020201CT/DI02020100',
    '/contents/pages/wpl020301/i020301CT/DI02030000',
    '/contents/pages/wpl021501/i021501CT/DI02140100',
    '/contents/pages/wpl021103/i021103CT/DI02110300?CallerScreen=2',
    '/contents/lineup/purpose/',
    '/contents/pages/wpl040102/i040102CT/DI04010100?CallerScreen=2',
    '/contents/pages/wpl040106/i040106CT/DI04010900?CallerScreen=2',
    '/contents/pages/wpl040201/i040201CT/DI04020100?CallerScreen=2',
    '/contents/lineup/jido-furikomi/',
    '/contents/lineup/koufuri/',
    '/contents/lineup/sokuji/',
    '/contents/pages/wpl040112/i040112CT/DI04011200?CallerScreen=2',
    '/contents/lineup/jido-nyukin/',
    '/contents/lineup/salary/',
    '/contents/lineup/nenkin/',
    '/contents/lineup/point/',
    '/contents/deposit-withdraw/',
    '/contents/atm/',
    '/contents/pages/wpl020401/i020401CT/DI02000100?CallerScreen=2',
    '/contents/pages/wpl020601/i020601CT/DI02060100',
    '/contents/pages/wpl030901/i030901CT/DI03090100',
    '/contents/pages/wpl200601/i200601CT/DI20060000?ntcType=3',
    '/contents/pages/wpl200301/i200301CT/DI20030000?CallerScreen=2',
    '/contents/pages/wpl020701/i020701CT/DI02070100'
  );
  var current_path_kinri = new Array(
    '/contents/kinri-',
    '/contents/charge-'
  );
  var current_path_lineup = new Array(
    '/contents/lineup/'
  );
  var current_path_campaign = new Array(
    '/contents/campaign/'
  );
  var current_path_support = new Array(
    '/contents/support/'
  );

  var pathname = location.pathname + location.search;

  var current_flag = false; // カレントがひとつ合致した時点でtrueとしてループ処理をしない
  var i = 0;

  // カレントをリセット
  $('nav > ul > li > a').removeClass('current');

  // HOME
  do {
    if (pathname == current_path_home[i]) {
      $(document).find('nav > ul > li.home > a').addClass('current');
      current_flag = true;
      break;
    }
    i++;
  } while (i < current_path_home.length && current_flag == false);

  // 口座情報・入出金
  i = 0;
  while (i < current_path_koza.length && current_flag == false) {
    if (pathname.indexOf(current_path_koza[i]) >= 0) {
      $(document).find('nav > ul > li.koza > a').addClass('current');
      current_flag = true;
      break;
    }
    i++;
  }

  // 金利・手数料
  i = 0;
  while (i < current_path_kinri.length && current_flag == false) {
    if (pathname.indexOf(current_path_kinri[i]) >= 0) {
      $(document).find('nav > ul > li.kinri > a').addClass('current');
      current_flag = true;
      break;
    }
    i++;
  }

  // 商品・サービス
  i = 0;
  while (i < current_path_lineup.length && current_flag == false) {
    if (pathname.indexOf(current_path_lineup[i]) >= 0) {
      $(document).find('nav > ul > li.lineup > a').addClass('current');
      current_flag = true;
      break;
    }
    i++;
  }

  // キャンペーン
  i = 0;
  while (i < current_path_campaign.length && current_flag == false) {
    if (pathname.indexOf(current_path_campaign[i]) >= 0) {
      $(document).find('nav > ul > li.campaign > a').addClass('current');
      current_flag = true;
      break;
    }
    i++;
  }

  // お問合せ・ご案内
  i = 0;
  while (i < current_path_support.length && current_flag == false) {
    if (pathname.indexOf(current_path_support[i]) >= 0) {
      $(document).find('nav > ul > li.support > a').addClass('current');
      current_flag = true;
      break;
    }
    i++;
  }

};
naviCurrent();

    // navi
    $('[data-js="headerNavi"] > a').click(function (e) {
      e.preventDefault();
      if (!flgNavi) return false;
      var _index = $(this).closest('li').index();
      navi_now = _index;
      flgNavi = false;
      if (window_w >= SWITCH_SIZE) {
        $('nav .list-2nd').stop().fadeOut(200);
        if (navi_pre != 0 && navi_pre != navi_now && $('.naviWrap').hasClass('open')) {
          //そのまま
        } else {
          //変更
          $('.naviWrap').toggleClass('open');
          $('html').toggleClass('navi-open');
          // $('.navi-overlay').toggle();
        }
      }
      $(this).closest('li').toggleClass('open');
      $(this).closest('li').find('.list-2nd').stop().slideToggle(SPEED, function () {
        flgNavi = true;
      });
      navi_pre = navi_now;
    });

    // navi 2nd
    $('[data-js="headerNavi2nd"]').click(function (e) {
      e.preventDefault();
      if (window_w < SWITCH_SIZE) {
        $(this).closest('li.box').stop().toggleClass('open');
        $(this).closest('li.box').find('.list').stop().slideToggle(SPEED);
      }
    });

    // navi close
    $('[data-js="naviClose"]').click(function (e) {
      e.preventDefault();
      $('.listWrap').removeClass('open');
      $('.list-2nd').stop().slideUp(SPEED);
      $('.naviWrap').removeClass('open');
      $('html').removeClass('navi-open');
      // $('.navi-overlay').hide();
      // navi_now = 0;
    });

    // navi SP
    $('[data-js="headerNaviSP"]').click(function (e) {
      e.preventDefault();
      $(this).stop().toggleClass('close');
      $('.naviWrap').stop().slideToggle(SPEED);
      $('header').toggleClass('open');
      $('html').toggleClass('noscroll');
      $('html').toggleClass('navi-open');
    });

    // resize
    var pre = 0;
    $(window).on('load resize', function () {
      var now = 0;
      window_w = window.innerWidth;
      now = window_w;

      var $naviWrap = $('.naviWrap');

      if ($('body').hasClass('login')) $('.headerPersonal').show();
      if (now >= SWITCH_SIZE && pre < SWITCH_SIZE) {
        //PC
        $naviWrap.show();
        $('.list-2nd').find('.list').show();
        setNavi();
      } else if (pre >= SWITCH_SIZE && now < SWITCH_SIZE) {
        //SP
        $naviWrap.hide();
        $('.headerSublink').show();
        $('.headerSearch').removeClass('open');
        $('.headerSearch').removeClass('close');
        $('.list-2nd').find('.list').hide();
        $('.naviWrap').removeClass('open');
        // $('html').removeClass('navi-open');
        // $('.navi-overlay').hide();
        setNavi();
      }
      pre = now;
    });
    function setNavi() {
      $('[data-js="headerNaviSP"]').find('span').removeClass('close');
      $('.list-2nd').find('li.box').removeClass('open');
      $('header').removeClass('open');
      $('[data-js="headerNaviSP"]').removeClass('close');
      $('html').removeClass('noscroll');
      $('html').removeClass('navi-open');
      $('.list-2nd').hide();
      $('nav').find('.listWrap').removeClass('open');
    }

    // headerSearch
    var headerSearch = function () {
      var flgShow = false;
      $('[data-js="headerSearchOpen"]').on('click', function (e) {
        e.preventDefault();
        var $e = $(this);
        var _flg = $e.closest('.headerSearch').hasClass('open');
        if (_flg || window_w < SWITCH_SIZE) {
          var val = document.getElementById('SS_searchQuery').value;
          if (val != "") document.SS_searchForm.submit();
        }
        if (window_w >= SWITCH_SIZE) {
          setOpen($e);
        }
      });
      $('[data-js="headerSearchClose"]').on('click', function (e) {
        e.preventDefault();
        var $e = $(this);
        if (window_w >= SWITCH_SIZE) {
          if ($('body').hasClass('login')) $('.headerPersonal').stop().delay(200).fadeIn(200);
          $('.headerSublink').stop().delay(200).fadeIn(200);
          $e.closest('.headerSearch').addClass('close');
          $e.closest('.headerSearch').removeClass('open');
        }
      });

      function setOpen(e) {
        if ($('body').hasClass('login')) $('.headerPersonal').stop().fadeOut(100);
        $('.headerSublink').stop().fadeOut(100);
        e.closest('.headerSearch').addClass('open');
        e.closest('.headerSearch').removeClass('close');
      }

      // headerSearch タブ移動対応
      var flgInput = true;
      var transitionEndEvents = ['webkitTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'transitionend'];
      var animEnd = transitionEndEvents.join(' ');
      $('.headerSearch-input').on(animEnd, function () {
        flgInput = true;
      });
      $('[data-js="headerSearchInput"]').focus(function () {
        if (flgInput) {
          var _$e = $('[data-js="headerSearchOpen"]');
          if (window_w >= SWITCH_SIZE) {
            setOpen(_$e);
          }
        }
        flgInput = false;
      }).blur(function () {
        if (flgInput) $('[data-js="headerSearchClose"]').click();
        flgInput = false;
      });
    }();
  }();
}();

/***/ }),
/* 1 */
/***/ (function(module, exports) { module.exports = function () {}}),
/* 2 */
/***/ (function(module, exports) {

module.exports = function () {

  // テキスト入力
  $('[data-js="formInput"]').focus(function () {
    $(this).closest('.m-formWrap-data').find('.m-help-balloon').stop().slideDown('500');
  }).blur(function () {
    $(this).closest('.m-formWrap-data').find('.m-help-balloon').stop().slideUp('500');
  });
  $('[data-js="formInputPlural"]').focus(function () {
    $(this).closest('.m-formWrapPlural-data').find('.m-help-balloon').stop().slideDown('500');
  }).blur(function () {
    $(this).closest('.m-formWrapPlural-data').find('.m-help-balloon').stop().slideUp('500');
  });

  // ラジオボタン
  $('[data-js="formRadio"]').on('click', function () {
    var _index = $(this).closest('li').index();
    $(this).closest('ul').find('label').each(function (i) {
      $(this).removeClass('m-icon-radio_off');
      $(this).removeClass('m-icon-radio_on');
      if (i == _index) {
        $(this).closest('ul').find('li').eq(i).find('label').addClass('m-icon-radio_on');
      } else {
        $(this).closest('ul').find('li').eq(i).find('label').addClass('m-icon-radio_off');
      }
    });
  });

  // チェックボックス
  $('[data-js="formCheckbox"]').on('click', function () {
    var _id = $(this).attr('id');
    var $el = $('[for="' + _id + '"]');
    if ($(this).is(':checked')) {
      $el.removeClass('m-icon-check_off');
      $el.addClass('m-icon-check_on');
    } else {
      $el.removeClass('m-icon-check_on');
      $el.addClass('m-icon-check_off');
    }
  });

  // バリデートエラー
  $('[data-js="validateErrClose"]').on('click', function () {
    $(this).closest('.m-validateErr-balloon').fadeOut(200);
  });

  // プルダウン
  var formPulldown = function () {
    $('[data-js="formPulldownWrap"]').each(function (index, el) {
      var count = 0;
      $(this).find('[data-js="formPulldown"]').click(function () {
        var $el = $(this).closest('.m-formPulldown');
        var isOpen = $el.hasClass('m-open');
        closeformPullDown();
        if (!isOpen) {
          var $list = $('.m-formPulldown-list', $el);
          var h = 0;
          $list.height(0).show();
          $('li', $list).each(function (i) {
            if (i === 5) return false;
            h += $(this).outerHeight();
          });
          $el.addClass('m-focus m-open');
          $list.scrollTop(0).animate({ height: h });
          //keyboard
          var max = $el.find('.m-formPulldown-list li').length;
          $('html').keyup(function (e) {
            switch (e.which) {
              case 38:
                // 上
                count--;
                break;
              case 40:
                // 下
                count++;
                break;
            }
            if (count < 0) {
              count = 0;
            } else if (count > max) {
              count = max;
            }

            $el.find('.m-formPulldown-list a').eq(count).focus();
          });
        }
        return false;
      });
      $(this).find('[data-js="formPulldownData"]').find('>li > a').click(function (e) {
        e.preventDefault();
        var _data = $(this).html();
        $(this).closest('.m-formPulldown').find('.m-fix > a').html(_data);
        closeformPullDown();
      });
      $(document).on('click', function (evt) {
        if (!$(evt.target).closest('[data-js="formPulldownWrap"]').length) {
          //プルダウン 閉じる
          closeformPullDown();
        }
      });
    });

    //プルダウン 閉じる
    function closeformPullDown() {
      $('.m-formPulldown.m-open').each(function () {
        var $el = $(this);
        $el.removeClass('m-open m-focus');
        $('.m-formPulldown-list', $el).slideUp(200);
      });
    }
  }();

  // 絞り込み・並び替え
  $('[data-js="sortPulldown"]').click(function () {
    $(this).toggleClass('m-open');
    var _data = $(this).closest('.m-ctsSortPulldown').find('.m-ctsSortPulldown-data');
    _data.slideToggle(400, function () {
      $(this).closest('.m-ctsSortPulldown').find('select').selectmenu('refresh');
    });
    if ($(this).hasClass('m-open')) {
      $(this).find('.m-def-state').text('閉じる');
    } else {
      $(this).find('.m-def-state').text('開く');
    }
    return false;
  });

  // 横棒グラフ
  var graphHorizontalBar = function () {
    $('[data-js="graphHorizontalBar"]').each(function () {
      var $bar = $(this);
      var dataL = $bar.find('.m-ctsGraphHorizontalBar-data-l .m-txtEx').text();
      var dataR = $bar.find('.m-ctsGraphHorizontalBar-data-r .m-txtEx').text();
      var $barL = $bar.find('.m-ctsGraphHorizontalBar-image-l');
      var $barR = $bar.find('.m-ctsGraphHorizontalBar-image-r');
      dataL = parseInt(dataL.replace(/,/g, ""));
      dataR = parseInt(dataR.replace(/,/g, ""));
      var sum = dataL + dataR;
      var dataL_per = dataL / sum * 100;
      var dataR_per = 100 - dataL_per;
      $barR.animate({ 'width': dataR_per + '%' }, 1500);
      $barL.animate({ 'width': dataL_per + '%' }, 1500);
      var offset = $(this).offset().top;
      var windowHeight = $(window).height();
    });
  }();

  // テーブル SP縦積み 複数ヘッダー
  var tableExV = function () {
    $('[data-js="tableExV"]').each(function () {
      var $el = $(this);
      var aryData = [];
      //項目取得
      $el.find('tr.m-tblExV-h th').each(function (index) {
        var data = $(this).text();
        if (index != 0) aryData.push(data);
      });
    });
  }();

  //カレンダー
  $.datepicker.setDefaults({
    // 日本語へローカライズ
    closeText: '閉じる',
    prevText: '<前',
    nextText: '次>',
    currentText: '今日',
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
    dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
    weekHeader: '週',
    dateFormat: 'yy/mm/dd',
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '年',
    // カレンダーを月曜始まりにする
    // firstDay: 1,
    // 年月をプルダウン選択にする
    changeYear: true,
    changeMonth: true,

    inline: true
  });

  // cookie有効判別
  var checkCookie = function () {
    function setCookie(cookieName, value) {
      $.cookie(cookieName, value);
    }
    function getCookie(cookieName) {
      var c = $.cookie();
      var str = '';
      for (key in c) {
        if (key === cookieName) {
          str = c[key];
        }
      }
      return str;
    }
    setCookie('check_cookie', true);
    var val = getCookie('check_cookie');

    if (!val) {
      var source = '<p class="m-noCookie">当サイトをご利用になるためには、Cookie対応のブラウザが必要です。また、設定でCookieを有効にする必要があります。</p>';
      $('body').prepend(source);
    }
  }();

  // セレクトボックス
  function onOpenSelectMenu(event, ui) {
    var rect = event.currentTarget.getBoundingClientRect();
    var wh = $(window).height();
    var $el = $(event.target).selectmenu('menuWidget');
    $el.css('max-height', wh - rect.top - 50);
  }
  $('.m-formSelect select').selectmenu({ open: onOpenSelectMenu, position: { at: 'left top' } });
  $('select', '.m-select-year').selectmenu({ open: onOpenSelectMenu, position: { at: 'left-15 bottom' } });
  $('select', '.m-select-month').selectmenu({ open: onOpenSelectMenu, position: { at: 'left-15 bottom' }, width: 40 });
  $('select', '.m-select-day').selectmenu({ open: onOpenSelectMenu, position: { at: 'left-15 bottom' }, width: 70 });

  // 郵便番号
  $('[data-js="zip"] input').on('keyup', function () {
    $(this).next('.m-formZipcode-candidates').show();
  });

  // 高さ揃え
  $(function () {
    function boxHeight() {
      var $boxHeight = $('[data-js="boxHeight"]');
      $boxHeight.each(function () {
        var display = $(this).css('display');
        var $item = $(this).find('[data-js="boxHeight-item"]');
        var num = $item.length;
        var max = 0;

        $item.css('height', 'auto');
        if (display !== 'block') {
          for (var i = 0; i < num; i++) {
            max = Math.max(max, $item.eq(i).height());
          }
          $item.height(max);
        }
      });
    }
    $(window).on('load resize', function () {
      boxHeight();
    });
    $(document).on('click', '[data-js="accd-ttl"] > a', function () {
     setTimeout(function(){
      boxHeight();
     });
    });
  });

  // スイッチエリア
  var switchArea = function () {

    var $switcharea = '[data-js="switchArea"]';
    var CLASS_R = 'm-switch-r';
    var CLASS_CHECKED = 'm-ctsAccountList-all-checked';

    $('[data-js="switchArea"]').each(function () {
      var $el = $(this);
      var aryTxt = [];

      // set data
      $el.find('.m-ctsAccountList-btn-txt').each(function () {
        aryTxt.push($(this).text());
      });

      // init
      $el.find('.m-ctsAccountList-btn-knob').text(aryTxt[0]);

      // event button
      $el.find('.m-ctsAccountList-btn').on('click', function () {
        var $el_btn = $(this);

        var num = !$el_btn.closest($switcharea).hasClass(CLASS_R) ? 0 : 1;
        var num_btn = $el_btn.closest($switcharea).hasClass(CLASS_R) ? 0 : 1;

        // class
        $el_btn.closest($switcharea).toggleClass(CLASS_R);

        // text
        $el_btn.find('.m-ctsAccountList-btn-txt').eq(num).text(aryTxt[num]);
        $el_btn.find('.m-ctsAccountList-btn-txt').eq(num_btn).text("");
        $el_btn.find('.m-ctsAccountList-btn-knob').text(aryTxt[num_btn]);

        // contents
        $el_btn.closest($switcharea).find('.m-ctsAccountList-itm').fadeOut(200);
        $el_btn.closest($switcharea).find('.m-ctsAccountList-itm').eq(num_btn).fadeIn();

        //jqueryUI reset
        $('.m-ctsAccountList select').selectmenu('refresh');

        return false;
      });

      //input check
      $('.m-ctsAccountList .m-ctsAccountList-ttl-input input').change(function () {
        var $el_input = $(this);
        var _num = $el_input.closest('.m-ctsAccountList').find(".m-ctsAccountList-ttl-input input:checked").length;
        if (_num > 0) {
          $el_input.closest('.m-ctsAccountList').addClass(CLASS_CHECKED);
        } else {
          $el_input.closest('.m-ctsAccountList').removeClass(CLASS_CHECKED);
        }
      });
    });

    //一括振込
    $('[data-js="switchAll"]').each(function () {
      var $el = $(this);
      $el.on('click', function () {
        var $el_btn = $(this);
        // class
        $el_btn.closest($switcharea).toggleClass('m-ctsAccountList-all-on');
        return false;
      });
    });
  }();

  // 認証
  $('[data-js="tabCertif"]').each(function () {
    var _this = this;

    var tabnav = $(this).find('[data-js="tabCertifNav"]');
    var tabbox = $(this).find('[data-js="tabCertifBox"]');
    tabnav.find('li').on('click', function (e) {
      var $el = $(e.currentTarget);
      if (!$el.hasClass('m-active')) $(_this).toggleClass('m-tabCertif');
      tabnav.find('li').removeClass('m-active');
      $el.addClass('m-active');
      var num = tabnav.find('li').index($el);
      return false;
    });
  });

  // ------------------------- TOTAL carousel -------------------------
  var total_carousel = function () {

    if (!$('.m-hdrCarousel').length) return false;

    var ARROW_PREV = '<div class="m-slide-prev"><button class="m-slide-icon m-hdr-bankAc-prevArrow"><span class="m-icon-arrow_l"><span>前へ</span></span></button></div>';
    var ARROW_NEXT = '<div class="m-slide-next"><button class="m-slide-icon m-hdr-bankAc-nextArrow"><span class="m-icon-arrow_r"><span>次へ</span></span></button></div>';

    //next,prev タイトルセット
    var ary_tit = [];
    $('.m-hdrCarousel-main').find('.m-hdr-bankAc-head').each(function () {
      var $el_head = $(this);
      var _tit = $el_head.text();
      ary_tit.push(_tit);
    });
    $('.m-hdrCarousel-main .m-hdr-bankAc-prevText').text(ary_tit[ary_tit.length - 1]);
    $('.m-hdrCarousel-main .m-hdr-bankAc-nextText').text(ary_tit[1]);

    //slick
    var $slick = $('.m-hdrCarousel-main').find('.m-slide-main > ul');
    $slick.slick({
      speed: 550,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      appendDots: '.m-hdrCarousel-dots',
      appendArrows: '.m-hdrCarousel-main .m-slide-main',
      prevArrow: ARROW_PREV,
      nextArrow: ARROW_NEXT,
      draggable: false,
      responsive: [{
        breakpoint: 820,
        settings: {
          draggable: true
        }
      }]
    });

    // スライド1つの場合
    var $slide = $slick.find('.slick-slide');
    if ($slide.length < 2) {
      $('.m-hdrCarousel-dots').hide();
      $('.m-hdrCarousel-main .m-hdr-bankAc-prev').hide();
      $('.m-hdrCarousel-main .m-hdr-bankAc-next').hide();
    }

    //event
    $slick.on({

      //スライドが変わり始める前に発火
      'beforeChange': function beforeChange(slick, currentSlide, nextSlide) {
        $('.m-hdrCarousel-main .m-hdr-bankAc-next').hide();
        $('.m-hdrCarousel-main .m-hdr-bankAc-prev').hide();
      },
      //スライドが変わった後に発火
      'afterChange': function afterChange(slick, currentSlide) {
        var _now = currentSlide.currentSlide;
        var _next = _now == ary_tit.length - 1 ? ary_tit[0] : ary_tit[_now + 1];
        var _prev = _now == 0 ? ary_tit[ary_tit.length - 1] : ary_tit[_now - 1];
        $('.m-hdrCarousel-main .m-hdr-bankAc-prevText').text(_prev);
        $('.m-hdrCarousel-main .m-hdr-bankAc-nextText').text(_next);
        $('.m-hdrCarousel-main .m-hdr-bankAc-next').fadeIn(200);
        $('.m-hdrCarousel-main .m-hdr-bankAc-prev').fadeIn(200);
      }
    });

    //高さ解除
    $('.m-hdrCarousel-main').css('max-height', 'none');
  }();

  // ------------------------- 為替チャート -------------------------
  var exchange_chart = function () {

    //通貨比較
    var countCurrency = 0;
    $('[data-js="exChart-currency"] li > a').on('click', function (event) {
      event.preventDefault();
      var $el = $(this);

      if (countCurrency >= 3 && !$el.hasClass('m-current')) return false;

      $el.toggleClass('m-current');
      countCurrency = 0;

      $el.closest('[data-js="exChart-currency"]').find('.m-ctsExChartCurrencyBox').each(function () {
        var $el_list = $(this);
        $el_list.find('.m-ctsExChartCurrency-list ul li').each(function () {
          if ($(this).find('a').hasClass('m-current')) countCurrency++;
        });
      });

      if (countCurrency >= 3) {
        $el.closest('[data-js="exChart-currency"]').addClass('m-fix');
      } else {
        $el.closest('[data-js="exChart-currency"]').removeClass('m-fix');
      }
    });

    // 足種
    $('#exChart-switch-button').on('click', function () {
      var $el_data = $(this).closest('.m-formWrap-data');
      $('#exChart-switch-menu li').on('click', function (event) {
        var index = $(this).index();
        if (index >= 1) {
          $el_data.addClass('m-validateOK');
        } else {
          $el_data.removeClass('m-validateOK');
        }
      });
    });

    // テクニカル指標
    $('#exChart-indicator-button').on('click', function () {
      var $el_data = $(this).closest('.m-formWrap-data');
      $('#exChart-indicator-menu li').on('click', function (event) {
        var index = $(this).index();
        var $el = $('[data-js="exChart-indicator"]');
        $el.find('.m-ctsExChartIndicator-list').hide();
        if (index >= 1) {
          $el_data.addClass('m-validateOK');
          $el.find('.m-ctsExChartIndicator-list').eq(index - 1).show();
        } else {
          $el_data.removeClass('m-validateOK');
        }
      });
    });

    //switch
    $('[data-js="exChart-switch"] > li > a').on('click', function (event) {
      event.preventDefault();
      var $el = $(this).closest('[data-js="exChart-switch"]');
      $el.find('a').removeClass('m-active');
      $(this).addClass('m-active');
    });

    var aryVal = [];
    $('[data-js="exChart-slider"]').each(function () {
      var min = $(this).closest('.m-ctsExChartSlider-item').hasClass('m-period') ? 5 : 1;
      var value = parseInt($(this).text(), 10);
      aryVal.push(value);
      var $inputValue = $(this).closest('.m-ctsExChartSlider-item').find('.m-ctsExChartSlider-value');
      $(this).empty().slider({
        value: value,
        min: min,
        max: 100,
        step: 1,
        range: 'min',
        animate: true,
        slide: function slide(event, ui) {
          $inputValue.text(ui.value);
        }
      });
      $inputValue.text($(this).slider('value'));
    });

    //checkbox
    $('[data-js="exChart-checkbox"]').change(function () {
      var status = $(this).prop('checked') ? false : true;
      var $el = $(this).closest('.m-ctsExChartSlider-item');
      $el.toggleClass('m-disable');
      $el.find(".m-ctsExChartSlider-multi").slider({
        disabled: status
      });
    });

    //reset
    $(".slider-reset").on('click', function (event) {
      event.preventDefault();
      var $el = $(this).closest('.m-ctsExChartSlider-item');
      if (!$el.hasClass('m-disable')) {
        var index = $el.index();
        $el.find(".m-ctsExChartSlider-multi").slider("value", aryVal[index]);
        $el.find(".m-ctsExChartSlider-value").text(aryVal[index]);
      }
    });

    //btn plus
    $(".slider-btn-plus").on('click', function (event) {
      event.preventDefault();
      var $el = $(this).closest('.m-ctsExChartSlider-item');
      if (!$el.hasClass('m-disable')) {
        var _val = $el.find(".m-ctsExChartSlider-multi").slider('value');
        var _val_fix = _val >= 100 ? 100 : _val + 1;
        $el.find(".m-ctsExChartSlider-multi").slider("value", _val_fix);
        $el.find(".m-ctsExChartSlider-value").text(_val_fix);
      }
    });

    //btn minus
    $(".slider-btn-minus").on('click', function (event) {
      event.preventDefault();
      var $el = $(this).closest('.m-ctsExChartSlider-item');
      if (!$el.hasClass('m-disable')) {
        var _val = $el.find(".m-ctsExChartSlider-multi").slider('value');
        var _val_fix = _val <= 0 ? 0 : _val - 1;
        $el.find(".m-ctsExChartSlider-multi").slider("value", _val_fix);
        $el.find(".m-ctsExChartSlider-value").text(_val_fix);
      }
    });
  }();

}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function () {

  /*
   * ButtonEffect
   **/
  $(function () {
    var ripple, ripples, ripplesAnc, RippleEffect, loc, cover, coversize, style, x, y, i, num;

    ripples = document.querySelectorAll('.m-btnEffect');
    ripplesAnc = document.querySelectorAll('.m-btnEffectAnc');
    RippleEffect = function RippleEffect(e) {
      ripple = this;
      cover = document.createElement('span');
      coversize = ripple.offsetWidth;
      loc = ripple.getBoundingClientRect();
      x = e.pageX - loc.left - window.pageXOffset - coversize / 2;
      y = e.pageY - loc.top - window.pageYOffset - coversize / 2;
      pos = 'top:' + y + 'px; left:' + x + 'px; height:' + coversize + 'px; width:' + coversize + 'px;';

      ripple.appendChild(cover);
      cover.setAttribute('style', pos);
      cover.setAttribute('class', 'm-btnEffectRipple');

      setTimeout(function () {
        var list = document.getElementsByClassName("m-btnEffectRipple");
        for (var i = list.length - 1; i >= 0; i--) {
          list[i].parentNode.removeChild(list[i]);
        }
      }, 2000);
    };
    for (i = 0, num = ripples.length; i < num; i++) {
      ripple = ripples[i];
      ripple.addEventListener('mousedown', RippleEffect);
    }
    for (i = 0, num = ripplesAnc.length; i < num; i++) {
      ripple = ripplesAnc[i];
      ripple.addEventListener('mousedown', RippleEffect);
    }

  });

  /*
   * Login
   **/
  var $login = $('[data-js="login"]');

  $login.on('click', function () {
    $(this).attr('disabled', 'disabled').append('<span class="is-loader">').find('>span').not('.is-loader').addClass('is-fade');
    start();
    function start() {
      timer = setInterval(function () {
        if ($login.hasClass('is-load')) {
          $login.attr('disabled', false).removeClass('is-load').find('>span').not('.is-loader').removeClass('is-fade');
          $login.removeClass('is-error').find('.is-loader').remove();
          stop();
        } else {
          if ($login.parent().hasClass('is-error')) {
            $login.addClass('is-error').parent().removeClass('is-error').find('.is-loader').addClass('is-error is-active');
          } else {
            $login.parent().addClass('is-error').find('.is-loader').addClass('is-check is-active');
          }
          $login.addClass('is-load');
        }
      }, 2000);
    }
    function stop() {
      clearInterval(timer);
    }
  });

  /*
   * loadingServer
   **/
  $('[data-js="loadingServer"]').on('click', function () {
    var source = '<div class="loadingServer"><div class="loadingServer-circle"><div class="loadingServer-loader">Loading...<span class="loadingServer-loader-before"></span><span class="loadingServer-loader-after"></span></div></div></div>';
    $('body').append(source);
    $('html').addClass('loadingServer-show');
  });

  /*
   * loadingAngular
   **/
  $('[data-js="loadingAngular"]').on('click', function () {
    var source = '<div class="loadingAngular"><div class="loadingAngular-wrap"><div class="loadingAngular-loader"><span></span><span></span><span></span><span></span><span></span></div></div></div>';
    $('body').append(source);
    $('html').addClass('loadingAngular-show');
  });

  /*
   * Step
   **/
  var $step = $('[data-js="step"]');
  $step.delay(500).queue(function () {
    $(this).addClass('m-active').dequeue();
  });

  /*
   * FormClear
   **/
  $(".dir-form-clear.hoge").on("focus", function () {
    $(".dir-m-icon-check").addClass("animated flipInY").css("display", "block");
  });
  $(".dir-form-clear.hoge").on("blur", function () {
    $(".dir-m-icon-check").removeClass("animated flipInY").css("display", "none");
  });

  /*
   * FormError
   **/
  $(".dir-form-err.hoge").on("focus", function () {
    $(".m-validateErr-balloon").addClass("animated fadeIn").css("display", "inline-block");
  });
  $(".dir-form-err.hoge").on("blur", function () {
    $(".m-validateErr-balloon").removeClass("animated fadeIn").css("display", "none");
  });
}();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function () {

  var win = $(window);

  // ホームローン：必要書類の表示切り替え
  var syotokuDocs = function () {
    //設問グループ
    var $inputItem = $('[data-js="syotoku-input-item"]');
    //結果の表組
    var $result = $('[data-js="syotoku-result"]');
    //結果の初期表示
    var $def = $('[data-js="syotoku-def"]');

    /*
    ラジオボタン選択時の表示設定
    該当ラジオボタンがクリックされた時の表示状態の設定
    [
      [設問グループ1（1：表示 0：非表示）,設問グループ2,設問グループ3,設問グループ4,設問グループ5,結果表示設定], //ラジオボタン1(#form-radio01_1)
      [設問グループ1,設問グループ2,設問グループ3,設問グループ4,設問グループ5,結果表示設定], //ラジオボタン2(#form-radio01_2)
      [設問グループ1,設問グループ2,設問グループ3,設問グループ4,設問グループ5,結果表示設定], //ラジオボタン3(#form-radio02_1)
      ・
      ・
      ・
    ]
    */
    var settingRadio = [[1, 1, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0], [1, 1, 0, 0, 0, 4], [1, 1, 0, 0, 0, 4], [1, 1, 1, 0, 0, 0], [1, 1, 1, 0, 0, 5], [1, 1, 1, 0, 0, 6], [1, 0, 0, 1, 1, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 1, 0, 1], [1, 0, 0, 1, 1, 2], [1, 0, 0, 1, 1, 2], [1, 0, 0, 1, 1, 3]];

    /*
    結果表組の行の表示設定
    結果の表組の行の表示パターンを設定。
    ラジオボタン選択時の表示設定配列の最後の値から表示するべき結果を選択
    [結果1（1：表示 0：非表示）,結果2,結果3,結果4,結果5,結果6]
    */
    var settingResult = [[0, 0, 0, 1, 0, 1], [0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0], [1, 0, 1, 0, 1, 0], [0, 0, 1, 1, 1, 0], [0, 0, 0, 1, 1, 1]];

    //選択項目の一番最初以外非表示に
    $inputItem.each(function (index, val) {
      if (index) {
        $(this).css('display', 'none');
      }
    });

    //ラジオボタンをクリックした時の処理
    $inputItem.find('input[type="radio"]').each(function (index, el) {
      var countRadio = index;

      //クリックされたラジオボタンの表示設定を基に、全ラジオボタンの表示・非表示切り替え
      $(this).on('click', { countRadio: countRadio }, function (e) {
        var value = settingRadio[countRadio];

        //ラジオボタンの表示設定から表示するラジオボタンを取得し表示・非表示切り替え
        for (var i = 0; i < 5; i++) {
          if (value[i]) {
            $inputItem.eq(i).css('display', 'block');
          } else {
            $inputItem.eq(i).css('display', 'none');
            $inputItem.eq(i).find('input[type="radio"]').prop("checked", false);
          }
        }

        if (value[5] > 0) {
          //現在表示中のラジオボタンの表示設定配列の最後の値が0以外の場合は結果を表示
          var showResult = settingResult[value[5] - 1];
          $def.css('display', 'none');
          $result.fadeIn();
          for (var j = 0; j < 6; j++) {
            if (showResult[j]) {
              // $result.find('tbody > tr').eq(j).css('display', 'table-row');
              $result.find('tbody > tr').eq(j).show();
            } else {
              $result.find('tbody > tr').eq(j).hide();
            }
          }
        } else {
          //現在表示中のラジオボタンの表示設定配列の最後の値が0の場合は初期表示に戻す
          $result.css('display', 'none');
          $def.css('display', 'block');
        }
      });
    });
  }();
}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function PageTop(el) {
    _classCallCheck(this, PageTop);

    this.pagetop = $(el);
    this.pagetop.hide();
    this.win = $(window);
    this.borderLine = $('header').length ? $('header').height() : 0;
    this.topicpath = $('.m-topicpath');
    this.footer = $('footer').length ? $('footer') : $('.footer-simple');
    this.state();
    this.event();
  }

  _createClass(PageTop, [{
    key: 'state',
    value: function state() {
      if (this.topicpath.length && this.topicpath.css('display') == 'block') {
        if (!this.topicpath.find(this.pagetop).length) this.topicpath.append(this.pagetop);
      } else {
        if (!this.footer.find(this.pagetop).length) this.footer.append(this.pagetop);
      }
    }
  }, {
    key: 'event',
    value: function event() {
      var _this = this;

      this.win.on('scroll', function () {
        if (_this.borderLine < _this.win.scrollTop()) {
          var footer_top = _this.footer.offset().top;
          var win_top = _this.win.scrollTop();
          var win_height = window.innerHeight;
          if (footer_top > win_top + win_height) {
            _this.pagetop.removeClass('active');
          } else {
            _this.pagetop.addClass('active');
          }
          _this.pagetop.fadeIn(100);
        } else {
          _this.pagetop.fadeOut(100);
        }
      });

      this.pagetop.on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 300, 'swing');
        return false;
      });

      this.win.on('resize', function () {
        _this.state();
      });
    }
  }]);

  return PageTop;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function () {

  var $sideMenu = $('#sideMenu');

  var SWITCH_SIZE = 940;

  if ($sideMenu.length) {

    //append
    var source_over = '<div class="overlay" data-js="sidemenu"></div>';
    var source_close = '<p class="sideMenu-close" data-js="sidemenu"><a href="#">閉じる</a></p>';
    $sideMenu.append(source_over);
    $sideMenu.find('.sideMenuWrap').append(source_close);

    //event
    $('[data-js="sidemenu"]').click(function () {
      $sideMenu.stop().toggleClass('open');
      $sideMenu.find('.sideMenuWrap').stop().slideToggle(300);
      return false;
    });

    //resize
    var pre = 0;
    $(window).on('load resize', function () {
      var now = 0;
      var window_w = window.innerWidth;
      now = window_w;
      if (now >= SWITCH_SIZE && pre < SWITCH_SIZE) {
        //PC
        $sideMenu.find('.sideMenuWrap').show();
        $sideMenu.addClass('open');
      } else if (pre >= SWITCH_SIZE && now < SWITCH_SIZE) {
        //SP
        $sideMenu.find('.sideMenuWrap').hide();
        $sideMenu.removeClass('open');
      }
      pre = now;
    });

    //current
    var menuCurrent = function () {
      var $sideMenuLink = $sideMenu.find('.sideMenu-link');
      var CLASS_CURRENT = "current";
      var STR_AFTER = '/contents/';
      var urlPath_fix = location.pathname;
      $sideMenuLink.find('li').each(function () {
        var url = $(this).find('a').attr('href');
        if (urlPath_fix.indexOf(url) > -1) {
          $(this).find('a').addClass(CLASS_CURRENT);
        }
      });
    }();
  }
}();

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(6);
__webpack_require__(2);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(1);

/* pagetop */
var PageTop = __webpack_require__(5);
$('[data-js="pagetop"]').each(function () {
  var pagetop = new PageTop(this);
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map


var t_mainjs = setInterval(function() { if($ !== undefined) {

  // ログ後のヘッダーリンク表示
  var t_header_personal = setInterval(function() { if ($('body').hasClass('login') || $('body').hasClass('logout')) {
    if ($('body').hasClass('login')) $('.headerPersonal').show();
  clearInterval(t_header_personal);} }, 500);

  // ページ内アンカー処理
  $(document).on('click', '[class^=m-linkAncList] a[href^="#"], .m-cashflow-link a[href^="#"], a.m-linkAnc[href^="#"]', function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

  //モーダルウィンドウ
  var $trigger = $('[data-js*=modal]');
  var $modal = $('.m-modalWin');
  var _actCla = 'm-modalActive';
  var _fixCla = 'm-modalFixed';
  var _trgCla = 'm-modalTrigger';

  $(document).on('click', '[data-js*=modal]', function (e) {

    e.preventDefault();

    var $this = $(this);
    var _data = $this.attr('data-js');
    var _src = $this.attr('href');
    var _id = _src.split('#')[1];
    var _modal = '<div class="m-modalWin">' + '<div class="m-modalWrap">' + '<div class="m-modalContent" tabindex="0">' + '<div class="m-modalContentInner">' + '<\/div>' + '<button type="button" class="m-modalClose"><\/button>' + '<\/div>' + '<div class="m-modalOverlay"><\/div>' + '<\/div>' + '<\/div>';

    $('html').addClass(_fixCla).find('body').append(_modal);
    $this.addClass(_trgCla);

    var $target = $('.m-modalWin');
    var $content = $('.m-modalContentInner');
    var $contentbox = $('.m-modalContent');

    if (_data === 'modal') {
      modalCreate();
      modalShow();
      modalSizeAdjust();
    } else if (_data === 'modalIframe') {
      $content.append('<iframe class="m-modalIframe" src="' + _src + '" data-js="modalIframeCts"></iframe>');
      $contentbox.append('<div class="loadingServer-circle"><div class="loadingServer-loader">Loading...<span class="loadingServer-loader-before"></span><span class="loadingServer-loader-after"></span></div></div>');

      modalShow();
      modalSizeAdjust();

      //loading完了
      $('[data-js="modalIframeCts"]').load(function () {
        $target.addClass('m-modalShow');
      });
    } else if (_data === 'modalZip') {
      $target.attr('id', _data);
      modalCreate();
      modalShow();
    } else if (_data === 'modalWindow') {
      $target.attr('id', _id);
      modalCreate();
      modalShow();

      //caps処理
      var $caps = $('.m-modalWin').find('.m-modalKeyboardWrap-caps');
      if ($caps.length) {
        var caps_id = $caps.find('input').attr('id') + "_01";
        //id変更
        $caps.find('input').attr('id', caps_id);
        $caps.find('label').attr('for', caps_id);
        //切り替え
        $caps.find('input').on('click', function (e) {
          $caps_target = $(this).closest('.m-modalKeyboardWrap').find('.m-modalKeyboardWrap-alphabet');
          if ($(this).prop('checked')) {
            $caps_target.addClass('m-caps');
          } else {
            $caps_target.removeClass('m-caps');
          }
        });
      }

      if (_id === 'modal-calendar') {
        $('.datepicker').datepicker();
      }
    }

    function modalCreate() {
      $(_src).clone(true).show().appendTo($content);
    }

    function modalShow() {
      setTimeout(function () {
        $target.addClass(_actCla).find('.m-modalContent').css('margin-top', '1px').focus();
        $('body *').not('.m-modalWin *').attr('tabindex', '-1');
      }, 100);
    }

    function modalSizeAdjust() {

      var _height = window.innerHeight ? window.innerHeight : $(window).height();
      var _width = window.innerWidth ? window.innerWidth : $(window).width();
      var _marginSp = 100;
      var _marginTb = 120;
      var _marginNt = 160;
      var _marginPc = 200;
      var $content = $('.m-modalContent');
      var $inner = $('.m-modalContentInner');
      var $target = $('.m-modalIframe');

      if (_data === 'modal') {

        var contentHeight = $(_src).height();
        breakPoint();

        $(window).resize(function () {
          var _height = window.innerHeight ? window.innerHeight : $(window).height();
          breakPoint();
        });
      } else if (_data === 'modalIframe') {

        $('.m-modalContent').css('height', '88%');

        $target.load(function () {

          var contentHeightIframe = $target.contents().find('body').height();
          $target.parent().addClass('m-modalIframeContainer');
          $target.contents().find('body').addClass('m-modalScroll');

          var $body = $target.contents().find('body');

          $body.find('a').on('click', function () {
            var href = $(this).attr('href');
            var target = $(this).attr('target');
            if (href.indexOf('#') !== 0 && (typeof target == 'undefined' || target == '')) {
              e.preventDefault();
              window.parent.location.href = href;
              return false;
            }
          });
        });
      }

      function breakPoint() {

        var contentHeightIframe = $target.contents().find('body').height();
        var _height = window.innerHeight ? window.innerHeight : $(window).height();

        if (_width <= 559) {

          if (_data === 'modal') {
            if (_height <= contentHeight + _marginSp) {
              $content.height(_height - _marginSp);
              $inner.height(_height - _marginSp);
            }
          } else if (_data === 'modalIframe') {
            $content.height(_height - _marginSp);
            $inner.height(_height - _marginSp);
          }
        } else if (_width >= 560 && _width <= 819) {

          if (_data === 'modal') {
            if (_height <= contentHeight + _marginTb) {
              $content.height(_height - _marginTb);
              $inner.height(_height - _marginTb);
            }
          } else if (_data === 'modalIframe') {
            $content.height(_height - _marginTb);
            $inner.height(_height - _marginTb);
          }
        } else if (_width >= 820 && _width <= 1199) {

          if (_data === 'modal') {
            if (_height <= contentHeight + _marginNt) {
              $content.height(_height - _marginNt);
              $inner.height(_height - _marginNt);
            }
          } else if (_data === 'modalIframe') {
            $content.height(_height - _marginNt);
            $inner.height(_height - _marginNt);
          }
        } else if (_width >= 1200) {

          if (_data === 'modal') {
            if (_height <= contentHeight + _marginPc) {
              $content.height(_height - _marginPc);
              $inner.height(_height - _marginPc);
            }
          } else if (_data === 'modalIframe') {
            $content.height(_height - _marginPc);
            $inner.height(_height - _marginPc);
          }
        }
      }
    }

    var focusCls = 'm-nofocus';
    var $focusElem = $('.m-modalContent');
    $focusElem.on('click', function () {
      $focusElem.addClass(focusCls);
      $focusElem.focus(function () {
        $focusElem.removeClass(focusCls);
      }).blur(function () {
        $focusElem.addClass(focusCls);
      });
    });
  });

  $(document).keydown(escKey).on('click', '.m-modalClose, .m-modalOverlay', function () {
    $modal.modalClose();
  });

  function escKey(e) {
    if (e.keyCode === 27) {
      $modal.modalClose();
    }
  }

  $.fn.modalClose = function () {

    var $modal = $('.m-modalWin');
    setTimeout(function () {
      var $this = $('.m-modalTrigger');
      $modal.removeClass('m-modalShow');
      $modal.removeClass(_actCla);
      $('html').removeClass(_fixCla);
      $('body *').not('.m-modalWin *').removeAttr('tabindex');
      $this.focus().removeClass(_trgCla);
    }, 100);

    setTimeout(function () {
      $modal.remove();
    }, 500);
  };

  // QAリスト（開閉）
  var qaSwtch = $('[data-js="qaSwtch"]');
  qaSwtch.each(function () {
    var qaSwtchttl = $(this).find('[data-js="qaSwtch-ttl"]');
    var qaSwtchcnt = $(this).find('[data-js="qaSwtch-cnt"]');
    qaSwtchttl.on('click', function (e) {
      var $el = $(e.currentTarget);
      $el.parent().toggleClass('m-active');
      qaSwtchcnt.slideToggle();
      return false;
    });
  });

  // タブ①②④（ページ内切替/ページ遷移）
  var tab = $('[data-js="tab"]');
  tab.each(function () {
    var tabnav = $(this).find('[data-js="tabNav"]');
    var tabbox = $(this).find('[data-js="tabBox"]');
    tabbox.hide();
    tabbox.eq(0).show();
    tabnav.find('li').on('click', function (e) {
      var $el = $(e.currentTarget);
      tabnav.find('li').removeClass('m-active');
      $el.addClass('m-active');
      var num = tabnav.find('li').index($el);
      tabbox.hide();
      tabbox.eq(num).show();
      // 非表示だったタブ内のカルーセルをリセット
      if (tabbox.eq(num).find('.m-slide').size() !== 0) {
        tabbox.eq(num).find('.m-slide-main > ul').slick('setPosition');
      }
      $('.m-tabDef').css('opacity', 1);
      return false;
    });
  });
  tabClickValidateFlag = true;

  // タブ 初期表示制御
  var tabSelect = function () {
    var arg = new Object();
    var urlParam = location.search.substring(1).split('&');
    // URLにパラメータが存在する場合
    if (urlParam) {
      for (var i = 0; urlParam[i]; i++) {
        var kv = urlParam[i].split('=');
        arg[kv[0]] = kv[1];
      }
      //decode
      var url_dec = decodeURIComponent(arg.tab_num);
      //ary
      var ary = url_dec.split(',');
      //click
      $('[data-js="tabNav"]').each(function (index, el) {
        var $el = $(this);
        $el.find('li').eq(ary[index] - 1).click();
      });
    }
    $('.m-tabDef').css('opacity', 1);
  }();

  // アコーディオン
  $(document).on('click', '[data-js="accd-ttl"] > a', function () {
    var p = $(this).parents('[data-js="accd"]');
    p.find('[data-js="accd-ttl"]').toggleClass('m-active');
    p.find('[data-js="accd-cnt"]').slideToggle();
    return false;
  });
  var accd = $('[data-js="accd"]');
  accd.each(function () {
    // アコーディオンにアンカーリンクがある場合
    // パラメータ「?acd=open」があるとアコーディオンを開いて表示
    var urlHash = location.hash.substring(1);
    var urlParam = location.search.substring(1);
    if ($(this).attr('id') === urlHash) {
      if (urlParam) {
        var param = urlParam.split('&');
        var paramArray = [];
        for (var i = 0; i < param.length; i++) {
          var paramItem = param[i].split('=');
          paramArray[paramItem[0]] = paramItem[1];
        }
        if (paramArray.acd === 'open') {
          $(this).find('[data-js="accd-ttl"]').addClass('m-active');
          $(this).children('[data-js="accd-cnt"]').show();
        }
      }
    }
  });

  // テキストアコーディオン
  $(document).on('click', '[data-js="accdText-ttl"]', function (e) {
    e.preventDefault();
    var $el = $(this);
    $el.closest('[data-js="accdText"]').toggleClass('m-active');
    $el.closest('[data-js="accdText"]').find('[data-js="accdText-cnt"]').slideToggle(200);
  });

  // カルーセル
  $('.m-slide').each(function () {
    var _this = $(this);
    var $slick = _this.find('.m-slide-main > ul');
/*    $slick.find('li').each(function() {
      if($(this).find('a').length == 0) $(this).remove();
    });
*/

    var $slide = $slick.children();
    var $nav = _this.find('.m-slide-nav');
    var $dots = _this.find('.m-slide-dots');
    var flg = 'play';

    _this.find('.m-slide-main > ul').on('init', function() {
      _this.css('opacity', 1);
    });

    if (_this.hasClass('m-slidePanel')) {
      $slick.slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: $dots,
        appendArrows: _this,
        prevArrow: '<div class="m-slide-prev"><button class="m-slide-icon m-icon m-icon-arrow_slide_l"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M267.518,0c7.693,0,14.417,2.825,20.203,8.51c11.539,11.339,11.539,29.309,0,39.693L81.802,249.614l205.918,201.39  c11.539,11.335,11.539,29.31,0,39.693c-11.559,11.354-29.838,11.354-40.408,0L0,249.614L247.312,8.51  C252.115,2.825,259.809,0,267.518,0z"/><title>前へ</title></svg></button></div>',
        nextArrow: '<div class="m-slide-next"><button class="m-slide-icon m-icon m-icon-arrow_slide_r"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M28.878,499.543c-7.698,0-14.426-2.828-20.218-8.516c-11.547-11.345-11.547-29.329,0-39.718l206.056-201.545L8.66,48.24  c-11.547-11.344-11.547-29.329,0-39.72c11.565-11.36,29.859-11.36,40.436,0l247.479,241.245L49.096,491.027  C44.292,496.715,36.595,499.543,28.878,499.543z"/><title>次へ</title></svg></button></div>'
      });
    }/* else if (_this.hasClass('logout')) {
      $slick.slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        appendDots: $dots,
        appendArrows: _this,
        prevArrow: '<div class="m-slide-prev"><button class="m-slide-icon m-icon m-icon-arrow_slide_l"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M267.518,0c7.693,0,14.417,2.825,20.203,8.51c11.539,11.339,11.539,29.309,0,39.693L81.802,249.614l205.918,201.39  c11.539,11.335,11.539,29.31,0,39.693c-11.559,11.354-29.838,11.354-40.408,0L0,249.614L247.312,8.51  C252.115,2.825,259.809,0,267.518,0z"/><title>前へ</title></svg></button></div>',
        nextArrow: '<div class="m-slide-next"><button class="m-slide-icon m-icon m-icon-arrow_slide_r"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M28.878,499.543c-7.698,0-14.426-2.828-20.218-8.516c-11.547-11.345-11.547-29.329,0-39.718l206.056-201.545L8.66,48.24  c-11.547-11.344-11.547-29.329,0-39.72c11.565-11.36,29.859-11.36,40.436,0l247.479,241.245L49.096,491.027  C44.292,496.715,36.595,499.543,28.878,499.543z"/><title>次へ</title></svg></button></div>',
        responsive: [{
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            draggable: true
          }
        }, {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            draggable: true
          }
        }]
      });
    }*/ else {
      $slick.slick({
        autoplay: true,
        autoplaySpeed: 4000,
        // speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: $dots,
        appendArrows: _this,
        prevArrow: '<div class="m-slide-prev"><button class="m-slide-icon m-icon m-icon-arrow_slide_l"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M267.518,0c7.693,0,14.417,2.825,20.203,8.51c11.539,11.339,11.539,29.309,0,39.693L81.802,249.614l205.918,201.39  c11.539,11.335,11.539,29.31,0,39.693c-11.559,11.354-29.838,11.354-40.408,0L0,249.614L247.312,8.51  C252.115,2.825,259.809,0,267.518,0z"/><title>前へ</title></svg></button></div>',
        nextArrow: '<div class="m-slide-next"><button class="m-slide-icon m-icon m-icon-arrow_slide_r"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M28.878,499.543c-7.698,0-14.426-2.828-20.218-8.516c-11.547-11.345-11.547-29.329,0-39.718l206.056-201.545L8.66,48.24  c-11.547-11.344-11.547-29.329,0-39.72c11.565-11.36,29.859-11.36,40.436,0l247.479,241.245L49.096,491.027  C44.292,496.715,36.595,499.543,28.878,499.543z"/><title>次へ</title></svg></button></div>'
      });
    }

    // autoplay時も tabindexを有効にする
    _this.find('.m-slide-dots li button').attr('tabindex', 0);

    // スライド1つの時はサムネイル、再生/停止ボタンを非表示にする
    if ($slide.length < 2) {
      $nav.hide();
    }
   // 再生・停止
    _this.find('.m-slide-stop').on('click', function () {
      var restartClass = 'm-slide-restart';
      if (flg === 'play') {
        $slick.slick('slickPause');
        $(this).addClass(restartClass);
          $('.icon-bnrControl path').attr('d', 'M458.71,79.32H41.29A41.41,41.41,0,0,0,0,120.62V379.38a41.41,41.41,0,0,0,41.29,41.29H458.71A41.41,41.41,0,0,0,500,379.38V120.62A41.41,41.41,0,0,0,458.71,79.32ZM217.63,322.5V183.59L320.78,253Z');
        flg = 'stop';
      } else {
        $slick.slick('slickPlay');
        $(this).removeClass(restartClass);
          $('.icon-bnrControl path').attr('d', 'M458.71,79.32H41.29A41.41,41.41,0,0,0,0,120.62V379.38a41.41,41.41,0,0,0,41.29,41.29H458.71A41.41,41.41,0,0,0,500,379.38V120.62A41.41,41.41,0,0,0,458.71,79.32ZM123.63,322.5V183.59L226.79,253Zm187.11,0h-33V183.59h33Zm68.13,0h-33V183.59h33Z');
        flg = 'play';
      }
    });
  });

  // 開閉ボックス
  $(document).on('click', '[data-js="openClose"]', function () {
    var _flg = $(this).hasClass('m-open');
    $(this).stop().toggleClass('m-open');
    $(this).stop().toggleClass('m-icon-circle_plus', _flg);
    $(this).stop().toggleClass('m-icon-circle_minus', !_flg);
    $(this).closest('.m-ctsBox').find('.m-ctsBox-area').stop().slideToggle(200);
    if ($(this).hasClass('m-open')) {
      $(this).find('a > span').text('閉じる');
    } else {
      $(this).find('a > span').text('開く');
    }
    return false;
  });

  // 注意事項
  $(document).on('click', '[data-js="cautionPulldown"]', function () {
    $(this).toggleClass('m-open');
    var _data = $(this).closest('.m-ctsCautionPulldown').find('.m-ctsCautionPulldown-data');
    _data.slideToggle(200);
    var $elem = $(this).find('.m-ctsCautionPulldown-state');
    if ($(this).hasClass('m-open')) {
      $elem.text('閉じる');
    } else {
      $elem.text('開く');
    }
    return false;
  });
  $('.m-ctsCautionPulldown-open [data-js="cautionPulldown"]').click();

  // 必ずお読みください
  $(document).on('click', '[data-js="mustreadPulldown"]', function () {
    $(this).toggleClass('m-open');
    var _data = $(this).closest('.m-ctsMustreadPulldown, .m-ctsAttentionPulldown').find('.m-ctsMustreadPulldown-data, .m-ctsAttentionPulldown-data');
    _data.slideToggle(200);
    var $elem = $(this).find('.m-ctsMustreadPulldown-state, .m-ctsAttentionPulldown-state');
    if ($(this).hasClass('m-open')) {
      $elem.text('閉じる');
    } else {
      $elem.text('開く');
    }
    return false;
  });

  // もっと見る
  $(document).on('click', '[data-js="morePulldown"]', function () {
    var $elem = $(this);
    var $btn = $elem.closest('.m-ctsMorePulldown-btn');
    var $parent = $(this).closest('[data-js="morePulldownArea"]');
    var cls = 'm-active';
    if (!$parent.hasClass(cls)) {
      $parent.find('[data-js="morePulldownData"]').slideDown(200);
      $btn.hide();
      $parent.addClass(cls);
    }
    return false;
  });

  // もっと見る（閉じるボタン切り替え）
  $(document).on('click', '[data-js="morePulldownTgl"]', function () {
    var $elem = $(this);
    var $parent = $(this).closest('[data-js="morePulldownArea"]');
    var $cnt = $parent.find('[data-js="morePulldownData"]');
    var $btn = $elem.find('.m-btn_icon_txt');
    var cls = 'm-active';

    $cnt.slideToggle(200);
    if (!$parent.hasClass(cls)) {
      $btn.text($btn.data('close'));
      $parent.addClass(cls);
    } else {
      $parent.removeClass(cls);
      $btn.text($btn.data('open'));
    }
    return false;
  });

  // タッチデバイス用 telリンク
  $(document).on('click', 'a.m-linkTel', function () {
    if (window.ontouchstart !== null) {
      return false;
    }
  });

  //サイト内検索Enter押下でSubmit
  $(document).on('keypress', '[data-js="headerSearchInput"]', function(e) {
    if (e.which == 13) document.SS_searchForm.submit();
  });

clearInterval(t_mainjs);} }, 500);


LazyLoad = function () {
  $('[data-js-lazyload]').each(function () {
    var path = $(this).attr('data-js-lazyload');
    $(this).attr('src', path);
    $(this).removeAttr('data-js-lazyload');
  });
}
LazyLoad();

iconLink = function(target) {

  if(typeof target === 'undefined') target = null;
  var $target = (target != null) ? $(target) : $('body');

  var icon_blank = '<img src="/contents/assets/img/icon_link_blank.svg" alt="別ウィンドウまたはタブで開きます" class="m-iconBlank-img" data-js="iconLinked">';
  $target.find('.m-iconBlank:not(:has([data-js="iconLinked"]))').append(icon_blank);
  $target.find('.m-linkBlank:not(:has([data-js="iconLinked"]))').append(icon_blank);
  $target.find('.m-linklabel.m-linkBlank .m-linklabel-txt:not(:has([data-js="iconLinked"]))').append(icon_blank);
  $target.find('.m-btnBlank[class^="m-btnDefG-"]:not(:has([data-js="iconLinked"]))').append(icon_blank);
  $target.find('.m-btnBlank[class^="m-btnDefW-"]:not(:has([data-js="iconLinked"]))').append(icon_blank);
  $target.find('.m-listQaLink-txt:not(:has([data-js="iconLinked"]))').append(icon_blank);
  $target.find('.m-linkAncListLineCntr-linkBlank:not(:has([data-js="iconLinked"]))').append(icon_blank);
  var icon_blank_w = '<img src="/contents/assets/img/icon_link_blank_w.svg" alt="別ウィンドウまたはタブで開きます" class="m-iconBlankW-img" data-js="iconLinked">';
  $target.find('.m-balloonLink-def .m-icon-link_blank:not(:has([data-js="iconLinked"]))').append(icon_blank_w);
  $target.find('.m-balloonLink-up .m-icon-link_blank:not(:has([data-js="iconLinked"]))').append(icon_blank_w);
  $target.find('.m-btnBlank[class^="m-btnDefR-"]:not(:has([data-js="iconLinked"]))').append(icon_blank_w);
  $target.find('.m-btnBlank[class^="m-btnEm-"]:not(:has([data-js="iconLinked"]))').append(icon_blank_w);
  var icon_blank_b = '<img src="/contents/assets/img/icon_link_blank_b.svg" alt="別ウィンドウまたはタブで開きます" class="m-iconBlankB-img" data-js="iconLinked">';
  $target.find('.m-btnBlank[class^="m-btnCv-"]:not(:has([data-js="iconLinked"]))').append(icon_blank_b);
  var icon_pdf = '<img src="/contents/assets/img/icon_pdf.svg" alt="別ウィンドウまたはタブで開きます" class="m-iconPdf-img" data-js="iconLinked">';
  $target.find('.m-iconPdf:not(:has([data-js="iconLinked"]))').append(icon_pdf);
  $target.find('.m-linkPdf:not(:has([data-js="iconLinked"]))').append(icon_pdf);
  $target.find('.m-linklabel.m-linkPdf .m-linklabel-txt:not(:has([data-js="iconLinked"]))').append(icon_pdf);
  $target.find('.m-btnPdf:not(:has([data-js="iconLinked"]))').append(icon_pdf);
  var icon_modal = '<img src="/contents/assets/img/icon_link_modal.svg" alt="モーダルウィンドウで開きます" class="m-iconModal-img" data-js="iconLinked">';
  $target.find('.m-iconModal:not(:has([data-js="iconLinked"]))').append(icon_modal);
  $target.find('.m-linkModal:not(:has([data-js="iconLinked"]))').append(icon_modal);
  $target.find('.m-btnModal:not(:has([data-js="iconLinked"]))').append(icon_modal);
  var icon_modal_r = '<img src="/contents/assets/img/icon_link_modal_r.svg" alt="モーダルウィンドウで開きます" class="m-iconModal-img" data-js="iconLinked">';
  $target.find('.m-linkModalRed:not(:has([data-js="iconLinked"]))').append(icon_modal_r);
  var icon_dl = '<img src="/contents/assets/img/icon_link_download.svg" alt="ダウンロードが始まります" class="m-iconDL-img" data-js="iconLinked">';
  $target.find('.m-iconDownload:not(:has([data-js="iconLinked"]))').append(icon_dl);
  $target.find('.m-linkDL:not(:has([data-js="iconLinked"]))').append(icon_dl);
  $target.find('.m-linklabel.m-linkDL .m-linklabel-txt:not(:has([data-js="iconLinked"]))').append(icon_dl);
  $target.find('.m-btnDL:not(:has([data-js="iconLinked"]))').append(icon_dl);
  var icon_word = '<img src="/contents/assets/img/icon_word.svg" alt="別ウィンドウまたはタブで開きます" class="m-iconWord-img" data-js="iconLinked">';
  $target.find('.m-iconWord:not(:has([data-js="iconLinked"]))').append(icon_word);
  $target.find('.m-linkWord:not(:has([data-js="iconLinked"]))').append(icon_word);
  $target.find('.m-btnWord:not(:has([data-js="iconLinked"]))').append(icon_word);
  var icon_excel = '<img src="/contents/assets/img/icon_excel.svg" alt="別ウィンドウまたはタブで開きます" class="m-iconExcel-img" data-js="iconLinked">';
  $target.find('.m-iconExcel:not(:has([data-js="iconLinked"]))').append(icon_excel);
  $target.find('.m-linkExcel:not(:has([data-js="iconLinked"]))').append(icon_excel);
  $target.find('.m-btnExcel:not(:has([data-js="iconLinked"]))').append(icon_excel);

}
iconLink();

doCompleteAnimation = function() {

  var target = $(document).find('#gage').length;

  if (target >= 1) {

    if ($(this).hasClass('m-active')) {
      return false;
    } else {
      var bar = new ProgressBar.Circle(gage, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 2500,
        color: '#78bf69',
        trailColor: '#e6e6e6',
        trailWidth: 1,
        svgStyle: null
      });
      bar.animate(1.0);
      $(this).find('.m-boxCard-gage').addClass('m-active');
    }

    setTimeout(function () {
      $('.m-boxCard').addClass('m-active').find('.m-boxCard-gage').removeClass('m-active').animate({ 'display': 'none' }, 1200).queue(function () {
        $('.m-boxCard-check').addClass('m-active').animate({ 'left': '50%' }, 600).queue(function () {
          $('.m-boxCard-text').fadeIn(500);
        });
      });
    }, 3000);
  }
}

//
// コンテンツ配信
//
var _DATE = new Date();
var NOWDATE = _DATE.getFullYear() + '' + (_DATE.getMonth() + 1) + '' + _DATE.getDate() + '' + _DATE.getHours() + '' + _DATE.getMinutes() + '' + _DATE.getSeconds();
var cdt_setting_file = document.createElement('script');
var JAL_cdt_setting_file = document.createElement('script');
var CCC_cdt_setting_file = document.createElement('script');
var OPH_cdt_setting_file = document.createElement('script');
var YMD_cdt_setting_file = document.createElement('script');
cdt_setting_file.src = '/contents/assets/js/cdt_setting.js?' + NOWDATE;
JAL_cdt_setting_file.src = '/contents/jal/assets/js/jal_cdt_setting.js?' + NOWDATE;
CCC_cdt_setting_file.src = '/contents/ccc/assets/js/ccc_cdt_setting.js?' + NOWDATE;
OPH_cdt_setting_file.src = '/contents/oph/assets/js/oph_cdt_setting.js?' + NOWDATE;
YMD_cdt_setting_file.src = '/contents/ymd/assets/js/ymd_cdt_setting.js?' + NOWDATE;
var cdt_body = document.getElementsByTagName('body');
cdt_body[0].appendChild(cdt_setting_file);
cdt_body[0].appendChild(JAL_cdt_setting_file);
cdt_body[0].appendChild(CCC_cdt_setting_file);
cdt_body[0].appendChild(OPH_cdt_setting_file);
cdt_body[0].appendChild(YMD_cdt_setting_file);
cdt_setting_file.onload = function() {

  try {

    //
    // cdt_setting.js に設定されている cdt_contents.history が見ているページのパスの一部に含まれていたら、
    // localStorage（cdt_history）にhistoryと日時をjsonで保存する
    //
    var history_time = new Date(); // 現在の日時を取得
    history_time = history_time.getFullYear() + ('0' + (history_time.getMonth() + 1)).slice(-2) + ('0' + history_time.getDate()).slice(-2) + ('0' + history_time.getHours()).slice(-2) + ('0' + history_time.getMinutes()).slice(-2) + ('0' + history_time.getSeconds()).slice(-2);

    var cdt_history = localStorage.getItem("cdt_history"); //localStorageから過去の履歴配列を取得
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array();

    var path = location.pathname; // 見ているページのパス

    $.each(cdt_contents, function(i, v) { // 見ているページのパスの一部に含まれていたら閲覧履歴配列に追加
      if (path.indexOf(v.history) > -1) {
        var add_history = {item:v.history, time:history_time};
        cdt_history.push(add_history);
      }
    });

    cdt_history.sort(function(a, b){ // 閲覧日時の降順でソート
      if (a.time > b.time) return -1;
      if (a.time < b.time) return 1;
      return 0;
    });

/*    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      return (a1.findIndex(function(v2){
        return (v1.item === v2.item)
      }) === i1);
    });
*/

    // 20200213 find書き換え
    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      var i2 = '';
      for(let i=0; i<a1.length; i++){
        if(v1.item === a1[i].item){
          i2 = i;
          break;
        }
      }
      return(i2 === i1);
    });

    cdt_history = cdt_history.slice(0, 20); // 21個目以降は削除

    cdt_history = JSON.stringify(cdt_history);
    localStorage.setItem('cdt_history', cdt_history); // localStorageに履歴jsonを保存

  } catch(e) {}

}
JAL_cdt_setting_file.onload = function() {

  try {

    //
    // cdt_setting.js に設定されている JAL_cdt_contents.history が見ているページのパスの一部に含まれていたら、
    // localStorage（cdt_history）にhistoryと日時をjsonで保存する
    //
    var history_time = new Date(); // 現在の日時を取得
    history_time = history_time.getFullYear() + ('0' + (history_time.getMonth() + 1)).slice(-2) + ('0' + history_time.getDate()).slice(-2) + ('0' + history_time.getHours()).slice(-2) + ('0' + history_time.getMinutes()).slice(-2) + ('0' + history_time.getSeconds()).slice(-2);

    var cdt_history = localStorage.getItem("cdt_history"); //localStorageから過去の履歴配列を取得
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array();

    var path = location.pathname; // 見ているページのパス

    $.each(JAL_cdt_contents, function(i, v) { // 見ているページのパスの一部に含まれていたら閲覧履歴配列に追加
      if (path.indexOf(v.history) > -1) {
        var add_history = {item:v.history, time:history_time};
        cdt_history.push(add_history);
      }
    });

    cdt_history.sort(function(a, b){ // 閲覧日時の降順でソート
      if (a.time > b.time) return -1;
      if (a.time < b.time) return 1;
      return 0;
    });

/*    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      return (a1.findIndex(function(v2){
        return (v1.item === v2.item)
      }) === i1);
    });
*/

    // 20200213 find書き換え
    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      var i2 = '';
      for(let i=0; i<a1.length; i++){
        if(v1.item === a1[i].item){
          i2 = i;
          break;
        }
      }
      return(i2 === i1);
    });

    cdt_history = cdt_history.slice(0, 20); // 21個目以降は削除

    cdt_history = JSON.stringify(cdt_history);
    localStorage.setItem('cdt_history', cdt_history); // localStorageに履歴jsonを保存

  } catch(e) {}

}
CCC_cdt_setting_file.onload = function() {

  try {

    //
    // cdt_setting.js に設定されている CCC_cdt_contents.history が見ているページのパスの一部に含まれていたら、
    // localStorage（cdt_history）にhistoryと日時をjsonで保存する
    //
    var history_time = new Date(); // 現在の日時を取得
    history_time = history_time.getFullYear() + ('0' + (history_time.getMonth() + 1)).slice(-2) + ('0' + history_time.getDate()).slice(-2) + ('0' + history_time.getHours()).slice(-2) + ('0' + history_time.getMinutes()).slice(-2) + ('0' + history_time.getSeconds()).slice(-2);

    var cdt_history = localStorage.getItem("cdt_history"); //localStorageから過去の履歴配列を取得
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array();

    var path = location.pathname; // 見ているページのパス

    $.each(CCC_cdt_contents, function(i, v) { // 見ているページのパスの一部に含まれていたら閲覧履歴配列に追加
      if (path.indexOf(v.history) > -1) {
        var add_history = {item:v.history, time:history_time};
        cdt_history.push(add_history);
      }
    });

    cdt_history.sort(function(a, b){ // 閲覧日時の降順でソート
      if (a.time > b.time) return -1;
      if (a.time < b.time) return 1;
      return 0;
    });

/*    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      return (a1.findIndex(function(v2){
        return (v1.item === v2.item)
      }) === i1);
    });
*/

    // 20200213 find書き換え
    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      var i2 = '';
      for(let i=0; i<a1.length; i++){
        if(v1.item === a1[i].item){
          i2 = i;
          break;
        }
      }
      return(i2 === i1);
    });

    cdt_history = cdt_history.slice(0, 20); // 21個目以降は削除

    cdt_history = JSON.stringify(cdt_history);
    localStorage.setItem('cdt_history', cdt_history); // localStorageに履歴jsonを保存

  } catch(e) {}

}
OPH_cdt_setting_file.onload = function() {

  try {

    //
    // cdt_setting.js に設定されている OPH_cdt_contents.history が見ているページのパスの一部に含まれていたら、
    // localStorage（cdt_history）にhistoryと日時をjsonで保存する
    //
    var history_time = new Date(); // 現在の日時を取得
    history_time = history_time.getFullYear() + ('0' + (history_time.getMonth() + 1)).slice(-2) + ('0' + history_time.getDate()).slice(-2) + ('0' + history_time.getHours()).slice(-2) + ('0' + history_time.getMinutes()).slice(-2) + ('0' + history_time.getSeconds()).slice(-2);

    var cdt_history = localStorage.getItem("cdt_history"); //localStorageから過去の履歴配列を取得
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array();

    var path = location.pathname; // 見ているページのパス

    $.each(OPH_cdt_contents, function(i, v) { // 見ているページのパスの一部に含まれていたら閲覧履歴配列に追加
      if (path.indexOf(v.history) > -1) {
        var add_history = {item:v.history, time:history_time};
        cdt_history.push(add_history);
      }
    });

    cdt_history.sort(function(a, b){ // 閲覧日時の降順でソート
      if (a.time > b.time) return -1;
      if (a.time < b.time) return 1;
      return 0;
    });

/*    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      return (a1.findIndex(function(v2){
        return (v1.item === v2.item)
      }) === i1);
    });
*/

    // 20200213 find書き換え
    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      var i2 = '';
      for(let i=0; i<a1.length; i++){
        if(v1.item === a1[i].item){
          i2 = i;
          break;
        }
      }
      return(i2 === i1);
    });

    cdt_history = cdt_history.slice(0, 20); // 21個目以降は削除

    cdt_history = JSON.stringify(cdt_history);
    localStorage.setItem('cdt_history', cdt_history); // localStorageに履歴jsonを保存

  } catch(e) {}

}
YMD_cdt_setting_file.onload = function() {

  try {

    //
    // cdt_setting.js に設定されている YMD_cdt_contents.history が見ているページのパスの一部に含まれていたら、
    // localStorage（cdt_history）にhistoryと日時をjsonで保存する
    //
    var history_time = new Date(); // 現在の日時を取得
    history_time = history_time.getFullYear() + ('0' + (history_time.getMonth() + 1)).slice(-2) + ('0' + history_time.getDate()).slice(-2) + ('0' + history_time.getHours()).slice(-2) + ('0' + history_time.getMinutes()).slice(-2) + ('0' + history_time.getSeconds()).slice(-2);

    var cdt_history = localStorage.getItem("cdt_history"); //localStorageから過去の履歴配列を取得
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array();

    var path = location.pathname; // 見ているページのパス

    $.each(YMD_cdt_contents, function(i, v) { // 見ているページのパスの一部に含まれていたら閲覧履歴配列に追加
      if (path.indexOf(v.history) > -1) {
        var add_history = {item:v.history, time:history_time};
        cdt_history.push(add_history);
      }
    });

    cdt_history.sort(function(a, b){ // 閲覧日時の降順でソート
      if (a.time > b.time) return -1;
      if (a.time < b.time) return 1;
      return 0;
    });

/*    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      return (a1.findIndex(function(v2){
        return (v1.item === v2.item)
      }) === i1);
    });
*/

    // 20200213 find書き換え
    cdt_history = cdt_history.filter(function(v1, i1, a1){ // 重複する履歴を削除
      var i2 = '';
      for(let i=0; i<a1.length; i++){
        if(v1.item === a1[i].item){
          i2 = i;
          break;
        }
      }
      return(i2 === i1);
    });

    cdt_history = cdt_history.slice(0, 20); // 21個目以降は削除

    cdt_history = JSON.stringify(cdt_history);
    localStorage.setItem('cdt_history', cdt_history); // localStorageに履歴jsonを保存

  } catch(e) {}

}

/*
 * コンテンツの配信処理
 */

var cdtDo = function(parent_element) {

  // 引数が未設定の場合にbodyを設定
  if (typeof parent_element === 'undefined') parent_element = 'body';

  try {
    var cdt_history = localStorage.getItem("cdt_history");
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array(); // localStorageから取得した配列
  } catch(e) {
    var cdt_history = new Array();
  }

  $.ajax({ // 現在時刻の取得
    url: '/wpl/NBGate/i900302CT/',
    type: "POST",
    timeout: 3000
  }).done (function(json) {
    now = (json.dsb.currentDate[0]).slice(0,12);
  }).fail (function() {
    now = new Date();
    now = now.getFullYear() + ('0' + (now.getMonth() + 1)).slice(-2) + ('0' + now.getDate()).slice(-2) + ('0' + now.getHours()).slice(-2) + ('0' + now.getMinutes()).slice(-2);
  }).always(function() {

    // 画面内の全種類の[data-cdt]属性を[cdt_elements]配列に代入
    var cdt_elements = new Array(); // 画面内のすべてのcdtエリアを配列cdt_elementsに取得する
    $(parent_element + ' [data-cdt]').each(function() {
      cdt_elements.push($(this).attr('data-cdt'));
    });
    cdt_elements = cdt_elements.filter(function(x, i, self) { return self.indexOf(x) === i; }); // 重複のcdt_elementsを削除

    // ログイン履歴のCookieを取得する
    var cdt_all_cookie = document.cookie.split(';'); // すべてのCookieを取得する
    var cdt_logined_cookie = false; // ログイン履歴なしをデフォルトで設定する
    cdt_all_cookie.forEach (function(v) {
      var c = v.replace(' ', '').split('=');
      if (c[0] == 'NB_HALFLOGIN') cdt_logined_cookie = true; // ログイン履歴があったらtrueを代入
    });

    $.each(cdt_elements, function(index, value) { // cdtエリアごとにcontentを配信
      var cdt_contents_s = cdt_contents.filter(function(item, index){ // cdt_contentsから条件に合うcontentのみを取得する
//        var _history_match = cdt_history.find(function(h){ return (h.item === item.history); }); // 閲覧条件チェック

        // 20200213 find書き換え
          var _history_match = false;
          for(let i=0; i<cdt_history.length; i++){
            if(cdt_history[i].item === item.history){
              _history_match = true;
              break;
            }
          }

        // 表示条件に合うコンテンツのみを抽出
        if ( item.element == value // elementが一致
          && item.start <= now // 開始時間より後
          && now <= item.end // 終了時間より前
          && (typeof item.history == 'undefined' || _history_match == true) // 閲覧条件がないか、閲覧条件が一致
          && (typeof item.logined == 'undefined' || (item.logined === 1 && cdt_logined_cookie === true) || (item.logined === 0 && cdt_logined_cookie === false)) // ログイン履歴の条件がないか、ログイン履歴が一致
          && (item.priority !== 0) // 優先順位が0以外
        ) return true;
      });

      var cdt_contents_p = new Array(); // priorityごとの配列に設定する
      for (i = 0; i < cdt_contents_s.length; i++) {
        var p = cdt_contents_s[i].priority;
        if (typeof p == 'undefined') p = 100; // priorityの設定がない場合は100を設定
        if (!Array.isArray(cdt_contents_p[p])) cdt_contents_p[p] = new Array();
        cdt_contents_p[p].push(cdt_contents_s[i]);
      }
      cdt_contents_p = cdt_contents_p.filter(Boolean); // 配列の空要素を削除

      $('[data-cdt="' + value + '"]').each(function() { // elementへpriority順にcontentを配信する
        var ele = $(this);
        if (cdt_contents_p.length != 0 && cdt_contents_p[0].length != 0) {
          var c = Math.floor(Math.random() * cdt_contents_p[0].length);
          ele.append(cdt_contents_p[0][c].content);
          dataLayer.push({'event':'コンテンツ配信','eventCategory':cdt_contents_p[0][c].element,'eventAction':'imp','eventLabel':cdt_contents_p[0][c].name}); //GTMにインプレッションをpush
          cdt_contents_p[0].splice(c, 1); // 配信したコンテンツを配列から削除

          if (cdt_contents_p[0].length == 0) cdt_contents_p.splice(0, 1); // priorityごとの配列が空になったら要素を削除
        } else {

          if(ele.parents().hasClass('top-cardBox')){
            ele.closest('.top-cardBox').remove(); // トップのカードの場合は親ごとエリアを削除
          }else{
            ele.remove(); // 配信するコンテンツがない場合はエリアを削除
          }

        }
      });

      var t_iconLink = setInterval(function() { if(typeof iconLink === 'function') { // 別窓、モーダル、ダウンロード、PDFのアイコンを表示するfunction実行
        iconLink();
      clearInterval(t_iconLink); }}, 500);

    });

  });

}

var JAL_cdtDo = function(parent_element) {

  // 引数が未設定の場合にbodyを設定
  if (typeof parent_element === 'undefined') parent_element = 'body';

  try {
    var cdt_history = localStorage.getItem("cdt_history");
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array(); // localStorageから取得した配列
  } catch(e) {
    var cdt_history = new Array();
  }

  $.ajax({ // 現在時刻の取得
    url: '/wpl/NBGate/i900302CT/',
    type: "POST",
    timeout: 3000
  }).done (function(json) {
    now = (json.dsb.currentDate[0]).slice(0,12);
  }).fail (function() {
    now = new Date();
    now = now.getFullYear() + ('0' + (now.getMonth() + 1)).slice(-2) + ('0' + now.getDate()).slice(-2) + ('0' + now.getHours()).slice(-2) + ('0' + now.getMinutes()).slice(-2);
  }).always(function() {

    // 画面内の全種類の[data-cdt]属性を[cdt_elements]配列に代入
    var cdt_elements = new Array(); // 画面内のすべてのcdtエリアを配列cdt_elementsに取得する
    $(parent_element + ' [data-cdt]').each(function() {
      cdt_elements.push($(this).attr('data-cdt'));
    });
    cdt_elements = cdt_elements.filter(function(x, i, self) { return self.indexOf(x) === i; }); // 重複のcdt_elementsを削除

    // ログイン履歴のCookieを取得する
    var cdt_all_cookie = document.cookie.split(';'); // すべてのCookieを取得する
    var cdt_logined_cookie = false; // ログイン履歴なしをデフォルトで設定する
    cdt_all_cookie.forEach (function(v) {
      var c = v.replace(' ', '').split('=');
      if (c[0] == 'NB_HALFLOGIN') cdt_logined_cookie = true; // ログイン履歴があったらtrueを代入
    });

    $.each(cdt_elements, function(index, value) { // cdtエリアごとにcontentを配信
      var JAL_cdt_contents_s = JAL_cdt_contents.filter(function(item, index){ // JAL_cdt_contentsから条件に合うcontentのみを取得する
//        var _history_match = cdt_history.find(function(h){ return (h.item === item.history); }); // 閲覧条件チェック

        // 20200213 find書き換え
          var _history_match = false;
          for(let i=0; i<cdt_history.length; i++){
            if(cdt_history[i].item === item.history){
              _history_match = true;
              break;
            }
          }

        // 表示条件に合うコンテンツのみを抽出
        if ( item.element == value // elementが一致
          && item.start <= now // 開始時間より後
          && now <= item.end // 終了時間より前
          && (typeof item.history == 'undefined' || _history_match == true) // 閲覧条件がないか、閲覧条件が一致
          && (typeof item.logined == 'undefined' || (item.logined === 1 && cdt_logined_cookie === true) || (item.logined === 0 && cdt_logined_cookie === false)) // ログイン履歴の条件がないか、ログイン履歴が一致
          && (item.priority !== 0) // 優先順位が0以外
        ) return true;
      });

      var JAL_cdt_contents_p = new Array(); // priorityごとの配列に設定する
      for (i = 0; i < JAL_cdt_contents_s.length; i++) {
        var p = JAL_cdt_contents_s[i].priority;
        if (typeof p == 'undefined') p = 100; // priorityの設定がない場合は100を設定
        if (!Array.isArray(JAL_cdt_contents_p[p])) JAL_cdt_contents_p[p] = new Array();
        JAL_cdt_contents_p[p].push(JAL_cdt_contents_s[i]);
      }
      JAL_cdt_contents_p = JAL_cdt_contents_p.filter(Boolean); // 配列の空要素を削除

      $('[data-cdt="' + value + '"]').each(function() { // elementへpriority順にcontentを配信する
        var ele = $(this);
        if (JAL_cdt_contents_p.length != 0 && JAL_cdt_contents_p[0].length != 0) {
          var c = Math.floor(Math.random() * JAL_cdt_contents_p[0].length);
          ele.append(JAL_cdt_contents_p[0][c].content);
          dataLayer.push({'event':'コンテンツ配信','eventCategory':JAL_cdt_contents_p[0][c].element,'eventAction':'imp','eventLabel':JAL_cdt_contents_p[0][c].name}); //GTMにインプレッションをpush
          JAL_cdt_contents_p[0].splice(c, 1); // 配信したコンテンツを配列から削除

          if (JAL_cdt_contents_p[0].length == 0) JAL_cdt_contents_p.splice(0, 1); // priorityごとの配列が空になったら要素を削除
        } else {

          if(ele.parents().hasClass('top-cardBox')){
            ele.closest('.top-cardBox').remove(); // トップのカードの場合は親ごとエリアを削除
          }else{
            ele.remove(); // 配信するコンテンツがない場合はエリアを削除
          }

        }
      });

      var t_iconLink = setInterval(function() { if(typeof iconLink === 'function') { // 別窓、モーダル、ダウンロード、PDFのアイコンを表示するfunction実行
        iconLink();
      clearInterval(t_iconLink); }}, 500);

    });

  });

}

var CCC_cdtDo = function(parent_element) {

  // 引数が未設定の場合にbodyを設定
  if (typeof parent_element === 'undefined') parent_element = 'body';

  try {
    var cdt_history = localStorage.getItem("cdt_history");
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array(); // localStorageから取得した配列
  } catch(e) {
    var cdt_history = new Array();
  }

  $.ajax({ // 現在時刻の取得
    url: '/wpl/NBGate/i900302CT/',
    type: "POST",
    timeout: 3000
  }).done (function(json) {
    now = (json.dsb.currentDate[0]).slice(0,12);
  }).fail (function() {
    now = new Date();
    now = now.getFullYear() + ('0' + (now.getMonth() + 1)).slice(-2) + ('0' + now.getDate()).slice(-2) + ('0' + now.getHours()).slice(-2) + ('0' + now.getMinutes()).slice(-2);
  }).always(function() {

    // 画面内の全種類の[data-cdt]属性を[cdt_elements]配列に代入
    var cdt_elements = new Array(); // 画面内のすべてのcdtエリアを配列cdt_elementsに取得する
    $(parent_element + ' [data-cdt]').each(function() {
      cdt_elements.push($(this).attr('data-cdt'));
    });
    cdt_elements = cdt_elements.filter(function(x, i, self) { return self.indexOf(x) === i; }); // 重複のcdt_elementsを削除

    // ログイン履歴のCookieを取得する
    var cdt_all_cookie = document.cookie.split(';'); // すべてのCookieを取得する
    var cdt_logined_cookie = false; // ログイン履歴なしをデフォルトで設定する
    cdt_all_cookie.forEach (function(v) {
      var c = v.replace(' ', '').split('=');
      if (c[0] == 'NB_HALFLOGIN') cdt_logined_cookie = true; // ログイン履歴があったらtrueを代入
    });

    $.each(cdt_elements, function(index, value) { // cdtエリアごとにcontentを配信
      var CCC_cdt_contents_s = CCC_cdt_contents.filter(function(item, index){ // CCC_cdt_contentsから条件に合うcontentのみを取得する
//        var _history_match = cdt_history.find(function(h){ return (h.item === item.history); }); // 閲覧条件チェック

        // 20200213 find書き換え
          var _history_match = false;
          for(let i=0; i<cdt_history.length; i++){
            if(cdt_history[i].item === item.history){
              _history_match = true;
              break;
            }
          }

        // 表示条件に合うコンテンツのみを抽出
        if ( item.element == value // elementが一致
          && item.start <= now // 開始時間より後
          && now <= item.end // 終了時間より前
          && (typeof item.history == 'undefined' || _history_match == true) // 閲覧条件がないか、閲覧条件が一致
          && (typeof item.logined == 'undefined' || (item.logined === 1 && cdt_logined_cookie === true) || (item.logined === 0 && cdt_logined_cookie === false)) // ログイン履歴の条件がないか、ログイン履歴が一致
          && (item.priority !== 0) // 優先順位が0以外
        ) return true;
      });

      var CCC_cdt_contents_p = new Array(); // priorityごとの配列に設定する
      for (i = 0; i < CCC_cdt_contents_s.length; i++) {
        var p = CCC_cdt_contents_s[i].priority;
        if (typeof p == 'undefined') p = 100; // priorityの設定がない場合は100を設定
        if (!Array.isArray(CCC_cdt_contents_p[p])) CCC_cdt_contents_p[p] = new Array();
        CCC_cdt_contents_p[p].push(CCC_cdt_contents_s[i]);
      }
      CCC_cdt_contents_p = CCC_cdt_contents_p.filter(Boolean); // 配列の空要素を削除

      $('[data-cdt="' + value + '"]').each(function() { // elementへpriority順にcontentを配信する
        var ele = $(this);
        if (CCC_cdt_contents_p.length != 0 && CCC_cdt_contents_p[0].length != 0) {
          var c = Math.floor(Math.random() * CCC_cdt_contents_p[0].length);
          ele.append(CCC_cdt_contents_p[0][c].content);
          dataLayer.push({'event':'コンテンツ配信','eventCategory':CCC_cdt_contents_p[0][c].element,'eventAction':'imp','eventLabel':CCC_cdt_contents_p[0][c].name}); //GTMにインプレッションをpush
          CCC_cdt_contents_p[0].splice(c, 1); // 配信したコンテンツを配列から削除

          if (CCC_cdt_contents_p[0].length == 0) CCC_cdt_contents_p.splice(0, 1); // priorityごとの配列が空になったら要素を削除
        } else {

          if(ele.parents().hasClass('top-cardBox')){
            ele.closest('.top-cardBox').remove(); // トップのカードの場合は親ごとエリアを削除
          }else{
            ele.remove(); // 配信するコンテンツがない場合はエリアを削除
          }

        }
      });

      var t_iconLink = setInterval(function() { if(typeof iconLink === 'function') { // 別窓、モーダル、ダウンロード、PDFのアイコンを表示するfunction実行
        iconLink();
      clearInterval(t_iconLink); }}, 500);

    });

  });

}

var OPH_cdtDo = function(parent_element) {

  // 引数が未設定の場合にbodyを設定
  if (typeof parent_element === 'undefined') parent_element = 'body';

  try {
    var cdt_history = localStorage.getItem("cdt_history");
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array(); // localStorageから取得した配列
  } catch(e) {
    var cdt_history = new Array();
  }

  $.ajax({ // 現在時刻の取得
    url: '/wpl/NBGate/i900302CT/',
    type: "POST",
    timeout: 3000
  }).done (function(json) {
    now = (json.dsb.currentDate[0]).slice(0,12);
  }).fail (function() {
    now = new Date();
    now = now.getFullYear() + ('0' + (now.getMonth() + 1)).slice(-2) + ('0' + now.getDate()).slice(-2) + ('0' + now.getHours()).slice(-2) + ('0' + now.getMinutes()).slice(-2);
  }).always(function() {

    // 画面内の全種類の[data-cdt]属性を[cdt_elements]配列に代入
    var cdt_elements = new Array(); // 画面内のすべてのcdtエリアを配列cdt_elementsに取得する
    $(parent_element + ' [data-cdt]').each(function() {
      cdt_elements.push($(this).attr('data-cdt'));
    });
    cdt_elements = cdt_elements.filter(function(x, i, self) { return self.indexOf(x) === i; }); // 重複のcdt_elementsを削除

    // ログイン履歴のCookieを取得する
    var cdt_all_cookie = document.cookie.split(';'); // すべてのCookieを取得する
    var cdt_logined_cookie = false; // ログイン履歴なしをデフォルトで設定する
    cdt_all_cookie.forEach (function(v) {
      var c = v.replace(' ', '').split('=');
      if (c[0] == 'NB_HALFLOGIN') cdt_logined_cookie = true; // ログイン履歴があったらtrueを代入
    });

    $.each(cdt_elements, function(index, value) { // cdtエリアごとにcontentを配信
      var OPH_cdt_contents_s = OPH_cdt_contents.filter(function(item, index){ // OPH_cdt_contentsから条件に合うcontentのみを取得する
//        var _history_match = cdt_history.find(function(h){ return (h.item === item.history); }); // 閲覧条件チェック

        // 20200213 find書き換え
          var _history_match = false;
          for(let i=0; i<cdt_history.length; i++){
            if(cdt_history[i].item === item.history){
              _history_match = true;
              break;
            }
          }

        // 表示条件に合うコンテンツのみを抽出
        if ( item.element == value // elementが一致
          && item.start <= now // 開始時間より後
          && now <= item.end // 終了時間より前
          && (typeof item.history == 'undefined' || _history_match == true) // 閲覧条件がないか、閲覧条件が一致
          && (typeof item.logined == 'undefined' || (item.logined === 1 && cdt_logined_cookie === true) || (item.logined === 0 && cdt_logined_cookie === false)) // ログイン履歴の条件がないか、ログイン履歴が一致
          && (item.priority !== 0) // 優先順位が0以外
        ) return true;
      });

      var OPH_cdt_contents_p = new Array(); // priorityごとの配列に設定する
      for (i = 0; i < OPH_cdt_contents_s.length; i++) {
        var p = OPH_cdt_contents_s[i].priority;
        if (typeof p == 'undefined') p = 100; // priorityの設定がない場合は100を設定
        if (!Array.isArray(OPH_cdt_contents_p[p])) OPH_cdt_contents_p[p] = new Array();
        OPH_cdt_contents_p[p].push(OPH_cdt_contents_s[i]);
      }
      OPH_cdt_contents_p = OPH_cdt_contents_p.filter(Boolean); // 配列の空要素を削除

      $('[data-cdt="' + value + '"]').each(function() { // elementへpriority順にcontentを配信する
        var ele = $(this);
        if (OPH_cdt_contents_p.length != 0 && OPH_cdt_contents_p[0].length != 0) {
          var c = Math.floor(Math.random() * OPH_cdt_contents_p[0].length);
          ele.append(OPH_cdt_contents_p[0][c].content);
          dataLayer.push({'event':'コンテンツ配信','eventCategory':OPH_cdt_contents_p[0][c].element,'eventAction':'imp','eventLabel':OPH_cdt_contents_p[0][c].name}); //GTMにインプレッションをpush
          OPH_cdt_contents_p[0].splice(c, 1); // 配信したコンテンツを配列から削除

          if (OPH_cdt_contents_p[0].length == 0) OPH_cdt_contents_p.splice(0, 1); // priorityごとの配列が空になったら要素を削除
        } else {

          if(ele.parents().hasClass('top-cardBox')){
            ele.closest('.top-cardBox').remove(); // トップのカードの場合は親ごとエリアを削除
          }else{
            ele.remove(); // 配信するコンテンツがない場合はエリアを削除
          }

        }
      });

      var t_iconLink = setInterval(function() { if(typeof iconLink === 'function') { // 別窓、モーダル、ダウンロード、PDFのアイコンを表示するfunction実行
        iconLink();
      clearInterval(t_iconLink); }}, 500);

    });

  });

}

var YMD_cdtDo = function(parent_element) {

  // 引数が未設定の場合にbodyを設定
  if (typeof parent_element === 'undefined') parent_element = 'body';

  try {
    var cdt_history = localStorage.getItem("cdt_history");
    cdt_history = (cdt_history !== null) ? JSON.parse(cdt_history) : new Array(); // localStorageから取得した配列
  } catch(e) {
    var cdt_history = new Array();
  }

  $.ajax({ // 現在時刻の取得
    url: '/wpl/NBGate/i900302CT/',
    type: "POST",
    timeout: 3000
  }).done (function(json) {
    now = (json.dsb.currentDate[0]).slice(0,12);
  }).fail (function() {
    now = new Date();
    now = now.getFullYear() + ('0' + (now.getMonth() + 1)).slice(-2) + ('0' + now.getDate()).slice(-2) + ('0' + now.getHours()).slice(-2) + ('0' + now.getMinutes()).slice(-2);
  }).always(function() {

    // 画面内の全種類の[data-cdt]属性を[cdt_elements]配列に代入
    var cdt_elements = new Array(); // 画面内のすべてのcdtエリアを配列cdt_elementsに取得する
    $(parent_element + ' [data-cdt]').each(function() {
      cdt_elements.push($(this).attr('data-cdt'));
    });
    cdt_elements = cdt_elements.filter(function(x, i, self) { return self.indexOf(x) === i; }); // 重複のcdt_elementsを削除

    // ログイン履歴のCookieを取得する
    var cdt_all_cookie = document.cookie.split(';'); // すべてのCookieを取得する
    var cdt_logined_cookie = false; // ログイン履歴なしをデフォルトで設定する
    cdt_all_cookie.forEach (function(v) {
      var c = v.replace(' ', '').split('=');
      if (c[0] == 'NB_HALFLOGIN') cdt_logined_cookie = true; // ログイン履歴があったらtrueを代入
    });

    $.each(cdt_elements, function(index, value) { // cdtエリアごとにcontentを配信
      var YMD_cdt_contents_s = YMD_cdt_contents.filter(function(item, index){ // YMD_cdt_contentsから条件に合うcontentのみを取得する
//        var _history_match = cdt_history.find(function(h){ return (h.item === item.history); }); // 閲覧条件チェック

        // 20200213 find書き換え
          var _history_match = false;
          for(let i=0; i<cdt_history.length; i++){
            if(cdt_history[i].item === item.history){
              _history_match = true;
              break;
            }
          }

        // 表示条件に合うコンテンツのみを抽出
        if ( item.element == value // elementが一致
          && item.start <= now // 開始時間より後
          && now <= item.end // 終了時間より前
          && (typeof item.history == 'undefined' || _history_match == true) // 閲覧条件がないか、閲覧条件が一致
          && (typeof item.logined == 'undefined' || (item.logined === 1 && cdt_logined_cookie === true) || (item.logined === 0 && cdt_logined_cookie === false)) // ログイン履歴の条件がないか、ログイン履歴が一致
          && (item.priority !== 0) // 優先順位が0以外
        ) return true;
      });

      var YMD_cdt_contents_p = new Array(); // priorityごとの配列に設定する
      for (i = 0; i < YMD_cdt_contents_s.length; i++) {
        var p = YMD_cdt_contents_s[i].priority;
        if (typeof p == 'undefined') p = 100; // priorityの設定がない場合は100を設定
        if (!Array.isArray(YMD_cdt_contents_p[p])) YMD_cdt_contents_p[p] = new Array();
        YMD_cdt_contents_p[p].push(YMD_cdt_contents_s[i]);
      }
      YMD_cdt_contents_p = YMD_cdt_contents_p.filter(Boolean); // 配列の空要素を削除

      $('[data-cdt="' + value + '"]').each(function() { // elementへpriority順にcontentを配信する
        var ele = $(this);
        if (YMD_cdt_contents_p.length != 0 && YMD_cdt_contents_p[0].length != 0) {
          var c = Math.floor(Math.random() * YMD_cdt_contents_p[0].length);
          ele.append(YMD_cdt_contents_p[0][c].content);
          dataLayer.push({'event':'コンテンツ配信','eventCategory':YMD_cdt_contents_p[0][c].element,'eventAction':'imp','eventLabel':YMD_cdt_contents_p[0][c].name}); //GTMにインプレッションをpush
          YMD_cdt_contents_p[0].splice(c, 1); // 配信したコンテンツを配列から削除

          if (YMD_cdt_contents_p[0].length == 0) YMD_cdt_contents_p.splice(0, 1); // priorityごとの配列が空になったら要素を削除
        } else {

          if(ele.parents().hasClass('top-cardBox')){
            ele.closest('.top-cardBox').remove(); // トップのカードの場合は親ごとエリアを削除
          }else{
            ele.remove(); // 配信するコンテンツがない場合はエリアを削除
          }

        }
      });

      var t_iconLink = setInterval(function() { if(typeof iconLink === 'function') { // 別窓、モーダル、ダウンロード、PDFのアイコンを表示するfunction実行
        iconLink();
      clearInterval(t_iconLink); }}, 500);

    });

  });

}

/*2000212
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this === null) throw new TypeError('Array.prototype.find called on null or undefined');
    if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;
    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) return value;
    }
    return undefined;
  };
}
*/

neobankViewCtl = function() {
  var d = document.domain;
  if (d.indexOf('tneobank') > -1) $('.neobkctl_hide_tneobank').hide();
  if (d.indexOf('tneobank') > -1) $('.neobkctl_view_tneobank').show();
}
neobankViewCtl();

neobankViewCtlCookie = function() {
  var c = document.cookie.split(';'); // すべてのCookieを取得する
  var i = 0;
  while (i < c.length) {
    c[i] = c[i].replace(' ', '').split('=');
    if (c[i][0] == 'NB_NEOBANKCD') {
      var neobankcd = c[i][1];
      break;
    }
    i++;
  }
  if (typeof neobankcd != 'undefined') {
    switch (neobankcd) {
      case 'JAL':
        $('.neobkctl_cookie_hide_jalbank').hide();
        $('.neobkctl_cookie_view_jalbank').show();
        break;
      case 'CCC':
        $('.neobkctl_cookie_hide_tneobank').hide();
        $('.neobkctl_cookie_view_tneobank').show();
        break;
      case 'YMD':
        $('.neobkctl_cookie_hide_yamadadenki').hide();
        $('.neobkctl_cookie_view_yamadadenki').show();
        break;
      case 'OPH':
        $('.neobkctl_cookie_hide_openhouse').hide();
        $('.neobkctl_cookie_view_openhouse').show();
        break;
      default:
        $('.neobkctl_cookie_hide_netbank').hide();
        $('.neobkctl_cookie_view_netbank').show();
        break;
    }
  }
}
neobankViewCtlCookie();

mainjsReadedFlag = true;