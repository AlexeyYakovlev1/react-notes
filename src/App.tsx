import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NoteText from './components/NoteText';
import {useSelector, useDispatch} from 'react-redux';
import {setNotesAction, setViewNotes} from './redux/actions/index';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ModalNotification from './components/ModalNotification';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const notesStorage = JSON.parse(localStorage.getItem('notes') || '[]');
  const viewStorage = JSON.parse(localStorage.getItem('view') || 'false'); 
  const notesRedux = useSelector((state: any) => state.notes.items);
  const view = useSelector((state: any) => state.view);

  React.useEffect(() => {
    dispatch(setNotesAction(notesStorage));
    dispatch(setViewNotes(viewStorage));
  }, [dispatch]);

  return (
    <div className="app">
      <ModalNotification
        title="Удаление заметки"
        description="Вы уверены, что хотите удалить заметку?"
        notes={notesRedux}
      />
      <BrowserRouter>
        <Header />
        <main className="app__content">  
            {view ? <Route exact path="/">
              <Sidebar notes={notesRedux} view={view} />  
            </Route> : <Sidebar notes={notesRedux} view={view} />}
            
            <Switch>
              <>
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
                    <Route exact path={"/note/"+index} key={index}>
                      <NoteText
                        title={item.title}
                        time={item.time}
                        text={item.text}
                        create={false}
                      />
                    </Route>
                  )
                }) : false}

                <Route exact path="*">
                  <Redirect to={"/create"} />
                </Route>
              </>
            </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
