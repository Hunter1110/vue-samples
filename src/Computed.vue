<template>
  <div id="app">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>

    <p>First Name: "{{ firstName }}"</p>
    <p>Last Name: "{{ lastName }}"</p>
    <input v-model="fullName" @keydown.enter="changeName">
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      firstValue: this.firstName,
      lastValue: this.lastValue
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      set(newValue) {
        var names = newValue.split(' ');
        this.firstValue = names[0];
        this.lastValue = names[1];
      }
       
    }
  },
  methods: {
    changeName() {
      
      this.$emit('update:firstName', this.firstValue);
      this.$emit('update:lastName', this.lastValue);
    }
  }
}
</script>

