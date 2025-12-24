# Task Management System
This is a simple task management system that uses **Laravel** and **MySQL** for the backend, and **React JS / TypeScript** for the frontend.

## Pre-requisites
Before you begin, ensure you have the following installed:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Node.js
- Postman (Optional: for testing API)

This application uses Docker to set up and manage all necessary services for the backend.

## Installation
Follow these steps to set up the project locally for development:

**Step 1:** Clone the repository
```
git clone https://github.com/jolabsw/task-mgmt-system.git
```
**Step 2:** Navigate to the backend directory
```
cd task-mgmt-list
cd backend
```

### Backend Installation

**Step 3:** Copy the .env.example file to the root directory
```
cp backend/docker/php/.env.example backend/.env
```
**Step 4:** Start Docker Desktop
Ensure Docker Desktop is running on your machine.

**Step 5:** Build Docker images
Run the following command to build the Docker images. Wait until the build process completes.
```
docker compose build
```

**Step 6:** Start the Docker containers
```
docker compose up
```

**Step 7:** Verify Laravel is running
Run this command to check if the Laravel backend is up and running:
```
curl -i http://localhost:8000/api/v1/test
```

### Frontend Installation
Once the backend is up and running, follow these steps to set up the frontend.

**Step 8:** Navigate to the frontend directory
Open a new terminal window and navigate to the frontend directory:
```
cd task-mgmt-list
cd frontend
```

**Step 9:** Install all dependencies
Run the following command to install the required dependencies:
```
npm install
```

**Step 10:** Start the development server
Use the following command to start the React development server:
```
npm run dev
```
**Step 11:** Verify the frontend is running
Ensure that the React development server is running by visiting [http://localhost:5173/](http://localhost:5173/) in your browser.

> **Note:** The backend's CORS policy is currently configured to only allow requests from this URL. If another application is already running on port 5173, you may need to update the port or add a new allowed origin in the backend's configuration.


## That's all!
Thank you for checking on the Task Management System! If you encounter any issues or have questions, feel free to open an issue on GitHub or reach me out using my personal email address.

Happy coding!

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)