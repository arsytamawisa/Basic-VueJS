var app = new Vue({
	el: '#app',
	data: {
		message: '',
		textarea: '',
		radio: '',
		select: '',
		checkbox: [],
	},

	computed: {
		mCheckbox: function() {
			return this.checkbox.toString()
		}
	}
})
