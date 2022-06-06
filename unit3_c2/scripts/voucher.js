

  let VoucherFun= async()=>{

        const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"

        try{
               let res= await fetch(url)

               let collectData= await res.json()
               let finalData=collectData
               appenData(finalData)
               console.log(finalData)
        }
        catch(err)
        {
            console.log(err)
        }
  }

  VoucherFun()

     let appenData= async(data)=>{

           data.forEach(function(el,index){

               let div=document.createElement("div")

               let image=document.createElement("img")
               image.src=el.image;

               let name=document.createElement("h3")
               name.innerText=el.name;

               let price =document.createElement("p")
               price.innerText=el.price

               let purchase= document.createElement("button")

               purchase.innerText="Buy Voucher"

               purchase.setAttribute("id","buy_voucher")

               purchase.addEventListener("click",function(){

                    PurchaseVoucher(el,index)
               })

               div.append(image,name,price)

               document.getElementById("voucher_list").append(div)
           })
     }
       
      let arr=JSON.parse(localStorage.getItem("purchase"))||[]
     function   PurchaseVoucher(el,index){

         arr.push(el)

         localStorage.setItem("purchase",JSON.stringify(arr))

         let x=takeData.amount

         document.getElementById("wallet_balance").innerText=x;
    
         if(x>=price)
         {
             alert("Hurray! purchase successful")


         }

         else
         {
             alert("Sorry! insufficient balance")
         }
     }

     let takeData=JSON.parse(localStorage.getItem("user"))
    //    console.log(takeData)
    
