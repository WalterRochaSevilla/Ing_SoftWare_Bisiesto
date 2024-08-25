function es_bisiesto(n) {
    let resp = false;
    if (n % 400 == 0)  resp = true ;
    else if (n % 100 && n % 400 == 0)  resp = false ;
    return resp;
  }
  
  export default es_bisiesto;