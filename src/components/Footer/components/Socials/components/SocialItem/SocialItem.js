const SocialItem = ({ item }) => {
  const { name, link, image, alt } = item;

  return (
    <li className='socials__item'>
      <h3 className='socials__name visually-hidden'>{name}</h3>
      <a href={link} target='_blank' rel='noopener noreferrer' className='socials__link'>
        <img src={image} alt={alt} className='socials__icon' />
      </a>
    </li>
  );
};

export default SocialItem;
