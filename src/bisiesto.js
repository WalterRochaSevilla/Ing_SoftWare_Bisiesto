function es_bisiesto(n) {
    let resp = false;
    if (n % 400 == 0)  resp = true ;
    else if (n % 100 == 0)  resp = false ;
    else if (n % 4 == 0)  resp = true ;
    return resp;
  }
  
  export default es_bisiesto;