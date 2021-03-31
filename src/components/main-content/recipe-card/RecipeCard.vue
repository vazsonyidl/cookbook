<template>
    <div>
      {{name}}
    </div>
</template>

<script>
export default {
  name: 'recipe-card',
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style scoped>

</style>
