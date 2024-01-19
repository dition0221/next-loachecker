import { useState } from "react";
// FIREBASE
import { CHECKER, auth, db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

interface ICheckBoxProps {
  characterName: string;
  id: string;
}

export default function CheckBox({ characterName, id }: ICheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);
  const uid = auth.currentUser?.uid!;

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);

    const checkBoxId = e.currentTarget.id;
    const value = e.currentTarget.checked;

    // Save data to DB
    // TODO: 캐릭터마다 객체를 만들어야 함 - 캐릭터 prop 받아오기
    // ? 'character' 내부는 배열로 해야 함
    const docRef = doc(db, CHECKER, uid);
    await setDoc(
      docRef,
      {
        character: [
          {
            characterName: [characterName],
            [checkBoxId]: value,
          },
        ],
      },
      { merge: true }
    );
  };

  return (
    <input type="checkbox" id={id} onChange={onChange} checked={isChecked} />
  );
}
