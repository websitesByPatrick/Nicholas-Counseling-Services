const MainStructure = () => {
  return (
    // Base
    <div className="bg-slate-100 flex flex-col h-full py-2">
      {/* Header */}
      <div className="h-40 w-100 mx-2 bg-slate-300 flex justify-center items-center">
        <div className="text-4xl">Header</div>
      </div>

      {/* Navbar */}
      <div className="h-20 w-100 mx-2 bg-slate-900 flex justify-center items-center">
        <div className="text-4xl text-slate-100">Navbar</div>
      </div>

      {/* Content */}
      <div className="flex m-2 gap-4">
        {/* Sidebar Content */}
        <div className="flex flex-col bg-slate-300 w-3/12 min-w-min max-w-48   items-center">
          <div className="text-4xl">Sidebar</div>
        </div>

        <div className="flex flex-col gap-4 w-full">

          {/* Main Content Row With Two Blocks */}
          <div className="flex  gap-4 w-100">
            <div className="flex bg-slate-300 text-4xl w-6/12 h-96 justify-center items-center">
              <div>Content</div>
            </div>
            <div className="flex bg-slate-300 text-4xl w-6/12 h-96 justify-center items-center">
              <div>Content</div>
            </div>
          </div>


          {/* Main Content Row With One Block */}
          <div className="flex w-100">
            <div className="flex bg-slate-300 text-4xl w-full h-96 justify-center items-center">
              <div>Content</div>
            </div>
            

          </div>


          {/* Main Content Row With Two Block */}
          <div className="flex  gap-4 w-100">
            <div className="flex bg-slate-300 text-4xl w-6/12 h-96 justify-center items-center">
              <div>Content</div>
            </div>
            <div className="flex bg-slate-300 text-4xl w-6/12 h-96 justify-center items-center">
              <div>Content</div>
            </div>
          </div>

        </div>
      </div>

              {/* Footer */}
              <div className="h-40 w-100 mx-2 bg-slate-600 flex justify-center items-center">
        <div className="text-4xl">Footer</div>
      </div>
    </div>
  );
};

export default MainStructure;
