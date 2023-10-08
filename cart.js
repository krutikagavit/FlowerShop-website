const product = [
   {
        id: 0,
        image: 'images/lily.jfif',
        title: 'Lily',
        price: 499,
    },
    {
        id: 1,
        image: 'images/rose.jpg',
        title: 'Pink Rose',
        price: 399,
    },
    {
        id: 2,
        image: 'images/lavender.jfif',
        title: 'Lavender',
        price: 359,
    },
    {
        id: 3,
        image: 'images/adenium.jfif',
        title: 'Adenium',
        price: 699,
    },
	{
        id: 4,
        image: 'images/tulips.jfif',
        title: 'Pink Tulip',
        price: 299,
    },
	{
        id: 5,
        image: 'images/daisy.jfif',
        title: 'Daisy',
        price: 349,
    },
	{
        id: 6,
        image: 'images/f1.jfif',
        title: 'Designer Pot',
        price: 599,
    },
	{
        id: 7,
        image: 'images/fset3.jfif',
        title: 'Ceramic Pot (3)',
        price: 1099,
    },
	{
        id: 7,
        image: 'images/fset2.jfif',
        title: 'Indoor Pot (3)',
        price: 1099,
    },
	{
        id: 7,
        image: 'images/gifts.png',
        title: 'Gift Card',
        price: 99,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}