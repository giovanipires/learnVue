new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Exibindo alerta!');
        },
        escutando(event) {
            this.valor = event.target.value;
        }
    }
})