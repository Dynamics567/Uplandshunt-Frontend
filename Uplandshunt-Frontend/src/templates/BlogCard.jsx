const BlogCard = ({ photo }) => {
  return (
    <div>
      <div
        className="flex justify-between bg-white rounded-sm shadow-md mb-10 p-6"
        style={{ boxShadow: "0px 0px 4px 0px #eea7a740" }}
      >
        <img src={photo} alt="prop1" />
        <div className="">
          <p className="font-semibold text-2xl text-center">
            How to build a house in low cost ?
          </p>
          <div className="font-normal text-base py-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuning.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuning.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuning.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuning.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuning.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
