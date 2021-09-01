<template>
  <div class="product">
    <div class="product__titleAndImg">
      <h1 class="title">{{ product.title }}</h1>
      <img class="img" :src="product.img" :alt="'image of ' + product.title">
    </div>
    <div class="product__infos">
      <p class="price">{{ product.price }} €</p>
      <p class="description">{{ product.description }}</p>
      <div class="product__btns">
        <!--<button
          class="product__btns__btn"
          @click="addProductToOrder(routerSlug)"
        >
          +
        </button>
        <button
          class="product__btns__btn"
          @click="removeProductFromOrder(routerSlug)"
        >
          -
        </button>-->
        <button
          class="product__btns__btn"
          @click="addProductToOrderViaDataOrder(routerSlug)"
        >
          +
        </button>
        <button
          class="product__btns__btn"
          @click="removeProductToOrderViaDataOrder(routerSlug)"
        >
          -
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Product List",
  data () {
    return {
      routerSlug: this.$route.params.slug,
    }
  },
  computed: {
    ...mapState(["products"]),
    product() {
      return this.products.find(
        (product) => product.slug === this.routerSlug
      );
    },
  },
  methods: {
    ...mapMutations(["addProductToOrderViaDataOrder", "removeProductToOrderViaDataOrder"]),
  }
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';
@import '@/css/reset.scss';

.title {
  font-family: $titleFont;
  font-size: $titleSize;
  width: 100%;
  margin-bottom: $gutter * 3;
}

.product {
  margin: $gutter * 3.5 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__titleAndImg {
    width: 45%;
  }

  &__infos {
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__btns {
    text-align: center;
    margin: 0 auto $gutter;

    &__btn {
      background: $yellow;
      font-size: $gutter;
      border-radius: 5px;
      border: solid 2px $yellow;
      width: $gutter * 3;
      height: $gutter * 2;
      margin: 0 $gutter;
      cursor: pointer;
    }

    &__btn:hover {
      border: solid 2px $red;
    }
  }
}

.img {
  width: 100%;
}

.price, .description {
  margin: $gutter 0 $gutter $gutter;
}

.price {
  font-family: $titleFont;
  font-size: $gutter * 2;
  width: 45%;
}

/* Small screen */
@media only screen and (max-width: 800px) {
  .product {
    &__titleAndImg {
      width: 90%;
    }

    &__infos {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    &__btns {
      margin: $gutter auto 0;

      &__btn {
        font-size: $gutter * 1.5;
        width: $gutter * 4;
        height: $gutter * 3;
        margin: 0 $gutter;
      }
    }
  }

  .price, .stock, .description {
    margin: $gutter 0;
  }

  .price {
    width: 50%;
  }
}

/* Medium screen */
@media only screen and (min-width: 801px) {
}

/* Big screen */
@media only screen and (min-width: 1500px) {
  .product {
    &__titleAndImg {
      width: 45%;
    }

    &__infos {
      width: 30%;
    }

    &__btns {
      margin: 0 auto $gutter;

      &__btn {
       font-size: $gutter * 1.5;
        width: $gutter * 4;
        height: $gutter * 3;
        margin: 0 $gutter;
      }

    }
  }
}

</style>
