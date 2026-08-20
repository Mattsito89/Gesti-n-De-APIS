let apiKey = "9060e55abcd3435d1eb7f4f219e103e9";

function buscarClima() {
  let ciudadInput = document.getElementById('ciudad');
  let resultado = document.getElementById('resultado');
  let ciudad = ciudadInput.value;

  resultado.innerHTML = "";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

  fetch(url, {
    method: "GET"
  })
  .then((respuesta) => respuesta.json())
  .then((datos) => {

    if (datos.cod == 200) {
      resultado.innerHTML = `
        <h3>${datos.name}</h3>
        <p><b>Temperatura:</b> ${datos.main.temp} °C</p>
        <p><b>Estado:</b> ${datos.weather[0].description}</p>
      `;
    } else {
      resultado.innerHTML = `
        <p style="color: red;">Ciudad no encontrada. Verifica el nombre e intenta de nuevo.</p>
      `;
    }

  })
  .catch((error) => console.log(error));
}
