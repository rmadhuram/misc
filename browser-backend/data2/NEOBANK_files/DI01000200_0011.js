var t_DI01000200_0011 = setInterval(function() { if(typeof $ === 'function') {

/*
 * トップページ内に固有のページからお知らせを取得して配置するメソッド
 */
(function () {
    'use strict';

    const DATE = new Date();
    const NOW_DATE = DATE.getFullYear() + '' + (DATE.getMonth() + 1) + '' + DATE.getDate() + '' + DATE.getHours() + '' + DATE.getMinutes() + '' + DATE.getSeconds();
    let infoArray = [];
    let margeArray = [];
    let margeCount = 0;

    function GetInfo(url, txt) {
        let self = this;
        let errorContent = $('<div class="m-boxDef-flex m-margin-none"><div class="m-boxDef-box">データが取得できませんでした。<br>時間をあけて再度アクセスしてください。<br>お急ぎの方は、以下のお知らせ一覧、プレスリリース一覧よりご覧ください。</div></div>');
        const TOTAL_FILES = 2;

        this.label = txt;
        this.fetchAjax(url).then(function (data) {
            self.htmlTrim(data, self.label);
        }).then(function () {
            margeCount++;
            if (margeCount === TOTAL_FILES || margeCount === TOTAL_FILES * 2) {
                self.infoSort(infoArray);
            }
        }, function () {
            errorContent.appendTo($('.top-information-list > .m-listDateInfo-line'));
        });
    }

    /**
     * htmlの取得
     * @param {string} url dl要素を取得するurl
     * @returns {object}
     */
    GetInfo.prototype.fetchAjax = function (url) {
        return $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html'
        });
    };

    /**
     * 配置に必要な要素の整形
     * @param {string} data htmlの文字列
     * @param {string} label お知らせラベルの文字列（お知らせ・プレスリリース）
     * @returns {void}
     */
    GetInfo.prototype.htmlTrim = function (data, label) {
        // 改行・タグ間の余計な空白・コメントアウトを削除
        this.htmlReg = data.replace(/\n/g, '').replace(/>\s+</g, '><').replace(/<!--.*?-->/g, '').replace(/,/g, 'ｶﾝﾏ');
        // 抽出する要素の枠組みを取得
        this.htmlReg = this.htmlReg.match(/<div class="m-listDateInfo-line">.*?<\/dl><\/div>/);
        // dt要素にラベルを付与
        this.htmlReg = this.htmlReg.toString().replace(/<dt>/g, '<dt><span class="m-date">').replace(/<\/dt>/g, '</span><span class="m-label m-txtLabel-cloudS">' + label + '</span></dt>');
        // ラベルを付与したdl要素を配列化
        this.htmlReg = this.htmlReg.match(/<dl>.*?<\/dl>/g);
        infoArray.push(this.htmlReg);
    };

    /**
     * マージした配列と文字列を配列に初期化
     * @param {array} ary お知らせhtml文字列の配列
     * @returns {void}
     */
    GetInfo.prototype.infoSort = function (ary) {
        margeArray = ary.toString().match(/<dl>.*?<\/dl>/g);
        margeArray.sort(function (a, b) {
            return (a > b ? -1 : 1);
        });
    };

    /* インスタンス実行 */
    (function () {
        let infoNowYear = new GetInfo('/contents/company/info/index.html?' + NOW_DATE, 'お知らせ');
        let pressNowYear = new GetInfo('/contents/company/press/index.html?' + NOW_DATE, 'プレスリリース');
    }());

    /* インスタンス実行後の処理 */

    // 取得した要素の配置
    function appendItem() {
        $(margeArray.splice(0, 10).toString().replace(/,/g, '').replace(/ｶﾝﾏ/g, ',')).appendTo($('.top-information-list > .m-listDateInfo-line'));
        var t_appendItem = setInterval(function() { if(typeof iconLink === 'function') {
          iconLink();
        clearInterval(t_appendItem); }}, 500);
    }

    // 取得した要素の件数を判定
    function appendJudg() {
        const LAST_YEAR = new Date().getFullYear() - 1;
        const INTERVAL = 500;
        const VISIBLE_ITEMS = 10;
        const TOTAL_FILES = 2;
        let appendFlag = false;
        let setTimeoutId = setInterval(function () {
            if (margeCount < TOTAL_FILES) {
                return;
            }
            // お知らせ表示数が10件に満たなかった場合、昨年分のお知らせも追加で読み込む
            if (margeCount === TOTAL_FILES && margeArray.length < VISIBLE_ITEMS) {
//                let infoLastYear = new GetInfo('/contents/company/info/' + LAST_YEAR + '.html?' + NOW_DATE, 'お知らせ');
//                let pressLastYear = new GetInfo('/contents/company/press/' + LAST_YEAR + '.html?' + NOW_DATE, 'プレスリリース');
                let infoLastYear = new GetInfo('/contents/company/info/' + LAST_YEAR + '/index.html?' + NOW_DATE, 'お知らせ');
                let pressLastYear = new GetInfo('/contents/company/press/' + LAST_YEAR + '/index.html?' + NOW_DATE, 'プレスリリース');
            } else {
                clearInterval(setTimeoutId);
                appendFlag = true;
            }
            if (appendFlag) {
                appendItem();
            }
        }, INTERVAL);
    }

    appendJudg();
}());

clearInterval(t_DI01000200_0011); }}, 500);