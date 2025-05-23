# Kanban Board App
A responsive Kanban board application built with Next.js and Tailwind CSS that allows you to manage tasks across different stages of your workflow.

## Features
* **Drag & Drop Functionality**: Easily rearrange tasks between columns (Backlog, To Do, In Progress, Completed)
* **Task Management**:

    * Create new tasks with titles
    * Delete tasks you no longer need

* **Visual Status Tracking**: Clear visualization of your workflow stages

## Technologies Used
* Next.js (React framework)

* [Tailwind CSS (utility-first CSS framework)](https://tailwindcss.com/)

* JavaScript

* [Framer Motion](https://www.npmjs.com/package/framer-motion)
  
* [react-canvas-confetti](https://www.npmjs.com/package/react-canvas-confetti)
  
* Local storage

## Getting Started

### Prerequisites
* Node.js (v14 or later recommended)
* npm or yarn

### Installation
1. clone the repository:
```bash
git clone https://github.com/maelmane/simple-kanban.git
```
2. Navigate to the project directory:
```bash
cd simple-kanban
```
3. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the Development Server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage
1. **Create a Task**:
    * Click the "Add Task" button in any column
    * Enter task details and save

2. **Move Tasks**:
    * Drag and drop tasks between columns to update their status

3. **Delete Tasks**:
    * Drag a task to the trash section to remove it

