<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      //   rabbitImg: "/rabbit2.png",
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
            <a class="nav-link active" href="#" aria-current="page"
              >Home <span class="visually-hidden">(current)</span></a
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
            <router-link class="nav-link" to="/calculator">Calculator</router-link>
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
  background: var(--moz-gradient);
  background: var(--webkit-gradient);
  background: var(--o-gradient);
  background: var(--ms-gradient);
  background: var(--gradient);
  border-radius: 20px;
  margin: 10px 10px 0;
  font-family: var(--ff-chivo);
}
.active {
  font-weight: bold;
}
@media screen and (max-width: 767px) {
  .navbar {
    background: var(--rwd-moz-gradient);
    background: var(--rwd-webkit-gradient);
    background: var(--rwd-o-gradient);
    background: var(--rwd-ms-gradient);
    background: var(--rwd-gradient);
  }
  .navbar-toggler {
    background-color: #2ba72b;
  }
}
.navbar-brand {
  color: var(--dark);
  font-variant: small-caps;
}
.nav-link {
  color: #fff;
  /* font-weight: bold; */
  /* letter-spacing: 1px; */
}
</style>
