const SelectInput = () => {
  return (
    <div>
      <div className="">
        <select className="block w-full rounded-md border-transparent py-3.5 text-sm text-gray-500 focus:ring focus:ring-customBlue focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 2xl:text-base">
          <option value="">Department</option>
          <option value="">Dental</option>
          <option value="">Optical</option>
          <option value="">Gynaelogical</option>
          <option value="">Physiotherapy</option>
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
