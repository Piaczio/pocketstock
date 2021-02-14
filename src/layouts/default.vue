<template>
  <div>
    <sidebar />
    <div class="container">
      <router-view />
    </div>
    <YourFooter />
  </div>
</template>
 
<script>
import sidebar from "@/components/global/sidebar.vue";
export default {
  name: "defaultLayout", // you can enter any name (optional)
  components: {
    sidebar,
  },
};
</script>
 
<style>
/* your style */
</style>