<template>
   <div id="app">
      {{ titulo }}
      <br>
      <button @click="titulo += '#'">Alterar</button>
   </div>
</template>

<script>
export default {
   data: function() {
      return {
         titulo: 'Teste Data usando Vue JS!!!'
      }
   }
}
</script>

<style>
   #app {
      background-color: chocolate;
      color: #fff;
      font-size: 55px;
   }

   button {
      margin-left: 10px;
      border-radius: 5px;
      background-color: #fff;
      color: chocolate;
   }
</style>