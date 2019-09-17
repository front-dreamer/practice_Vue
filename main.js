Vue.component('my-component',{
  template: `
  <div>
    <p>My Template</p>
    <input v-model="message"></input>
    <my-another-component :val="message"></my-another-component>
  </div>
  `,
  data:()=>{
    return{
      query: 'Yeah',
      message: ''
    }
  }
})

Vue.component('my-another-component',{
  template: `
  <div>
    <p>{{ val }}</p>
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
  `,
  data: ()=>{
    return{
      list: ['one','two','three','four','five']
    }
  },
  props: ['val']
})

new Vue({
  el: '#app',
  data: {
    message: 'Hello, World!'
  }
})
