//C1-A1: Variable/Constants Declaration and String Concatenation Methods

// Student's Information
let myname = "Rhealyn F. Borbe";
let birthdate = "August 16, 2006";
let birthplace = "Conconig West, Sta. Lucia, Ilocos Sur, Philippines 2712";
let address = "Conconig West, Sta. Lucia, Ilocos Sur, Philippines 2712";
let course = "Bachelor of Science in Computer Science";
let dreamJob = "Web Developer";
// Converts the students information to Upper Case and Lower Case
let myname_uppercase = myname.toUpperCase();
let myname_lowercase = myname.toLowerCase();
let birthplace_uppercase = birthplace.toUpperCase();
let address_uppercase = address.toUpperCase();
let course_lowercase = course.toLowerCase();
// Classmate 1's Information
let classmate1Name = "Rizalyn Donato Domitita";
let classmate1Birthdate = "November 13, 2005";
let classmate1Birthplace = "Southern Ilocos Sur Dist. Hospital- Tagudin, Ilocos Sur, Philippines 2714";
let classmate1Address = "Al-Aludig, Santiago, Ilocos Sur, Philippines 2707";
let classmate1Course = "Bachelor of Science in Computer Science";
let classmate1DreamJob = "Software Engineer";
// Converts the classmate 1's information to Upper Case and Lower Case
let cmate1_uppercase = classmate1Name.toUpperCase();
let cmate1_lowercase = classmate1Name.toLowerCase();
let cmate1birthplace_uppercase = classmate1Birthplace.toUpperCase();
let cmate1address_uppercase =  classmate1Address.toUpperCase();
let cmate1course_lowercase = classmate1Course.toLowerCase();
// Classmate 2's Information
let classmate2Name = "Bretny A. Bal-ut";
let classmate2Birthdate = "May 7, 2006";
let classmate2Birthplace = "Arzadon , San Manuel, Pangasinan, Philippines 2438";
let classmate2Address = "Nangalisan, Sta. Lucia, Ilocos Sur, Philippines 2712";
let classmate2Course = "Bachelor of Science in Computer Science";
let classmate2DreamJob = "Software Developer";
// Converts the classaate 2's information to Upper Case and Lower Case
let cmate2_uppercase = classmate2Name.toUpperCase();
let cmate2_lowercase = classmate2Name.toLowerCase();
let cmate2birthplace_uppercase = classmate2Birthplace.toUpperCase();
let cmate2address_uppercase =  classmate2Address.toUpperCase();
let cmate2course_lowercase = classmate2Course.toLowerCase();

let message1 = `${myname_uppercase} was born ${birthdate} at ${birthplace_uppercase} and currently living at ${address_uppercase}. ${myname_lowercase} is taking up ${course_lowercase} and dreams to be ${dreamJob} after graduation.`;
let message2 = `${cmate1_uppercase} was born ${classmate1Birthdate} at ${cmate1birthplace_uppercase} and currently living at ${cmate1address_uppercase}. ${cmate1_lowercase} is taking up ${cmate1course_lowercase} and dreams to be ${dreamJob} after graduation.`;
let message3 = `${cmate2_uppercase} was born ${classmate2Birthdate} at ${cmate2birthplace_uppercase} and currently living at ${cmate2address_uppercase}. ${cmate2_lowercase} is taking up ${cmate2course_lowercase} and dreams to be ${dreamJob} after graduation.`;

// logs the message to the console and print the statement given
console.log(message1);
console.log(message2);
console.log(message3);
