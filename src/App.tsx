import { useState } from 'react';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return <div>{count}</div>;
}

export default App;
