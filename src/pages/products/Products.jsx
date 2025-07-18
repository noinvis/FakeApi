import "./Products.css"
import { useNavigate } from 'react-router-dom'

const Products = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className='wrapper'>
        {
            data?.map((product) => (
                <div key={product.id} className='card hover:cursor-pointer hover:shadow-xl duration-300 rounded-[24px] overflow-hidden'>
                    <img src={product.image} className="hover:scale-105 duration-300" onClick={() => navigate(`/product/${product.id}`)} alt="" />
                    <h3 className="mt-[1rem]">{product.title}</h3>
                    <strong>{product.price} USD</strong>
                </div>
            ))
        }
    </div>
  )
}

export default Products