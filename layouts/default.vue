<template>
  <div class="c-Layout">
    <nuxt />
    <p class="c-Layout_notice">{{ flickrNotice }}</p>
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
body, h1, p {
  padding: 0;
  margin: 0;
  width: 100%;
}
.c-Layout {
  background-color: #FFFFEF;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
  }
  &_notice {
    margin-top: 20px;
  }
}
</style>