const male = document.getElementById("male")
const female = document.getElementById("female")
async function calculate(){
  const url = `https://flames-love-calculator.p.rapidapi.com/flame/${female.value}/${male.value}`;
  const options = {
    method: "GET",
    headers: {
      'x-rapidapi-key': 'd55b3aa003msh63f8b729f9c2f30p1434e8jsn151276f67c67',
      'x-rapidapi-host': 'flames-love-calculator.p.rapidapi.com'
    }
  }
  try{
    const respone = await fetch(url,options)
    const data = await respone.json()
    document.getElementById("textArea").innerHTML = data.result;
  }catch(error){
    console.error(error)
  }
}

document.getElementById("calculate").addEventListener("click", ()=>{
  calculate()
})