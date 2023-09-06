import './App.css'

function App() {
  const googleHandler = () => {
	window.location.replace("http://localhost:8080/auth/google")
  }

  return (
    <>
      <h1>Oauth Client</h1>
      <div className="card">
        <button onClick={ googleHandler }>
          Google Login
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
