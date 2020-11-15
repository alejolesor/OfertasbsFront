export class Order{
    IdCliente:number;
    Estado:string;
    Fecha:string;
    Total:number;
    OrderProducts:OrderProducts[]

}

export class OrderProducts{
    IdOrden:number;
    idProducto:number;
    Cantidad:number;
    Descripcion:string;
    Precio:number;

}