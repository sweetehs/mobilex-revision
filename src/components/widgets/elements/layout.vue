<style>
  .widget-layout-wrapper {
    box-sizing: border-box;
  }
</style>

<template>
  <div class="widget-layout-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "layout",
    // props: ["istyle"],
    data() {
      return {}
    }
  }
</script>

