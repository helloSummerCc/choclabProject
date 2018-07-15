<template>
  <div class="water-flow">
  	<div class="logoImg">
      <!-- <img src="../../assets/list/logo.png" class="logo">	 -->
  	</div>
    <div class="right-list-image">
      <!-- <img :src="image" v-for="image in listImg" class="image"> -->
      <!-- <img src="../../assets/listpic/pic-ori-24.jpg" class="image">
      <img src="../../assets/listpic/pic-ori-25.jpg" class="image">
      <img src="../../assets/listpic/pic-ori-26.jpg" class="image">
      <img src="../../assets/listpic/pic-ori-27.jpg" class="image">
      <img src="../../assets/listpic/pic-ori-28.jpg" class="image">
      <img src="../../assets/listpic/pic-ori-29.jpg" class="image">
      <img src="../../assets/listpic/pic-ori-30.jpg" class="image"> -->
     <div class="waterfall">
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
      	'../../assets/listpic/pic-ori-24.jpg',
        '../../assets/listpic/pic-ori-25.jpg',
        '../../assets/listpic/pic-ori-26.jpg',
        '../../assets/listpic/pic-ori-27.jpg',
        '../../assets/listpic/pic-ori-28.jpg',
        '../../assets/listpic/pic-ori-29.jpg',
        '../../assets/listpic/pic-ori-30.jpg'
      ]
      // msg: 'Welcome to Your WaterFlow'
    }
  },
  mounted () {
    // this.getNaturalWidth();
  },
  methods: {
    getNaturalWidth: function () {
      const w = document.getElementsByClassName("image")[0].naturalWidth;
      console.log('w',w)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.water-flow {
	width: auto;
	height: auto;
	position: absolute;
	top: 0;
  left: 70px;
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
  width: 50%;
  height: 50%;
}
.logo {
	/* width: 225px;
	height: 100%; */
	float: right;
}
.container{width:80%;margin: 0 auto;}
    /*瀑布流层*/
    .waterfall{
      -moz-column-count:auto; /* Firefox */
      -webkit-column-count:auto; /* Safari 和 Chrome */
      column-count:auto;
      -moz-column-gap: 1em;
      -webkit-column-gap: 1em;
      column-gap: 1em;
    }
    /*一个内容层*/
    .item{
      padding: 1em;
      margin: 0 0 1em 0;
      -moz-page-break-inside: avoid;
      -webkit-column-break-inside: avoid;
      break-inside: avoid;
    }
    .item img{
        width: 100%;
        margin-bottom:10px;
    }
</style>
