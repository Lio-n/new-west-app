import Body from '../ui/atoms/typographies/body.atom';
import Heading from '../ui/atoms/typographies/heading.atom';

const CustomPhrase = ({ children }: { children: React.ReactNode }) => (
  <span className={`text-md md:text-lg text-500 smooth-transition text-blueberry-700 font-semibold`} children={children} />
);

const AboutUsPage = () => {
  return (
    <div className="py-36 md:px-4 xl:px-8 grid gap-8 place-items-center text-center bg-no-repeat bg-center relative z-[3]">
      <img src="/NewWest_logo.svg" alt="NewWest_logo.svg" className="opacity-10 absolute w-full min-w-96 max-w-xl z-[1]" draggable="false" />
      <Heading color="body-900" weight="font-semibold" className="z-[3]">
        About Us
      </Heading>

      <div className="grid gap-6 max-w-2xl z-[3]">
        <Body>
          At NewWest, we're not just another news platform. We're a <CustomPhrase>beacon of innovation</CustomPhrase> in the ever-changing landscape
          of information dissemination. Our mission is simple yet profound: to redefine how you experience the news.
        </Body>
        <Body>
          With a commitment to <CustomPhrase>cutting-edge journalism</CustomPhrase> and a <CustomPhrase>relentless pursuit of truth</CustomPhrase>, we
          aim to be more than just a source of information – we aspire to be your <CustomPhrase>trusted companion</CustomPhrase> in navigating the
          complexities of our world.
        </Body>
        <Body>
          At NewWest, we embrace the <CustomPhrase>spirit of exploration and discovery</CustomPhrase>. We're not afraid to
          <CustomPhrase>challenge the status quo</CustomPhrase>, to <CustomPhrase>push boundaries</CustomPhrase>, and to venture into
          <CustomPhrase>stories that matter</CustomPhrase>, <CustomPhrase>stories that inspire</CustomPhrase>, and
          <CustomPhrase>stories that shape our collective future</CustomPhrase>.
        </Body>
        <Body>
          Join us on this <CustomPhrase>journey of exploration</CustomPhrase>.{' '}
          <CustomPhrase>Discover the world of tomorrow with NewWest</CustomPhrase>
        </Body>
      </div>
    </div>
  );
};

export default AboutUsPage;
