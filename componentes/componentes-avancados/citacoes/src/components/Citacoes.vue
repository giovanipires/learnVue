<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- {{ numero }} | {{ indice }} : -->
        <!-- {{ citacoes[indice].texto }} -->
        <!-- <Citacao :texto="citacoes[indice].texto"></Citacao> -->
        <Citacao>
            <h1 slot="autor">{{ citacoes[indice].fonte }}</h1>
            <p>{{ citacoes[indice].texto }}</p>
            <div class="fonte">
                <h6 slot="fonte">{{ citacoes[indice].autor }}</h6>
            </div>
        </Citacao>
    </div>
</template>

<script>
import Citacao from './Citacao.vue'

export default {
    components: { Citacao },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
