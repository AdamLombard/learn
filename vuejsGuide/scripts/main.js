Vue.component('component-name', {
  template: "<p> I'm a Vue component!</p>"
});

var vm = new Vue({
  el: "#app",

  data: {
    message: 'Hello from Vue!'
  },

  computed: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('');
    }
  }
});