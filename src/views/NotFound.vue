<template>
  <div class="notfound">
    <NotFound404 />
  </div>
</template>

<script>
// @ is an alias to /src
import NotFound404 from "@/components/NotFound404.vue";

export default {
  name: "Not Found",
  components: {
    NotFound404,
  },
};
</script>