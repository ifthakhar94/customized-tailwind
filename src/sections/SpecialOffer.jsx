import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <>
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <img
            src={offer}
            alt="offer"
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special </span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            quis doloribus aliquam sed sit dignissimos repudiandae voluptatibus
            tempore deserunt! Nesciunt, maiores! Vero illo dolores, neque
            deleniti fugit, iure provident, quas laborum aperiam exercitationem
            quibusdam dignissimos adipisci! Alias debitis earum eligendi?
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop Now" iconURl={arrowRight} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
