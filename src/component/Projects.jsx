import React from 'react';
import Code from "../assets/ss.svg";

const Projects = () => {
  return (
    <>
      <div className="main-container p-4">
        <h3>Projects</h3>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Project 1 */}
          <div className="bg-gray-200 rounded-t-lg shadow-lg">
            <img
              src={Code} // Replace with your image URL
              alt="Project 1"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="content-card p-2">
              <h4 className="text-lg font-semibold">Project 1</h4>
              <p className="mt-2 text-sm text-gray-600">
                This is a brief description of Project 1. It includes an image followed by text.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-200 rounded-t-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150" // Replace with your image URL
              alt="Project 2"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="content-card p-2">
              <h4 className="text-lg font-semibold">Project 2</h4>
              <p className="mt-2 text-sm text-gray-600">
                This is a brief description of Project 2. It includes an image followed by text.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-200 rounded-t-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150" // Replace with your image URL
              alt="Project 3"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="content-card p-2">
              <h4 className="text-lg font-semibold">Project 3</h4>
              <p className="mt-2 text-sm text-gray-600">
                This is a brief description of Project 3. It includes an image followed by text.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-200 rounded-t-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150" // Replace with your image URL
              alt="Project 4"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="content-card p-2">
              <h4 className="text-lg font-semibold">Project 4</h4>
              <p className="mt-2 text-sm text-gray-600">
                This is a brief description of Project 4. It includes an image followed by text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
