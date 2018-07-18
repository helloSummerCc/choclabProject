<template>
  <div class="imgWrapper">
   <img v-image-preview :src="data" class="imageDetail" alt=""/>
  </div> 
</template>

<style type="text/css" scoped>
  .imgWrapper, .imageDetail {
    width: 100%;
    height: 100%;
    cursor: -webkit-zoom-in;
  }
</style>
<script>
export default {
  name: 'MapFlowList',
  data () {
    return {
    }
  },
  props: ['data'],
  methods:{
  },
  mounted() {
  }
}
</script>

