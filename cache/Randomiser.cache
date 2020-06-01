var randomContent = [
  {
    icon: "bolt",
    title: "Lightning!!"
  },
  {
    icon: "book",
    title: "Hey, it's a book!"
  },
  {
    icon: "bug",
    title: "Oh no, a bug!"
  }
];


GoRandom.onclick=function(){
  Label1.value = "Having a think..."
  Image1.src = "img/loading.gif";
  setTimeout(getRandom, 2000);
}

function getRandom() {
  count = randomContent.length;
  randomNum = Math.floor(Math.random() * count); 
  console.log(randomNum);
  var selectedItem = randomContent[randomNum]; 
  Label1.value = selectedItem.title;
  Image1.src = "img/" + selectedItem.icon + ".svg";
}