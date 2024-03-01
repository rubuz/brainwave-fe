import { brainwave } from "../assets";
import { navigation } from "../constants";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav className="fixed bottom-0 left-0 right-0 top-[5rem] hidden bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent">
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`relative block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
