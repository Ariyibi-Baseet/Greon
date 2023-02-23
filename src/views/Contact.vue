<template>
  <Navbar />
  <h1 class="text-center text-white">
    <div>
      <h3 class="text-white">This is the contact page</h3>
    </div>
  </h1>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Contact",
  components: {
    Navbar,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
