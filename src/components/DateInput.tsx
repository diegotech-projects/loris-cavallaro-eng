const DateInput = ({ label, args }: any) => {
  return (
    <div>
      <div className="">
        <div>
          <div className="relative">
            <input
              {...args}
              type="date"
              placeholder=" "
              className="peer block w-full rounded-md border-transparent py-3 shadow-sm focus:ring focus:ring-customBlue focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            />
            <div className="peer-focus:base absolute left-2 top-0 z-10 -translate-y-2 bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs peer-disabled:bg-transparent 2xl:text-base">
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateInput;
