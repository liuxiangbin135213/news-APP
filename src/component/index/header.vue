<template>
	<!--<main>
		<div id="all">
			<span @click="x()"><img src="../../assets/images/personal-center.png"  id="bj"/></span>
			<span><h1>聚焦头条</h1></span>
			<span><img src="../../assets/images/wxb搜索推广.png"/></span>
			<div id="pf"><ul id='hf'>
				<li><img src="../../assets/images/bj2.jpg" /></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
				<li><img src="../../assets/images/bj2.jpg"/></li>
			
			</ul></div>
		</div>
	</main>-->
</template>
<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	main{
		width: 100%;
		overflow: hidden;
		background: #FFFFFF;
		background-size: 100% 1007px;
		z-index: 1;
		
		
	}
	span{
		text-align: center;
		width: 33%;
		height: 50px;
		float: left;
		position: relative;
		
	}
	h1{
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		font-family: "微软雅黑";
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
	#all{
		position: relative;
		height: 100%;
	}
	#pf{
		border: 2px solid red;
		display: none;
		
		
	}
	ul{ 
		width: 100%;
		
		overflow: hidden;
		
	}
	ul li{
		width: 30%;
		float: left;
		
	}
	ul li img{
		width: 100%;
	}
	/*body{
		height: 100%;
		border: 2px solid #6D96D0;
		background-image: url(../../assets/images/bj3.jpg);
		background-size:100%;
	}*/
	

</style>
<script type="text/javascript">
	export default {
		methods:{
			x: function() {
				var obj=document.getElementById('bj');
				var odiv=document.getElementById('pf')
				obj.onclick=function(){
					odiv.style.display="block"
				}
			}
		}
	}
	
	
</script>

