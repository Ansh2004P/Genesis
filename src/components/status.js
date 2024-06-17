import useOnlineStatus from "../utils/useOnlineStatus";

const Status = () => {
  const Status = useOnlineStatus();

  return (
    <div className=" h-16 p-5 ml-5 flex flex-row">
        {Status ? '🟢🟢':'🔴🔴'}
    </div>
  );
};
export default Status;
