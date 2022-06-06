const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov' ],

        datasets: [
            {
                label: 'EUR',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'green',
                backgroundColor: 'green',
                borderWidth: 2,
                borderRadius: 5,
               
            },
            {
                label: 'EHT',
                data: [31500, 41000, 88800, 26000, 46000, 32698,
                5000, 3000, 18656, 24832, 36844],
                borderColor: 'purple',
                backgroundColor: 'purple',
                borderWidth: 2
            }
          
        ]
    },
    options: {
        responsive: true
    }
})

// show or hide sidebar

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () =>{
    sidebar.style.display = 'block';
})
closeBtn.addEventListener('click', () =>{
    sidebar.style.display = 'none';
})


// chage theme 

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')

    themeBtn.querySelector('spamn:fist-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})