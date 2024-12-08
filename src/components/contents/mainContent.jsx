
const MainContent = (props) => {
  return (
    <div className="flex flex-col w-9/12 bg-gray-600">
      
      <div className="w-full flex flex-col">

        {props.children}
     

      </div>

     
    </div>
  );
};

export default MainContent;
