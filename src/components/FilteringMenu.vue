<template>
  <div class="filterProduct">
      <p 
          v-for="type in productsTypes"
          :key="type.id"
          class="filterProduct__title"
      >
          <router-link
            :to="{ name: 'FilteredProduct', params: { filter: type.slug  }, }"
            :key="$route.path"
            class="filterProduct__link"
            @click="filterProductsGetters(type.slug)"
          >
            {{ type.name }}
          </router-link>
      </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Filtering Menu",
  computed: {
    ...mapState(["productsTypes"]),

    filteredProducts(){
    	return this.$store.getters.filterProductsGetters(this.routerFilter)
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';
@import '@/css/reset.scss';

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

  &__link {
    color: $gray;
    text-decoration: none;
  }
}

</style>