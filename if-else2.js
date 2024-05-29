//find the grade of a student based on the scores

/*
prerequisite:
If the score is 80-100 grade is A+
If the score is 70-79 grade is A-
If the score is 60-69 grade is B-
If the score is 50-59 grade is C-
If the score is 40-49 grade is D
If the score is 0-39 grade is F
*/

let score=40;

if(score>=80 && score<=100){
   console.log( "Your grade is A+")
}
else if (score>=70 && score<=79){
    console.log( "Your grade is A-")
}
else if (score>=60 && score<=69){
    console.log( "Your grade is B-")
}
else if (score>=50 && score<=59){
    console.log( "Your grade is C-")
}
else if (score>=40 && score<=49){
    console.log( "Your grade is D")
}
else{
    console.log("You are Failed")
}