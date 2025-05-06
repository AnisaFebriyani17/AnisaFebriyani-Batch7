//Hello World
console.log("Hello, World!JavaScript is fun!");

// //Variabel and Primitive
let name = "Anisa Febriyani";  
let age = 23;  
let likesJs = true;  

console.log("Nama: " + name);
console.log("Umur: " + age + " Tahun");
console.log("Suka JavaScript: " + likesJs);
console.log(`Suka JavaScript: ${likesJs}`);

//Control Flow 
function checkAge1(age1) {
    let result; 
    
    if (age1 >= 18) {
      result = "Anda sudah dewasa";
    } else {
      result = "Anda masih remaja";
    }
    
    console.log(result);  
  }
  
  checkAge1(20); 
  checkAge1(15);  
  checkAge1(18);  
  checkAge1(16);  

//Looping dengan Array Biasa
const foods = ["Mie Ayam", "Seblak", "Bakso", "Kwetiau Goreng", "Dimsum"];

foods.forEach((food, index) => {
  console.log(`Makanan favorit ke ${index + 1} adalah: ${food}`);
});

//Looping pada Array of Object
const students = [
    { name: "Rifqy", Score: 96 },
    { name: "Chandra", Score: 85 },
    { name: "Darrel", Score: 92 },
    { name: "Rafli", Score: 65 },
    { name: "Dio", Score: 77 }
  ];

for (let i = 0; i < students.length; i++) {
    if (students[i].Score >= 80) {
      console.log(students[i].name + " lulus dengan nilai " + students[i].Score);
    }
  }
  