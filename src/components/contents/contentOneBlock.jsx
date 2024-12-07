import SingleRowBlock from "./singleRowBlock";

const ContentOneBlock = (props) => {
  return (
    <div className="flex w-100">
        <SingleRowBlock>
          {props.children}
        </SingleRowBlock>
    </div>
  );
};

export default ContentOneBlock;
