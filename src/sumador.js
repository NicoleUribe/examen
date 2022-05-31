class sumar{
  cambio(a, b) {
  return  b-a;
}
  fraccionar(billete){
    var monedas="";
    while(billete>=5){
      monedas=monedas+"5,"
      billete=billete-5;
    }
    return monedas;
  }
}
export default sumar;