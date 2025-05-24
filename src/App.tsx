import { useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './motoko-backend-only/declarations/backend/backend.did.js';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('add');

  const agent = new HttpAgent({ host: 'http://localhost:4943' });
  const backend = Actor.createActor(idlFactory, {
    agent,
    canisterId: process.env.CANISTER_ID_BACKEND,
  });

  const calculate = async () => {
    try {
      const n1 = BigInt(num1);
      const n2 = BigInt(num2);
      let res;

      switch (operation) {
        case 'add':
          res = await backend.addFunc(n1, n2);
          break;
        case 'subtract':
          res = await backend.subFunc(n1, n2);
          break;
        case 'multiply':
          res = await backend.mulFunc(n1, n2);
          break;
        case 'divide':
          res = await backend.divFunc(n1, n2);
          break;
      }

      setResult(res.toString());
    } catch (error) {
      console.error('Error:', error);
      setResult('Error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">ICP Calculator</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Number</label>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Second Number</label>
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Operation</label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="add">Add</option>
              <option value="subtract">Subtract</option>
              <option value="multiply">Multiply</option>
              <option value="divide">Divide</option>
            </select>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="text-center text-lg font-semibold">
                Result: {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App