import { LuMail, LuPhoneCall } from 'react-icons/lu';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-semibold">Contact Info</h1>
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex items-center gap-1">
            <LuPhoneCall />
            Call Us
          </div>
          +1234567890
        </div>
        <div>
          <div className="flex items-center gap-1">
            <LuMail />
            Mail Us
          </div>
          devspherelabs@gmail.com
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
