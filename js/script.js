let bagItems;
onload();

function onload(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}


function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }else {
        bagItemCountElement.style.visibility = 'hidden';
    }
    

}

function displayItemsOnHomePage (){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }

let innerHTML = '';
items.forEach(item => {
    innerHTML += `<div class="item-container">
    <img class="item-img" src="../${item.item_image}" alt="dress">
    <div class="rating">${item.rating.starts} ⭐ | ${item.rating.noOfReviews}</div>
    
    <div class="company-name">${item.company_name}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
    <span class="current-price">BDT ${item.current_price}</span>
    <span class="original-price">BDT ${item.original_price}</span>
    <span class="discount">(${item. discount}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
    </div>`
    
});


itemsContainerElement.innerHTML = innerHTML;
}
