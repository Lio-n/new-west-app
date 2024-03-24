import FacebookIcon from '../../ui/atoms/icons/facebook.icon';
import NewWestInfo from '../../data/NewWest.data.json';
import TwitterIcon from '../../ui/atoms/icons/twitter.icon';
import LinkedinIcon from '../../ui/atoms/icons/linkedin.icon';
import YoutubeIcon from '../../ui/atoms/icons/youtube.icon';
import InstagramIcon from '../../ui/atoms/icons/instagram.icon';
import BuildingIcon from '../../ui/atoms/icons/building.icon';

const SocialMediaList = () => {
  const socialMediaInfo = [
    { icon: <FacebookIcon className="w-4" />, href: '#' },
    { icon: <TwitterIcon className="w-4" />, href: '#' },
    { icon: <LinkedinIcon className="w-4" />, href: '#' },
    { icon: <YoutubeIcon className="w-4" />, href: '#' },
    { icon: <InstagramIcon className="w-4" />, href: '#' },
  ];

  return (
    <ul className="flex justify-evenly w-full sm:w-fit gap-6 items-center">
      {socialMediaInfo.map((data, index) => (
        <li key={index}>
          <a target="_blank" href={data.href}>
            {data.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

const SecondaryHeader = () => {
  return (
    <div className={`bg-white`}>
      <div className="max-w-screen-2xl mx-auto px-14 py-1 gap-8 flex justify-between z-10">
        <div className="hidden sm:flex text-body-500">
          <BuildingIcon className="w-4 mr-4" /> {NewWestInfo.contact.location}
        </div>
        <SocialMediaList />
      </div>
    </div>
  );
};

export default SecondaryHeader;
