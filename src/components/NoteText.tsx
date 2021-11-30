import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotesAction, setEditAction } from '../redux/actions/index';
import { ReactComponent as Done } from '../assets/images/done.svg';
<<<<<<< HEAD
import {useHistory} from "react-router-dom";
=======
import Image from './Image';
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e

interface INote {
    title: string,
    time: string,
    text: string,
    create: boolean
}

const NoteText: React.FC<INote> = ({title, time, text, create}) => {
<<<<<<< HEAD
    const history = useHistory();
=======
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
    const [titleNote, setTitleNote] = React.useState(title);
    const [textNote, setTextNote] = React.useState(text);
    const titleInputRef = React.useRef(null);
    const titleRef = React.useRef(null);
    const textInputRef = React.useRef(null);
    const textRef = React.useRef(null);
    const dispatch = useDispatch();
    const edit = useSelector((state:any) => state.edit);
<<<<<<< HEAD

=======
    
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
    function closeNoteInput(event: any) {
      if (!event.target.classList.length) return;
        
      if (event.target.className.includes('note-main')) {
          const currentInput: any = titleInputRef.current;
          const currentTitle: any = titleRef.current;
          const currentInputText: any = textInputRef.current;
          const currentText: any = textRef.current;
           
          currentInput.classList.add('block-hidden');
          currentTitle.classList.remove('block-hidden');
          currentInputText.classList.add('block-hidden');
          currentText.classList.remove("block-hidden");

          dispatch(setEditAction(false));          
      }
    }

    function getData(event: any) {
        event.preventDefault();

        if (titleNote === title || textNote === text) {
          return alert('Поменяйте заголовок или описание для заметки');
        }

        const d = new Date();
        const now = d.toDateString();
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        const noteId = '_' + Math.random().toString(36).substr(2, 9);
        
        const note = {
            id: noteId,
            title: titleNote,
            text: textNote,
            time: now
        };
        
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        dispatch(setNotesAction(notes));
        alert(`Заметка "${note.title}" создана!`);
<<<<<<< HEAD
        history.push(`/note/${note.id}`);
=======
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
        setTitleNote('Новая заметка');
        setTextNote('No additional text');
    }

    function changeNote(event: any) {
        event.preventDefault();
      
        const urlArr:String[] = window.location.href.split('/');
        const currentId:String = urlArr[urlArr.length-1];
        const currentNote = JSON.parse(localStorage.getItem('notes') || '[]').filter((item:any,index:any) => {
            return item.id === currentId;
        })[0];

        const d = new Date();
        const now = d.toDateString();

        if (currentNote) {
          currentNote.title = titleNote;
          currentNote.text = textNote;
          currentNote.time = now;

          const notes = JSON.parse(localStorage.getItem('notes') || '[]');
          let currentNoteIndex = 0;

<<<<<<< HEAD
          notes.forEach((item:any) => {
=======
          notes.map((item:any) => {
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
              if (item.id === currentId) {
                currentNoteIndex = notes.indexOf(item);
              };
          })

          notes[currentNoteIndex] = currentNote;

          localStorage.setItem('notes', JSON.stringify(notes));
          dispatch(setNotesAction(notes));
        }
    }

    return (
<<<<<<< HEAD
        <>
            <div
                onClick={event => closeNoteInput(event)}
                className="note-text note-main"
            >
                <div className="container">
                    <form
                        onSubmit={event => create ? getData(event) : changeNote(event)}
                        action="/"
                        className="note-text__form"
                    >
                        <header className="note-text__header">
                            <span className="note-text__header-time">{time}</span>
                            <input
                                value={titleNote}
                                onChange={event => {
                                setTitleNote(event.target.value);
                                changeNote(event);
                                }}
                                type="text"
                                className={edit ? "note-text__header-title-input" : "note-text__header-title-input block-hidden"}
                                required
                                ref={titleInputRef}
                            />
                            <h2
                                ref={titleRef}
                                className={edit ? "note-text__header-title block-hidden" : "note-text__header-title"}
                            >
                                {titleNote}
                            </h2>
                        </header>
                        <textarea
                            wrap="hard"
                            ref={textInputRef}
                            className={edit ? "note-text__description-input" : "note-text__description-input block-hidden"}
                            value={textNote}
                            onChange={event => {
                            setTextNote(event.target.value);
                            changeNote(event);
                            }}
                        ></textarea>
                        <p
                            ref={textRef}
                            className={edit ? "note-text__description block-hidden" : "note-text__description"}
                        >
                            {textNote}
                        </p>
                    </form>
                    {create && <div onClick={event => getData(event)} className="done-button">
                    <div className="done-button__photo">
                        <Done />
                    </div>
                    </div>}
                </div>
            </div>
        </>
=======
        <div
          onClick={event => closeNoteInput(event)}
          className="note-text note-main"
        >
            <div className="container">
                <form
                    onSubmit={event => create ? getData(event) : changeNote(event)}
                    action="/"
                    className="note-text__form"
                >
                    <header className="note-text__header">
                        <span className="note-text__header-time">{time}</span>
                        <input
                            value={titleNote}
                            onChange={event => {
                              setTitleNote(event.target.value);
                              changeNote(event);
                            }}
                            type="text"
                            className={edit ? "note-text__header-title-input" : "note-text__header-title-input block-hidden"}
                            required
                            ref={titleInputRef}
                        />
                        <h2
                            ref={titleRef}
                            className={edit ? "note-text__header-title block-hidden" : "note-text__header-title"}
                        >
                            {titleNote}
                        </h2>
                    </header>
                    <textarea
                        wrap="hard"
                        ref={textInputRef}
                        className={edit ? "note-text__description-input" : "note-text__description-input block-hidden"}
                        value={textNote}
                        onChange={event => {
                          setTextNote(event.target.value);
                          changeNote(event);
                        }}
                    ></textarea>
                    <p
                        ref={textRef}
                        className={edit ? "note-text__description block-hidden" : "note-text__description"}
                    >
                        {textNote}
                    </p>
                </form>
                {create && <div onClick={event => getData(event)} className="done-button">
                  <div className="done-button__photo">
                    <Done />
                  </div>
                </div>}
            </div>
        </div>
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
    )
}

export default NoteText;