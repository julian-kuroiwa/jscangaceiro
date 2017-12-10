class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('[data-js="data"]');
        this._inputQuantidade = $('[data-js="quantidade"]');
        this._inputValor = $('[data-js="valor"]');
    }

    adiciona(event) {
        event.preventDefault();

        console.log('inputData', this._inputData.value);
        console.log('inputQuantidade', this._inputQuantidade.value);
        console.log('inputValor', this._inputValor.value);
    }
}