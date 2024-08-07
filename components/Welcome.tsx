export default function Welcome() {
  return (
    <div className="p-4 text-center mt-[-20px] bg-[#ffffff] md:mt-0 md:h-[133px] lg:text-left lg:row-span-3 lg:rounded-lg lg:pl-6">
      <div className="mt-5 lg:p-2 lg:pl-3 ">
        <h3 className="font-serif text-2xl font-medium leading-8">
          Welcome Beatrice
        </h3>
        <small className="font-serif text-base font-normal leadind-[19.5px]">
          Complete your course and take a step further
        </small>
        {/* <div>
                        <div className="h-[133px] ">
                          <div className="relative ">
                            <div className="absolute top-4">
                              <Image
                                src={red}
                                alt={"Red"}
                                width={135}
                                height={119}
                              />
                            </div>
                            <div className="">
                              <Image
                                src={blue}
                                alt={"Blue"}
                                width={135}
                                height={119}
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}
      </div>
    </div>
  );
}
