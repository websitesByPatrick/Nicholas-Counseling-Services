const NoteCardRightPic = (props) => {
  return (
    <div className="flex w-full">
  
      <div className="flex flex-col justify-center w-full bg-sky-500 bg-sky-800 only:bg-gradient-to-t text-white p-10 my-3 ml-5">
        <p className="text-center text-3xl font-bold pb-5">{props.title}</p>

        {props.text.map((item, index) => (
          <p className="text-justify m-2" key={index}>{item}</p>     
      ))}
        
      </div>

      <div className="flex w-full bg-gray-100 my-3 pr-2">
        <img className="object-contain" src={props.img} alt="" />
      </div>
    </div>
  );
};

export default NoteCardRightPic;
