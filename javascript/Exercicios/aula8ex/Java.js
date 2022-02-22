function Verificar(){
   var data=new Date()
   var ano=data.getFullYear()
   var fano=document.getElementById('txtano')
   var res=document.getElementById('res')
   if(fano.value.length==0 || Number(fano.value) >ano)
   {
       window.alert("[ERRO] Verifique os dados e tente novamente")
   } else{
       var fsex= document.getElementsByName('radsex')
       var idade= ano- Number(fano.value)
       var gênero=''
       var img=document.createElement('img')
       img.setAttribute('id','foto')
       if(fsex[0].checked)
       {
           gênero='Homem'
           if(idade>=0 && idade<10)
           {
               //criança
               img.setAttribute('src','foto-bebe-m.png')
           }else if(idade<21)
           {
            img.setAttribute('src','foto-jovem-m.png')
               //jovem
           }else if(idade<50)
           {
            img.setAttribute('src','foto-adulto-m.png')
               //adulto
           }else{
               //idoso
               img.setAttribute('src','foto-idoso-m.png')
           }
       }else if(fsex[1].checked)
       {
        gênero='Mulher'
        if(idade>=0 && idade<10)
        {
            img.setAttribute('src','foto-bebe-f.png')
            //criança
        }else if(idade<21)
        {
            img.setAttribute('src','foto-jovem-f.png')
            //jovem
        }else if(idade<50)
        {
            img.setAttribute('src','foto-adulto-f.png')
            //adulto
        }else{
            img.setAttribute('src','foto-idoso-f.png')
            //idoso
        }
       }
       res.style.textAlign='center'
       res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)

   }
}