import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NoteText from './components/NoteText';
import {useSelector, useDispatch} from 'react-redux';
import {setNotesAction, setViewNotes} from './redux/actions/index';
<<<<<<< HEAD
import {Switch, Route, HashRouter} from 'react-router-dom';
=======
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
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
<<<<<<< HEAD
    // eslint-disable-next-line
=======
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
  }, [dispatch]);

  return (
    <div className="app">
<<<<<<< HEAD
      <HashRouter>
        <ModalNotification
          title="Удаление заметки"
          description="Вы уверены, что хотите удалить заметку?"
          notes={notesRedux}
        />
=======
      <ModalNotification
        title="Удаление заметки"
        description="Вы уверены, что хотите удалить заметку?"
        notes={notesRedux}
      />
      <BrowserRouter>
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
        <Header />
        <main className="app__content">  
            {view ? <Route exact path="/">
              <Sidebar notes={notesRedux} view={view} />  
            </Route> : <Sidebar notes={notesRedux} view={view} />}
            
            <Switch>
<<<<<<< HEAD
            <Route exact path="/create">
=======
              <>
                <Route exact path="/create">
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
                  <NoteText
                    title='Новая заметка'
                    time={new Date().toDateString()}
                    text='No additional text'
                    create={true}
                  />
                </Route>
                {notesRedux.length ? notesRedux.map((item: any,index: any) => {
                  return (
<<<<<<< HEAD
                    <Route path={"/note/"+item.id} key={index}>
=======
                    <Route exact path={"/note/"+item.id} key={index}>
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
                      <NoteText
                        title={item.title}
                        time={item.time}
                        text={item.text}
                        create={false}
                      />
                    </Route>
                  )
                }) : false}
<<<<<<< HEAD
            </Switch>
        </main>
      </HashRouter>
=======
                <Route exact path="*">
                  <Redirect to={"/create"} />
                </Route>
              </>
            </Switch>
        </main>
      </BrowserRouter>
>>>>>>> e2f395fdea78a990db2b8f731cc3818eb0f79b0e
    </div>
  );
}

export default App;
