import React from 'react';
import './TAgButton.css'

const TagButton = ({ classTag, Text }) => {
    return (
        <div className="OneButtom">
            <button type="button" class={classTag}>{Text}</button>
        </div>
    )
}

export default TagButton
