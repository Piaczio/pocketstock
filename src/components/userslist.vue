<template>
  <div class="foodtable">
    <v-card id="app">
      <h1>Empleados</h1>
      <v-app id="inspire">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
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

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
<style scoped>
.foodtable {
  padding-left: 20%;
  padding-top: 0%;

  padding-right: 20%;
}
</style>
