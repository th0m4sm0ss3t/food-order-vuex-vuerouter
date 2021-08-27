<template>
  <div class="products">
    <ProductsList />
    <OrderResume />
  </div>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";
import OrderResume from "@/components/OrderResume.vue";

export default {
  name: "Products",
  components: {
    ProductsList,
    OrderResume,
  },
}
</script>