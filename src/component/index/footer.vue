<template>
	<main>
		<ul id="oul">
			<li>
				<router-link to="/home">
					<div>
						<img src="../../assets/images/hot.png"/>
						<h1>首页</h1>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/news">
					<div>
						<img src="../../assets/images/hot.png"/>
						<h1>时事</h1>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/video">
					<div>
						<img src="../../assets/images/play1.png"/>
						<h1>视频</h1>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<div>
						<img src="../../assets/images/account.png"/>
						<h1>我的</h1>
					</div>
				</router-link>
			</li>
		</ul>
		
	</main>
</template>
<style scoped>
	*{
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
	}
	h1{
		text-align: center;
		color: blueviolet;
		font-size: 16px;
		
	}
	ul{
		width: 100%;
		height: 50px;
		background-color: #00E000;
		box-shadow:0px -2px 2px #758A89;
	}
	li{
		float: left;
		list-style: none;
		background-color:#FFFFFF;
		
		text-align: center;
		width: 25%;
	}
	img{
		width: 30%;
		
	}
	main{
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		
		
		
	}
	.aaa{
		background-color:#00E000;
		color: #FFFFFF;
	}
</style>
<script type="text/javascript">
	window.onload = function() {
		var oul=document.getElementById('oul')
		var oli=oul.getElementsByTagName('li')
		for(i=0;i<oli.length;i++){
			oli[i].onclick=function(){
				for(j=0;j<oli.length;j++){
					oli[j].className=''
				}
				this.className='aaa'
				
			}
		}
		
	}
	
</script>

