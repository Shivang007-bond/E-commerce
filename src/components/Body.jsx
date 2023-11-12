import men from "../assets/IMG/men.jpg";  
import CategoryMenu from "./CategoryMenu";

const Body = () => {
  return (
    <div>
      <CategoryMenu />
      <div className="flex justify-between m-48">
        <div className="h-auto w-72 border-2 border-red-950 rounded-md">
          <img src={men} alt="men" className="w-fit p-1 rounded-md" />
        </div>
        <div className="h-auto w-72 border-2 border-red-950 rounded-md">
          <img
            src="https://img.freepik.com/free-photo/full-length-portrait-young-beautiful-readhead-curly-woman-green-dress-holding-colourful-shopping-bags_171337-6950.jpg"
            alt="women"
            className="w-fit p-1 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
