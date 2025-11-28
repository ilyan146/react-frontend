import {MyComponent, MyButton, FancyButton, Header, Search, Footer } from './components';
import './mine.css'

const App = () => {

  return <div className="h-screen flex flex-col">
    <Header />
    <Search />
    <Footer />
  </div>
};

export default App
