<template>
  <div class="c-BirdCard">
    <img />
    <h2>Common Name</h2>
    <h5>Scientific Name</h5>
    <p>Short desc</p>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class BirdCard extends Vue {

  }
</script>

<style lang="scss">
  .c-BirdCard {
    max-height: 500px;
  }
</style>