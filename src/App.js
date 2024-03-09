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
  let [inputText, setInputText] = useState('');

  function changeTitle() {
    // if (title[0] == '남자 코트 추천') setTitle(['여자 코트 추천', title[1], title[2]]);
    // else if (title[0] == '여자 코트 추천') setTitle(['남자 코트 추천', title[1], title[2]]);
    let newArray = [...title];
    newArray[0] = '남자 코트 추천';
    setTitle(newArray);
  }
  function addDdabong(idx) {
    let newArray = [...ddabong];
    newArray[idx]++;
    setDdabong(newArray);
  }

  function addPost() {
    let newTitleArray = [...title, inputText];
    setTitle(newTitleArray);

    let newDdabongArray = [...ddabong, 0];
    setDdabong(newDdabongArray);

    let dateObj = new Date();
    let todayStr = (dateObj.getMonth() + 1) + "월 " + dateObj.getDate() + "일";
    let newDateArray = [...date, todayStr];
    setDate(newDateArray);
  }

  function deletePost(idx) {
    let newTitleArray = [...title];
    newTitleArray.splice(idx, 1);
    setTitle(newTitleArray);

    let newDdabongArray = [...ddabong];
    newDdabongArray.splice(idx, 1);
    setDdabong(newDdabongArray);

    let newDateArray = [...date];
    newDateArray.splice(idx, 1);
    setDate(newDateArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        개발 Blog
      </div>
      <button onClick={ changeTitle }>제목 변경</button>
      {
        title.map((str, idx)=>{
          return (
            <div className="list" key={idx}>
              <h3 onClick={()=>{ setIndex(idx); setModal(true); }}>
                { title[idx] }
                <span onClick={ (e)=>{ addDdabong(idx); e.stopPropagation(); } }>👍</span> { ddabong[idx] }
                <button className="delete-button" onClick={(e)=>{ deletePost(idx); setModal(false); e.stopPropagation(); }}> 삭제 </button>
              </h3>
              <p> { date[idx] } 발행 </p>
              <hr/>
            </div>
          )
        })
      }
      {/* 숙제 : 버튼 누르면 글이 하나가 추가되는 기능 만들기.
      - html 직접 만들 필요 없음. state만 잘 만져주면 됨.
      - array 자료에 뭔가 추가하고 싶을 때 쓰는 방법은 ... 찾아보기
      - 글마다 삭제 버튼 만들어서 누르면 삭제하기. */}

      <input onChange={(e)=>{ setInputText(e.target.value); }}/>
      <button onClick={ addPost }>글 추가</button>

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
