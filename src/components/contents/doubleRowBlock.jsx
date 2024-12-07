const DoubleRowBlock = (props) => {
  return (
    <div className="flex bg-slate-300 text-4xl w-6/12 h-96 justify-center items-center">
      <div className="">{props.children}</div>
    </div>
  );
};

export default DoubleRowBlock;
