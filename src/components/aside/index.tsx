import AsideBody from "./aside-body";
import AsideHead from "./aside-head";

const Aside = () => {
  return (
    <div className="fixed bottom-0 top-0 z-30 md:z-20 flex flex-col border-zinc-300/25 bg-white py-6 dark:border-zinc-800/50 dark:bg-zinc-900 dark:text-white transition-all duration-300 ease-in-out max-md:w-[20rem] max-md:shadow-2xl md:w-[20rem]">
      <AsideHead />
      <AsideBody />
    </div>
  );
};

export default Aside;
