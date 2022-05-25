import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MakeAdmin = () => {

    // const { Data: userss, refetch } = useQuery('userss', () => fetch(``, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => {
    //     if (res.status === 403) {
    //         signOut(auth);
    //         localStorage.removeItem('accessToken')
    //     }
    //     else if (res.status === 401) {
    //         signOut(auth);
    //         localStorage.removeItem('accessToken')
    //     }
    //     return res.json()
    // }))

    // console.log(users)

    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(users)
    const makeAdmin = (email) => {

        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    // refetch();
                    toast.success(`Successfully made an admin`);
                }
            })
    }

    // if (isLoading) {

    // }

    return (
        <div>
            <div className="overflow-x-auto m-[30]">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user?._id} >
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} class="btn btn-xs">Make Admin</button>}</td>
                                <td><button class="btn btn-xs">X</button></td>
                            </tr >
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;