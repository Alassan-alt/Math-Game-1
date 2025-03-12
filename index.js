
const n1= document.querySelector('p.first');
const n2= document.querySelector('p.second');
const input= document.querySelector('input');
let scor = document.querySelector('p.score');
let niv = document.querySelector('p.niveau');
const boutton = document.querySelector('button.submit');

let result =0;
let score =0;
let inter;
const levels={
    1: {min: 0,max :10,time :10},
    2: {min : 8,max :50,time :15},
    3: {min : 40,max :60,time:20},
    4: {min : 50,max :80,time:25},
    5: {min : 75,max :100,time:30}
};
let currentlevel = 1;
let level = levels[currentlevel]

const randomNumber=(max, min =0)=>{
    return Math.floor(Math.random()*(max-min)+min);
}

const apdate=()=>{
    let num1=randomNumber(level.max,level.min)
    let num2=randomNumber(level.max,level.min)
    result = num1 + num2;
    n1.textContent=num1;
    n2.textContent=num2;
    scor.textContent = "SCORE : "+ score+"pts";
    niv.textContent = "Niveau"+ currentlevel;
    }

    input.addEventListener('keyup',(e)=>{
        const value=e.target.value;
        console.log(value);
        if (parseInt(value)==result) {
            clearInterval(inter);
            e.target.value="";
            score+=5;
            if (score == 5) {
           
                if (currentlevel==5) {
                    alert("Felicitation! vous avez terminé le jeux")  
                }else{
                    currentlevel+=1; 
                    level = levels[currentlevel];
                    score = 0;
                    apdate();
                    chrono();
                }
                
            } else {
                
                apdate();
                chrono();
                
                
            }
            
        }
        
    });
    const n = randomNumber(level.max,level.min);


    let chrono =()=>{
        let count = level.time;
         inter = setInterval(()=>{
            document.querySelector('p.Chrono').textContent=count;
            
            if (count==0) {
                clearInterval(inter);
                if (score==0) {
                    alert("vous avez perdu");
                    location.reload();
                
                } else {
                    score -=5;
                    apdate();
                    chrono();
                }    
            }
            count-=1; 
        },1000)
    };

    boutton.addEventListener('click',(e)=>{
        e.target.parentElement.parentElement.style.display="none";
        apdate();
    chrono();

    
    });