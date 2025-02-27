import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFount from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route component={NotFount} />
  </BrowserRouter>
)

export default App
