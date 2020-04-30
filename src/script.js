var sidePanel = document.getElementById("mySidepanel");
var sidePanelRight = document.getElementById("mySidepanelRight");

//inner navs
var innerOverlayOne = document.getElementById("innerOverlay1");
var innerOverlayTwo = document.getElementById("innerOverlay2");
var innerOverlayThree = document.getElementById("innerOverlay3");
var innerOverlayFour = document.getElementById("innerOverlay4");

var styleBlock = document.getElementById("buttonbackground");

//button function for left panel
function openNav() {
  if(sidePanel.style.width == "100%"){
    styleBlock.style.backgroundColor = "#24242477"
    closeNav();
  }else{
  sidePanel.style.width = "100%";
  sidePanel.style.height = "35vh";
  styleBlock.style.backgroundColor = "transparent"
  }
}

function closeNav() {
  sidePanel.style.width = "0";
  sidePanel.style.height = "0";
}

//seperate button function for right panel
//possibly add second tab to be clicked later on
function openNavRight() {
  if(sidePanelRight.style.width =="35%"){
    closeNavRight();
  }else{
    sidePanelRight.style.width = "35%";
    sidePanelRight.style.height = "100%";
  }
}

function closeNavRight() {
  sidePanelRight.style.width = "0";
  sidePanelRight.style.height = "0";
}

//inner nav one
function openInnerOne(){
  if(innerOverlayOne.style.width == "20vw"){
    closeInnerNavOne();
  }else{
    innerOverlayOne.style.width="20vw";
    innerOverlayOne.style.height = "18vh";
  }
}

function closeInnerNavOne(){
  innerOverlayOne.style.height = "0";
  innerOverlayOne.style.width = "20%";
}

//inner nav two
function openInnerTwo(){
  if(innerOverlayTwo.style.width == "20vw"){
    closeInnerNavTwo();
  }else{
    innerOverlayTwo.style.width="20vw";
    innerOverlayTwo.style.height = "18vh";
  }
}

function closeInnerNavTwo(){
  innerOverlayTwo.style.height = "0";
  innerOverlayTwo.style.width = "20%";
}

//inner nav 3
function openInnerThree(){
  if(innerOverlayThree.style.width == "20vw"){
    closeInnerNavThree();
  }else{
    innerOverlayThree.style.width="20vw";
    innerOverlayThree.style.height = "18vh";
  }
}

function closeInnerNavThree(){
  innerOverlayThree.style.height = "0";
  innerOverlayThree.style.width = "20%";
}

//inner nav 4
function openInnerFour(){
  if(innerOverlayFour.style.width == "20vw"){
    closeInnerNavFour();
  }else{
    innerOverlayFour.style.width="20vw";
    innerOverlayFour.style.height = "18vh";
  }
}

function closeInnerNavFour(){
  innerOverlayFour.style.height = "0";
  innerOverlayFour.style.width = "20%";
}




function corpsChange(e) {
  document.querySelector("#corpsSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function deforestChange(e) {
  document.querySelector("#deforestSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function carbonCapChange(e) {
  document.querySelector("#carbonCapSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function renewChange(e) {
  document.querySelector("#renewSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function populationChange(e) {
  document.querySelector("#populationSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};

function transportChange(e) {
  document.querySelector("#transportSlider").style.background = 'linear-gradient(to right, #2EFFCD 0%, #2EFFCD ' + e + '%, #414C53 ' + e + '%, #414C53 100%)'
};
//NEXT:
//when you input algorithm, just change the html.style.background to the correct image given. 

/* WEIGHTS */
//Deforestation : 4;
//publicTransport : 1;
//Carbon Capture Tech : 5;
//Population : 10;
//Renewable Energy : 6;
//Factories : 8;
/* WEIGHTS */

let corpSlider = document.querySelector("#corpsSlider");
let deforestSlider = document.querySelector("#deforestSlider");
let carbonCapSlider = document.querySelector("#carbonCapSlider");
let renewSlider = document.querySelector("#renewSlider");
let populationSlider = document.querySelector("#populationSlider");
let transportSlider = document.querySelector("#transportSlider");
let simButton = document.querySelector("#simulate");

function simulate(){ //adds all slider values together, takes average, then checks where the output is
  let deforestVal = deforestSlider.value * 4; // deforestation
  console.log(deforestVal);
  let transportVal = transportSlider.value * 1; //public transport
  console.log(transportVal);
  let carbonVal = carbonCapSlider.value * 5; //carbon capture tech
  console.log(carbonVal);
  let populationVal = populationSlider.value * 10; //population
  console.log(populationVal);
  let renewVal = renewSlider.value * 6; //reneweable energy
  console.log(renewVal);
  let corpVal = corpSlider.value * 8; //this is the factory value
  console.log(corpVal);
  let total = deforestVal + transportVal + carbonVal + populationVal + renewVal + corpVal;
  console.log(total);
  let avg = Math.floor(total/6); //rounds for easy number management 
  console.log(avg);
  // 588 376 188

  if(avg <= 188){
    document.querySelector("html").style.background = "url('../media/healthy_forest.jpg')"; //gets the html object and resets bckgrnd
  }
  else if(avg > 188 && avg <= 376){
    document.querySelector("html").style.background = "url('../media/Tipping_Point_Edited.png')";
  }
  else{
    document.querySelector("html").style.background = "url('../media/unhealthy_forest-01.png')";
  }
}

simButton.onclick = simulate; //gotta set that mean on click