import Courses from '../Courses/Courses';

const Home = ({courses}) => {
     return (
          <>
               <Courses courses={courses}></Courses>
          </>
     );
};

export default Home;