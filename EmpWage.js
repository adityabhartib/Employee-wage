console.log("----------Welcome to EmpWage---------");
const  FULL_TIME_HRS= 8;
const  PART_TIME_HRS= 4;
const  PARTTIME= 1;
const  FULLTIME= 2;
const  WAGE_PER_HRS= 20;

function getWoirkingHrs(empCheck){
switch(empCheck){
    case PARTTIME:
        console.log("Employee is Parttime");
        return PART_TIME_HRS;
        break;
    case FULLTIME:
        console.log("Employee");
        return FULL_TIME_HRS;
        break;
    default:
        console.log("EmpWage :"+empWage)
        return 0;
}
}
let empHrs=0;
let empCheck=Math.floor(Math.random()*10) % 3;
empHrs = getWoirkingHrs(empCheck);
let empWage = empHrs*WAGE_PER_HRS;

console.log("EmpWage : "+empWage)