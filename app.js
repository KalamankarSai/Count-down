const endDate = "25 March 2024 12:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

//const clock =() => {

//}

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    //console.log(diff);
    if(diff < 0){return 0;}

    //console.log(Math.floor(diff/3600/60/24)); //convert into days;
    inputs[0].value = Math.floor(diff/3600/24);//convert into days
    inputs[1].value = Math.floor(diff/3600)%24;//convert into days and hour
    inputs[2].value = Math.floor(diff/60)%60;// convert into hours and minutes
    inputs[3].value = Math.floor(diff)%60;
}

//initial call
clock()

setInterval(
    ()=>{
        clock();
    },
    1000

)