function formatDate(){
    let now=new Date();
    let startDate=new Date();
    let endDate = new Date();

if(now.getDate() === 1){
    startDate.setDate(0)
    endDate.setDate(startDate.getDate()-10)
    endDate.setMonth(now.getMonth()-1);
    
}else{
    startDate.setDate(now.getDate()-1)
    endDate.setDate(now.getDate()-10)
    
}

function format(d){
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    return [year, month, day].join('/');
}
 startDate=format(startDate)
  endDate=format(endDate)
 return [startDate, endDate];
    
}
export function convertDateToDay(date){
   const dateObject=new Date(date);
   const day= dateObject.getDay()
   if(day==0){
       return "Sunday"
   }
   else if(day===1){
       return "Monday"
   }
   else if(day===2){
    return "Tuesday"
}
else if(day===3){
       return "Wednesday"
}
else if(day===4){
       
   return "Thursday"
}
else if(day===5){
  return "Friday"
}
else if(day===6){
    return "Saturday"
}
}
export default formatDate