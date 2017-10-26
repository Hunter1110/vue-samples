import Vue from 'vue';
import TemplateSyntax from './TemplateSyntax.vue';
window.onload = () => {
  document.title = 'Template Syntax Sample';

  const el = document.createElement('div');
  el.id = 'app-template';
  document.body.appendChild(el);

  window.app = new Vue({
    el: '#app-template',
    template: '<TemplateSyntax :message="message" :rawHtml="rawHtml" :dynamicId="dynamicId" :isButtonDisabled="buttonEnabled" :seen="seen" :url="url" />',
    components: { TemplateSyntax },
    data: {
      message: 'Hello Vue!',
      rawHtml: '<h1>This is Inner HTML</h1>',
      dynamicId: 'dynamicId',
      buttonEnabled: true,
      seen: true,
      url: 'http://www.baidu.com'
    }
  });
};