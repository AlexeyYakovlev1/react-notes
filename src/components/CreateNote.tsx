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
<<<<<<< HEAD
=======
                  {/* <span className="note__time">{now}</span> */}
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
                  <p className="note__text">No additional text</p>
              </div>
          </div>
        </NavLink>
    )
}

export default CreateNote;