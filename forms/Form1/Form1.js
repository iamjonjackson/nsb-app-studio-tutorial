
Hamburger1.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    if (s === "Home") {
        // switch the view to Home
        ChangeForm(Form1);
    }
    if (s === "My Details") {
        // switch the view to Form2
        ChangeForm(Form2);
    }
    if (s === "Map") {
        ChangeForm(MapForm);
    }
    if (s === "Randomiser") {
        ChangeForm(Randomiser);
    }
    if (s === "Roll Dice") {
        ChangeForm(RollDice);
    }
};

NSBPage.appendChild(HeaderGlobal)

//TextInputName.onkeyup=function(){
//    LabelName.innerHTML = TextInputName.value;
//}

ButtonSave.onclick=function(){
  //LabelResults.innerHTML = TextInputName.value + "<br />" + Textarea1.value;
  var myDetails = TextInputName.value + "<br />" + Textarea1.value;
  localStorage.savedDetails = myDetails;
  console.log(localStorage);
  //LabelName.innerHTML = "Saved!";
  $("#Toast2").toast("show");
  Form1.reset();
}
