import SocialMediaIcon from '../SocialMediaIcon'

export function Footer() {
  const helpfulLinks = [
    'LINKS ÚTEIS',
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
    'SUPORTE AO CLIENTE',
    'Order History',
    'Free Shipping',
    'Refund Policy',
    'Privacy Policy',
    'Terms of Use',
    'Accessibility Statement',
  ]

  const contactUs = [
    'CONTATE-NOS',
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
          <p className="mb-2">CONSULTA GRATUITA</p>
          <div className="text-[15px] leading-7">
            <b>
              Você está se perguntando se a linha de cuidados com a pele do Spa Dr. é adequada para você?{' '}
            </b>
            <span>
             Se sim, agende uma consulta gratuita com um de nossos especialistas em cuidados com a pele.
            </span>
            <p className="mt-5 underline cursor-pointer">
              Agende agora sua consulta gratuita.
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
