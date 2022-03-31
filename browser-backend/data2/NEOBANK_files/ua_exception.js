var exc = function(){

// ユーザエージェントによる要素表示
var ua = navigator.userAgent.toLowerCase();

// iOS12.1.1で表示
ua_view_just_ios12_1_1 = function(ua) {
  if ((ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) && ua.indexOf('12_1_1') > -1) {
    [].forEach.call (document.getElementsByClassName('ua_view_just_ios12_1_1'), function(e) {
      e.style.cssText = 'display:block !important';
    });
  }
}
ua_view_just_ios12_1_1(ua);

// iOS11以上で表示
ua_view_over_ios11 = function(ua) {
  var v = ua.match(/ (\d+)_\d+/);
  if ((ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) && v != null && 11 <= Number(v[1])) {
    [].forEach.call (document.getElementsByClassName('ua_view_over_ios11'), function(e) {
      e.style.cssText = 'display:block !important';
    });
  }
}
ua_view_over_ios11(ua);

// iOS10以下で表示
ua_view_under_ios10 = function(ua) {
  var v = ua.match(/ (\d+)_\d+/);
  if ((ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) && v != null && Number(v[1]) <= 10) {
    [].forEach.call (document.getElementsByClassName('ua_view_under_ios10'), function(e) {
      e.style.cssText = 'display:block !important';
    });
  }
}
ua_view_under_ios10(ua);

// Android6以上で表示
ua_view_over_android6 = function(ua) {
  var v = ua.match(/android (\d+)/);
  if (v !== null && 6 <= Number(v[1])) {
    [].forEach.call (document.getElementsByClassName('ua_view_over_android6'), function(e) {
      e.style.cssText = 'display:block !important';
    });
  }
}
ua_view_over_android6(ua);

// 住信SBIネット銀行アプリ以外で表示
ua_view_other_netbkapp = function(ua) {
  if (ua.indexOf('netbkapp') == -1 && ua.indexOf('netbkapp_jal') == -1 && ua.indexOf('netbkapp_ccc') == -1) {
    [].forEach.call (document.getElementsByClassName('ua_view_other_netbkapp'), function(e) {
      e.style.cssText = 'display:block !important';
    });
  }
}
ua_view_other_netbkapp(ua);

// 住信SBIネット銀行アプリで表示
ua_view_just_netbkapp = function(ua) {
  if (ua.indexOf('netbkapp') > -1 || ua.indexOf('netbkapp_jal') > -1 || ua.indexOf('netbkapp_ccc') > -1) {
    [].forEach.call (document.getElementsByClassName('ua_view_just_netbkapp'), function(e) {
      e.style.cssText = 'display:block !important';
    });
  }
}
ua_view_just_netbkapp(ua);

};

setTimeout(exc, 1000);


var exc2 = function(){

// ユーザエージェントによる要素表示
var ua = navigator.userAgent.toLowerCase();

/*
 * アプリ出し分け
 */

// iOSのみ
if ((ua.indexOf('iphone') > 0 && ua.indexOf('android') == -1) || ua.indexOf('ipod') > 0 || ua.indexOf('ipad') > 0) {
$('.ua_ios').css('display', 'block');
}

//androidのみ表示
if (ua.indexOf('android') > 0) {
$('.ua_android').css('display', 'block');
}

// スマートフォン以外で表示
if ((ua.indexOf('iphone') > 0) || (ua.indexOf('android') > 0) || (ua.indexOf('windows phone') > 0) || (ua.indexOf('ipod') > 0) || (ua.indexOf('ipad') > 0)) {
$('.ua_pc').css('display', 'none');
}

};
setTimeout(exc2, 1000);
