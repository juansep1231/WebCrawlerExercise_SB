# Hacker News Web Crawler Exercise

## Overview

This repository contains the code for a web crawler implemented with **Express** for the server and **React** for the frontend, both  using **TypeScript**. The web crawler is designed to extract information from Hacker News entries (`https://news.ycombinator.com/`), retrieving details such as rank, title, number of comments, and points for each entry. Additionally, the application allows users to filter entries based on the number of words in the title:
- **Titles with More Than Five Words:** Sorted in descending order by the number of comments.
- **Titles with Five Words or Fewer:** Sorted in descending order by the number of points.

The project also includes automated unit testing using **Jest** to ensure the reliability of the server functions.

## Technologies Used

- **Backend:**
  - **Node.js** with **TypeScript**
  - **Express** for server creation
  - **Axios** for making HTTP requests
  - **Cheerio** for parsing and manipulating fetched HTML
  - **Jest** for automated testing

- **Frontend:**
  - **React** with **TypeScript**
  - **Axios** for making HTTP requests

## Installation

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/juansep1231/WebCrawlerExercise_SB.git
2. **Start Server:**
- Navigate to the server directory 
    ```bash 
    cd server
- Install dependencies 
    ```bash 
    npm install 
- Run the server
    ```bash 
    npm run start:server
3. **Start Client:**
- In a new terminal window/tab, navigate to the client directory 
    ```bash 
    cd client
- Install dependencies 
    ```bash 
    npm install 
- Run the client
    ```bash 
    npm run start:client
## Usage 

After installing the dependencies and ensuring both the client and server are running, you can access the application by opening your web browser and navigating to [http://localhost:3000](http://localhost:3000).

By default, the application displays all retrieved entries. You can use the provided buttons to apply your desired filters.

## Testing
To run the tests navigate to the server directory and execute the following command in your terminal: `npm run test`
#### Test cases

**Filter Functions**


- Valid input arrays with a variety of entries
- Sorting by comments or points

**Scraping Functions**

- Correct extraction of numbers, titles, points, and comments.
- Edge cases with missing data.


