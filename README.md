# Task Management System
This is a simple task management system that uses **Laravel** and **MySQL** for the backend, and **React JS / TypeScript** for the frontend.

## Pre-requisites
Before you begin, ensure you have the following installed:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Node.js
- Postman (Optional: for testing API)

This application uses Docker to set up and manage all necessary services for the backend.

## Installation
Follow these steps to set up the project locally for development.

Or you may watch this video for step by step installation walkthrough:
https://drive.google.com/file/d/1QJd6rP1mbf0aC7ZlnYfCe5MnH3LBSSPs/view?usp=sharing

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
cp docker/php/.env.example .env
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

**Step 7:** Run Database Migrations from Docker
Once all Docker containers are running, access the Laravel application container, install composer and run the database migrations.
Make sure you are still in the **backend** directory, and open a new terminal window.
```
docker compose exec app /bin/bash
composer install
php artisan migrate:fresh
```

Optionally, you can run the database seeders either together with the migration or separately after the migration:
```
php artisan migrate:fresh --seed
```
or
```
php artisan db:seed
```

**Step 8:** Verify Laravel is running
Run this command on backend directory to check if the Laravel backend is up and running:
```
curl -i http://localhost:8000/api/v1/test
```

### Frontend Installation
Once the backend is up and running, follow these steps to set up the frontend.

**Step 9:** Navigate to the frontend directory
Open a new terminal window and navigate to the frontend directory:
```
cd task-mgmt-list
cd frontend
```

**Step 10:** Install all dependencies
Run the following command to install the required dependencies:
```
npm install
```

**Step 11:** Start the development server
Use the following command to start the React development server:
```
npm run dev
```
**Step 12:** Verify the frontend is running
Ensure that the React development server is running by visiting [http://localhost:5173/](http://localhost:5173/) in your browser.

> **Note:** The backend's CORS policy is currently configured to only allow requests from this URL. If another application is already running on port 5173, you may need to update the port or add a new allowed origin in the backend's configuration.


## Upcoming tasks
To further improve this application, the following tasks should be completed:
- Deploy the application to a free hosting server
- Create and add test files

## Screenshots
<img width="2880" height="1592" alt="TMS - Sample Empty Data" src="https://github.com/user-attachments/assets/c72a8279-b1c9-44c1-bed4-72587b703e51" />
<img width="2880" height="3854" alt="TMS - Sample With Data" src="https://github.com/user-attachments/assets/311a3ee2-8499-4169-96d4-6bbdebfb4183" />

## That's all!
Thank you for checking out the Task Management System! If you encounter any issues or have any questions, feel free to open an issue on GitHub or contact me via my personal email.

Happy coding!

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)
