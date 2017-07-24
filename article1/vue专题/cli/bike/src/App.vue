<template>
  <div id="app">
    <headComp class="head-position"></headComp>
    <div class="footer footer-position">
      <span class="btns"><router-link class="a" to="/first"><strong>第一章</strong>
      </router-link></span>
      <span class="btns"><router-link class="a" to="/second"><strong>第二章</strong>
      </router-link></span>
      <span class="btns"><router-link class="a" to="/third"><strong>第三章</strong>
      </router-link></span>
    </div>
    <transition name="slide" enter-active-class="slideInRight animated" leave-active-class="slideOutLeft animated">
      <router-view class="views"></router-view>
    </transition>
  </div>
</template>

<script>
import headComp from './components/header/headerComp'
export default {
  components:{
    headComp
  }
}
</script>

<style scoped>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.head-position{
  position: fixted;
  top: 0;
  left: 0;
  z-index: 50;
}
.footer-position{
  position: fixted;
  bottom: 0;
  left: 0;
  z-index: 50;
}
.footer{
  width: 100%;
  height: 40px
  background: rgb(238,231,222);
}
.btns{
  flex:1;
  box-sizing: border-box;
  padding: 5px 20px;
  text-align: center;
  height: 100%;
  line-height: 30px;
}
.btns:nth-child(2){
  border-left: 1px solid #aaa;
  border-right: 1px solid #aaa;
}
.a{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.active{
  color: #f00;
}
</style>
