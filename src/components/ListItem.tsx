import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface INote {
    title: string,
    text: string,
    id: number
}

const ListItem: React.FC<INote> = ({title, text, id}) => {
    const view = useSelector((state: any) => state.view);

    return (
        <NavLink to={"/note/"+id}>
          <div className={"note"}>
              <header className="note__header">
                  <h2 className={!view ? "note__header-title lines" : "note__header-title block"}>{title}</h2>
              </header>
              <div className="note__down">
                  <p className={!view ? "note__text lines" : "note__text block"}>{text}</p>
              </div>
          </div>
        </NavLink>
    )
}

export default ListItem;
