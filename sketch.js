//Link do vídeo: https://youtu.be/4JTdaTR3EU4
//Variáveis
Largura = 150;
Altura = 120;
LarguraFases = 37;
AlturaFases = 130;
placar = 0;
selec = 1;

tela = 'menu';

respostas = {"questão1": 1, "questão2": 3, "questão3": 1, "questão4":  2, "questão5": 3,"questão6": 3, "questão7": 4, "questão8": 2, "questão9": 2, "questão10": 3};

//Criação das telas do jogo
function preload() {
//Imagens
  fnt = loadFont('Piedra.ttf');
  mn = loadImage('Menu.jpg');
  cnt1 = loadImage('Conteúdo 01.jpg');
  cnt2 = loadImage('Conteúdo 02.jpg');
  cnt3 = loadImage('Conteúdo 03.jpg');
  cnt4 = loadImage('Conteúdo 04.jpg');
  cnt5 = loadImage('Conteúdo 05.jpg');
  cnt6 = loadImage('Conteúdo 06.jpg');
  qt = loadImage('Questões.jpg');
  placar = 0;
  telas = {
  'menu': menu,
  'orientação0': orientacao0,
  'orientação1': orientacao1,
  'orientação2': orientacao2,
  'orientação3': orientacao3,
  'orientação4': orientacao4,
  'orientação5': orientacao5,
  'orientação6': orientacao6,
  'questão1': ready1,
  'questão2': ready2,
  'questão3': ready3,
  'questão4': ready4,
  'questão5': ready5,
  'questão6': ready6,
  'questão7': ready7,
  'questão8': ready8,
  'questão9': ready9,
  'questão10': ready10,
  'creditos': creditos,
  'instrucoes': instrucoes,
  'acertos': acertos,
  }
}

//Configuração das teclas do jogo
TheGame = {
  'menu': (key) => {
    if(key === "ArrowUp" && selec > 1){
      Altura = Altura-100;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 3){
      Altura = Altura+100;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === 1){
        tela = 'orientação0';
        Largura = 40;
        Altura = 190;
      }
      
      else if(selec === 2){
        tela = 'instrucoes';
      }
      
      else if(selec === 3){
        tela='creditos';
      }
      
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'creditos': (key) => {
    if(key === "Escape") tela = 'menu';
  },
  
  'instrucoes': (key) => {
    if(key === "Escape") tela = 'menu';
  },
  
  'orientação0': (key) => {
    if(key === "Enter"){
      tela = 'orientação1';
    }
    if(key === "Escape"){
      tela = 'menu';
    }
  },
  
  'orientação1': (key) => {
    if(key === "Enter"){
      tela = 'orientação2';
    }
    if(key === "Escape"){
      tela = 'orientação0';
    }
  },
  
  'orientação2': (key) => {
    if(key === "Enter"){
      tela = 'orientação3';
    }
    if(key === "Escape"){
      tela = 'orientação1';
    }
  },
  
  'orientação3': (key) => {
    if(key === "Enter"){
      tela = 'orientação4';
    }
    if(key === "Escape"){
      tela = 'orientação2';
    }
  },
  
  'orientação4': (key) => {
    if(key === "Enter"){
      tela = 'orientação5';
    }
    if(key === "Escape"){
      tela = 'orientação3';
    }
  },
  
  'orientação5': (key) => {
    if(key === "Enter"){
      tela = 'orientação6';
    }
    if(key === "Escape"){
      tela = 'orientação4';
    }
  },
  
  'orientação6': (key) => {
    if(key === "Enter"){
      tela = 'questão1';
    }
    if(key === "Escape"){
      tela = 'orientação5';
    }
  },
  
  'questão1': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === respostas[tela]){
        placar += 1;
        tela = 'questão2';
      }
      
      else if(key=="Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'questão2';
        }
        
      }
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu'
    }
    
  },
  
  'questão2': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === respostas[tela]){
        placar += 1;
        tela = 'questão3';
      }
      
      else if(key=="Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'questão3';
        }
        
      }
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'questão3': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === respostas[tela]){
        placar += 1;
        tela = 'questão4';
      }
      
      else if(key=="Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'questão4';
        }
        
      }
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'questão4': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === respostas[tela]){
        placar += 1;
        tela = 'questão5';
      }
      
      else if(key=="Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'questão5';
        }
        
      }
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'questão5': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === respostas[tela]){
        placar += 1;
        tela = 'questão6';
      }
      
      else if(key=="Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'questão6';
        }
        
      }
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
   
  'questão6': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === respostas[tela]){
        placar += 1;
        tela = 'questão7';
      }
      
      else if(key=="Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'questão7';
        }
        
      }
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'questão7': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === respostas[tela]){
        placar += 1;
        tela = 'questão8';
      }
      
      else if(key=="Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'questão8';
        }
        
      }
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'questão8': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === respostas[tela]){
        placar += 1;
        tela = 'questão9';
      }
      
      else if(key=="Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'questão9';
        }
        
      }
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'questão9': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec === respostas[tela]){
        placar += 1;
        tela = 'questão10';
      }
      
      else if(key=="Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'questão10';
        }
        
      }
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'questão10': (key) => { 
    if(key === "ArrowUp" && selec > 1){
      AlturaFases = AlturaFases-25;
      selec = selec-1;
    }
    
    if(key === "ArrowDown" && selec < 4){
      AlturaFases = AlturaFases+25;
      selec = selec+1;
    }
    
    if(key === "Enter"){
      if(selec == respostas[tela]){
        placar += 1;
        tela = 'acertos';
    }
      
      else if(key === "Enter"){
        if(selec != respostas[tela]){
          placar += 0;
          tela = 'acertos';
        }
        
      }
      
    }
    
    if(key === "Escape"){
      Largura = 150;
      Altura = 120;
      placar = 0;
      selec = 1;
      tela = 'menu';
    }
    
  },
  
  'acertos': (key) => {
    Largura = 150;
    Altura = 120;
    placar = 0;
    selec = 1;
    tela = 'menu';
  }
  
}

function setup(){
  createCanvas(500,500);
}

function draw(){
  background(220);
  telas[tela]();
}

function drawPlacar(){
  text(`Pontos: ${placar}`, 40, 400, 300, 50);
}

//Configuração das telas do jogo
function menu(){
  background(0);
  image(mn, -150, 25, 800, 450);
  rect(Largura, Altura, 185, 45);
  textSize(34);
  textFont(fnt);
  rect( 25, 15, 450, 50);
  text("PARA ENTENDER A TERRA", 60, 50);
  textSize(32);
  text("Iniciar", 200, 155);
  text("Instruções", 180, 250);
  text("Créditos", 190, 350);
  textFont(NORMAL);
}

function orientacao0(){
  background(0);
  rect( 25, 15, 450, 470);
  textSize(20);
  stroke(27);
  textAlign(CENTER);
  text("Orientações:" + "\n" + "\n" + "1 - Leia as instruções do jogo no menu INSTRUÇÕES;" + "\n" + "2 - Antes de iniciar o jogo, segue uma série de conteúdos auxiliares para as perguntas;" + "\n" + "3 - O conteúdo axiliar é de caráter opcional, logo pode ser 'pulado' ao clicar a tecla 'enter';" + "\n" + "4 - É possivel voltar as telas de conteúdo auxiliar para releitura apenas antes do jogo iniciar ciclando na tecla 'esc';" + "\n" + "5 - Após o jogo começar voce poderá voltar ao menu iniciar clicando na tecla 'esc' reiniciando assim pontuação do jogo;" + "\n" + "6 - A pontuação de acertos será disponibilizado a cada fase no canto inferior esquerdo e será apresentada no final do jogo;" + "\n" + "7 - Boa sorte! :D", 35, 20, 425, 450);
}

function orientacao1(){
  background(220);
  image(cnt1, 0, 0, 500, 500);
}

function orientacao2(){
  background(220);
  image(cnt2, 0, 0, 500, 500);
}

function orientacao3(){
  background(220);
  image(cnt3, 0, 0, 500, 500);
}

function orientacao4(){
  background(220);
  image(cnt4, 0, 0, 500, 500);
}

function orientacao5(){
  background(220);
  image(cnt5, 0, 0, 500, 500);
}

function orientacao6(){
  background(220);
  image(cnt6, 0, 0, 500, 500);
}

function ready1(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 410, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 1: De acordo com a Teoria da Tectônica de Placas, a litosfera está fragmentada em cerca de uma dúzia de grandes placas que estão em movimento sobre a superfície terrestre." + "\n" + "Sobre a tectônica de placas é CORRETO afirmar que os limites divergentes são onde:", 20, 20, 460, 260);
  textSize(14);
  text("A) As placas se afastam e uma nova litosfera é criada."+"\n", 45, 150);
  text("B) As placas se juntam e uma delas é consumida."+"\n", 45, 175);
  text("C) As placas deslizam horizontalmente uma em relação à outra."+"\n", 45, 200);
  text("D) Há uma zona de subducção."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

function ready2(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 220, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 2: Leia o texto e responda ao que se pede. 'Essa camada soma todos os ecossistemas da Terra. Inclui, portanto, todos os organismos vivos do Planeta desde as altas montanhas até o fundo do mar.'" + "\n" + "A camada da Terra citada no texto é a:", 20, 20, 460, 260);
  textSize(14);
  text("A) Biosfera."+"\n", 45, 150);
  text("B) Hidrosfera."+"\n", 45, 175);
  text("C) Litosfera."+"\n", 45, 200);
  text("D) Crosta terrestre."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

function ready3(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 310, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 3: Complete a frase: 'No interior da ________ formam-se outro tipo de rocha, chamada ________, devido a pressão e temperatura muito elevadas, fortes atritos, ou a combinação química de dois ou mais minerais transformam a estrutura molecular das rochas já formadas, como, por exemplo, o ________.'", 20, 20, 460, 260);
  textSize(14);
  text("A) Crosta terrestre, rochas metamórficas, mármore."+"\n", 45, 150);
  text("B) Manto terrestre, rochas sedimentares, níquel."+"\n", 45, 175);
  text("C) Núcleo terrestre, rochas ígneas, ardósia."+"\n", 45, 200);
  text("D) Superfície terrestre, rochas metamórficas, níquel."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

function ready4(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 220, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 4: Complete a frase: 'A ocorrência de abalos sísmicos é um dos processos vinculados à Deriva Continental. Quando os abalos sísmicos se manifestam no fundo dos oceanos, recebem o nome de maremotos, os quais podem formar ondas gigantescas chamadas __________.'", 20, 20, 460, 260);
  textSize(14);
  text("A) Marola."+"\n", 45, 150);
  text("B) Tsunami."+"\n", 45, 175);
  text("C) Dorsais."+"\n", 45, 200);
  text("D) Subducção."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

function ready5(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 220, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 5: As placas tectônicas são imensos blocos rochosos que deslizam sobre o magma e constituem a litosfera. Ao se movimentar, esses blocos geram dois tipos principais de tectonismo: a colisão de placas tectônicas e o afastamento de placas tectônicas. Se tratando de colisão de placas tectônicas, o tipo de relevo que se constitui é:", 20, 20, 460, 260);
  textSize(14);
  text("A) Depressões."+"\n", 45, 150);
  text("B) Planícies."+"\n", 45, 175);
  text("C) Cadeias montanhosas."+"\n", 45, 200);
  text("D) Planaltos."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

function ready6(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 410, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 6: As rochas, segundo a sua formação, podem ser classificadas em três tipos:", 20, 20, 460, 260);
  textSize(14);
  text("A) Intrusivas, físicas e sedimentares."+"\n", 45, 150);
  text("B) Sedimentares, intrusivas e físicas."+"\n", 45, 175);
  text("C) Magmáticas, metamórficas e sedimentares."+"\n", 45, 200);
  text("D) Magmáticas, ígneas e extrusivas."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

function ready7(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 410, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 7: Os limites entre as placas podem ser classificados de acordo com: 1. Onde as placas colidem uma com a outra. 2. Onde as placas se separam uma da outra. 3. Onde as placas se atritam uma ao lado da outra." + "\n" + "Assinale a alternativa que indica correta e sequencialmente os limites descritos acima.", 20, 20, 460, 260);
  textSize(14);
  text("A) Convergentes • Transformantes • Divergentes."+"\n", 45, 150);
  text("B) Divergentes • Convergentes • Transformantes."+"\n", 45, 175);
  text("C) Transformantes • Convergentes • Divergentes."+"\n", 45, 200);
  text("D) Convergentes • Divergentes • Transformantes."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

function ready8(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 220, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 8: Em que era geológica ocorreu a divisão do Super-Continente Pangéia em Laurásia e Gondwana?", 20, 20, 460, 260);
  textSize(14);
  text("A) Cenozoica."+"\n", 45, 150);
  text("B) Mesozoica."+"\n", 45, 175);
  text("C) Paleozoica."+"\n", 45, 200);
  text("D) Proterozoica."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

function ready9(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 410, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 9: Após a movimentação de placas tectônicas, a Pangeia se dividiu em dois grandes blocos denominados", 20, 20, 460, 260);
  textSize(14);
  text("A) Pantalassa e Tetis."+"\n", 45, 150);
  text("B) Gondwana e Laurásia."+"\n", 45, 175);
  text("C) Planalto Superior e Planalto Inferior."+"\n", 45, 200);
  text("D) Eurásia e Geodésia."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

function ready10(){
  
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(LarguraFases, AlturaFases, 220, 28);
  textStyle(NORMAL);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
  rect(15, 15, 475, 120);
  text("QUESTÃO 10: A energia solar e a gravidade impulsionam o processo de sedimentação, sendo a água o principal meio de transporte para sedimentos erodidos das rochas. Quando a rocha desintegrada e dissolvida por intemperismo, colhida e movida por erosão, é transportada e depositada ao longo dos rios, praias e oceanos, seu soterramento dá início ao processo de formação da rocha:", 20, 20, 460, 260);
  textSize(14);
  text("A) Metamórfica."+"\n", 45, 150);
  text("B) Ígnea."+"\n", 45, 175);
  text("C) Sedimentar."+"\n", 45, 200);
  text("D) Granítica."+"\n", 45, 225);
  rect( 35, 395, 70, 25);
  drawPlacar();
}

//Placar do jogo
function acertos(){
  background(0);
  image(qt, 25, 25, 450, 450);
  rect(40, 25, 275, 35);
  textFont(fnt);
  textSize(24);
  text(`Você acertou ${placar} questões!`, 50, 50);
}

function instrucoes(){
  background(0);
  image(mn, -150, 25, 800, 450);
  rect(25, 25, 450, 450);
  textStyle();
  textSize(16);
  stroke(1);
  textAlign(LEFT);
  text("Instruções:" + "\n" +"\n" + "Esse jogo é focado para crianças e adolescentes que cursaram ou cursam o ensino fundamental II e ensino médio. Tem caráter educativo e suplementar por se tratar de uma ferramenta de conhecimento, um jogo de perguntas e respostas." + "\n" + "\n" + "O tema central do jogo se baseia em questões referentes a disciplina de Geografia enfatisando na área geológica como a formação do planeta, teoria da tectônica de placas, ciclo das rochas, entre outros." + "\n" + "\n" + "Como jogar:"  + "\n" +"\n" + "O jogo conta com um sistema de teclado onde o jogador deverá escolher uma das alternativas através das teclas direcionais (seta para cima/seta para baixo) e selecionar a mesma com a tecla 'enter'.", 50, 50, 350, 400);
}

function creditos(){
  background(0);
  image(mn, -150, 25, 800, 450);
  rect(25, 25, 450, 450);
  textSize(16);
  stroke(23);
  textAlign(LEFT);
//Espaço para imagens
  text("Aluno: João Pedro Souza dos Santos."+"\n", 50, 60);
  text("Orientador: Joel Caetano de Souza Júnior."+"\n", 50, 80, 300, 320);
  text("Referências:" + "\n" + "\n" + "Livro: Para entender a terra, 2006." + "\n" + "\n" + "Imagens: LAPA - Laboratório de Paleontologia da Amazônia, CPRM - Serviço Geólogico Brasileiro e Wikipedia." + "\n" + "\n" + "Orientações: LAPA - Laboratório de Paleontologia da Amazônia, CPRM - Serviço Geólogico Brasileiro e Wikipedia." + "\n" +"\n" +  "Perguntas e respostas: Plataforma Qconcursos, disciplina de Geografia-Geologia.", 50, 120, 390, 320);
}

function keyPressed(){
  TheGame[tela](key);
}