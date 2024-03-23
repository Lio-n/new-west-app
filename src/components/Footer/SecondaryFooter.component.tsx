import Phrase from '../../ui/atoms/typographies/phrase.atom';

const SecondaryFooter = () => {
  return (
    <div className="bg-blueberry-700">
      <div className="max-w-screen-2xl mx-auto p-4 flex gap-2 flex-wrap justify-between">
        <Phrase color="white">© 2023 NewWest, All rights reserved</Phrase>
        <div className="flex gap-6">
          <Phrase color="white">Term of Service</Phrase>
          <Phrase color="white">Policy Service</Phrase>
          <Phrase color="white">Cookie Policy</Phrase>
          <Phrase color="white">Partners</Phrase>
        </div>
      </div>
    </div>
  );
};

export default SecondaryFooter;
