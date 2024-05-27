import {useState} from 'react';
import NoLeakCounter from './NoLeakCounter';

function NoLeakCounterController() {
  const [displayCounter,setDisplayCounter] = useState(true);

  function toggleCounter(){
      setDisplayCounter(!displayCounter);
  };

  return (
    <>
    <div>
      {displayCounter ? <NoLeakCounter /> : null}
      <button onClick={toggleCounter}>Toggle Count</button>
    </div>
    <!--
{`import {useState} from 'react';
import NoLeakCounter from './NoLeakCounter';

function NoLeakCounterController() {
  const [displayCounter,setDisplayCounter] = useState(true);

  function toggleCounter(){
      setDisplayCounter(!displayCounter);
  };

  return (
    <div className="App">
      {displayCounter ? <NoLeakCounter /> : null}
      <button onClick={toggleCounter}>Toggle Count</button>
    </div>
  );
}
export default NoLeakCounterController;
`}
    -->
    </>
  );
}
export default NoLeakCounterController;
