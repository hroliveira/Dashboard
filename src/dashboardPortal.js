var objetoDivItemDashBoard = new Object();

objetoDivItemDashBoard.contator = 0;

objetoDivItemDashBoard.CarregaItem = function () {

    cuboDashbord.CriaItem('divitemDashBord1', 'Meu Teste1', cuboDashbord.corItem.white);

    cuboDashbord.CriaItem('divitemDashBord2', 'Meu Teste 2', cuboDashbord.corItem.white);

    cuboDashbord.CriaItem('divitemDashBord3', 'Meu Teste 3', cuboDashbord.corItem.white);

    cuboDashbord.CriaItem('divitemDashBord4', 'Meu Teste 4', cuboDashbord.corItem.red);

    cuboDashbord.CriaItem('divitemDashBord5', 'Meu Teste 5', cuboDashbord.corItem.purble);

    cuboDashbord.CriaItem('divitemDashBord6', 'Meu Teste 6', cuboDashbord.corItem.grey);

    objetoDivItemDashBoard.AtualizaConteudo();
}


objetoDivItemDashBoard.CriarDiv = function (numeroDiv) {

    var div = $('<div>');
    var span = $('<span>');
    span.text("Teste meu teste Conteudo div " + numeroDiv + " - " + objetoDivItemDashBoard.contator);
    div.append(span);

    div.css('width', '290px');
    div.css('height', '180px');
    div.css('background-color', 'green');
    div.css('border-radius', '7px');

    return div;
}

objetoDivItemDashBoard.AtualizaConteudo = function () {

    $('#divitemDashBord1Conteudo').html(objetoDivItemDashBoard.CriarDiv(1));

    $('#divitemDashBord2Conteudo').html(objetoDivItemDashBoard.CriarDiv(2));

    $('#divitemDashBord3Conteudo').html(objetoDivItemDashBoard.CriarDiv(3));

    setTimeout(objetoDivItemDashBoard.AtualizaConteudo, 2000);
    objetoDivItemDashBoard.contator++;
}



$(function () {
    objetoDivItemDashBoard.CarregaItem();
});
