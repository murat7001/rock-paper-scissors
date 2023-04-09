const gameContainer= document.querySelector(".container"),
    inputField=document.querySelector(".round input"),
    userResult=document.querySelector(".user-result img"),
    cpuResult=document.querySelector(".cpu-result img"),
    result=document.querySelector(".result"),
    optionImages=document.querySelectorAll(".option-image"),
    userScore=document.querySelector(".user-score"),
    cpuScore=document.querySelector(".cpu-score");

    
    inputField.addEventListener("keyup",(e)=>{
        let inputVal=inputField.value;
        
        if(e.key=="Enter" && inputVal.length > 0){
            inputField.value="";
            cpuScore.textContent=userScore.textContent=0;
            userResult.src = cpuResult.src="images/rock.png";
            result.textContent= "Let start!!"
            let count=1;
            
            optionImages.forEach((image,index) => {
                image.addEventListener("click",(e)=>{    
                    if(count<=inputVal){
                        image.classList.add("active");
                        userResult.src = cpuResult.src="images/rock.png";
                        result.textContent= "Wait..."

                        optionImages.forEach((image2,index2)=>{
                            if (index!=index2) {
                                image2.classList.remove("active");
                            }
                        });
                        gameContainer.classList.add("start");

                        let time= setTimeout(()=>{
                            gameContainer.classList.remove("start");

                            let imageSrc=e.target.querySelector("img").src;
                            userResult.src=imageSrc;
                
                            let randomNumber=Math.floor(Math.random()*3);

                            let cpuImages=["images/rock.png", "images/paper.png", "images/scissors.png"];
                            cpuResult.src=cpuImages[randomNumber];
                
                            let cpuValue=["R","P","S"][randomNumber];
                            let userValue=["R","P","S"][index]; 
                        
                            let outComes={
                                RR:"Draw",
                                SS:"Draw",
                                PP:"Draw",
                                RP:"Cpu",
                                RS:"User",
                                SP:"User",
                                SR:"Cpu",
                                PR:"User",
                                PS:"Cpu",
                            };
                
                            let outComeValue=outComes[userValue+cpuValue];
                            result.textContent = userValue == cpuValue ? "Round Draw" : `${outComeValue} Won !!`;  
                            
                            if(outComeValue==="Cpu"){
                                cpuScore.textContent++;
                            }
                            if(outComeValue==="User"){
                                userScore.textContent++;
                            }

                            if(count==inputVal){
                                image.classList.remove("active");
                                if(userScore.textContent>cpuScore.textContent){
                                    result.textContent="User Won!!"
                                    
                                }else if(userScore.textContent<cpuScore.textContent){
                                    result.textContent="Cpu Won!!"
                                    }else{
                                        result.textContent="Match Draw!!"
                                        }
                            }
                            count++;
                        },2500);    
                    }
                });
            });
        }
    });



    function numberOnly(id) {
        var element = document.getElementById(id);
        element.value = element.value.replace(/[^0-9]/gi, "");
    }