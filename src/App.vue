<template>
  <div id="app">
    <sidebar/>
    <router-view/>
  </div>
</template>
<script>

import sidebar from "@/components/sidebar.vue";
export default {
  name:'App',
  components:{
    sidebar
  },
  data: () => ({
    drawer:false,

  }),
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img{
  width: 15%;
  height: 15%;
}
#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
