const Banner = () => {
  return (
    <>
     <div className="relative h-[250px] bg-slate-100 w-5/6 mx-auto mt-4 flex items-center justify-end">
  <img src="../../public/Screenshot 2024-05-06 133644.png" alt="" className="h-full w-full object-cover" />
  <button className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-10 border border-slate-900 text-slate rounded py-3 px-5 bg-white">Shop</button>
</div>
<div className="relative h-[250px] bg-slate-100 w-5/6 mx-auto mt-4 flex items-center justify-end ">
  <img src="../../public/Screenshot 2024-05-06 133720.png" alt="" className="h-full w-full object-cover" />
  <button className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-10 border border-slate-900 text-slate rounded py-3 px-5 bg-white">Shop</button>
</div>
<div className="relative h-[250px] bg-slate-100 w-5/6 mx-auto mt-4 flex items-center justify-end">
  <img src="../../public/Screenshot 2024-05-06 133700.png" alt="" className="h-full w-full object-cover" />
  <button className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-10 border border-slate-900 text-slate rounded py-3 px-5 bg-white">Shop</button>
</div>
    </>
  );
};

export default Banner;
