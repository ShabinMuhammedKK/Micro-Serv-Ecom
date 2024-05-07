import React from "react"

interface ProductProps{
  image: string;
  name: string;
  description: string;
  price: number;
}


const ProductTile:React.FC<ProductProps> = (props) => {
  return (
    <div className="flex w-4/6 mt-10 items-center justify-around m-auto rounded py-5 bg-blue-100">
        <div>
            <img src={props.image} width={100} height={100} alt="adf" />
        </div>
        <div>
            <p className="font-bold">{props.name}</p>
            <p>{props.description}</p>
            <p className="font-bold text-red-800">₹ {props.price}</p>
        </div>
        <div>
        <button
            className="
          bg-black
        hover:bg-white
        hover:text-black
        text-white
        font-semibold 
        py-1 px-4 border 
        rounded"
          >
            Buy Now
          </button>
        </div>
    </div>
  )
}

export default ProductTile