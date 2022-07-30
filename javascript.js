function amountzakat(){
    let totalAmount=document.getElementById('amount').value;
    if(totalAmount>=60000)
   {document.getElementById('heading').innerText=totalAmount/40;
   }else
   {document.getElementById('heading').innerText="NO Zakat"
   }}
   function goldzakat(){
 let totalGold=document.getElementById('gold').value;
 if(totalGold>=7.5)
 {let totalGoldAmount=totalGold*120000;
    let totalGoldZakat=totalGoldAmount/40;
    document.getElementById('heading').innerText=totalGoldZakat;
 }else{
    document.getElementById('heading').innerText="No Zakat";
 }}
 function silverzakat(){
 let totalSilver=document.getElementById('silver').value;
 if (totalSilver>=52.5)
 {let totalSilverAmount=totalSilver*1500;
 let totalSilverZakat=totalSilverAmount/40;
 document.getElementById('heading').innerText=totalSilverZakat;
 }else{
    document.getElementById('heading').innerText="No Zakat";   
}
 }