# Document Editor - INKEDIT

This template provides a minimal setup for a Document Editor built with **React** and **Vite**. It integrates **CKEditor** to deliver a user-friendly layout and rich text editing capabilities.

## Key Features

- **Rich Text Editing**: The CKEditor integration offers a customizable toolbar, enabling easy formatting, image insertion, and content management.
- **File Import/Export**: Import `.docx` documents and export your work in Word or PDF formats for seamless compatibility.
- **Fast Development**: Built with Vite, this project utilizes fast refresh for an efficient development process.

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### Installation

- Clone the repository:

   ```bash
   git clone https://github.com/SoorajVp/InkEdit.git
   ```

- Navigate to the project folder:

   ```bash
   cd InkEdit
   ```

- Update environment credentials:

   - Create a `.env` file in the root of your project.

   ```plaintext
   InkEdit/
       ├── server/
       ├── src/
       ├── .env
       ├── package.json
       └── ...
   ```

   - Add your environment variables in the `.env` file:

   ```plaintext
   VITE_CKEDITOR_LICENSE_KEY = 'YOUR_LICENSE_KEY'
   VITE_CKBOX_TOKEN_URL = 'YOUR_CKBOX_TOKEN_URL'
   ```

- Install dependencies:
   ```bash
   npm install
   ```
- To start the development server:
   ```bash
   npm run dev
   ```

## Setup Server Side

- Navigate to the server folder:

   ```bash
   cd server
   ```

- Install server dependencies:

  ```bash
  npm install
  ```
- Start the backend server:
   ```bash
   npm run dev
   ```

## Key Resources

- [CKEditor Documentation](https://ckeditor.com/docs/ckeditor5/latest/index.html) - Official documentation for CKEditor.
- [Vite Documentation](https://vitejs.dev/guide/) - Official guide for Vite.
