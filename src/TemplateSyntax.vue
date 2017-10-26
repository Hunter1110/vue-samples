<template>
  <div id="app-template">
    <span>{{ message }}</span>
    <span v-once>{{ message }}</span>

    <div v-html="rawHtml"></div>
    
    <div v-bind:id="dynamicId"></div>
    <button v-bind:disabled="isButtonDisabled"></button>

    <div v-bind:id="'list-' + id"></div>
    <p v-if="seen">现在你看到我了</p>

    <a v-bind:href="url">...</a>
    <a v-on:click="doSomething">Do Something</a>

  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    rawHtml: {
      type: String,
      required: true
    },
    dynamicId: {
      type: String,
      required: true
    },
    isButtonDisabled: {
      type: Boolean,
      required: true
    },
    seen: {
      type: Boolean,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: 100
    };
  },
  methods: {
    doSomething() {
      console.log('Do something...')
    }
  }
}
</script>


