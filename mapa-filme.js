//Iniciando o mapa usando a biblioteca do Leaflet
var map = L.map('map').setView([50, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Funcao para criar marcadores no mapa de acordo com as coordenadas das cenas de cada filme
filmes.forEach(film => {
    var marker = L.marker([film.latitude, film.longitude]).addTo(map);
    marker.bindPopup(film.titulo); //adicionar popup com nome do filme no marcador

    //Adicionar funcionalidade para que, ao clicar no marcador, as informacoes do filme sejam exibidas
    marker.on('click', function(e) {
        exibirInformacoesFilme(film);
        
    });
});

//funcao para exibir as informacoes do filme ao clicar no marcador
function exibirInformacoesFilme(film) {
    // Exiba as informações do filme em um elemento HTML
    let section = document.getElementById("resultados-pesquisa");
    let infoFilme = "";

    map.setView([film.latitude,film.longitude],16);//Dar zoom nas coordenadas do filme do marcador selecionado

        infoFilme += `<div class="item-resultado">
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
            
            `

        section.innerHTML = infoFilme;
}