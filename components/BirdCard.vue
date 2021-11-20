<template>
  <div class="c-birdCard">
    <h2>{{ bird.comName }}</h2>
    <h3 class="c-birdCard_scientific">{{ bird.sciName }}</h3>
    <p>Last seen on {{ bird.obsDt }} at {{ bird.locName }}</p>
    <div class="c-birdCard_imageContainer">
      <img class="c-birdCard_image" :src="image" />
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
    readonly imageXml!: string;

    get image () {
      if (typeof window !== 'undefined') {
        const $xml = $(this.imageXml) || '';
        const serverId = $xml.find('photo').eq(0).attr('server');
        const imageId = $xml.find('photo').eq(0).attr('id');
        const secret = $xml.find('photo').eq(0).attr('secret');
        const sizeSuffix = 'n';
        return `https://live.staticflickr.com/${serverId}/${imageId}_${secret}_${sizeSuffix}.jpg`;
      }
      return '';
    }

    // public image: string = '';

    // created () {
    //   if (typeof window !== 'undefined') {
    //     const $xml = $(this.imageXml) || '';
    //     const serverId = $xml.find('photo').eq(0).attr('server');
    //     const imageId = $xml.find('photo').eq(0).attr('id');
    //     const secret = $xml.find('photo').eq(0).attr('secret');
    //     const sizeSuffix = 'n';
    //     this.image = `https://live.staticflickr.com/${serverId}/${imageId}_${secret}_${sizeSuffix}.jpg`;
    //   }
    // }
  }
</script>

<style lang="scss">
  .c-birdCard {
    max-height: 500px;
    max-width: 25vw;
    background-color: #44A6E8;
    color: #28282F;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 10px 5px 20px #28282F;
    display: flex;
    flex-direction: column;

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
      height: 100%;
      width: 100%;
      // object-fit: cover;
    }
  }
</style>