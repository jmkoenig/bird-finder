<template>
  <div>
    <NuxtLink :to="{ name: 'index', path: '/'}" class="c-PageState_home">Back</NuxtLink>
    <h1 class="c-PageState_title">{{ stateName }}</h1>
    <div class="c-PageState_container">
      <BirdCard
        v-for="bird in stateBirds"
        :key="bird.speciesCode"
        class="c-PageState_bird" 
        :bird="bird"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import BirdCard from '~/components/BirdCard.vue';
import { states, StateKey } from '~/configs/states';

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
    const birdsWithNoImage = store.getters.getBirdsInState.filter((bird: any) => {
      return !store.getters.getBirdImage(bird.comName);
    });
    await store.dispatch('setBirdImage', {
      birds: birdsWithNoImage.map((bird: any) => {
        return { sciName: bird.sciName, comName: bird.comName };
      })
    });
  }
}
</script>

<style lang="scss">
.c-PageState {
  &_title {
    text-align: center;
  }

  &_container {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 1.5rem;
  }
}
</style>