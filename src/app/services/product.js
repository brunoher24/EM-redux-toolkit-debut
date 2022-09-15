import ProductList from "./productsList";

export const productService = {
    fetchAll: () => (
      new Promise(resolve => {
        setTimeout(() => {resolve(ProductList)}, 1000);
      }
    )),
    fetchById: id => (
      new Promise(resolve => {
        setTimeout(() => {
          resolve(ProductList.find(product => product.id == id))
        }, 1000);
      }
    ))
};