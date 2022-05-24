import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate('')
    const [items, setitems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`, {
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
            })
            .then(data => setitems(data))
    }, [])
    console.log(items)

    return (
        <div>
            <h2 class=" text-3xl text-center">My Orders</h2>
            <div className='all-items-div-order'>
                {items?.map(item => <div key={item?._id} class="card w-full lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl">
                    <figure><img src={item?.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Product Name : {item?.itemName}
                            {
                                item?.paid === 'panding' ? <div class="badge badge-primary pb-[3px]">{item?.paid}</div> : <div class="badge badge-primary pb-[3px]">paid</div>
                            }
                        </h2>
                        <div class=" justify-start">
                            <p className='my-[6px] font-semibold'>Totul Price : {parseFloat(item?.price) * parseFloat(item.quentity)}</p>
                            <p className='my-[6px] font-semibold'>Quentity : {item?.quentity}</p>
                            <p className='my-[6px] font-semibold'>Reciver Name : {item?.ReciverName} - <small>{item.Address}</small></p>
                            <small className='mb-[6px] font-semibold'>User-email:{item?.email}</small>
                            <p className='my-[6px] font-semibold'></p>
                            <p className='my-[6px] font-semibold'>Phone Number : <small>{item?.PhoneNumber}</small></p>
                            {
                                item.paid === 'panding' && <Link to={'/payment/' + item?._id}><button className="btn btn-wid px-[50px] text-white " >Pay</button></Link>
                            }
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyOrders;