<template>
  <Navbar />
  <div>
    <h3 class="text-white">This is an about page</h3>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "About",
  components: {
    Navbar,
  },
};
</script>
