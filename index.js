const cards = document.querySelectorAll(".card");
var count = document.querySelector(".counter");
// var timeUp = document.querySelector(".timeup")
// console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));
// count.addEventListener("click",)
function flip() {
  //   console.log("Card flipped");
  // console.log(this);

  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
       var counter = 0;
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
      // counter++;
  } else {
    fail();
    // counter--;
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  firstCard.dataset.image="pass";
  secondCard.removeEventListener("click", flip);
  secondCard.dataset.image="pass"
  reset();
  
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();


function timer(){
  

  const startMin=3;
  var time=startMin*60;
  
  var x= setInterval(() => {
  
    const min=Math.floor( time/60);
    let sec=time%60;
    time--;

    document.getElementById("p").innerHTML = `${min} : ${sec}`;
    if(time<-1){
      clearInterval(x);
      document.getElementById("p").innerHTML = `Time's Up!!`;
      alert("Time's up");
      
     // isFlipped=true;
      //shuffle();
      cards.forEach((k)=>{
        k.removeEventListener('click',flip);
        k.addEventListener('click',()=>{document.getElementById("p1").innerHTML=`can't flip, Time is Up.`;setTimeout(()=> document.getElementById("p1").innerHTML=``,2000)});
      })
      // var arr=[];
      // arr.concat(cards);
      var count=0;
      cards.forEach((l)=>{if(l.dataset.image==='pass'){count++}});
      if(count==16){
      console.log('wooo');
      document.getElementById("winMessage").innerHTML=`Congrats! you win.`;
      }
      else{
      console.log('nope');
      document.getElementById("winMessage").innerHTML=`OOps!! Lost the Game`;

      }
      
    
      
    
    }
    else
    message();
  
}, 1000);
  
}
function message(){
  var count=0;
  cards.forEach((l)=>{if(l.dataset.image==='pass'){count++}});
  if(count==16){
  console.log('wooo');
  document.getElementById("winMessage").innerHTML=`Congrats! you win.`;
  }

}

timer();





