import React from 'react';
import {useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {setViewNotes} from '../redux/actions/index';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = React.useState('');

    function openNotification() {
        const url = window.location.href.split('/');
        const currentId = url[url.length-1];

        if (currentId === '' || 'create') {
          return alert('Заметка не найдена');
        }

        const notification: any = document.querySelector('.notification');
        notification.classList.remove('block-hidden')
        document.body.style.overflow = 'hidden';
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
                              <img
                                  src="/images/lines-black.svg"
                                  alt="lines"
                              />
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
                              <img
                                  src="/images/blocks-black.svg"
                                  alt="blocks"
                              />
                          </button>
                      </NavLink>
                    </div>
                    <button onClick={() => openNotification()} className="header__settings-button">
                        <img src="/images/delete-black.svg" alt="delete" />
                    </button>
                    <button className="header__settings-button">
                        <img src="/images/edit-black.svg" alt="edit" />
                    </button>
                </div>
                <form action="/" className="header__search">
                    <input
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                        type="text"
                        placeholder="Search"
                        required
                    />
                </form>
            </div>
        </header>
    )
}

export default Header;