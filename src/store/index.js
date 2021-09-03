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
      productsTypes: [
        {
          id : 0,
          name : "All",
          slug : "all"
        },
        {
          id : 1,
          name : "Dessert",
          slug : "dessert"
        },
        {
          id : 2,
          name : "Drink",
          slug : "drink"
        },
        {
          id : 3,
          name : "Main meal",
          slug : "main-meal"
        },
        {
          id : 4,
          name : "Side meal",
          slug : "side-meal"
        },
      ]
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
      }

      //console.log(product[0].id, productInsideOrder.id);
    },

    removeProductToOrderViaDataOrder(state, routerSlug) {

      if (state.orderItemsNumber > 0) {
        // for increasing the nb of items of the order
        state.orderItemsNumber = state.orderItemsNumber - 1;
      }

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
        }
      }
    },

    removeProductFromOrderThroughMenu(state, productId) {
      
      if (state.orderItemsNumber > 0) {
        // for increasing the nb of items of the order
        state.orderItemsNumber = state.orderItemsNumber - 1;
      }

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
    },
  },
  actions: {},
  getters: {
    filterProductsGetters : (state) => (filter) => {
      if (filter === "all") {
        return state.products;

      } else { // filter by slug
        
        return state.products.filter(product => product.typeSlug === filter);
      }

    },
  },
  modules: {},
});
