function CreateGame(player1, hour, player2) {
  return `
  <li>
      <img src="./assets/paises/${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/paises/${player2}.svg" alt="Bandeira do ${player2}" />
  </li>
  `
}

function CreateCard(date, day, games) {
  return ` 
  <div class="card">
       <h2>${date} <span>${day}</span></h2>
       <ul>
       ${games}
       </ul>
  </div>
`
}

function CardColorAlter() {}

document.querySelector("#cards").innerHTML =
  CreateCard("22/11", "quarta-feira", CreateGame("croatia", "07:00", "morocco")) +
  CreateCard("23/11", "quarta-feira", CreateGame("spain", "13:00", "costa_rica")) +
  CreateCard("23/11", "quarta-feira", CreateGame("germany", "10:00", "japan")) +
  CreateCard("23/11", "quarta-feira", CreateGame("belgium", "16:00", "canada"))
