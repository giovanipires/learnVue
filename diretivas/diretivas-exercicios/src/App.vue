<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva com v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque>Usando diretiva personalizada!</p>
		<p v-destaqueColor="'lightblue'">Usando diretiva personalizada!</p>
		<p v-destaqueColor="cor">Usando diretiva personalizada!</p>
		<p v-textColor>Tetta!</p>
		<p v-textColorLocal>Tetta!</p>
		<p v-newDestaque:fundo="'red'">Usando diretiva personalizada com argumento!</p>
		<p v-newDestaque="'red'">Usando diretiva personalizada com argumento!</p>
		<p v-newDestaque:fundo.atrasar="'red'">Usando diretiva personalizada com argumento!</p>
		<p v-newDestaque.atrasar="'red'">Usando diretiva personalizada com argumento!</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Usando diretiva personalizada.</p>
		<p v-destaque-local:atrasar="{cor1: 'red', atraso: 8000}">Usando diretiva personalizada.</p>
	</div>
</template>

<script>
export default {
	directives:{
	// 	'textColorLocal': {
	// 		bind(el, binding, vnode) {
	// 		el.style.color = 'darkgrey'
	// }
	// 	},
		// 'destaque-local': {
		// 	bind(el, binding, vnode) {
		// 		const aplicarCor = cor => {
		// 			if (binding.arg === 'fundo') {
		// 				el.style.backgroundColor = cor
		// 			} else {
		// 				el.style.color = cor
		// 			}
		// 		}

		// 		let atraso = 0
		// 		if (binding.modifiers['atrasar']) atraso = 3000

		// 		const cor1 = binding.value
		// 		const cor2 = 'blue'
		// 		let corAtual = cor1

		// 		setTimeout(() => {
		// 			if (binding.modifiers['alternar']) {
		// 				setInterval(() => {
		// 					corAtual = corAtual === cor1 ? cor2 : cor1
		// 					aplicarCor(corAtual)
		// 				}, 1000)
		// 			} else {
		// 				aplicarCor(binding.value)
		// 			}
		// 		}, atraso)

		// 	}
		// }
		'destaque-local': {
			bind(el, binding, vnode) {
				const aplicarCor = cor => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				if (binding.modifiers['atrasar']) atraso = binding.value.atraso

				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1

				setTimeout(() => {
					if (binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, binding.value.intervalo)
					} else {
						aplicarCor(binding.value.cor1)
					}
				}, atraso)

			}
		}

	},
	data() {
		return {
			cor: 'red'
		}
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
</style>
