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

  /* gradients */
  --moz-gradient: -moz-linear-gradient(88deg, #9efd38 12%, #2ba72b 48%);
  --webkit-gradient: -webkit-linear-gradient(88deg, #9efd38 12%, #2ba72b 48%);
  --o-gradient: -o-linear-gradient(88deg, #9efd38 12%, #2ba72b 48%);
  --ms-gradient: -ms-linear-gradient(88deg, #9efd38 12%, #2ba72b 48%);
  --gradient: linear-gradient(88deg, #9efd38 12%, #2ba72b 48%);

  --rwd-moz-gradient: -moz-linear-gradient(90deg, #2ba72b 31%, #9efd38 55%);
  --rwd-webkit-gradient: -webkit-linear-gradient(90deg, #2ba72b 31%, #9efd38 55%);
  --rwd-o-gradient: -o-linear-gradient(90deg, #2ba72b 31%, #9efd38 55%);
  --rwd-ms-gradient: -ms-linear-gradient(90deg, #2ba72b 31%, #9efd38 55%);
  --rwd-gradient: linear-gradient(90deg, #2ba72b 31%, #9efd38 55%);
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
  background-color: var(--dark);
}
</style>
