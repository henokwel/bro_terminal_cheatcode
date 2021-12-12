import React, { useEffect, useState } from 'react';
import './App.css';
import Data from './db/Data';
// import data  from './data';


// https://mui.com/ ==> for UI


function App() {

  const [currentId, setCurrentId] = useState(200)

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


    console.log(id);

    // check if its a new id 

    if (currentId === id) return

    // change displaylist to match current id

    setCurrentId(id)


  }

  // Data["200"].map(item => console.log(item))


  return (
    <div className="App">
      <aside>

        <button onClick={() => handleFilterBtn(100)}>
          <h2>
            100
          </h2>
        </button>
        <button onClick={() => handleFilterBtn(200)}>
          <h2>
            200
          </h2>
        </button>
        <button onClick={() => handleFilterBtn(300)}>
          <h2>
            300
          </h2>
        </button>
        <button onClick={() => handleFilterBtn(400)}>
          <h2>
            400
          </h2>
        </button>
        <button onClick={() => handleFilterBtn(500)}>
          <h2>
            500
          </h2>
        </button>
        <button onClick={() => handleFilterBtn(600)}>
          <h2>
            600
          </h2>
        </button>
        <button onClick={() => handleFilterBtn(700)}>
          <h2>
            700
          </h2>
        </button>

      </aside>

      <main>

        {
          Data[currentId].map(item => {
            const { id, key } = item

            return <div className='controll_Card'>
              <h3>{id}</h3>
              <div className='controll_Card_controller'>
                {key.map(controller => <li>{`${controller < 10 ? `0` + controller : controller}`}</li>)}
              </div>
            </div>
          }
          )
        }

      </main>
    </div>
  );
}

// Click outside
// https://mui.com/components/click-away-listener/

// Modal
// https://mui.com/components/modal/#main-content

export default App;
