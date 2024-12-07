import DoubleRowBlock from "./doubleRowBlock";

const ContentTwoBlock = (props) => {
  return (
    <div className="flex  gap-2 w-100">
      {props.children[0]}
      {props.children[1]}
    </div>
  );
};

export default ContentTwoBlock;
