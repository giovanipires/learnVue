import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modulos/carrinho'
import parametros from './modulos/parametros'

import * as getters from  './getters'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      nome: 'Maria',
      sobrenome: 'Silva',
   },
   getters,
   // getters: getters,
   // getters: {
   //    ...getters
   // },
   modules: { carrinho, parametros }
})