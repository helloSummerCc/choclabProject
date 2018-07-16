<template>
  <div class="container-fluid" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{

    }
  }
}
</script>

<style>
html,body,ul,li,ol,dl, dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img {margin:0;padding:0; }
ul,ol,li{list-style:none;}
a,u{text-decoration:none;}
img{border:0;display:block;}
em,i{font-style:normal;}
html{
  width: 100%;
  height: 100%;
  min-height:100%;
}
body{
  width: 100%;
  height:100%;
}
*{ box-sizing: border-box;}
.container-fluid {
  height: 100%;
  padding: 0!important;
}
</style>
