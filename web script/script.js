import * as my_dongle from 'bleuio'
const dongleToConnect='[0]40:48:FD:E5:35:A5'
import lightOnImg from "./light_on.png"
import lightOfImg from "./light_off.png"
document.getElementById('connect').addEventListener('click', function(){
  my_dongle.at_connect()
  document.getElementById("lightOn").disabled=false;
  document.getElementById("lightOf").disabled=false;
  document.getElementById("connect").disabled=true;
})

document.getElementById('lightOn').addEventListener('click', function(){
    my_dongle.ati().then((data)=>{
        //make central if not
        if(JSON.stringify(data).includes("Peripheral")){
            console.log('peripheral')
            my_dongle.at_central().then((x)=>{
                console.log('central now')
            })
        }
    })
    .then(()=>{
        // connect to dongle
        my_dongle.at_getconn().then((y)=>{
            if(JSON.stringify(y).includes(dongleToConnect)){
                console.log('already connected')
            }else{
                my_dongle.at_gapconnect(dongleToConnect).then(()=>{
                    console.log('connected successfully')
                })
            }
        })
        .then(()=>{
            // send command to control light
            my_dongle.at_spssend('L=1').then(()=>{
                console.log('Turned on')
                document.getElementById("light").src=lightOnImg;
            })
        })
        
    })
})

document.getElementById('lightOf').addEventListener('click', function(){
    my_dongle.ati().then((data)=>{
        //make central if not
        if(JSON.stringify(data).includes("Peripheral")){
            console.log('peripheral')
            my_dongle.at_central().then((x)=>{
                console.log('central now')
            })
        }
    })
    .then(()=>{
        // connect to dongle
        my_dongle.at_getconn().then((y)=>{
            if(JSON.stringify(y).includes(dongleToConnect)){
                console.log('already connected')
            }else{
                my_dongle.at_gapconnect(dongleToConnect).then(()=>{
                    console.log('connected successfully')
                })
            }
        })
        .then(()=>{
            // send command to control light
            my_dongle.at_spssend('L=0').then(()=>{
                console.log('Turned off')
                document.getElementById("light").src=lightOfImg;
            })
        })
        
    })
})