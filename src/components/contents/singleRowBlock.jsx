const SingleRowBlock = (props) => {
  return (
    <div className="flex bg-gray-700 w-full min-h-96 justify-center items-center">
      <div className="bg-slate-200 text-slate-800 m-2 p-10 rounded-md shadow-lg shadow-gray-800">{props.children}</div>
    </div>
  );
};

export default SingleRowBlock;
