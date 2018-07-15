<template>
 <div class="picdetail">
 	<div>
 		<img :src="imgArray" v-for="imgArray in showList.li" class="liImg">
		<p class="item-text">{{showList.text}}</p>
 	</div>
 </div>
</template>

<script>
export default {
  name: 'PicDetail',
  data () {
    return {
      showList: '',
      list: [
        {
          id: 1,
          li: [
        	'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=263937947,2660722386&fm=27&gp=0.jpg',
	      	'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1126160441,2466745188&fm=27&gp=0.jpg',
	      	'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3148149734,612769710&fm=27&gp=0.jpg'
          ],
          text: '1我是图片信息我是图片信息我是图片信息我是图片信息我是图片信息我是图片信息我是图片信息'
        },
        {
          id: 2,
          li: [
        	'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1126160441,2466745188&fm=27&gp=0.jpg',
	      	'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1126160441,2466745188&fm=27&gp=0.jpg',
	      	'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3148149734,612769710&fm=27&gp=0.jpg'
          ],
          text: '2我是图片信息我是图片信息我是图片信息我是图片信息我是图片信息我是图片信息我是图片信息'
        }
      ]
    }
  },
  beforeMount() {
  	console.log(this.$route.params.id, $('.picdetail'));
  	this.list.forEach((item) => {
		if(item.id == this.$route.params.id) {
			this.showList = item;
		}
	})
  }
}
</script>

<style scoped>
.picdetail {
	width: 70%;
	height: 1000px;
	margin: 0 auto;
	padding-top: 100px;
	/* margin-top: 50px; */
	/* background: #000; */
}
.liImg {
	margin: auto;
	display: block;
	margin-top: 10px;
}
.item-text {
	width: 50%;
	margin: auto;
	text-align: center;
	display: block;
	color: #000;
	font-size: 20px;
	margin-top: 50px;
}
</style>
