function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function addBox(){
    var boxElement = document.createElement('div');

    boxElement.setAttribute('class', 'box');
    boxElement.setAttribute('id', 'box');
    boxElement.setAttribute('onmouseover', 'swapColor(event)');
    boxElement.style.width = '100px';
    boxElement.style.height = '100px';
    boxElement.style.backgroundColor = '#f00';

    document.getElementById('app').appendChild(boxElement)
    document.getElementById('app').appendChild(document.createElement('br'))
    
}

function swapColor(event){
   var box = event.target;

   var newColor = getRandomColor(); 

   box.style.backgroundColor = newColor;


}

var nomes = ["Diego", "Gabriel", "Lucas"];

for(nome of nomes){
    var ul = document.querySelector('ul');
    var text = document.createTextNode(nome);
    var li = document.createElement('li');

    li.appendChild(text);
    ul.appendChild(li);
    document.querySelector('#text').appendChild(ul);
}

function adicionar(){
    var input = document.querySelector('#nome');
    var text = document.createTextNode(input.value);
    input.value = ' ';
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    li.appendChild(text);
    ul.appendChild(li);
    document.querySelector('ul').appendChild(li);

}