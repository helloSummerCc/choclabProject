<template>
 <div class='mapWrapper'>
  <div class="mapCont">
  	<div class='mapImage'></div>
  </div>

 	<div class='mapFlow'>
 		<div v-for="(image, index) in imgList" 
	    :class="['mapBox', {'rightZero': (index+1) % 3 == 0}]">
        <MapFlowList :data="image" />
 	  </div>
 	</div>
  <div class="bigImgMask" v-show="maskInfo.lock">
      <img class="maskCont" :src="maskInfo.imgPath"/>
  </div>
 </div>
</template>

<style type="text/css" scoped>
  .mapWrapper{
    width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .mapCont{
     background-color: #fff;
     padding-top: 50px;
     padding-bottom: 25px;
  }
 .mapImage {
  	width: 100%;
    height: 720px;
  	background-image: url('../../assets/map/map.jpg');
  	background-size: 100% 100%;
  	background-repeat: no-repeat;
  }
  .mapBox{
  	display: inline-block;
  	width: 408px;
  	height: 450px;
  	margin-bottom: 8px;
  	margin-right: 8px;
  }
  @media screen and (max-width: 1190px){
    .mapWrapper{
      width: 990px;
      margin: 0 auto;
      padding: 0;
    }
    .mapBox{
      width: 326px;
      height: 350px;
      margin-bottom: 6px;
      margin-right: 6px;
    }
    .mapImage {
      height: 556px;
    }
  }
  .rightZero {
    margin-right: 0;
  }
  .bigImgMask{
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 10000;
  }
  .maskCont{
    position: fixed;
    right: 0;
    left: 0;
    top:0;
    bottom: 0;
    margin :auto;
  }
</style>
<script>
import MapFlowList from './mapflowList'
import dataInit from '../../assets/imgdata.js'
export default {
  name: 'MapFlow',
  data () {
    return {
      imgList: dataInit.mapImg
    }
  },
  computed: {
    maskInfo() {
      return this.$store.state.maskInfo;
    }
  },
  components: {
    MapFlowList
  },
  methods:{

  }
}
</script>

