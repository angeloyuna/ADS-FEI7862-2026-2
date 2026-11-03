const ganhouJogoMemoria = document.getElementById("ganhou-jogo-memoria");
const erroJogoMemoria = document.getElementById("erro-jogo-memoria");

const labelQuantidadePares = document.getElementById("label-quantidade-pares");
const quantidadePares = document.getElementById("quantidade-pares");

const btnComecarJogoMemoria = document.getElementById("botao-comecar-jogo-memoria");
const btnEncerrarJogoMemoria = document.getElementById("botao-encerrar-jogo-memoria");

const jogandoJogoMemoria = document.getElementById("jogando-jogo-memoria");
const dadosJogoMemoria = document.getElementById("dados-jogo-memoria");

const dadosParesAchados = document.getElementById("dados-pares-achados");
const dadosTentativas = document.getElementById("dados-tentativas");
const dadosPartidas = document.getElementById("dados-partidas");

const dadosNumParesAchados = document.getElementById("dados-num-pares-achados");
const dadosNumTentativas = document.getElementById("dados-num-tentativas");
const dadosNumPartidas = document.getElementById("dados-num-partidas");

let numPartidas = localStorage.numPartidas;
verificarNumPartidas();

function verificarNumPartidas() {

    if (numPartidas == undefined) {
        localStorage.numPartidas = 0;
    }

    dadosNumPartidas.textContent = localStorage.numPartidas;
}

var emojisArray = ["🌑", "☀️", "💿", "💻", "⚙️", "📪", "📖", "🕒", "🛑", "📝"];

function gerarIndexAleatorio() {

    let max = 10;
    let min = 0;

    let numRnd = Math.floor(Math.random() * (max - min)) + min;
    return numRnd;
}

function gerarParesEmojis(qtdCartas) {

    let emojiPares = new Array();
    let emojiParUm = new Array();
    let emojiParDois = new Array();

        do {

            let numIndex = gerarIndexAleatorio();    
            let emojiEscolhido = emojisArray[numIndex];

            if (!(emojiParUm.includes(emojiEscolhido))) {
                emojiParUm.push(emojiEscolhido);
            }
                            
        } while (emojiParUm.length != qtdCartas / 2)
    
        do {

            let numIndex = gerarIndexAleatorio();
            let emojiEscolhido = emojiParUm[numIndex];

                if (!(emojiParDois.includes(emojiEscolhido) || emojiEscolhido == undefined)) {
                    emojiParDois.push(emojiEscolhido);
                }
            
                    
        } while (emojiParDois.length != qtdCartas / 2)
        
        emojiPares.push(emojiParUm);
        emojiPares.push(emojiParDois);
    
    return emojiPares;
}

function gerarCartas(emojiPares) {

    let cartasAdicionadas = 0;
    
    let emojisParUm  = emojiPares[0];
    let emojisParDois = emojiPares[1];

    const cartasJogoMemoria = document.createElement("div");
    jogandoJogoMemoria.append(cartasJogoMemoria);

    cartasJogoMemoria.id = ("cartas-jogo-memoria");

    for (let i = 0; i < emojisParUm.length; i++) {

        cartasAdicionadas++;

        const cartaJogoMemoria = document.createElement("button");
        cartaJogoMemoria.classList.add("carta-jogo-memoria");
        cartaJogoMemoria.id = `carta-jogo-memoria-${cartasAdicionadas}`
                        
        const emojiJogoMemoria = document.createElement("p");
        emojiJogoMemoria.classList.add("emoji-jogo-memoria");
        emojiJogoMemoria.textContent = emojisParUm[i];
        emojiJogoMemoria.id = `emoji-jogo-memoria-carta-${cartasAdicionadas}`

        cartaJogoMemoria.append(emojiJogoMemoria);
        cartasJogoMemoria.append(cartaJogoMemoria);

    } 

    for (let i = 0; i < emojisParDois.length; i++) {

        cartasAdicionadas++;

        const cartaJogoMemoria = document.createElement("button");
        cartaJogoMemoria.classList.add("carta-jogo-memoria");
        cartaJogoMemoria.id = `carta-jogo-memoria-${cartasAdicionadas}`
                        
        const emojiJogoMemoria = document.createElement("p");
        emojiJogoMemoria.classList.add("emoji-jogo-memoria");
        emojiJogoMemoria.textContent = emojisParDois[i];
        emojiJogoMemoria.id = `emoji-jogo-memoria-carta-${cartasAdicionadas}`

        cartaJogoMemoria.append(emojiJogoMemoria);
        cartasJogoMemoria.append(cartaJogoMemoria);

    }        
}

function verificarCartasViradas(qtdCartas, qtdPares) {

    let emojiCartaVirados = new Array();

    // Obter emojis virados
    for (let i = 1; i <= qtdCartas; i++) {

        let emojiCartaTeste = document.getElementById(`emoji-jogo-memoria-carta-${i}`);

        if (emojiCartaTeste.style.opacity == "1") {
            emojiCartaVirados.push(emojiCartaTeste);
        }   
    }
        
    // Verificar se os emojis virados são iguais
    if (emojiCartaVirados[0].textContent == emojiCartaVirados[1].textContent) {

        emojiCartaVirados[0].classList.add("emoji-jogo-memoria-acertado");
        emojiCartaVirados[1].classList.add("emoji-jogo-memoria-acertado");

        dadosNumParesAchados.textContent = parseInt(dadosNumParesAchados.textContent) + 1;
        dadosNumTentativas.textContent = parseInt(dadosNumTentativas.textContent) + 1 ;

        if (dadosNumParesAchados.textContent == qtdPares) {
            
            ganhouJogoMemoria.style.display = "block";

            labelQuantidadePares.style.opacity = "1";
            quantidadePares.style.opacity = "1";
            quantidadePares.disabled = false;

            btnComecarJogoMemoria.style.display = "inline-flex";
            btnEncerrarJogoMemoria.style.display = "none";
        }

    } else {
        dadosNumTentativas.textContent = parseInt(dadosNumTentativas.textContent) + 1 ;
    }
}

function virarCarta(qtdCartas, qtdPares, id) {

    var emojiCarta;
    var cartasViradas = 1; 
    
    for (let i = 1; i <= qtdCartas; i++) {

        emojiCarta = document.getElementById(`emoji-jogo-memoria-carta-${i}`);

        if (emojiCarta.style.opacity ==  "1") {
            cartasViradas++;
        }
    }

    if (cartasViradas > 2) {
        for (let i = 1; i <= qtdCartas; i++) {
            
            emojiCarta = document.getElementById(`emoji-jogo-memoria-carta-${i}`);
            emojiCarta.classList.remove("emoji-jogo-memoria-virando");
            emojiCarta.style.opacity = "0";
        }
    }

    var emojiCartaPressionada = document.getElementById(id);

    if (!(emojiCartaPressionada.classList.contains("emoji-jogo-memoria-acertado"))) {
        emojiCartaPressionada.classList.add("emoji-jogo-memoria-virando");
        emojiCartaPressionada.style.opacity = "1";
    }

    if (cartasViradas == 2) {
        verificarCartasViradas(qtdCartas, qtdPares);
    }
}

function encerrarJogo() {
    
    document.getElementById("cartas-jogo-memoria").remove();

    btnEncerrarJogoMemoria.style.display = "none";
    btnComecarJogoMemoria.style.display = "inline-flex";

    labelQuantidadePares.style.opacity = "1";
    quantidadePares.style.opacity = "1";
    quantidadePares.disabled = false;
    
    dadosParesAchados.style.display = "none";
    dadosTentativas.style.display = "none"

    dadosNumParesAchados.textContent = "0";
    dadosNumTentativas.textContent = "0";
}

function comecarJogo() {

    let qtdPares = quantidadePares.value;
    let qtdCartas = qtdPares * 2;

    if (qtdPares < 1 || qtdPares > 10 || qtdPares == "") {
        erroJogoMemoria.style.display = "block";
    } else {

        if (document.getElementById("cartas-jogo-memoria") != null) {
            encerrarJogo();
        }

        localStorage.numPartidas++;
        verificarNumPartidas();

        ganhouJogoMemoria.style.display = "none";
        erroJogoMemoria.style.display = "none";

        labelQuantidadePares.style.opacity = "0.5";
        quantidadePares.style.opacity = "0.5";
        quantidadePares.disabled = true;

        btnComecarJogoMemoria.style.display = "none";
        btnEncerrarJogoMemoria.style.display = "inline-flex";

        let emojiPares = gerarParesEmojis(qtdCartas);
        gerarCartas(emojiPares);
        
        dadosParesAchados.style.display = "inline-flex";
        dadosTentativas.style.display = "inline-flex";
    }

    for (let i = 1; i <= qtdCartas; i++) {
        var cartaJogoMemoria = document.getElementById(`carta-jogo-memoria-${i}`);
        cartaJogoMemoria.addEventListener("click", () => {virarCarta(qtdCartas, qtdPares, `emoji-jogo-memoria-carta-${i}`)});
    }

    btnEncerrarJogoMemoria.addEventListener("click", encerrarJogo);
}

quantidadePares.addEventListener("keydown", function(event) {
    if (event.key  === "Enter") {
        event.preventDefault();
        btnComecarJogoMemoria.click();
    }});
btnComecarJogoMemoria.addEventListener("click", comecarJogo);