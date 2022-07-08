const qtd_de_fotos = 32;
const qtd_a_ser_mostrada = 32;


class item_galeria {
    constructor(img_url) {
        this.url = img_url;
    }
}

const fotos = [];

for(let i = 1; i < qtd_de_fotos; i++) {
    fotos.push(new item_galeria(`./fotos/${i}.jpg`));
}

function desenha_galeria() {
    for(var j=0; j<qtd_a_ser_mostrada-1; j++){
        var mydiv = document.querySelector('.galeria__container');
        var newcontent = document.createElement('div');
        newcontent.innerHTML = `<button class="galeria__miniatura" value="${j}"><img src=${fotos[j].url} alt=""></button>`;
        while (newcontent.firstChild) {
            mydiv.appendChild(newcontent.firstChild);
        }
    }
}

desenha_galeria();

const foto = document.querySelectorAll('.galeria__miniatura');

foto.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('.galeria__mascara').classList.add("galeria__mascara--aberta");
        document.querySelector('.galeria__foto').classList.add("galeria__foto--aberta");
        desenha_imagem(fotos[parseInt(button.value)]);
    })
})

function desenha_imagem(objeto) {
    document.querySelector('.galeria__foto').innerHTML = `<img src=${objeto.url} alt=""><button class="botao__fechar">X</button>`;
    document.querySelector('.botao__fechar').addEventListener('click', () => {
        document.querySelector('.galeria__mascara').classList.remove("galeria__mascara--aberta");
        document.querySelector('.galeria__foto').classList.remove("galeria__foto--aberta");
        document.querySelector('.galeria__foto').classList.add("galeria__foto--fechada");
    })
}