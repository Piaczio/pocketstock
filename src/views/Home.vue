<template>
  <div class="home">
    <sidebar />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import sidebar from "@/components/global/sidebar.vue";
export default {
  name: "Home",
  components: {
    sidebar,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
<style scoped>
#home {
  align-items: center;
}
</style>
