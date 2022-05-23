import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinner from '../../../ForAll/Spinner';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate('')


    const { data: items, isLoading } = useQuery('items', () => fetch(`http://localhost:5000/orders/${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/login')
            }
            else if (res.status === 401) {
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/login')
            }
            return res.json()
        }))
    console.log(items)

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 class=" text-3xl text-center">My Orders</h2>
            <div className='all-items-div-order'>
                {items.map(item =>
                    <div key={item?._id} class="card w-full lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl">
                        <figure><img src={item?.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                {item?.name}
                                <div class="badge badge-primary">NEW</div>
                            </h2>
                            <div class=" justify-start">
                                <p >{item?.discription}Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className='my-[6px] font-bold'>Price : {item?.price}</p>
                                <p>Available Quantity : {item?.availqunity}</p>
                                <p> Minimum Order quantity : {item?.minOrderquntity}</p>

                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default MyOrders;