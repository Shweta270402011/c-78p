var mumber=["https://thumbs.dreamstime.com/b/cartoon-father-son-icon-over-white-background-colorful-design-vector-illustration-cartoon-father-son-icon-flat-design-169226123.jpg" ,
"https://i.pinimg.com/736x/fe/ff/e1/feffe11ab18aec2bb7f0a53e1e80b1f7.jpg" ,
"https://static3.depositphotos.com/1007989/243/v/600/depositphotos_2432109-stock-illustration-going-to-school.jpg" ,
"https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-stock-vector-little-girl-avatar-character-vector-illustration-design.jpg?ver=6" ,
"https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg"   ,
"https://cdn.wallpapersafari.com/34/77/d8rYT4.jpg"];

var i=0;
function next (){
  document.getElementById("mumber").src=mumber[i];
  i++;
  if(i==5){
    i=0;
  }
}