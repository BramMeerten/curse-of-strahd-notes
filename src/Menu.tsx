import React, {useState} from 'react';

import './Menu.css';
import {promptService} from './register-service-worker';

export const Menu = (props: {selectedChanged: (value: string) => void}) => {

    const [selected, setSelected] = useState('npcs');
    const change = (value: string) => {
        setSelected(value);
        props.selectedChanged(value);
    }

    return (
        <div id="menu-bar">
            <div className={selected === 'npcs' ? 'selected' : ''} onClick={() => change('npcs')}>NPCs</div>
            <div className={selected === 'quests' ? 'selected' : ''} onClick={() => change('quests')}>Open Quests</div>
            <div className={selected === 'misc' ? 'selected' : ''} onClick={() => change('misc')}>Misc</div>
            <div onClick={() => promptService.doPrompt()}>Install app</div>
        </div>
    )
}