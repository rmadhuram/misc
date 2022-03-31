/* 
 * 1行目の[t_cdt]の後ろに、Getごとの番号を付与した変数に変更すること。
 * 同じ変数を、最後の[clearInterval(*****);]にもセットする。
 * [cdtDo(＊＊＊);]の実行の際は、引数に、[data-cdt]属性の親要素をセットする。
 */
    var t_cdt_0008 = setInterval(function() {

      if (
           typeof $ === 'function'
        && typeof cdtDo === 'function'
        && cdt_contents !== 'undefined'
        && $('.top-cardArea').length > 0
				&& $('[data-cdt="jtl_sitetop_card2_nologin"]').length > 0
      ) {
        cdtDo('.sitetop_card2_nologin');

        clearInterval(t_cdt_0008);
      }
    }, 500);