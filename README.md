Paw-Vision: Animal Injury Detector
Project Description
Paw-Vision is an innovative web application designed to detect injuries in animals using a Convolutional Neural Network (CNN) model. This project aims to provide a quick and efficient way to identify potential injuries from animal images, assisting in early intervention and care. The application features a robust backend for model inference and a responsive frontend built with modern web technologies, providing a user-friendly interface for image uploads and injury predictions.

![image](https://github.com/user-attachments/assets/42f2f0a7-7ec4-4ebc-b5da-f2558338bd96)

![image](https://github.com/user-attachments/assets/12f5f2df-84bb-47c1-b889-1e19a13e7dc8)

Features
Animal Injury Detection: Utilizes a custom-trained CNN model to classify animal images for injury presence.

User-Friendly Interface: A sleek and intuitive web interface for uploading images and viewing detection results.

Scalable Architecture: Built with a distinct frontend and backend for maintainability and potential future scaling.

Real-time Inference: Designed to provide near real-time injury detection results.

Dataset
The CNN model powering Paw-Vision was trained on a dataset comprising approximately 1000 images of various animals. This dataset was meticulously curated to include images that either depict animals with visible injuries or healthy animals, enabling the model to learn and distinguish between these crucial categories.

Model Architecture
The core of the injury detection lies in a Convolutional Neural Network (CNN). CNNs are particularly effective for image recognition tasks due to their ability to automatically learn hierarchical features from input images. The model is trained to process animal images and output a prediction regarding the presence or absence of an injury.

Technologies Used
This project leverages a combination of modern web development and machine learning technologies:

Frontend:

React: A declarative, component-based JavaScript library for building user interfaces.

TypeScript: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.

Vite: A fast build tool that provides a rapid development experience.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

shadcn-ui: A collection of re-usable components built with Radix UI and Tailwind CSS.

Backend:

The project structure suggests a backend directory, likely housing the Python code for the CNN model, inference API, and potentially serving data. (Further analysis of the backend code would confirm specific frameworks like Flask or FastAPI if used).

Project Structure
The repository is organized into the following main directories:

Paw-Vision/
├── backend/                  # Contains the server-side code, including the CNN model and API endpoints.
├── public/                   # Static assets for the frontend.
├── src/                      # Source code for the React frontend application.
├── vite.config.ts            # Vite configuration for the frontend.
├── tsconfig.json             # TypeScript configuration.
├── package.json              # Frontend dependencies and scripts.
├── pnpm-lock.yaml            # Lock file for `pnpm` package manager.
└── ...                       # Other configuration files (.gitignore, etc.)

Installation
To set up the project locally, follow these steps:

Clone the repository:

git clone https://github.com/sarvesh8804/Paw-Vision.git
cd Paw-Vision

Install Frontend Dependencies:
Navigate into the src directory (or wherever package.json is located for the frontend, typically at the root for Vite projects if it's a monorepo, but src is mentioned for the frontend code, so check package.json location). Assuming package.json is at the root of Paw-Vision:

# From the Paw-Vision root directory
pnpm install # or npm install or yarn install

Install Backend Dependencies:
Navigate into the backend directory and install the necessary Python packages.

cd backend
pip install -r requirements.txt # Assuming a requirements.txt exists

(If requirements.txt is not present, you will need to infer dependencies from the backend code and install them manually, e.g., pip install tensorflow or pip install torch for the CNN, pip install flask or pip install fastapi for the API).

Usage
Running the Backend (Model API)
Navigate to the backend directory:

cd backend

Start the backend server. The command will depend on the backend framework used (e.g., Flask, FastAPI). Common examples:

For Flask: flask run or python app.py

For FastAPI: uvicorn main:app --reload

Please consult the backend's specific documentation or code for the exact command to run the API.

Running the Frontend Application
Navigate back to the root of the Paw-Vision project (where package.json is located):

cd .. # if you are in the backend directory

Start the development server:

pnpm dev # or npm run dev or yarn dev

This will typically open the application in your web browser at a local address (e.g., http://localhost:5173).

Contributors
sarvesh8804 (Sarvesh)

License
This project is licensed under the MIT License.
