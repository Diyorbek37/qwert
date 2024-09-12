// //Objects --> Pythondagi dict bilan bir hil
// const dasturchi = {
//     ism: "Diyorbek",
//     familiya: "Olimov",
//     yosh: 19,
//     manzil:
//     {
//         mamlakat: "Uzbekiston",
//         shahar: "Toshkent",
//         mahalla: "Al-Farobiy",
//         uy: 37

//     },
//     salomlashish: function () {
//         console.log("Salom");
//     }
// }

// dasturchi.salomlashish();

// console.log(dasturchi.yosh);
// console.log(dasturchi["uy", "manzil"]);
// console.log(dasturchi.manzil.shahar);
// console.log(dasturchi.salomlashish);
// console.log(dasturchi.salomlashish());


// // ____________________________________________________________________________________________________________________________________________________________________`

// //               Oqimlar boshqaruvi bo'yicha amaliyot

// const inRange = (min, max, number) => { 
//     if (number >= min && number <= max) {
//          console.log(`Berilgan ${number} soni ${min} va ${max} orasida`);
//     } else {
//          console.log(`Berilgan son ${min}, va ${max} orasida emas`);
//      }
//     }
// const minRange = 10;

// const maxRange = 30;

// const givenNumber = 20;

// inRange (minRange, maxRange, givenNumber);

// ____________________________________________________________________________________________________________________________________________________________

const simpleCalculator = (num1, num2, oper) => {

    switch(oper) {
    
     case "add":
        
            console.log(`Yig'indisi: ${num1 + num2}`);
             break;
            
     case "subtract":
            
     console.log(`Ayirmasi: ${num1 - num2}`); break;
        
     case "multiply":
        
     console.log(`Ko'paytmasi: ${num1 * num2}`); break;
        
     case "divide":
        
     console.log(`Bo'linmasi: ${num1/num2}`); break;
        
     default:
        
     console.log('Aniqlanmagan amal'); }
     }

     const a = 20;
     const b = 5;
     const operation = "add";
     simpleCalculator(a, b, operation);

// __________________________________________________________________________________________________________________________________________________



const getLarguagestRlement = (array) => {
    let largest = array[0];
    for (let i = 1; i < )
}
