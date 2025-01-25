const colors=['red','blue','yellow','violet','purple','skyblue'];
const heading=["firstheading","secondheading","thirdheading"]

    setInterval(()=>{
        
          
        heading.forEach((value)=>{
          let i = Math.floor(Math.random()*colors.length);
          document.getElementById(value).style.color= colors[i];
      })
        
        },3000);
    
