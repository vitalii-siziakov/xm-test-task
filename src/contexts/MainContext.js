import { createContext, useState, useEffect } from 'react';
import { getCryptocurrenciesList } from './../API/connectors/getCryptocurrencies';

import bitcoinIcon from '@images/png/btc-icon.png';
import etheriumIcon from '@images/png/eth-icon.png';
import rippleIcon from '@images/png/xrp-icon.png';
import litecoinIcon from '@images/png/ltc-icon.png';
import bitcoinCashIcon from '@images/png/bch-icon.png';

import metaquotesLogo from '@images/png/metaquotes-logo.png';
import versignLogo from '@images/png/versign-logo.png';
import unicefLogo from '@images/png/unicef-logo.png';
import investorsInPeopleLogo from '@images/png/investors-in-people-logo.png';

import facebookIcon from '@images/png/facebook-icon.png';
import twitterIcon from '@images/png/twitter-icon.png';
import youtubeIcon from '@images/png/youtube-icon.png';
import instagramIcon from '@images/png/instagram-icon.png';
import linkedinIcon from '@images/png/linkedin-icon.png';

import authorisedIcon from '@images/svg/shield-icon.svg';
import committedIcon from '@images/svg/people-community-icon.svg';
import awardedIcon from '@images/svg/winner-cup-icon.svg';
import supportIcon from '@images/svg/support-chat-icon.svg';

import lightningIcon from '@images/png/lightning-icon.png';
import percentIcon from '@images/png/percent-icon.png';
import microchipIcon from '@images/png/microchip-icon.png';
import dollarIcon from '@images/png/dollar-icon.png';

import plugImage from '@images/svg/grey-square.svg';

export const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  const brokerFeaturesList = [
    {
      title: 'Authorised and Regulated',
      description: 'At XM, we adhere to all regulatory standards and are fully authorised and regulated by FSC.',
      image: authorisedIcon,
      alt: 'Shield',
    },
    {
      title: 'Committed and Fair',
      description: 'We operate with complete transparency and adhere to the highest professional and ethical standards.',
      image: committedIcon,
      alt: 'People Community',
    },
    {
      title: 'Multi-Award-Winning',
      description: 'Over the years we have received over 40 awards for the quality of our products and services.',
      image: awardedIcon,
      alt: 'Winner Cup',
    },
    {
      title: '24/7 Support',
      description: 'Our support agents are on hand 24/7 to answer your questions or assist you with any issues.',
      image: supportIcon,
      alt: '24/7 Support time message',
    },
  ];

  const cryptocurrenciesPresets = {
    90: {
      icon: bitcoinIcon,
    },
    80: {
      icon: etheriumIcon,
    },
    58: {
      icon: rippleIcon,
    },
    1: {
      icon: litecoinIcon,
    },
    2321: {
      icon: bitcoinCashIcon,
    },
  };

  const [cryptocurrenciesList, setCryptocurrenciesList] = useState([]);

  useEffect(() => {
    (async () => {
      const cryptocurrenciesIds = '90,80,58,1,2321';
      const cryptocurrenciesList = await getCryptocurrenciesList(cryptocurrenciesIds);
      setCryptocurrenciesList(cryptocurrenciesList);
    })();
  }, []);

  const traderBenefitsList = [
    {
      icon: lightningIcon,
      alt: 'Lightning Icon',
      title: 'Superior Trade Execution',
      description: (
        <>
          <b>99%</b> of trades are executed in <b>less than a second,</b> with no requotes or rejections.
        </>
      ),
    },
    {
      icon: percentIcon,
      alt: 'Percent Icon',
      title: 'Competitive Pricing',
      description: (
        <>
          We offer some of the <b>lowest spreads</b> and we don’t charge commissions.
        </>
      ),
    },
    {
      icon: microchipIcon,
      alt: 'Microchip Icon',
      title: 'Advanced Technology',
      description: (
        <>
          Trade on <b>MT4</b> or <b>MT5</b>, with expert tools, across desktop, web and mobile.
        </>
      ),
    },
    {
      icon: dollarIcon,
      alt: 'Dollar Icon',
      title: 'Start with $5',
      description: (
        <>
          Start trading your preferred instruments with as little as a <b>$5 minimum deposit.</b>
        </>
      ),
    },
  ];

  const eventGallerySlidesList = [
    { image: plugImage, alt: 'Grey square', id: 'Image 01' },
    { image: plugImage, alt: 'Grey square', id: 'Image 02' },
    { image: plugImage, alt: 'Grey square', id: 'Image 03' },
    { image: plugImage, alt: 'Grey square', id: 'Image 04' },
    { image: plugImage, alt: 'Grey square', id: 'Image 05' },
    { image: plugImage, alt: 'Grey square', id: 'Image 06' },
  ];

  const partnersList = [
    { name: 'MetaQuotes', image: metaquotesLogo, alt: 'MetaQuotes Logo' },
    { name: 'Versign', image: versignLogo, alt: 'Versign Logo' },
    { name: 'UNICEF', image: unicefLogo, alt: 'UNICEF Logo' },
    { name: 'Investors in People', image: investorsInPeopleLogo, alt: 'Investors in People Logo' },
  ];

  const socialsList = [
    { name: 'Facebook', link: 'https://www.facebook.com/xmglobal', image: facebookIcon, alt: 'Facebook Icon' },
    { name: 'Twitter', link: 'https://twitter.com/XM_COM', image: twitterIcon, alt: 'Twitter Icon' },
    { name: 'YouTube', link: 'https://www.youtube.com/user/xmglobal', image: youtubeIcon, alt: 'YouTube Icon' },
    { name: 'Instagram', link: 'https://www.instagram.com/xmglobal/', image: instagramIcon, alt: 'Instagram Icon' },
    { name: 'LinkedIn', link: 'https://cy.linkedin.com/company/xm-global', image: linkedinIcon, alt: 'LinkedIn Icon' },
  ];

  const footerNavigationList = [
    { name: 'Privacy Policy', link: '/#' },
    { name: 'Cookie Policy', link: '/#' },
    { name: 'Terms and Conditions', link: '/#' },
  ];

  return (
    <MainContext.Provider
      value={{
        traderBenefitsList,
        cryptocurrenciesPresets,
        cryptocurrenciesList,
        brokerFeaturesList,
        eventGallerySlidesList,
        partnersList,
        socialsList,
        footerNavigationList,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
