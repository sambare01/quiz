let  data =  ["Q.What is the capital city of Australia?","Q.Which year did World War II end?",
  "Q.Which planet is known as the Red Planet?","Q.What does HTTP stand for in web addresses?",
  "Q.Who played the character of Iron Man in the Marvel Cinematic Universe?"
  ,"Q.What is 3*5%3?","Q.Which social media platform has the most active users as of 2024?","Instagram Stories",
   "Q.Which social media app is known for its 6-second video clips?","Q.Which of the following is a feature unique to Snapchat?",
    "Q.What does the term hashtag originally refer to?","Q.What was the original name of Twitter before it became Twitter?",
     "Q.Which of the following social media platforms is primarily designed for professional networking?",
     "Q.Which social media platform is known for its photo-sharing features and filters?",
      "Q.What does the term “influencer” mean in social media context?",
];
    
     let  options = [
        ["Sydney","rajugndi","Canberra","Brisbane"], 
       ["1942","1945","1948","1950"], 
         ["Mars","Jupiter","Venus","Saturn"],
         ["Hyper Text Transfer Protocol","Hyper Text Transfer Protocol","Hyper Text Translation Protocol","High Transfer Text Protocol"],
       [" George Orwell","Aldous Huxley","J.D. Salinger"," F. Scott Fitzgerald"],
        ["30","45","0","60"],
       ["Instagram","Facebook","TikTok","Twitter"], 
       ["2004","2005","2007","2003"],
        ["Snapchat","TikTok","Instagram","Vine"],
       ["Stories","Reels","Filters","Disappearing messages"],
      ["A trending topic on Twitter","A marketing strategy","A type of advertisement on social media","A keyword symbol used to categorize content"],
        ["Twittr","Chirp","Socialize","Tweetie"],
         ["Facebook","LinkedIn","Pinterest","TikTok"], 
         ["Highlights","Instagram Stories","Reels","Live"],
        [" A person who shares funny memes","A person with the power to affect the purchasing decisions of others","A person who manages social media accounts for others"," A person who posts news updates regularly"]
        
        
      ];  

     let answers = [
        ["Sydney"],
          ["1945"],
         ["Venus"],
       ["Hyper Text Transfer Protocol"],
        ["J.D. Salinger"],
       ["0"],
        ["Facebook"],
        ["2004"],
        ["Vine"],
        ["Disappearing messages"],
       ["A keyword symbol used to categorize content"],
        ["Twittr"],
        ["LinkedIn"],
       ["Instagram Stories"], 
       ["A person with the power to affect the purchasing decisions of others"]
       
     ];
let input = document.querySelector("#question"); 
let op1 =  document.querySelector("#op1"); 
let op2 = document.querySelector("#op2"); 
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");
let  start = document.querySelector("#next");  
let socre = document.querySelector("#para");  
let final; 
let total; 
let n1 ; 
let n2;
let n3;
let n4; 
let i 
let ans;
count=0;
let  positions 
start.addEventListener("click",function(){    
    i = parseInt(Math.random()*data.length); 
  
    let question = data[i];  
    input.innerText = question;

    op1.classList.remove("clicked");
    op1.classList.remove("wrong");
    op2.classList.remove("clicked1"); 
    op2.classList.remove("wrong1");
    op3.classList.remove("clicked2"); 
    op3.classList.remove("wrong2");
    op4.classList.remove("clicked3"); 
    op4.classList.remove("wrong3")
      positions = i
     ans= i;   
    
        if(options[positions]){   
     n1=  op1.innerText =  options[positions][0];  
    n2  = op2.innerText =  options[positions][1]; 
   n3 =  op3.innerText = options[positions][2]; 
   n4=  op4.innerText =  options[positions][3]; 
        }   
        
    if(answers[ans]){ 
      final = answers[ans]; 
      console.log(final);
  }    
  function remove(){ 
    if(data.length==0){
        socre.innerText = count; 
        input.innerText =  "Your score is display on bottom";

    }  
    data.splice(i,1);
    options.splice(i,1)
    answers.splice(i,1); 
  } 
  remove();
});    
  op1.addEventListener("click",()=>{  
      let user = n1; 
    if(final== user){  
      op1.classList.toggle("clicked"); 
     count++;
    
    }  
    
  else{
      op1.classList.toggle("wrong");
  }
})   

op2.addEventListener("click",()=>{  
  let user = n2;
  if(final== user){ 
      op2.classList.toggle("clicked1");
       count++; 
      
    }   
    
    
  else{
      op2.classList.toggle("wrong1");
  }

})

op3.addEventListener("click",()=>{ 
  let user = n3; 
  if(user ==final) {
      op3.classList.toggle("clicked2");
      count++;
    
  }
    else{
      op3.classList.toggle("wrong2");
    }
}) 
op4.addEventListener("click",()=>{  
  let user = n4; 
  if(user ==final){
      op4.classList.toggle("clicked3"); 
      count++;
      
  }
   else{
      op4.classList.toggle("wrong3");
   } 
  
})    


 
 