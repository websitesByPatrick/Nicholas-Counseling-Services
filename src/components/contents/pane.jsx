const Pane = (props) => {
  return (
    <div className={`pt-1 ${props.dark ? 'text-slate-100' : 'text-slate-800'}`}>


      <div className="text-center text-lg font-bold ">{props.title}</div>

      {props.list.map((item, index) => (
        <div key={index} className="text-center font-medium my-2">
          <p>{item.title}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Pane;
