type TitleTextType = {
    title: string;
};

export default function TitleText(props: TitleTextType) {
  return (
    <h1 className="text-7xl font-bold underline decoration-saffron underline-offset-4 justify-self-center">{props.title}</h1>
  );
}
