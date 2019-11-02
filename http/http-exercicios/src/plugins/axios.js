import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-241c4.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'abc123'
axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
   install(Vue) {
      
      Vue.prototype.$http = axios
      
      Vue.prototype.$http.interceptors.request.use(config => {
         console.log(config.method)
         // if (config.method == 'post') {
         //    config.method = 'put'
         // }
         return config
      }, erros => Promise.reject(error))

      Vue.prototype.$http.interceptors.response.use(res => {
         // const array =[]
         // for (let chave in res.data) {
         //    array.push({ id: chave, ...res.data[chave] })            
         //    // array.push({ id: chave, nome: res.data[chave].nome, email: res.data[chave].email }) utilizado de forma manual            
         // }
         // res.data = array
         return res
      }, erros => Promise.reject(error))
   }
})

//UTILIZADO QUANDO QUEREMOS CRIAR INSTANCIAS DO AXIOS, OU SEJA, TER MAIS DE UM BANCO DE DADOS APLICAÇÕES E ETC...
// Vue.use({
//    install(Vue) {
//       Vue.prototype.$http = axios.create({
//          baseURL: 'https://curso-vue-241c4.firebaseio.com/'
//          headers: {
//             get: {
//                "Authorization": "abc123"
//             }
//          }
//       })
//    }
// })