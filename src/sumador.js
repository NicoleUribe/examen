class sumar{
 /* cambio(a, b) {
  return  b-a;
}*/
  fraccionar(billete){
    var monedas="";
    while(billete>=5){
      monedas=monedas+"5,";
      billete=billete-5;
    }
    while(billete>=2){
      monedas=monedas+"2,";
      billete=billete-2;
    }
    while(billete>=1){
      monedas=monedas+"1,";
      billete=billete-1;
    }
    return monedas;
  }
}
export default sumar;