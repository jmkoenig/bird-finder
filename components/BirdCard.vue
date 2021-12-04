<template>
  <div class="c-birdCard">
    <div class="c-birdCard_header">
      <h2>{{ bird.comName }}</h2>
      <h3 class="c-birdCard_scientific">{{ bird.sciName }}</h3>
    </div>
    <p>Last seen on {{ bird.obsDt }} at {{ bird.locName }}</p>
    <div class="c-birdCard_imageContainer">
      <img class="c-birdCard_image" :src="imageUrl" />
    </div>
    <!-- TODO: add credit for images -->
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator';
  import $ from 'jquery';

  @Component
  export default class BirdCard extends Vue {
    @Prop({ default: null})
    readonly bird!: { [key: string]: string | string[] };

    @Prop({ default: null })
    readonly image!: Object;

    get imageUrl () {
      const serverId = this.image.server;
      const imageId = this.image.id;
      const secret = this.image.secret;
      const sizeSuffix = 'n';
      return `https://live.staticflickr.com/${serverId}/${imageId}_${secret}_${sizeSuffix}.jpg`;
    }
  }
</script>

<style lang="scss">
  .c-birdCard {
    max-height: 500px;
    max-width: 25vw;
    background-color: #44A6E8;
    color: #28282F;
    border-radius: 5px;
    padding: 25px;
    box-shadow: 10px 5px 20px #28282F;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2, h3 {
      margin: 0;
    }

    &_scientific {
      font-style: italic;
    }

    &_imageContainer {
      flex-grow: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &_image {
      max-width: 100%;
      max-height: 100%;
      // object-fit: cover;
    }
  }
</style>