<template>
  <div class="water-flow">
    <div class="right-list-image">      
      <div class="waterfall">
        <!-- <div class="item">
          <img src="../../assets/listpic/pic-ori-24.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-26.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-27.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-28.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-29.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-30.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-29.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-28.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-27.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-26.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-24.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-26.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-24.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-26.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-24.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-26.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-24.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-26.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-24.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-25.jpg">
        </div>
        <div class="item">
          <img src="../../assets/listpic/pic-ori-26.jpg">
        </div>
      </div> -->
        <div class="right-list-image">
          <div v-for="(image, index) in listImg" class="image-box">
            <router-link :to="`/flow/details/${index+1}`">
              <img :id="`${index+1}`" :src="image"  class="image">
            </router-link>
          </div>
        </div>
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
  mounted () {
    this.getNaturalWidth();
    // this.doAjax();
  },
  methods: {
    getNaturalWidth () {

    }
  }
}
</script>

<style scoped>
.image-box {
  display: inline-block;
}
.water-flow {
  margin: 0 auto;
  padding-top: 30px;
	width: 80%;
	min-height: auto;
}
.right-list-image {
	width: 100%;
	height: auto;
}

.image {
	margin-top: 10px;
	margin-right: 10px;
  width: 50%;
  height: 50%;
}
.container{width:80%;margin: 0 auto;}
    /*瀑布流层*/
    .waterfall{
      -moz-column-count:auto; /* Firefox */
      -webkit-column-count:auto; /* Safari 和 Chrome */
      column-count:auto;
      -moz-column-gap: 20px;
      -webkit-column-gap: 20px;
      column-gap: 20px;
      -webkit-column-width:20%;
      -moz-column-width:20%;
      column-width:20%;
    }
    /*一个内容层*/
    .item{
      padding: 20px;
      margin: 0 0 20px 0;
      -moz-page-break-inside: avoid;
      -webkit-column-break-inside: avoid;
      break-inside: avoid;
    }
    .item img{
        width: 100%;
        margin-bottom:10px;
    }
</style>
