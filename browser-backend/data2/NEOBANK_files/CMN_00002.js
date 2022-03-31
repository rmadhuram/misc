/* 
 * 1行目の[t_cdt]の後ろに、Getごとの番号を付与した変数に変更すること。
 * 同じ変数を、最後の[clearInterval(*****);]にもセットする。
 * [cdtDo(＊＊＊);]の実行の際は、引数に、[data-cdt]属性の親要素をセットする。
 */
    var t_cdt_cmn00002 = setInterval(function() {

      if (
           typeof $ === 'function'
        && typeof cdtDo === 'function'
        && typeof cdt_contents !== 'undefined'
      ) {

        cdtDo('.bnr');
        clearInterval(t_cdt_cmn00002);

      }

    }, 500);

    var CCC_t_cdt_cmn00002 = setInterval(function() {

      if (
           typeof $ === 'function'
        && typeof CCC_cdtDo === 'function'
        && typeof CCC_cdt_contents !== 'undefined'
      ) {

        CCC_cdtDo('.ccc_bnr');
        clearInterval(CCC_t_cdt_cmn00002);

      }

    }, 500);