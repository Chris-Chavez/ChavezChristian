<template>
  <div class="Contenedor">
    <h1>Agregar Autos</h1>
    <b-form @submit.prevent="AgregarAuto">
      <Input
        v-model="Auto.Modelo"
        id="Modelo"
        placeholder="Ingrese nombre del Modelo"
        mensajeError="Este dato es obligatorio"
        :error="erroresValidacion && !validacionModelo"
        class="mb-2"
      />
      <Input
        v-model="Auto.Marca"
        id="Marca"
        placeholder="Ingrese nombre de la Marca"
        mensajeError="Este dato es obligatorio"
        :error="erroresValidacion && !validacionMarca"
        class="mb-2"
      />
      <b-form-select
        v-model="Auto.Color"
        :options="Colores"
        size="sm"
        class="mt-3"
      ></b-form-select>
      <b-form-input
        type="number"
        v-model="Auto.Año"
        placeholder="Ingrese Año"
        :state="validacionAño"
      ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
      ingresa al menos 4 numeros
    </b-form-invalid-feedback>
      <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../components/Input";

export default {
  name: "Agregar",
  components: {
    Input,
  },
  data() {
    return {
      Auto: {
        Modelo: "",
        Marca: "",
        Año: 0,
        Color: "",
      },
      Colores: [
        "Negro",
        "Azul",
        "Marrón",
        "Gris",
        "Verde",
        "Naranja",
        "Rosa",
        "Púrpura",
        "Rojo",
        "Blanco",
        "Amarillo",
      ],
      erroresValidacion: false,
    };
  },
  computed: {
    validacionModelo() {
      return this.Auto.Modelo.trim() != "";
    },
    validacionMarca() {
      return this.Auto.Marca.trim() != "";
    },
    validacionAño() {
      return this.Auto.Año != null && this.Auto.Año.length == 4;
    },
  },
  methods: {
     ...mapActions(['crearAuto']),
    AgregarAuto() {
      if (!this.validacionNombre) {
        if (this.validacionMarca) {
          if (this.validacionAño) {
              this.erroresValidacion = false;
              console.log(this.Auto);
              this.crearAuto({
                params: this.Auto,
                onComplete: (response) => {
                  console.log(response);
                },
                onError: (error) => {
                  this.$notify({
                    type: "error",
                    title: error.response.data.mensaje,
                  });
                },
              });
            } else this.erroresValidacion = true;
          } else this.erroresValidacion = true;
        } else this.erroresValidacion = true;
    },
  },
};
</script>

<style>
.Contenedor {
  margin-left: 30%;
  margin-right: 30%;
}
</style>