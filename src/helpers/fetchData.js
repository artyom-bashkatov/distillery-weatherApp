const fetchData = async (location, days) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
};

export default fetchData;