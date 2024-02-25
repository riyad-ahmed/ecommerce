import React from 'react';

const Login = () => {
  return (
    <div className="relative  flex-col justify-center min-h-screen overflow-hidden hidden">
      <div className="bg-black p-12 h-[100vh]">
        <div className="max-w-[350px] mx-auto">
          <img src="{image}" alt="new" />
          <form>
            <div className="mb-4">
              <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#fff]">
                Phone Number
              </label>
              <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#fff] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <p id="helper-text-explanation" className="mt-2 mb-4 text-sm text-gray-500 dark:text-gray-400">We will send you an
              SMS
              with a verification code.</p>
            <button type="submit"
              className="hover:shadow-form w-full rounded-md border border-[#81898c] text-[#81898c] text-[18px] py-2 px-8 text-center font-semibold hover:text-white hover:border-white duration-300">Send
              verification code</button>
            <div>
              <p className="text-center text-[#fff] mt-4">
                Create an account?
                <a href="#" className="text-[#6A64F1] hover:underline">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>

    </div>

  );
};

export default Login;