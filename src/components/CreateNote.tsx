import React from 'react';
import { NavLink } from 'react-router-dom';

const CreateNote: React.FC = () => {
    const url = window.location.href.split('/');

    return (
        <NavLink to="/create">
          <div className={!url[url.length-1] ? "note create-note active" : "note create-note"}>
              <header className="note__header">
                <h2 className="note__header-title">Новая заметка</h2>
              </header>
              <div className="note__down">
                  {/* <span className="note__time">{now}</span> */}
                  <p className="note__text">No additional text</p>
              </div>
          </div>
        </NavLink>
    )
}

export default CreateNote;