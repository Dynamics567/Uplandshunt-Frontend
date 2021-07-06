import { Input } from "../atoms";

const EditProfile = () => {
  return (
    <div>
      <section className="m-auto w-11/12 mt-8">
        <div className="flex w-full">
          <div className="w-4/12 mr-8">
            <Input type="text" label="Name" />
          </div>
          <div className="w-4/12 mr-8">
            <Input type="text" label="Company Name" />
          </div>
          <div className="w-4/12">
            <Input type="text" label="Address" />
          </div>
        </div>

        <div className="">
          <div className="flex w-full">
            <div className="w-4/12 mr-8">
              <Input type="text" label="Country" />
            </div>
            <div className="w-4/12  mr-8">
              <Input type="text" label="State" />
            </div>
            <div className="w-4/12">
              <Input type="text" label="City" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex w-full">
            <div className="w-4/12 mr-8">
              <Input type="text" label="Contact Number" />
            </div>
            <div className="w-4/12  mr-8">
              <Input type="text" label="Email Address" />
            </div>
            <div className="w-4/12">
              <Input type="text" label="Website URL" />
            </div>
          </div>
        </div>

        <div className="w-4/12">
          <Input type="image" label="Company Logo" />
        </div>

        <div className="my-8 flex w-full justify-between items-center text-center">
          <button className="rounded-md text-center p-4 text-white bg-primary font-semibold w-1/4">
            Save
          </button>
        </div>
      </section>
    </div>
  );
};

export { EditProfile };
