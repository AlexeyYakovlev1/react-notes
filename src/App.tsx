import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NoteText from './components/NoteText';
import {useSelector, useDispatch} from 'react-redux';
import {setNotesAction, setViewNotes} from './redux/actions/index';
import {Switch, Route, HashRouter} from 'react-router-dom';
import ModalNotification from './components/ModalNotification';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const notesStorage = JSON.parse(localStorage.getItem('notes') || '[]');
  const viewStorage = JSON.parse(localStorage.getItem('view') || 'true'); 
  const notesRedux = useSelector((state: any) => state.notes.items);
  const view = useSelector((state: any) => state.view);

  React.useEffect(() => {
    dispatch(setNotesAction(notesStorage));
    dispatch(setViewNotes(viewStorage));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="app">
      <HashRouter>
        <ModalNotification
          title="Удаление заметки"
          description="Вы уверены, что хотите удалить заметку?"
          notes={notesRedux}
        />
        <Header />
        <main className="app__content">  
            {view ? <Route exact path="/">
              <Sidebar notes={notesRedux} view={view} />  
            </Route> : <Sidebar notes={notesRedux} view={view} />}
            
            <Switch>
            <Route exact path="/create">
                  <NoteText
                    title='Новая заметка'
                    time={new Date().toDateString()}
                    text='No additional text'
                    create={true}
                  />
                </Route>
                {notesRedux.length ? notesRedux.map((item: any,index: any) => {
                  return (
                    <Route path={"/note/"+item.id} key={index}>
                      <NoteText
                        title={item.title}
                        time={item.time}
                        text={item.text}
                        create={false}
                      />
                    </Route>
                  )
                }) : false}
            </Switch>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
