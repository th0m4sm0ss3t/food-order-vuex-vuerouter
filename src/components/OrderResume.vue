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

        <div v-else class="allItemsWrapper">
          <ul class="allItems">
            <li
              class="item" 
              v-for="item in dataOrder"
              :key="item.id"
            >
              <span 
                class="item__infos" 
                v-if="item.nbOfPieceOrdered != 0"
              >
                <span>
                  - {{ item.title }}
                  <span class="nbOfItems__span">
                    {{ item.nbOfPieceOrdered }}
                  </span>
                </span>
                <button 
                  class="btns__btn"
                  @click="removeProductFromOrderThroughMenu(item.id)"
                >
                x
                </button>
              </span>
            </li>
          </ul>
        </div>

        <p class="price">
          {{$store.state.orderPrice }} €
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
    ...mapState(["products", "orderItems", "dataOrder"]),
    
  },
  methods: {
    ...mapMutations(["removeProductFromOrderThroughMenu"]),
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

.nbOfItems {
  width: 100%;
  text-align: center;
}

.allItemsWrapper {
  width: 100%;
}

.item {
  margin: $gutter / 2 0;

  &__infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.nbOfItems__span {
  background: $red;
  padding: 0.2rem 0.5rem;
  margin-left: 0.3rem ;
  color: $gray;
  border-radius: 5px;
  border: solid 1px $red;
}

.price {
  width: 100%; 
  text-align: center; 
  margin-bottom: $gutter; 
  margin-top: $gutter * 2; 
  font-family: $titleFont;
  font-size: 1.8rem;
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