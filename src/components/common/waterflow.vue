<template>
  <div class="water-flow">
  	<div class="logoImg">
    <img src="../../assets/list/logo.png" class="logo">	
  	</div>
    <div class="right-list-image">
      <img :src="image" v-for="image in listImg" class="image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaterFlow',
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
      ]
      // msg: 'Welcome to Your WaterFlow'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.water-flow {
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
}
.right-list-image {
	width: 100%;
	height: auto;
}
.logoImg {
	width: 100%;
	height: 80px;
}
.image {
	margin-top: 10px;
	margin-right: 10px;
}
.logo {
	/* width: 225px;
	height: 100%; */
	float: right;
}
</style>
