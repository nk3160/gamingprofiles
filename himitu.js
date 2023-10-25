(function () {
    'use strict';
  
    var
      // 入力受付時間（5.0秒）
      wait = 5000,
  
      // standby = false の時は入力を受け付けない
      standby = true,
  
      // コマンドのキーコード
      command = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
  
      length = command.length,
      index = 0,
      timer = null;
  
    document.addEventListener('keydown', function (ev) {
      // タイマーのリセット
      clearTimeout(timer);
  
      // コマンドの確認
      if (standby && ev.keyCode === command[index]) {
  
        index++;
  
        if (index >= length) {
          // すべてのコマンドを入力した！
  
          standby = false;  // 処理中にコマンドを受け付けないようにする
          index = 0;  // コマンドリセット
  
          /*
  
            何かしらの処理
            処理が完了したら standby = true に戻す
  
          */
            standby = true;
            alert('パスワード解除成功！')
            window.open('extra.html', '_blank'); // 新しいタブを開き、ページを表示
  
        } else {
          // 一定時間入力がなかったらリセット
          timer = setTimeout(function () {
            index = 0;
          }, wait);
        }
  
      } else {
        // コマンドが間違っていたらリセット
        index = 0;
      }
    });
  })();


function onMouseOver() {
    draw();
}
function onMouseOut() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw() {
    drawAnim();
}

let canvas = null;  // キャンバス
let g = null;       // 描画コンテキスト
let x, y, r;	    // ●のx座標、y座標、半径
let vx, vy;		    // x方向の速度、y方向の速度

function drawAnim(){
    // 背景をグレーに
    g.fillStyle = "#000000";
    g.fillRect(0, 0, canvas.width, canvas.height);
    // ●を描画
    g.beginPath();
    g.fillStyle = "#696969";	// 塗りつぶす色
    g.arc(x, y, r, 0, Math.PI*2, false);
    g.fill();
    // ●の移動
    x += vx;
    y += vy;
    // 壁に当たったら跳ね返る（●のxy座標は中心点のため、半径を考慮）
    if(x < 0+r || x > canvas.width-r){
        vx = -vx;
    }
    if(y < 0+r || y > canvas.height-r){
        vy = -vy;
    }
    // 再帰呼び出しでアニメーションさせる
    requestAnimationFrame(drawAnim);
}

window.addEventListener("load", ()=>{
    // キャンバスの初期設定
    canvas = document.getElementById("canvas");
    g = canvas.getContext("2d");
    // 描画する●の初期設定
    x = 100; y = 50; r = 30;
    vx = 1; vy = 0.5;
    onMouseOver();
});