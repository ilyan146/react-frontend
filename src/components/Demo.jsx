import {MyComponent, MyButton, FancyButton} from './index.js';

const Demo = () => {
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
      <FancyButton large={false} rounded={false}>
        my first fancy button
      </FancyButton>
      <FancyButton large={true} rounded={true}>
        Seond fancy button
      </FancyButton>
    </div>
    
  </div>;
};
export default Demo;
