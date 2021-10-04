import React from 'react';
import { useParams } from 'react-router-dom'
const CourseDetails = () => {
     const {id} = useParams()

     return (
          <div>
               <h1>HEllo From course details {id}</h1>
          </div>
     );
};

export default CourseDetails;