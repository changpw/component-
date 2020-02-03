
Vue.component('input-text',{
	props:{
		placeHolderValue:{
			type:String,
			default:'please input a value'
		}
	},
	template:`<input class='inputClass' type="text" :placeholder="placeHolderValue" @input="sendValue($event)"></input>`,
	
	methods:{
		sendValue:function(e){
			// console.table(e.target.value)
			this.$emit('get-value',e)
		}
	}
})
