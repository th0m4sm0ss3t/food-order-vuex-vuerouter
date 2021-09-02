<template>
  <div class="filteredProducts">
    <FilteredProducts />
    <OrderResume />
  </div>
</template>

<script>
import FilteredProducts from "@/components/FilteredProducts.vue";
import OrderResume from "@/components/OrderResume.vue";

export default {
  name: "Products",
  components: {
    FilteredProducts,
    OrderResume,
  },
}
</script>