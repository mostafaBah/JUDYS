let startBtn = document.querySelector(".startBtn")
let codeDiv = document.querySelector(".passDiv")
let codeInput = document.querySelector(".codeInput")
let submitBtn = document.querySelector(".submitBtn")

startBtn.addEventListener("click", ()=>{
  startBtn.classList.add("hide")
  setTimeout(() => {
    codeDiv.classList.remove("hide")
  }, 200);
})
submitBtn.addEventListener("click", ()=>{
  let code = codeInput.value
  if(code === "0206"){
    document.body.style.backgroundColor = "pink"
    codeDiv.classList.add("hide")
  }
})
