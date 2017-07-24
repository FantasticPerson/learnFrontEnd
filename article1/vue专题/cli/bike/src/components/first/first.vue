<template>
	<div class="first">
		<ul>
			<detaile v-for="(item,index) in detas" :datass="item" :key="index"></detaile>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import detaile from '../detaile/detaile'
	export default{
		data(){
			return {
				datas:{}
			}
		},
		created(){
			this.$http.get('/api/article').then(function(res){
				res = res.body;
				if(res.errno === 0){
					this.datas = res.data;
					console.log(this.datas);
				}	
			});
		},
		components:{
			detaile
		}
	}
</script>

<style type="text/css" scoped>
	
</style>