
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

Furthermore, at the project's outset, I initially assumed that creating an endpoint to fetch data was a requirement. Consequently, I implemented this feature using Express. If you're interested, I'd be happy to share the relevant code with you.

I would have to implemented testing however React Testing Library was not working with Flowbite, the component library I used for development. This can be possbily addressed with another testing library such as Cypress or Playwright.

I would have tested basic features such as fitlering changing the data and bar chart, reset button fuctionality, error and loading state being rendered when appropriate.
## Demo

Explore the live demo of this project by visiting the following link: [Demo](https://kc-dv01-frontend-challenge-202103.vercel.app/)

Feel free to click the link to interact with the application and experience its features.

## Tests

While working on this project, I intended to implement testing to ensure the reliability and functionality of the application. However, I encountered compatibility issues between React Testing Library and Flowbite, the component library I used for development.

To address this, I plan to explore alternative testing libraries such as Cypress or Playwright, which may better suit the project's requirements.

In the testing phase, my focus would include the following areas:

Basic Features Testing: Testing the core functionalities of the application, such as filtering data and updating the bar chart based on user interactions.

Reset Button Functionality: Ensuring that the reset button effectively resets the application state and returns it to its initial state.

Error and Loading States: Verifying that error messages are displayed when appropriate, and that loading states are rendered during data fetching operations.

While testing is a crucial aspect of software development, adapting to the right tools and frameworks is essential to ensure a smooth and effective testing process.
## Tech Stack

**Client:** React, Redux, TailwindCSS, Typescript



