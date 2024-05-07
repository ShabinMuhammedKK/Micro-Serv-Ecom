import ProductTile from "../components/ProductTile"

interface PropsData {
  image: string;
  name: string;
  description: string;
  price: number;
}

const Products:React.FC<PropsData> = () => {
  return (
   <div>
    <ProductTile image="../../public/Screenshot 2024-05-06 133700.png" name="I Phone" description="256gb 8gb white" price={45300}/>
    <ProductTile image="../../public/Screenshot 2024-05-06 133644.png" name="I Phone" description="256gb 8gb white" price={45300}/>
    <ProductTile image="../../public/Screenshot 2024-05-06 133700.png" name="I Phone" description="256gb 8gb white" price={45300}/>
    <ProductTile image="../../public/Screenshot 2024-05-06 133720.png" name="I Phone" description="256gb 8gb white" price={45300}/>
    <ProductTile image="../../public/Screenshot 2024-05-06 133644.png" name="I Phone" description="256gb 8gb white" price={45300}/>
    <ProductTile image="../../public/Screenshot 2024-05-06 133700.png" name="I Phone" description="256gb 8gb white" price={45300}/>
   </div>
  )
}

export default Products