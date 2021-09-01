import { createStore } from "vuex";

import data from "@/data/data";
import dataOrder from "@/data/dataOrder";

export default createStore({
  state () {
    return {
      products: data,
      orderItemsNumber: 0,
      orderItems: [],
      orderPrice: 0,
      dataOrder: dataOrder,
    }
  },
  mutations: {
    addProductToOrderViaDataOrder(state, routerSlug) {
      // for increasing the nb of items of the order
      state.orderItemsNumber = state.orderItemsNumber + 1;

      // Get the added product by its slug
      let product = state.products.filter(product => product.slug === routerSlug)

      // Get the compatible product inside the OrderItems array
      let productInsideOrder = state.dataOrder[product[0].id - 1];

      if (product[0].id == productInsideOrder.id) {

        // Add nb of pieces wanted of the object
        productInsideOrder.nbOfPieceOrdered = productInsideOrder.nbOfPieceOrdered + 1;

        // Update de total price for the order
        state.orderPrice = state.orderPrice + productInsideOrder.price;

        console.log(state.orderPrice, "€", productInsideOrder.nbOfPieceOrdered);
      }

      // console.log(product[0].id, productInsideOrder.id);
    },

    removeProductToOrderViaDataOrder(state, routerSlug) {
      // for increasing the nb of items of the order
      state.orderItemsNumber = state.orderItemsNumber - 1;

      // Get the added product by its slug
      let product = state.products.filter(product => product.slug === routerSlug)

      // Get the compatible product inside the OrderItems array
      let productInsideOrder = state.dataOrder[product[0].id - 1];

      if (product[0].id == productInsideOrder.id) {

        // Update nb of pieces wanted of the object
        productInsideOrder.nbOfPieceOrdered = productInsideOrder.nbOfPieceOrdered - 1;

        if(state.orderPrice > 0){
          // Update de total price for the order
          state.orderPrice = state.orderPrice - productInsideOrder.price;

          console.log(state.orderPrice, "€", productInsideOrder.nbOfPieceOrdered);
        }
      }
    },

    removeProductFromOrderThroughMenu(state, productId) {
      // for increasing the nb of items of the order
      state.orderItemsNumber = state.orderItemsNumber - 1;

      // Get the compatible product inside the OrderItems array
      let productInsideOrder = state.dataOrder[productId - 1];

      if (productId == productInsideOrder.id) {

        // Update nb of pieces wanted of the object
        productInsideOrder.nbOfPieceOrdered = productInsideOrder.nbOfPieceOrdered - 1;

        if(state.orderPrice > 0){
          // Update de total price for the order
          state.orderPrice = state.orderPrice - productInsideOrder.price;

          console.log(state.orderPrice, "€", productInsideOrder.nbOfPieceOrdered);
        }
      }
    }

  },
  actions: {},
  getters: {
    availableProducts (state) {
      return state.products.filter(product => product.inventory > 0);
    },
  },
  modules: {},
});
