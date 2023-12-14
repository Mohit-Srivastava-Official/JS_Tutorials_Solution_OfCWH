//Printing the marks of student in an object using for loop
//use of for in look
let score =
{
    Harry:"98",
    Babbar:"98",
    Mohit:"99"
};


for (const key in score) {
    if (Object.hasOwnProperty.call(score, key)) {
        const element = score[key];
        console.log(key,element);

    }

}
//we are using for-in loop above