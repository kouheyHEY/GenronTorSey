/**
 * 入力を取得し、変換して出力する
 */
function changeInputStr() {
    // 入力を取得する
    let inputStr = getTextArea("inputStr");

    // 設定するフィルタを取得する
    let inputFilter = $("#filter").val();

    // 取得した文字列を変換する
    let outputStr = changeStr(inputStr, inputFilter);

    // 出力に設定する
    setTextArea("outputStr", outputStr);

    // ボタンの文字列を変更
    $("#button_copy").text("コピー");
}

/**
 * 入力をクリアする
 */
function clearInputStr() {
    setTextArea("inputStr", "");
}

/**
 * 出力をクリップボードにコピーする
 */
function copyOutputStr() {

    // 文字列を取得
    let copyText = getTextArea("outputStr");

    // クリップボードにコピー
    navigator.clipboard.writeText(copyText);

    // ボタンの文字列を変更
    $("#button_copy").text("コピー済");
}

/**
 * 出力文字列の概要をSNS共有する
 */
function shareAbst() {

}

/**
 * 出力文字列の詳細をSNS共有する
 */
function shareDist() {

}

/**
 * フィルタによって文字列を変換する
 * @param {string} _inputStr    変換対象文字列
 * @param {string} _filter      変換用フィルタ
 * @returns                     変換後文字列
 */
function changeStr(_inputStr, _filter) {
    // 変換後文字列
    let outputStr;
    // 変換方法は要検討

    // 入力の長さを取得する
    let inputLen = _inputStr.length;

    // フィルタ用配列を取得する
    let filterStrList = FILTER_MAP[_filter];

    for (let i = 0; i < inputLen; i++) {
        // [1 - フィルタ用配列の長さ]の範囲で乱数1を生成する
        let filterStrLen = Math.floor(Math.random() * filterStrList.length) + 1;

        // フィルタ用文字列を決定する
        let filterStrIdx = Math.floor(Math.random() * filterStrList[filterStrLen].length);
        let filterStr = filterStrList[filterStrLen][filterStrIdx];

        // 変換後文字列に、ランダムに取り出した文字列を追加する
        outputStr += filterStr;

        // 変換後文字列が変換前文字列の長さと同等になったら変換を終了する
        if (outputStr.length >= inputLen) {
            break;
        }
    }

    // デバッグ用
    return "テストダヨーン：" + _inputStr + ",フィルタ：" + _filter;
}

/**
 * 任意のtextareaの入力文字列を取得する
 * @param {string} _id  取得対象のtextareaのid
 * @returns             textareaの文字列
 */
function getTextArea(_id) {
    return $("#" + _id).val();
}

/**
 * 
 * @param {string} _id  設定対象のtextareaのid
 * @param {string} _str 設定する文字列
 */
function setTextArea(_id, _str) {
    $("#" + _id).text(_str);
}