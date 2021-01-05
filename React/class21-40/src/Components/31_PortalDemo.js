import ReactDOM from 'react-dom'

 function PortalDemo() {
  return ReactDOM.createPortal( 
    <div>
      <h1>Alô</h1>
    </div>, document.getElementById("root__new")
  )
}

export default PortalDemo