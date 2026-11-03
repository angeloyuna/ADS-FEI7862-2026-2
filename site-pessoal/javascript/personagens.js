var judah = {
    linkImg: "../media/img/personagens/Judah.webp",
    textoAlt: "Judah de Fire Punch",
    headerThreeTexto: "Judah - Fire Punch",
    linkFonteImg: "https://fire-punch.fandom.com/wiki/Judah?file=Judah.jpg",
    textoFonteImg: "Fire Punch Fandom Wiki"
}

var chrollo = {
    linkImg: "../media/img/personagens/Chap_97_-_Chrollo_in_a_blazer.webp",
    textoAlt: "Chrollo Lucilfer de Hunter x Hunter",
    headerThreeTexto: "Chrollo Lucilfer - Hunter x Hunter",
    linkFonteImg: "https://hunterxhunter.fandom.com/wiki/Chrollo_Lucilfer/Image_Gallery?file=Chap_97_-_Chrollo_in_a_blazer.png",
    textoFonteImg: "Hunterpedia"
}

var venomSnake = {
    linkImg: "../media/img/personagens/Venom_Snake.Motherbase.webp",
    textoAlt: "Venom Snake de Metal Gear Solid V: The Phantom Pain",
    headerThreeTexto: "Venom Snake - Metal Gear Solid V",
    linkFonteImg: "https://metalgear.fandom.com/wiki/Venom_Snake?file=Venom+Snake.Motherbase.jpg",
    textoFonteImg: "Metal Gear Fandom Wiki"
}

var jingliu = {
    linkImg: "../media/img/personagens/Character_Jingliu_Portrait.webp",
    textoAlt: "Jingliu de Honkai: Star Rail",
    headerThreeTexto: "Jingliu - Honkai: Star Rail",
    linkFonteImg: "https://honkai-star-rail.fandom.com/wiki/Jingliu/Media?file=Character_Jingliu_Portrait.png",
    textoFonteImg: "Honkai: Star Rail Fandom Wiki"
}

var kaine = {
    linkImg: "../media/img/personagens/NR2020_Kaine.webp",
    textoAlt: "Kainé de NieR Replicant ver.1.22474487139...",
    headerThreeTexto: "Kainé - NieR Replicant ver 1.22",
    linkFonteImg: "https://nier.fandom.com/wiki/Kain%C3%A9?file=NR2020+Kaine.png",
    textoFonteImg: "NieR Fandom Wiki"
}

var aTwo = {
    linkImg: "../media/img/personagens/YoRHa_No.2A.webp",
    textoAlt: "Yorha A2 de NieR: Automata",
    headerThreeTexto: "A2 - NieR: Automata",
    linkFonteImg: "https://nier.fandom.com/wiki/YoRHa_Type_A_No.2?file=YoRHa+No.2A.png",
    textoFonteImg: "NieR Fandom Wiki"
}

var arrayPersonagens = [judah, chrollo, venomSnake, jingliu, kaine, aTwo];

var kyoko = {
    linkImg: "../media/img/personagens/Kyouko_Kyoko_Kirigiri_Fullbody_Sprite_(1).webp",
    textoAlt: "Kyoko Kirigiri de Danganronpa: Trigger Happy Havoc",
    headerThreeTexto: "Kyoko Kirigiri - Danganronpa: THH",
    linkFonteImg: "https://danganronpa.fandom.com/wiki/Kyoko_Kirigiri/Sprite_Gallery?file=Kyouko_Kyoko_Kirigiri_Fullbody_Sprite_%281%29.png",
    textoFonteImg: "Danganronpa Fandom Wiki"
}

var dmcV = {
    linkImg: "../media/img/personagens/V.webp",
    textoAlt: "V de Devil May Cry 5",
    headerThreeTexto: "V - Devil May Cry 5",
    linkFonteImg: "https://devilmaycry.fandom.com/wiki/V?file=V.png",
    textoFonteImg: "Devil May Cry Fandom Wiki",
}

arrayPersonagens.push(kyoko);
arrayPersonagens.push(dmcV);

const caixaColunaPersonagens = document.querySelector(".caixa-coluna-personagens")
const caixaColunaCCP = caixaColunaPersonagens.querySelector(".caixa-coluna");

function adicionarPersonagem(linkImg, textoAlt, headerThreeTexto, linkFonteImg, textoFonteImg) {

    const divPersonagem = document.createElement("div");
    divPersonagem.classList.add("caixa-personagem");
    
    const imgPersonagem = document.createElement("img");
    imgPersonagem.classList.add("personagem");
    imgPersonagem.setAttribute("src", linkImg);
    imgPersonagem.setAttribute("alt", textoAlt);

    const headerThreePersonagem = document.createElement("h3");
    headerThreePersonagem.textContent = headerThreeTexto;

    const anchorPersonagem = document.createElement("a");
    anchorPersonagem.setAttribute("href", linkFonteImg);
    anchorPersonagem.setAttribute("target", "_blank");
    anchorPersonagem.textContent = textoFonteImg;
    
    const paragraphPersonagem = document.createElement("p");
    paragraphPersonagem.textContent = `Ref: `;

    caixaColunaCCP.append(divPersonagem);
    divPersonagem.append(imgPersonagem);
    divPersonagem.append(headerThreePersonagem);
    divPersonagem.append(paragraphPersonagem);
    paragraphPersonagem.append(anchorPersonagem);

}

adicionarPersonagem(kyoko.linkImg, kyoko.textoAlt, kyoko.headerThreeTexto, kyoko.linkFonteImg, kyoko.textoFonteImg);
adicionarPersonagem(dmcV.linkImg, dmcV.textoAlt, dmcV.headerThreeTexto, dmcV.linkFonteImg, dmcV.textoFonteImg);