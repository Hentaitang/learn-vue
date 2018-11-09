<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <h2>Essential Links</h2>
    <h3>{{this.$route.params.worldmsg}}</h3>
    <router-link :to="{name: 'HelloEarth', params: {earthmsg: '我爱地球'}}">HelloEarth</router-link>
    <router-link :to="{name: 'HelloWorld', params: {worldmsg: '我爱世界'}}">HelloWorld</router-link>
    <router-link to="/">index</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
