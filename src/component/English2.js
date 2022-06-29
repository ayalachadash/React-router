import React from 'react';
import { useParams } from 'react-router-dom';
import { english } from '../data/english';

export const English2 = () => {
    const params = useParams();
    const { englishLessonNum } = params;

    const englishFind = english.find(e => e.lessonNum === parseInt(englishLessonNum))
    return <>
        {englishFind ? <div>
            <h3>the subfect of the lesson: {englishFind.subject}</h3>
            <h3>the teacher: {englishFind.teacher}</h3>
        </div>:<p>not lesson</p>}
    </>

}
