// using command line argument. pass 5 subject marks numbers in 
//command line arguments.
// print total, percentage and class (dist, first class, second class, pass class)

const arg=process.argv;
var m=Number(arg[2]);//math //Number is convert string to number
var e=Number(arg[3]);//english
var s=Number(arg[4]);//science
var h=Number(arg[5]);//hindi
var g=Number(arg[6]);//gujrati
var tot;
var per;

//students subject marks if fail or not
if(m<=35){
    console.log("Math marks is="+m);
    console.log("fail");
}
else if(e<=35){
    console.log("English marks is="+e);
    console.log("fail");
}
else if(s<=35){
    console.log("science marks is="+s);
    console.log("fail");
}
else if(h<=35){
    console.log("hindi mark is= "+h);
    console.log("fail");
}
else if(g<=35){
    console.log("gujrati marks is"+g);
    console.log("fail");
}
else{
    console.log("student is pass");
}
tot=m+e+s+h+g; //total of all subject

console.log("total=="+tot);

per=(tot/500)*100;//calculate percentage
console.log("percentage=="+per);

if (per <= 100 && per >= 80) {
    grade="distinction";
} else if (per <= 79 && per >= 60) {
    grade="first";
} else if (per <= 59 && per >= 45) {
    grade="second";
} else if (per <= 44 && per >= 35) {
    grade= "third";
} else {
    grade="fail";
}
console.log("class=="+grade);
