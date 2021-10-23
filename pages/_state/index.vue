<template>
  <div>
    <h1>{{ stateName }}</h1>
    <div class="c-PageState_container">
    <BirdCard
      v-for="birdObj in stateBirds"
      :key="birdObj.speciesCode"
      class="c-PageState_bird" 
      :bird="birdObj"
      :imageXml="$store.getters.getBirdImage(birdObj.sciName)"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BirdCard from '~/components/BirdCard.vue';

@Component({
  components: {
    BirdCard
  }
})
export default class PageState extends Vue {
  stateName = this.$route.params.state;

  get stateObj () {
    return this.$store.getters.getCurrentState(this.stateName);
  }

  get stateBirds () {
    return this.$store.getters.getBirdsInState;
  }

  async asyncData ({ store, route }: { [key: string]: any}) {
    await store.dispatch('setStateBirds', route.params.state);
    // this is super slow if store is empty
    await Promise.all(store.getters.getBirdsInState.map((bird: any) => {
      // only request image if species not stored yet
      if (!store.getters.getBirdImage(bird.sciName)) {
        return store.dispatch('setBirdImage', {
          sciName: bird.sciName,
          commonName: bird.comName
        });
      } else {
        return null;
      }
    }));
  }
}
</script>

<style lang="scss">
.c-PageState {
  &_container {
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
  }
  &_bird {

  }
}
</style>