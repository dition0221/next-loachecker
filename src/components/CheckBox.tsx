import { auth, db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

interface ICheckBoxProps {
  // character: string;
  id: string;
}

export default function CheckBox({ id }: ICheckBoxProps) {
  const uid = auth.currentUser?.uid!;

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkBoxId = e.currentTarget.id;
    const value = e.currentTarget.checked;

    // Save data to DB
    // TODO: 캐릭터마다 객체를 만들어야 함 - 캐릭터 prop 받아오기
    const docRef = doc(db, "Checker", uid);
    await setDoc(docRef, { [checkBoxId]: value }, { merge: true });
  };

  return <input type="checkbox" id={id} onChange={onChange} />;
}
