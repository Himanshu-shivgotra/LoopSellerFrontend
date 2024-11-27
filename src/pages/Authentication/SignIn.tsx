import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthHeader } from './AuthHeader';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from reloading the page

    try {
      const response = await axios.post('https://loopsellerbackend.onrender.com/api/users/signin', {
        email,
        password,
      });

      // Assuming the backend sends back a JWT token
      const { token } = response.data;
      // Save token to localStorage
      localStorage.setItem('authToken', token);
      // Redirect to dashboard
      window.location.href="/dashboard"
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <>
    <AuthHeader/>
    <div className="rounded-sm border flex items-center justify-center w-full py-4">
      <div className="w-full mx-auto max-w-[500px] shadow-default bg-white dark:border-strokedark h-full dark:bg-boxdark">
        <div className="w-full sm:p-8 xl:p-10">
          <span className="mb-1.5 block font-medium">Start for free</span>
          <h2 className="mb-4 text-2xl font-bold text-orange-500 dark:text-white sm:text-title-xl2">
            Sign In to Loop
          </h2>

          {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-orange-500 focus-visible:shadow-none "
              />
            </div>

            <div className="mb-5">
              <input
                type="submit"
                value="Sign In"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              />
            </div>

            <div className="mt-6 text-center">
              <p>
                Don’t have an account?{' '}
                <Link to="/auth/signup" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>

  );
};

export default SignIn;
