// JavaScript
var popup = document.getElementById("popup");
var btn = document.getElementById("openPopupButton");
var span = document.getElementById("closePopupButton");

// ボタンをクリックしたときにポップアップを開く
btn.onclick = function () {
    popup.style.display = "block";
}

// × ボタンをクリックしたときにポップアップを閉じる
span.onclick = function () {
    popup.style.display = "none";
}

// ユーザーがポップアップ外をクリックしたときにポップアップを閉じる
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
