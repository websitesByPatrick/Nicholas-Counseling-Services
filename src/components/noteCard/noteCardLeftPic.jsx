const NoteCardLeftPic = (props) => {
  return (
    <div className="flex w-[950px] h-[400px]">

      <div className="flex w-1/2 bg-gray-100 my-3 pl-2 ">
        <img className="object-contain" src={props.img} alt="" />
      </div>

      <div className="flex flex-col justify-center w-1/2 bg-gray-100 p-10 my-3 mr-5">
        <p className="text-center text-3xl font-bold">{props.title}</p>
        <p className="text-justify text-lg pt-2">{props.text1}</p>
      </div>


    </div>
  );
};

export default NoteCardLeftPic;
