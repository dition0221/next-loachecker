interface INews {
  Title: string;
  Date: string;
  Link: string;
  Type: "공지" | "점검" | "상점" | "이벤트";
}

interface IHomeProps {
  news: INews[];
}

export default function Home({ news }: IHomeProps) {
  return (
    <>
      <ul>
        {news.slice(0, 5).map((v, i) => (
          <li key={i}>
            <p>{v.Type}</p>
            <a href={v.Link} target="_blank">
              {v.Title}
            </a>
            <p>{v.Date}</p>
            <hr className="h-6" />
          </li>
        ))}
      </ul>

      <hr className="h-0.5 bg-black w-full" />
    </>
  );
}

export async function getServerSideProps() {
  const news: INews[] = await (
    await fetch("https://developer-lostark.game.onstove.com/news/notices", {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${process.env.LOSTARK_API_KEY}`,
      },
    })
  ).json();

  return { props: { news } };
}
