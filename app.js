const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const sidebar2 = document.querySelector('.sidebar2');
const features = document.querySelector('.features');
const company = document.querySelector('.company');
const dropdown = document.querySelector('.dropdown');
const dropdown2 = document.querySelector('.dropdown2');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');

toggleBtn.addEventListener('click', () => {
    if(sidebar.classList.contains('show-sidebar')){ 
        sidebar.classList.remove('show-sidebar')
        sidebar2.classList.remove('show-sidebar')
    } else {
        sidebar.classList.add('show-sidebar');
        sidebar2.classList.add('show-sidebar');
    }
    
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
    sidebar2.classList.remove('show-sidebar');
})

features.addEventListener('click', () => {
    if(dropdown.classList.contains('sdropdown')) {
        dropdown.classList.remove('sdropdown');
        icon1.classList.remove('sicon');
    } else {
        dropdown.classList.add('sdropdown');
        icon1.classList.add('sicon')
    }
});

company.addEventListener('click', () => {
    if(dropdown2.classList.contains('sdropdown2')) {
        dropdown2.classList.remove('sdropdown2');
        icon2.classList.remove('sicon');
    } else {
        dropdown2.classList.add('sdropdown2');
        icon2.classList.add('sicon')
    }
});