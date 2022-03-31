var t_datajstext = setInterval(function() { if($ !== undefined) {

setKinriDate = function() {

// 金利基準日
// 住宅ローン金利（ネット含む）【hl】ネット専用【smtbhl】新ミスター【mrhl】フラット35【flathl】提携【teikeihl】

  $(".hlkinriyymmdd").text("2022年3月1日");
  $(".hlkinriyymm").text("2022年3月");
  $(".hlkinrimm").text("3月");

  $(".smtbhlkinriyymmdd").text("2022年3月1日");
  $(".smtbhlkinriyymm").text("2022年3月");
  $(".smtbhlkinrimm").text("3月");

  $(".mrhlkinriyymmdd").text("2022年3月1日");
  $(".mrhlkinriyymm").text("2022年3月");
  $(".mrhlkinrimm").text("3月");
  $(".mrhlkinriyymmdd").text("2022年3月1日");
  $(".mrhlkinriyymm").text("2022年3月");

  $(".flathlkinrimm").text("3月");
  $(".flathlkinriyymmdd").text("2022年3月1日");
  $(".flathlkinriyymm").text("2022年3月");
  $(".flathlkinrimm").text("3月");
  $(".flathlkinrim").text("3月");

  $(".teikeihlkinriyymmdd").text("2022年3月1日");
  $(".teikeihlkinriyymm").text("2022年3月");
  $(".teikeihlkinrimm").text("3月");
 
  $(".flathosyohlkinrimm").text("3月");
  $(".flathosyohlkinriyymmdd").text("2022年3月1日");
  $(".flathosyohlkinriyymm").text("2022年3月");
  $(".flathosyohlkinrimm").text("3月");
  $(".flathosyohlkinrim").text("3月");

  //↑ ここまで住宅ローン------------------------------------------------------------


  // ネットローン金利【nl】
  $(".nlkinriyymmdd").text("2022年3月1日");
  $(".nlkinriyymm").text("2022年3月");
  $(".nlkinrimm").text("3月");

  // カードローン金利【cl】
  $(".clkinriyymmdd").text("2022年3月1日");
  $(".clkinriyymm").text("2022年3月");
  $(".clkinrimm").text("3月");

  // 自動車ローン金利【car】
  $(".carkinriyymmdd").text("2022年3月1日");
  $(".carkinriyymm").text("2022年3月");
  $(".carkinrimm").text("3月");

  // 目的ローン金利【ml】
  $(".mlkinriyymmdd").text("2022年3月1日");
  $(".mlkinriyymm").text("2022年3月");
  $(".mlkinrimm").text("3月");

  // 不動産担保ローン金利【fl】
  $(".flkinriyymmdd").text("2022年3月1日");
  $(".flkinriyymm").text("2022年3月");
  $(".flkinrimm").text("3月");

}

setKinriDate();

clearInterval(t_datajstext);} }, 500);