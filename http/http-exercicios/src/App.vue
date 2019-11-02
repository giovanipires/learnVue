<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" palceholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg" v-model="usuario.email" palceholder="Informe o email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" variant="primary" size="lg">Salvar</b-button>
			<b-button @click="consultar" variant="success" size="lg" class="ml-2">Obter usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome:</strong> {{ usuario.nome }} <br>
				<strong>Email:</strong> {{ usuario.email }} <br>
				<strong>Id:</strong> {{ id }} <br>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
// import axios from 'axios' para acessar localmente

export default {
		data() {
			return {
				usuarios: [],
				id: null,
				usuario: {
					nome: '',
					email:''
				}
			}
		},
		methods: {
			limpar(){
				this.usuario.nome = ''
				this.usuario.email = ''
				this.id = null
			},
			salvar() {
				const metodo = this.id ? 'patch' : 'post'
				const finalUrl = this.id ? `/${this.id}.json` : '.json'
				this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(_ => this.limpar())
			},
			consultar() {
				this.$http.get('usuarios.json')
				.then(resp => {
					this.usuarios = resp.data
				})
			},
			carregar(id) {
				this.id = id
				this.usuario = { ...this.usuarios[id]}
			},
			excluir(id) {
				this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar())
			}
		},
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Maria',
	// 		email: 'maria@vue.com'
	// 	}). then(res => console.log(res))
	// },

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
