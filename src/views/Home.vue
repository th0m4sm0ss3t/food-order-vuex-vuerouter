<template>
  <div class="home">
    <Homepage />
    <OrderResume />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Homepage.vue";
import OrderResume from "@/components/OrderResume.vue";

export default {
  name: "Home",
  components: {
    Homepage,
    OrderResume,
  },
};
</script>
