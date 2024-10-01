interface IconLinkProps {
  name: string;
  imgSrc: string;
  altText: string;
}
export default function IconLInk({ name, imgSrc, altText }: IconLinkProps) {
  return (
    <li className="icon-link__item">
      <img src={imgSrc} alt={altText} />
      <p>{name}</p>
    </li>
  );
}
