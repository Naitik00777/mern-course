// list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b> Yayyy you were clicked</b> Enjoy your click!! "
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click please")
})

