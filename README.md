# User Authentication System

This is a simple user authentication system built with Node.js, Express, EJS, and MongoDB. Users can register with a username and mobile number, log in with either their username or mobile number, and be redirected to a home page upon successful login.

## Features

- User registration with username and mobile number
- User login using either username or mobile number
- Password hashing with bcrypt for security
- Error handling for login and registration processes

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- MongoDB
- bcrypt (for password hashing)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sharath4444/registration_form.git
   cd registration_form
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB database. Update the database configuration in the `config.js` file.

4. Start the server:

   ```bash
   node index.js
   ```

5. Open your browser and go to `http://localhost:5000` to access the application.

## Usage

- To register a new user, navigate to the signup page at `/signup`.
- To log in, use either your username or mobile number on the login page at `/`.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.


