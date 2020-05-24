<template>
  <div id="search-form">
    <form @submit.prevent="handleSubmit">
      <label>County</label>
      <select v-model="selected">
        <option disabled v-bind:value="{}">Choose County</option>
        <option v-for="option in counties" v-bind:key="option.county">
          {{ option.county }} 
        </option>
      </select>
      <button>Search</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'search-form',
    props: {
      counties: Array
    },
    methods: {
      handleSubmit() {
        //console.log(this.selected);
        this.$emit('get:salesdetails', this.selected)
      }
    }
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
</style>