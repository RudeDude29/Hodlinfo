document.addEventListener('DOMContentLoaded', async () => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:2700/api/list', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            const dataArray = Object.values(data).slice(0,10);
            const div = document.getElementById('best-price-data')
            
            const dataList = document.getElementById('root');
            dataList.innerHTML = ''; // Clear existing data before adding updated data
            
            dataArray.forEach((coin, index) => {
                if(index==0){
                    div.innerText=`₹${Number(coin.buy).toFixed(0)}`;
                    div.style.color='white';
                } 
                const tr = document.createElement('tr');
                tr.innerHTML = ` 
                    <td>${index + 1}</td>
                    <td> ${coin.name}</td>
                    <td>₹ ${Number(coin.last).toFixed(2)}</td>
                    <td>₹ ${Number(coin.buy).toFixed(2)} / ₹ ${Number(coin.sell).toFixed(2)}</td>
                    <td class="${(coin.sell-coin.buy)/100 > 0 ? 'positive' : 'negative'}">${Number((coin.sell-coin.buy)/100).toFixed(2)} %</td>
                    <td class="${coin.sell-coin.buy > 0 ? 'positive' : 'negative'}">${coin.sell-coin.buy > 0 ? '▲' : '▼'} ₹ ${Number(coin.sell-coin.buy).toFixed(2)}</td>
                `;
                dataList.appendChild(tr);
            });
        } catch (error) {
            console.error(error);
        }
    };
    let count = 60; // Initial count valu
    const updateTimer = () => {
        const timerDisplay = document.getElementsByClassName('indicator')[0];
        timerDisplay.textContent = count;
         count--;
         if(count==0){
            count=60;
         };
        
    };
    
    const checkbox = document.getElementById('toggleCheckbox');
    const div = document.getElementById('best-price-data');
    
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            document.body.style.backgroundColor = 'white'; // Change background to white
            div.style.color='black';
        } else {
            document.body.style.backgroundColor = 'black'; // Change background to black
            div.style.color='white';
        }
    });
    // Initial call to fetch data
    fetchData();
    // Set up setInterval to fetch data every 60 seconds
    setInterval(fetchData, 60000);
    // Call the updateTimer function initially
    updateTimer();
    // Update the timer every second using setInterval
    setInterval(updateTimer, 1000);

});
 
const button = document.getElementsByClassName('connect-btn')[0];
const buyButton = document.getElementsByClassName('buy-btn')[0];
const link = ()=>{
    window.location.href = 'https://web.telegram.org/';
}
const buy = ()=>{
    window.location.href = 'https://bitcoin.org/en/buy';
}

