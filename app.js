function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado.</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            
            // Constrói o HTML de cada item do resultado
            resultados += `
                <div class="item-resultado">
                    <h2> 
                        <a href="${dado.link}" target="_blank">
                        ${dado.titulo}
                        </a>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                </div>
            `;
            }
        }

        if (!resultados) {
            resultados = "<p>Nada foi encontrado. Nenhuma palavra de busca encontrada.</p>";
            return;
        }

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}
