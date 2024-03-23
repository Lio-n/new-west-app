import { useMediaQuery } from '@uidotdev/usehooks';
import MediaQueryInfo from '../../constants/mediaQuery.constant.json';
import DesktopHeader from './desktop.component';
import MobileHeader from './mobile.component';

const PrimaryHeader = () => {
  const isLargeDevice = useMediaQuery(MediaQueryInfo.min.lg);

  return <div className={`w-full bg-chinese-blue-400 backdrop-blur-lg fixed z-20`}>{isLargeDevice ? <DesktopHeader /> : <MobileHeader />}</div>;
};

export default PrimaryHeader;
