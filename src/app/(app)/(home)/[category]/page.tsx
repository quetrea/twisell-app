interface Props {
  params: Promise<{
    category: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { category } = await params;
  return <div>Category: {category}</div>;
};


// http://localhost:3000/fitness-health/mental-health
// http://localhost:3000/[category]/[subcategory]

export default Page;
