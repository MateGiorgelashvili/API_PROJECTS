async function generate(){
  try{
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    document.getElementById("quote").innerHTML = '"' + data.slip.advice + '"';
  }
  catch(error) {
    console.error("Error", error.message);
  }
}
document.getElementById("generate").addEventListener("click", ()=>{
  generate()
})
