<template>
	<main>
		<div id="all">
			<span class="back" @click="back()"><</span>
			<span><h1>军事</h1></span>
			<span><img src="../../assets/images/wxb搜索推广.png"/></span>
			<!--<div id="pf"><ul id='hf'>
				<li><img src="../../assets/images/bj2.jpg" /></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
			
			</ul></div>-->
		</div>
		<ul>
			<li v-for="v in list">
				<a :href="v.url">
					<img :src="v.pic" />
					<p>{{v.title}}</p>
					<span>{{v.time}}</span>
				</a>

			</li>

		</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:'',
				list:''
			}
		},
		 mounted(){
		
			this.$http.get('military.json').then(function(res){
				this.list=res.body.result.data
				console.log(this.list)
			})
		},
		methods:{
			back:function(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
		text-decoration: none;
		list-style: none;
	}
	.back{
		text-align: center;
		line-height: 50px;
		font-size: 23px;
		font-weight: 600;
		color: #ccc;
	}
	
	main{
		background-color: #758A89;
		width: 100%;
	}
	#all{
		position: relative;
		height: 100%;
	}
	#all span{
		text-align: center;
		width: 33%;
		height: 50px;
		float: left;
		position: relative;
		
	}
	span img{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 20%;
	}
	h1{
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		font-family: "微软雅黑";
	}
	
	
	
	
	ul li img{
		width: 100%;
		height: 150px;
	}
	li{
		background-color: #FFFFFF;
		margin-bottom: 10px;
	}
</style>