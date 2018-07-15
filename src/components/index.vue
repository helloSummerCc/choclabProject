<template>
  <div class="index-page">
    <router-link to="flow">
      <div class="index-page-img"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return{
    }
  },
  computed: {
    
  },
  methods: {
   
  }
}
</script>

<style>
.index-page {
  height: 100%;
}
.index-page-img {
  height: 100%;
  background: url('../assets/index.jpg') 0 0 / 100% 100% no-repeat;
}
</style>
