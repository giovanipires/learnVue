<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}</p>
		<p>{{ cpf | cpfFormat }}</p>
		<p>{{ cpf | cpfFormat | inverter }}</p>
		<p>{{ '05495137795' | inverter }}</p>
		<input type="text" :value="cpf | cpfFormat">
		<hr>
		<Frutas />
		<hr>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
		</div>
		<hr>
		<p>{{ global }}</p>
	</div>
</template>

<script>
import Frutas from './Frutas'
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
	components: { Frutas },
	mixins: [ frutasMixin, usuarioMixin ],
	filters: {
		cpfFormat(valor) {
			const arr = `${valor}`.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '05495137795',
			frutas: ['abacate']
		}
	},
	created() {
      console.log('Created - App Mixin!!!')
   },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
