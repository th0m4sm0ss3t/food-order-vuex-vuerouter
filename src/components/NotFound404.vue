<template>
  <div class="notfound">
    <h1 class="title">Oups !</h1>
    <p class="subtitle">The requested page was not found !</p>
    <div class="redirectionsDiv">
    <router-link to="/" class="accessCard__link">
      <div class="accessCard">
        <img 
          src="https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_960_720.jpg"
          alt="cheeseburger à gauche, et portion de frites à droite"
          class="accessCard__img"
        >
        <button class="accessCard__btn">Go back to the home</button>
      </div>
    </router-link>
    <router-link to="/products" class="accessCard__link">
      <div class="accessCard">
        <img 
          src="https://cdn.pixabay.com/photo/2015/12/08/00/26/food-1081707_960_720.jpg"
          alt="cheeseburger à gauche, et portion de frites à droite"
          class="accessCard__img"
        >
        <button class="accessCard__btn">Go back to the products list</button>
      </div>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound404",
  created () {
    document.title = "404 - Not found";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/vars.scss';
@import '@/css/reset.scss';

.notfound {
  padding: $gutter * 3 0;
}

.redirectionsDiv {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  justify-content: space-between;
}

.title, .subtitle {
  text-align: center;
  font-family: $titleFont;
  font-size: $titleSize;
  width: 100%;
}

.subtitle {
  font-size: 1.5rem;
  margin: $gutter 0 $gutter * 2;
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
    width: 60%;
    margin: 0 auto;
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
  .notfound {
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
  .notfound {
    &__img {
      width: 75%;
    }
  }
}

/* Big screen */
@media only screen and (min-width: 1500px) {

}
</style>
