var nav = new Vue({
	el: '#nav',
	data: {
		active: 'home'
	},
	methods: {
		makeActive: function(item){
			this.active = item;
		}
	}
});