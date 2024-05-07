const Login = () => {
  return (
    <>
      <div
        className="
      h-screen"
      >
        <div
          className="
      bg-blue-100
      h-[400px]
      w-[600px]
      rounded
      mt-20
      mx-auto"
        >
          <div
            className="
          flex flex-col
          h-full
          pt-16
          items-center"
          >
            <div>
              <p
                className="
              font-bold text-2xl
              pb-8"
              >
                Login
              </p>
            </div>
            <div className="mb-6">
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="px-3 py-2 border border-slate-400 rounded-md w-[300px]"
                type="text"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2" htmlFor="password">
                Password
              </label>
              <input
                className=" px-3 py-2 border border-slate-400 rounded-md w-[300px]"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <p>No existing account? Signup</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login