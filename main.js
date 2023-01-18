import './style.css'
import {writeStatic} from './features/write-static';
import {writeDinamic} from './features/write-dinamic';
import {templateLiteral} from './features/template-literal';
import {nullisCaoalescing} from './features/nullis-caoalescing';
import {desestructuring} from './features/destructuring';
//*******************Declaration*******************
const nameUser='Nadi';
//const nameUser=null;
//const ageUser=40;
const ageUser=null;
const user={
    name:'Nadi',
    age:null,
    address:{
        city:'Salvador, Ba',
        country:'Brasil',
    },
    login:'nadiduno',
    blog:'https://portfolio-nadi.vercel.app/',
};

//*******************Call Function*******************

//IS6 features no JavaScript
writeStatic();
writeDinamic('Features IS6 e API');
//Function Rest Parameter: Indefinite number of arguments 
writeDinamic(templateLiteral(user.name),nullisCaoalescing(user.age));
desestructuring(user);

