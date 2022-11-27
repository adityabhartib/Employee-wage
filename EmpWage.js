console.log("----------Welcome to EmpWage---------");
const  FULL_TIME_HRS= 8;
const  PART_TIME_HRS= 4;
const  PARTTIME= 1;
const  FULLTIME= 2;
const  WAGE_PER_HRS= 20;
const NUM_OF_WORKING_DAYS = 20;

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
let empHrs=0;
for(let day = 0; day<NUM_OF_WORKING_DAYS; day++){
let empCheck=Math.floor(Math.random()*10) % 3;
empHrs = getWoirkingHrs(empCheck);
let empWage = empHrs*WAGE_PER_HRS;

console.log("EmpWage : "+empWage);
}