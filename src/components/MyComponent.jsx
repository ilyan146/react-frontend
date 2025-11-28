const MyComponent = (props) => {
  const {children, bgColor, height} = props
  console.log("MyComponent props:", props);
  return <div>
    <div>
      This is my component
    </div>
    <div className="text-xl text-green-400">
      This is the Children: {children}
    </div>
    <div className = "text-rose-300 bg-red-700">
        Background color is: {bgColor}
    </div>
    <div className = "text-slate-600 border-y-4 border-black">
        Height is: {height}px
    </div>
    <div className = "my-custom-box fancy-text card-style">
        <h1>{children}</h1>
    </div>
    <div style={{backgroundColor: bgColor, height: height+ 'px'}}>
        <p>This is a <strong>paragraph</strong> with a <a href="#">link</a>.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li >
        </ul>
    </div>
  </div>
};

export default MyComponent;