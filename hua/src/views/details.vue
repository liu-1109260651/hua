<template>
  <div>
     <hua-header></hua-header>
   
	 <div>
		 <ul class="breadcrumb header-dh">
			 <li class="breadcrumb-item"><a href="/">首页</a></li>
			 <li class="breadcrumb-item"><a href="">礼品</a></li>
			 <li class="breadcrumb-item"><a href="">永生花</a></li>
			 <li class="breadcrumb-item">{{product.title}}</li>
		 </ul>
	 </div>

	 <div class="img" >
		 <img class="img_1"  :src="src1" alt="">
	 </div>
  
	<div class="d-flex small_img">
		<div>
		<img class="img_2" @mouseenter="img1" :src="product.img1" alt="">
		</div>
		<div>
		<img class="img_2" @mouseenter="img2" :src="product.img2" alt="">
		</div>
		<div>
		<img class="img_2" @mouseenter="img3" :src="product.img3" alt="">
		</div>
		<div>
		<img class="img_2" @mouseenter="img4" :src='product.img4' alt="">
		</div>
	</div>
    
   <div class="details">
     <p class="p1">{{product.title}}</p>
		 <p >{{product.title2}}</p>
		 <p class="p2">{{product.subtitle}}</p>
		 <div class="price">
			 <div class="d-flex position-relative">
      <p class="p3">售价</p>
			<p class="p4">￥{{product.price}}</p>
			<p class="p5">已售601件</p>
			</div>
			<div  class="d-flex position-relative">
				<p class="p6">APP/微信专享价￥{{product.price2}}</p>
				<a @mouseenter="show_app" @mouseleave="hide_app" class="a1" href="">去APP购买</a>
				<a @mouseenter="show_wx" @mouseleave="hide_wx" class="a2" href="">去微信购买</a>
				<div v-show="app" class="app">
          <img src="../../public/img/app_download_qrcode.png" alt="">
					<p>新人专享100元大礼包</p>
				</div>
				<div v-show="wx" class="wx">
           <img src="../../public/img/tempqrpic.jpg" alt="">
				</div>
			</div>
		 </div>
		 <div class="subtitle d-flex">
      <p class="p8">材料</p>
			<p class="p7">{{product.detail}}</p>
		 </div>
		 <div class="d-flex ps">
			 <p class="p8">配送说明</p>
			 <p class="ps_sf">{{product.ps}}</p>
		 </div>
		 <div class="d-flex xz">
			 <p class="p8" style="margin-top:15px">选择</p>
			 <div class="dz d-flex">
				 <img  :src="product.img1" alt="">
				 <p>送妈妈长辈定制款</p>
			 </div>
			 <div class="red d-flex">
				 <img  :src="product.img4" alt="">
				 <p>红色</p>
			 </div>
			 <div class="qs d-flex">
				 <img  :src="product.img1" alt="">
				 <p>浅色</p>
			 </div>
		 </div>
		 <button class="btn_1">加入购物车</button>
		 <button class="btn_2">立即购买</button>
		 <a class="scsp" href=""><span class="ico-sc"></span>收藏商品</a>
	 </div>

   <hua-footer class="bgd"></hua-footer>

  </div>
</template>
<script>
export default {
	data(){
		return{
			app:false,
			wx:false,
			product:{},
			src1:"http://127.0.0.1:9000/index/hua_1.jpg"
		}
	},
	methods:{
   show_app(){
		 this.app = true;
	 },
	 hide_app(){
		 this.app = false
	 },
	 show_wx(){
		 this.wx = true;
	 },
	 hide_wx(){
		 this.wx = false
	 },
	 	img1(){
				this.src1 = this.product.img1
			},
			img2(){
				this.src1 = this.product.img2
			},
			img3(){
				this.src1 = this.product.img3
			},
			img4(){
				this.src1 = this.product.img4
			}
	},
	
	mounted(){

     this.scr1 = this.product.img1

		let cid = this.$route.params.cid;
		console.log(cid)
		this.axios.get('/pro/detail?cid='+cid).then(res=>{
			console.log(res.data)
			this.product = res.data[0]
			console.log(this.product)
		})
	}
}
</script>
<style scoped>
.breadcrumb-item ~ .breadcrumb-item::before{
	content: '>';
	padding: 0;
}
.header-dh{
	background-color: transparent;
	font-size: 13px;
	margin-left: 184px;
	margin-top: 10px;
	margin-bottom: 10px;
	color: #71797F;
}
.header-dh a{
	color: #71797F;
	text-decoration: none;
}
.header-dh a:hover{
	color:#FF734C;
}
.img{
	margin:0px 200px;
	text-align: left;
}
.img_1{
	width: 458px;
	height: 500px;
}
.img_2{
	width: 74px;
	height: 85px;
}
.small_img{
	width: 460px;
	height: 80px;
	margin:0px 200px;
	text-align: left;
	margin-top: 20px;
}
.small_img div{
  width: 80px;
	height: 87px;
	border:1px solid #E9ECF0
}
.small_img div~div{	
	margin-left: 52px;
}
.small_img div:hover{
	border-color:#FF734C ;
}
.details{
	width: 740px;
	height: 512px;
	
	padding-left: 100px;
	padding-bottom: 94px;
	text-align: left;
	position:absolute;
	top: 330px;
	left:657px
}
.details>p:nth-child(2){
	margin: 0;
	margin-top: 5px;
}
.p1{
	font-size: 18px;
	font-weight: 700;
	margin: 0;
}
.p2{
	color:#FF734C ;
	font-size: 15px;
	margin-top: 5px;
}
.price{
	width: 640px;
	height: 80px;
	background-color: #F7F9FA;
	border-top:1px dashed #E9ECF0;
	border-bottom:1px dashed #E9ECF0;
}
.price>div:first-child{
	width: 640px;
	height: 39px;
	padding-top:6px;
	margin-bottom: 10px;
}
.p3{
	font-size: 13px;
  padding-left: 12px;
	color: #71797F;
	width: 40px;
}
.p4{
	font-size: 19px;
	font-weight: 700;
  color: #FF5526;
  margin-left: 40px;
	margin-top: -5px;
}
.p5{
	font-size: 13px;
	position: absolute;
	top:8px;
	right:0;
}
.p6{
	font-size: 13px;
	margin-left: 83px;
}
.a1{
	font-size: 13px;
	margin-left: 20px;
	color: #000;
	text-decoration: none;
}
.a2{
	font-size: 13px;
	margin-left: 20px;
	color: #000;
	text-decoration: none;
}
.app{
	width: 130px;
	height: 130px;
	background-color: white;
	border: 1px solid #E9ECF0;
	position: absolute;
	top: 20px;
	left: 230px;
}
.app img{
	width: 80px;
	margin-top:20px;
	margin-left: 25px;
}
.app p{
	font-size: 12px;
	margin-top: 5px;
	margin-left: 7px;
}
.wx{
		width: 130px;
	height: 130px;
	background-color: white;
	border: 1px solid #E9ECF0;
	position: absolute;
	top: 20px;
	left: 318px;
}
.wx img{
	width: 80px;
	margin-top:20px;
	margin-left: 25px;
}
.subtitle{
	width: 640px;
	height: 73px;
	padding: 12px 0px;
	border-bottom:1px dashed #E9ECF0;
}
.p7{
	font-size: 14px;
  margin-left: 30px;
	margin-top: -5px;
}
.p8{
		font-size: 13px;
  padding-left: 12px;
	color: #71797F;
	width: 70px;
}
.ps{
	margin-top: 15px;
}
.ps_sf{
	font-size: 14px;
  margin-left: 10px;
	margin-top: 0px;
}
.dz{
	width: 184px;
	height: 46px;
	border: 1px solid #E9ECF0;
  margin-right: 30px;
	margin-left: 10px;
}
.xz>div:hover{
	border:1px solid #FF5526;
}
.dz img{
	width: 40px;
	height: 43.66px;
	text-align: left;
}
.dz p{
	font-size: 14px; 
	margin-top: 11px;
	margin-left: 12px;
}
.red{
	width: 100px;
	height: 46px;
	border: 1px solid #E9ECF0;
	margin-right: 30px;
}
.red img{
	width: 40px;
	height: 43.66px;
	text-align: left;
}
.red p{
	font-size: 14px; 
	margin-top: 11px;
	margin-left: 12px;
}
.qs{
	width: 100px;
	height: 46px;
	border: 1px solid #E9ECF0;
	margin-right: 20px;
}
.qs img{
	width: 40px;
	height: 43.66px;
	text-align: left;
}
.qs p{
	font-size: 14px; 
	margin-top: 11px;
	margin-left: 12px;
}
.btn_1{
	width: 208px;
	height: 56px;
	margin-right: 40px;
    border-radius: 28px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
		color: #FF734C;
		margin-top: 80px;
		cursor: pointer;
}
.btn_2{
	width: 208px;
	height: 56px;
	margin-right: 40px;
    border-radius: 28px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
		color: #FFf;
		margin-top: 80px;
		background: linear-gradient(90deg, #ff734c 0%, #ff3d12 100%);
		cursor: pointer;
}
.scsp{
	font-size: 13px;
	color: #71797F;
	margin-left: 60px;
}
.scsp:hover{
	text-decoration: none;
	color: #FF5526;
}
.ico-sc{
	display: inline-block;
	width: 17px;
	height:17px;
	background: url(../../public/indeximg/common_sprite.png) no-repeat;
	background-size: 1024px ;
	margin-bottom: 5px;
	background-position: -70px -56px;
	position: absolute;
	bottom:34px;
	right:90px
}
.bgd{
	background-color: #000;
}
</style>