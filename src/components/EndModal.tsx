import React from "react";

const EndModal = () => {

  return (
    // <div className="relative h-screen">
    //   <div
    //     // onClick={handleCloseModal}
    //     className="h-screen bg-black opacity-50 cursor-pointer"
    //   ></div>

    //   <div className="end-modal-board w-[20rem] h-fit bg-[#f2f2f2] p-6 rounded-xl flex justify-center items-center md:w-[40rem] md:p-16">
    //     <div className="flex flex-col gap-4 w-full md:gap-16">
    //       <div className="flex flex-col justify-center items-center md:gap-1">
    //         <h3 className="text-black-text text-2xl font-bold md:text-5xl">
    //           You did it!
    //         </h3>
    //         <p className="text-gray-text font-bold text-sm md:text-lg">
    //           Game over! Here's how you got on...
    //         </p>
    //       </div>

    //       <div className="flex flex-col gap-2 md:w-1/2 md:m-auto">
    //         <div className="flex justify-between items-center bg-button-inactive rounded-lg p-2">
    //           <p className="text-gray-text font-bold text-sm">Time Elapsed</p>
    //           <p className="text-black-text text-xl font-bold">1:01</p>
    //         </div>

    //         <div className="flex justify-between items-center bg-button-inactive rounded-lg p-2">
    //           <p className="text-gray-text font-bold text-sm">Moves taken</p>
    //           <p className="text-black-text text-xl font-bold">{10} Moves</p>
    //         </div>
    //       </div>

    //       <div className="flex flex-col gap-2 md:flex-row">
    //         <button className="bg-orange font-bold w-full py-2 rounded-full text-lg hover:bg-orange-hover">
    //           Restart
    //         </button>
    //         <button className="bg-button-inactive text-black-text font-bold w-full py-2 rounded-full text-lg hover:bg-gray-hover hover:text-white-text">
    //           Setup New Game
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="relative h-screen">
      <div
        // onClick={handleCloseModal}
        className="h-screen bg-black opacity-50 cursor-pointer"
      ></div>

      <div className="end-modal-board w-[20rem] h-fit bg-[#f2f2f2] p-6 rounded-xl flex justify-center items-center md:w-[40rem] md:p-16">
        <div className="flex flex-col gap-4 w-full md:gap-16">
          <div className="flex flex-col justify-center items-center md:gap-1">
            <h3 className="text-black-text text-2xl font-bold md:text-5xl">
              It's a tie!
            </h3>
            <p className="text-gray-text font-bold text-sm md:text-lg">
              Game over! Here are the results...
            </p>
          </div>

          {/* winner will have bg color #304859 and white text */}
          <div className="flex flex-col gap-2 md:w-1/2 md:m-auto">
            <div className="flex justify-between items-center bg-button-inactive rounded-lg p-2">
              <p className="text-gray-text font-bold text-sm">Player 1</p>
              <p className="text-black-text text-xl font-bold">4 Pairs</p>
            </div>

            <div className="flex justify-between items-center bg-button-inactive rounded-lg p-2">
              <p className="text-gray-text font-bold text-sm">Player 2</p>
              <p className="text-black-text text-xl font-bold">4 Pairs</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:flex-row">
            <button className="bg-orange font-bold w-full py-2 rounded-full text-lg hover:bg-orange-hover">
              Restart
            </button>
            <button className="bg-button-inactive text-black-text font-bold w-full py-2 rounded-full text-lg hover:bg-gray-hover hover:text-white-text">
              Setup New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndModal;
