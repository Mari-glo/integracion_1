import { productsModel } from "../mongo/models/products.model.js";

class productManagerModel {
    
async getAllProducts(query, options) {
    const products = await productsModel.paginate(query, options);
    return products;
  }

  async getProductById(id) {
    const productFind = await productsModel.findOne({ _id: id });
    return productFind;
  }

  async addProduct(product) {
    const checkProductInfo = Object.values(product).includes(undefined);

    if (checkProductInfo) return "Faltan propiedades al producto";

    const newProduct = await productsModel.create(product);
    return newProduct;
  }

  async updateProduct(id, data) {
    const productUpdate = await productsModel.updateOne({ _id: id }, data);
    return productUpdate;
  }
  async deleteProduct(id) {
    const productDelete = await productsModel.deleteOne({ _id: id });

    return productDelete;
  }

}

export const productManagerModel = new productManagerModel();