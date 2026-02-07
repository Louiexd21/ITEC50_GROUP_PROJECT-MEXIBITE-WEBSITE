function filterItems(category){
    const items = document.getElementsByClassName('item');
    // for removing .active class
    const button = document.getElementsByTagName('span');
    for(let i = 0; i<button.length; i++){
        button[i].classList.remove('active');
    }
    // for adding
    const selectedButton = document.getElementById(`${category}Btn`);
    selectedButton.classList.add('active');

    // looping through all items 
    for(let i=0; i< items.length;i++){
        let item = items[i];
        if(item.classList.contains(category)){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    }
}

filterItems('beef-series');