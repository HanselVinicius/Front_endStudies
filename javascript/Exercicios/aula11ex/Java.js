function Multiplica(){
    let num =document.getElementById('txtn')
    let show =document.getElementById('show')
    if(num.value.length==0)
    {
        window.alert('ERRO!')
    }else{
        let n=Number(num.value)
        let c=1
       show.innerHTML=''
        while(c<=10)
        {
            let item=document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            item.value=`show${c}`
            show.appendChild(item)
            c++
        }
    }
}