<template>
  <div class="products">
    <h1 
      class="title"
      v-if="routerFilter === 'all'"
    >Our products</h1>
    <h1 
      class="title"
      v-else
    >Our {{ filteredProducts[0].type.toLowerCase() }}s</h1>
    <FilteringMenu />
    <div 
      v-for="product in filteredProducts" 
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
import FilteringMenu from "./FilteringMenu.vue";

export default {
  name: "Filtered Products List",
  created () {
    if (this.routerFilter === 'all') {
      document.title = "All products";
    } else {
      document.title = this.filteredProducts[0].type + "s";
    }
  },
  components: {
    FilteringMenu,
  },
  data () {
    return {
      routerFilter: this.$route.params.filter,
    }
  },
  computed: {
    ...mapState(["products", "productsTypes"]),
    filteredProducts(){
    	return this.$store.getters.filterProductsGetters(this.routerFilter)
    },
  },
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

.filterProduct {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;

  &__title {
    background: $red;
    border: solid 2px $red;
    border-radius: 5px;
    color: $gray;
    font-family: $titleFont;
    margin: $gutter;
    padding: 0.5rem 0.3rem;
    width: 20%;
    text-align: center;
  }
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
