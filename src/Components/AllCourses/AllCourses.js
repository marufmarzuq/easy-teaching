import React from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import './AllCourses.css'

const AllCourses = (props) => {
     const courses = props.courses;
     return (
          <div className='container-xxl courses'>
               <div className="">
               </div>
               <div className="row row-cols-1 row-cols-md-4 g-4">
               {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
               }
               </div>
          </div>
     );
};

export default AllCourses;