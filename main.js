const umeroSenha = document.querySelector('.parametro-sennha__texto');
let tamanhoSenha = 12;
numeroSenha.textcontent = tamanhoSenha;

comst botoes = document.querySelectorAll('.parametro-senha__botao');
botoes{0}.onlick = diminuiTamanho;
botoes{1}.onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {tamanhoSenha = tamanhoSenha-1
    }
    numeroSenha.textcontent= tamanhoSenha
}

function aumentaTamanho(){
    if (tamanhoSenha < 20) {
        tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textcontent = tamanhoSenha;
    gereSenha();
}
const campoSenha = docukment.querySelector('#campo-senha');
const checkbox = document.querySelector('.checkbox');

console.log(checkbox[0]checked);

const letrasMaiusculasn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
