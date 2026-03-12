const Product = require("../models/productModel");

// Add product
exports.addProduct = async (req,res)=>{
 try{

  const product = await Product.create(req.body);

  res.status(201).json(product);

 }catch(error){
  res.status(500).json({message:error.message});
 }
};


// Get all products
exports.getProducts = async (req,res)=>{
 try{

  const products = await Product.find();

  res.status(200).json(products);

 }catch(error){
  res.status(500).json({message:error.message});
 }
};


// Get product by id
exports.getProductById = async (req,res)=>{
 try{

  const product = await Product.findById(req.params.id);

  if(!product)
  return res.status(404).json({message:"Product not found"});

  res.status(200).json(product);

 }catch(error){
  res.status(500).json({message:error.message});
 }
};


// Update product
exports.updateProduct = async (req,res)=>{
 try{

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.status(200).json(product);

 }catch(error){
  res.status(500).json({message:error.message});
 }
};


// Delete product
exports.deleteProduct = async (req,res)=>{
 try{

  await Product.findByIdAndDelete(req.params.id);

  res.status(200).json({message:"Product deleted"});

 }catch(error){
  res.status(500).json({message:error.message});
 }
};


// Search by name
exports.searchProduct = async (req,res)=>{
 try{

  const products = await Product.find({
    productName:{$regex:req.query.name,$options:"i"}
  });

  res.status(200).json(products);

 }catch(error){
  res.status(500).json({message:error.message});
 }
};


// Filter by category
exports.filterCategory = async (req,res)=>{
 try{

  const products = await Product.find({
    category:req.query.cat
  });

  res.status(200).json(products);

 }catch(error){
  res.status(500).json({message:error.message});
 }
};