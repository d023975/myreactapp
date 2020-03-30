import React from "react";

export default function ChoiceBar({title, percent}){
    return <div className="ChoiceBar">
        <div className="Progress" style={{'width': percent + '%'}}>
<div className="ChoiceBarTitle">{title}</div>
        </div>
        <div className="ChoiceBarBadge">123</div>
    </div>;
}