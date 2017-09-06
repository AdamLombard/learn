Vue.component('component-name', {
  template: "<p> I'm a Vue component!</p>"
});

var vm = new Vue({
  el: "#app",

  data: {
    question: '',
    answer: 'I cannot answer until you ask!',
    imgSrc: ''
  },

  watch: {
    question: function (newQuestion) {
      this.answer = 'Waiting for the typing to stop...',
      this.getAnswer()
    }
  },

  methods: {
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = "I don't see a question mark...";
          return
        }
        this.answer = 'Thinking...'
        var newVm = this;
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            newVm.answer = '';
            newVm.imgSrc = response.data.image;
          })
          .catch(function (error) {
            newVm.answer = 'Error! ' + error;
          })
      },
      500
    )
  },

  computed: {
  }
});