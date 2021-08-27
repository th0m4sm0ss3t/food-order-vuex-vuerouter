<template>
  <div>
    <ProductInfos />
    <OrderResume />
  </div>
</template>

<script>
import ProductInfos from "@/components/ProductInfos.vue";
import OrderResume from "@/components/OrderResume.vue";

export default {
  name: "Products",
  components: {
    ProductInfos,
    OrderResume,
  }
}
</script>