(() => { 
    const characterList = document.querySelectorAll(".character-list");
    const myCharacter = document.querySelector(".myCharacter");
    const name =  document.querySelector(".status > .name");
    const title = document.querySelector(".status > .title");
    const description = document.querySelector(".status > [class^='description']");
    
    setTimeout(() => {
        document.querySelector(".cube").setAttribute("class", "cube center hidden");
        document.querySelector(".character-container").setAttribute("class", "character-container");
    }, 5*1000);

    const character = [
        {    
            name: "Bloodhound",
            title: "Rastreadora Tecnológica",
            description: "Bloodhound é uma das maiores caçadoras que as Terras Ermas já viram, mas sua identidade é um mistério. Cercada de mistérios e muitos rumores, acreditam que seja uma pessoa incrivelmente rica, uma assassina sanguinária, uma controladora de Golias, ex-escrava, meia morcega e muitas outras coisas, dependendo de quem estiver falando."
        },
        {
            name: "Gibaltrar",
            title: "Rastreadora Tecnológica",
            description: "Gibraltar é um gigante gentil com um lado selvagem. Filho de dois voluntários da SARAS (Associação de Busca e Resgate de Solace), ele sempre foi bom em tirar os outros de situações perigosas, muito comuns nas Terras Ermas. Porém, ele só começou a entender o valor de proteger os outros quando ele e o namorado roubaram a moto do pai, deram uma volta e ficaram presos num perigoso deslizamento de lama. Ele foi salvo pelos pais, porém o pai dele perdeu um braço no processo. Gibraltar nunca se esqueceu desse sacrifício e dedicou a vida a ajudar os necessitados."
        },
        {
            name: "Lifeline",
            title: "Médica de Combate",
            description: "Ajay Che, conhecida como Lifeline, não é alguém que você esperaria encontrar nos Jogos Apex. Filha de ricos mercadores de armas, ela fugiu de casa quando descobriu os estragos que a família tinha causado e se alistou no Corpo Militar da Fronteira, uma organização humanitária que ajuda as comunidades necessitadas da Fronteira. Desde então, ela dedicou a vida a ajudar os outros e entrou para os Jogos Apex a fim de financiar o Corpo Militar da Fronteira com o dinheiro da premiação."
        },
        {
            name: "Pathfinder",
            title: "Batedor Avançado",
            description: "Pathfinder é a cara do otimismo, apesar das circunstâncias. Um MRVN (eNtidade Versátil Robótica Móvel) modificado para se especializar em sondagem de território que foi ligado décadas atrás em um laboratório abandonado sem nenhuma ideia de quem o criou ou o porquê de sua existência. Apenas com a designação MRVN para se identificar, Pathfinder parte em busca do criador."
        },
        {
            name: "Wraith",
            title: "Combatente Interdimensional",
            description: "Wraith é uma guerreira feroz capaz de realizar ataques rápidos e mortais, além de manipular o tempo-espaço abrindo fendas no tecido da realidade; porém ela não faz ideia de como ganhou esse poder. Anos atrás, ela acordou numa instalação de detenção da IMC para doentes mentais, sem nenhuma memória da vida dela. Ela também começou a ouvir uma voz distante, sussurrando na mente dela e a mantendo acordada por vários dias. Apesar de quase ir à loucura, depois que começou a ouvir e confiar, a voz a ajudou a utilizar o novo poder de manipulação de vazio e a fugir da instalação."
        },
        {
            name: "Bangalore",
            title: "Combatente Profissional",
            description: "Bangalore, os pais e os quatro irmãos mais velhos serviram nas forças armadas da IMC, e ela já era um soldado excepcional desde muito jovem. Era a melhor da turma na academia militar da IMC e a única cadete capaz de desmontar uma Peacekeeper, equipá-la com um funil de precisão e remontá-la em menos de 20 segundos... tudo isso vendada."
        }
    ]


    const action = ["click", "focusin"];
    
    for (let iteratorCharacter = 0; iteratorCharacter < character.length; iteratorCharacter++) {
        for (const iterator of action) {
            characterList[iteratorCharacter].addEventListener(iterator, () => {
                changeCharacter(character[iteratorCharacter].name, character[iteratorCharacter].title, character[iteratorCharacter].description);
            });
        }
    }

    function changeCharacter(...args) {
        myCharacter.src         = `../assets/images/character/${args[0]}.png`;
        myCharacter.alt         = args[0];
        name.textContent        = args[0];
        title.textContent       = args[1];
        description.textContent = args[2];
    }
})();