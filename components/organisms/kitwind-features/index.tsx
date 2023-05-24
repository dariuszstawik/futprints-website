import Divider from "@/components/atoms/divider";
import SectionTitle from "@/components/atoms/section-title";

export const KitwindFeatures = () => {
  return (
    <>
      <div className="min-w-96 max-w-[800px] mx-auto flex flex-col items-center">
        <SectionTitle>Jak możesz nam pomóc</SectionTitle>
        <Divider />
      </div>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 z-0 w-full h-full bg-primary lg:w-3/4" />
        </div>
        <div className="relative">
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div className="grid gap-12 row-gap-5 md:grid-cols-2">
              <div className="relative">
                <div className="relative">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                    <a
                      href="#"
                      className="w-[400px] mt-4 mx-auto inline-block col-start-1 col-end-2 row-start-2 row-end-3 grow-0 rounded border border-green-800 bg-green-800 px-12 py-3 flex items-center text-xl font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-600"
                    >
                      {" "}
                      <img
                        src="support-donate.svg"
                        className="w-16 inline-block mr-4"
                      />
                    </a>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                    The quick, brown fox jumps over a lazy dog
                  </h6>
                  <p className="text-sm text-gray-900">
                    Baseball ipsum dolor sit amet cellar rubber win hack tossed.
                    Slugging catcher slide bench league.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                  <svg
                    className="w-8 h-8 text-teal-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  A flower in my garden, a mystery
                </h6>
                <p className="text-sm text-gray-900">
                  They urge you to put down your sword and come join the
                  winners.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                  <svg
                    className="w-8 h-8 text-teal-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Skate ipsum dolor sit amet, alley oop
                </h6>
                <p className="text-sm text-gray-900">
                  If one examines precultural libertarianism, one is faced with
                  a choice: either accept rationalism.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                  <svg
                    className="w-8 h-8 text-teal-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  The first mate and his Skipper too will
                </h6>
                <p className="text-sm text-gray-900">
                  Those options are already baked in with this model shoot me an
                  email clear blue water.
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
