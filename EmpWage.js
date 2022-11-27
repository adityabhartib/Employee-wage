console.log("----------Welcome to EmpWage---------");
const  FULL_TIME_HRS= 8;
const  PART_TIME_HRS= 4;
const  PARTTIME= 1;
const  FULLTIME= 2;
const  WAGE_PER_HRS= 20;

let empHrs=0;
var empCheck=Math.floor(Math.random()*10)%3;

switch(empCheck){
    case PARTTIME:
        console.log("Employee is Parttime");
        empHrs = PART_TIME_HRS;
        break;
        case FULLTIME:
            console.log("Employee is Fulltime");
            empHrs = FULLTIME;
            break;
            default:
                console.log("Employee is Abscent");
                empHrs = 0;
}
let empWage = empHrs*WAGE_PER_HRS;

console.log("EmpWage :"+empWage)