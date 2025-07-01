import Link from 'next/link';

const Legal = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-semibold">Legal</h1>
      <div className="flex flex-col gap-3">
        <Link href="/#">Legal Notice</Link>
        <Link href="/#">Privacy Policy</Link>
        <Link href="/#">Terms of Use</Link>
      </div>
    </div>
  );
};

export default Legal;
