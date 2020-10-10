<template>
  <div>
    <img src="indeximg/header.png" alt="">
     
		 <hua-header></hua-header>
		 
     <div class="position-relative">
				<div id="demo" class="carousel " data-ride="carousel">
			<div class="carousel-inner  banner">
				<div class="carousel-item active" ><img class="" :src="banner[0].imgs" alt=""></div>
				<div class="carousel-item"><img class="" :src="banner[1].imgs" alt=""></div>
				<div class="carousel-item"><img class="" :src="banner[2].imgs" alt=""></div>
				<div class="carousel-item"><img class="" :src="banner[3].imgs" alt=""></div>
				<div class="carousel-item"><img class="" :src="banner[4].imgs" alt=""></div>
			</div>
				<ul class="carousel-indicators">
					<li data-target="#demo" data-slide-to="0" class="active"></li>
					<li data-target="#demo" data-slide-to="1"></li>
					<li data-target="#demo" data-slide-to="2"></li>
					<li data-target="#demo" data-slide-to="3"></li>
					<li data-target="#demo" data-slide-to="4"></li>
				</ul>
			<a data-slide="next" href="#demo" class="carousel-control-next">
				<span class="carousel-control-next-icon banner-right"></span></a>
			<a data-slide="prev" href="#demo" class="carousel-control-prev">
				<span class="carousel-control-prev-icon banner-left"></span></a>		
		</div>
		  <div class="banner-dh">
       <div class="banner-header">
        <a href="">鲜花用途</a>
				<div>
        <a href="">爱情鲜花</a>
        <a href="">生日鲜花</a>
        <a href="">友情鲜花</a>
        <a href="">问候长辈</a>
        <a href="">探病慰问</a>
        <a href="">道歉鲜花</a>
        <a href="">祝贺鲜花</a>
        <a href="">婚庆鲜花</a>
        <a href="">商务鲜花</a>
				</div>
			 </div>
			 <div class="banner-header">
				 <a href="">鲜花花材</a>
				 <div>
					 <a href="">玫瑰</a>
					 <a href="">康乃馨</a>
					 <a href="">百合</a>
					 <a href="">向日葵</a>
					 <a href="">扶郎</a>
					 <a href="">郁金香</a>
					 <a href="">马蹄莲</a>
				 </div>
			 </div>
			 <div @mouseenter="body_show" @mouseleave="body_hide" class="banner-body">
        <a href="">永生花</a>
				<div class="header-body"  >
					<a href="">永生瓶花</a>
					<a href="">经典花盒</a>
					<a href="">特色永生花</a>
				</div>
		     			 		<div v-show="body_hover" class="body-hover">
        <p>永生花类别</p>
				<div  class="d-flex">
					<a href="" class="">
						<img src="indeximg/m_category_ppf_sort_Vase.png" alt="" class="body-img1">
						永生花瓶
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_ppf_sort_Box.png" alt="" class="body-img1">
						经典花盒
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_ppf_sort_Special.png" alt="" class="body-img1">
						特色永生花
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_ppf_sort_GiantRose.png" alt="" class="body-img1">
						巨型玫瑰
					</a>
				</div>
				<p class=" body-hover-dh1">对象</p>
				<div class="d-flex">
					<a href="" class="">
						<img src="indeximg/m_category_ppf_use_Girlfriend.png" alt="" class="body-img1">
						送女友
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_ppf_use_Boyfriend.png" alt="" class="body-img1">
						送男友
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_ppf_use_Elder.png" alt="" class="body-img1">
						送长辈
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_ppf_use_Friend.png" alt="" class="body-img1">
						送朋友
					</a>
				</div>
			</div>
			 </div>
			  <div @mouseenter="body2_show" @mouseleave="body2_hide" class="banner-body">
				 <a href="">蛋糕</a>
			 <div class="header-body">
        <a href="">元祖</a>    
        <a href="">幸福西饼</a>    
        <a href="">21cake</a>    
        <a href="">诺心蛋糕</a>    
        <a href="">窝夫小子</a>    
        <a href="">BONCAKE</a>    
			 </div>
			 <div v-show="body2_hover" class="body2-hover">
          <p>蛋糕品牌</p>
					<div  class="d-flex">
					<a href="" class="">
						<img src="indeximg/m_category_cake_ganso.png" alt=""  class="body2-img2">
						元祖蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_xfxb.png" alt="" class="body2-img2">
						幸福西饼蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_21cake.png" alt="" class="body2-img2">
						廿一客蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_boncake.png" alt="" class="body2-img2">
						BONCAKE蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_waffleboy.png" alt="" class="body2-img2">
						窝夫小子蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_cakeboss.png" alt="" class="body2-img2">
						CAKEBOOS蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_mcake.png" alt="" class="body2-img2">
						Mcake蛋糕
					</a>
				</div>
				<div  class="d-flex">
					<a href="" class="">
						<img src="indeximg/m_category_cake_cheesecake.png" alt="" class="body2-img2">
						心之和蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_pantry.png" alt="" class="body2-img2">
						派悦坊蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_micamika.png" alt="" class="body2-img2">
						米卡米卡蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_lecake.png" alt="" class="body2-img2">
						诺心蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_vcaketop.png" alt="" class="body2-img2">
						Vcake蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/bestcake.png" alt="" class="body2-img2">
						贝克思蛋糕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_cake_all.png" alt="" class="body2-img2">
						全国蛋糕
					</a>
				</div>
				</div>
			</div>
			<div @mouseenter="footer_show"
			@mouseleave="footer_hide" class="banner-footer">
        <a href="">礼品 /</a> 
        <a href="">公仔 /</a>
        <a href="">绿植</a>
				<div v-show="footer_hover"  class="footer-hover">
        <p>礼品品牌</p>
				<div  class="d-flex">
					<a href="" class="">
						<img src="indeximg/m_category_gift_brand_SWAROVSKI.png" alt="" class="footer-img2">
						施华洛世奇
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_brand_GlamEver.png" alt="" class="footer-img2">
						Glam Ever潮牌饰品
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_brand_Dior.png" alt="" class="footer-img2">
						迪奥Dior
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_brand_MW.png" alt="" class="footer-img2">
						猫王收音机
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_brand_HelloKitty.png" alt="" class="footer-img2">
						Hello Kitty
					</a>
				</div>
				<p class=" body-hover-dh1">礼品类型</p>
				<div class="d-flex">
					<a href="" class="">
						<img src="indeximg/m_category_gift_sort_Musicbox.png" alt="" class="footer-img2">
						音乐盒
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_sort_Goldfoilflower.png" alt="" class="footer-img2">
						金箔花
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_sort_3DCrystal.png" alt="" class="footer-img2">
						3D水晶内雕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_sort_JewelryBeauty.png" alt="" class="footer-img2">
						首饰/美妆
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_sort_Chocolates.png" alt="" class="footer-img2">
						巧克力
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_sort_dolls.png" alt="" class="footer-img2">
						公仔/睡枕
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_sort_OrnamentsOthers.png" alt="" class="footer-img2">
						摆件/其他
					</a>
				</div>
				<div class="d-flex">
					<a href="" class="">
						<img src="indeximg/m_category_Plants_Green.png" alt="" class="footer-img2">
						绿色植物
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_Plants_Potted.png" alt="" class="footer-img2">
						盆栽花卉
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_Plants_Succulent.png" alt="" class="footer-img2">
						多肉植物盆栽
					</a>
					<a href="" class="">
						<img src="indeximg/m_category_gift_sort_Yinxiang.png" alt="" class="footer-img2">
						蓝牙音箱
					</a>	
				</div>
			 </div>
		  </div>
		 </div>
    </div>
			
		<div class="pp position-relative">
			<span class="ico_jb"></span>
			<a href="">鲜花电商认证龙头企业</a>
			<span class="ico_pp"></span>
			<a href="">15年品牌</a>
			<span class="ico_qg"></span>
			<a href="">3小时全国送花</a>
			<span class="ico_cn"></span>
			<a href="">200%退赔承诺</a>
			<span class="ico_pl"></span>
			<a href="">最近387466条评论</a>
    </div>

		<div class="gt">
		</div>
	<div class="bg rx d-flex">
         <div v-for="(v,k) of pro" :key="k" class=" hn">
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
			body_hover:false,
			body2_hover:false,
			footer_hover:false,
			pro:{},
			banner:{}
    }
  },
  methods:{
			body_show(){
				this.body_hover=true;
			},
			body_hide(){
				this.body_hover=false
			},
			body2_show(){
				this.body2_hover=true
			},
			body2_hide(){
				this.body2_hover=false
			},
			footer_show(){
        this.footer_hover=true;
			},
			footer_hide(){
				this.footer_hover=false
			}
		
	},
	mounted(){
		this.axios.get('/pro/product').then(res=>{
			console.log(res.data)
			this.pro = res.data
		});

   this.axios.get('/pro/banner').then(res=>{
		 console.log(res.data);
		 this.banner = res.data
		 console.log(this.banner[1])
	 })
	}
}
</script>
<style  scoped>

.banner-right{
	position: absolute;
	top: 50%;
  left:-100px;
}
.banner-left{
	position: absolute;
	top: 50%;
  right:-300px;
}
.banner{
	width: 1920px;
	height: 480px;
}
.banner-dh{
	width: 240px;
	height: 480px;
	background-color: rgb(0,0,0,0.5);
	position: absolute;
	top:0px;
	left: 200px;

}
.banner-header{
	text-align: left;
		padding:10px 20px;	
		border-bottom:1px dashed #fff;
}
.banner-header>a:first-child{
	color: white;
}
.banner-header>a:first-child:hover{
	color: #FF734C;
	text-decoration: none;
}
.banner-header>div a{
	color: white;
	font-size: 13px;
	margin-left: 12px;
  padding-top:10px;
}
.banner-header>div a:hover{
	color: #FF734C;
	text-decoration: none;
}
.header-body{
		color: white;
	font-size: 13px;
	margin-left: 0px;
  padding-top:0px;
}
.banner-body{
		text-align: left;
		padding:20px;
		padding-bottom: 10px;
		border-bottom:1px dashed #fff;
}
.banner-body>a:first-child{
	color: white;
}
.banner-body>a:first-child:hover{
	color: #FF734C;
	text-decoration: none;
}
.banner-body>div a{
	color: white;
	font-size: 13px;
	margin-left: 12px;
  padding-top:10px;
}
.banner-body:hover{
	background-color: white;
	
}
.banner-body:hover>a:first-child{
color: #000;
}
.banner-body:hover a:first-child:hover{

	text-decoration: none;
}
.banner-body:hover>div a{
	color: #6e6e6e;
}
.banner-body:hover>div a:hover{
	color: #FF734C;
	text-decoration: none;
}
.body-hover{
	width: 800px;
	height: 470px;
	padding-left: 30px;
	padding-top: 20px;
	background-color: white;
	position: absolute;
	top: 5px;
	left: 240px;
	z-index: 50;
}
.body-hover>p{
	text-align: left;
	font-size: 14px;
}
.body-hover a{
	width: 80px;
	display: flex;
	flex-flow: column;
	color: #6e6e6e;
	font-size: 12px;
	margin-left: 20px ;
	margin-right: 20px ;
	text-align: center;
}
.body-hover a:hover{
	color:#FF734C ;
	text-decoration: none ;
}
.body-img1{
	width: 80px;
}
.body-hover-dh1{
margin-top: 40px;
}
.body2-hover{
		width: 900px;
	height: 470px;
	padding-left: 30px;
	padding-top: 20px;
	background-color: white;
	position: absolute;
	top: 5px;
	left: 240px;
	z-index: 50;
}
.body2-hover>p{
	text-align: left;
	font-size: 14px;
}
.body2-hover a{
	width: 80px;
	display: flex;
	flex-flow: column;
	color: #6e6e6e;
	font-size: 12px;
	margin-left: 20px ;
	margin-right: 20px ;
	text-align: center;
}
.body2-hover a:hover{
	color:#FF734C ;
	text-decoration: none ;
}
.body2-img2{
	width: 90px;
}
.banner-footer{
	text-align: left;
		padding:15px 10px;	
		border-bottom:1px dashed #fff;
}
.banner-footer:hover{
	background-color: white;
}
.banner-footer:hover>a{
	color: #000;
}
.banner-footer a{
	color: white;
	font-size: 17px;
	font-weight: 700;
	margin-left: 12px;
  padding-top:10px;
}
.banner-footer a:hover{
	color: #FF734C;
	text-decoration: none;
}
.footer-hover{
		width: 900px;
	height: 470px;
	padding-left: 30px;
	padding-top: 20px;
	background-color: white;
	position: absolute;
	top: 5px;
	left: 240px;
	z-index: 50;
}
.footer-hover>p{
	text-align: left;
	font-size: 14px;
}
.footer-hover a{
	width: 80px;
	display: flex;
	flex-flow: column;
	color: #6e6e6e;
	font-size: 12px;
	margin-left: 20px ;
	margin-right: 20px ;
	text-align: center;
}
.footer-hover a:hover{
	color:#FF734C ;
	text-decoration: none ;
}
.footer-img2{
	width: 80px;
}
.pp{
	margin: 20px 200px;
	text-align: left;
}
.pp a{
	margin-left: 25px;
	margin-right:180px;
	font-size: 18px;
	color: #000;
}
.pp a:hover{
	text-decoration: none;
	color:#FF734C ;
}
.pp a:last-child{
	margin-right: 0;
}
.ico_jb{
	display: inline-block;
	width: 30px;
	height:26px;
	background: url(../../public/indeximg/common_sprite.png) no-repeat;
	background-size: 704px ;
	margin-bottom: 5px;
	background-position: -104px -71px;
	position: absolute;
	top:0px;
	left:0px
}
.ico_pp{
	display: inline-block;
	width: 30px;
	height:26px;
	background: url(../../public/indeximg/common_sprite.png) no-repeat;
	background-size: 704px ;
	margin-bottom: 5px;
	background-position: 4px -71px;
	position: absolute;
	top:0px;
	left:394px
}
.ico_qg{
	display: inline-block;
	width: 30px;
	height:26px;
	background: url(../../public/indeximg/common_sprite.png) no-repeat;
	background-size: 704px ;
	margin-bottom: 5px;
	background-position: -22px -71px;
	position: absolute;
	top:0px;
	left:662px
}
.ico_cn{
	display: inline-block;
	width: 30px;
	height:26px;
	background: url(../../public/indeximg/common_sprite.png) no-repeat;
	background-size: 704px ;
	margin-bottom: 5px;
	background-position: -77px -71px;
	position: absolute;
	top:0px;
	right:487px
}
.ico_pl{
	display: inline-block;
	width: 30px;
	height:26px;
	background: url(../../public/indeximg/common_sprite.png) no-repeat;
	background-size: 704px ;
	margin-bottom: 5px;
	background-position: -49px -71px;
	position: absolute;
	top:0px;
	right:166px
}
.gt{
	margin: 0px 200px;
	width: 1503px;
	height: 184px;
	background: url(../../public/indeximg/20_zhongqiu_mbanner_pc.jpg) no-repeat;
}
.bg{
	margin: 0px 200px;
}
.rx{
	background-color:#A8232B ;
	height: 200px;
	padding: 20px 31px;
}
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
</style>



