
let navbtn =[
    {
        tittle: "Admin",
        url: "/Admin",
        // click:`${<Afterlogin/>}`
        
    }
    ,
    {
        tittle: "Empoly",
        url:"/Empoly",
        // click:`${Afterlogin}`
    }
]
let bottombar = [
    {
        tittle:"sales",
        className:"w-[150px] h-[35px] text-black border-b-2 border-r-2 border-l-2 border-black text-center",
        url:"/sales",
        to:"/Admin/login/sales",
    },
    {
        className:"w-[150px] h-[35px] text-black border-b-2 border-r-2 border-black text-center",
        tittle:"items",
        to:"/Admin/login/Items",
    },
    {
        className:"w-[150px] h-[35px] text-black border-b-2 border-r-2 border-black text-center" ,
         tittle:"profite/loss",
         to:"/Admin/login/profite-loss",
        },
        {
        className:"w-[150px] h-[35px] text-black border-b-2 border-r-2 border-black text-center",
         tittle:"stock managment",
         to:"/Admin/login/stock managment",
        },
        {
        className:"w-[150px] h-[35px] text-black border-b-2 border-r-2 border-black text-center",
        tittle:"purchase",
        to:"/Admin/login/purchase",
    },
    {
        tittle:"order",
        className:"w-[150px] h-[35px] text-black border-b-2 border-r-2 border-black text-center",
        to:"/Admin/login/order",
    },
    {
        tittle:"account",
        className:"w-[150px] h-[35px] text-black border-b-2 border-r-2 border-black text-center",
        to:"/Admin/login/account",
    },
    {
        tittle:"capital",
        className:"w-[150px] h-[35px] text-black border-b-2 border-r-2 border-black text-center",
        to:"/Admin/login/capital",
    },
    {
        tittle:"quotation",
        className:"w-[150px] h-[35px] text-black border-b-2 border-r-2 border-black text-center",
        to:"/Admin/login/quotatin",
    },
    
]
let tableHead = [
    {
        name:"S.NO",
        className:"border-2 border-black border-solid w-[10%]",
    },
    {
        name: "ITEMS NAME",
        className: "border-2 border-black border-solid w-[20%]",

    },
    {
        name: "TRADE-PRICE",
        className: "border-2 border-black border-solid w-[10%]",

    },
    {
        name: "RETAIL-PRICE",
        className: "border-2 border-black border-solid w-[10%]",

    },
    {
        name: "PACKING-SIZE",
        className: "border-2 border-black border-solid w-[10%]",

    },
    {
        name: "PIECES",
        className: "border-2 border-black border-solid w-[10%]",

    },
    {
        name: "COMPANY",
        className: "border-2 border-black border-solid w-[10%]",

    },
    {
        name: "TYPE",
        className: "border-2 border-black border-solid w-[10%]",

    },
    {
        name: "STOCK",
        className: "border-2 border-black border-solid w-[20%]",

    }
]
let itemInside =[
    {
        tittle:"01",
        className :"border-2 border-black border-solid p-[8px] w-[10%]"
    },
    {
        tittle: "panadol",
        className:"border-2 border-black border-solid p-[8px] w-[20%]"
    },
    {
        tittle: "56",
        className:"border-2 border-black border-solid p-[8px] w-[10%]"
    },
    {
        tittle: "25",
        className:"border-2 border-black border-solid p-[8px] w-[10%]"
    },
    {
        tittle: "52",
        className:"border-2 border-black border-solid p-[8px] w-[10%]"
    },
    {
        tittle: "00",
        className:"border-2 border-black border-solid p-[8px] w-[10%]"
    },
    {
        tittle: "365",
        className:"border-2 border-black border-solid p-[8px] w-[10%]"
    },
    {
        tittle: "52",
        className:"border-2 border-black border-solid p-[8px] w-[10%]"
    },
    {
        tittle: "65",
        className:"border-2 border-black border-solid p-[8px] w-[10%]"
    },
]
let addItems = [
    {
        tittle: "ITEM NAME"
    },
    {
        tittle: "RETAIL PRICE"
    },
    {
        tittle: "TRADE PRICE"
    },
    {
        tittle: "PACKING SIZE"
    },
    {
        tittle: "PIECES"
    },
    {
        tittle: "COMPANY"
    },
    {
        tittle: "TYPE"
    },
    {
        tittle: "STOCK"
    },
    {
        tittle: "DISCOUNT"
    },
]
export {navbtn,bottombar,tableHead,itemInside,addItems}