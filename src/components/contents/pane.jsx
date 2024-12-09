const Pane = (props) => {
  return (
    <div className="pane">
      <img className="pane-icon" src={props.icon} alt="" />
      <p className="pane-text">{props.text}</p>
    </div>
     
  );
}
export default Pane;
