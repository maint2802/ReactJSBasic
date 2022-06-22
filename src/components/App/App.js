import logo from '../../logo.svg';
import './App.scss';
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import { useState, useEffect } from 'react'
import Todo from '../Todo'
import Covid from '../Covid/Covid'
import Blogs from '../Blogs/Blogs'
import DetailBlogs from '../Blogs/DetailBlogs'
import AddBlog from '../Blogs/AddBlog'
import NotFound from '../NotFound/NotFound'
import YoutubeSearch from '../YoutubeSearch/YoutubeSearch'
import { CountDown, NewCountDown } from '../CountDown/CountDown'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  const handleAddClick = () => {
    const id = Math.floor(Math.random() * 1000)
    let newName = { id, name }
    setListName([...listName, newName])
  }

  const [name, setName] = useState('Mai')
  const [listName, setListName] = useState([
    { id: 1, name: 'mai', sex: 'female' },
    { id: 2, name: 'ha', sex: 'female' },
    { id: 3, name: 'nam', sex: 'male' }
  ])

  const deleteTodo = (name) => {
    let listNameCop = [...listName]
    listNameCop = listNameCop.filter(item => item.id !== name.id)
    setListName(listNameCop)
  }

  useEffect(() => {
    // console.log('effect hook')
  }, [listName])

  const onTimeUp = () => {
    alert('timeup')
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/covid"><Covid /></Route>
            <Route path="/blogs" exact><Blogs /></Route>
            <Route path="/blogs/:id"><DetailBlogs /></Route>
            <Route path="/add-blog"><AddBlog /></Route>
            <Route path="/youtube"><YoutubeSearch /></Route>
            <Route path="/todo">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button onClick={handleAddClick}>Click me</button>
              <Todo
                listName={listName}
                title={'All todo: '}
                deleteTodo={deleteTodo} />
            </Route>
            <Route path="/countdown">
              <CountDown />
              <span>--------------------------</span>
              <NewCountDown />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

