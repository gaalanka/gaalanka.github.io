// Fetch data from Random User API
//KÉSZ
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    document.getElementById('user-photo').src = user.picture.large;
    document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-location').textContent = `${user.location.city}, ${user.location.country}`;
  })
  .catch(error => console.error('Error fetching user data:', error));
