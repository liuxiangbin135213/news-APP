<template>
	<main>
		<div id="all">
			<span @click="x()"><img src="../../assets/images/personal-center.png"  id="bj"/></span>
			<span><h1>视频</h1></span>
			<span><img src="../../assets/images/wxb搜索推广.png"/></span>
			
		</div>
		<br />
		
		<ul>
			<li v-for="v in list">
				<a :href="v.url">
					<img :src="v.pic"/>
					<p>{{v.title}}</p>
				</a>
			</li>

		</ul>
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

			this.$http.get('kk.json').then(function(res) {
				this.list = res.body.result.data
				console.log(this.list)
			})
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	main{
		
		width: 100%;
	}
	
	#all span{
		text-align: center;
		width: 33%;
		height: 50px;
		float: left;
		position: relative;
		
	}
	#all span img{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 20%;
	}
	#all span h1{
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		font-family: "微软雅黑";
	}
	ul{
		position: relative;
	
		width: 100%;
	}
	ul li{
		width: 100%;
		background: rgba(0, 0, 0, 0.1);
		margin-bottom: 10px;
	}
	ul li:nth-of-type(1){
		margin-top: 50px;
	}
	ul li img{
		width: 100%;
		height: 230px;
	}
	ul li p{
		background: #;
	}
</style>