import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from "./component/Box";

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } })
  }
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 10 } })
  }
  const multiply = () => {
    dispatch({ type: "MULTI", payload: { num: 3 } })
  }
  return (
    <div className="container">
      <h1 className="count">{count}</h1>
      <button onClick={increase}>+ 5</button>

      <h1>{decrease}</h1>
      <button onClick={decrease}>- 10</button>

      <h1>{multiply}</h1>
      <button onClick={multiply}>* 3</button>
      <Box />
    </div>
  );
}

export default App;
