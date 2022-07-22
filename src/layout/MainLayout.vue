<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script setup>
</script>

<style lang="scss">
@import "@/assets/style/mixin.scss";
section{
    height: 100vh;
    // box-sizing: border-box;
    padding: 0;
    width: inherit;
    @include scroll
}
</style>