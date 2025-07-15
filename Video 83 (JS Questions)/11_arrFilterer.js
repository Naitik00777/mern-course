 
//The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999 },
    { id: 2, name: "Shoes", category: "Fashion", price: 79 },
    { id: 3, name: "Phone", category: "Electronics", price: 599 },
    { id: 4, name: "Jacket", category: "Fashion", price: 120 }
  ];

  function filterProducts(products, key, value){
    return products.filter(product => product[key] == value)

  }


  // Filter by category
console.log(filterProducts(products, "category", "Electronics"));
// → [{ id: 1, ... }, { id: 3, ... }]

// Filter by price
console.log(filterProducts(products, "price", 79))
console.log(filterProducts(products, "name", "Laptop"));
console.log(filterProducts(products, "name", "Jacket"));
console.log(products)
// → [{ id: 2, ... }]
