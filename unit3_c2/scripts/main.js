

document.getElementById("form").addEventListener("submit",inputFun)

let arr=JSON.parse(localStorage.getItem("user"))||[]
// let arr=[]

    function Product(n,e,a,m)
    {
        this.address=n;
        this.name=e;
        this.email=a;
        this.amount=m;

    }

 function inputFun(){

      event.preventDefault()

      let name=document.getElementById("name").value;
      let email=document.getElementById("email").value;
      let address=document.getElementById("address").value;
      let amount=document.getElementById("amount").value;

    //   console.log(name)

    let p1= new Product(name,email,address,amount)
   
    arr.push(p1)

    console.log(arr)

    localStorage.setItem("user",JSON.stringify(arr))

    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
     document.getElementById("address").value=null;
     document.getElementById("amount").value=null;

    //  arr.pop()
}