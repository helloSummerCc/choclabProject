<template>
  <div class="imageflow">
    <Banner/>
    <!-- <img src="../assets/list/listbg.jpg" class="bgImg">    -->
    <WaterFlow/>
  </div>
</template>

<script>
  import Banner from './common/banner';
  import WaterFlow from './common/waterflow';
  import MapFlow from './common/mapflow';
export default {
  name: 'ImageFlow',
  components: {
  	Banner,
  	WaterFlow,
  	MapFlow
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.imageflow {
  height: 500%;
	width: auto;
	background: url('../assets/list/listbg.jpg'); 
  background-repeat: repeat-y;
}
</style>
