import React from 'react';
import './Course.css'
import { Card } from 'react-bootstrap';

const Course = (props) => {
     const { courseName, rate, imgURL, courseOwner, level, price } = props.course;
     return (
          <Card style={{ width: '19rem' }}>
               <Card.Img variant="top" src={imgURL} />
               <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <h3>by {courseOwner}</h3>
                    <Card.Text>
                         Some quick example text to build on the card title and make up the bulk of
                         the card's content.
                    </Card.Text>
                    <Card.Footer>
                         <h2 className="courseRate">${price}</h2>
                         <p>{level}</p>
                         <p>{ rate}</p>
                    </Card.Footer>
               </Card.Body>
          </Card>
     );
};

export default Course;