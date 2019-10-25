<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>        
        <p>Nome do usuário: <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- <app-usuario-info v-bind:nome="nome"/> -->
            <app-usuario-info 
                :nome="nome"
                :idade="idade"
                @nomeMudou="nome = $event"
                :reiniciarFn="reiniciarNome"
            /> <!-- minimizando a chamada do v-bind -->
            <app-usuario-editar 
                :idade="idade"
                
                :idadeFn="novaIdade"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Juca Sam',
            idade: 21
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Chiquinha Lambreta'
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        },
        novaIdade() {
            this.idade = 33
        }
    },
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
