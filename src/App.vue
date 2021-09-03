<template>
  <div class="wrapper">
    <header class="header">
      <router-link to="/">
        <img class="logo" src="@/assets/img/logo.jpg" alt="logo d'un burger">
      </router-link>
      <div id="nav">
        <router-link to="/" class="router-link">Home</router-link>
        <router-link to="/products" class="router-link">Products</router-link>
        <router-link to="/about" class="router-link">About</router-link>
      </div>
    </header>
    <router-view :key="$route.fullPath" />
    <footer class="footer">
      <p>Done by <a href="http://www.thomasmosset.fr/" target="_blank">Thomas M.</a> using Vue Router & Vuex</p>
    </footer>
  </div>
</template>

<style lang="scss">
@import '@/css/vars.scss';
@import '@/css/reset.scss';

#app {
  font-family: $textFont;
  color: $black;
  background: $gray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: $red;
  padding-top: $gutter;
  margin-bottom: $gutter;
  border-bottom: solid 2px $black;
  text-align: center;
}

#nav {
  padding: 1.7rem;

  a {
    font-weight: 600;
    color: $black;

    &.router-link-exact-active {
      color: $yellow;
    }
  }

  a:hover {
    color: $gray;
  }
}

.logo {
  width: $gutter * 5;
  border-radius: 5px;
  border: solid 2px $black;
}

.footer {
  background: $red;
  padding: $gutter 0;
  border-top: solid 2px $black;
  text-align: center;
  font-weight: 600;
}

.footer a {
  color: $gray;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.router-link {
  margin: 0 $gutter;
  text-decoration: none;
}
</style>
