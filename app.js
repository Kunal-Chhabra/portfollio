// callback
var a=document.getElementById("submit_div")
function greeting(name) {

  }
  

function load(){
    var a=document.getElementById("submit_div")
    var submit_btn=document.createElement("button")
    submit_btn.innerText="Submit"
    submit_btn.setAttribute("id", "submit")
    submit_btn.addEventListener("click",async function(){ //callback
        await submitingToAPI()
        submit_btn.innerText="Submitted"//clouser
    } )
    a.appendChild(submit_btn)
}
load();