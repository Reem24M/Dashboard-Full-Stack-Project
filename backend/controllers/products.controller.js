import Product from '../models/product.model.js'

export const GetAllProducts = async (req, res) => {
    try {

        const products = await Product.find()
        if (!products) {
            return res.status(404).json({ message: "No products found" })
        }
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const GetProductById = async (req, res) => {
    try {

        const { id } = req.params
        const product = await Product.findById(id)
        if (!product) {

            return res.status(404).json({ message: "Product not found" })
        }
        return res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const CreateProduct = async (req, res) => {
  try {
    // 1. Get product data
    const {
      name,
      description,
      price,
      stock,
      category,
      images,
      isActive,
    } = req.body;

    // 2. Validate required fields
    if (
      !name ||
      !description ||
      price === undefined ||
      !category
    ) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    // 3. Create product
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
      images,
      isActive,
    });

    // 4. Send response
    return res.status(201).json({
      message: "Product added successfully",
      product,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export const UpdateProduct = async (req, res) => {
    try {

        const { id } = req.params
        const { name, price, description, stock, images } = req.body
        if (!name || !price || !description || !stock || !images) {
            return res.status(400).json({ message: "All fields are required" })
        }
        if (!id) {
            return res.status(400).json({ message: "Product ID is required" })
        }
        const product = await Product.findByIdAndUpdate(id, { name, price, description, stock, images }, { new: true })
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        return res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const DeleteProduct = async (req, res) => {
    try{

        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: "Product ID is required" })
        }
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        return res.status(200).json({ message: "Product deleted successfully" })
    }catch (err) {
        res.status(500).json({ message: err.message })
    }

}