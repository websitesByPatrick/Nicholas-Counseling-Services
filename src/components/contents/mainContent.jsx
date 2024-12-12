
const MainContent = (props) => {
  return (
    <div className="flex flex-col w-[94%]">
      
      <div className="w-full flex flex-col">

        {props.children}
     

      </div>

     
    </div>
  );
};

export default MainContent;
