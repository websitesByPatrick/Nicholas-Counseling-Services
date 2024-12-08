const Header = () => {
  return (
    <div className="w-11/12 h-52 bg-slate-800 text-center flex justify-center items-center gap-10 m-1">
      <div className="w-40 h-40  border-slate-900 bg-slate-800 flex justify-center shadow-xl shadow-slate-600 rounded-full">
        <img
          className="w-40 rounded-full m-2  shadow-gray-500"
          src="../public/marica.jpg"
          alt=""
        />
      </div>

      <div className="text-gray-200">
        <p className="text-3xl">Counseling Services</p>
        <p className="text-xl">By</p>
        <p className="text-3xl">Marica Nicholas, LPC-Associate</p>
        <p className="text-xl mt-7">Supervised By Ana Valenzuela, LPC-S</p>
      </div>
    </div>
  );
};

export default Header;
