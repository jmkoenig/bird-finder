<template>
  <div>
    <NuxtLink :to="{ name: 'index', path: '/'}" class="c-PageState_home">Back</NuxtLink>
    <h1 class="c-PageState_title">{{ stateName }}</h1>
    <div class="c-PageState_container">
    <BirdCard
      v-for="birdObj in stateBirds"
      :key="birdObj.speciesCode"
      class="c-PageState_bird" 
      :bird="birdObj"
      :image="$store.getters.getBirdImage(birdObj.sciName)"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import BirdCard from '~/components/BirdCard.vue';
import { states, StateKey, IState } from '~/configs/states';

@Component({
  components: {
    BirdCard
  }
})
export default class PageState extends Vue {
  get stateObj () {
    return this.$store.getters.getCurrentState(this.stateName);
  }

  get stateBirds () {
    return this.$store.getters.getBirdsInState;
  }

  get stateName (): string {
    return states[this.$route.params.state as StateKey].prettyName;
  }

  async asyncData ({ store, route }: { [key: string]: any}) {
    let state = states[route.params.state as StateKey].prettyName;
    await store.dispatch('setStateBirds', state);
    // TODO: this is super slow if store is empty
    // Ajax cards below the fold?
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
  &_home {
    
  }

  &_title {
    text-align: center;
  }

  &_container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 1.5rem;
  }
  &_bird {

  }
}
</style>