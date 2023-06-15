<template>
  <div class="c-pageHome">
    <h1 class="c-pageHome_title">US States and Their Birds</h1>
    <h4>Click on any state to view the birds recently observed in that state.</h4>
    <div class="c-pageHome_stateContainer">
      <UsaMapSvg class="c-pageHome_map" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import UsaMapSvg from '~/components/UsaMapSvg.vue';

@Component({
  components: {
    UsaMapSvg
  }
})
export default class PageHome extends Vue {
  get stateCodes () {
      return this.$store.getters.getAllStates;
  }
}
</script>

<style lang="scss">
.c-pageHome {
  text-align: center;

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  &_title {
    margin-bottom: 20px;
  }

  &_map {
    width: 90vw;
    height: 70vh; 
  }
}
</style>
