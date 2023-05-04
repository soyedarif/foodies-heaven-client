import React from "react";
import NavigationBar from "../components/NavigationBar";
import { FaFilePdf } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <div className="bg-Shade1 mb-12">
        <NavigationBar></NavigationBar>
      </div>
      <div>
        <h1 className="section-title text-center">Blog</h1>
        <div className="flex justify-center items-center">
          <button title="Download PDF" className="flex flex-col items-center hover:text-blue-500">
            <FaFilePdf className="text-red-600 text-4xl"/>Download PDF
          </button>
        </div>
        <div id="blog-content" className="container mx-auto">
          <div className="p-5 mb-8 rounded-lg shadow-md">
            <h2 className="mb-4 text-3xl text-Shade font-semibold">The differences between uncontrolled and controlled components?</h2>
            <p className="text-Shade1">Uncontrolled components manage their own state, while controlled components rely on external data to control their state. Controlled components provide a more predictable and maintainable way to manage state, while uncontrolled components can be easier to implement. Controlled components are the preferred choice in React, but there may be scenarios where uncontrolled components are more appropriate.</p>
          </div>
          <div className="p-5 mb-8 rounded-lg shadow-md">
            <h2 className="mb-4 text-3xl text-Shade font-semibold">How to validate React props using PropTypes?</h2>
            <p className="text-Shade1">
React provides the PropTypes library to validate the props passed to a component. To use it, import PropTypes at the top of your file and create a static propTypes object inside the component. In this object, define the PropTypes of your component by specifying the expected data type and whether it is required or not. By doing so, you can catch errors early in the development process and make your code more robust.</p>
          </div>
          <div className="p-5 mb-8 rounded-lg shadow-md">
            <h2 className="mb-4 text-3xl text-Shade font-semibold">Tell the difference between nodejs and express js?</h2>
            <p className="text-Shade1">Node.js is a runtime environment that allows you to execute JavaScript code on the server-side. It provides a platform for building scalable, high-performance applications using non-blocking, event-driven I/O. On the other hand, Express.js is a web framework that runs on top of Node.js. It provides a set of tools and utilities that help you build web applications more easily and efficiently by abstracting away some of the lower-level details of Node.js.</p>
          </div>
          <div className="p-5 mb-8 rounded-lg shadow-md">
            <h2 className="mb-4 text-3xl text-Shade font-semibold">What is a custom hook, and why will you create a custom hook?</h2>
            <p className="text-Shade1">A custom hook in React is a JavaScript function that enables you to reuse stateful logic across multiple components. It helps you extract and encapsulate reusable logic into a separate function that can be used in various components, making it easier to manage and maintain your code. You may create a custom hook to achieve reusability, reduce code duplication, and improve the organization of your code.</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Blog;
