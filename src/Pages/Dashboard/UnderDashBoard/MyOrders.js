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
        fetch(`https://murmuring-basin-10907.herokuapp.com/orders/${user?.email}`, {
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

    // delete Item api call
    const deleteItem = (props) => {
        console.log(props)

        fetch(`https://murmuring-basin-10907.herokuapp.com/orders/${props}`, {
            method: 'Delete',
        })
            .then(response => response.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaing = items.filter(itme => itme._id !== props)
                    setitems(remaing)
                }
            })

    }
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
                                item?.paid === 'panding' && <div class="badge badge-primary pb-[3px]">Unpayid</div>
                            }
                            {
                                item?.paid === 'shipped' && <div class="badge badge-primary pb-[3px]">Shipped</div>
                            }
                            {
                                item?.paid === 'paid' && <div class="badge badge-primary pb-[3px]">Paid</div>
                            }
                        </h2>
                        <div class=" justify-start">
                            {
                                item?.transactionId && <small className='font-bold'>Transaction Id:

                                    {item.transactionId}</small>
                            }
                            <p className='my-[6px] font-semibold'>Totul Price : {parseFloat(item?.price) * parseFloat(item.quentity)}</p>
                            <p className='my-[6px] font-semibold'>Quentity : {item?.quentity}</p>
                            <p className='my-[6px] font-semibold'>Reciver Name : {item?.ReciverName} - <small>{item.Address}</small></p>
                            <small className='mb-[6px] font-semibold'>User-email:{item?.email}</small>
                            <p className='my-[6px] font-semibold'></p>
                            <p className='my-[6px] font-semibold'>Phone Number : <small>{item?.PhoneNumber}</small></p>

                            <div className='flex justify-between'>
                                <div>
                                    {
                                        item.paid === 'panding' && <Link to={'/payment/' + item?._id}><button className="btn btn-wid px-[40px] text-white " >Pay</button></Link>
                                    }
                                    {
                                        item.paid === 'paid' && ''
                                    }
                                </div>
                                {
                                    item?.paid === 'shipped' || item.paid === 'paid' ? '' : <label for="my-modal-6" class="btn btn-outline px-[30px]">Delete</label>
                                }
                                {/* <!-- Put this part before </body> tag --> */}
                                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box ">
                                        <h3 class="font-bold text-lg text-center p-[10px]">Sir do you want to delete the Product</h3>
                                        <div class="card-actions justify-center">
                                            <button class="btn btn-outline" onClick={() => deleteItem(item._id)}>Delete Product</button>
                                            <label for="my-modal-6" class="btn">Clear</label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyOrders;