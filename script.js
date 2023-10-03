function getUserIP() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const userIP = data.ip;
        document.getElementById('userIP').innerText = userIP;
      })
      .catch(error => {
        console.error('Error getting IP address:', error);
      });
  }
  
  function goToNextPage() {
    window.location.href = 'details.html';
  }
  document.addEventListener('DOMContentLoaded', getUserIP);
  document.getElementById('startButton').addEventListener('click', goToNextPage);
  