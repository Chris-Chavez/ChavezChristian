import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Autos: [],
    loading: false,
  },
  mutations: {
    SET_AUTOS(state, Autos) {
      state.Autos = Autos
    },
    SET_LOADING(state, load) {
      state.loading = load
    }
  },
  actions: {
    setAutos({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3000/Autos')
      .then( response => {
        console.log(response)
        commit('SET_AUTOS', response.data)
      })
      .finally(() => commit('SET_LOADING', false))
    },
    crearAuto({commit}, {params, onComplete, onError}) {
      axios.post('http://localhost:3000/Agregar-Autos', params)
      .then(onComplete)
      .catch(onError)
    },
  },
  getters: {
    allAutos: state => {
      return state.Autos
    },
    getLoading: state => {
      return state.loading
    }
  }
})
