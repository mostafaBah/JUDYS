let startBtn = document.querySelector(".startBtn");
let codeDiv = document.querySelector(".passDiv");
let codeInput = document.querySelector(".codeInput");
let submitBtn = document.querySelector(".submitBtn");
let paragraph = document.querySelector(".paragraph");
let ilyBtn = document.querySelector(".ilyBtn");
let ilyDiv = document.querySelector(".ilyDiv");
let exit = document.querySelector(".exitBtn");
let sBtn = document.querySelector(".sBtn");

startBtn.addEventListener("click", ()=>{
  startBtn.classList.add("hide");
  setTimeout(() => {
    codeDiv.classList.remove("hide");
  }, 200);
})
submitBtn.addEventListener("click", ()=>{
  let code = codeInput.value
  if(code === "0206"){
    document.body.style.backgroundColor = "purple"
    codeDiv.classList.add("hide")
    paragraph.classList.remove("hide")
  }
})
ilyBtn.addEventListener("click", ()=>{
  ilyDiv.classList.remove("hide")
})
exit.addEventListener("click", ()=>{
  ilyDiv.classList.add("hide")
})
sBtn.addEventListener("click", ()=>{
  sBtn.innerHTML = "I LOVE YOU JUDY KTIIIIIR. eemeleyon 75 aw 80 pleeeeeaaaaaassssseeeeeeee"
})
