// // string -> belgilar ketma keteligini o'z ichiga oladi va u bir tirnoq ''
// // yoki qo'shtirnoq ichida yoziladi

// let familiya = "Otajonov";
// console.log(familiya);

// //BIrlashtirish (Concotenation)
// let ism = "Diyorbek";
// let message = "Salom " + ism + " !";
// console.log(message);


// //Template literals
// let ismD = "Diyorbek";
// let messageD = "Salom ${ism}";
// console.log(messageD);


// ______________________________________________________________________________________________________________________________________
//                          //Mantiqiy operatorlar
// // && --> AND;
// // || --> origin;
// // !  --> NOT true;

// const yosh = 10;
// const a = yosh > 18;    //false
// const b = yosh < 20;    //True

// //AND operatori 
// console.log(a && b);

// // OR operatori
// console.log(a ||b);

// // NOT operatori
// console.log(!a);
// console.log(!b);
// __________________________________________________________________________________________________________________________________

// const htmlPassed = false;

// const cssPassed = true;

// let message = "";

// if (htmlPassed && ssPassed)
// {
//     message = 'Siz Bootstrap kursini boshlashingiz mumkin!';
// } 
// else if (htmlPassed || cssPassed) {
//     message = 'Iltimos ikkinchi kursni han tugating!';
// } else {
//     message = 'Iltimos birinchi ikkala kursni tugatib chiqing!';
// }

// console.log(message);
// _____________________________________________________________________________________________________________________________________-

                //   TYpe conversion -- Javascript dasturlash tilida ma'lum bir turni bir ko'rinishdan ikkinchi ko'rinishga o'tkazish
                //   Number --> Primativ o'rab turugan obyektdan foydalanib, berilgan ma'lumot turini son ko'rinishiga o'tkazish 
                               // imkoniyati mavjud .Agar berilgan  ma'lumot son ko'rinishiga o'tkazish imkoni bo'lmasa"NAN"maxsus qiymat yuzaga keladi
const num = "100";
console.log(num);
console.log(Number(num));

console.log(num + 1);    //cancatantion  as 1001
console.log(Number(num) + 1);   //101
const name = "Usmon";
console.log(Number(name));  //NAN

//   String --> Primativ o'rab turugan obyektdan foydalanib, berilgan ma'lumot turini string ko'rinishiga o'tkazish
const year = 2024;
console.log(year);          //Number
console.log(String(year));  //String


                //TYPE CORCION
        //Type coercion --> JAvascript tilida operatorlar turli qiymatlaar ustida ish olib borayotgan 
          //,ulardan birining avtomatik ravishda bir ko'rinishdan ikkinchi ko'rinishga o'tishi
    //Auto string conversion 
console.log("Men " + 2006 + "chi yilda tavallud topganman");    //auto string conversion

    //Auto number conversion
console.log('30' - '10' - 5);   //Auto number conversion

//   Boolean --> Primativ o'rab turugan obyektdan foydalanib, berilgan ma'lumot turini boolean ko'rinishiga o'tkazish

const isUser = true;
console.log(isUser);
console.log(Boolean(isUser));

console.log(Boolean(0));   //false

// ____________________________________________________________________________________________________________________________________________________________________

//Truthy va Falsy
    //Falsiy ko'rinishidagi qiymatlar :
    //False
    //0
    //-
    //NON
    //Undifaind
    //No
    //Null
//_________________________________________________________________________________________________________________________________________________________________________

        //False qiymat:
console.log(Boolean (False));
console.log(Boolean(0));
console.log(Boolean(" "));
console.log(Boolean(undifined));
console.log(Boolean(Null));
console.log(Boolean(None));
console.log(Boolean(On));

//Truthy qiymatlar:
console.log(Boolean("Otajon"));
console.log(Boolean(27));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean('a'));
console.log(Boolean('false'));
console.log(Boolean(1));

// _________________________________________________________________________________________________________________________________________________________

//Misol
const ism = " ";
if (ism) {
    console.log("Sizning ismingiz "+ ism );
}
else {
    console.log("Iltimos ismingizni kiriting! ");
}


