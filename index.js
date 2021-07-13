/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from Javascript",
      name: "Roman",
      showInfo: false,
      fruits: ["apple", "banana", "orange"],
      newFruit: "",
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
    }
  }});  