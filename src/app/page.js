'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [jsonInput, setJsonInput] = useState('');
  const [prettyJson, setPrettyJson] = useState('');
  const [error, setError] = useState('');

  const handlePrettyPrint = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      const formattedJson = JSON.stringify(parsedJson, null, 2);
      setPrettyJson(formattedJson);
      setError('');
    } catch (e) {
      setError('Invalid JSON. Please check your input.');
      setPrettyJson('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-400 via-blue-500 to-black text-white">
      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row p-4">
        {/* Left Section: JSON Input */}
        <div className="flex-1 flex flex-col p-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-gray-900 shadow-lg rounded-lg p-6 h-full"
          >
            <h1 className="text-2xl font-bold mb-4 text-center">Enter JSON</h1>
            <textarea
              className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Paste your JSON here..."
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            ></textarea>
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm mt-2"
              >
                {error}
              </motion.div>
            )}
            <div className="flex justify-center mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600"
                onClick={handlePrettyPrint}
              >
                Pretty Print
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Section: Pretty JSON Output */}
        <div className="flex-1 flex flex-col p-4">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-gray-900 shadow-lg rounded-lg p-6 h-full overflow-auto"
          >
            <h1 className="text-2xl font-bold mb-4 text-center">Formatted JSON</h1>
            {prettyJson ? (
              <pre className="whitespace-pre-wrap text-sm">{prettyJson}</pre>
            ) : (
              <p className="text-gray-500 text-center">Your formatted JSON will appear here.</p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-black text-gold flex items-center justify-center py-4"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center space-x-2 text-gold font-bold text-lg"
        >
          <div className="w-10 h-10 bg-gold text-black flex items-center justify-center rounded-full shadow-lg">
            TC
          </div>
          <p>Developed by <a href="https://turtlecore.com" className="hover:underline">Turtlecore.com</a></p>
        </motion.div>
      </motion.footer>
    </div>
  );
}
