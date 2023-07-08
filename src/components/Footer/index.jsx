import SocialMediaIcon from '../SocialMediaIcon'

export function Footer() {
  const helpfulLinks = [
    'HELPFUL LINKS',
    'Become a VIP',
    'About The Spa Dr.®',
    'The Skin Quiz',
    'Skin Care FAQs',
    'The Spa Dr.® Blog',
    'Podcasts',
    'How to Become an Affiliate',
    'Speaking & Media',
  ]

  const customerSupport = [
    'CUSTOMER SUPPORT',
    'Order History',
    'Free Shipping',
    'Refund Policy',
    'Privacy Policy',
    'Terms of Use',
    'Accessibility Statement',
  ]

  const contactUs = [
    'CONTACT US',
    'team@thespadr.com',
    '1-866-377-4404',
    'PO Box 981352',
    'Park City Utah',
    '84098 United States',
  ]
  return (
    <>
      <div className="flex flex-wrap py-20 gap-20 2xl:gap-40 justify-center">
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-0 justify-center">
          <ul className='w-[247px] text-center'>
            <li className="mb-2">{helpfulLinks[0]}</li>
            {helpfulLinks.slice(1).map((link, index) => (
              <li className="mt-2 text-xl md:text-[14px]" key={index}>
                {link}
              </li>
            ))}
          </ul>
          <ul className='w-[247px] text-center'>
            <li className="mb-2">{customerSupport[0]}</li>
            {customerSupport.slice(1).map((link, index) => (
              <li className="mt-2 text-xl md:text-[14px]" key={index}>
                {link}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col w-[247px] text-center">
            <li className="mb-2">{contactUs[0]}</li>
            {contactUs.slice(1).map((link, index) => (
              <li className="mt-2 text-xl md:text-[14px]" key={index}>
                {link}
              </li>
            ))}
            <div className="flex gap-3 mt-8 justify-center">
              <SocialMediaIcon
                platform="facebook"
                color="white"
              />
              <SocialMediaIcon
                platform="instagram"
                color="white"
              />
              <SocialMediaIcon
                platform="youtube"
                color="white"
              />
            </div>
          </ul>
        </div>
        <div className="p-4 xl:max-w-[290px]">
          <p className="mb-2">FREE CONSULT</p>
          <div className="text-[15px] leading-7">
            <b>
              Are you wondering if The Spa Dr. skin care
              line is right for you?{' '}
            </b>
            <span>
              If so, schedule a complimentary consultation
              with one of our skin experts.
            </span>
            <p className="mt-5 underline">
              Schedule Free Consult Now
            </p>
          </div>
        </div>
      </div>
      <p className="my-4">
        © 2023 The Spa Dr.® | All Rights Reserved
      </p>
    </>
  )
}
