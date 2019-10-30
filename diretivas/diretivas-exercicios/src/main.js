import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el) {
		el.style.backgroundColor = 'lightgreen'
	}
})

Vue.directive('destaqueColor', {
	bind(el, binding) {
		el.style.backgroundColor = binding.value
	}
})

Vue.directive('textColor', {
	bind(el, binding, vnode) {
		el.style.color = 'red'
	}
})

Vue.directive('newDestaque', {
	bind(el, binding, vnode) {

		let atraso = 0
		if (binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)

	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
