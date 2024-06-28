import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="flex items-center justify-center w-full h-full min-h-screen">
    <div className="p-8 rounded-lg text-center transition-transform duration-500">
    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 animate-pulse animate-fade-in">
          Hello world!
        </h1>
        <p className="text-lg text-gray-300 mt-4 mb-6 animate-fade-in">
          Welcome to my test app!
        </p>
      <button className="bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 animate-bounce">
        Get Started
      </button>
    </div>
  </div>
  ),
})