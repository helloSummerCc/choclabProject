<template>
  <div class="container-fluid" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{

    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}
.container-fluid {
  height: 100%;
}
</style>
