const Properties = ({ title, meaning }) => {
  return (
    <div>
      <span className="text-lg text-gray-800 font-medium">{title}: </span>
      <span className="text-md text-gray-700">{meaning}</span>
    </div>
  );
};

export default Properties;
