import mongoose, { Document, Model, Schema } from "mongoose";

interface ProductAttrs{
    name:string;
    description:string;
    price:number;
    catergory:string;
}

interface ProductModel extends Model<ProductDoc> {
  build(attrs: ProductAttrs): ProductDoc;
}

interface ProductDoc extends Document {
  email: string;
  password: string;
}

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  catergory: {
    type: String,
    required: true,
  },
});

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>("Product", productSchema);

export { Product };
