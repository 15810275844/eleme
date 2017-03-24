import Vue from 'vue'

Vue.directive('focus', {
	inserted: function(el) {
		setTimeout(()=>{
			el.focus();
		}, 300)
	}
});