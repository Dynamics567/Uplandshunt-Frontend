const EmptyState = ({ image, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={image} alt={text} />
      <p className="font-bold text-xl py-4">{text}</p>
    </div>
  );
};

export default EmptyState;
