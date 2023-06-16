<template>
  <div class="c-birdCard" ref="birdCard">
    <div class="c-birdCard_header">
      <h2>{{ bird.comName }}</h2>
      <h3 class="c-birdCard_scientific">{{ bird.sciName }}</h3>
    </div>
    <p>Last seen on {{ bird.obsDt }} at {{ bird.locName }}</p>
    <div class="c-birdCard_imageContainer">
      <img class="c-birdCard_image" :src="load ? image.url_n : ''" loading="lazy" />
    </div>
    <div class="c-birdCard_imageCredit">
      <a :href="imageOriginalUrl">Photo</a> by <a :href="imageOwnerUrl">{{ image.ownername }}</a> is licensed under <a :href="licenseUrl">CC BY 4.0</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class BirdCard extends Vue {
  public observer: IntersectionObserver|null = null;
  public load: boolean = false;

  @Prop({ default: null})
  readonly bird!: { [key: string]: string | string[] };

  @Prop({ default: null })
  readonly image!: any;

  $refs!: {
    birdCard: HTMLElement
  }

  get imageOwnerUrl () {
    return process.env.FLICKR_OWNER_URL?.replace('{ownerId}', this.image.owner);
  }

  get imageOriginalUrl () {
    return process.env.FLICKR_ORIGINAL_URL?.replace('{ownerId}', this.image.owner).replace('{photoId}', this.image.id);
  }

  get licenseUrl () {
    return process.env.CC_ATTRIBUTION_LICENSE;
  }

  loadImage (entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.load = true;
      }
    });
  }

  mounted () {
    if (this.$refs?.birdCard) {
      // Load image when it's close to the bottom of the viewport
      this.observer = new IntersectionObserver(this.loadImage, {
        rootMargin: '0px 0px 25%', // extend bottom margin by 25% of viewport
        threshold: 1
      });

      this.observer.observe(this.$refs.birdCard);
    }
  }

  beforeDestroy () {
    this.observer?.disconnect();
  }
}
</script>

<style lang="scss">
.c-birdCard {
  max-height: 500px;
  max-width: 25vw;
  background-color: #eac6ab;
  color: #28282F;
  border-radius: 5px;
  padding: 25px;
  box-shadow: 5px 5px 5px gray;
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
    min-height: 150px;
  }

  &_image {
    max-width: 100%;
    max-height: 100%;
  }

  &_imageCredit {
    font-size: 12px;
  }
}
</style>