

function Login() {
  return (
    <div className="flex justify-center font-content text-gray-60 bg-login bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="p-10 m-10 gap-8 w-[400px] bg-white-20">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <placeholderm action="#" method="POST">
          <div className="mb-4">
            <label placeholder="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-60"
            />
          </div>

          <div className="mb-4">
            <label placeholder="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-60"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-gray-60"
            />
            <label placeholder="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>

          <div className="mb-6 text-gray-60">
            <a href="#" className="hover:underline">
              placeholdergot Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-orange-20 hover:bg-orange-40 text-gray-70 font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </placeholderm>

        <div className="mt-6 text-gray-60 text-center">
          <a href="#" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login