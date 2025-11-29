    new Vue({
    el: '#app',
    data: {
        num1: 0,
        num2: 0,
        operacao: 'soma'
    },
    computed: {
        resultado() {
        switch (this.operacao) {
            case 'soma':
            return this.num1 + this.num2;
            case 'subtracao':
            return this.num1 - this.num2;
            case 'multiplicacao':
            return this.num1 * this.num2;
            case 'divisao':
            return this.num2 !== 0 ? (this.num1 / this.num2).toFixed(2) : 'Tente novamente mais tarde';
            default:
            return 0;
        }
        }
    }
    });
