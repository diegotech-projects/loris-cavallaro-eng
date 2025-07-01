import Image from 'next/image';

import ButtonRed from '@/components/ButtonRed';
import emogi from '@/images/emogi2.png';

function AboutUs() {
  return (
    <div className="container-custom flex flex-col gap-5 md:flex-row md:gap-0">
      <div className="md:w-[50%]">
        <Image
          width={700}
          height={600}
          src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=740&t=st=1690649423~exp=1690650023~hmac=18b5ba5c0a562eb79b5a6e085ef190cb5795466e53ca908591214b8d14e5f2d1"
          alt="Doctor-holding-stethroscope"
          className="object-cover object-center md:w-[90%]"
        />
      </div>
      <div className="flex flex-col justify-center gap-5 md:w-[50%] lg:gap-10">
        <div>
          <button
            type="button"
            className="flex cursor-default items-center gap-1 bg-whiteTwo px-4 py-2 text-sm 2xl:text-xl"
          >
            <span>About Us</span>
            <Image src={emogi} alt="" className="w-5" />
          </button>
        </div>
        <div className="text-4xl font-bold 2xl:text-5xl">
          <p>Together, We Can</p>
          <p>Achieve Optimal Health</p>
        </div>
        <div className="text-primary 2xl:w-[60%] 2xl:text-xl">
          <p>
            Healing you, one step at a time, putting your health
            first.Compassionate care for all kinds of people!
          </p>
        </div>
        <div>
          <ButtonRed text="Know More About Us" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
