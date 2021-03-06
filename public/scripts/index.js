Vue.createApp({
  data(){
    return{
      menu: false,
      promotion: [
        {
          id: 1,
          name: "Beef Burger",
          image: "./assets/beef-burger.jpg",
          rating: 4,
          oldPrice: 4.66,
          newPrice: 2.99
        },
        {
          id: 2,
          name: "Veges and Cheese",
          image: "./assets/cheese-pizza.jpg",
          rating: 5,
          oldPrice: 8.37,
          newPrice: 6.59
        },
        {
          id: 3,
          name: "Sausage Spread",
          image: "./assets/pizza-four.jpg",
          rating: 5,
          oldPrice: 10.05,
          newPrice: 7.95
        }
      ]
    }
  }
}).mount('#app')