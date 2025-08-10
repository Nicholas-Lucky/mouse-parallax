import './App.css';
import { Mouse } from './Mouse.jsx'
import { FollowCursor } from './FollowCursor.jsx'
import { ClickDrag } from './ClickDrag.jsx'
import { Duck } from './Duck.jsx'
import { FlockOfDucksOne } from './FlockOfDucksOne.jsx'
import { DistanceToElement } from './DistanceToElement.jsx'
import { FlockOfDucksTwo } from './FlockOfDucksTwo.jsx'

function App() {
  return (
    <>
      <Mouse />
      <FollowCursor />
      <ClickDrag />
      <Duck />
      <FlockOfDucksOne />
      <DistanceToElement />
      <FlockOfDucksTwo />
    </>
  );
}

export default App;
