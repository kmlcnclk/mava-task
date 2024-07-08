# MAVA Task

This document outlines the MAVA Task.

## Swagger 

You can go to main route to use swagger ui. (`http://localhost:3000/`) 

## Auth Management

### User Login

**Endpoint:** `/auth/login`  
**Method:** `POST`

Allows the user to login successfully.

**Parameters:**
- `Agency` (string)
- `User` (string)
- `Password` (string)

## Hotel Product Management

### Get Arrival Autocomplete

**Endpoint:** `/hotel-product/getarrivalautocomplete`  
**Method:** `POST`

Returns the Arrival Autocomplete's information.

**Headers:**
- `Authorization` (string): The access token.

**Parameters:**
- `ProductType` (number)
- `Query` (string)
- `Culture` (string)

### Search Price

**Endpoint:** `/hotel-product/pricesearch`  
**Method:** `POST`

Returns the Prices' information.

**Headers:**
- `Authorization` (string): The access token.

**Parameters:**
- `checkAllotment` (boolean)
- `checkStopSale` (boolean)
- `getOnlyDiscountedPrice` (boolean)
- `getOnlyBestOffers` (boolean)
- `productType` (number)
- `productType` (number)
- `productType` (number)
- `arrivalLocations` (Array<{ id: string, type: number }>)
- `roomCriteria` (Array<{ adult: number, childAges: number[] }>)
- `nationality` (string)
- `checkIn` (string)
- `night` (number)
- `currency` (string)
- `culture` (string)

## Used Technologies

- Typescript
- Javascript
- Express.js
- Nest JS
- Zod
- Axios
- Swagger
- Dotenv

## Node Version

The system is built using Node version v20.11.1.

## Note

- Normally important information such as `.env` should not be added to GitHub projects, but I added it so that the application can be run by everyone.
- Additionally, unit and e2e tests have been written for APIs.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kmlcnclk/mava-task.git
    ```
2. Install dependencies:
    ```bash
    cd mava-task
    npm install
    ```
3. Run the application:
    ```bash
    npm run dev
    ```

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

This documentation provides a comprehensive guide to using the APIs within our cryptocurrency trading system. For further details or support, please refer to the project's GitHub repository.
