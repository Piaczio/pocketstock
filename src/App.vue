<template>
  <div id="app"><vue-extend-layouts /></div>
</template>
<script>
  import VueExtendLayouts from "vue-extend-layout";
  export default {
    name: "App",
    components: {
      VueExtendLayouts,
    },
  };
</script>
<style lang="scss">
  p {
    text-transform: lowercase;
  }
  span {
    text-transform: lowercase;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
