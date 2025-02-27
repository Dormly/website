type DescriptionTextType = {
    description: string;
};

export default function DescriptionText(props: DescriptionTextType) {
  return (
    <p className="mt-2">{props.description}</p>
  );
}
