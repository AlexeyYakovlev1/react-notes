import React from 'react';
import {useDispatch} from 'react-redux';
import {setNotesAction} from '../redux/actions/index';
import {ReactComponent as Close} from '../assets/images/close.svg';
<<<<<<< HEAD
import {useHistory} from "react-router-dom";
=======
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e

interface INotification {
  title: string,
  description: string,
  notes: Object[]
}

const ModalNotification: React.FC<INotification> = ({title, description = '', notes}) => {
<<<<<<< HEAD
  const history = useHistory();
=======
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
  const dispatch = useDispatch();
  const notificationRef = React.useRef(null);
  
  function closeNotification() {
    const notificationElement:any = notificationRef.current;
    notificationElement.classList.add('block-hidden')
    document.body.style.overflow = 'visible';
  }

  function deleteNote() {
    const url = window.location.href.split('/');
    const currentId = url[url.length-1];
    
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const currentNote = notes.filter((item:any,index:any) => {
        return item.id === currentId;
    })[0];

    const newNotes = notes.filter((item:any,index:any) => {
        return currentNote.title !== item.title;
    });
<<<<<<< HEAD
    
    localStorage.setItem('notes', JSON.stringify(newNotes));
    dispatch(setNotesAction(newNotes));
    closeNotification();
    history.push("/create");
=======

    localStorage.setItem('notes', JSON.stringify(newNotes));
    dispatch(setNotesAction(newNotes));
    closeNotification();
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
    alert(`Заметка ${currentNote.title} успешно удалена`);
  }
  
  return (
<<<<<<< HEAD
    <>
      <div ref={notificationRef} className="notification block-hidden">
        <div className="notification__content">
          <header className="notification__content-header">
            <h3 className="notification__content-title">{title}</h3>
            <span onClick={() => closeNotification()} className="notification__content-close">
              <Close />
            </span>
          </header>
          <div className="notification__content-info">
            <p className="notification__content-info-text">{description}</p>
          </div>
          <div className="notification__content-down">
            <button onClick={() => deleteNote()} className="notification__button done">Да</button>
            <button onClick={() => closeNotification()} className="notification__button bad">Нет</button>
          </div>
        </div>
      </div>
    </>
=======
    <div ref={notificationRef} className="notification block-hidden">
      <div className="notification__content">
        <header className="notification__content-header">
          <h3 className="notification__content-title">{title}</h3>
          <span onClick={() => closeNotification()} className="notification__content-close">
            <Close />
          </span>
        </header>
        <div className="notification__content-info">
          <p className="notification__content-info-text">{description}</p>
        </div>
        <div className="notification__content-down">
          <button onClick={() => deleteNote()} className="notification__button done">Да</button>
          <button onClick={() => closeNotification()} className="notification__button bad">Нет</button>
        </div>
      </div>
    </div>
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
  )
}

export default ModalNotification;
