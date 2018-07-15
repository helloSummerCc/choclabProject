<template>
 <div class="imageflow">
 	<img src="../assets/list/listbg.jpg" class="bgImg">
 	<Banner/>
 	<WaterFlow/>
 </div>
</template>

<script>
  import Banner from './common/banner';
  import WaterFlow from './common/waterflow';
export default {
  name: 'ImageFlow',
  components: {
  	Banner,
  	WaterFlow
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
	position: fixed;
	top: 0;
}
</style>
