<template>
<div>
    <!-- open menu btn -->
    <span
        v-if="displayMenuState === false"
        class="menu-burger-btn openBtn"
        @click="displayMenuState = !displayMenuState"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#171515" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
        </svg>
    </span>
    <!-- close menu btn -->
    <span
        v-if="displayMenuState === true"
        class="menu-burger-btn"
        @click="displayMenuState = !displayMenuState"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#171515" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M10 10l4 4m0 -4l-4 4" />
        </svg>
    </span>
    <!-- responsive menu navigation -->
    <div class="menu-burger-div" v-if="displayMenuState">
        <p class="title">Summary of your order</p>
        <p class="nbOfItems" v-if="$store.state.orderItemsNumber < 1">
            You have {{ $store.state.orderItemsNumber }} item in your order.
        </p>
        <ul 
          v-else class="allItems"
          v-for="orderItemsArray in orderItems"
          :key="orderItemsArray.id"
        >
          <li 
            class="item"
            v-for="item in orderItemsArray"
            :key="item.id"
          >
            - {{ item.title }}
          </li>
            <div class="btns">
                <button 
                  class="btns__btn"
                  v-for="item in orderItemsArray"
                  :key="item.id"
                  @click="removeProductFromOrder(item.id)"
                >
                x
                </button>
            </div>
        </ul>
        <p class="price">
          <!-- func truncate to decimal | ex : 22.99 -->
          {{ Math.floor($store.state.orderPrice * 100) / 100 }} €
        </p>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Order Resume",
  data () {
    return {
      displayMenuState: false,
    }
  },
  computed: {
    ...mapState(["products", "orderItems"]),
    
  },
  methods: {
    ...mapMutations(["removeProductFromOrder"]),
  }
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';
@import '@/css/reset.scss';

.menu-burger-btn {
  position: absolute;
  top: 25%;
  right: 3%;
  z-index: 1;
}

.menu-burger-btn:hover {
  cursor: pointer;
}

.openBtn {
    background: $yellow;
}

.title {
  text-align: center;
  font-family: $titleFont;
  font-size: $titleSize;
  width: 100%;
  margin-bottom: $gutter * 3;
}

.nbOfItems, .price {
  width: 100%; 
  text-align: center; 
  margin-bottom: $gutter; 
}

.price {
  margin-top: $gutter * 2; 
  font-family: $titleFont;
  font-size: 1.8rem;
}

.allItems {
  margin-top: $gutter;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btns {
  &__btn {
    background: $yellow;
    font-size: $gutter;
    border-radius: 5px;
    border: solid 2px $yellow;
    width: $gutter * 2;
    height: $gutter * 1.5;
    margin-left: $gutter;
    cursor: pointer;
  }

  &__btn:hover {
    border: solid 2px $red;
  }
}

.menu-burger-div {
  position: absolute;
  top: 25%;
  right: 3%;
  padding: $gutter;
  background: $gray;
  border: 2px solid $yellow;
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  max-height: 65%;
  overflow: auto;
}

/* Small screen */
@media only screen and (max-width: 800px) {
  .menu-burger-div {
    width: 70%;
  }
}

</style>