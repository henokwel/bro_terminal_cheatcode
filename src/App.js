import React, { useState } from 'react';
import { useReactPWAInstall } from "react-pwa-install";
import Logo from './broLogo.png'
import './App.css';
// import Data from './db/Data';
import Data2 from './db/data.json'
import uniqid from 'uniqid';



function App() {

  const [currentId, setCurrentId] = useState(200)
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
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


  // const data_2 = JSON.parse(Data2)
  // console.log(data_2);
  // console.log(Data2);

  // const newJson = JSON.stringify(Data)
  // console.log(newJson);


  const handleClick = () => {
    pwaInstall({
      title: "Install App",
      logo: Logo,
      features: (
        <ul>
          <li>Display Control Numbers</li>
          <li>Works offline</li>
        </ul>
      ),
      description: "Get fast access to control number. ",
    })
      .then(() => alert("App installed successfully or instructions for install shown"))
      .catch(() => alert("User opted out from installing"));
  };


  const handleFilterBtn = (id) => {

    // check if its a new id 
    if (currentId === id) return
    // change displaylist to match current id
    setCurrentId(id)
  }

  // Data["200"].map(item => console.log(item))

  return (
    <div className="App">

      <main>
        {
          Data2[currentId].map((item, index) => {
            const { id, key } = item

            // return <ControllCard id={id}  key={id + 1} keys={key}/>
            return <div className='controll_Card' key={uniqid()}>
              <h3>{id}</h3>
              <div className='controll_Card_controller'>
                {key.map((controll) => <MiniControllerCard item={controll} id={id} key={uniqid()} />)}
                {/* {key.map((controller, index) => <li key={index}>{`${controller < 10 ? `0` + controller : controller}`}</li>)} */}
              </div>
            </div>
          }
          )
        }
      </main>


      <aside>

        {supported() && !isInstalled() && (
          <button type="button" onClick={handleClick}>
            Install App
          </button>
        )}

        <button onClick={() => handleFilterBtn("P1")}>
          <h2>
            P1
          </h2>
        </button>
        <button onClick={() => handleFilterBtn("P2")}>
          <h2>
            P2
          </h2>
        </button>

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


    </div>
  );
}




// function ControllCard({ id, keys }) {
//   // console.log('Kye ===>>' , key);

//   return (
//     <div className='controll_Card'>
//       <h3>{id}</h3>
//       <MiniControllerCard items={keys} id={id} />
//       {/* <div className='controll_Card_controller'>
//               {key.map(controller => <li>{`${controller < 10 ? `0` + controller : controller}`}</li>)}
//           </div> */}
//     </div>
//   )
// }


function MiniControllerCard(items) {
  const { item } = items
  return <li>{`${item < 10 ? `0` + item : item}`}</li>
}


export default App;
