<template>
	<main>
		<div id="all">
			<ul>
				<li><img src="../../assets/images/personal-center.png" id="bj" /></li>
				<li>
					<h1>聚焦头条</h1></li>
					
				<li><router-link to="/search"><img src="../../assets/images/wxb搜索推广.png" /></router-link></li>
			</ul>
			<!--<span @click="x()"><img src="../../assets/images/personal-center.png"  id="bj"/></span>
			<span><h1>聚焦头条</h1></span>
			<span><img src="../../assets/images/wxb搜索推广.png"/></span>-->
			<!--<div class="qq"></div>-->
		</div>

		<!--<div id="top">
			
		</div>-->
		<mt-swipe :auto="4000">
			<mt-swipe-item><img src="../../assets/images/lb1.jpg" />
				<p>hahahahahaah</p>
			</mt-swipe-item>
			<mt-swipe-item><img src="../../assets/images/lb3.jpg" />
				<p>fhdthdrtyrdy</p>
			</mt-swipe-item>
			<mt-swipe-item><img src="../../assets/images/tt.jpg" />
				<p>sgthjtyjty</p>
			</mt-swipe-item>
		</mt-swipe>
		<div id="conter-t">
			<ol>
				<li>
					<router-link to="/military">
						<img src="../../assets/images/js.png" />
						<p>军事</p>
					</router-link>

				</li>
				<li>
					<router-link to="/sports">
						<img src="../../assets/images/tiyu.png" />
						<p>体育</p>
					</router-link>
				</li>
				<li>
					<router-link to="/education">
						<img src="../../assets/images/jiaoyu.png" />
						<p>教育</p>
					</router-link>
				</li>
				<li>
					<router-link to="/entertainment">
						<img src="../../assets/images/yule.png" />
						<p>娱乐</p>
					</router-link>
				</li>
			</ol>
		</div>
		<div id="conter-c">
			<h3>头条新闻</h3>
			<ul>
				<li v-for="v in list">
					<a :href="v.url">
					<img :src="v.pic" />
					<p>{{v.title}}</p>
					<span>{{v.time}}</span>
				</a>

				</li>

			</ul>

		</div>
		<div id="bottom">
			<h3>视频新闻</h3>
		</div>

	</main>
</template>

<script>
	export default {
		data() {
			return {
				msg: '',
				list: ''
			}
		},
		mounted() {

			this.$http.get('shiyan.json').then(function(res) {
				this.list = res.body.result.data
				console.log(this.list)
			})
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	#all ul {
		height: 50px;
	}
	
	#all ul li {
		width: 33%;
		height: 50px;
		float: left;
		position: relative;
	}
	
	#all ul li img {
		width: 20%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	
	#all ul li h1 {
		text-align: center;
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		font-family: "微软雅黑";
	}
	
	.qq {
		height: 600px;
		background-color: #6D96D0;
	}
	
	
	main {
		width: 100%;
	}
	
	.mint-swipe {
		height: 205px;
	}
	
	.mint-swipe p {
		z-index: 9999;
		position: absolute;
		color: red;
		bottom: 0;
	}
	
	.mt-swipe {
		width: 100% !important;
	}
	
	#conter-t {
		overflow: hidden;
		margin-top: 25px;
	}
	
	#conter-t ol {
		width: 100%;
	}
	
	#conter-t ol li {
		text-align: center;
		float: left;
		width: 25%;
	}
	
	#conter-t ol li img {
		width: 50%;
	}
	
	#conter-t ol li p {
		text-align: center;
	}
	
	#conter-c {
		overflow: hidden;
	}
	
	#conter-c li {
		width: 100%;
		background: rgba(0, 0, 0, 0.1);
		height: 60px;
		margin-top: 10px;
		position: relative;
	}
	
	#conter-c img {
		width: 25%;
		float: left;
		height: 60px;
	}
	
	#conter-c li p {
		width: 70%;
		float: right;
		padding: 5px;
	}
	
	#conter-c li span {
		position: absolute;
		bottom: 0px;
		right: 140px;
		color: darkviolet;
	}
	
	#conter-c h3 {
		text-align: center;
		margin: 15px 0 5px 0;
		padding: 10px 0;
		background-image: url(../../assets/images/tt.jpg);
	}
	
	#bottom {
		margin-bottom: 100px;
	}
	
	#bottom h3 {
		text-align: center;
		margin: 15px 0 5px 0;
		padding: 10px 0;
		background-image: url(../../assets/images/sp.jpg);
	}
</style>