import React from 'react';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {setNotesAction, setViewNotes} from '../redux/actions/index';
import {ReactComponent as Lines} from '../assets/images/lines-black.svg';
import {ReactComponent as Blocks} from '../assets/images/blocks-black.svg';
import {ReactComponent as Edit} from '../assets/images/edit-black.svg';
import {ReactComponent as Delete} from '../assets/images/delete-black.svg';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = React.useState('');
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');

    function openNotification() {
        const url = window.location.href.split('/');
        const currentId = url[url.length-1];
        const forbiddenId = ['', 'create'];

        if (forbiddenId.includes(currentId)) {
          return alert('Заметка не найдена');
        }

        const notification: any = document.querySelector('.notification');
        notification.classList.remove('block-hidden')
        document.body.style.overflow = 'hidden';
    }

    function searchNotes(event:any) {
      event.preventDefault();
      let searchNotes = [];

      if (search) {
        searchNotes = notes.filter((note:any, index:any) => {
          return note.title.toLowerCase().includes(search.trim().toLowerCase());
        })
  
        dispatch(setNotesAction(searchNotes));
      
        if (!searchNotes.length) {
          return alert(`Заметки ${search} не найдено`);
        }
      } else if (!search) {
        dispatch(setNotesAction(notes));
      }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__settings">
                    <div className="header__settings-block">
                      <NavLink to="/create">
                        <button
                              onClick={() => {
                                localStorage.setItem('view', JSON.stringify(false));
                                dispatch(setViewNotes(false));
                              }}
                              className="list-view header__settings-button"
                          >
                            <Lines />
                          </button>
                      </NavLink>
                      <NavLink to="/">
                        <button
                              onClick={() => {
                                localStorage.setItem('view', JSON.stringify(true));
                                dispatch(setViewNotes(true));
                              }}
                              className="blocks-view header__settings-button"
                          >
                              <Blocks />
                          </button>
                      </NavLink>
                    </div>
                    <button onClick={() => openNotification()} className="header__settings-button">
                        <Delete />
                    </button>
                    <button className="header__settings-button">
                        <Edit />
                    </button>
                </div>
                <form onSubmit={event => searchNotes(event)} action="/" className="header__search">
                    <input
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>
        </header>
    )
}

export default Header;