// Replace with your Amadeus API credentials
const CLIENT_ID = 'xaOVcI3P03TODN8fJ7tFYG54mfQkFzFU'; // Replace with your actual client ID
const CLIENT_SECRET = 'AbRwtbZbNWntGlCC'; // Replace with your actual client secret

// Function to authenticate and get access token
async function getAccessToken() {
    const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';
    const body = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Authentication failed: ${errorData.error_description || response.statusText}`);
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error during authentication:', error);
        throw error;
    }
}

// Function to convert location name to IATA code
async function getLocationCode(accessToken, locationName) {
    const url = `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${locationName}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to fetch location code: ${errorData.errors[0].detail || response.statusText}`);
        }

        const data = await response.json();
        if (data.data.length === 0) {
            throw new Error(`No location found for: ${locationName}`);
        }

        // Return the first matching location's IATA code
        return data.data[0].iataCode;
    } catch (error) {
        console.error('Error fetching location code:', error);
        throw error;
    }
}

// Function to fetch flight offers
async function fetchFlightOffers(accessToken, departure, arrival, departureDate) {
    const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${departure}&destinationLocationCode=${arrival}&departureDate=${departureDate}&adults=1`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to fetch flight offers: ${errorData.errors[0].detail || response.statusText}`);
        }
        
        return await response.json();
        

    } catch (error) {
        console.error('Error fetching flight offers:', error);
        throw error;
    }
}

// Event listener for form submission
document.getElementById('flightSearchForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form data
    const departureName = document.querySelector('input[name="departure"]').value;
    const arrivalName = document.querySelector('input[name="arrival"]').value;
    const departureDate = document.querySelector('input[name="departure-date"]').value;

    try {
        const accessToken = await getAccessToken(); // Authenticate and get access token

        // Convert location names to IATA codes
        const departureCode = await getLocationCode(accessToken, departureName);
        const arrivalCode = await getLocationCode(accessToken, arrivalName);

        // Fetch flight offers using the IATA codes
        const flightData = await fetchFlightOffers(accessToken, departureCode, arrivalCode, departureDate);
        console.log(flightData);
        // Display flight results
        const flightsList = document.getElementById('flightsList');
        flightsList.innerHTML = ''; // Clear previous results
        flightData.data.forEach(flight => {
            const flightCard = document.createElement ('div');
            flightCard.className = 'flight-card';

            
            const airline = flight.itineraries[0].segments[0].departure && flight.itineraries[0].segments[0].departure.iataCode ? flight.itineraries[0].segments[0].departure.iataCode : 'Unknown Airline';


            const flightNumber = flight.itineraries[0].segments[0].arrival && flight.itineraries[0].segments[0].arrival.iataCode ? flight.itineraries[0].segments[0].arrival.iataCode : 'Unknown Airline';

            const departureTime = flight.itineraries[0].segments[0].departure && flight.itineraries[0].segments[0].departure.at ? flight.itineraries[0].segments[0].departure.at : 'N/A';
            const arrivalTime = flight.itineraries[0].segments[0].arrival && flight.itineraries[0].segments[0].arrival.at ? flight.itineraries[0].segments[0].arrival.at : 'N/A';
            flightCard.innerHTML = `
                <h3>${airline} - ${flightNumber}</h3>
                <p>Departure: ${departureTime}</p>
                <p>Arrival: ${arrivalTime}</p>
                <p>Price: $${flight.price.total}</p>
            `;
            flightsList.appendChild(flightCard);
        });

        // Show the results section
        document.getElementById('flightResults').style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch flight data. Please try again later.');
    }
});