// eslint-disable-next-line no-unused-vars
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-red-400 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-xl font-bold mr-8">Kalvium</h1>
          <nav className="space-x-4">
            <a href="#about" className="text-gray-200 hover:underline">About Us</a>
            <a href="#contacts" className="text-gray-200 hover:underline">Contacts</a>
            <a href="#courses" className="text-gray-200 hover:underline">Courses</a>
          </nav>
        </div>
        <button className="border border-white text-white py-1 px-3 rounded">Login</button>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="flex flex-col items-center space-y-4 mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Button One</button>

          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full max-w-md">
            <strong className="font-bold">Alert!</strong>
            <span className="block sm:inline"> This is awesome!</span>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md">
            <div className="flex items-center p-4">
              <img className="w-16 h-16" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium Logo" />
              <div className="ml-4">
                <h2 className="text-xl font-bold">Kalvium Store</h2>
                <p className="text-gray-600">You have a new course!</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4">
        <p className="font-bold">© 2021 Copyright: Kalvium</p>
      </footer>
    </div>
  );
}

export default App;
