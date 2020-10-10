<template>
  <div class="header" >
    <div  id="apc" >
			<ul>
				<li>
					<a class="text_color" href="/">
				<span class="ico-xing"></span>
				<span >收藏鲜花网(hua.com)</span>
				  </a>
			</li>
				<li>
					<a @mouseenter="show"  @mouseleave="hide" class="text_color"  href="">
							<span class="ico-weixin"></span>
						<span>关注微信</span>
						<div v-show="isShow" class="div-img ">
						<img class="img" src="../../public/img/wxguanjia_qrcode.png" alt="">
						<p class="weixin">扫码关注</p>
						<p class="weixin">回复"礼物"更多惊喜!</p>
					</div>
					</a>
				</li>
				<li>
					
					<a @mouseenter="sho"  @mouseleave="hid"  class="text_color" href="">
							<span class="ico-phone"></span>
						<span class=" ico ">花礼网app</span>
						<div v-show="isSho" class="div-img ">
								<img class="img" src="../../public/img/app_download_qrcode.png" alt="">
								<p class="weixin">新人专享100元APP礼包</p>
							</div>
					</a>
				</li>	
			</ul>
			<ul class="breadcrumb bg-transparent" style="padding-top:5px">
				<li class="breadcrumb-item ">
					<div>
					<!-- <a class="text_color orange-color" style="display: inline-block;
padding-right: 10px;" href=""><span>你好，请登录</span></a> -->
          <router-link to="/login" class="text_color orange-color" style="display: inline-block;
padding-right: 10px;">你好，请登录</router-link>
					<!-- <span class="text_color orange-color" style="display: inline-block;" href=""><span>注册</span></a> -->
					<router-link to="/reg" class="text_color orange-color" style="display: inline-block;" >注册</router-link>
				</div>
				</li>
				<li class="breadcrumb-item"><a class="text_color orange-color" href=""><span>订单查询</span></a></li>
				
				<li class="breadcrumb-item" @mouseenter="show_kehu"  @mouseleave="hide_kehu" style="width:75px"><a class="text_color" href=""><span>客户服务</span>
					<span class="ico-biao"></span>
				</a>
			<div v-show="isShow_kehu" class="kehu">
      <a class="text_color" href="">在线付款</a>
      <a class="text_color" href="">帮助中心</a>
      <a class="text_color" href="">售后服务</a>
      <a class="text_color" href="">配送范围</a>
      <a class="text_color" href="">留言反馈</a>
			</div>
			</li>
				<li  @mouseenter="show_shopping"  @mouseleave="hide_shopping" class="breadcrumb-item ml-1" style="width:80px;"><a class="text_color " href="">
					<span class="ico-shopping"></span>
					<span class="pl-1">购物车(0)</span>
					<span class="ico-biao1"></span>
					
				</a>
				</li>
					<li class="breadcrumb-item ml-1" ><span class="text_color" style="font-size:15px">中国鲜花礼品网：中国鲜花网领先品牌</span></li>
				<!-- <li class="breadcrumb-item text_color"><span>中国鲜花礼品网：中国鲜花网领先品牌</span></li> -->
			</ul>
		</div>

    <div class="logo row">
			<div class="col-lg-3 col-sm-12">
			<a href="" class="ico-header"></a>
			</div>
			<div class="col-lg-4 col-sm-12 d-flex position-relative" style="flex-wrap: wrap;">
			<span class="header-s"></span>
			<input
			v-model="products"
			class="header-ss"
			 style="outline:none" type="text" placeholder="商品关键字">
			 <button @click="search">搜索</button> 
			 <div class="w-100"
			 style="text-align:center"
			 >
				 <a class="header-ss" href="">红玫瑰</a>
				 <a class="header-ss" href="">永生花</a>
				 <a class="header-ss" href="">生日鲜花</a>
				 <a class="header-ss" href="">礼品卡</a>
			 </div>
	    </div>
			
			<div class="col-lg-4 col-sm-12 d-flex position-relative" style="flex-flow: row-reverse;">
        <span class="ico-phone2"></span>
				<router-link class="service" to="">在线客服</router-link>
				
				<span class="ico-service"></span>
				<p class="telephone">400-889-8188 |</p>
			</div>
    </div>

		<div class="fenlei1 position-relative d-flex"
		 >
      <div class="fenlei">
				<span class="ico-fenlei"></span>
				<h3>所以分类</h3>
			</div>
			<div class="feilei2 position-relative " >
			<a href="">鲜花</a>
			<a href="">永生花</a>
			<a href="">蛋糕</a>
			<a href="">礼品</a>
			<a href="">巧克力</a>
			<a href="">花语大全</a>
			<a href="">企业团购</a>
			<a href="">设计师臻选鲜花</a>
			<a href="">中秋节鲜花礼物</a>
			</div>
		</div>


  </div>
</template>

<script>
export default {
  data(){
    return{
        isShow:false,
			isSho:false,
			isShow_kehu:false,
			isShow_shopping:false,
			products:''
    }
  },
  methods:{

    show(){
      this.isShow=true;
			},
			hide(){
				this.isShow=false;
			},
			sho(){
				this.isSho=true;
			},
			hid(){
				this.isSho=false
			},
			show_kehu(){
     this.isShow_kehu=true
			},
			hide_kehu(){
				this.isShow_kehu=false;
			},
			show_shopping(){
				this.isShow_shopping=true
			},
			hide_shopping(){
				this.isShow_shopping=false
			},
			search(){
				let obj = this.products
				
				this.axios.get('/pro/search?title='+obj).then(res=>{
				
					if(res.data.code==1){
						this.$router.push(`/search/${obj}`)
					}
				})
			}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#apc>ul:last-child>li:not(:first-child)>a{
	display:block;
	width:82px;
	height:40px;
	font-size: 5px;
	text-align: center;
	margin-top: -20px;
	padding-top: 8px;
 position: absolute;
 top:15px;
 left:22px;
	
	
	
	/* line-height: 40px */
}
#apc>ul:last-child>li:nth-child(2)>a{
	position: absolute;
	left:38px;
	top:15px
}
#apc>ul:last-child>li:first-child{
	display: block;
	width:130px;
	height:100px ;
	font-size: 1px;
	text-align: center;
	padding-top: 5px;
	padding-left:20px
}

/* #apc>ul:last-child>li:not(:first-child):not(:last-child){
	
} */
#apc>ul:last-child>li:nth-child(2){
	padding-left: 20px;
}
#apc>ul:last-child>li:nth-child(2):hover{
	
	
	color:green;
	color:orange;
	text-decoration: none;
	background-color: #e8e8e8;
	
}
#apc>ul:last-child>li:nth-child(2)~li>a:hover{
	
	color:orange;
	text-decoration: none;
	display: block;
	border-bottom:0;
  background-color: #fff;
  
}

.kehu{
	width: 82px;
	height: 140px;
	border: 1px solid #e8e8e8;
	position: absolute;
	top:34px;
	left:22px;
	text-align: center;
	display: flex;
	flex-flow: column;
  border-top:0;
  background-color:white ;
  z-index: 50;

}
.kehu>a{
	margin-top:8px;
}
.kehu>a:hover{
	color:orange;
	text-decoration: none;
}
.shopping{
	width: 300px;
	height: 100px;
	border:1px solid #e8e8e8;
	text-align: center;
	line-height: 100px;
	position: absolute;
	top:46px;
	right:-2px;
	border-top:0;
  color:#666;
  background-color: white;
  z-index: 50;
}
.logo{
	margin: 50px 200px;
	text-align: left;
	background-color: #F7F9FA;
}
.logo input,button{
	border: 1px solid #FF6A00;
	height: 35px;
   
}
.logo input{
	font-size: 10px;
	text-indent: 10px;
	width: 200px;
}
.logo button{
	padding: 5px 20px;
	background-color: #ff6a00;
	color:white;
	cursor: pointer;
	font-size: 15px;
	
}
.ico-phone2{
	display: inline-block;
	width: 25px;
	height:22px;
	background: url(../../public/img/common_z.png) no-repeat;
	background-size: 40px;
	background-size: 320px ;
	margin-bottom: 5px;
	background-position: -288px -37px;
	position: absolute;
	top:2px;
	left:0px
	}
	.telephone{
	
		font-size: 15px;
		margin-left: 20px;
		margin-right: 20px;
		color:#737373;
	}
	.service,.service:hover{
		font-size:14px;
		text-decoration: none;
		color:orange
	}
	.service{
		color:#737373;
		font-size: 14px;
		margin-left: 10px
	}
	.ico-service{
		display: inline-block;
		width: 25px;
		height:22px;
		background: url(../../public/img/common_z.png) no-repeat;
		background-size: 40px;
		background-size: 320px ;
		margin-bottom: 5px;
		background-position: -223px -100px;
		position: absolute;
		top:2px;
		left: 140px
    }
   .ico-biao1{
	display: inline-block;
	width: 17px;
	height: 15px;
	background: url(../../public/img/common_z.png) no-repeat;
	background-size: 40px;
	background-size: 320px ;
	margin-bottom: 5px;
	background-position: -135px -240px;
	position: absolute;
	top:10px;
	left:66px
	
}
.ico-biao{
	display: inline-block;
	width: 17px;
	height: 15px;
	background: url(../../public/img/common_z.png) no-repeat;
	background-size: 40px;
	background-size: 320px ;
	margin-bottom: 5px;
	background-position: -133px -240px;
	position: absolute;
	top:10px;
	left:62px
	
}
.ico-shopping{
	display: inline-block;
	width: 17px;
	height: 15px;
	background: url(../../public/img/common_z.png) no-repeat;
	background-size: 40px;
	background-size: 320px ;
	margin-bottom: 5px;
	background-position: -260px -218px;
	position: absolute;
	top:10px;
	left:3px
	}

	.logo{
	margin: 50px 200px;
	text-align: left
}
.header{
 background-color: #F7F9FA;
}
.header-s{
	display: inline-block;
	width: 25px;
	height:22px;
	background: url(../../public/indeximg/common_sprite.png) no-repeat;
	background-size: 1500px ;
	margin-bottom: 5px;
	background-position: 3px -51px;
	position: absolute;
	top:14px;
	left:58px
}
.logo input,button{
	border: 2px solid #FF6A00;
	height: 50px;
  
}
.logo input{
	font-size: 12px;
	text-indent: 40px;
	width:506.66px;
	height: 50px;
	border-radius: 30px;
	color:#000;
	
}
.logo button{
	padding: 5px 20px;
	background-color: #ff6a00;
	color:white;
	cursor: pointer;
	font-size: 15px;
	width: 100px;
	border-radius: 30px;
	position: absolute; 
	left: 390px;	
}
.header-ss{
	font-size: 12px;
	text-decoration: none;
	margin-left: 30px;
	color:#B4BABF;
}
.header-ss:hover{
	color:orange
}
.ico-phone2{
	display: inline-block;
	width: 25px;
	height:22px;
	background: url(../../public/img/common_z.png) no-repeat;
	background-size: 40px;
	background-size: 320px ;
	margin-bottom: 5px;
	background-position: -288px -37px;
	position: absolute;
	top:2px;
	left:277px
	}
	.telephone{
	
		font-size: 15px;
		margin-left: 20px;
		margin-right: 20px;
		color:#737373;
	}
	.service,.service:hover{
		font-size:14px;
		text-decoration: none;
		color:orange
	}
	.service{
		color:#737373;
		font-size: 14px;
		margin-left: 10px
	}
	.ico-service{
		display: inline-block;
		width: 25px;
		height:22px;
		background: url(../../public/img/common_z.png) no-repeat;
		background-size: 40px;
		background-size: 320px ;
		margin-bottom: 5px;
		background-position: -223px -100px;
		position: absolute;
		top:2px;
		left: 405px
		}
		.ico-header{
		display: inline-block;
		width: 230px;
		height:60px;
		background: url(../../public/indeximg/common_sprite.png) no-repeat;
		background-size: 1000px ;
		margin-bottom: 5px;
		background-position: 16px -185px;
		position: absolute;
		top:0px;
		left: 0px
		}
.fenlei{
	width: 240px;
	height: 52px;
	background-color: #FF4A20;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	padding-top: 18px;
	padding-left: 50px;
}
.fenlei h3{
	font-size: 17px;
	color: #fff;
	cursor: pointer;
}
.ico-fenlei{
	display: inline-block;
	width: 25px;
	height:22px;
	background: url(../../public/indeximg/common_sprite.png) no-repeat;
	background-size: 1500px ;
	margin-bottom: 5px;
	background-position: -77px -118px;
	position: absolute;
	top:15px;
	left:15px
}
.fenlei1{
		margin: 0 200px;
	text-align: left
}
.feilei2{
	width: 1000px;
	padding-top:20px
}
.feilei2 a{
 margin-left:40px;
 color:#000;
 font-weight: 1000;
}
.feilei2 a:hover{
	text-decoration: none;
	color:#FF734C;
}
.feilei2 a:last-child{
	color: #FF734C;
}
</style>
