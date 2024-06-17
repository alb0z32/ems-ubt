let index = -1;
export const updatedIntervalFun = (setCurrentWatt, currentWatt,setWattArr, nextminute) => {
    console.log(index)
    let dataobject;
    let watt;
    let date = new Date();
    if (currentWatt.length < 7) {
      watt = (Math.random() * (50-20)+20);
        let minute = date.getSeconds();
        dataobject = {
          minuti: minute,
          shpenzimet: watt.toFixed(2)
        }
        setCurrentWatt(oldArr => [...oldArr, dataobject]);
    } else {
      if(index === -1){
        setWattArr(oldArr=>[...oldArr,currentWatt]);
        index = currentWatt.length;
      }
      if (index >0) {
        index--;
        console.log('okokokok')
        watt = (Math.random() * (50-20)+20);
        if (nextminute + 1 === 60) {
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
        if (nextminute + 1 === 60) {
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
        setWattArr(oldArr=>[...oldArr,currentWatt]);
        index = currentWatt.length;
      }
    }
  
  }