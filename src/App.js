import "./App.css";
// import DefaultProps from './components/DefaultProps';
/* import Hello from './components/Hello';*/
// import TodaysPlan from './components/TodaysPlan';
/* import HeaderComponent from './components/HeaderComponent';
   import BodyComponent from './components/BodyComponent';
   import FooterComponent from './components/FooterComponent';
   import Wrapper from './components/Wrapper'; */
import Movie from "./components/Movie";
// import Boolean from './components/Boolean';

function App() {
  const movieList = [
    {
      title: "웡카",
      date: "2024.01.31",
    },
    {
      title: "반지의 제왕",
      date: "2024.01.30",
    },
    {
      title: "해리포터",
      date: "2024.01.29",
    },
  ];

  return (
    <>
      {/* <Hello/> */}
      {/* <TodaysPlan/> */}
      {/* <Wrapper> 
     <HeaderComponent/>
     <BodyComponent/>
     <FooterComponent/>
    </Wrapper> */}
      {movieList.map((movie) => {
        return <Movie title={movie.title} date={movie.date} />;
      })}
      ;
      {/* <Boolean bored/>
    <Boolean/> */}
      {/* <DefaultProps name = '정연우'/>
    <DefaultProps/> */}
    </>
  );
}

export default App;
