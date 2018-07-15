<template>
 <div class="imageflow">
   <div class="imageContent">
     <div class="logoImg">
      <img src="../assets/list/logo.png" class="logo"> 
    </div>
    <router-view/>
    <Banner/>
   </div>
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
	min-height: 100%;
	width: 100%;
  background-image: url('../assets/list/listbg.jpg');
}
.imageContent{
  width: 1280px;
  height: 100%;
  margin: 0 auto;
}
.logoImg {
  position: absolute;
  width: 100%;
  height: 80px;
}
.logo {
  width: 160px;
  margin:10px;
  float: right;
}
</style>
