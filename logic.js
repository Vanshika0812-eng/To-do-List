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
let content=document.querySelector(".list-content");
let item=document.querySelector(".add_items");
item.addEventListener("click",()=>{
      let text = document.querySelector("#text").value;
       let text2=p.innerText;
       let text3=document.querySelector("#due").value;
       let now = new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
});
       if(text2=="Select Priority"){
            text2="";
       }
 content.innerHTML+=`<li>   <i class="fa-solid fa-trash"></i><br><b>${text}</b></li> <p style="font-size:14px ;color:#262626;font-weight:600"><i>Created on:&nbsp;${now}</i></p>
 <p style="font-size:14px ;color:#262626; font-weight:600"><i>Due Date:</i>&nbsp;<span>${text3}</span></p>
 <p style="color:grey;font-size:14px;font-weight:600"><i>${text2}</i></p><br>`;

  content.style.display="block";
    }
  );
