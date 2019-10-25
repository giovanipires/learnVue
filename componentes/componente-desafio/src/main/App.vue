<template>
	<v-app>
		<app-menu/>
		<app-toolbar/>
		<app-caroussel/>
		<app-footer/>
	</v-app>
</template>

<script>
import Footer from '@/components/template/Footer.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Menu from '@/components/template/Menu.vue'
import Caroussel from '@/components/widgets/Caroussel.vue'
export default {
	components: { 
		appFooter: Footer,
		appToolbar: Toolbar,
		appMenu: Menu,
		appCaroussel: Caroussel
	},
}
</script>
