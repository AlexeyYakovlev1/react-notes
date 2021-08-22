import React from 'react';
import { useDispatch } from 'react-redux';
import { setNotesAction } from '../redux/actions/index';

interface INote {
    title: string,
    time: string,
    text: string,
    create: boolean
}

const NoteText: React.FC<INote> = ({title, time, text, create}) => {
    const [titleNote, setTitleNote] = React.useState(title);
    const [textNote, setTextNote] = React.useState(text);
    const titleInputRef = React.useRef(null);
    const titleRef = React.useRef(null);
    const textInputRef = React.useRef(null);
    const textRef = React.useRef(null);
    const dispatch = useDispatch()

    function openTitleInput() {
        const currentInputTitle: any = titleInputRef.current;
        const currentTitle: any = titleRef.current;
        
        currentInputTitle.classList.remove('block-hidden');
        currentTitle.classList.add('block-hidden');
        currentInputTitle.focus();
    }

    function closeTitleInput(event: any) {
        if (event.target.className.includes('note-main')) {
            const currentInput: any = titleInputRef.current;
            const currentTitle: any = titleRef.current;
            const currentInputText: any = textInputRef.current;
            const currentText: any = textRef.current;
            
            currentInputText.classList.add('block-hidden');
            currentText.classList.remove('block-hidden');
            
            currentInput.classList.add('block-hidden');
            currentTitle.classList.remove('block-hidden');
            currentTitle.focus();
        }
    }

    function openTextInput() {
        const currentInput: any = textInputRef.current;
        const currentText: any = textRef.current;

        currentInput.classList.remove('block-hidden');
        currentText.classList.add('block-hidden');
        currentInput.focus();
    }

    function getData(event: any) {
        event.preventDefault();

        const d = new Date();
        const now = d.toDateString();
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        const note = {
            title: titleNote,
            text: textNote,
            time: now
        };

        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        dispatch(setNotesAction(notes));
    }

    function changeNote(event: any) {
        event.preventDefault();
      
        const urlArr:String[] = window.location.href.split('/');
        const currentId:number = +urlArr[urlArr.length-1];
        const currentNote = JSON.parse(localStorage.getItem('notes') || '[]').filter((item:any,index:any) => {
            return index === currentId;
        })[0];

        const d = new Date();
        const now = d.toDateString();

        currentNote.title = titleNote;
        currentNote.text = textNote;
        currentNote.time = now;
    
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes[currentId] = currentNote;

        localStorage.setItem('notes', JSON.stringify(notes));
        dispatch(setNotesAction(notes));
    }

    return (
        <div
          onClick={event => closeTitleInput(event)}
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
                            onChange={event => setTitleNote(event.target.value)}
                            type="text"
                            className="note-text__header-title-input block-hidden"
                            required
                            ref={titleInputRef}
                        />
                        <h2
                            ref={titleRef}
                            onClick={() => openTitleInput()}
                            className="note-text__header-title"
                        >
                            {titleNote}
                        </h2>
                    </header>
                    <textarea
                        ref={textInputRef}
                        className="note-text__description-input block-hidden"
                        value={textNote}
                        onChange={event => setTextNote(event.target.value)}
                    ></textarea>
                    <p
                        onClick={() => openTextInput()}
                        ref={textRef}
                        className="note-text__description"
                    >
                        {textNote}
                    </p>
                </form>
            </div>
        </div>
    )
}

export default NoteText;