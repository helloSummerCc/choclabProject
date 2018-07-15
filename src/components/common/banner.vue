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
  methods: {
  	letterClick(index) {
  		this.active = index;
  	}
  }
}
</script>

<style scoped>
.banner {
	z-index: 999;
	width: 50px;
	height: 350px;
	position: fixed; 
	top: 0;
	left: 0; 
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
