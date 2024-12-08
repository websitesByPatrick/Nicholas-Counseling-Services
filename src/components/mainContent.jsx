import Pane from "./pane";

const MainContent = (props) => {
  return (
    <div className="flex flex-col w-9/12 gap-2">
      <div className="w-full flex gap-2">
        <div className="w-1/2  bg-slate-800">
          <Pane
            dark
            title="What is Mental Health"
            list={[
              {
                title: "",
                text: "Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community. It has intrinsic and instrumental value and is integral to our well-being.",
              },
            ]}
          />
        </div>
        <div className="w-1/2 h-96 bg-slate-200">
            <img src="./what-is-mental-health.jpg" alt="" />
        </div>
      </div>
      <div className="w-full flex gap-2">
        <div className="w-1/2 h-96 bg-slate-200"></div>
        <div className="w-1/2 h-96 bg-slate-800"></div>
      </div>
      <div className="w-full flex gap-2">
        <div className="w-full h-96 bg-slate-800"></div>
      </div>
    </div>
  );
};

export default MainContent;
