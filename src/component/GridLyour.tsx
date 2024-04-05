const GridLayout = ({ left, right }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4  p-1 ">
        <div className="col-span-12 md:col-span-8 ">{left}</div>
        <div className="hidden md:block col-span-4">{right}</div>
      </div>
    </>
  );
};

export default GridLayout;
