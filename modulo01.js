function ex1(endereco) {

    var retorno = "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua \"" + endereco.rua + "\" com numero " + endereco.numero
   
    return retorno
};


var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

   console.log(ex1(endereco))

   function pares(x, y) {
    
    for(var i = x; i <= y; i++)
    
    if(i % 2 == 0){
        console.log(i)
    }

   }

//    pares(32, 321);
   
function temHabilidade(skills) {
    return (skills.indexOf("Javascript") >= 0)? true:false;
   
};


   var skills = ["Javascript", "ReactJS", "React Native"];
  console.log(temHabilidade(skills)); // true ou false
   

function experiencia(anos) {
// código aqui
    if(anos <= 1){
        return "Iniciante"
    }
    else if(anos > 1 && anos <= 3){
        return "Intermediario"
    }
    else if(anos > 3 && anos <= 6){
        return "Avançado"
    }
    else{
        return "Jedi Master"
    }
};

var anosEstudo = 7;
console.log(experiencia(anosEstudo));
   
var usuarios = [
{
nome: "Diego",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
nome: "Gabriel",
habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}
];

function exibeResultado(usuarios){

    for (user of usuarios){
        console.log("O " + user.nome + " possui as habilidades: " + user.habilidades.join(separator=', '))
    }
}

exibeResultado(usuarios)