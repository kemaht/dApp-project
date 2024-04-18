import { generateReactInfinityData, generateAirMaxData, generateAirForceData, generateCortezData, } from "../services/shoeService.js";
/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getShoeData = async (req, res) => {
    // We will use a try catch block to catch any errors
    try {
        // Get the city param from the request
        const { model } = req.params;
        console.log(model);
        // We will create a variable with a type of WeatherData
        let finalShoeData;
        // We will use an if statement to check which city was passed in
        if (model === "reactinfinity") {
            console.log(generateReactInfinityData());
            finalShoeData = generateReactInfinityData();
        }
        else if (model === "airmax") {
            console.log(generateAirMaxData());
            finalShoeData = generateAirMaxData();
        }
        else if (model === "airforce") {
            console.log(generateAirForceData());
            finalShoeData = generateAirForceData();
        }
        else if (model === "cortez") {
            console.log(generateCortezData());
            finalShoeData = generateCortezData();
        }
        else {
            // If the city is not london or dublin, we will throw an error
            res.status(404).send("Shoe not found");
        }
        // We will return the weather data as JSON
        res.status(200).json(finalShoeData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send("Error in fetching weather data");
    }
};
//# sourceMappingURL=shoeController.js.map