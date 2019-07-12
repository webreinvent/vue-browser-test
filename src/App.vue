<template>
  <div id="app">
    

    <h1>Vue Browser Test</h1>

    <button @click="fetch">Make Ajax Request</button>

    <h4>Output</h4>
    {{output}}

  </div>
</template>

<script>

  import axios from 'axios'
export default {
  name: 'app',
  components: {

  },
  data()
  {
    let obj = {
      inputs: {
        country: ''
      },
      api: 'https://openexchangerates.org/api/currencies.json',
      output: null,
    };

    return obj;
  },
  methods:{

    //-----------------------------------------------------------

    //---------------------------------------------------------------------
    fetch: function () {
        var url = this.api+this.inputs.country;
        var params = {};
        this.ajax(url, params, this.fetchAfter);
    },
    //---------------------------------------------------------------------
    fetchAfter: function (data) {

      console.log(data);
      this.output = data;

    },
    //---------------------------------------------------------------------
    ajax: function(url, params, callback)
    {

      axios.post(url, params)
              .then(response => {
                callback(response.data)
              }).catch(error => {
        console.log(error);
      });

    },
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
