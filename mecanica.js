/*MENSAGEM NA TELA PARA LINKS INDISPONÍVEIS */
function mensagem() {
    alert("Indisponível no momento");
}

/*EXIBINDO MENSAGEM NA TELA E LIMPANDO CAIXAS DE FORMULÁRIO*/
function limparCampos() {
    // Limpa os campos de entrada
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("campo3").value = "";

    // Exibe o pop-up
    alert("Informações enviadas com sucesso!");
  }

/*MECANICA DE ABAS PARA O ARQUIVO TUTORIAL.HTML*/
const contents = [
    { 
        title: "O que é o Lendas?", 
        text: `Lendas é um jogo de batalha entre dois jogadores! <br>
        Cada um escolhe um personagem que tem um baralho de cartas com poderes especiais. Seu objetivo é usar estratégia, magia e ataques para zerar a vida do adversário e vencer a partida! Mas cuidado: desafios inesperados podem surgir, então prepare-se para pensar rápido e planejar bem seus movimentos. <br>
        Baseado no universo de Beroline, um RPG de mesa único, Lendas trará os personagens da franquia deste universo. Agora você pode controlar as lendas de Beroline como seu personagem.`,	
        extraText: "O jogo consta com 2 versões. A primeira foi desenvolvida em 2019, por Alexander Henrique, o criador da ideia. Esta versão que você pode ver agora é a 2°Edição do game, contando com uma remodelagem completa por parte do designer Uriel Pinheiro. Juntos, os dois desenvolveram o Lendas, um game para inspirar e apresentar desafios!",
        extraImg: URL="imagens/dragao.png" 
    },
    { 
        title: "Como jogar - Antes de começar", 
        text: `<b>Escolha de personagens:</b> Cada jogador joga um dado de 6 lados. Quem tirar o maior número escolhe seu personagem primeiro. <br> 
        <br><b>Inserindo o personagem no tabuleiro: </b>Na primeira fileira de 7 blocos o jogador com menor número do dado pode escolher em qual bloco quer ficar, exceto no centro. Depois de colocar o personagem, o adversário deve colocar na posição oposta. <br> 
        <br><b>Preparando as cartas:</b> Pegue as cartas do seu personagem e retire a carta de ataque comum, que sempre fica na sua mão. Embaralhe as outras cartas e as coloque de cabeça para baixo na área de deck.<br> 
        <br><b>Montando o tabuleiro:</b><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>A</b> - Cada jogador tem um espaço para suas cartas: um baralho, um lugar para cartas usadas (cemitério) e três espaços para cartas ativas. <br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>B</b> - O tabuleiro é uma grade com 7 quadrados na horizontal e 13 na vertical. <br> 
        <br><b>Pegando as cartas iniciais:</b> Cada jogador compra cartas até ter 5 na mão (contando a de ataque comum). Não é permitido ter mais do que 5 cartas a mão.<br> 
        <br><b>Definindo a chegada dos monstros: </b>Some os valores dos dados da escolha de personagem e multiplique por 2. Esse será o turno geral em que os monstros aparecem.`,
        extraText: `<b>Conceitos importantes:</b> <br>
        <b>Turno geral:</b> É a soma dos turnos de todos os jogadores <br>
        <b>Turno particular:</b> É o turno de um único jogador, sem levar em consideração o do adversário. `,
        extraImg: URL="imagens/dragao.png"
    },
    { 
        title: "Como jogar - Durante a partida",  
        text: `<b>Quem joga primeiro?</b> O jogador que venceu a rolagem inicial começa.<br> 
            <br><b>O que fazer no seu turno?</b> Cada jogador tem 2 ações por turno. Ele pode distribuir essas ações da forma que preferir entre andar, atacar ou preparar alguma magia. Não é permitido usar das ações para atacar 2 vezes. Apenas andar duas vezes.<br> 
            <br><b>Usando cartas</b> As cartas seguem algumas regras: <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A - Algumas podem serem usadas em sequência, turno após turno, outras necessitam esperar que tenha um turno sem uso para serem usadas novamente. Essas precisam ficar no campo até poderem voltar para a mão do jogador. <br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B - As cartas contém quantidades de uso, a partir do momento que esgota a quantidade a carta deve ir ao cemitério.<br>
            <br><b>Como funcionam os ataques?</b><br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A - Quem ataca joga um dado e soma o valor para esquiva indicado na carta.<br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B - O adversário também joga um dado, mas não soma nada, somente o valor bruto.<br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C - Se o atacante tirar um valor maior, o dano acontece e o adversário perde vida! Caso o contrário, o adversário esquiva sem danos.<br> 
            <br><b>Iniciando seu próximo turno: </b>Olhe as cartas no tabuleiro. Se alguma carta precisa voltar para sua mão ou ir para o cemitério, faça isso. Depois, compre uma nova carta (se ainda não tiver 5 na mão). `,
        extraText: "As cartas irão indicar os efeitos da magia ou ataques. Assim como também a distância e condições para o uso, caso tenham.",
        extraImg: URL="imagens/carta.jpg"
    },
    { 
        title: "Monstros e personagens",  
        text: `<b>Quando eles aparecem?</b><br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A - Os monstros aparecem no tabuleiro no turno geral que foi calculado antes.<br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B - Eles surgem no meio do tabuleiro, um de cada lado.<br> 
            <br><b>Como lutar contra eles?</b><br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A - Você pode atacá-los normalmente!<br> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B - Eles têm próprias regras de ataque e movimento. Veja <a href="#" onclick="mensagem()" style="text-decoration: underline; background-color: gold">aqui.</a><br> 
            <br><b>Por que lutar contra monstros?</b><br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Se derrotar um monstro, você ganha poderes extras que ajudam a vencer seu adversário! `,
        extraText: `Existem diversos persongens disponíveis para jogar. Acesse <a href="#" onclick="mensagem()" style="text-decoration: underline; background-color: gold">aqui.</a>`,
        extraImg: URL="imagens/monstro.png"
    }
];

const buttons = document.querySelectorAll(".menu button");
const contentBox = document.getElementById("content");

function changeContent(index) {
    contentBox.innerHTML = `
        <h2>${contents[index].title}</h2>
        <p>${contents[index].text}</p>
        <div class="content-img">
            <img class="img-tutorial" src="${contents[index].extraImg}" alt="Imagem extra ${index + 1}">
        </div>
        <p>${contents[index].extraText}</p>
    `;
    contentBox.style.backgroundColor = "white";
    
    buttons.forEach(button => {
        button.classList.remove("active");
        button.style.backgroundColor = "#0A0F2C";
    });
    
    buttons[index].classList.add("active");
    buttons[index].style.backgroundColor = "white";
    contentBox.style.backgroundColor = "white";
}

changeContent(0);
