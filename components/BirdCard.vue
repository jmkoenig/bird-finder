<template>
  <div class="c-BirdCard">
    <h2>{{ bird.comName }}</h2>
    <h3>{{ bird.sciName }}</h3>
    <p>Last seen on {{ bird.obsDt }} at {{ bird.locName }}</p>
    <img :src="image" />
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
  .c-BirdCard {
    max-height: 500px;
    max-width: 25vw;
    border: 5px solid #44A6E8;
    border-radius: 5px;
    padding: 10px;
  }
</style>