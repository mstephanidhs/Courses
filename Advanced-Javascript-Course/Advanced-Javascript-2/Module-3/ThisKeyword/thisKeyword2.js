const product = {
  name: 'Vanilla Lip Gloss',
  sku: 'w234fg',
  stock: 276,
  getProductInfo: function () {
    console.log(
      `Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`
    );
  },
};

product.getProductInfo();

// this is equal to const productDetails = product.getProductInfo
// this is undefined since there isn't any reference to an object
// solution: use bind(), binding the this value of the object
// const productDetails = function () {
//   console.log(this);
// };

const productDetails = product.getProductInfo.bind(product);
