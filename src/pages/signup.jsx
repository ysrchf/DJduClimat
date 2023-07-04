import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number'
      );
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
   alert('Sign-up successful!');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center mb-6 font-bold">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-primary hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
