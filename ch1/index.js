/*To store name semester and roll no. of a student using object*/
let Student=
{
    name:"Mohit Srivastava",
    semester:"3rd",
    Roll_no:"BTECH/10284/22"
}
//using forin we display key and value of the object
for (const key in Student) {
    // if (Object.hasOwnProperty.call(Student, key)) {
        const element = Student[key];
        console.log(key,element);
        // console.log(key);


    // }
}