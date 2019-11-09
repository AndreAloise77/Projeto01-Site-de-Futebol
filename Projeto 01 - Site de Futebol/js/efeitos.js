$(document).ready(function () {
    /*
        JQuery sempre responde ao último seletor, que neste caso é o #logotipo
        Então é possível criar mais de um evento para o mesmo seletor
        Ex: on("mouseover"..codigo da function..).on("mouseout"..codigo da function..);
    */
    $("#logotipo").on("mouseover", function () {
        //Ao passar o mouse sobre o logotipo, vamos adicionar uma classe chamada efeito,
        //que modificará o  css do banner
        $("#banner h1").addClass("efeito");
    }).on("mouseout", function () {
        $("#banner h1").removeClass("efeito");
    });
    /*
        Agora vamos aumentar o tamanho da caixa de busca quando o usuário clica nela e a
        "barrinha" fica piscando ou seja, ela está com um focus ali.
    */
    $("#input-search").on("focus", function () {

        $("li.search").addClass("ativo");

    }).on("blur", function () {

        $("li.search").removeClass("ativo");

    });
    /*
        Estamos colocando uma responsividade para a exibição da quantidade de intens no carousel
    */
    $(".thumbnails").owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        navText: ["Anterior", "Próximo"],
        responsive: {
            /*Aqui colocaremos a exibição da quantidade de itens na tela a partir de uma resolução
            */
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
});