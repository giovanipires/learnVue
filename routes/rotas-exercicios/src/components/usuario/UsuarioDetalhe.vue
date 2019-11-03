<template>
  <div class="usuario-detalhe">
     <h3>Usuário detalhe</h3>
     <p><strong>Código:</strong> {{ id }}</p>
      <!-- :to="`/usuario/${id}/editar`" -->
      <!-- :to="{ name: 'editarUsuario', parms: { id: $route.params.id }}" -->
     <router-link tag="button" primario 
      :to="{ name: 'editarUsuario', parms: { id },
        query:{completo: true, ligua:pt}}"
     >
       Editar
     </router-link>
  </div>
</template>

<script>
export default {
   props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // },
}
</script>

<style>

</style>