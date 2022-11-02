import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../../css/standBy.css";
import Button from 'react-bootstrap/Button';
import tag from '../../static/tag.png'
import commentImg from '../../static/comment-img.png'


const StanByScreen =({title}) =>{
    const navigate = useNavigate()
    const randomTimeData = [2000,3000,5000] // 화면 버퍼링 시간ms data (2초,3초,5초)
    const setRandomTime = (index) => { // 확률조작 (30%,40%,30%)
        if (index < 30){return index = 0; }
        else if (index <70){return index = 1;}
        else {return index = 2;}
    }
    return (
        <div className="standBy-wrap">
            <img src={tag}></img>
            <p style={{fontSize:"18px",fontWeight:400}}><strong style= {{fontWeight:"",fontSize:"20px"}}>수강신청</strong>‑ (※공지: 수강신청은 <span style= {{ color: "red",fontSize:"18px",fontWeight:400}}>크롬브라우저</span>에 최적화되어 있습니다. IE의 캐시기능 때문에 종종 오류가 발생하고 있습니다.)</p>
            <div id="div-comment" class="col-12 col-md-6 divBb border border-secondary text-left">
               <Button id = "start-btn"onClick ={()=>{
                let index = Math.floor(Math.random()*100) // 1~100
                index = setRandomTime(index); // 확률에 따라 수정
                setTimeout(function(){
                    navigate("/page3")
               },randomTimeData[index])}}>수강신청 Go ~~</Button> 
               <img style = {{float:"right",width:"210px",height:"98px",margin:0}}src = {commentImg}></img>
            </div>
            <div class = "col-12">
                <div class="alert alert-danger" role="alert">
                    This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>
            </div>
            <div class = "col-12">
                <div class="alert alert-warning" role="alert">
                    This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>
            </div>
            <div class = "col-12">
                <div class="alert alert-danger" role="alert">
                    This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>
            </div>
            <div class ="col-12">
                <div class="card mb-3">
                    <div class="card-header text-white bg-danger">수강신청을 위한 웹브라우저 설정(필수)</div>
                    <div class = "card-body unnamed1">

                    </div>

                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3">
                    <div class="card-header text-white bg-info">수강신청 시스템 제한사항</div>
                    <div class = "card-body unnamed1">
                        
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3">
                    <div class="card-header text-white bg-info">사이버(Cyber)강좌 안내</div>
                    <div class = "card-body unnamed1">
                        
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3">
                    <div class="card-header text-white bg-info">한양사이버 및 KCU 수강신청 안내(필독)</div>
                    <div class = "card-body unnamed1">
                        
                    </div>
                </div>
            </div>
            <div class = "col-12">
                <div class="alert alert-primary" role="alert">
                    <b>
                        <span class="unnamed1">
                            <font color="07A08A">
                                수강신청 이월학점 조회 :  
                                <a href> CLICK!!!</a>
                            </font>
                        </span>
                    </b>
                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3">
                    <div class="card-header text-white bg-info">수강신청내역 점검</div>
                    <div class = "card-body unnamed1">
                        
                    </div>
                </div>
            </div>
            <div class = "col-12">
                <div class="alert alert-danger" role="alert">
                    <b>
                        <span class="unnamed1">수강신청 관련문의 : 02-760-4219 (학사운영팀) / 각 트랙 및 학과(부) 연락처보기(클릭)</span>
                    </b>
                </div>
            </div>
        </div>
    )
}

export default StanByScreen;