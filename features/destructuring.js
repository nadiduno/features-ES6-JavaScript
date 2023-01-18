import {writeDinamic} from './write-dinamic';
export function desestructuring({name='Visitante',sex='F',login: nickname,blog : site,address}){
     //Desestruturos argumentos
    //Senão deixo vazio o argumento e declaro assim 
    // const {location,login: Nickname,blog : Site}=body;
    // writeDinamic(Object.entries({location,Nickname,Site}));
    console.log(address)
    const {city,country}=address;
    // writeDinamic(name,location,Nickname,Site,JSON.stringify(Object.values(address)));
    writeDinamic(name,sex,nickname,site,city,country);
}