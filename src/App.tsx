import React, {useState} from 'react';
import "./App.css"
import {PeopleOverview} from './PeopleOverview';
import {Menu} from './Menu';
import {Quests} from './Quests';
import {Misc} from './Misc';

export const App = () => {

    const [selected, setSelected] = useState<string>('npcs');

    return (
        <React.Fragment>
            <Menu selectedChanged={setSelected} />
            { selected === 'npcs' ? <PeopleOverview/> : '' }
            { selected === 'quests' ? <Quests/> : '' }
            { selected === 'misc' ? <Misc/> : '' }
        </React.Fragment>
    );
}

