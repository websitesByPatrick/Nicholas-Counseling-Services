import ContentOneBlock from "./contentOneBlock";
import Sidebar from "./sidebar";
import ContentTwoBlock from "./contentTwoBlock";
const Contents = () => {
  return (
    <div className="flex m-2 gap-4">
      <Sidebar />

      <div className="flex flex-col gap-4 w-full">
        <ContentOneBlock />
        <ContentTwoBlock />
        <ContentTwoBlock />
      </div>
    </div>
  );
};

export default Contents;
