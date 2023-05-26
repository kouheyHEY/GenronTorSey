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
 */
function changeStr(_inputStr, _filter) {
    // デバッグ用
    return "テストダヨーン：" + _inputStr + ",フィルタ：" + _filter;
    // 入力の長さを取得する
    let inputLen = _inputStr.length;

    // 入力を文字の種類ごとに変換する
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