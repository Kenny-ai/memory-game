interface Props {
  startBoard: React.ReactNode;
}

const StartGame = ({ startBoard }: Props) => {
  return (
    <div className="bg-main-bg h-screen py-4">
      <h1 className="text-3xl font-bold flex justify-center items-center h-[10rem] md:text-4xl">
        memorial
      </h1>
      <div className="flex justify-center items-center">{startBoard}</div>
    </div>
  );
};

export default StartGame;
