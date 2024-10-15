export default function Loading() {
  return (
    <>
      {" "}
      <div className="relative w-screen md:h-screen flex justify-center items-center overflow-hidden bg-gradient-to-r from-gray-500 to-gray-200 ">
        <div className="absolute -inset-4 bg-cover bg-center blur-lg"></div>

        <div
          className={`bg-gradient-to-r from-gray-500 to-gray-200 relative z-10 w-11/12 md:h-4/5 bg-cover bg-center bg-fixed rounded-xl shadow-lg text-white flex md:flex-row outline outline-8 outline-white/25 flex-col my-4 md:my-0 text-center items-center justify-center`}
        >
            <p className="self-center place-self-center text-4xl text-center">Loading...</p>
        </div>
      </div>
    </>
  );
}
