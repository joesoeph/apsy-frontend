export const SidebarParentMenu = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-normal ">{title}</p>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};
