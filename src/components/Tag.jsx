import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        "Not Important": { backgroundColor: "#fff4b8" },
        "Important": { backgroundColor: "#a2d5c6" },
        "Very Important": { backgroundColor: "#ffd700" },
        "Immediate Attention": { backgroundColor: "#ff6961" },
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
