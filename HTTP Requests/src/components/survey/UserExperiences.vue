<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences()">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult,
  },
  data () {
    return{
      results: []
    }
  },

  methods: {
    loadExperiences(){
      axios.get('https://vue-http-demo-2ce63-default-rtdb.firebaseio.com/surveys.json').then((response) =>{
        const results =[];
        for (const id in response){
          console.log( id +
          response[id].name +
          response[id].rating);

          results.push({ id: id, 
          name: response[id].name,
           rating: response[id].rating})
        }
      this.results = results;
      });
    }

  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>