<template>
  <div class="">
    <hua-header></hua-header>
     <div class="search_body d-flex">       
     <div v-for="(v,k) of search" :key="k"  class=" hn">
				<router-link :to="`/detail/${v.lid}`">
							<p>{{v.title}}</p>
							<p>{{v.subtitle}}</p>
							<p>￥{{v.price}}</p>
							<img :src="v.img" alt="">		
				</router-link>
			   </div>
     </div>
    <hua-footer class="bgd"></hua-footer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      search:""
    }
  },
  mounted(){
    let title = this.$route.params.title
    console.log(title)
    this.axios.get('/pro/search?title=' + title).then(res=>{
      console.log(res.data)
     this.search = res.data.info
     console.log(this.search)
    })
  }
}
</script>
<style  scoped>
.hn{
	flex-wrap: nowrap;
	margin-left: 10px;
	width: 350px;
	height: 160px;
	background-color:white;
	border-radius: 10px;
	text-align: left;
	padding: 40px 20px;
	position: relative;
}
.hn p:first-child{
	color:#000;
	margin: 0;
	padding: 0;
}
.hn p:nth-child(2){
	color:#6e6e6e;
	font-size: 14px;
}
.hn p:nth-child(3){
	margin-top: 30px;
	color:#C26137;
	font-size: 18px;
	font-weight: 700;
}
.hn img{
	width: 164px;
	height: 144px;
	position: absolute;
	top: 0;
	left: 150px;
}
.hn a:hover{
	text-decoration: none;
}
.bgd{
	background-color: #000;
}
.search_body{
	height: 500px;
}
</style>