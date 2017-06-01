// Obtendo valores para criar uma negociação de acordo com as regras de negócio da model 'Negociacao.js'
class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');        
    }
    
    adiciona(event){
        event.preventDefault();
        // ... - spread operator ecmascript 6, desmembra o array da forma: 1º item do array é o 1º parametro do construtor do date;  2º item do array é o 2º parametro do construtor do date; e assim em diante. 
        let data = new Date(
        ...this._inputData.value
            .split('-')
            .map(function(item, indice) {
                return item - indice % 2;
            })
        
        );
        console.log(data);
        
        // TODO: Adicionar negociação em uma lista
    }
}