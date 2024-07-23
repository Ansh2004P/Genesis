import Icon from "./icons";

const AsideInfo = (items) => {
  // console.log(items);

  return (
    <div className="flex flex-row mb-2 ml-10">
      <Icon
        color={items?.color === undefined ? "#86858D" : items?.color}
        size={25}
        name={items?.icon}
      />
      <span className="text-[#cec6ff] ml-6 font-sans text-sm">
        {items?.text}
      </span>
    </div>
  );
};

export default AsideInfo;
