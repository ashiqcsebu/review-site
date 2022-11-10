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


