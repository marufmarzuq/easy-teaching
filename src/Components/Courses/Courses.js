import React from 'react';
import './Courses.css'
import Course from '../Course/Course';

const Courses = (props) => {
     const courses = props.courses;
     return (
          <div className='courses container-xxl'>
               {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
               }
          </div>
     );
};

export default Courses;