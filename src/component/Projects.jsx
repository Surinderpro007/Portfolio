import React from 'react';
import Code from "../assets/ss.svg";
import { Badge } from "@/components/ui/badge"
import Globe from "../assets/globe.svg"
import Github from "../assets/github.svg"
import CodeShare from "../assets/CodeShare.gif"
import TicTac from "../assets/ticTac.gif"
import TodoVid from "../assets/Todo.gif"



const Projects = () => {
  return (
    <>
      <div className="main-container p-4">
        <h3>Projects</h3>
        <div className="grid grid-cols-2 gap-6">
  {/* Project 1 */}
  <div className="border rounded-lg shadow-sm flex flex-col">
    <img
      src={CodeShare}
      alt="Code Share App"
      className="w-full h-32 object-contain rounded-t-lg"
    />
    <div className="content-card p-4 flex flex-col flex-grow">
      <h4 className="text-lg font-semibold">Code Share App</h4>
      <p className="mt-2 text-sm text-gray-600 flex-grow">
        Code Share is an app for creating, editing, and sharing code snippets. It allows users to store and manage their code locally, with a simple interface and quick search functionality.
      </p>
      <div className="mt-4">
        <div className="lang-used gap-1 flex flex-wrap">
          <Badge variant="outline">React JS</Badge>
          <Badge variant="outline">Redux</Badge>
          <Badge variant="outline">Shadcn UI</Badge>
          <Badge variant="outline">TailwindCSS</Badge>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          <Badge className="bg-black p-1 text-white flex items-center">
            <img src={Globe} className="w-4 h-4 mr-2" alt="" />
            Link to Project
          </Badge>
          <Badge className="bg-black p-1 text-white flex items-center">
            <img src={Github} className="w-4 h-4 mr-2" alt="" />
            Source
          </Badge>
        </div>
      </div>
    </div>
  </div>

  {/* Project 2 */}
  <div className="border rounded-lg shadow-sm flex flex-col">
    <img
      src={TicTac}
      alt="Tic Tac Toe Game"
      className="w-full h-32 object-contain rounded-t-lg"
    />
    <div className="content-card p-4 flex flex-col flex-grow">
      <h4 className="text-lg font-semibold">Tic Tac Toe Game</h4>
      <p className="mt-2 text-sm text-gray-600 flex-grow">
        A fun and interactive Tic Tac Toe game built with React. Challenge a friend or the computer in this classic, easy-to-play game with a simple and intuitive interface.
      </p>
      <div className="mt-4">
        <div className="lang-used gap-1 flex flex-wrap">
          <Badge variant="outline">HTML</Badge>
          <Badge variant="outline">CSS</Badge>
          <Badge variant="outline">JavaScript</Badge>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          <Badge className="bg-black p-1 text-white flex items-center">
            <img src={Globe} className="w-4 h-4 mr-2" alt="" />
            Link to Project
          </Badge>
          <Badge className="bg-black p-1 text-white flex items-center">
            <img src={Github} className="w-4 h-4 mr-2" alt="" />
            Source
          </Badge>
        </div>
      </div>
    </div>
  </div>

  {/* Project 3 */}
  <div className="border rounded-lg shadow-sm flex flex-col">
  <img
    src={TodoVid}// Replace with the actual image import or path
    alt="Todo App"
    className="w-full h-32 object-cover rounded-t-lg"
  />
  <div className="content-card p-4 flex flex-col flex-grow">
    <h4 className="text-lg font-semibold">Todo App</h4>
    <p className="mt-2 text-sm text-gray-600 flex-grow">
      A feature-rich Todo application for managing daily tasks. Includes functionalities like task addition, status updates (pending, in-progress, completed), and local storage for persistence.
    </p>
    <div className="mt-4">
      <div className="lang-used gap-1 flex flex-wrap">
        <Badge variant="outline">React JS</Badge>
        <Badge variant="outline">JavaScript</Badge>
        <Badge variant="outline">Bootstrap </Badge>
        <Badge variant="outline">LocalStorage</Badge>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        <Badge className="bg-black p-1 text-white flex items-center">
          <img src={Globe} className="w-4 h-4 mr-2" alt="" />
            Live Demo
       
        </Badge>
        <Badge className="bg-black p-1 text-white flex items-center">
          <img src={Github} className="w-4 h-4 mr-2" alt="" />
            Source Code
        </Badge>
      </div>
    </div>
  </div>
</div>



  {/* Project 4 */}
  <div className="border rounded-lg shadow-sm flex flex-col">
    <img
      src={CodeShare}
      alt="E-Commerce Platform"
      className="w-full h-32 object-contain rounded-t-lg"
    />
    <div className="content-card p-4 flex flex-col flex-grow">
      <h4 className="text-lg font-semibold">E-Commerce Platform</h4>
      <p className="mt-2 text-sm text-gray-600 flex-grow">
        A lightweight e-commerce platform for managing products, orders, and customers with a user-friendly dashboard.
      </p>
      <div className="mt-4">
        <div className="lang-used gap-1 flex flex-wrap">
          <Badge variant="outline">React JS</Badge>
          <Badge variant="outline">Node.js</Badge>
          <Badge variant="outline">MongoDB</Badge>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          <Badge className="bg-black p-1 text-white flex items-center">
            <img src={Globe} className="w-4 h-4 mr-2" alt="" />
            Link to Project
          </Badge>
          <Badge className="bg-black p-1 text-white flex items-center">
            <img src={Github} className="w-4 h-4 mr-2" alt="" />
            Source
          </Badge>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default Projects;
