import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.send(404, "No Results");
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(product[0]);
  } catch (error) {
    res.send(400, "This Product Not Found");
  }
};

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: "Product Created",
    });
  } catch (error) {
    res.send(400, "Failed create product");
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Product.findAll({
      where: req.params.id,
    });
    res.json({
      message: "Product Updated",
    });
  } catch (error) {
    res.send(400, "Failed update product");
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Deleted",
    });
  } catch (error) {
    res.send(400, "Failed delete product");
  }
};
