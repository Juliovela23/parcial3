import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
<template   >
  <div >
  <li :key="ingrediente.id"
      v-for="ingrediente in ingredientes.data.allIngredients">
      <div class="card text-center">
      <div class="card-header">Desayuno</div>
      <div class="card-body">
        <h5 class="card-title">{{ ingrediente.name }}</h5>
        <p class="card-text">{{ ingrediente.notes }}</p>
      </div>
    </div>
 </li>
  
  </div>
</template>
    
 
<script>
import gql from "graphql-tag";

export default {
  name: "IngredientList",
  //definimos la variable que almacenara el listado de ingredientes
  data() {
    return {
      ingredientes: "",
    };
  },

  //declaramos un metodo que vaya a leer los ingredientes a GraphQl
  methods: {
    // sera un funcion asincrona pues debera esperar hasta recibir la respuesta externa
    async leerIngredientes() {
      //desde aquí se realiza la consulta a Graphql y el resultado se guarda en una constante
      const ingredientesGraphql = await this.$apollo.query({
        query: gql`
          query {
            allIngredients {
              id
              name
              notes
            }
          }
        `,
      });

      //El dato obtenido de Graphql se lo asignamos a la variable ingredientes que se mostrara en el template
      this.ingredientes = ingredientesGraphql;
    },
  },
  //el metodo leerIngredientes se ejecutara cada vez que los componentes de la pagina ya esten montados
  mounted() {
    this.leerIngredientes();
  },
};
</script>
