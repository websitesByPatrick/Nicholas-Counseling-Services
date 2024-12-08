const Sidebar = (props) => {
  return (
    <div className="w-3/12 bg-slate-200 border-2 border-slate-800">
      <div>{props.children}</div>
    </div>
  );
};

export default Sidebar;
