import { param } from "express-validator";
/**
 * Validates the city name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:city",
 * validateCityName,
 * getWeatherData
 * );
 */
export const validateCityName = param("city")
    // We will use the isString method to check if the city param is a string
    .isString()
    // We will use the isIn method to check if the city param is either london or dublin
    .isIn(["london", "dublin"])
    // We will use the withMessage method to set a custom error message
    .withMessage("City name must be either london or dublin");
export const validateShoeName = param("model")
    // We will use the isString method to check if the city param is a string
    .isString()
    // We will use the isIn method to check if the city param is either london or dublin
    .isIn(["reactinfinity", "airmax", "cortex", "airforce1"])
    // We will use the withMessage method to set a custom error message
    .withMessage("City name must be either reactinfinty, airmax, cortez or airforce1");
//# sourceMappingURL=validators.js.map