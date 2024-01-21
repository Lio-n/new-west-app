import FacebookIcon from "../../ui/atoms/icons/facebook.icon";
import NewWestInfo from "../../data/NewWest.data.json";
import TwitterIcon from "../../ui/atoms/icons/twitter.icon";
import LinkedinIcon from "../../ui/atoms/icons/linkedin.icon";
import YoutubeIcon from "../../ui/atoms/icons/youtube.icon";
import InstagramIcon from "../../ui/atoms/icons/instagram.icon";
import BuildingIcon from "../../ui/atoms/icons/building.icon";

const SocialMediaList = () => {
  const socialMediaInfo = [
    { icon: <FacebookIcon className="w-5" />, href: NewWestInfo.socialMedia.facebook },
    { icon: <TwitterIcon className="w-5" />, href: NewWestInfo.socialMedia.twitter },
    { icon: <LinkedinIcon className="w-5" />, href: NewWestInfo.socialMedia.linkedin },
    { icon: <YoutubeIcon className="w-5" />, href: NewWestInfo.socialMedia.youtube },
    { icon: <InstagramIcon className="w-5" />, href: NewWestInfo.socialMedia.instagram },
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
    <div className={`w-full bg-white px-14 py-2 gap-8 flex justify-between z-10`}>
      <div className="hidden sm:flex text-body-500">
        <BuildingIcon className="w-5 mr-4" /> {NewWestInfo.contact.location}
      </div>
      <SocialMediaList />
    </div>
  );
};

export default SecondaryHeader;
