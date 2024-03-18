import './App.css';
/* import Hello from './components/Hello';*/
// import TodaysPlan from './components/TodaysPlan';
/* import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent'; */
import Movie from './components/Movie';

function App() {
  return (
    <>
    {/* <Hello/> */}
    {/* <TodaysPlan/> */}
    {/* <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/> */}
    <Movie title = "웡카" date = "2024.01.31" />
    <Movie title = "반지의 제왕" date = "2024.01.30"/>
    <Movie title = "해리포터" date = "2024.01.29"/>
    </>
  );
}

export default App;
