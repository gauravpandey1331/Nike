const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
   // for changing the text of current product:
let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");





menuItems.forEach((item,index)=>{          // for each items present in a menuItems.
    item.addEventListener("click", ()=>{         // we call an event listener for each item when we clicked.
        // for changing the current slide :
        wrapper.style.transform = `translateX(${-100 * index}vw)`;   
    // Here $() function is  shorthand for the getElementByID method,which, as noted above, returns the ID of a specific element of an HTML DOM. It's frequently used for manipulating elements in a document.
    // The dollar ($) sign is a JavaScript identifier, which simply means that it identifies an object in the same way that a name or variable does.

    // Template literals are literals delimited with backtick (`) characters.To supply a function of your own, precede the template literal with a function name it is used.
    // ` In that case, the template literal is passed to your tag function, where you can then perform whatever operations you want on the different parts of the template literal.
      
    choosenProduct = products[index]  // to change the choosen product

    currentProductTitle.textContent = choosenProduct.title;          // for changing of each title in a productDesc
    currentProductPrice.textContent = "$" + choosenProduct.price;   // for changing of each prices in a productDesc

    currentProductImg.src = choosenProduct.colors[0].img;   // for changing of each images in a productDesc
    

    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
    })

    });
});

// for changing the colors of a product while clicking on the color button.

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// for changing the color while clicking on the sizes of a each product :

currentProductSizes.forEach((size, index)=>{
  size.addEventListener("click", ()=>{
    currentProductSizes.forEach((size)=>{    // this help to remove the color changes from previous one we used it.
      size.style.backgroundColor = "white";
     size.style.color = "black";
    });
     size.style.backgroundColor = "black";   // when we click on any sizes box its background changes into black.
     size.style.color = "white";      // when we click on any sizes box its color changes into black.
  });
});

// code for payment option :

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

  //  *****  VVI And Easy.
productButton.addEventListener("click", ()=>{    // when we click on 'BuyNow' then payment-display will be flex and everything will appear.
     payment.style.display = "flex";
});

close.addEventListener("click", ()=>{    // when we click on close i.e X, then payment-display will be none which means it will be closed down.
  payment.style.display = "none";
});
