//exporta a função index, deixando disponível para ser usada em outras partes do projeto
module.exports.index = function (application, req, res) {
  //cria uma instância de módulo news que será usado para acessar os dados da notícia
  var newsModel = new application.src.models.news();

  //chama o método getlastnews do modelo news model para buscar as últimas notícias, esse próximo método recebe a funçãode callback que será executada após a consulta ser concluída

  newsModel.getLastNews(function (err, result) {
    //
    result.noticias.sort((a, b) => b.data - a.data);
    //se a consulta der certo, o result terá as notícias recuperadas do ''Banco de dados'', o método res.render é utilizado para rendenrizar a views - news/index e passa as notícias obtidas nos results para a view, onde será exibita para o usuário
    res.render("/views/news/pg_inicial.ejs", { news: result.noticias });

    //
    document.getElementById("pn").textContent = noticias[0].resumo;
    document.getElementById("sn").textContent = noticias[1].resumo;
    document.getElementById("tn").textContent = noticias[2].resumo;

    document.getElementById("pt").textContent = noticias[0].titulo;
    document.getElementById("st").textContent = noticias[1].titulo;
    document.getElementById("tt").textContent = noticias[2].titulo;

    document.getElementById("pm").textContent = noticias[0].noticia;
    document.getElementById("sm").textContent = noticias[1].noticia;
    document.getElementById("tm").textContent = noticias[2].noticia;
});
};
