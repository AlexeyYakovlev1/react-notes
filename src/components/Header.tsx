import React from 'react';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {setNotesAction, setViewNotes, setEditAction, setImagesAction} from '../redux/actions/index';
import {ReactComponent as Lines} from '../assets/images/lines-black.svg';
import {ReactComponent as Blocks} from '../assets/images/blocks-black.svg';
import {ReactComponent as Edit} from '../assets/images/edit-black.svg';
import {ReactComponent as Delete} from '../assets/images/delete-black.svg';
import {ReactComponent as Image} from '../assets/images/image.svg';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = React.useState('');
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const imageRef = React.useRef(null);
    
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

    function addImage(event: any) {
      const target: any = event.target;
      const url = window.location.href.split('/');
      const currentId = url[url.length-1];

      if (!currentId) {
        return alert('Выберите заметку или добавьте новую');
      };

      if (!target.files.length) return;

      const files: Array<object> = Array.from(target.files);

      files.forEach((file: any) => {
        const reader: any = new FileReader();

        reader.onload = (event: Event) => {
          const target: any = event.target;
          const src = target.result;
          const images = [];
          const image = {
            name: file.name,
            type: file.type,
            size: file.size,
            src
          }

          images.push(image);
          dispatch(setImagesAction(images, currentId));
        }
  
        reader.readAsDataURL(file);
      })
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
                    <button onClick={() => dispatch(setEditAction(true))} className="header__settings-button">
                        <Edit />
                    </button>
                    <button onClick={() => {
                        const inputCurrent:any = imageRef.current;
                        const acceptTypes: String[] = ['image/jpg', 'image/jpeg', 'image/svg', 'image/gif', 'image/png'];
                        inputCurrent.setAttribute('accept', acceptTypes.join(','));
                        inputCurrent.click()
                      }}
                      className="header__settings-button">
                      <Image />
                    </button>
                    <input multiple onChange={event => addImage(event)} ref={imageRef} style={{display: 'none'}} type="file" />
                </div>
                <form onSubmit={event => searchNotes(event)} action="/" className="header__search">
                    <NavLink to="/">
                      <input
                          value={search}
                          onChange={event => setSearch(event.target.value)}
                          type="text"
                          placeholder="Search"
                      />
                    </NavLink>
                </form>
            </div>
        </header>
    )
}

export default Header;