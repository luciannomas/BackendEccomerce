//EndPoint
import Product from "../models/Product"

export const create = async (req, res) => {
    console.log("req" ,req)
    const NewProduct = new Product (req.body)
    const productSaved = await NewProduct.save()
    res.json(productSaved) 
    
}

export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.json(product)
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        return res.json(products)
    } catch (error) {
        console.log("error:", error)
    }
}

export const deleteProduct = async (req, res) => {
    const ProductFound = await Product.findByIdAndDelete(req.params.id)
    if ( ! ProductFound ) return res.status(304).json()
    return res.json(ProductFound)

}

export const updateProduct = async (req, res) => {
    const ProductUpdate = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})  // { new: true} para que muestre el dato ya actualizado 
    res.json({ message: "Product was updated Successfully"})
}