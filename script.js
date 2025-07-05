var choices=["rock","paper","scissor"]
var win=document.getElementById("win")
var  urcho=document.getElementById("urcho")
var  compcho=document.getElementById("compcho")
var comp=document.getElementById("comp")
var player=document.getElementById("player")
var fin=document.getElementById("fin")
var full=document.getElementById("full")
var w=10
var c=10
function play(playerValue){
     
     
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result=""
     if (playerValue==computerChoice){
        win.textContent="Its Tie"
    }
     else{
        if(c>0 && w>0){
            switch(playerValue){
                case "rock":
                    win.textContent=(computerChoice==="scissor")?"You win" : "You lose" ;
                    break;
                case "paper":
                    win.textContent=(computerChoice==="rock")? "You win":"You lose";
                    break;
                case "scissor":
                    win.textContent=(computerChoice==="paper")? "You win":"You lose";
                    break;
    
            }

        }
        
    }
    urcho.textContent="Your choice:"+playerValue
    urcho.style.color= "purple"
    compcho.textContent="Computer choice:"+computerChoice
    compcho.style.color= "purple"
     
    switch(win.textContent){
        case "You win":
            win.setAttribute("class","green")
            c=c-1
             
            
            break;
        case "You lose":
            win.setAttribute("class","red")
            w=w-1
            
            break;
        case "Its Tie":
            win.setAttribute("class","orange")
            break;
    }
   player.textContent="Player  Score:"+w
   comp.textContent="Computer  Score:"+c
   if(c===0){
    fin.textContent="You Won"
    fin.style.color="green"
    full.style.display="none"

   }
   if(w===0){
    fin.textContent="Computer Won"
    fin.style.color="red"

    full.style.display="none"

   }
   
   
}

