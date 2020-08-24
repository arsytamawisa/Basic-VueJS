var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		message2: 'Hello World!',
		show: 'ready',
		int1: 2,
		int2: 4,
		int3: 5,
		int4: 7,
		resultSum: null,
		km: 0,
		m: 0,
	},

	computed: {
		sumComputed: function () {
			return this.int1 + this.int2
		}
	},

	methods: {
		sumMethod: function (int5) {
			return this.resultSum = this.int3 + this.int4 + int5
		},
	},

	watch: {
		km: function (val) {
			this.km = val
			this.m  = val * 1000
		},
		m: function (val) {
			this.km = val / 1000
			this.m  = val
		}
	}
})
