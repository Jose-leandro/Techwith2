import Link from "next/link";

type FooterItem = {
  title: string;
  link: string;
};

type Props = {
  title: string;
  dateFooter?: FooterItem[]; // you don't need the `items?: string`
};

export default function FooterSection({ title, dateFooter = [] }: Props) {
  return (
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul>
        {dateFooter.map((item, i) => (
          <li key={i}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
