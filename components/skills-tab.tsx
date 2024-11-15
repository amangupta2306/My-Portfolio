export const SkillTab = ({ title }: { title: string }) => {
  return (
    <div className="rounded-full bg-[#0c1b27] text-gray-200 w-fit px-3 py-2 text-xs uppercase">
      {title}
    </div>
  );
};

export const SkillBrick = ({ title }: { title: string }) => {
  return (
  <div className="rounded-xl bg-[#3f566a] text-gray-200 w-fit px-6 py-3 font-semibold">
      {title}
    </div>
  );
};
