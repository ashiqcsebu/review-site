import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UseTitle from '../../UseTitle/UseTitle';
import PersonalReview from './PersonalReview';

const MyReview = () => {
  UseTitle("My Review")
  const [myreviews, setmyreviews] = useState([])
  const {user,logOut} = useContext(AuthContext)


  useEffect(() => {

        fetch(`http://localhost:5000/myreviw?email=${user?.email}`, {
      headers : {
        'content-type' : 'application/json'
        // authorization : `Bearar ${localStorage.getItem('service-review-token')}`
      }
    })
    .then(res => {
      if(res.status === 401 || res.status === 403){
         logOut()
       }
      return res.json()
    })
    .then(data => {
      setmyreviews(data)
    })

  }, [user?.email,logOut])


const handleDelete = (myrvw) =>{
 

    fetch(`http://localhost:5000/myreviw/${myrvw._id}`,{
    
          method : 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
              const remaining = myreviews.filter(usr => usr._id !== myrvw._id)
              setmyreviews(remaining)
      })
}



    return (
        <div className="overflow-x-auto w-11/12 sm:w-11/12 md:w-8/12 m-auto my-5">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th>service Name</th> 
        <th>Review Message</th>
        <th>Edit</th>
        <th>Delete</th>
      
      </tr>
    </thead>
    <tbody>
      {
        myreviews.map(myrvw => <PersonalReview handleDelete = {handleDelete} myrvw = {myrvw}  key = {myrvw._id}></PersonalReview> )
      }
    </tbody>
  </table>
</div>
    );
};

export default MyReview;













// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import Reviews from './Reviews';

// const MyReview = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const [orders, setOrders] = useState([])

//     useEffect(() => {
//         fetch(`http://localhost:5000/orders?email=${user?.email}`, {
//             headers: {
//                 authorization: `Bearer ${localStorage.getItem('genius-token')}`
//             }
//         })
//             .then(res => {
//                 if (res.status === 401 || res.status === 403) {
//                     return logOut();
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 setOrders(data);
//             })
//     }, [user?.email, logOut])

//     const handleDelete = id => {
//         const proceed = window.confirm('Are you sure, you want to cancel this order');
//         if (proceed) {
//             fetch(`http://localhost:5000/orders/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     authorization: `Bearer ${localStorage.getItem('genius-token')}`
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.deletedCount > 0) {
//                         alert('deleted successfully');
//                         const remaining = orders.filter(odr => odr._id !== id);
//                         setOrders(remaining);
//                     }
//                 })
//         }
//     }

//     const handleStatusUpdate = id => {
//         fetch(`http://localhost:5000/orders/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json',
//                 authorization: `Bearer ${localStorage.getItem('genius-token')}`
//             },
//             body: JSON.stringify({ status: 'Approved' })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                     const remaining = orders.filter(odr => odr._id !== id);
//                     const approving = orders.find(odr => odr._id === id);
//                     approving.status = 'Approved'

//                     const newOrders = [approving, ...remaining];
//                     setOrders(newOrders);
//                 }
//             })
//     }

//     return (
//         <div>
//             <h2 className="text-5xl">You have {orders.length} Orders</h2>
//             <div className="overflow-x-auto w-full">
//                 <table className="table w-full">
//                     <thead>
//                         <tr>
//                             <th>
//                             </th>
//                             <th>Name</th>
//                             <th>Job</th>
//                             <th>Favorite Color</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             orders.map(order => <Reviews
//                                 key={order._id}
//                                 order={order}
//                                 handleDelete={handleDelete}
//                                 handleStatusUpdate={handleStatusUpdate}
//                             ></Reviews>)
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default MyReview;