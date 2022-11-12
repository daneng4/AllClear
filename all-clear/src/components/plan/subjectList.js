import React from "react";
import "../../css/subjects.css"
import subjectsData from "../../data/subjectList.json";
import Subject from "./subject";

//03. 교과목리스트 component
const SubjectList = ({tracks, grade, codes, search,likeClasses,changeLikeClasses}) => {

    let gradeCheck = 0;


    return (
        <div className="subjects-warp">
            <h4>03. 과목 선택</h4>
            {
                grade.map((grade) => (
                    subjectsData.map((subject, idx) => {
                        const trackCheck = subject.tracks.reduce(
                            (bool, subTrack) =>
                                (tracks.reduce((trackBool, track) => (subTrack.track == track) ? true : trackBool, false) &&
                                    codes.reduce((codeBool, code) => (subTrack.code == code) ? true : codeBool, false)) ? true : bool, false)

                        if (trackCheck && grade == subject.grade && subject.name.includes(search.trim())) {
                            if (gradeCheck != grade) {
                                gradeCheck = grade;
                                return (
                                    <>
                                        <h5 className="selected-grade">{grade}</h5>
                                        <hr />
                                        <Subject key={idx} data={subject} likeClasses={likeClasses} changeLikeClasses={changeLikeClasses}></Subject>
                                    </>
                                )
                            }
                            else
                                return <Subject  key={idx} data={subject} likeClasses={likeClasses} changeLikeClasses={changeLikeClasses}></Subject>
                        }
                    })
                ))
            }
        </div>
    )
}

export default SubjectList;