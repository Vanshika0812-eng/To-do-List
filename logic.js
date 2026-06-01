console.log("js connected");
let priority=document.querySelector("ul");
function priority_check(){
  if(priority.style.display===""){
    priority.style.display="block";
  }
}

let i_click=document.querySelector(".fas-click");
i_click.addEventListener('click',priority_check);

let li=document.querySelectorAll("ul li");
let p=document.querySelector(".priority-text");
for(let item of li){
  item.addEventListener("click",()=>{
    priority.style.display="";
    let i=item.innerText;
    p.innerText=i;
  });
}