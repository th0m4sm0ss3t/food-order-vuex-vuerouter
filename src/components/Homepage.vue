<template>
  <div class="home">
    <h1 class="title">Welcome to Food kingdom !</h1>
    <img 
      src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"
      alt="2 burgers"
      class="home__img"
    >
    <h2 class="title">Access to the products list</h2>
    <router-link to="/products" class="accessCard__link">
      <div class="accessCard">
        <img 
          src="https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_960_720.jpg"
          alt="cheeseburger à gauche, et portion de frites à droite"
          class="accessCard__img"
        >
        <button class="accessCard__btn">Access</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/vars.scss';
@import '@/css/reset.scss';

.home {
  padding: $gutter * 3 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__img {
    margin: $gutter * 3 0;
  }
}

.title {
  text-align: center;
  font-family: $titleFont;
  font-size: $titleSize;
  width: 100%;
}

.accessCard {
  margin: $gutter 0;
  box-sizing: border-box;
  position: relative;

  &__img {
    width: 100%;
    background: contain;
    border-radius: 5px;
    border: solid 2px $yellow;
  }

  &__link {
    width: 35%;
  }

  &__btn {
    background: $yellow;
    border-radius: 5px;
    border: solid 2px $yellow;
    padding: $gutter / 2 $gutter;
    position: absolute;
    top: 1rem; 
    right: 1rem;
    cursor: pointer;
  }

  &__btn:hover {
    background: $red;
    border: solid 2px $red;
    color: $gray;
  }
}

/* Small screen */
@media only screen and (max-width: 800px) {
  .home {
    &__img {
      width: 75%;
    }
  }

  .accessCard {
    &__link {
      width: 75%;
    }
  }
}

/* Medium screen */
@media only screen and (min-width: 801px) {
  .home {
    &__img {
      width: 75%;
    }
  }
}

/* Big screen */
@media only screen and (min-width: 1500px) {

}
</style>
