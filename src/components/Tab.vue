<!-- FOR TABS CONTET -->
<template>
    <div v-if="isSelected">
        <slot></slot>
    </div>
</template>

<script>
export default {
   name: "Tab",
  props: {
    isSelected: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

