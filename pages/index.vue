<template>
  <div class="c-PageHome">
    <h1 class="c-PageHome_title">US States and Their Birds</h1>
    <h4>Click on any state to view the birds recently observed in that state.</h4>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class PageHome extends Vue {
  get stateCodes () {
      return this.$store.getters.getAllStates;
  }
}
</script>

<style lang="scss">
.c-PageHome {
  text-align: center;

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  &_title {
    margin-bottom: 20px;
  }

  &_stateContainer {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
  }

  &_stateButton {
    font-size: 20px;
    text-align: center;
    background-color: #28282F;
    border-radius: 5px;
    border: 5px solid #E4B35B;
    padding: 20px;

    &:hover {
      background-color: #D26D37;
      color: #28282F;
    }
  }
}
</style>
