import React, {useState} from 'react';
import {people, Person} from './people';
import './PeopleOverview.css';

export const PeopleOverview = () => {
    const [selected, setSelected] = useState<string>('Alles');
    const [filter, setFilter] = useState<string>(undefined);


    const categories = ['Alles', ...getCategoriesSorted()];
    const categoriesHtml = categories.map(c => {
        if (c === selected) {
            return <div key={"category-" + c}>{c}</div>
        } else {
            return <div key={"category-" + c}><a href="#" onClick={() => setSelected(c)}>{c}</a></div>
        }
    });

    const reset = () => setSelected('Alles');
    const peopleSorted = people.sort(comparePeople);
    const peopleRows = peopleSorted
        .filter(p => (selected === 'Alles') || p.categories.includes(selected))
        .filter(p => {
            return !filter || !filter.trim || p.name.toLowerCase().includes(filter.toLowerCase()) || p.description.toLowerCase().includes(filter.toLowerCase())
        })
        .map(person => (
            <tr className="person-short-description" key={"person-" + person.name} id={toPersonId(person.name)}>
                <td className="name">{person.name}{person.alive ? '' : ' †' }</td>
                <td className="description">{replaceNameLinksWithHtmlLinks(person.description, reset)}</td>
                <td className="categories">{person.categories.map((c, i) => (
                    <span key={person.name + "-" + c}>
                        {i ? ', ' : ''}<a href="#" onClick={() => setSelected(c)}>{c}</a>
                    </span>
                ))}</td>
            </tr>

        ));

    return (<div>
        <div id="search">Search: <input type="text" onChange={v => setFilter(v.target.value)}/></div>
        <div className="categories">
            <div>Filter:</div>
            {categoriesHtml}</div>
        <table>
            <tbody>{peopleRows}</tbody>
        </table>
    </div>)
}

function comparePeople(a: Person, b: Person) {
    return (a.nameAlphabet || a.name).localeCompare(b.nameAlphabet || b.name);
}

function getCategoriesSorted() {
    return new Set(people
        .flatMap(p => p.categories)
        .sort((a, b) => a.localeCompare(b)));
}

function toPersonId(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/ /g, '-');
}

function replaceNameLinksWithHtmlLinks(description: string, resetCallback: () => void) {
    return description.split(/(\[.+?\])/g).map((v, i) => {
        if (v.startsWith('[')) {
            const cleaned = v.substring(1, v.length-1);
            return (<a key={"ds" + i} href={'#' + toPersonId(cleaned)} onClick={resetCallback}>{cleaned}</a>);
        } else {
            return <span key={"d" + i}>{v}</span>
        }
    });
}
