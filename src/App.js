import React, { useEffect, useState } from 'react';
import './App.css';
import Data from './db/Data';
// import data  from './data';


// https://mui.com/ ==> for UI


function App() {

  const [currentId, setCurrentId] = useState(100)

  // useEffect(() => {
  //   window.addEventListener('online', () => {
  //     console.log('Online')
  //   });
  //   window.addEventListener('offline', () => {
  //     console.log('Offline')

  //   });

  //   return () => {
  //     window.removeEventListener('online', console.log('rm Online'));
  //     window.removeEventListener('offline', console.log('rm Offline'));
  //   };
  // }, []);


  // handle filter button

  const handleFilterBtn = (id) => {

    // check if its a new id 

    // if(currentId === id) return

    // change displaylist to match current id

    // setCurrentID(id)


  }



  return (
    <div className="App">
      <aside>

        <button>
          100
        </button>
        <button>
          200
        </button>
        <button>
          300
        </button>
        <button>
          400
        </button>
        <button>
          500
        </button>
        <button>
          600
        </button>
        <button>
          700
        </button>

      </aside>

      <main>

        

      </main>
    </div>
  );
}

// Click outside
// https://mui.com/components/click-away-listener/

// Modal
// https://mui.com/components/modal/#main-content

export default App;
