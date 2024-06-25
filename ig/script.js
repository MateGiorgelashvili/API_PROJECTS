const user = document.getElementById("name")
async function scraper(){
  const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/followers?username_or_id_or_url=${user.value}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'd55b3aa003msh63f8b729f9c2f30p1434e8jsn151276f67c67',
      'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("scrap").addEventListener("click", ()=>{
  scraper()
})
