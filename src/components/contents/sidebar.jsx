const Sidebar = (props) => {
  return (
    <div className="flex flex-col bg-slate-800 w-3/12 min-w-min max-w-48   items-center">
    <div className="bg-slate-100 m-4 p-4 w-full">{props.children}</div>
  </div>
  )
}

export default Sidebar