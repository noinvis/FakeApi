import "../products/Products.css"
import { useNavigate } from 'react-router-dom'
import img from '../../imgs/img.jpg'

const Users = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className='wrapper'>
        {
            data?.map((user) => (
                <div key={user.id} className='card hover:cursor-pointer hover:shadow-xl duration-300 rounded-[24px] overflow-hidden'>
                    <img src={img} className="rounded-2xl" onClick={() => navigate(`/users/${user.id}`)} alt={user.username} />
                    <h3 className="mt-[1rem] text-center font-medium">Username: {user.username}</h3>
                    <p className="text-center font-semibold">Email: {user.email}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Users;