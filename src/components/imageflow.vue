<template>
 <div class="imageflow">
 	<img src="../assets/list/listbg.jpg" class="bgImg">
  <div class="logoImg">
    <img src="../assets/list/logo.png" class="logo"> 
  </div>
 	<router-view/>
 	<Banner/>
 </div>
</template>

<script>
  import Banner from './common/banner';
export default {
  name: 'ImageFlow',
  components: {
  	Banner
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
}
.bgImg {
	z-index: -1;
	position: fixed;
	top: 0;
}
.logoImg {
  display: initial;
  width: 100%;
  height: 80px;
}
.logo {
  width: 160px;
  margin:10px;
  float: right;
}
</style>
