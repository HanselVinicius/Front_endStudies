var agora=new Date()
var diasem=agora.getDay()
console.log(diasem)
switch(diasem){
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é segunda')
        break
    case 2:
        console.log('Hoje é terça')
        break
    case 3: 
        console.log('Hoje é quarta')
        break
    case 4:
        console.log('Hoje é quinta')
        break
    case 5:
        console.log('Graças a deus é sexta-feira')
        break
    case 6:
        console.log('Hoje é sábado')
        break
        default:
            console.log('[ERRO]')
            break
}