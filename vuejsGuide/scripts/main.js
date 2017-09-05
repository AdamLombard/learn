Vue.component('component-name', {
  template: "<p> I'm a Vue component!"
});

var vm = new Vue({
  el: "#app",

  data: {
    message: 'Hello from Vue!'
  }
});