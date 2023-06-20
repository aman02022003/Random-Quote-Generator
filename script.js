
const btn=document.getElementById("btn");
const output=document.getElementById("output");
const url = "https://api.quotable.io/random";


btn.addEventListener("click",()=>{
   
    fetch(url).then(res =>res.json()).then(data => {
      output.innerText = data.content;
    }).catch(() => alert("fetching error"))

})






