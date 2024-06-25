async function fortune(){
  const url = "https://fortune-cookie4.p.rapidapi.com/slack"
  const options = {
    method: 'GET',
    headers: {
		  'x-rapidapi-key': 'd55b3aa003msh63f8b729f9c2f30p1434e8jsn151276f67c67',
		  'x-rapidapi-host': 'fortune-cookie4.p.rapidapi.com'
    }
  };
  try{
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result);
    document.getElementById("textArea").innerHTML = result.text
  } catch(error){
    console.error(error)
  }
}

document.getElementById("cookie").addEventListener("click", ()=>{
  fortune()
})