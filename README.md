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

1. Clone the repository:

   ```bash
   git clone https://github.com/SoorajVp/InkEdit.git

   ```

2. Navigate to the project folder:

   ```bash
   cd InkEdit

   ```

3. Update environment credentials:

   - Create a `.env` file in the root of your project.

   ```plaintext
   InkEdit/
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

4. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

- To start the development server with Vite's fast refresh, run:

  ```bash
  npm run dev
  ```

## Running the Project

- To create an optimized production build, run:

  ```bash
  npm run build
  ```

## Key Resources

- [CKEditor Documentation](https://ckeditor.com/docs/ckeditor5/latest/index.html) - Official documentation for CKEditor.
- [Vite Documentation](https://vitejs.dev/guide/) - Official guide for Vite.
