// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const inputRef = React.useRef(null);
  const [error, setError] = React.useState(null);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    onSubmitUsername(inputValue);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input onChange={handleChange} id='usernameInput' type="text" ref={inputRef}/>
      </div>
      <button disabled={error} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
