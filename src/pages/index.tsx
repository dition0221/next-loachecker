interface INews {
  Title: string;
  Date: String;
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
          <>
            <li key={i}>
              <p>{v.Type}</p>
              <p>{v.Title}</p>
              <p>{v.Date}</p>
              <p>{v.Link}</p>
            </li>
            <hr className="h-6" />
          </>
        ))}
      </ul>
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
