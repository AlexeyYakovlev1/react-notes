import React from 'react';
import { NavLink } from 'react-router-dom';

interface INote {
    title: string,
    time: string,
    text: string,
    id: number
}

const ListItem: React.FC<INote> = ({title, time, text, id}) => {
    return (
        <NavLink to={"/note/"+id}>
          <div className={"note"}>
              <header className="note__header">
                  <h2 className="note__header-title">{title}</h2>
              </header>
              <div className="note__down">
                  {/* <span className="note__time">{time}</span> */}
                  <p className="note__text">{text}</p>
              </div>
          </div>
        </NavLink>
    )
}

export default ListItem;
