import React, { useState } from 'react';
import './App.css';
import Data from './db/Data';




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


  //  ==> check if user's device

  
  // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //   // true for mobile device
  //  console.log("mobile device");
  // }else{
  //   // false for not mobile device
  //  console.log("not mobile device");
  // }

  
  const handleFilterBtn = (id) => {

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
          Data[currentId].map((item, index) => {
            const { id, key } = item

            // return <ControllCard id={id}  key={id + 1} keys={key}/>
            return <div className='controll_Card' key={index}>
              <h3>{id}</h3>
              <div className='controll_Card_controller'>
                {/* {key.map(controll => <MiniControllerCard item={controll} id={id} />)} */}
                {key.map((controller, index) => <li key={index}>{`${controller < 10 ? `0` + controller : controller}`}</li>)}
              </div>
            </div>
          }
          )
        }

      </main>
    </div>
  );
}




// function ControllCard({ id, keys }) {
//   // console.log('Kye ===>>' , key);

//   return (
//     <div className='controll_Card'>
//       <h3>{id}</h3>
//       <MiniControllerCard item={keys} id={id} />
//       {/* <div className='controll_Card_controller'>
//               {key.map(controller => <li>{`${controller < 10 ? `0` + controller : controller}`}</li>)}
//           </div> */}
//     </div>
//   )
// }


// function MiniControllerCard({ item, id }) {
//   console.log(item);

//   return (
//     <div className='controll_Card_controller' key={id}>
//       {item.map(controller => <li >{`${controller < 10 ? `0` + controller : controller}`}</li>)}
//     </div>
//   )
// }


export default App;
