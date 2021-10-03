import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';

const Home = () => {
     const [courses, setCourses] = useState([]);
     useEffect(() => {
          fetch('./fakeData.JSON')
               .then(res => res.json())
               .then(data => setCourses(data))
     }, [])

     return (
          <>
               <Courses courses={courses}></Courses>
          </>
     );
};

export default Home;