const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-items">{props.children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
