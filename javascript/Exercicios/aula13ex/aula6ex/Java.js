let num=document.getElementById('num')
let lista=document.getElementById('output')
let res=document.getElementById('res')
let valores=[]


function isnumero(n)
{
    if(Number(n)>=1 && Number(n)<=100)
    {
        return true
    }else
    {
        return false 
    }

}
function inlista(n,lista)
{
    
 if(lista.indexOf(Number(n)) !=-1)
 {
     return true
 }
 else{
     return false
 }
}
function adciona(){
    if(isnumero(num.value)&& !inlista(num.value, valores))
    { 
        valores.push(Number(num.value))
        let item =document.createElement('option')
        item.text=`Valor ${num.value} adcionado`
        lista.appendChild(item)
        res.innerHTML=''     
    }
        else{
        window.alert('Valor inválido ou já está na lista.')
    }
    num.value=''
    num.focus()
}
function Finalizar()
{
    if(valores.length==0)
    {
        window.alert('adcione valores antes de finalizar')
    }else
    {
        let tot=valores.length
        let maior=valores[0]
        let menor=valores[0]
        let soma=0
        let media=0
        for(let pos in valores)
        {
            soma+=valores[pos]
            if(valores[pos]>maior)
            {
                maior=valores[pos]
            }
            else if(valores[pos]<menor){
                menor=valores[pos]
            }
        }
        media=soma/tot
        res.innerHTML=''
        res.innerHTML+=`<p>ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML+=`<p>O maior valor informado foi ${maior}<p/>`
        res.innerHTML+=`<p>O menor valor informado foi ${menor}<p/>`
        res.innerHTML+=`<p>A soma dos valores foi ${soma}<p/>`
        res.innerHTML+=`<p>A media dos valores foi ${media}<p/>`

    }

}