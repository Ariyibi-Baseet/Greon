<script>
export default {
  name: "App",
};
</script>

<template>
  <router-view />
</template>

<style>
:root {
  /* COLORS */
  /* primary */
  --dark: #333 !important;
  --grayish: rgb(85, 83, 83) !important;
  --green: #6ff01a !important;
  --lime: #32cd32 !important;

  /* fonts */
  --ff-chivo: "Chivo", sans-serif;

  --phthalo-green: #163a24;
  --salle-green: #15762e;
  --japanese-laurel: #1f7a36;
  --pomona-green: #194429;
  --orange-yellow: #f7bc28;
  --orange: #e48929;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  box-sizing: border-box;
}
body {
  background-color: rgb(223, 207, 207);
  background-color: rgb(121, 117, 117);
}
</style>
