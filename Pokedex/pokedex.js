function buscarPokemon() {
  let busqueda = document.getElementById('pokemon').value.toLowerCase().trim();
  let contenedor = document.getElementById('resultadoPokemon');

  contenedor.innerHTML = "";

  if (busqueda === '') {
    alert('Ingresa el nombre de un pokemon');
    return;
  }

  let url = `https://pokeapi.co/api/v2/pokemon/${busqueda}`;

  fetch(url, {
    method: "GET"
  })
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("Pokémon no encontrado");
    }
    return respuesta.json();
  })
  .then((datos) => {

    let tipo = datos.types[0].type.name;
    let habilidad = datos.abilities[0].ability.name;

    contenedor.innerHTML = `
      <div class="tarjeta-pokemon">
        <h3>${datos.name.toUpperCase()} (#${datos.id})</h3>
        <img src="${datos.sprites.front_default}" alt="${datos.name}">
        <p><b>Tipo:</b> ${tipo}</p>
        <p><b>Habilidad:</b> ${habilidad}</p>
        <p><b>Peso:</b> ${datos.weight / 10} kg</p>
      </div>
    `;

  })
  .catch((error) => {
    console.log(error);
    contenedor.innerHTML = `<p style="color: red;">El Pokémon no existe</p>`;
  });
}
