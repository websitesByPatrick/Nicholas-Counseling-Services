const NoteCard = (props) => {
  return (
    <div className="flex">



      <div className="flex flex-col w-1/2 bg-gray-100 h-100 p-10 my-10 ml-5">
        <p className="text-center text-3xl font-bold">{props.title}</p>
        <p className="text-justify text-lg pt-2">{props.text1}</p>
      </div>

      <div className="flex w-1/2 bg-gray-50 my-10 mr-5">
        <img src={props.img} alt="" />
      </div>
 

    </div>
  );
};

export default NoteCard;
