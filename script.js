const max3 = (cislo1, cislo2, cislo3) => {
    if (cislo1 > cislo2 && cislo1 > cislo3) {
        return cislo1;
     } else if 
      (cislo2 > cislo1 && cislo2 > cislo3) {
        return cislo2;
     } else {
        return cislo3;
     }
  }

 document.body.innerHTML += max3 (25, 76, 50);
