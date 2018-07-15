<template>
  <div class="water-flow">
    <div class="right-list-image">
      <div v-for="(image, index) in listImg" class="image-box">
        <router-link :to="`/flow/details/${index+1}`">
          <img :id="`${index+1}`" :src="image"  class="image">
        </router-link>
      </div>
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
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.image-box {
  display: inline-block;
}
.water-flow {
	width: 100%;
	height: auto;
}
.right-list-image {
	width: 1280px;
  margin: 0 auto;
	height: auto;
}

.image {
	margin-top: 10px;
	margin-right: 10px;
}

</style>
