function createNewResponse(cards) {
    return {
        isLoggedIn: false,
        username: "",
        page: "",
        messages: [],
        cards: cards,
        lists: []
    };
}

function KtoF(tempK) {
    return Math.ceil(((tempK-273.15)*1.8)+32);
}

function KtoC(tempK) {
    return K-273.15;
}

function getWeatherImage(condition) {
    if (condition === "Clouds" || condition === "Mist" || condition === "Haze") {
        return "img/cloudy.png";
    }
    else if (condition === "Snow") {
        return "img/snow.png";
    }
    else if (condition === "Clear") {
        return "img/sunny.png";
    }
    else if (condition === "Rain") {
        return "img/rainy.png";
    }
    else {
        return "error.png";
    }
}

module.exports = {
    createNewResponse: function(req) 
    {
        return createNewResponse(req);
    },
    KtoF: function(tempK) 
    {
        return KtoF(tempK);
    },
    KtoC: function(tempK)
    {
        return KtoC(tempK);
    },
    getWeatherImage: function(condition)
    {
        return getWeatherImage(condition);
    }
}