import React, { useState } from 'react';
import { useReactPWAInstall } from "react-pwa-install";
import Logo from './Assets/broLogo.png'
import './App.css';
// import Data from './db/Data';
import Data from './db/data.json'
import BtnData from './db/btnData.json'
import { Card } from './Components/Card';



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


  // const data_2 = JSON.parse(Data)
  // console.log(data_2);
  // console.log(Data);

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
          Data[currentId].map((item, index) => <Card item={item} key={index} />)
        }
      </main>


      <aside>
        {supported() && !isInstalled() && (
          <button type="button" onClick={handleClick}>
            Install App
          </button>
        )}

        {
          BtnData.map((item, index) => {
            return <button key={index} onClick={() => handleFilterBtn(`${item.name}`)}>
              <h2>
                {item.name}
              </h2>
            </button>
          })
        }
      </aside>


    </div>
  );
}


export default App;
