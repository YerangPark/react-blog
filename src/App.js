// eislint-disable -> eslint warning이 없어짐.
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['여자 코트 추천', '강남 쌀국수 맛집', '20대 후반 생일선물 추천']); // 구조 분해 할당
  let [date, setDate] = useState(['3월 4일', '3월 3일', '3월 2일']);
  let [ddabong, setDdabong] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);

  function changeTitle() {
    // if (title[0] == '남자 코트 추천') setTitle(['여자 코트 추천', title[1], title[2]]);
    // else if (title[0] == '여자 코트 추천') setTitle(['남자 코트 추천', title[1], title[2]]);
    var newArray = [...title];
    newArray[0] = '남자 코트 추천';
    setTitle(newArray);
  }
  function addDdabong(idx) {
    var newArray = [...ddabong];
    newArray[idx]++;
    setDdabong(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        개발 Blog
      </div>
      <button onClick={ changeTitle }>제목 변경</button>
      {/* <div className="list">
        <h3> { title[0] } <span onClick={ ()=>{ setDdabong(ddabong+1) } }>👍</span> { ddabong } </h3>
        <p> { date[0] } 발행 </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p> { date[1] } 발행 </p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={()=>{ setModal(!modal); }}> { title[2] } </h3>
        <p> { date[2] } 발행 </p>
        <hr/>
      </div> */}
      {
        title.map((str, idx)=>{
          return (
            <div className="list" key={idx}>
              <h3 onClick={()=>{ setIndex(idx); setModal(true); }}>{ title[idx] } <span onClick={ ()=>{ addDdabong(idx) } }>👍</span> { ddabong[idx] }</h3>
              <p> { date[idx] } 발행 </p>
              <hr/>
            </div>
          )
        })
      }

      {
        modal ? <Modal title={title} date={date} setTitle={setTitle} index={index}/> : null
      }

    </div>
  );
}

function Modal(props) {
  function changeTitle(idx) {
    var newArray = [...props.title];
    newArray[idx] = '남자 코트 추천';
    props.setTitle(newArray);
  }
  return (
    <div className="modal">
      <h2>{ props.title[props.index] }</h2>
      <p>{ props.date[props.index] }</p>
      <p>상세 내용</p>
      <button onClick={()=>{changeTitle(0)}}>글 수정</button>
    </div>
  );
}

export default App;
