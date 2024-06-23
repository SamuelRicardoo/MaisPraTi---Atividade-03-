function getProjetos(){
    const url = 'https://api.github.com/users/SamuelRicardoo/repos';
    var carregandoElemento = document.getElementById('carregando');

    fetch(url,{
        method: 'GET'
    })
        .then((response)=> response.json())
        .then((response)=> {
            carregandoElemento.style.display = 'none';
            console.log(response)
            shorProjetos(response);
            
        })
        .catch((e) =>{
            console.log(e)
        })
}

function shorProjetos(data){
    var listaElemento = document.getElementById('Meus_projetos')

    for (let index = 0; index < data.length; index++) {
        let a = document.createElement('a')
        a.href = data[index]['clone_url']
        a.target = '_blank'
        a.title = data[index]['description']
        let linkTexto = document.createTextNode(data[index]['name'])
        a.appendChild(linkTexto);
        listaElemento.append(a);
    }

}

getProjetos();