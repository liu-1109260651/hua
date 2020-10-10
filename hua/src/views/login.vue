<template>
<div id="c1">
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
						<img class="img" src="img/wxguanjia_qrcode.png" alt="">
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
								<img class="img" src="img/app_download_qrcode.png" alt="">
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
				<li class="breadcrumb-item"><a class="text_color orange-color" href=""><span>我的花礼</span></a></li>
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
					<div v-show="isShow_shopping" class="shopping">
						<p>你的购物车里没有商品，先去选购吧！</p>
					</div>
				</a>
				</li>
					<li class="breadcrumb-item ml-1" ><span class="text_color" style="font-size:15px">中国鲜花礼品网：中国鲜花网领先品牌</span></li>
				<!-- <li class="breadcrumb-item text_color"><span>中国鲜花礼品网：中国鲜花网领先品牌</span></li> -->
			</ul>
		</div>

    <div class="logo row">
			<div class="col-lg-4 col-sm-12">
			<img src="img/pc_hualogo.png" alt="">
			</div>
			<div class="col-lg-4 col-sm-12 d-flex">
			<input style="outline:none" type="text" placeholder="商品关键字">	<button>搜索</button>
	    </div>
			<div class="col-lg-4 col-sm-12 d-flex position-relative">
        <span class="ico-phone2"></span>
				<p class="telephone">400-889-8188 |</p>
				<span class="ico-service"></span>
				<router-link class="service" to="">在线客服</router-link>
			</div>
    </div>

		<div class="login_bg">
       <div class="login_user">
        <ul class="d-flex list-unstyled" style="	border-bottom: 1px solid #E9ECF0;">
					<li @click="user_login1()" :class="active_class1">
				账号登录
						
						</li>
					<li @click="user_login()" :class="active_class">
					微信扫码登录
					<img src="img/pc_login_qr.png" class=" ico_wx" alt="">
					</li>
				</ul>
			<div v-show="login">
				<div class="position-relative get-phone">
				<span class="ico-phone3"></span>
				<span>手机验证码登录</span>
			 </div>
			 <div class="position-relative">
				 <span class="ico-user-phone"></span>
			 <input v-model="iphone" class="user_phone" type="text" @blur="yzphone" placeholder="请输入手机号码/邮箱"><br><span :class="phone_class">{{phone_class.msg}}</span>
			 <span class="ico-user-passwrod"></span>
			 <input v-model="upwd" class="user_passwrod" @blur="yzupwd" type="password"  placeholder="请输入密码"><br><span :class="pid_class">{{pid_class.msg}}</span>
			 </div>
			 <button @click="userLogin()" class="btn user_login">登录</button>
			 <p class="text_small">忘记密码？</p>
		</div>
		<div v-show="saoma" class="position-relative">
		<img class="wx-img" src="img/tempqrpic.jpg" alt="">
		<div v-show="msg" class="wx-msg">
		 <p class="">关注花礼网微信公众号登录</p>
		 </div>
		<p class="text_small2">微信扫码 快速登录</p>
		<span @mouseenter="show_msg"    @mouseleave="hide_msg"  class="ico-wen"></span>
	</div>
	<div class="qqlogin position-relative">
   <span class="qq-icon"></span>
	 <p class="qq">QQ</p>
	 <span class="zfb-icon"></span>
	 <p class="zfb">支付宝</p>
	 <a class="reg" href="#/reg">注册账号></a>
	</div>
  </div>
		</div>
    
		<hua-footer></hua-footer>

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
			msg:false,
			saoma:false,
			login:true,
			 active_class:{
				 login_wx:true,
				 active:false
			 },
			  active_class1:{
				 login_account:true,
				 active:true,
			 },
			 iphone:'',
			 upwd:'',
			  phone_class:{
          success:false,
					fail:false,
					msg:true,
          msg:""//因为验证通过或不通过时，都是class和msg同时改变，所以把msg变量也合并进class对象内一起修改。
        },
        pid_class:{
          success:false,
					fail:false,
					upwd_msg:true,
          msg:""
        }
	}	
		},
		methods:{
			user_login1(){
				this.active_class1={
					login_account:true,
					active:true
				}
				this.active_class={
					login_wx:true,
					active:false
				}
				this.login=true
				this.saoma=false
			},
			user_login(){
				this.active_class={
					login_wx:true,
					active:true
				}
				this.active_class1={
					login_account:true,
					active:false
				}
				this.login=false
				this.saoma=true
			},
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
			show_msg(){
				this.msg=true
			},
			hide_msg(){
				this.msg=false
			},
				userLogin(){
				this.axios.get("/user/login",{params:{
					phone:this.iphone,
					upwd:this.upwd
				}}).then(res=>{
					if(res.data.length == 1){
						alert(`登录成功`)
					}else{
						this.pid_class={
              success:false,
							fail:true,
							upwd_msg:true,
              msg:"用户名或密码错误"
		}
					}
				})
			},
			yzphone(){
			// 	let reg = /^1[3-9]\d{9}$/;
			// 	if(reg.test(this.iphone)){
					
			// 		this.phone_class={
      //         success:true,
      //         fail:false,
      //         msg:"√ 手机号格式正确"
			// 	}
			// }else{
			// 	this.phone_class={
      //         success:false,
      //         fail:true,
      //         msg:"× 手机号格式不正确"
      //       }
			// };
		
		},
		yzupwd(){
			if(this.upwd.length>=6&&this.upwd.length<=10){
				 this.pid_class={
              success:true,
							fail:false,
							upwd_msg:true,
              msg:"√ 密码格式正确"
			}
		}else{
			this.pid_class={
              success:false,
							fail:true,
							upwd_msg:true,
              msg:"× 密码长度为6~10之间"
		}
		}
		
		}
		}
		}

</script>
<style  scoped>
 .success{
      background-color:lightGreen;
      border:1px solid green;
      color:green;
    }
 .fail{
      background-color:pink;
      border:1px solid red;
      color:red;
		}
	.reg{
				display: inline-block;
				position: absolute;
				font-size: 14px;
				color:#FF734C;
				top:17px;
				left:260px;
				outline: none;
			}
	.qqlogin>a:hover{
		color:#FF734C;
		text-decoration: none;
	}
	.a-msg{
				color: #737389;
				text-align: center;
				font-size: 12px;
				margin-right: 25px;
			}
	.breadcrumb-item>:hover{
		color:#737389;
		text-decoration: none;
	}	


.logo{
	margin: 50px 200px;
	text-align: left
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
		.login_bg{
		width: 1920px;
		height:474px;
		background: url(../../public/img/login_bg.jpg) no-repeat;
		position: relative;
		}
		.login_user{
			width: 360px;
			height: 438px;
			background-color: white;
			position: absolute;
			top:20px;
			right:400px;
			border-radius: 10px;
		}
.login_account{
	width: 180px;
	height: 51px;
	cursor: pointer;
	padding-top: 25px
}
.login_wx{
	width: 180px;
	height: 51px;
	cursor: pointer;
	padding-top: 25px
}
.active{
	color:orange;
	border-bottom:2px solid orange;
}
.ico_wx{
	width: 70px;
	height: 60px;
	position: absolute;
	top: 0px;
	right: 0px;
}
.get-phone{
	text-align: right;
	color:#71797F;
	font-size: 10px;
	padding-right: 20px;
	cursor: pointer;
}
.ico-phone3{
	display: inline-block;
	width: 25px;
	height:22px;
	background: url(../../public/img/pc_icon.png) no-repeat;
	background-size: 40px;
	background-size: 200px ;
	margin-bottom: 5px;
	background-position: 0px 0px;
	position: absolute;
	top:0px;
	right:95px
	}
	.user_phone{
		width:320px;
		height: 40px;
		text-indent: 40px;
		font-size: 10px;
		border:1px solid #E9ECF0;
		outline: none;
	}
	.user_passwrod{
		width: 320px;
		margin-top: 40px;
		height: 40px;
		text-indent: 40px;
		font-size: 10px;
		border:1px solid #E9ECF0;
		outline: none;
	}
	.ico-user-phone{
		display: inline-block;
		width: 25px;
		height:22px;
		background: url(../../public/img/pc_icon.png) no-repeat;
		background-size: 40px;
		background-size: 200px ;
		margin-bottom: 5px;
		background-position:-109px -37px;
		position: absolute;
		top:10px;
		left:28px
		}
		.ico-user-passwrod{
			display: inline-block;
			width: 25px;
			height:22px;
			background: url(../../public/img/pc_icon.png) no-repeat;
			background-size: 40px;
			background-size: 200px ;
			margin-bottom: 5px;
			background-position:-57px -37px;
			position: absolute;
			top:87px;
			left:28px
			}
.user_login{
	width: 300px;
	height: 40px;
	background-color:#FF734C;
	color:white;
	margin-top: 50px;
	border-radius: 30px;
}
.text_small{
	font-size: 13px;
	color: #71797F;
	cursor: pointer;
	margin-top: 10px;
}
.text_small2{
	font-size: 15px;
	color: #71797F;
	margin-top: 15px;
}
.wx-img{
	width: 200px;
	height: 200px;
	margin-top: 30px;
}
.ico-wen{
	display: inline-block;
	width: 25px;
	height:22px;
	background: url(../../public/img/pc_icon.png) no-repeat;
	background-size: 40px;
	background-size: 200px ;
	margin-bottom: 5px;
	background-position:-81px 5px;
	position: absolute;
	bottom:-2px;
	right: 95px;
	cursor: pointer;
	}
	.wx-msg{
		width: 180px;
		height: 27px;
		margin:0 auto;
		background-color:#FEC3B3;
		color:#000;
		font-size: 9px;
		border-radius: 10px;
		padding-top: 5px;
		position: absolute;
		bottom:20px;
		left: 90px;
	}
	.msg{
		position: absolute;
		top: 46px;
		left: 20px;
	}
	.upwd_msg{
		position: absolute;
		top:125px;
		left:20px
	}
	.qqlogin{
		height: 50px;
		background-color: #F7F9FA;
		margin-top: 63px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.qq-icon{
		display: inline-block;
		width: 27px;
		height:30px;
		background: url(../../public/img/pc_icon.png) no-repeat;
		background-size: 40px;
		background-size: 200px ;
		margin-bottom: 5px;
		background-position:-34px -109px;
		position: absolute;
		top:15px;
		left:20px;
		cursor: pointer;
		}
		.qq{
			display: block;
			color:#71797F;
			font-size: 14px;
			position: absolute;
			top:19px;
			left:50px;
			cursor: pointer;
		}
		.zfb-icon{
			display: inline-block;
			width: 27px;
			height:30px;
			background: url(../../public/img/pc_icon.png) no-repeat;
			background-size: 40px;
			background-size: 200px ;
			margin-bottom: 5px;
			background-position:-70px -109px;
			position: absolute;
			top:15px;
			left:110px;
			cursor: pointer;
			}
			.zfb{
				display: block;
				color:#71797F;
				font-size: 14px;
				position: absolute;
				top:19px;
				left:137px;
				cursor: pointer;
			}
</style>


