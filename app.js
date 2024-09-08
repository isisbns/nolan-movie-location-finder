
//funcao para pesquisar quando o usuario clicar no botao e iniciar a busca

function pesquisar () {
    
    //Criando variavel para armazenar as informacoes da div resultados de pesquisa
    let section = document.getElementById("resultados-pesquisa");

    // criando variavel vazia para armazenar os filmes a serem exibidos
    let resultados = "";

    // criando variavel para armazenar input
    let campoPesquisa =  document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLocaleLowerCase();

    //criando variaveis titulo e cena que serao usadas para comparar com o input dado pelo usuario
    let titulo = "";
    let cena = "";

    //Encerrar o codigo caso nada seja digitado
    if(campoPesquisa ==""){ 
        section.innerHTML = "<h2> Resultado não encontrado </h2";
        return
    }

    //leitura dos dados de cada filme 
  
    for (let film of filmes) {
        titulo = film.titulo.toLocaleLowerCase();
        cena = film.cena.toLocaleLowerCase();
        
        //Verficicar se o input esta contido no titulo de algum filme
        if(titulo.includes(campoPesquisa) || cena.includes(campoPesquisa)) {
            
            map.setView([film.latitude,film.longitude],16);
            resultados += `<div class="item-resultado">
                                <h2>${film.titulo}   <i class="fa-solid fa-location-dot" style="color: tomato;"></i></h2>
                                <div class ="conteudo">
                                    <div class ="imagem-cena">
                                        <img src=${film.imagem} alt=${film.alt} title=${film.alt}>
                                    </div>
                                    <div class = "text">
                                            <div class="ano">
                                                <h3>Ano:</h3>
                                                <p>${film.ano}</p>
                                            </div>
                                            
                                            <div class="localidade">
                                                <h3>Localidade:</h3>
                                                <p>${film.lugar}</p>
                                            </div>   
                                            <div class ="cena">
                                                <h3>Cena e curiosidades</h3>
                                                <p>${film.cena}</p>
                                            </div>

            
                                    </div>
                                </div>
                            </div>
            
            `}
            
         
        
    }
    //exibir texto cado a busca nao retorne resultados
    if(!resultados) {
        resultados = "<h2> Resultado não encontrado </h2";
    }
    
    section.innerHTML = resultados;

}

