const grupoA = [
  {
    nome: "🇧🇷 Brasil",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    saldo: 0
  },
  {
    nome: "🇲🇽 México",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    saldo: 0
  },
  {
    nome: "🇯🇵 Japão",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    saldo: 0

  },
  {
    nome: "🇨🇲 Camarões",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    saldo: 0
  }
];
const grupoB = [

    {
        nome: "🇫🇷 França",
        pontos: 0,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0
    },

    {
        nome: "🇺🇸 Estados Unidos",
        pontos: 0,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0
    },

    {
        nome: "🇰🇷 Coreia do Sul",
        pontos: 0,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0
    },

    {
        nome: "🇳🇬 Nigéria",
        pontos: 0,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0
    }

];

function carregarDados() {

    const dados =
        JSON.parse(
            localStorage.getItem("grupoA")
        );

    if (!dados) return;

    document.getElementById("brasil").value =
        dados.brasil || "";

    document.getElementById("japao").value =
        dados.japao || "";

    document.getElementById("mexico").value =
        dados.mexico || "";

    document.getElementById("camaroes").value =
        dados.camaroes || "";

    document.getElementById("brasilMexico").value =
        dados.brasilMexico || "";

    document.getElementById("mexicoBrasil").value =
        dados.mexicoBrasil || "";

    document.getElementById("japaoCamaroes").value =
        dados.japaoCamaroes || "";

    document.getElementById("camaroesJapao").value =
        dados.camaroesJapao || "";

    document.getElementById("brasilCamaroes").value =
        dados.brasilCamaroes || "";

    document.getElementById("camaroesBrasil").value =
        dados.camaroesBrasil || "";

    document.getElementById("mexicoJapao").value =
        dados.mexicoJapao || "";

    document.getElementById("japaoMexico").value =
        dados.japaoMexico || "";

}

function zerarGrupo() {
  grupoA.forEach(time => {
    time.pontos = 0;
    time.jogos = 0;
    time.vitorias = 0;
    time.empates = 0;
    time.derrotas = 0;
    time.golsPro = 0;
    time.golsContra = 0;
    time.saldo = 0;
  });
}

function renderizarTabela() {
  const tabela = document.getElementById("classificacaoA");

  tabela.innerHTML = "";

  grupoA.forEach((time, index) => {
    
    let classe = "";

if (index === 0) {
    classe = "lider";
}
else if (index < 2) {
    classe = "classificado";
}
    tabela.innerHTML += `
      <tr class="${classe}">
        <td>${index + 1}</td>
        <td>${time.nome}</td>
        <td>${time.pontos}</td>
        <td>${time.jogos}</td>
        <td>${time.vitorias}</td>
        <td>${time.empates}</td>
        <td>${time.derrotas}</td>
        <td>${time.golsPro}</td>
        <td>${time.golsContra}</td>
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

  timeA.golsPro += golsA;
  timeA.golsContra += golsB;

  timeB.golsPro += golsB;
  timeB.golsContra += golsA;

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
function jogoPreenchido(idA, idB) {

    const valorA =
        document.getElementById(idA).value;

    const valorB =
        document.getElementById(idB).value;

    return valorA !== "" && valorB !== "";

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

  if (jogoPreenchido("brasil", "japao")) {

    processarJogo(
        timeBrasil,
        brasil,
        timeJapao,
        japao
    );

}

if (jogoPreenchido("mexico", "camaroes")) {

    processarJogo(
        timeMexico,
        mexico,
        timeCamaroes,
        camaroes
    );

}

if (jogoPreenchido("brasilMexico", "mexicoBrasil")) {

    processarJogo(
        timeBrasil,
        brasilMexico,
        timeMexico,
        mexicoBrasil
    );

}

if (jogoPreenchido("japaoCamaroes", "camaroesJapao")) {

    processarJogo(
        timeJapao,
        japaoCamaroes,
        timeCamaroes,
        camaroesJapao
    );

}

if (jogoPreenchido("brasilCamaroes", "camaroesBrasil")) {

    processarJogo(
        timeBrasil,
        brasilCamaroes,
        timeCamaroes,
        camaroesBrasil
    );

}

if (jogoPreenchido("mexicoJapao", "japaoMexico")) {

    processarJogo(
        timeMexico,
        mexicoJapao,
        timeJapao,
        japaoMexico
    );

}

  ordenarGrupo();
  renderizarTabela();
  salvarDados();
});

function salvarDados() {

    const dados = {

        brasil: document.getElementById("brasil").value,
        japao: document.getElementById("japao").value,

        mexico: document.getElementById("mexico").value,
        camaroes: document.getElementById("camaroes").value,

        brasilMexico: document.getElementById("brasilMexico").value,
        mexicoBrasil: document.getElementById("mexicoBrasil").value,

        japaoCamaroes: document.getElementById("japaoCamaroes").value,
        camaroesJapao: document.getElementById("camaroesJapao").value,

        brasilCamaroes: document.getElementById("brasilCamaroes").value,
        camaroesBrasil: document.getElementById("camaroesBrasil").value,

        mexicoJapao: document.getElementById("mexicoJapao").value,
        japaoMexico: document.getElementById("japaoMexico").value

    };

    localStorage.setItem(
        "grupoA",
        JSON.stringify(dados)
    );

}
document
    .getElementById("limpar")
    .addEventListener("click", () => {

        if(confirm("Deseja apagar toda a simulação?")){

            localStorage.removeItem("grupoA");

            location.reload();

        }

    });

carregarDados();

document
    .getElementById("simular")
    .click();
    function renderizarGrupo(grupo, tabelaId) {

        const tabela =
            document.getElementById(tabelaId);
    
        tabela.innerHTML = "";
    
        grupo.forEach((time, index) => {
    
            let classe = "";
    
            if (index === 0) {
                classe = "lider";
            }
            else if (index < 2) {
                classe = "classificado";
            }
    
            tabela.innerHTML += `
                <tr class="${classe}">
                    <td>${index + 1}</td>
                    <td>${time.nome}</td>
                    <td>${time.pontos}</td>
                    <td>${time.jogos}</td>
                    <td>${time.vitorias}</td>
                    <td>${time.empates}</td>
                    <td>${time.derrotas}</td>
                    <td>${time.golsPro}</td>
                    <td>${time.golsContra}</td>
                    <td>${time.saldo}</td>
                </tr>
            `;
    
        });
    
    }
    renderizarGrupoB();
    
    function renderizarGrupoB() {
        renderizarGrupo(grupoB, "classificacaoB");
    }
