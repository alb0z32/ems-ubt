
let index = -1;
export const updatedIntervalFun = (setCurrentWatt, currentWatt,setWattArr, arrMaxLen,setPrice,price,setPriceChange) => {
  console.log(index)
  let dataobject;
  let watt;
  let date = new Date();
  if (currentWatt.length < arrMaxLen) {
    watt = (Math.random() * (50-20)+20);
      let minute = date.getSeconds();
      dataobject = {
        minuti: minute,
        shpenzimet: watt.toFixed(2)
      }
      setCurrentWatt(oldArr => [...oldArr, dataobject]);
  } else {
    if(index === -1){
      kalkuloCmimin((Math.random()*(45-25)+25),setPrice,price,setPriceChange);
      setWattArr(oldArr=>[...oldArr,currentWatt]);
      index = currentWatt.length;
    }
    if (index >0) {
      index--;
      watt = (Math.random() * (50-20)+20);
      let minute = date.getMinutes();
      if (minute+ 1 === 60) {
        let hours = date.getMinutes();
        dataobject = {
          minuti: hours,
          shpenzimet: watt
        }
      } else {
        let minute = date.getSeconds();
        dataobject = {
          minuti: minute,
          shpenzimet: watt.toFixed(2)
        }
      }
      setCurrentWatt(oldarr=>[...oldarr.slice(1),dataobject]);
    } else {
      watt = (Math.random() * (50-20)+20);
      let minute = date.getMinutes();
      if (minute+ 1 === 60) {
        let hours = date.getMinutes();
        dataobject = {
          minuti: hours,
          shpenzimet: watt.toFixed(2)
        }
      } else {
        let minute = date.getSeconds();
        dataobject = {
          minuti: minute,
          shpenzimet: watt.toFixed(2)
        }
      }
      
      
      kalkuloCmimin((Math.random()*(45-25)+25),setPrice,price,setPriceChange);
      setWattArr(oldArr=>[...oldArr,currentWatt]);
      index = currentWatt.length;
    }
  }
  
}

export const kalkuloCmimin = async (currentWatt,setPrice,price,setPriceChange)=>{
  let wattprice = currentWatt*0.06;
  await setPriceChange(wattprice-price);
  await setPrice(wattprice);
}