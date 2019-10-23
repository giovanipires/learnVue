<template>
	<v-app>
		<app-menu/>
		<app-toolbar/>
		<app-caroussel/>
		<app-footer/>
	</v-app>
</template>

<script>
import Footer from './Footer.vue'
import Toolbar from './Toolbar.vue'
import Menu from './Menu.vue'
import Caroussel from './Caroussel.vue'
export default {
	components: { 
		'app-footer': Footer,
		'app-toolbar': Toolbar,
		'app-menu': Menu,
		'app-caroussel': Caroussel
	},
}
</script>
