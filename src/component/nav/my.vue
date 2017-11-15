<template>
	<main>

		<div id="all">
			<span @click="x()"><img src="../../assets/images/personal-center.png"  id="bj"/></span>
			<span><h1>个人</h1></span>
			<span><img src="../../assets/images/wxb搜索推广.png"/></span>

		</div>

		<div id="top">
			<img src="../../assets/images/dl.jpg" id="bj" />
			<img src="../../assets/images/ren.png" id="ren" />
			<div id="top-bottom">

				<mt-button @click.native="denglule" name='denglu'>登录</mt-button>
				<mt-popup v-model="popupVisible1" position="">
					<div id="denglu">
						<ul>
							<li>
								<h1>登录</h1></li>
							<li><label for="yonghu">用户名：</label>
								<input type="text" id="yonghu" /><br />
							</li>
							<li>
								<label for="mima">密&nbsp;&nbsp;&nbsp;码： </label>
								<input type="text" id="mima" />
							</li>
							<span @click="hot">确定</span>

						</ul>

					</div>
				</mt-popup>

				<mt-button @click.native="handleClick" name="zhuce">注册</mt-button>
				<mt-popup v-model="popupVisible" position="">
					<div id="zhuce">
						<ul>
							<li>
								<h1>注册</h1></li>
							<li><label for="yonghu">用户名：</label>
								<input type="text" id="yonghu" /><br />
							</li>
							<li>
								<label for="mima">密&nbsp;&nbsp;&nbsp;码： </label>
								<input type="text" id="mima" />
							</li>
							<span @click="get">确定</span>

						</ul>

					</div>
				</mt-popup>

			</div>

			<!--<span><p>注册</p><p>登录</p></span>-->
		</div>
		<div id="bottom">
			<ul>
				<li @click="get1"><img src="../../assets/images/sc.png" />
					<p>我的收藏</p>
					<img src="../../assets/images/yjt.png" />
				</li>
				<li @click="get1">
					<img src="../../assets/images/xx.png" />
					<img src="../../assets/images/yjt.png" />
					<p>消息通知</p>
				</li>
				<li @click="get1"><img src="../../assets/images/sj.png" />
					<img src="../../assets/images/yjt.png" />
					<p>系统设置</p>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				popupVisible: false,
				popupVisible1: false
				
			}
		},
		methods: {
			denglule: function() {
				this.popupVisible1 = true
			},
			handleClick: function() {
				this.popupVisible = true
			},

			hot() {
				this.$toast({
					message: '登录成功！',
					position: 'bottom',
					duration: 500
				});
			},
			get() {
				this.$toast({
					message: '注册成功！',
					position: 'bottom',
					duration: 500
				});
			},
			get1() {
				this.$toast({
					message: '请先登陆！',
					position: 'bottom',
					duration: 1500
				});
			}
			

		}

	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
	
	main {
		width: 100%;
	}
	
	#all span {
		text-align: center;
		width: 33%;
		height: 50px;
		float: left;
		position: relative;
	}
	
	#all span img {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 20%;
	}
	
	#all span h1 {
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		font-family: "微软雅黑";
	}
	
	#top {
		position: relative;
	}
	
	#bj {
		width: 100%;
	}
	
	#ren {
		position: absolute;
		top: 90px;
		left: 37%;
		width: 25%;
	}
	/*#top p {
		float: left;
		margin: 10px 0;
	}
	
	#top p:nth-of-type(1) {
		background: #FFFFFF;
		width: 20%;
		height: 30px;
		text-align: center;
		line-height: 25px;
		border: 1px solid black;
		border-radius: 15%;
		font-family: "微软雅黑";
		color: black;
		float: left;
		margin-left: 25%;
	
	}
	
	#top p:nth-of-type(2) {
		background: #00E000;
		width: 20%;
		height: 30px;
		text-align: center;
		line-height: 25px;
		border: 1px solid #758A89;
		border-radius: 15%;
		font-family: "微软雅黑";
		color: #FFFFFF;
		float: right;
		margin-right: 25%;
	}
	
	#top span {
		display: block;
		width: 100%;
		height: 50px;
		position: absolute;
		bottom: 10px;
		
	}*/
	
	#top-bottom {
		position: absolute;
		bottom: 20px;
		width: 100%;
		text-align: center;
	}
	
	#zhuce {
		position: relative;
		width: 100% !important;
		height: 300px;
		background: #FFFFFF;
	}
	
	#zhuce h1 {
		width: 320px;
		text-align: center;
	}
	
	#zhuce li {
		list-style: none;
		margin: 20px 0;
	}
	
	#zhuce label {
		font-size: 20px;
		font-family: "微软雅黑";
	}
	
	#zhuce input {
		height: 30px;
		width: 200px;
		border: 2px solid #758A89;
	}
	
	#zhuce span {
		border: 1px solid #6D96D0;
		background: #00E000;
		font-family: "微软雅黑";
		display: block;
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 15%;
		position: absolute;
		bottom: 20px;
		right: 10px;
	}
	
	#denglu {
		position: relative;
		width: 100% !important;
		height: 300px;
		background: #FFFFFF;
	}
	
	#denglu h1 {
		width: 320px;
		text-align: center;
	}
	
	#denglu li {
		list-style: none;
		margin: 20px 0;
	}
	
	#denglu label {
		font-size: 20px;
		font-family: "微软雅黑";
	}
	
	#denglu input {
		height: 30px;
		width: 200px;
		border: 2px solid #758A89;
	}
	
	#denglu span {
		border: 1px solid #6D96D0;
		background: #00E000;
		font-family: "微软雅黑";
		display: block;
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 15%;
		position: absolute;
		bottom: 20px;
		right: 10px;
	}
	
	#bottom li {
		width: 100%;
		height: 45px;
		background-color: blanchedalmond;
		border-bottom: 1px solid burlywood;
		border-top: 1px solid burlywood;
		text-align: center;
		margin: 15px 0;
	}
	
	#bottom img {
		float: left;
		width: 10%;
		margin-top: 2px;
	}
	
	#bottom p {
		float: left;
		height: 45px;
		line-height: 45px;
		font-family: "微软雅黑";
		font-weight: 300;
		font-size: 20px;
		margin-left: 10px;
	}
	
	#bottom img:nth-of-type(even) {
		width: 8%;
		margin-top: 8px;
		float: right;
	}
</style>