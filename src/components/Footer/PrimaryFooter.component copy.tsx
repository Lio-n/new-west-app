import Brand from '../../ui/atoms/brand.atom';
import Body from '../../ui/atoms/typographies/body.atom';
import MenuNavegationLinks from '../../ui/molecules/menuNavegationLinks.molecule';
import HeaderInfo from '../../data/Header.data.json';
import FacebookIcon from '../../ui/atoms/icons/facebook.icon';
import NewWestInfo from '../../data/NewWest.data.json';
import TwitterIcon from '../../ui/atoms/icons/twitter.icon';
import LinkedinIcon from '../../ui/atoms/icons/linkedin.icon';
import YoutubeIcon from '../../ui/atoms/icons/youtube.icon';
import InstagramIcon from '../../ui/atoms/icons/instagram.icon';
import EmailIcon from '../../ui/atoms/icons/email.icon';
import Phrase from '../../ui/atoms/typographies/phrase.atom';
import SubscriptionLetterForm from '../subscriptionLetterForm.component';

const PrimaryFooter = () => {
  return (
    <div className="bg-slate-200">
      <div className="max-w-screen-2xl mx-auto py-8 px-4 md:py-16 md:px-8 flex flex-wrap gap-8 justify-between">
        <div className="grid gap-4">
          <Brand className="w-24 h-24" />
          <Body>Craft narrative that ignite inspiration knowledge, and entertainment.</Body>
          <SubscriptionLetterForm />
        </div>
        <div className="text-body-500">
          <MenuNavegationLinks data={[{ text: 'Home', href: '/' }, ...HeaderInfo.navLinks]} className="grid grid-cols-[repeat(3,1fr)] gap-[0rem]" />
          <SocialMediaList />
        </div>
      </div>
    </div>
  );
};

const SocialMediaList = () => {
  const socialMediaInfo = [
    { icon: <EmailIcon className="w-4" />, text: NewWestInfo.socialMedia.email },
    { icon: <FacebookIcon className="w-4" />, text: NewWestInfo.socialMedia.facebook },
    { icon: <TwitterIcon className="w-4" />, text: NewWestInfo.socialMedia.twitter },
    { icon: <LinkedinIcon className="w-4" />, text: NewWestInfo.socialMedia.linkedin },
    { icon: <YoutubeIcon className="w-4" />, text: NewWestInfo.socialMedia.youtube },
    { icon: <InstagramIcon className="w-4" />, text: NewWestInfo.socialMedia.instagram },
  ];

  return (
    <ul className="grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] gap-2 mt-6">
      {socialMediaInfo.map((data, index) => (
        <li key={index}>
          <Phrase className="flex gap-2 items-center">
            {data.icon} {data.text}
          </Phrase>
        </li>
      ))}
    </ul>
  );
};

export default PrimaryFooter;
