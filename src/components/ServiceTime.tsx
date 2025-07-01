import { BsClock } from 'react-icons/bs';

const ServiceTime = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-semibold">Service Time</h1>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <BsClock />
          We are available
        </div>
        <div>
          <p>Monday-Friday</p>
          <p>8:00AM - 10:00PM</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceTime;
