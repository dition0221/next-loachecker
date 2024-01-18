// COMPONENTS
import CheckBox from "@/components/CheckBox";

interface ICharacter {
  chaos: 0 | 1 | 2;
  guardian: boolean;
  quest: 0 | 1 | 2 | 3;
  guildCheck: boolean;
  // [key: string]?: boolean; 군단장 등
  isGoldCharacter: boolean;
}

interface ITable {
  characters: ICharacter[];
  weekGuardian: boolean;
  weekDungeon: boolean;
}

export default function Checker() {
  /* getDoc: checker
  useEffect(() => {
    console.log("sd");
  }, []);
  */

  return (
    <section className="grid grid-cols-7 space-x-2 text-sm">
      <article className="grid grid-row-6 space-y-2 text-center">
        <p>닉네임</p>
        <p>레벨</p>
        {/* 일일 */}
        <p>카오스 던전</p>
        <p>가디언 토벌</p>
        <p>에포나 퀘스트</p>
        <p>길드 출석</p>
        {/* 주간 */}
      </article>
      {[...Array(6)].map((v, i) => (
        <article key={i} className="grid grid-row-6 space-y-2 text-center">
          <p className="text-xs">테스트닉네임텍스트닉네임</p>
          <p>1630</p>
          {/* 일일 */}
          <CheckBox id="chaos" />
          <CheckBox id="guardian" />
          <CheckBox id="quest" />
          <CheckBox id="guildCheck" />
          {/* 주간 */}
        </article>
      ))}
    </section>
  );
}
