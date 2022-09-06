//Se declara la funcion producto que determinará que producto escogio cliente
function producto(){
   
    switch (opcion) {
       case 1: 
            alert("Escogiste cargador de celular");
            cantidad();
            break;
        case 2: 
            alert("Escogiste audifono");
            cantidad();
            break;
        case 3: 
            alert("Escogiste SmartWatch");
            cantidad();
            break;
        case 4: 
            alert("Escogiste Mouse");
            cantidad();
            break;
        case 5: 
            alert("Escogiste Teclado");
            cantidad();
            break;
        default: 
            alert("No escogiste producto");
            break;
        }
        
}

//Se declara la funcion cantidad que determinará la cantidad de productos a comprar por cliente
function cantidad(){
    let c = parseInt(prompt("Indique la cantidad a comprar"));
    if(opcion === 1){
        alert("Se agrega al carrito de compras " + c + " Cargador de celular");
    } else if(opcion === 2){
        alert("Se agrega al carrito de compras " + c + " Audifono");
    } else if(opcion === 3){
        alert("Se agrega al carrito de compras " + c + " SmartWatch");
    } else if(opcion === 4) {
        alert("Se agrega al carrito de compras " + c + " Mouse");
    } else if(opcion === 5){
        alert("Se agrega al carrito de compras " + c + " Teclado");
    }

}
//Se crea una clase para simular llenado de productos en sistema 
class Producto {
    constructor(codigo, descripcion){
        this.codigo = codigo; 
        this.descripcion = descripcion;
    }
}
const p = []; 
let codigo = [1,2,3,4,5]; 
let descripcion = ["Cargador de Celular","Audifono","Smartwatch","Mouse","Teclado"]; 
let obj = new Producto(codigo, descripcion);

p.push(obj);
alert("Se ingresaron productos al sistema " + JSON.stringify(p));   //Se publica los productos ingresados en sistema para la venta. 


//Inicio de simulador Carrito de compras
alert("Carrito de compras... darle aceptar para continuar");

   alert("Has ingresado a comprar");



 let opcion= parseInt(prompt("1.- Cargador de Celular ; 2.- Audifono ; 3.- Smartwatch ; 4.- Mouse ; 5.- Teclado"));  
    producto();
    let pregunta = prompt("¿Quiere ingresar otra compra: si o no ");
    if(pregunta === "si"){
        alert("Volver a cargar la pagina");
    }else if(pregunta === "no"){
        alert("Se cierra carrito de compras");
    }
