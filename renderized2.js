

const messaje =  async () =>{
    const response = await window.Functions.ping()
    return response.results
}




const thirdSection = document.getElementById('thirdSection');
thirdSection.style.display = "flex"
thirdSection.style.flexWrap = "wrap"
thirdSection.style.justifyContent = "space-around"


thirdSection.insertAdjacentHTML("beforebegin", `<h2>Lista de personajes</h2>`)
messaje().then(response => response.forEach(e => thirdSection.insertAdjacentHTML("beforeend",`
 <div style="display: flex; flex-direction: column; color: red; justify-content:center; align-items: center;">
 <p>${e.name}</p>
  <img width="300" src=${e.image} alt=""> </div>`)))