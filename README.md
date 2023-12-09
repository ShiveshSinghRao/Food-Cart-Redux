# Online Food Ordering System

This is a simple online food ordering system developed using React and Redux, allowing users to browse a menu, add items to their cart, and manage their orders.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

### Carousel

- A slider component showcasing images of available food items.

### Menu

- Displays a list of food items with images, names, and prices fetched from a hardcoded product list.
- Users can add items to their cart by clicking the "Add to Cart" button.

### Cart

- Shows the selected items with their quantity, price, and total amount in the cart.
- Users can increment, decrement, or delete items from the cart.

## Folder Structure

- `src/components/`: Contains React components such as `Carousel`, `Menu`, and `Cart`.
- `src/images/`: Holds images used in the application.
- `src/reducer.js`: Redux setup and reducer logic for managing the cart state.
- `src/store.js`: Configures the Redux store.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/online-food-ordering-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd online-food-ordering-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Technologies Used

- React
- Redux
- React-Redux
- React Icons
- React-Slick

