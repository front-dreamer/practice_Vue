var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue.js!',
    list: ['사과','망고','딸기'],
    show: false,
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
      if(this.show == true) {
        this.show = false;
      }
      else {
        this.show = true;
      }
    }
  }
})
