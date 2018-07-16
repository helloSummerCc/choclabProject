<template>
  <div class="imgWrapper" @click="bigImg(data)">
    <img :src="data" class="imageDetail" />
  </div> 
</template>

<style type="text/css" scoped>
  .imgWrapper, .imageDetail {
    width: 100%;
    height: 100%;
  }
</style>
<script>
export default {
  name: 'MapFlowList',
  data () {
    return {
      showLock: false
    }
  },
  props: ['data'],
  methods:{
    bigImg() {
      this.$store.dispatch('uMaskInfo', {lock: true, imgPath: this.data});
    }
  }
}
</script>

