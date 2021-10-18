<template>
  <div>
    <p>
      {{ taxonomy }}
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class Taxonomy extends Vue {
    
  }
</script>