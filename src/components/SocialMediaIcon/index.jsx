import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialMediaIcon = ({ platform }) => {
  let Icon;
  let backgroundColor;

  switch (platform) {
    case 'facebook':
      Icon = FaFacebook;
      backgroundColor = 'white';
      break;
    case 'instagram':
      Icon = FaInstagram;
      backgroundColor = 'white';
      break;
    case 'youtube':
      Icon = FaYoutube;
      backgroundColor = 'white';
      break;
    default:
      return null;
  }

  return (
    <div className="border-[1px] border-black cursor-pointer rounded-full flex items-center justify-center group">
      <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-${backgroundColor} group-hover:bg-black p-1`}>
        <Icon className="w-5 h-5 text-black group-hover:text-white" />
      </div>
    </div>
  );
};

export default SocialMediaIcon;
