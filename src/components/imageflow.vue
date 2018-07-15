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
  height: 8000px;
	/*width: 300px;*/
	background: url('../assets/list/listbg.jpg'); 
  background-repeat: repeat-y;
}
/*.bgImg {
	position: fixed;
	top: 0;
}*/
</style>
