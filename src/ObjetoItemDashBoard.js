const cuboDashboard = new Object();

// Defina as Cores
cuboDashboard.corItem = {
  grey: 0,
  white: 1,
  red: 2,
  purble: 3
};

// Cria os componenttes do Dashboard
cuboDashboard.CriaItem = function (idDiv, titulo, corItem, conteudo = "") {
  const _titulo = "Sem titulo";

  if (titulo == null || titulo == "" || titulo == undefined) {
    titulo = _titulo;
  }
  const cores = cuboDashbord.ObterCoresItem(corItem);

  const divTopo = $('<div>');
  divTopo.addClass('ItemTop');
  divTopo.css('color', cores.corTitulo);

  const divCabecalho = $('<div>');
  divCabecalho.addClass('itemCabecalho');

  const divTitulo = $('<div>');
  divTitulo.text(titulo);
  divTitulo.addClass('itemTitulo');

  const divControles = $('<div>');
  divControles.addClass('itemControle');

  cuboDashbord.ConfigurarBotoes(idDiv, divControles);

  const divConteudo = $('<div>');
  divConteudo.addClass('itemConteudo');
  divConteudo.attr('id', idDiv + 'Conteudo');
  divConteudo.css('overflow', 'auto');

  $('#' + idDiv).html('');
  $('#' + idDiv).append(divTopo);
  divTopo.append(divCabecalho);
  divCabecalho.append(divTitulo);
  divTitulo.append(divControles);

  divConteudo.css('height', '180px');
  divConteudo.append(conteudo);
  divTopo.append(divConteudo);

  $('#' + idDiv).css('background-color', cores.corFundo);
  $('#' + idDiv).addClass('efeitoDiv');
}

// Define as Cores
cuboDashboard.ObterCoresItem = function (corItem) {
  const retorno = { corFundo: 'grey', corTexto: 'white', corTitulo: 'white' };

  switch (corItem) {
    case cuboDashboard.corItem.grey:
      retorno.corFundo = 'rgb(105,105,105)';
      retorno.corTexto = 'white';
      retorno.corTitulo = 'white';
      break;

    case cuboDashboard.corItem.white:
      retorno.corFundo = 'rgb(248,248,255)';
      retorno.corTexto = 'black';
      retorno.corTitulo = 'black';
      break;

    case cuboDashboard.corItem.red:
      retorno.corFundo = 'rgb(255,0,0)';
      retorno.corTexto = 'black';
      retorno.corTitulo = 'black';
      break;

    case cuboDashboard.corItem.purble:
      retorno.corFundo = 'rgb(128,0,128)';
      retorno.corTexto = 'black';
      retorno.corTitulo = 'black';
      break;
  }

  return retorno;
}

//Configurar os Botoes de Fechar, Maximizar e Minimizar
cuboDashboard.ConfigurarBotoes = function (idDiv, divControles) {

  const btnMinimizar = cuboDashbord.CriarBotoes(idDiv, divControles, 'img/minimizar.png', 'MinMax', 'itemBotaoMax');
  btnMinimizar.click(function () {
    cuboDashbord.ModoBotao(idDiv, this);
  });

  const btnFechar = cuboDashbord.CriarBotoes(idDiv, divControles, 'img/fechar.png', 'fechar');

  btnFechar.click(function () {
    $("#" + idDiv).hide('slow', function () {
      const divCubo = $(this).parent();
      divCubo.remove()
    })
  });
}

cuboDashboard.MododBotao = function (idDiv, botao) {
  const classeNome = $('#' + botao.id).attr('class');

  if (classeNome == 'itemBotaoMax') {
    $('#' + idDiv + "Conteudo").hide('slow', function () {
      $('#' + botao.id).attr('src', 'img/maximizar.png');
    });

    $('#' + botao.id).removeClass('itemBotaoMax');
    $('#' + botao.id).addClass('itemBotao');

  }

  if (classeNome == 'itemBotao') {
    $('#' + idDiv + "Conteudo").animate({ height: '180px' }, 500, 'swing', function () {
      $('#' + idDiv + "Conteudo").show('slow');
      $('#' + botao.id).attr('src', 'img/minimizar.png');
      $('#' + botao.id).attr('minimizado', 'false');
    });

    $('#' + botao.id).addClass('itemBotaoMax');
    $('#' + botao.id).removeClass('itemBotao');

  }

}

// Cria os Botões Fechar, Maximizar e Minimizar
cuboDashboard.CriarBotoes = function (idDiv, divControles, img, sufixo, classe = "") {
  const novoBotao = $('<img>');
  const idBotao = 'Botao' + idDiv + sufixo;

  novoBotao.attr('id', idBotao);

  const classeBotao = "itemBotao";

  if (classe != "") {
    classeBotao = classe;
  }

  novoBotao.addClass(classeBotao);
  novoBotao.attr('divContainer', idDiv);
  novoBotao.attr('src', img);

  divControles.append(novoBotao);

  return novoBotao;
}
