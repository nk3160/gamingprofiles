function enter(){
  if(document.querySelector("#pw").value == "intro24"){
      movePage();
  }else{
      alert("Password error!")
  }
}

function movePage(){
  alert('認証成功！')
  window.open('about.html', '_blank'); // 新しいタブを開き、ページを表示
}