document.addEventListener('DOMContentLoaded', () => {
    const carregandoElemento = document.getElementById('carregando');
    const projetosContainer = document.getElementById('Meus_projetos');

    function getProjetos() {
        const url = 'https://api.github.com/users/SamuelRicardoo/repos';
        
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((response) => {
                carregandoElemento.style.display = 'none';
                localStorage.setItem('projetos', JSON.stringify(response));
                showProjetos(response);
            })
            .catch((e) => {
                console.error('Erro ao carregar os projetos:', e);
                carregandoElemento.textContent = 'Erro ao carregar os projetos.';
            });
    }

    function showProjetos(data) {
        projetosContainer.innerHTML = '';

        data.forEach(projeto => {
            let projetoDiv = document.createElement('div');
            projetoDiv.classList.add('projeto');

            let titulo = document.createElement('h3');
            titulo.textContent = projeto.name;

            let descricao = document.createElement('p');
            descricao.textContent = projeto.description || 'Sem descrição';

            let link = document.createElement('a');
            link.href = projeto.html_url;
            link.target = '_blank';
            link.textContent = 'Ver projeto';

            projetoDiv.appendChild(titulo);
            projetoDiv.appendChild(descricao);
            projetoDiv.appendChild(link);

            projetosContainer.appendChild(projetoDiv);
        });
    }

    const projetosSalvos = localStorage.getItem('projetos');
    if (projetosSalvos) {
        carregandoElemento.style.display = 'none';
        showProjetos(JSON.parse(projetosSalvos));
    } else {
        getProjetos();
    }
});