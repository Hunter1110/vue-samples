import Vue from 'vue';
import Computed from './Computed.vue';

window.onload = () => {
  document.title = 'Computed Properties Sample';
  
  const el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);

  window.app = new Vue({
    el: '#app',
    data: {
      message: 'Hello',
      firstName: 'Monkey',
      lastName: 'Luffy'
    },
    template: '<Computed :message="message" :firstName.sync="firstName" :lastName.sync="lastName" />',
    components: { Computed }
  });
};