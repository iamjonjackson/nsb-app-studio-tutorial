
Form2.onshow=function(){
  if (localStorage.savedDetails) {
    LabelResults.innerHTML = localStorage.savedDetails;
  }
}

ClearDetails.onclick=function(){
  //localStorage.removeItem("savedDetails");
  localStorage.clear();
  LabelResults.innerHTML = "";
  console.log(localStorage);
}
