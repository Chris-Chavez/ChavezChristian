<template>
  <div class="Contenedor">
    <b-table striped hover :items="allAutos"></b-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
      }
    },
     computed: {
    ...mapGetters(['allAutos', 'getLoading'])
  },
    methods:{
      ...mapActions(["setAutos"])
    },
      mounted() {
    this.setAutos();
  }
  }
</script>
<style>
.Contenedor {
  margin-left: 30%;
  margin-right: 30%;
}
</style>