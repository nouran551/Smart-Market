  
$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $(".sub-header").addClass('active');
        }else{
            $(".sub-header").removeClass('active');
        }
    });
});

var firebaseConfig = {
    apiKey: "AIzaSyC6805uNZBvGiEGJgH-Lqn0mrwmsrWNG80",
    authDomain: "smart-market-90784.firebaseapp.com",
    databaseURL: "https://smart-market-90784.firebaseio.com",
    projectId: "smart-market-90784",
    storageBucket: "smart-market-90784.appspot.com",
    messagingSenderId: "511733555712",
    appId: "1:511733555712:web:d95ff01197596fa6e1aee5",
    measurementId: "G-568S41D4D7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 


  


  function buy1(){
      var productsFirebase = [];
      for (let index = 0; index < products.length; index++) {
          if (products[index].cart){
              var product = {
                    product :products[index].product,
                    price:products[index].price,
                    quantity:products[index].shelf,
                    total:products[index].total,
              }
              productsFirebase.push(product);
          }
          
      }
        firebase().database().ref('cart').push({
            total:total(),
            products: productsFirebase
        });

        Swal.fire({
            type:'success',
            icon:"success",
            title: 'Success',
            text:'Operation Completed',
        });
        clean();
  }

  function buy(){
  
      Swal.fire({
          type:'success',
          title: 'Success',
          icon:"success",
          text:'Operation Completed',
      });

      clean();
     
}


var products = [
    {
        id:1700004728,
        img:'./imgs/New Project (13).png',
        product : 'honey',
        price: 17,
        cart:false,
        quantity:1,
        total:0
        
    },
    {
        id:701197168121,
        img:'./imgs/New Project (14).png',
        product : 'rice',
        price: 29,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168107,
        img:'./imgs/New Project (15).png',
        product : 'parmesan cheese',
        price: 20,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168091,
        img:'./imgs/New Project (16).png',
        product : 'almonds',
        price: 40,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168077,
        img:'./imgs/New Project (17).png',
        product : 'strawberries',
        price: 8,
        cart:false,
        quantity:1,
        total:0
    },
    
    
    {
        id:2310010736,
        img:'./imgs/New Project (18).png',
        product : 'extra dark chocolate',
        price: 56,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168138,
        img:'./imgs/New Project (19).png',
        product : 'Tomatos',
        price: 6,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168138,
        img:'./imgs/New Project (20).png',
        product : 'protein bar',
        price: 12,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:736832,
        img:'./imgs/New Project (21).png',
        product : 'melons',
        price: 35,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168190,
        img:'./imgs/New Project (22).png',
        product : 'body spray',
        price: 14,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776082988,
        img:'./imgs/New Project (23).png',
        product : 'Cookies',
        price: 24,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776082988,
        img:'./imgs/New Project (24).png',
        product : 'Brownies',
        price: 24,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776236558,
        img:'./imgs/New Project (25).png',
        product : 'ketchup',
        price: 23,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776236558,
        img:'./imgs/New Project (26).png',
        product : 'shampoo',
        price: 23,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776236688,
        img:'./imgs/New Project (27).png',
        product : 'pet food',
        price: 32,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776236718,
        img:'./imgs/New Project (28).png',
        product : 'sparkling water',
        price: 43,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776236763,
        img:'./imgs/New Project (29).png',
        product : 'spinach',
        price: 34,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776236770,
        img:'./imgs/New Project (30).png',
        product : 'green beans',
        price: 25,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776236794,
        img:'./imgs/New Project (31).png',
        product : 'toothpaste',
        price: 23,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776236794826216574094,
        img:'./imgs/New Project (32).png',
        product : 'Tomato Sauce',
        price: 47,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:797776111084,
        img:'./imgs/New Project (12).png',
        product : '	mineral water',
        price: 3,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:799439792487,
        img:'./imgs/New Project (2).png',
        product : '	eggs',
        price: 40,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:799439792494,
        img:'./imgs/New Project (3).png',
        product : '	spaghetti',
        price: 8,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:799439792517,
        img:'./imgs/New Project (4).png',
        product : '	Chocolate',
        price: 40,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:799439792524,
        img:'./imgs/New Project (5).png',
        product : '	Green tea',
        price: 20,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:799439792531,
        img:'./imgs/New Project (6).png',
        product : 'Milk',
        price: 14,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:799439792548,
        img:'./imgs/New Project (7).png',
        product : 'ground beef',
        price: 29,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:799439792555,
        img:'./imgs/New Project (8).png',
        product : 'frozen vegetables',
        price: 12,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168169,
        img:'./imgs/New Project (9).png',
        product : '	pancakes',
        price: 23,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168183,
        img:'./imgs/New Project (10).png',
        product : 'cake',
        price: 12,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168176,
        img:'./imgs/burger.jpg',
        product : 'burgers',
        price: 46,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:701197168190,
        img:'./imgs/New Project (11).png',
        product : 'cookies',
        price: 12,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:1,
        img:'./imgs/New Project (34).png',
        product : 'Bundle 1',
        price: 80,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:2,
        img:'./imgs/New Project (35).png',
        product : 'Bundle 2',
        price: 38,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:3,
        img:'./imgs/New Project (36).png',
        product : 'Bundle 3',
        price: 55,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:4,
        img:'./imgs/New Project (37).png',
        product : 'Bundle 4',
        price: 50,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:5,
        img:'./imgs/New Project (38).png',
        product : 'Bundle 5',
        price: 45,
        cart:false,
        quantity:1,
        total:0
    }
];


function total(){
    let total = 0;
    for (let index = 0; index < products.length; index++) {
        if (products[index].cart) {
            total+= products[index].total;
        }
            
    }
    return total
}


var con=0;
var con2=[];

function clean(){
    for (let index = 0; index < products.length; index++) {
        products[index].cart = false;
        products[index].shelf =1;
        products[index].total=0;
        con2=[];
        updateCart();
    }
}


function cardM(index) {
    return `
    <div class="col-lg-3 col-md-6 col-6 mb-4" style="width:20rem;" >  
    <div class="card card-ecommerce" >
      <div class="view overlay">
        <img src="${products[index].img}" class="img-fluid"
          alt="">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      
      <div class="card-body">
        
        <h5 class="card-title mb-1">
          <strong>
          <h5 class = "card-title">${products[index].product }</h5>
          </strong>
        </h5>
       
        <div class="card-footer pb-0">
          <div class="row mb-0">
            <span class="float-left">
              <strong>${products[index].price}.00 EGP</strong>
            </span>
            <span class="float-right">
              <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                <i class="fas fa-shopping-cart ml-3" onclick="add('${products[index].id}')" ></i>
              </a>
            </span>
          </div>
        </div>
      </div>
  </div>
</div>
`;

}


function add(id){
    for (let index = 0; index < products.length; index++) {
        if(products[index].id != id || products[index].cart==true){

        } else {
            products[index].cart=true;
            con2.push(products[index].id);
            document.getElementById('tableProducts').innerHTML+=`
            <tr>
            <th scope="row">${con+1}</th>
            <td><button class="btn btn-danger" onclick="remove(${products[index].id})">X</button></td>
            <td><img style="width: 5rem;" src="${products[index].img}"></td>
            <td>${products[index].product }</td>
            <td>
            <button class="btn btn-primary" onclick="reduceAmount(${products[index].id})">-</button>
            <input style="width: 2rem;" id="${products[index].id}" value="${products[index].quantity}" disabled>
            <button class="btn btn-primary" onclick="addAmount(${products[index].id})">+</button>
            </td>
            <td>$ ${products[index].price*products[index].quantity}</td>
            </tr>
            `
            con++;
            products[index].total = products [index].price*products[index].quantity
        }
           
    }
        /*
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
    */
    // if user choosed tomato i will recommend rice,meat 
    if (id == 799439792531) {
        // get the index of the items you wnat to recommend 
        $("#row6").empty();
        $("#row6").append(cardM(21));
        $("#row6").append(cardM(5));
        $("#recommend").modal('show')
    }
    if (id == 799439792487) {
      // get the index of the items you wnat to recommend 
      $("#row6").empty();
      $("#row6").append(cardM(25));
      $("#row6").append(cardM(5));
      $("#recommend").modal('show')
  }
  if (id == 2310010736) {
    // get the index of the items you wnat to recommend 
    $("#row6").empty();
    $("#row6").append(cardM(21));
    $("#row6").append(cardM(25));
    $("#recommend").modal('show')
}
if (id == 797776111084) {
  // get the index of the items you wnat to recommend 
  $("#row6").empty();
  $("#row6").append(cardM(21));
  $("#row6").append(cardM(25));
  $("#row6").append(cardM(22));
  $("#recommend").modal('show')
}
if (id == 799439792494) {
  // get the index of the items you wnat to recommend 
  $("#row6").empty();
  $("#row6").append(cardM(21));
  $("#row6").append(cardM(20));
  $("#recommend").modal('show')
}
    /*
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
    */
    document.getElementById('total').innerHTML =`
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td><h4>Total: </h4></td>
    <td>$ ${total()}.00 EGP</td>
    </tr>
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><button onclick="buy()" class="btn btn-succeess">Buy</button></td>
    </tr>
    
    `
}




function remove (id){
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id){
            products[index].cart = false;
            products[index].total = 0;
            products[index].quantity = 1;
            total();
            for (let index2 = 0; index2< con2.length; index2++){
                if (products[index].id == con2[index2]) {
                    con2.splice(index2,1);
                } else{

                }
            }
            updateCart();
        }else{
            updateCart();
        }
        
        
    }
}


function updateCart(){
        con=0;
        //var totalTable=0;
        document.getElementById('tableProducts').innerHTML='';
        for (let index = 0; index < con2.length; index++) {
            var position = con2[index];
            for (let index3 = 0; index3 < products.length; index3++) {
                if(position == products[index3].id){

                    document.getElementById('tableProducts').innerHTML+=`
            <tr>
            <th scope="row">${con+1}</th>
            <td><button class="btn btn-danger" onclick="remove(${products[index3].id})">X</button></td>
            <td><img style="width: 5rem;" src="${products[index3].img}"></td>
            <td>${products[index3].product}</td>
            <td>
            <button class="btn btn-primary" onclick="reduceAmount(${products[index3].id})">-</button>
            <input style="width: 2rem;" id="${products[index3].id}" value="${products[index3].quantity}" disabled>
            <button class="btn btn-primary" onclick="addAmount(${products[index3].id})">+</button>
            </td>
            <td>$ ${products[index3].price*products[index3].quantity}</td>
            </tr>
            `
                    products[index3].total = products[index3].price*products[index3].quantity


                } else {


                } 
                
            }
            con=con+1; 
        }
        if(total() == 0){
            document.getElementById('total').innerHTML='';
        } else {
            document.getElementById('total').innerHTML =`
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td><h4>Total: </h4></td>
    <td>$ ${total()}.00 EGP</td>
    </tr>
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><button onclick="buy()" class="btn btn-succeess">Buy</button></td>
    </tr>
    
    `

        }

}

function reduceAmount(id) {
    for (let index = 0;index < products.length ; index++){
        if(products[index].id == id){
            if (products[index].quantity >1){
                products[index].quantity = products[index].quantity-1;
                updateCart();
            } else {


            }
        } else {

        
        }
    }
}


function addAmount(id) {
    for (let index = 0;index < products.length ; index++){
        if(products[index].id == id){
            if (products[index].quantity >0){
                products[index].quantity = products[index].quantity+1;
                updateCart();
            } else {


            }
        } else {

        
        }
    }
}





  (()=>{
        for (let index = 0; index < products.length; index++) {

            if(index < 20){
            document.getElementById('row1').innerHTML += `
            
           
            <div class="col-lg-3 col-md-6 col-6 mb-4" style="width:20rem;" >  
            <div class="card card-ecommerce" >
              <div class="view overlay">
                <img src="${products[index].img}" class="img-fluid"
                  alt="">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              
              <div class="card-body">
                
                <h5 class="card-title mb-1">
                  <strong>
                  <h5 class = "card-title">${products[index].product }</h5>
                  </strong>
                </h5>
               
                <div class="card-footer pb-0">
                  <div class="row mb-0">
                    <span class="float-left">
                      <strong>${products[index].price}.00 EGP</strong>
                    </span>
                    <span class="float-right">
                      <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                        <i class="fas fa-shopping-cart ml-3" onclick="add('${products[index].id}')" ></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
          </div>
      </div>
            
            
            `;
            
        }

        if (index >19 && index <32 ) {
            document.getElementById('row3').innerHTML += `
        <div class="col-lg-3 col-md-6 col-6 mb-4" style="width:20rem;" >  
        <div class="card card-ecommerce" >
          <div class="view overlay">
            <img src="${products[index].img}" class="img-fluid"
              alt="">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          
          <div class="card-body">
            
            <h5 class="card-title mb-1">
              <strong>
              <h5 class = "card-title">${products[index].product }</h5>
              </strong>
            </h5>
            <span class="badge badge-danger mb-2">bestseller</span>
            <div class="card-footer pb-0">
              <div class="row mb-0">
                <span class="float-left">
                  <strong>${products[index].price}.00 EGP</strong>
                </span>
                <span class="float-right">
                  <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                    <i class="fas fa-shopping-cart ml-3" onclick="add('${products[index].id}')" ></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
      </div>
  </div>
        
        `;
        
        } if (index >31){

            document.getElementById('row4').innerHTML += `
            <div class="col-lg-3 col-md-6 col-6 mb-4" style="width:20rem;" >  
            <div class="card card-ecommerce" >
              <div class="view overlay">
                <img src="${products[index].img}" class="img-fluid"
                  alt="">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              
              <div class="card-body">
                
                <h5 class="card-title mb-1">
                  <strong>
                  <h5 class = "card-title">${products[index].product }</h5>
                  </strong>
                </h5>
                <span class="badge badge-danger mb-2">15% OFF</span>
                <div class="card-footer pb-0">
                  <div class="row mb-0">
                    <span class="float-left">
                      <strong>${products[index].price}.00 EGP</strong>
                    </span>
                    <span class="float-right">
                      <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                        <i class="fas fa-shopping-cart ml-3" onclick="add('${products[index].id}')" ></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
          </div>
      </div>
            
            `; 
        }
    
    
    }



  })();







