var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue.js!',
    list: ['사과','망고','딸기'],
    show: false,
    isFucked: false,
    messageColor:'black',
    bgcolor:'white',
    radius: 50,
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
      if(this.show == true) {
        this.show = false;
        this.isFucked = false;
        this.bgcolor = 'white';
        this.messageColor = 'black';
      }
      else {
        this.show = true;
        this.isFucked = true;
        this.bgcolor = 'red';
        this.messageColor = 'blue';
      }
    }
  }
})
