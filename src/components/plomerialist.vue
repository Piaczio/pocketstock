<template>
<div class="foodtable">
 <v-card id="app" >
  <h1>Equipo de plomeria</h1>
  <v-app id="inspire" >
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
            Articulo
            </th>
            <th class="text-left">
              Cantidad
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
</v-card>
</div>
</template>
<script >
export default {
  data () {
    return {
      desserts: [
        {
          name: 'tuberia pvc',
          calories: 159,
        },
        {
          name: 'Conectores en T',
          calories: 237,
        },
        {
          name: 'Coenctores en L',
          calories: 262,
        },
        {
          name: 'Conectores rectos',
          calories: 305,
        },
        {
          name: 'Tomas dobles',
          calories: 356,
        },
        {
          name: 'Pegamento gris',
          calories: 375,
        },
        {
          name: 'Pegamento rojo',
          calories: 392,
        },
        {
          name: 'Mezcladores',
          calories: 408,
        },
        {
          name: 'Silicona blanca',
          calories: 452,
        },
        {
          name: 'Silicona gris',
          calories: 518,
        },
      ],
    }
  },
}
</script>
<style scoped>
.foodtable{
  padding-left: 20%;
  padding-top: 0%;

 padding-right: 20%;
}
</style>
