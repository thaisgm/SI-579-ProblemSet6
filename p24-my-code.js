
puppy.addEventListener("click", function(){ 
  alert("Woof Woof!"); 
});

function changeBackground(){
  var buttonText = document.getElementById("backgroundButton");

  if (buttonText.innerHTML == "Ocean"){
    alert("You prefer the ocean!"); 
    document.getElementById("body").style.backgroundImage = 'radial-gradient(#00e1ff, #2e3ae5)';
    document.getElementById("body").style.color = '#010764';
    document.getElementById("menu").style.background = '#160052';

    document.getElementById("backgroundButton").innerHTML = "Sunset";
  } else if (buttonText.innerHTML == "Sunset"){
    alert("You prefer the sunset!"); 
    document.getElementById("body").style.backgroundImage = 'radial-gradient(#ff8a00, #e52e71)';
    document.getElementById("body").style.color = '#52002d';
    document.getElementById("menu").style.background = '#52002d';
    
    document.getElementById("backgroundButton").innerHTML = "Ocean";
  }
};

export default function changeBackground() {}