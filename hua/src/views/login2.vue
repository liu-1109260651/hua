<template>
  <div  id="apc" >
			<ul>
				<li>
					<a class="text_color" href="">
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
					<a class="text_color orange-color" style="display: inline-block;

padding-right: 10px;" href=""><span>你好，请登录</span></a>
					<a class="text_color orange-color" style="display: inline-block;" href=""><span>注册</span></a>
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

</template>

