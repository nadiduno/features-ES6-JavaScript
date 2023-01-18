//*******************Nullish Caoalescing Operator*******************
export function nullisCaoalescing(ageUser){
    // (ageUser ?? 'Idade não registrada');
    // Com o operador or || ele toma zero como não válido (ageUser || 'Idadenão registrada');
    // Por isso temos o operador  ?? Nullish Caoalescing Operator
    return((ageUser ?? 'Idade não registrada'));
}