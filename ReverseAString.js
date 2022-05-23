function invertString(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
  }

  //Another way to do it
    /*
    return str.split('').reverse().join('');
    split transforma un  string en un array
    reverse invierte el orden de los elementos del array
    join convierte los elementos de un array en un string
    */
