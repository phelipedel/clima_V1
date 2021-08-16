
if ("geolocation" in navigator) {
    console.log('ativo');
    navigator.geolocation.getCurrentPosition(async function (position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        const lat = position.coords.latitude   
        const lon = position.coords.longitude

    
        const data = { lat, lon };
        const options = {
            method: 'Post',
            headers: {
                'Content_Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
       

      });
  } else {
    alert("Error!");
  }

