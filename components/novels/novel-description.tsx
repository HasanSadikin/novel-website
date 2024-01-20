interface Props {
  description: string;
}
const NovelDescription = ({ description }: Props) => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold py-5">Description</h1>
      <p className="text-center">{description}</p>
      <div className="w-full h-10 border-b-2 border-gray-300"></div>
    </>
  );
};

export default NovelDescription;
