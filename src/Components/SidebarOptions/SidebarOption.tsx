import React from 'react';
import './SidebarOption.scss';

const SidebarOption = (props: any) => {
    const { text, Icon } = props.data;
    return (
        <div className="sidebarOption">
            <Icon />
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;

