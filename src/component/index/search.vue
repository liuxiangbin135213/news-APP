<template>
	<main><h1>聚焦搜索</h1>
		<div id="box">
			<input type="text" v-model="msg" @keyup="get($event)" @keydown.down="changedown" @keydown.up.prevent="changeup"/>
			<span @click="get">点击搜索</span>
			<ul>
				<li v-for="(v,i) in list" :class="{lime:i==current}">{{v}}</li>
			</ul>
		</div>
	</main>
</template>

<script>
	
		export default {
			data(){
				return{
					msg:'',
					list:"",
					current:-1
				}
				},
				methods:{

					get:function(e){
						if(e.keyCode==38||e.keyCode==40){
							return false;
						}
						if(e.keyCode==17){
							window.open("https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd="+this.list[this.current]+"")
						}
							
					
						this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
							params:{
								wd:this.msg
							},jsonp:'cb'
						}).then(function(res){
							console.log(res)	
							console.log(res.body.s)	
							this.list=res.body.s
							
						})
					},
					changedown:function(){
//						this.msg=this.list[this.current]
						this.current++;
						if(this.current>=this.list.length){
							this.current=0;
						}
						this.msg=this.list[this.current]
						
					},
					changeup:function(){
						this.current--;
						if(this.current<=-1){
							this.current=this.list.length-1;
						}
						this.msg=this.list[this.current]
						
					}
				}
		}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		
	}
	main{
		height: 700px;
		background-image: url(../../assets/images/tt.jpg) ;
	}
	h1{
		background: rgba(0, 0, 0, 0.1);
		text-align: center;
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		font-family: "微软雅黑";
	}
	.lime{
				background: #999999;
			}
	#box{
		position: relative;
		top: 50px;
		height: 500px;
		background-color: #F2DD8E;
		
		
	}
	input{
		position: absolute;
		top: 0;
		width: 79%;
		border: 1px solid #758A89;
		height: 30px;
	}
	span{
		position: absolute;
		top: 0;
		right: 0;
		display:inline-block ;
		border: 1px solid #6D96D0;
		width: 20%;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background-color: #9C7753;
		color: yellow;
	}
	ul{
		position: absolute;
		top: 50px;
	}
	
</style>