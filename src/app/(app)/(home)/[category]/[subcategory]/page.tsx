interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { category, subcategory } = await params;

  return (
    <div>
      Category: {category} <br /> Subcategory: {subcategory}
    </div>
  );
};

// http://localhost:3000/fitness-health/mental-health
// http://localhost:3000/[category]/[subcategory]

export default Page;
