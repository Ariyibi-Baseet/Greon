<template>
  <div class="not-found-wrapper">
    <div class="container not-found d-flex justify-content-center align-items-center">
      <div class="img-wrapper">
        <img :src="notFoundImage" alt="" class="not-found-image" />
        <h2 class="text-center mt-5 broken-text-head fw-bold">Oops! 🤔 Broken Link</h2>
        <router-link
          to="/"
          class="text-decoration-none text-center mt-5 mb-3 d-block fw-bold p-2 bk-btn"
          ><i class="bi bi-arrow-left"></i> Back To Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
  data() {
    return {
      notFoundImage: "/img/notFound_.svg",
    };
  },
};
</script>

<style>
* {
  font-family: var(--ff-chivo);
}
.not-found-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
}
.broken-text-head {
  color: #3f3d56;
}
.bk-btn {
  background-color: var(--phthalo-green);
  border-radius: 5px;
  color: #fff;
}
.bk-btn:hover {
  color: #fff;
  background-color: #3f3d56;
}
.not-found {
  min-height: 100vh;
}
.not-found-image {
  width: 350px;
}
</style>
