import { Compare } from "./compare";

const Grid = () => {
  return (
    <section>
      <div className="md:h-[50vh] pt-4 md:pt-0 px-1 md:px-8 flex items-center justify-center">
        <div className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-full md:w-3/4 h-3/5 md:h-3/4">
          <div className="text-xl mx-auto font-normal">
            <p className="text-xl font-normal text-center">
              Questions {"==>"} Roadmap
            </p>
          </div>
          <Compare
            firstImage="/before.png"
            secondImage="/after.png"
            firstImageClassName="object-cover w-full p-4"
            secondImageClassname="object-cover w-full p-4"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Grid;
