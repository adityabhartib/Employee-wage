console.log("----------Welcome to EmpWage---------");
const  FULL_TIME_HRS= 8;
const  PART_TIME_HRS= 4;
const  PARTTIME= 1;
const  FULLTIME= 2;
const  WAGE_PER_HRS= 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH =160;

function getWoirkingHrs(empCheck){
switch(empCheck){
    case PARTTIME:
        console.log("Employee is Parttime");
        return PART_TIME_HRS;
        break;
    case FULLTIME:
        console.log("Employee is Fulltime");
        return FULL_TIME_HRS;
        break;
    default:
        console.log("Employee is Abscent");
        return 0;
        break;
}
}
let empHrs=0, day = 0 , totalWorkingHrs = 0, totalwage = 0;
while(day<=NUM_OF_WORKING_DAYS && totalWorkingHrs<=MAX_HRS_IN_MONTH){
    totalWorkingHrs++;
   
let empCheck=Math.floor(Math.random()*10) % 3;
day++;
empHrs = getWoirkingHrs(empCheck);
let empWage = empHrs*WAGE_PER_HRS;

totalwage+=empWage;
console.log("EmpWage : "+empWage);
console.log("Working Day :> "+day);
}
console.log("total Wage : "+totalwage)