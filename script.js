var img = document.createElement("IMG")
var name=prompt('Введите ваше имя.');
// img.src = 'svetik.jpeg'

// var pic = document.createElement("IMG");
// pic.src = "web\module 8\rjomba\svetik.jpeg";
// pc.appendChild(pic);

if (name=='Света'){
    alert(name + ' Лучшая малышка на свете!');
var pc = document.getElementById("pic_cntr");
pc.innerHTML="<img src='svetik.jpeg'>";
}else{
    alert('Выйди от сюда');
}