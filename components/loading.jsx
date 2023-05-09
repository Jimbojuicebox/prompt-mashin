import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full flex-center pt-8'>
      <Image
        src='/assets/icons/loader.svg'
        width={60}
        height={60}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;