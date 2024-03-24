import { useMediaQuery } from '@uidotdev/usehooks';
import DotIcon from '../ui/atoms/icons/dot.icon';
import Phrase from '../ui/atoms/typographies/phrase.atom';
import MediaQueryInfo from '../constants/mediaQuery.constant.json';
import { Link } from 'react-router-dom';
import { NewsTrikerInfo } from '../interfaces/newsTriker.interface';

const NewsList = ({ data }: { data: NewsTrikerInfo[] }) => {
  return (
    <div className="overflow-hidden">
      <ul className="animate-marquee_ms md:animate-marquee_md flex whitespace-nowrap">
        {data.map((item, index) => (
          <li key={index} className="whitespace-nowrap flex items-center">
            <Link to={`/article/${item.id}`} children={<Phrase>{item.title}</Phrase>} />

            {data.length - 1 !== index ? <DotIcon className="mx-4 h-[8px] w-[8px] bg-blueberry-600" /> : <></>}
          </li>
        ))}
      </ul>
    </div>
  );
};

const NewsTicker = ({ data }: { data: NewsTrikerInfo[] }) => {
  const isSmallDevice = useMediaQuery(MediaQueryInfo.max.sm);

  const content = isSmallDevice ? data.slice(0, 2) : data.slice(0, 4);
  // Every newsInfo shouls have a maz lenght of 100 chars. Based on this, determinate how many newInfo, should be for each view size.

  return (
    <div className="p-2 bg-body-200 sm:rounded-lg sm:w-[90%] sm:my-0 sm:mx-auto sm:p-3">
      <Phrase color="blueberry-600" className="bg-body-200 pr-4 font-semibold absolute z-[5] hidden sm:block">
        News Update:
      </Phrase>

      <NewsList data={content} />
    </div>
  );
};

export default NewsTicker;
