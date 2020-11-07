export class catalogoModel{
    Id: string;
    Name: string;
    Category: string;
    Catalogue: string;
    Price:number;
    Stock: number;

}


export class productModel{
    Id:number;
    Name: string;
    Amount: number;
    DestinationCity: string;
    EventDate:string;
    File: File;
    Description:string;
    OriginCity:string;
    PeopleNumber:number;
    TransportType:string;
    ImageId:string;

}

export class productCart{
    Id:number;
    Titulo:string;
    Amount:number;
}
