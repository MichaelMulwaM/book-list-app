# My Reading List (React List Rendering App)

A simple React application that displays a list of books using separate components, `.map()`, and basic state management. Built as my first practice project to learn React components, props, and list rendering.

## Live Demo

[View Live App](https://michaelmulwam.github.io/book-list-app/)

## Features

- **Component-Based Structure:** Separated into `App`, `BookList`, `BookItem`, and `AddBookForm` components.
- **Dynamic List Rendering:** Uses JavaScript's `.map()` method to render an array of book objects.
- **Add Books:** Add new books dynamically using a simple form.
- **Remove Books:** Delete any book from the list with a single click.

## Tech Stack

- React
- Vite
- CSS

## Getting Started

To run this project locally on your computer:

1. **Clone the repository**
   ```bash
   git clone [https://github.com/MichaelMulwaM/book-list-app](https://github.com/MichaelMulwaM/book-list-app)
2. Navigate into the project folder
   cd book-list-app
3. Install dependencies
   npm install
4. Start the development server
   npm run dev

## Project Structure
   src/
├── components/
│   ├── AddBookForm.jsx   # Form to add a new book
│   ├── BookItem.jsx      # Displays a single book card
│   └── BookList.jsx      # Maps through the books array
├── App.jsx               # Main component and state
├── App.css               # Styling
└── main.jsx              # App entry point