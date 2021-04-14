$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


const sinopses = ["Durante a Guerra Fria, em um orfanato do Kentucky, uma garota prodígio do xadrez luta contra o vício para se tornar a número um do mundo.",
    'Após os eventos de "Vingadores: Ultimato", Sam Wilson/Falcão e Bucky Barnes/Soldado Invernal se unem em uma aventura que testa suas habilidades - e a paciência.',
    'Uma agente da CIA investiga uma figura carismática que inicia um movimento espiritual e provoca instabilidade política. Uma história de ficção não baseada em fatos reais.',
    'O brilhante e imaturo detetive Jake Peralta precisa aprender a seguir as regras e trabalhar em equipe quando um capitão exigente assume o comando de seu esquadrão.',
    'Wanda Maximoff e Visão, um casal de super-heróis com uma vida perfeita, que começa a suspeitar que nem tudo é o que parece.',
    'Após receber residência permanente nos Estados Unidos em troca do assassinato de um oficial do governo cubano, Tony Montana se torna o chefe do tráfico de drogas em Miami. Matando qualquer um que entre em seu caminho, Tony eventualmente se torna o maior traficante da Flórida, controlando quase toda a cocaína que entra em Miami. Porém, a pressão da polícia, as guerras com cartéis colombianos e sua própria paranoia servem para alimentar as chamas de sua eventual queda.',
    'Um time dos mais perigosos e encarcerados supervilões são contratados por uma agência secreta do governo, para combater uma poderosa entidade. No entanto, quando eles percebem que não foram escolhidos apenas para ter sucesso, mas também por sua óbvia culpa quando inevitavelmente falharem, terão que decidir se vale a pena ou não continuar correndo risco de morte.',
    'A saga de um guerreiro solitário, que também é um mercenário e pistoleiro, viajando pelos territórios esquecidos e marginais do espaço, logo após a queda do Império e antes da criação da temida Primeira Ordem.',
    'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.',
    'Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los.',
    'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.']

const titulos = ["O Gambito da Rainha", "Falcão e o Soldado Invernal", "Messiah", "Brooklyn Nine-Nine", 'WandaVision', 'Scarface', 'Esquadrão Suicida', 'The Mandalorian', 'Vingadores: Guerra Infinita', 'A Viagem de Chihiro', 'Batman: O Cavaleiro das Trevas'];

let nTitulos = document.querySelectorAll(".item").length;

for (let i = 0; i < nTitulos; i++) {
    document.querySelectorAll(".box-filme")[i].addEventListener("click", function () {

        document.querySelector(".filme-principal").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url('${this.src.replace('mini', 'capa')}')`;
        let indice = Number(this.src.slice(-6, -4)); // pegando o indice pelo nome da imagem
        document.querySelector(".titulo").innerHTML = titulos[indice];
        document.querySelector(".descricao").innerHTML = sinopses[indice];
    })
}
