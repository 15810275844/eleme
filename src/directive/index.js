import Vue from 'vue'

Vue.directive('focus', {
  inserted: function (el) {
    setTimeout(() => {
      el.focus();
    }, 300)
  }
});

Vue.directive('upward', {
    bind: function (el) {
        var wTop = document.documentElement.clientHeight;
        window.onscroll = function (){
            var scrollTop = document.body.scrollTop;
            if(scrollTop>wTop){
                el.style.display = 'block';
            }else{
                el.style.display = 'none';
            };
        };
    }
});

