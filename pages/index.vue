<template>
  <div class="c-PageHome">
    <!-- <p>{{ taxonomy }}</p> -->
    <!-- <p>{{ stateCodes }}</p> -->
    <!-- <p>{{ birdsAL }}</p>
    <p>{{ flickrImage }}</p> -->
    <h1>US States and Their Birds</h1>
    <p>Click on any state to view the birds recently observed in that state.</p>
    <div class="c-PageHome_stateContainer">
      <NuxtLink
        v-for="state in stateCodes"
        :key="state.code"
        :to="{ name: 'state', path: state.name, params: { state: state.name } }"
      >
        <div class="c-PageHome_stateButton">
          {{ state.name }}
        </div>
      </NuxtLink>
    </div>
    <p>{{ flickrNotice }}</p>
    <p>{{ test }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    flickrNotice () {
      return process.env.FLICKR_NOTICE;
    },

    stateCodes () {
      return this.$store.getters.getAllStates;
    },

    test () {
      if (process.server) {
        console.log('hello from server');
      } else {
        console.log('hello from client');
      }
      return 'hello';
    }
  },

  async asyncData ({ app }) {
      const taxonomy = await app.$ebirdAPI.$get('/ref/taxonomy/ebird?species=thagul,kumgul1&fmt=json');
      const birdsAL = await app.$ebirdAPI.$get('/product/spplist/US-AL');
      // console.log(birdsAL);
      const flickrImage = await app.$flickrAPI.$get('/rest/?method=flickr.photos.search&tags=Larusglaucoidesthayeri&format=json')
      return { taxonomy, birdsAL, flickrImage };
    }
})
</script>

<style lang="scss">
.c-PageHome {
  // font-family: ;
  text-align: center;

  a {
    text-decoration: none;
    color: darkslateblue;
  }

  &_stateContainer {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
  }

  &_stateButton {
    font-size: 20px;
    text-align: center;
    background-color: lightgreen;
    border-radius: 5px;
    border: 2px solid black;
    padding: 20px;

    &:hover {
      background-color: darkslateblue;
      color: lightgreen;
    }
  }
}
</style>
