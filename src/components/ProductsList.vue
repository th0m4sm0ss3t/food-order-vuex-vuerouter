<template>
  <div class="products">
    <h1 class="title">Our products</h1>
    <div 
      v-for="product in products"
      :key="product.id"
      class="product"
    >
      <router-link 
        :to="{ name: 'Product', params: { slug: product.slug }, }"
      >
        <img 
          :src="product.img"
          :alt="'picture of ' + product.title"
          class="product__img"
        >
      </router-link>
        <div class="product__subsection">
          <router-link 
            :to="{ name: 'Product', params: { slug: product.slug }, }"
            class="link"
          >
            <p class="product__name">
              {{ product.title }}
            </p>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Product List",
  computed: {
    ...mapState(["products"]),
  }
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';
@import '@/css/reset.scss';

.products {
  padding: $gutter * 3 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.title {
  text-align: center;
  font-family: $titleFont;
  font-size: $titleSize;
  width: 100%;
  margin-bottom: $gutter * 3;
}

.product {
  width: 35%;
  margin: $gutter * 3.5 $gutter;

  &__img {
    width: 100%;
    height: 90%;
  }
  
  &__subsection {
    border-bottom: solid 3px $red;
    padding-bottom: $gutter;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: $gutter;
  }

  &__name {
    font-family: $titleFont;
  }
}

.link {
  color: $black;
  text-decoration: none;
}

.link:hover {
  color: $red;
}

/* Small screen */
@media only screen and (max-width: 800px) {
  .product {
    width: 85%;
    margin: $gutter * 3.5 $gutter;
  }
}

/* Big screen */
@media only screen and (min-width: 1500px) {
  .product {
    width: 25%;
    margin: $gutter * 3.5 $gutter;
  }
}

</style>
