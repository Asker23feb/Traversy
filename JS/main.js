const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content Item
fucntion selectItem(tab-1) {
    //Add border to current tab
    this.classList.add('tab-border');
}

//Listen for Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));
