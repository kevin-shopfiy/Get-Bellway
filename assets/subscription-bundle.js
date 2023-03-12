var first_btn = document.querySelector('.nex-btn-wrapper');
var step = "1";


var collectionItems = document.querySelectorAll('.bundle-collection-item');
var productItems = document.querySelectorAll('.bundle-product-item');
var variantItems = document.querySelectorAll('.bundle-variant-item');
var progressrate = document.querySelector('.thumb');
var step_status = document.querySelector('#step--status');
var header_title = document.querySelector('.header-title');
var width  = (window.innerWidth > 0) ? window.innerWidth:screen.width;
var main_bg = document.querySelector('.custom-container');
var border_color = document.querySelectorAll('.product-item');
var thumb = document.querySelector('.thumb');
var nex_btn = document.querySelector('.nex-btn-wrapper');
var variant_item = document.querySelectorAll('.variant-item');


collectionItems.forEach(item=>{
    item.addEventListener('click', function(){
        let height= document.body.scrollHeight-1300;
        $("html, body").animate({ scrollTop: height });
        
    })    
})

productItems.forEach(item=>{
    item.addEventListener('click', function(){
        let height= document.body.scrollHeight-1300;
        $("html, body").animate({ scrollTop: height });
    })    
})
variant_item.forEach(item=>{
    item.addEventListener('click', function(){
        let height= document.body.scrollHeight-1300;
        $("html, body").animate({ scrollTop: height });
    })    
})

    first_btn.addEventListener('click', function(){    
        
        if (step == "1") {
            const collection = document.querySelector('[name="radio-collection"]:checked');
            console.log(collection)
            const collectionId = collection.value;
            const collection_item = collection.closest('.collection-item');
            const second_step_title = collection_item.querySelector('.title-item h3').textContent;
            productItems.forEach(item=>{
                if (item.getAttribute('data-collection-id') == collectionId) {
                    item.classList.add('active');
                    collectionItems.forEach(item=>{
                        item.classList.add('remove');
                    })
                    $("html, body").animate({ scrollTop: 100 }, "slow");
                    progressrate.style.width= "66%";
                    step_status.textContent = '2 of 3';
                    header_title.textContent = second_step_title;
                    step = "2";                    

                    if (width>746) {
                        main_bg.style.background = "#F7B5B5";
                        border_color.forEach(item=>{
                            item.style.border = "2px solid #EE3350";
                        });
                        thumb.style.background = "#EE3350";
                        nex_btn.style.background = '#EE3350';                      
                    }                    
                } else {
                    item.classList.add('remove');
                }
            }); 
      
        } else if (step == "2") {
            const productId = document.querySelector('[name="radio-product"]:checked').value;
            console.log("step2")
            console.log(productId);
            variantItems.forEach(item=>{
                if (item.getAttribute('data-product-id') == productId) {
                    item.classList.add('active');
                    productItems.forEach(item=>{
                        item.classList.add('remove');
                    })
                    $("html, body").animate({ scrollTop: 100 }, "slow");
                    progressrate.style.width= "100%";
                    step_status.textContent = '3 of 3';
                    document.querySelector('.next-btn').textContent = "Checkout";
                    header_title.textContent = "Super Fiber Bundle";
                    document.querySelector('.nex-btn-wrapper svg').style.right ='50px';
                    step = "3";
                    if (width>746) {
                        main_bg.style.background = "#F7B5B5";
                        border_color.forEach(item=>{
                            item.style.border = "2px solid #EE3350";
                        })
                        variant_item.forEach(item=>{
                            item.style.border = "2px solid #EE3350";
                        }) 
                        thumb.style.background = "#EE3350";
                        nex_btn.style.background = '#EE3350';
                    }
                } else {
                    item.classList.add('remove');
                }
            })
        } else if(step == "3") {
            let height= document.body.scrollHeight-1300;
            $("html, body").animate({ scrollTop: height });
            const variantId = document.querySelector('[name="radio-variant"]:checked').value;
            if (variantId) {
                $.ajax({
                    url: '/cart/add.js',
                    type: 'post',
                    dataType: 'json',
                    data: 'quantity=1&id='+variantId,
                    success: function (cart){
                        console.log("success")
                        window.location.href = '/checkout';
                    }
                });
              } else {
                  console.log("failed")
                window.location.href = '/';
              }
        }
        
        
})




