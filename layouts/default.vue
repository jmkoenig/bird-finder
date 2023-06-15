<template>
  <div class="c-layout">
    <nuxt />
    <p class="c-layout_notice">{{ flickrNotice }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class DefaultLayout extends Vue {
  get flickrNotice () {
      return process.env.FLICKR_NOTICE;
  }
}
</script>

<style lang="scss">
html, body, #__nuxt, #__layout {
  min-height: 100vh;
}

body, h1, p {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.c-layout {
  box-sizing: border-box;
  position: relative;
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