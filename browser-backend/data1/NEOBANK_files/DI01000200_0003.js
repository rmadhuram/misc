/* 
 * 1行目の[t_cdt]の後ろに、Getごとの番号を付与した変数に変更すること。
 * 同じ変数を、最後の[clearInterval(*****);]にもセットする。
 * [cdtDo(＊＊＊);]の実行の際は、引数に、[data-cdt]属性の親要素をセットする。
 */

var t_cdt_0003 = setInterval(function() {

  if (
       typeof $ === 'function'
    && typeof cdtDo === 'function'
    && $('.top-bnrarea').length > 0
  ) {

    cdtDo('.top-bnrarea');

    // 配信が完了したらカルーセル実行
    var t_cdt_0003_topbnr_complete = setInterval(function() { if ($('.top-bnrarea [data-cdt]:empty').length == 0) {

      function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

      var ARROW_PREV = '<div class="m-slide-prev"><button class="m-slide-icon m-icon"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M267.518,0c7.693,0,14.417,2.825,20.203,8.51c11.539,11.339,11.539,29.309,0,39.693L81.802,249.614l205.918,201.39	c11.539,11.335,11.539,29.31,0,39.693c-11.559,11.354-29.838,11.354-40.408,0L0,249.614L247.312,8.51	C252.115,2.825,259.809,0,267.518,0z"/><title>前へ</title></svg></button></div>';
      var ARROW_NEXT = '<div class="m-slide-next"><button class="m-slide-icon m-icon"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M28.878,499.543c-7.698,0-14.426-2.828-20.218-8.516c-11.547-11.345-11.547-29.329,0-39.718l206.056-201.545L8.66,48.24	c-11.547-11.344-11.547-29.329,0-39.72c11.565-11.36,29.859-11.36,40.436,0l247.479,241.245L49.096,491.027	C44.292,496.715,36.595,499.543,28.878,499.543z"/><title>次へ</title></svg></button></div>';

      var _$$find$slick;

      $('.top-bnrarea').find('.m-slide-main > ul').on('init', function() {
        $('.top-bnrarea').css('opacity', 1);
      });

      $('.top-bnrarea-slide').find('.m-slide-main > ul').slick((_$$find$slick = {
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: '.top-bnrarea-dots',
        appendArrows: '.top-bnrarea-slide',
        prevArrow: ARROW_PREV,
        nextArrow: ARROW_NEXT
      }, _defineProperty(_$$find$slick, 'slidesToShow', 4), _defineProperty(_$$find$slick, 'draggable', false), _defineProperty(_$$find$slick, 'responsive', [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }, {
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
      }]), _$$find$slick));

      var $el = $('.top-bnrarea-slide');
      var $slick = $el.find('.m-slide-main > ul');
      var flg = 'play';
      $el.find('.m-slide-dots li button').attr('tabindex', 0);
      // 再生・停止
      $el.find('.m-slide-stop').on('click', function () {
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

      //dot、再生ボタンの表示制御
      setNav();
      var timer_nav = false;
      $(window).resize(function () {
        if (timer_nav !== false) {
          clearTimeout(timer_nav);
        }
        timer_nav = setTimeout(function () {
          // リサイズ停止
          setNav();
        }, 200);
      });

      function setNav() {
        var _nav = $('.top-bnrarea .m-slide-next').length;
        if ($('.top-bnrarea .m-slide-next').length) {
          $('.top-bnrarea .m-slide-nav').show();
        } else {
          $('.top-bnrarea .m-slide-nav').hide();
        }
      }

      clearInterval(t_cdt_0003_topbnr_complete); 

    }}, 500);

    clearInterval(t_cdt_0003);
  }

}, 500);

var t_cdt_0003_02 = setInterval(function() {

  if (
       typeof $ === 'function'
    && typeof cdtDo === 'function'
    && $('.top-bnrarea-02').length > 0
  ) {

    cdtDo('.top-bnrarea-02');

    // 配信が完了したらカルーセル実行
    var t_cdt_0003_topbnr_complete = setInterval(function() { if ($('.top-bnrarea-02 [data-cdt]:empty').length == 0) {

      function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

      var ARROW_PREV = '<div class="m-slide-prev"><button class="m-slide-icon m-icon"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M267.518,0c7.693,0,14.417,2.825,20.203,8.51c11.539,11.339,11.539,29.309,0,39.693L81.802,249.614l205.918,201.39	c11.539,11.335,11.539,29.31,0,39.693c-11.559,11.354-29.838,11.354-40.408,0L0,249.614L247.312,8.51	C252.115,2.825,259.809,0,267.518,0z"/><title>前へ</title></svg></button></div>';
      var ARROW_NEXT = '<div class="m-slide-next"><button class="m-slide-icon m-icon"><svg version="1.1" class="m-icon-color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve" role="img"><path d="M28.878,499.543c-7.698,0-14.426-2.828-20.218-8.516c-11.547-11.345-11.547-29.329,0-39.718l206.056-201.545L8.66,48.24	c-11.547-11.344-11.547-29.329,0-39.72c11.565-11.36,29.859-11.36,40.436,0l247.479,241.245L49.096,491.027	C44.292,496.715,36.595,499.543,28.878,499.543z"/><title>次へ</title></svg></button></div>';

      var _$$find$slick;

      $('.top-bnrarea-02').find('.m-slide-main-02 > ul').on('init', function() {
        $('.top-bnrarea-02').css('opacity', 1);
      });

      $('.top-bnrarea-slide-02').find('.m-slide-main-02 > ul').slick((_$$find$slick = {
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: '.top-bnrarea-dots-02',
        appendArrows: '.top-bnrarea-slide-02',
        prevArrow: ARROW_PREV,
        nextArrow: ARROW_NEXT
      }, _defineProperty(_$$find$slick, 'slidesToShow', 4), _defineProperty(_$$find$slick, 'draggable', false), _defineProperty(_$$find$slick, 'responsive', [{
        breakpoint: 2000,
        settings: {
          slidesToShow: 3
        }
      }, {
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
      }]), _$$find$slick));

      var $el = $('.top-bnrarea-slide-02');
      var $slick = $el.find('.m-slide-main-02 > ul');
      var flg = 'play';
      $el.find('.m-slide-dots-02 li button').attr('tabindex', 0);
      // 再生・停止
      $el.find('.m-slide-stop-02').on('click', function () {
        var restartClass = 'm-slide-restart';
        if (flg === 'play') {
          $slick.slick('slickPause');
          $(this).addClass(restartClass);
          $('.icon-bnrControl-02 path').attr('d', 'M458.71,79.32H41.29A41.41,41.41,0,0,0,0,120.62V379.38a41.41,41.41,0,0,0,41.29,41.29H458.71A41.41,41.41,0,0,0,500,379.38V120.62A41.41,41.41,0,0,0,458.71,79.32ZM217.63,322.5V183.59L320.78,253Z');
          flg = 'stop';
        } else {
          $slick.slick('slickPlay');
          $(this).removeClass(restartClass);
          $('.icon-bnrControl-02 path').attr('d', 'M458.71,79.32H41.29A41.41,41.41,0,0,0,0,120.62V379.38a41.41,41.41,0,0,0,41.29,41.29H458.71A41.41,41.41,0,0,0,500,379.38V120.62A41.41,41.41,0,0,0,458.71,79.32ZM123.63,322.5V183.59L226.79,253Zm187.11,0h-33V183.59h33Zm68.13,0h-33V183.59h33Z');
        flg = 'play';
        }
      });

      //dot、再生ボタンの表示制御
      setNav();
      var timer_nav = false;
      $(window).resize(function () {
        if (timer_nav !== false) {
          clearTimeout(timer_nav);
        }
        timer_nav = setTimeout(function () {
          // リサイズ停止
          setNav();
        }, 200);
      });

      function setNav() {
        var _nav = $('.top-bnrarea-02 .m-slide-next').length;
        if ($('.top-bnrarea-02 .m-slide-next').length) {
          $('.top-bnrarea-02 .m-slide-nav-02').show();
        } else {
          $('.top-bnrarea-02 .m-slide-nav-02').hide();
        }
      }

      clearInterval(t_cdt_0003_topbnr_complete); 

    }}, 500);

    clearInterval(t_cdt_0003_02);
  }

}, 500);
