function es_bisiesto(n) {
    let resp = false;
    if (n % 400 == 0)  resp = true ;
    return resp;
  }
  
  export default es_bisiesto;