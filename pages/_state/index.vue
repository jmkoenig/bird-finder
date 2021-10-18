<template>
  <div>
    <h1>{{ stateName }}</h1>
    <p>{{ stateObj.code }}</p>
    <p>{{ stateBirds }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class PageState extends Vue {
  stateName = this.$route.params.state;

  get stateObj () {
    return this.$store.getters.getCurrentState(this.stateName);
  }

  get stateBirds () {
    return this.$store.getters.getBirdsInState;
  }

  async asyncData ({ store, route }) {
    console.log('params', route.params);
    await store.dispatch('setStateBirds', route.params.state);
  }
}
</script>

<style lang="scss">

</style>