<template>
 <div class='mapWrapper'>
    <div class="mapCont">
    	<div class='mapImage'></div>
    </div>

 	<div class='mapFlow'>
	    <div v-for="(image, index) in listImg" 
	    :class="['mapBox', {'rightZero': (index+1) % 3 == 0}]">
          <img :src="image" class="imageDetail" />
        </div>
 	</div>
 </div>
</template>

<style type="text/css" scoped>
  .mapCont{
     background-color: #fff;
     padding-top: 50px;
     padding-bottom: 25px;
  }
 .mapImage {
  	width: 100%;
  	height: 720px;
  	background-image: url('../../assets/map/map.jpg');
  	background-size: 100%;
  }
  .mapBox{
  	display: inline-block;
  	width: 418px;
  	height: 500px;
  	margin-bottom: 13px;
  	margin-right: 13px;
  }
  .imageDetail{
  	width: 100%;
  	height: 100%;
  }
  .rightZero {
  	margin-right: 0;
  }
</style>
<script>
export default {
  name: 'MapFlow',
  data () {
    return {
      listImg: [
      	'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=263937947,2660722386&fm=27&gp=0.jpg',
      	'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1126160441,2466745188&fm=27&gp=0.jpg',
      	'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3148149734,612769710&fm=27&gp=0.jpg',
      	'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=503834790,3232427896&fm=27&gp=0.jpg',
      	'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3282403731,2457621927&fm=27&gp=0.jpg',
      	'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3751673649,378615754&fm=27&gp=0.jpg',
      	'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3283028995,286940667&fm=27&gp=0.jpg',
      	'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1090826827,4020208272&fm=27&gp=0.jpg'
      ],
    }
  },
  methods:{

  }
}
</script>

