<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      rabbitImg: "/img/rabbit2.png",
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container">
      <a class="navbar-brand fw-bold fs-4" href="#">Greon</a>
      <button
        class="navbar-toggler d-lg-none shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img :src="rabbitImg" alt="" />
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/" aria-current="page"
              >Home <span class="visually-hidden">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
            <!-- <a class="nav-link" href="/about">About</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/service">Service</router-link>
            <!-- <a class="nav-link" href="/service">Service</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/breeds">Breeds</router-link>
            <!-- <a class="nav-link" href="/breeds">Breeds</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reminder">Reminder</router-link>
            <!-- <a class="nav-link" href="/calculator">Calculator</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
            <!-- <a class="nav-link" href="/contact">Contact</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
            <!-- <a class="nav-link" href="/register">Register</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
            <!-- <a class="nav-link" href="/login">Register</a> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: var(--phthalo-green);
  border-radius: 20px;
  margin: 10px 10px 0;
  font-family: var(--ff-chivo);
}
.active {
  /* font-weight: bold; */
  color: var(--orange-yellow) !important;
}
.navbar-toggler {
  background-color: #2ba72b;
}
.navbar-brand {
  color: #fff;
  font-variant: small-caps;
}
.nav-link {
  color: #fff;
}
</style>
