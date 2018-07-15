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
html{
  width: 100%;
  height: 100%;
  min-height:100%;
}
body{
  width: 100%;
  height:100%;
}
.container-fluid {
  min-height: 100%;
  padding: 0!important;
}
</style>
