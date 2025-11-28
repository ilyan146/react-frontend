import {MyComponent, MyButton} from './components';
import './mine.css'

const App = () => {
  return <div className="grid grid-cols-2 gap-4">
    <div> {/*className="border-2 border-red-500"*/}
      <MyComponent bgColor="lightblue" height={150}>
        hello!
        john
      </MyComponent>
      <MyButton />
    </div>
    <div> {/*className="border-2 border-blue-500"*/}
      <MyComponent bgColor="Lavender" height={150}>
        Welcome to my app!
      </MyComponent>
    </div>
    
  </div>;
};

export default App
