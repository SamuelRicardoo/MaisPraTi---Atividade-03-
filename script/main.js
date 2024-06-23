function getProjetos(){
    const url = 'https://api.github.com/users/SamuelRicardoo/repos';

    fetch(url,{
        method: 'GET'
    })
        .then((response)=> response.json())
        .then((response)=> {
            shorProjetos(response);
        })
        .catch((e) =>{
            console.log(e)
        })
}

function shorProjetos(data){

}

getProjetos();