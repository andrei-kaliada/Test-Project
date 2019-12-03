export const GetFullDate = (props) => {

    let myDate = new Date(props.start);
    let year = myDate.getFullYear();
    let mounth = myDate.getMonth() +1;
    if(mounth < 10){
        mounth = "0" + mounth;
    }
    let date = myDate.getDate();
    if(date < 10){
        date = "0" + date;
    }
    let formattedDate = `${date}.${mounth}.${year}`;

   return formattedDate;
};

export const GetTime = (props) => {

    let start = new Date(props.start);
    let end = new Date(props.end);
    console.log(start)
    console.log(end)

    let startHours = start.getHours();
    let startMinutes = start.getMinutes();
    let startSecond = start.getSeconds();
    let endHours = end.getHours();
    let endMinutes = end.getMinutes();
    let endSecond = end.getSeconds();

    let timeStart = `${start.getHours()}:${start.getMinutes()}`;
    let timeEnd = `${end.getHours()}:${end.getMinutes()}`;
    let value;
    if((endHours-startHours) === 0){
        value = `${endMinutes-startMinutes}m`;
    } else if((endMinutes-startMinutes) === 0){
        value = `${endSecond-startSecond}s`;
    } else{
        value = `${endHours-startHours}h`;
    }
   
    let formattedTime = `${timeStart.toString()} - ${timeEnd.toString()}   (${value.toString()})`;

    

    return formattedTime;
}

