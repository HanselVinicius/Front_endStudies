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
        window.alert('Tudo ok')

    }else
    {
        window.alert('Valor inválido ou já está na lista.')
    }
}