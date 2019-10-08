new Vue({
   el: '#desafio',
   data:  {
      SEU_NOME: 'Giovani Pires',
      IDADE: 38,
      link: 'https://www.baymediasoft.com/storage/media/ypJamzghonxi7JmtXFyGgwdQZjCRe2ILInidzrOr-image(1050x450-crop).png'
   },
   methods: {
      idade() {
         return 38;
      },
      idadeX() {
         return this.idade()*3;
      },
      aleatorio() {
         return Math.floor(Math.random() * 10)
      }
   }
});