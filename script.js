async function getWeather() {
            try {
                const url =
                    "https://api.weatherbit.io/v2.0/current?key=API_KEY&include=minutely&lat=35.7796&lon=-78.6382";

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();

                console.log(data);

                document.getElementById("weather").innerHTML =
                    `<pre>${JSON.stringify(data, null, 2)}</pre>`;

            } catch (error) {
                document.getElementById("weather").innerHTML =
                    `Error : ${error.message}`;

                console.error(error);
            }
        }

        getWeather();