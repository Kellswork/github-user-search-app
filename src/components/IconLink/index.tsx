interface IconLinkProps {
  name: string | null | undefined;
  imgSrc: string;
  altText: string;
  link?: string;
}
export default function IconLInk({
  name,
  imgSrc,
  altText,
  link,
}: IconLinkProps) {
  return name ? (
    <li className="icon-link__item">
      <img src={imgSrc} alt={altText} />
      {link ? <a href={link} target="_blank" rel="noopener noreferrer">{name}</a> : <p>{name}</p>}
    </li>
  ) : (
    <li className="icon-link__item disabled">
      <img src={imgSrc} alt={altText} />
      <p className="disabled">not available</p>
    </li>
  );
}
