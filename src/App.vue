<template>
  <div class="wrapper">
    <div class="header">
      <router-link to="/">
        <img class="logo" src="@/assets/img/logo.jpg" alt="logo d'un burger">
      </router-link>
      <div id="nav">
        <router-link to="/" class="router-link">Home</router-link>
        <router-link to="/products" class="router-link">Products</router-link>
        <router-link to="/order" class="router-link">Order</router-link>
      </div>
    </div>
    <router-view />
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

.router-link {
  margin: 0 $gutter;
  text-decoration: none;
}
</style>
