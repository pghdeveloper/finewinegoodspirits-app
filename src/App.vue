<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <search-form @get:salesdetails="getSalesDetails"  :counties="counties" msg="Welcome to Your Vue.js App"/>
    <h2>Sales Views</h2>
    <LineChart v-if="loaded" :data="salesViews" :styles="styles"/>
    <div v-if="loadMessage">No Data for County</div>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import LineChart from "./components/LineChart.vue";
import { RepositoryFactory } from './repositories/RepositoryFactory';
const GetRepository = RepositoryFactory.get('winespirits');

export default {
  name: 'App',
  components: {
    SearchForm,
    LineChart
  },
  data() {
    return {
      counties: [],
      loaded: false,
      load: false,
      salesViews: null,
      styles: {
        width: "650px",
        height: "400px",
        position: "relative",
        left: "450px"
      }
    }
  },

  computed: {
    loadMessage: function () {
      return this.load && !this.loaded;
    }
  },

  mounted() {
    this.getCounties()
  },

  methods: {
    async getCounties() {
    try {
      const {data} = await GetRepository.getCounties();
      this.counties = data;
    } catch (error) {
      console.error(error);
    }
   },
   async getSalesDetails(salesdetails) {
     try {
      this.load = true;
      const {data} = await GetRepository.getSalesDetails(salesdetails);
      if (data.length)
      {
        console.log('Yes');
        this.salesViews = data;
        this.loaded = true;
      }
      else
      {
        console.log('No');
        this.salesViews = [];
        this.loaded = false;
      }
      console.log(data);
     } catch (error) {
       console.error(error)
       this.salesViews = [];
       this.loaded = false;
     }
   }
  } 
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
