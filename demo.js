		window.onload=function(){
		const vm = new Vue({
			el:"#app",
			data:{
				msg:'message',
				placeHolder:"please input your name"
			},
			methods:{
				handleValue:function(e){
					console.log(e.target.value)
					// this.$data.msg=e.target.value
					this.msg=e.target.value
					console.log(this.$data.msg)
						
				},
				checkNum:function(){
					this.msg='1'
				}
			}
		
		})	
	}
	

