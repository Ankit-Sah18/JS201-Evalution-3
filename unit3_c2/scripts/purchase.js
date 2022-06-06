
   
     let takeData=JSON.parse(localStorage.getItem("purchase"))
   takeData.forEach(function(el,index){

    let div=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.image;

    let name=document.createElement("h3")
    name.innerText=el.name;

    let price =document.createElement("p")
    price.innerText=el.price

    

    div.append(image,name,price)

    document.getElementById("purchased_voucher").append(div)
})