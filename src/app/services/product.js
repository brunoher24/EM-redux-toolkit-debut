import ProductList from "./productsList";

export const productService = {
    fetchAll: () => (
      new Promise(resolve => {
        setTimeout(() => {resolve(ProductList)}, 300);
      }
    )),
    fetchById: id => (
      new Promise(resolve => {
        id = parseInt(id);
        setTimeout(() => {
          resolve(ProductList.find(product => product.id === id));
        }, 300);
      }
    )),
    fetchBasketItems: ids => (
      new Promise(resolve => {
        setTimeout(() => {
        let promises = [];
         for (let i = 0; i < ids.length; i++) {
          promises.push(new Promise(resolve_ => {
            resolve_(ProductList.find(product => product.id === ids[i]));
          }));
         }
         Promise.all(promises).then(res => {
          resolve(res);
         });
        }, 300);
      })
    )
};