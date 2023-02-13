<template>
  <h1 class="text-center text-white">
    This is the Contact Page. You are welcome : {{ name }}
  </h1>
</template>

<script>
export default {
  name: "ContactView",
  setup() {
    const name = "Ariyibi Baseet";

    return {
      name,
    };
  },
};
</script>

<style></style>
