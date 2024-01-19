import { useEffect, useState } from "react";
// FIREBASE
import { doc, getDoc } from "firebase/firestore";
import { CHECKER, auth, db } from "@/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
// COMPONENTS
import CheckBox from "@/components/CheckBox";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

interface ICharacterCheck {
  chaos: 0 | 1 | 2;
  guardian: boolean;
  quest: 0 | 1 | 2 | 3;
  guildCheck: boolean;
  // [key: string]?: boolean; 군단장 등
  isGoldCharacter: boolean;
}

interface IChecker {
  characters: ICharacterCheck[];
  weekGuardian: boolean;
  weekDungeon: boolean;
}

export default function Checker() {
  const router = useRouter();
  const user = auth.currentUser;
  if (!user) router.push("/login");

  // getDoc: checker
  const [data, setData] = useState<IChecker>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) return router.push("/login");
        const docRef = doc(db, CHECKER, user.uid);
        const dbData = (await getDoc(docRef)).data() as IChecker;
        setData(dbData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router, user]);

  // data?.characters.map((v) => console.log(v));

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

      {[...Array(6)].map((_, i) => (
        <article key={i} className="grid grid-row-6 space-y-2 text-center">
          <p className="text-xs">테스트닉네임텍스트닉네임</p>
          <p>1630</p>
          {/* 일일 */}
          <CheckBox characterName={i + ""} id="chaos" />
          <CheckBox characterName={i + ""} id="guardian" />
          <CheckBox characterName={i + ""} id="quest" />
          <CheckBox characterName={i + ""} id="guildCheck" />
          {/* 주간 */}
        </article>
      ))}
    </section>
  );
}
