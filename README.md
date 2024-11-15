# Project Management Application

## Project Overview
This project is a Project Management application with a Django REST framework backend and a React.js frontend. The goal of this application is to help users manage and monitor projects efficiently, featuring CRUD operations for projects and project managers (**Not Implemented Yet**).

## Design Choices and User Experience
The design prioritizes ease of navigation and quick access to core functionality. The table interface, managed with Material React Table, allows users to view, edit, and delete projects directly from the main view. A modal popup was used for confirmation dialogs, providing an intuitive and non-intrusive experience.

### Key UX Considerations:
- **Clarity and Accessibility**: Ensured easy-to-read and accessible interfaces using Material UI.
- **Responsiveness**: Designed the application to be responsive, ensuring smooth access on various devices.
- **Feedback**: Integrated feedback elements like confirmation dialogs to keep users informed.

### Challenges and Solutions:
- **Data Fetching and State Management**: Managing data flow between React and Django required clear state management. Axios was chosen for its simplicity in handling HTTP requests.
- **Deleting Data with Confirmation**: Implemented a modal dialog to confirm deletions, which enhances UX by preventing accidental deletions.

## Project Structure
- `Back-Projet/`: Contains the Django backend for managing data and exposing APIs.
- `Front-Projet/`: Contains the React.js frontend for the user interface.

## Installation Instructions

### Backend Setup (Django)
1. Navigate to `Back-Projet`.
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Run migrations and start the server:
    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

### Frontend Setup (React)
1. Navigate to `Front-Projet`.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

## Project design on Figma
You can view the project design on Figma here: [Project Design on Figma](https://www.figma.com/proto/JhQtvgtb8kxHVf0GDsmoPU/Untitled?node-id=0-1&t=uGbz2yfliyW2A0YY-1)


https://github.com/user-attachments/assets/e41a414d-e8e7-4616-adc8-685688b7f3d4

