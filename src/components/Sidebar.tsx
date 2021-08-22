import React from 'react';
import CreateNote from './CreateNote';
import ListItem from './ListItem';

interface ISidebar {
    notes: Object[],
    view: boolean
}

const Sidebar: React.FC<ISidebar> = ({notes, view}) => {
    return (
        <aside className={view ? "sidebar blocks" : "sidebar"}>
            <ul className="sidebar__list">
                <CreateNote />
                {notes && notes.map((item:any,index:any) => {
                    return (
                        <ListItem
                            key={index}
                            id={index}
                            title={item.title}
                            time={item.time}
                            text={item.text}
                        />
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar;