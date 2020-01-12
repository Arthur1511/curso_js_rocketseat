function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        if(idade >= 18){
            resolve();
        }
        else{
            reject();
        }
    })
};

checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });

var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
buttonElement.setAttribute('onclick', 'buscar()');

function buscar(){
    var user = inputElement.value;

    document.querySelector('#repos ul').innerHTML = '';

    var liElement = document.createElement('li');
    var textElement = document.createTextNode('Carregando...');

    liElement.appendChild(textElement);

    document.querySelector('#repos ul').appendChild(liElement);

    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response){
        document.querySelector('#repos ul').innerHTML = '';
        for(repo of response.data){
            var liElement = document.createElement('li');
            var textElement = document.createTextNode(repo.name);

            liElement.appendChild(textElement);
            document.querySelector('#repos ul').appendChild(liElement);
        }
        
    })
    .catch(function(error){
       
         alert('Usuario não existe!');
            
    })
}