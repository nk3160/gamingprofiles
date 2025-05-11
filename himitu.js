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