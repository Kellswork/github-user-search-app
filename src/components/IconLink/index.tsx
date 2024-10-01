interface IconLinkProps {
  name: string;
  imgSrc: string;
  altText: string;
  link: string;
}
export default function IconLInk({ name, imgSrc, altText, link }: IconLinkProps) {
  return (
    <li className="icon-link__item">
      <img src={imgSrc} alt={altText} />
      <a href={link}>{name}</a>
    </li>
  );
}
