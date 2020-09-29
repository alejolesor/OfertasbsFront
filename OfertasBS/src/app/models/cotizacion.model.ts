export class cotizacionModel{
    cotizacion_fecha: string;
    id_cliente: number  ;
    id_cotizacion: number;
    id_estado: number;
    id_item_catalogo:number;
    item_cotizacion_cantidad: number;
    item_cotizacion_precio: number;
    id_item_cotizacion: number;
}

export class cotizaListModel{
    id_item_cotizacion: number;
    id_estado:number;
    id_cotizacion: number;
    id_item_catalogo: number;
    item_cotizacion_cantidad: number;
    item_cotizacion_descuento: number;
    item_cotizacion_precio: number;
    id_oferta:number;
}

export class oferta{
    id_item_cotizacion: number;
    id_proveedor: number;
    oferta_fecha: string;
    id_cotizacion: number;
    id_estado: number;
    id_item_catalogo:number;
    id_oferta: number;
    item_cotizacion_cantidad:number;
    item_cotizacion_descuento:number;
    item_cotizacion_precio:number;
}