function getIPDetails() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const userIP = data.ip;
        document.getElementById('ipAddress').innerText = userIP;
  
        fetch(`https://ipapi.co/${userIP}/json/`)
          .then(response => response.json())
          .then(ipData => {
            document.getElementById('latitude').innerText = ipData.latitude;
            document.getElementById('longitude').innerText = ipData.longitude;
            document.getElementById('city').innerText = ipData.city;
            document.getElementById('region').innerText = ipData.region;

            const mapContainer = document.getElementById('map');
            const latitude = parseFloat(ipData.latitude);
            const longitude = parseFloat(ipData.longitude);
            const mapUrl = `https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed`;
  
            const mapIframe = document.createElement('iframe');
            mapIframe.src = mapUrl;
            mapIframe.setAttribute('frameborder', '0');
            mapIframe.style.border = '0';
            mapIframe.style.width = '100%';
            mapIframe.style.height = '100%';
  
            mapContainer.appendChild(mapIframe);
          })
          .catch(error => {
            console.error('Error getting IP information:', error);
          });
      })
      .catch(error => {
        console.error('Error getting IP address:', error);
      });
  }


  function filterPostOffices() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const postOffices = document.querySelectorAll('#postOffices li');
    
    postOffices.forEach(office => {
      const name = office.textContent.toLowerCase();
      if (name.includes(searchInput)) {
        office.style.display = 'block';
      } else {
        office.style.display = 'none';
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', getIPDetails);
  document.getElementById('searchInput').addEventListener('input', filterPostOffices);
  