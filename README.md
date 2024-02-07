
# dv01 Frontend Challenge by Karl Cereno    

This is my submission for the dv01 Frontend Engineer Challenge. I have developed a feature-rich web application to effectively visualize loan data metrics. Leveraging modern technologies such as React, TypeScript, Tailwind CSS, Redux for state management, and Recharts for dynamic bar chart generation, I aimed to create an intuitive and interactive experience for users.

## Installation

Cloning from the Online Repository

```bash
git clone https://github.com/kcereno/kc---dv01-Frontend-Challenge-202103.git
cd kc---dv01-Frontend-Challenge-202103
```

Install the required dependencies:
```bash
npm install
```

Start the development server
```bash
npm start
```

Open your web browser and visit http://localhost:3000 to access the application.
## Usage/Examples

Once the application is running, you can use it to:
+ View loan performance metrics in the form of interactive charts and tables.
+ Filter and sort the data to analyze specific loan characteristics.



## Features

### Powerful Filtering Options
+ Seamlessly filter data by Homeownership, Quarter, Term, and Year to pinpoint your desired information.
+ Experience the convenience of real-time updates in both bar and table data as you apply filters.

[![Watch a Demo](https://i.ibb.co/x74BkW5/Screenshot-2024-02-06-at-2-43-10-PM.png)](https://youtube.com/shorts/s0BWowsfbl4?feature=share)

Click the image above to watch a quick video demonstration 

### Easily Reset filters
+ A simple click of the reset button effortlessly clears all filters, instantly restoring the data to its initial state.
+ [Watch the filter reset demo here](https://youtu.be/qUCDsxIO1BE).

### Special Message If There No Matching Entry for filters.
+ In cases where filtering results in no matches, our system provides a helpful message prompting you to adjust your filters for better results.
[![Watch a Demo](https://i.ibb.co/vxjbn8q/Screenshot-2024-02-06-at-2-52-54-PM.png)](https://youtu.be/uCLQjBJTjkk)

Click the image above to watch a quick video demonstration 


## Challenges and Learnings

Throughout this project, I encountered several challenges and gained valuable insights. Notably, I faced a learning curve when revisiting Redux, understanding its philosophy, and adopting best practices. It was interesting to discover that the principle of immutability, which typically applies to Redux, doesn't directly apply in TypeScript due to Redux Toolkit's utilization of Immer. Additionally, I invested time in thoroughly understanding the nuances of Recharts to effectively render the bar graph.

To provide testing, I had to learn Plawright. React testing library and Cypress did not work well with the existing dependencies.

Furthermore, at the project's outset, I initially assumed that creating an endpoint to fetch data was a requirement. Consequently, I implemented this feature using Express. If you're interested, I'd be happy to share the relevant code with you.

## Demo

Explore the live demo of this project by visiting the following link: [Demo](https://kc-dv01-frontend-challenge-202103.vercel.app/)

Feel free to click the link to interact with the application and experience its features.
## Tests

Testing is performed using Playwright, a powerful tool for browser automation. Playwright offers the flexibility to test on three different browsers and provides options to run tests either in headless mode or with a GUI, along with detailed reports for test results. You can find comprehensive documentation on Playwright [here](https://playwright.dev/).

### Running Tests

Ensure your development server is up and running by executing:
```bash
npm start
```

To execute tests in headless mode, use the following command:
```bash
npx playwright test
```

For running tests with the graphical interface, execute:

```bash
npx playwright test
```

+ [Watch the UI test  here](https://youtu.be/SddkFk0JV6s).
## Tech Stack

**Client:** React, Redux, TailwindCSS, Typescript



