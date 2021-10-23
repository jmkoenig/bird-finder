<template>
  <div class="c-Layout">
    <nuxt />
    <p>{{ flickrNotice }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

export default class DefaultLayout extends Vue {
  get flickrNotice () {
      return process.env.FLICKR_NOTICE;
  }
}
</script>

<style lang="scss">
.c-Layout {
  background-color: #FFFFEF;
}
</style>