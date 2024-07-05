import React from "react";

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import checkMark from "../assets/check-mark-button.png"
import glowingStar from "../assets/glowing-star.png"
import play from "../assets/play.png"

const TaskCard = ({ title, tags, handleDelete, index, handleStart, status, handleFinally }) => {


    return (
        <article className='task_card'>




            <p className='task_text'>{title}</p>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {tags.map((tag, index) => (
                        <Tag key={index} tagName={tag} selected />
                    ))}
                </div>
                <div
                    className='task_delete'
                    onClick={() => handleDelete(index)}>
                    <img src={deleteIcon} className='delete_icon' alt='' />
                </div>

                {status === 'todo' ? <div
                    className='task_swap'
                    onClick={() => handleStart(index)}>
                    <img src={play} className='play' alt='' />
                </div> : <p></p>}

                {status === 'doing' ? <div
                    className='task_swap'
                    onClick={() => handleFinally(index)}>
                    <img src={checkMark} className='check-Mark' alt='' />
                </div> : <p></p>}


            </div>
        </article>
    );
};

export default TaskCard;
