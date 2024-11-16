function getRandomNumber(min,max){
    return  Math.floor(Math.random() * (max - min + 1)) + min;

 }


function newQuote(){
    console.log(getRandomNumber(1, 10)); 

    let randomNum = getRandomNumber(1,10);
    if(randomNum==1){
        document.getElementById("quotes").innerHTML=`<p>“Be yourself; everyone else is already taken.”</p>`
    }else if(randomNum==2){
        document.getElementById("quotes").innerHTML=`<P>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>`

    }else if(randomNum==3){
        document.getElementById("quotes").innerHTML=`<p>“A room without books is like a body without a soul.”</p>`
    }else if(randomNum==4){
            document.getElementById("quotes").innerHTML=`<p>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</p>`
    }else if(randomNum==5){
        document.getElementById("quotes").innerHTML=`<p>“Be the change that you wish to see in the world.”</p>`
    }else if(randomNum==6){
    document.getElementById("quotes").innerHTML=`<p>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”</p>`
    }else if(randomNum==7){
    document.getElementById("quotes").innerHTML=`<p>“If you tell the truth, you don't have to remember anything.”</p> `
    }else if(randomNum==8){
    document.getElementById("quotes").innerHTML=`<p> “A friend is someone who knows all about you and still loves you.”</p>`
    }else if(randomNum==9){
    document.getElementById("quotes").innerHTML=`<p>“Always forgive your enemies; nothing annoys them so much.”</P>`
    }else if(randomNum==10){
    document.getElementById("quotes").innerHTML=`<p>“We accept the love we think we deserve.”</p>`
    }
    
}




  

  