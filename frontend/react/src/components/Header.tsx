const Header = () => {
  return (
    <div
      className="
    bg-slate-900
    flex flex-row 
    h-20
    w-screen
    text-white
    items-center
    justify-between
    px-10"
    >
      <div
        className="
        flex gap-3
        content-start"
      >
        <img src="./pngwing.com.png" height={30} width={30} alt="micro img" />
        <p
          className="
          font-mono 
          font-extrabold 
          text-lg"
        >
          MICROSRV
        </p>
      </div>

      <div className="flex gap-6">
        <div className="pt-0.5">
          <p>person@gmail.com</p>
        </div>
        <div>
          <button
            className="
          bg-transparent
        hover:bg-blue-500 
        text-white
        font-semibold 
        hover:text-white 
        py-1 px-4 border 
        border-blue-500 
        hover:border-transparent 
        rounded
        mr-3"
          >
            Signup
          </button>
          <button
            className="
          bg-transparent
        hover:bg-blue-500 
        text-white
        font-semibold 
        hover:text-white 
        py-1 px-4 border 
        border-blue-500 
        hover:border-transparent 
        rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
