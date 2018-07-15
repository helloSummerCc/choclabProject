<template>
 <div class="banner">
 	<div class="letter-box" v-for="(list, index) in letter">
 		<div :id="`li${index+1}`" :class="['banner-letter', {'underline':index == active}]" @click="letterClick(index)">{{list.name}}</div>
 	</div>
 </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      active: 0,
      letter: [
	      {
	      	name: 'N',
	      	decoration: false
	      },
	      {
	      	name: 'F',
	      	decoration: false
	      },
	      {
	      	name: 'A',
	      	decoration: false
	      },
	      {
	      	name: 'C',
	      	decoration: false
	      },
	      {
	      	name: 'M',
	      	decoration: false
	      }
      ]
    }
  },
  mounted () {
    this.scrollTo();
     window.addEventListener('scroll',this.scrollTo);
  },
  methods: {
  	letterClick(index) {
	  this.active = index;
	  if(index === 5){
	  	this.$router.push('/flow/map');
	  }
	  window.scrollTo(0,300*index);
  	},
  	scrollTo(){
      let scrollTop = document.body.scrollTop;
      let count = scrollTop/300;
      if (count > 1 && count <= 2) {
      	this.active = 1;
      } else if (count > 2 && count <= 3) {
      	this.active = 2;
      }else if (count > 3 && count <= 4) {
      	this.active = 3;
      }else if (count > 4 && count <= 5) {
      	this.active = 4;
      }else if (count < 1 ) {
      	this.active = 0;
      }
      console.log(this.active)
  	}
  }
}
</script>

<style scoped>
.banner {
	z-index: 999;
	width: 50px;
	height: 350px;
	display: inline-block;
	position: fixed;
	top: 0; 
	background: #084b81;
}
.letter-box {
	height: 20%;
	width: 100%;
}
.banner-letter {
	text-align: center;
	color: #fff;
	font-size: 34px;
	font-weight: 700;
}
.underline {
	text-decoration:underline;
}
</style>
