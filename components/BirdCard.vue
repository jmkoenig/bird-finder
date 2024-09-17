<template>
  <div class="c-birdCard" ref="birdCard">
    <div class="c-birdCard_header">
      <h2>{{ bird.comName }}</h2>
      <h3 class="c-birdCard_scientific">{{ bird.sciName }}</h3>
    </div>
    <p>Last seen on {{ bird.obsDt }} at {{ bird.locName }}</p>
    <div class="c-birdCard_imageContainer">
      <img
        v-if="imageSrc"
        class="c-birdCard_image"
        :src="load ? imageSrc : ''" loading="lazy"
        width="640"
        height="360"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class BirdCard extends Vue {
  observer: IntersectionObserver|null = null;
  load: boolean = false;

  @Prop({ default: null})
  readonly bird!: { [key: string]: string };

  $refs!: {
    birdCard: HTMLElement
  }

  // TODO: See if it's possible to get lower quality image to match size
  get imageSrc () {
    const id = this.bird?.comName?.toLowerCase().split(' ').join('_');
    return this.$store.getters.getBirdImage(id)?.url;
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
  width: 770px;
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
    min-height: 400px;
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