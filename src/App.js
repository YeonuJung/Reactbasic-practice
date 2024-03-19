import "./App.css";
// import {useState} from 'react'
// import UserID from "./components/UserID";
// import UserPW from "./components/UserPW";
// import ChangeValue from "./components/ChangeValue";
// import EventClick from "./components/EventClick";
// import ChangeFont from "./components/ChangeFont";
// import Introduce from "./components/Introduce";
// import Menu from "./components/Menu";
// import DefaultProps from './components/DefaultProps';
// import Hello from './components/Hello';
// import TodaysPlan from './components/TodaysPlan';
// import HeaderComponent from './components/HeaderComponent';
// import BodyComponent from './components/BodyComponent';
// import FooterComponent from './components/FooterComponent';
// import Wrapper from './components/Wrapper'; 
// import Movie from "./components/Movie";
// import PriceList from "./components/PriceList";
// import Boolean from './components/Boolean';
// import ChildComponent from "./components/ChildComponent";

function App() {
/*
  const movieList = [
    {
      title: "웡카",
      date: "2024.01.31",
      img: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20240208_43%2F1707375997377WETJ5_JPEG%2Fmovie_image.jpg"
    },
    {
      title: "파묘",
      date: "2024.02.22",
      img : "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20240222_175%2F1708609058134r4oaq_JPEG%2Fmovie_image.jpg"
    },
    {
      title: "듄:파트2",
      date: "2024.02.28",
      img : "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20240207_151%2F1707288437263gBsdd_JPEG%2Fmovie_image.jpg"
    },
  ];
*/
/* const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => {
      return <div>가격 : {price}원</div>
 })
*/
/*
const menuList = [
  {
    img : "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20101103_172%2Fmyownlord_1288712510878orRC1_jpg%2F011_myownlord.jpg&type=sc960_832", name : "Carbonara", category : "pasta", price : 15000
  },
  {
    img : "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220923_164%2F166390895035357cx1_JPEG%2F65044793005731779_1310046952.jpg&type=sc960_832", name : "Margherita", category : "pizza", price : 25000
  },
  {
    img : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDRfMjI3%2FMDAxNjM1OTU3NzE0MTc1.MXR_GQukpxvqvIIBv72Ggm5n8fZy1qSxt9GcLurYZF0g.BO-zjzuzcCXsh2gmJI9zgmkfKl2wFfWgF2QAVMPJMRUg.JPEG.gyuri0879%2FIMG_1607.jpg&type=sc960_832", name : "Rib Eye Steak", category : "steak", price : 50000
  }
];
*/
/*
const style = [
  {
      color : 'blue', backgroundColor : 'yellow', fontSize : '50px', fontWeight : 'bold'
  },
  {
      color : 'red', backgroundColor : 'green', fontSize : '50px', fontWeight : 'bold'
  },
  {
      color : 'blue', backgroundColor : 'yellow', fontSize : '50px', fontWeight : 'bold'
  }
]
*/
/*
const names = ['HTML', 'CSS', 'Javascript', 'React'];
const nameList = names.map((name, index) => {
  return <li key = {index}>{name}</li>;
})
*/
/*
 const [value, setValue] = useState(0)
 const addValue = () => {
  setValue((prev) => {
    return prev + 1 
  })
 }
 const deleteValue = () => {
  setValue(0)
 }
*/
/*
const [value, setValue] = useState("안녕하세요")
const loginValue = () => {
  setValue("로그인되었습니다.")
}
const logoutValue = () => {
  setValue("로그아웃되었습니다.")
}
*/
/*
const [style, setStyle] = useState({color : 'black'})
const styleRed = () => {
  setStyle({color : 'red'})
}
const styleGreen = () => {
  setStyle({color : 'green'})
}
const styleBlue = () => {
  setStyle({color : 'blue'})
}
*/
/*
const [idValue, setIdValue] = useState("")
const [passwordValue, setPasswordValue] = useState()
const addIdValue = (id) => {
    setIdValue(id)
}
const addPasswordValue = (pw) => {
    setPasswordValue(parseInt(pw))
}
const Verify = () => {
  idValue === "abcd" && passwordValue === 1234? alert("로그인 성공") : alert("로그인 실패")
}
console.log(idValue, passwordValue)
*/

  return (
    <>
    {/* <UserID addIdValue = {addIdValue}/>
    <UserPW addPasswordValue = {addPasswordValue}/>
    <button type="submit" onClick = {Verify}>Login</button> */}
    {/* <h1 style = {style}>글자색 바꾸기</h1>
    <button onClick = {styleRed}>빨간색</button>
    <button onClick = {styleGreen}>초록색</button>
    <button onClick = {styleBlue}>파란색</button> */}
      {/* <h1>{value}</h1>
      <button onClick = {loginValue}>로그인</button>
      <button onClick = {logoutValue}>로그아웃</button> */}
      {/* <h1>{value}</h1>
    <button onClick = {addValue} onMouseOut = {deleteValue}>클릭</button> */}
      {/* <Hello/> */}
      {/* <TodaysPlan/> */}
      {/* <Wrapper> 
     <HeaderComponent/>
     <BodyComponent/>
     <FooterComponent/>
    </Wrapper> */}
      {/* {movieList.map((movie, index) => {
        return <Movie key = {index} title={movie.title} date={movie.date} img = {movie.img}/>;
      })} */}
      {/* <Boolean bored/>
    <Boolean/> */}
      {/* <DefaultProps name = '정연우'/>
    <DefaultProps/> */}
    {/* <PriceList prices = {prices}/> */}
    {/* <div style = {{display : 'flex', columnGap : '50px'}}></div>
    {menuList.map((menu) => {
      return <Menu img = {menu.img} name = {menu.name} category = {menu.category} price = {menu.price}/>
    })}
    </div> */}
    {/* <Introduce name = '정연우' age = {28} region = 'seoul' style = {style}/> */}
    {/* <ul>{nameList}</ul> */}
    {/* <ChildComponent>리액트</ChildComponent> */}
    {/* <Hello/> */}
    {/* <ChangeFont/> */}
    {/* <EventClick/> */}
    {/* <ChangeValue/> */}
    </>
  );
}

export default App;
~