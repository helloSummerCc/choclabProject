<template>
 <div class="imageflow">
 	<img src="../assets/list/listbg.jpg" class="bgImg">
 	<router-view/>
 	<Banner/>
 	<WaterFlow/>
 	<!-- <MapFlow/> -->
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
	height: auto;
	width: 100%;
	/* background: url('../assets/list/listbg.jpg') no-repeat; */
}
.bgImg {
	z-index: -1;
	position: fixed;
	top: 0;
}
</style>
