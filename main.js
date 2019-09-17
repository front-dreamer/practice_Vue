Vue.component('my-component', {
  template: '<div>{{ message }}<br>{{ second }}</div>',
  data: function(){
    return{
      message: 'MyTemplate',
      second: 'second'
    }
  }
})

new Vue({
  el: '#app',
  data: {
    message: 'Hello, World!'
  }
})
