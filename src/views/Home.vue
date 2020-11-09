<template>
  <div class="home">
    <userslist />
  </div>
</template>

<script>
// @ is an alias to /src
import userslist from '@/components/userslist.vue'

export default {
  name: 'Home',
  components: {
    userslist
  }
}
</script>
<style scoped>
img{
  width: 15%;
  height: 15%;
}
</style>
