import Image from "next/image";

export const Headshot = () => {
  return (
    <div className="relative w-full h-auto">
      <div className="absolute left-0 right-0 flex items-center justify-start z-20">
        <Image src="/jl_headshot.jpg" alt="Joaquin Lopez" width={250} height={250} className="rounded-full" />
      </div>
      <div
        className="bg-gradient-to-b from-indigo-600 via-purple-500 to-pink-600 absolute top-0 bottom-0 right-0 left-0 opacity-60 blur-3xl z-10 sm:none"
        style={{ width: 250, height: 250 }}
      ></div>
      <div
        className="bg-gradient-to-b from-indigo-600 via-purple-500 to-pink-600 absolute top-0 bottom-0 right-0 left-0 rounded-full opacity-60 z-10"
        style={{ width: 250, height: 250 }}
      ></div>
    </div>
  );
};
