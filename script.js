const grupoA = [
  {
    nome: "🇧🇷 Brasil",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    saldo: 0
  },
  {
    nome: "🇲🇽 México",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    saldo: 0
  },
  {
    nome: "🇯🇵 Japão",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    saldo: 0
  },
  {
    nome: "🇨🇲 Camarões",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    saldo: 0
  }
];

function zerarGrupo() {
  grupoA.forEach(time => {
    time.pontos = 0;
    time.jogos = 0;
    time.vitorias = 0;
    time.empates = 0;
    time.derrotas = 0;
    time.saldo = 0;
  });
}

function renderizarTabela() {
  const tabela = document.getElementById("classificacaoA");

  tabela.innerHTML = "";

  grupoA.forEach((time, index) => {
    const classe = index < 2 ? "classificado" : "";

    tabela.innerHTML += `
      <tr class="${classe}">
        <td>${time.nome}</td>
        <td>${time.pontos}</td>
        <td>${time.jogos}</td>
        <td>${time.vitorias}</td>
        <td>${time.empates}</td>
        <td>${time.derrotas}</td>
        <td>${time.saldo}</td>
      </tr>
    `;
  });
}

function ordenarGrupo() {
  grupoA.sort((a, b) => {
    if (b.pontos !== a.pontos) {
      return b.pontos - a.pontos;
    }

    return b.saldo - a.saldo;
  });
}

function processarJogo(timeA, golsA, timeB, golsB) {
  timeA.jogos++;
  timeB.jogos++;

  timeA.saldo += golsA - golsB;
  timeB.saldo += golsB - golsA;

  if (golsA > golsB) {
    timeA.pontos += 3;
    timeA.vitorias++;
    timeB.derrotas++;
  } else if (golsA < golsB) {
    timeB.pontos += 3;
    timeB.vitorias++;
    timeA.derrotas++;
  } else {
    timeA.pontos++;
    timeB.pontos++;
    timeA.empates++;
    timeB.empates++;
  }
}

document.getElementById("simular").addEventListener("click", () => {

  zerarGrupo();

  const brasil = Number(document.getElementById("brasil").value || 0);
  const japao = Number(document.getElementById("japao").value || 0);

  const mexico = Number(document.getElementById("mexico").value || 0);
  const camaroes = Number(document.getElementById("camaroes").value || 0);

  const brasilMexico = Number(document.getElementById("brasilMexico").value || 0);
  const mexicoBrasil = Number(document.getElementById("mexicoBrasil").value || 0);

  const japaoCamaroes = Number(document.getElementById("japaoCamaroes").value || 0);
  const camaroesJapao = Number(document.getElementById("camaroesJapao").value || 0);

  const brasilCamaroes = Number(document.getElementById("brasilCamaroes").value || 0);
  const camaroesBrasil = Number(document.getElementById("camaroesBrasil").value || 0);

  const mexicoJapao = Number(document.getElementById("mexicoJapao").value || 0);
  const japaoMexico = Number(document.getElementById("japaoMexico").value || 0);

  const timeBrasil = grupoA.find(t => t.nome.includes("Brasil"));
  const timeMexico = grupoA.find(t => t.nome.includes("México"));
  const timeJapao = grupoA.find(t => t.nome.includes("Japão"));
  const timeCamaroes = grupoA.find(t => t.nome.includes("Camarões"));

  processarJogo(timeBrasil, brasil, timeJapao, japao);
  processarJogo(timeMexico, mexico, timeCamaroes, camaroes);

  processarJogo(timeBrasil, brasilMexico, timeMexico, mexicoBrasil);
  processarJogo(timeJapao, japaoCamaroes, timeCamaroes, camaroesJapao);

  processarJogo(timeBrasil, brasilCamaroes, timeCamaroes, camaroesBrasil);
  processarJogo(timeMexico, mexicoJapao, timeJapao, japaoMexico);

  ordenarGrupo();
  renderizarTabela();
});

renderizarTabela();
