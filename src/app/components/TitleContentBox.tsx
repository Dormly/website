import { dmSerif, geistSans, inter } from "../ui/fonts";
import TitleText from "./TitleText"

type TitleContentBoxPropType = {
    title: string;
    content: React.ReactElement;
};

export default function TitleContentBox(props: TitleContentBoxPropType) {
  return (
    <div className="">
      <div className={`relative flex justify-center ${inter.className}`}>
        <div className="p-4 border-2 rounded-lg m-4 shadow-md">
        <TitleText title={props.title}></TitleText>
          {props.content}
        </div>
      </div>
    </div>
  );
}
