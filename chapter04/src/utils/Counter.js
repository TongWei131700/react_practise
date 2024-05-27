import {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <p>The current count is: {count}.</p>
      <button onClick = {()=>{setCount(count+1)}}>
        Add 1
      </button>
    </div>
    <!--
{`import {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The current count is: {count}.</p>
      <button onClick = {()=>{setCount(count+1)}}>
        Add 1
      </button>
    </div>
  );
}

export default Counter;`}
    -->
    </>
  );
}

export default Counter;