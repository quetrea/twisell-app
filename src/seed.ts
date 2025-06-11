import { getPayload } from "payload";
import config from "@payload-config";
import { stripe } from "./lib/stripe";

const categories = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Business & Money",
    color: "#FFB347",
    slug: "business-money",
    subcategories: [
      { name: "Accounting", slug: "accounting" },
      {
        name: "Entrepreneurship",
        slug: "entrepreneurship",
      },
      { name: "Gigs & Side Projects", slug: "gigs-side-projects" },
      { name: "Investing", slug: "investing" },
      { name: "Management & Leadership", slug: "management-leadership" },
      {
        name: "Marketing & Sales",
        slug: "marketing-sales",
      },
      { name: "Networking, Careers & Jobs", slug: "networking-careers-jobs" },
      { name: "Personal Finance", slug: "personal-finance" },
      { name: "Real Estate", slug: "real-estate" },
    ],
  },
  {
    name: "Software Development",
    color: "#7EC8E3",
    slug: "software-development",
    subcategories: [
      { name: "Web Development", slug: "web-development" },
      { name: "Mobile Development", slug: "mobile-development" },
      { name: "Game Development", slug: "game-development" },
      { name: "Programming Languages", slug: "programming-languages" },
      { name: "DevOps", slug: "devops" },
    ],
  },
  {
    name: "Writing & Publishing",
    color: "#D8B5FF",
    slug: "writing-publishing",
    subcategories: [
      { name: "Fiction", slug: "fiction" },
      { name: "Non-Fiction", slug: "non-fiction" },
      { name: "Blogging", slug: "blogging" },
      { name: "Copywriting", slug: "copywriting" },
      { name: "Self-Publishing", slug: "self-publishing" },
    ],
  },
  {
    name: "Other",
    slug: "other",
  },
  {
    name: "Education",
    color: "#FFE066",
    slug: "education",
    subcategories: [
      { name: "Online Courses", slug: "online-courses" },
      { name: "Tutoring", slug: "tutoring" },
      { name: "Test Preparation", slug: "test-preparation" },
      { name: "Language Learning", slug: "language-learning" },
    ],
  },
  {
    name: "Self Improvement",
    color: "#96E6B3",
    slug: "self-improvement",
    subcategories: [
      { name: "Productivity", slug: "productivity" },
      { name: "Personal Development", slug: "personal-development" },
      { name: "Mindfulness", slug: "mindfulness" },
      { name: "Career Growth", slug: "career-growth" },
    ],
  },
  {
    name: "Fitness & Health",
    color: "#FF9AA2",
    slug: "fitness-health",
    subcategories: [
      { name: "Workout Plans", slug: "workout-plans" },
      { name: "Nutrition", slug: "nutrition" },
      { name: "Mental Health", slug: "mental-health" },
      { name: "Yoga", slug: "yoga" },
    ],
  },
  {
    name: "Design",
    color: "#B5B9FF",
    slug: "design",
    subcategories: [
      { name: "UI/UX", slug: "ui-ux" },
      { name: "Graphic Design", slug: "graphic-design" },
      { name: "3D Modeling", slug: "3d-modeling" },
      { name: "Typography", slug: "typography" },
    ],
  },
  {
    name: "Drawing & Painting",
    color: "#FFCAB0",
    slug: "drawing-painting",
    subcategories: [
      { name: "Watercolor", slug: "watercolor" },
      { name: "Acrylic", slug: "acrylic" },
      { name: "Oil", slug: "oil" },
      { name: "Pastel", slug: "pastel" },
      { name: "Charcoal", slug: "charcoal" },
    ],
  },
  {
    name: "Music",
    color: "#FFD700",
    slug: "music",
    subcategories: [
      { name: "Songwriting", slug: "songwriting" },
      { name: "Music Production", slug: "music-production" },
      { name: "Music Theory", slug: "music-theory" },
      { name: "Music History", slug: "music-history" },
    ],
  },
  {
    name: "Photography",
    color: "#FF6B6B",
    slug: "photography",
    subcategories: [
      { name: "Portrait", slug: "portrait" },
      { name: "Landscape", slug: "landscape" },
      { name: "Street Photography", slug: "street-photography" },
      { name: "Nature", slug: "nature" },
      { name: "Macro", slug: "macro" },
    ],
  },
  {
    name: "Crafts & DIY",
    color: "#E0BBE4",
    slug: "crafts-diy",
    subcategories: [
      { name: "Handmade Jewelry", slug: "handmade-jewelry" },
      { name: "Woodworking", slug: "woodworking" },
      { name: "Home Decor DIY", slug: "home-decor-diy" },
      { name: "Papercraft", slug: "papercraft" },
      { name: "Upcycling Projects", slug: "upcycling-projects" },
    ],
  },
  {
    name: "Fashion & Style",
    color: "#C0C0F5",
    slug: "fashion-style",
    subcategories: [
      { name: "Sewing", slug: "sewing" },
      { name: "Streetwear Design", slug: "streetwear-design" },
      { name: "Personal Styling", slug: "personal-styling" },
      { name: "Fashion Illustration", slug: "fashion-illustration" },
    ],
  },
  {
    name: "AI & Machine Learning",
    color: "#A0E7E5",
    slug: "ai-machine-learning",
    subcategories: [
      { name: "Neural Networks", slug: "neural-networks" },
      { name: "Natural Language Processing", slug: "nlp" },
      { name: "Computer Vision", slug: "computer-vision" },
      { name: "AI Ethics", slug: "ai-ethics" },
    ],
  },
  {
    name: "Cybersecurity",
    color: "#89CFF0",
    slug: "cybersecurity",
    subcategories: [
      { name: "Ethical Hacking", slug: "ethical-hacking" },
      { name: "Data Privacy", slug: "data-privacy" },
      { name: "Network Security", slug: "network-security" },
      { name: "Incident Response", slug: "incident-response" },
    ],
  },
  {
    name: "Travel & Adventure",
    color: "#FAD02E",
    slug: "travel-adventure",
    subcategories: [
      { name: "Backpacking", slug: "backpacking" },
      { name: "Cultural Travel", slug: "cultural-travel" },
      { name: "Travel Photography", slug: "travel-photography" },
      { name: "Digital Nomad Life", slug: "digital-nomad-life" },
    ],
  },
  {
    name: "Philosophy & Society",
    color: "#F3D1DC",
    slug: "philosophy-society",
    subcategories: [
      { name: "Ethics", slug: "ethics" },
      { name: "Critical Thinking", slug: "critical-thinking" },
      { name: "Modern Philosophy", slug: "modern-philosophy" },
      { name: "Sociology", slug: "sociology" },
    ],
  },
  {
    name: "Food & Culinary Arts",
    color: "#FDD9A0",
    slug: "food-culinary-arts",
    subcategories: [
      { name: "Baking", slug: "baking" },
      { name: "International Cuisine", slug: "international-cuisine" },
      { name: "Vegan Recipes", slug: "vegan-recipes" },
      { name: "Food Styling", slug: "food-styling" },
      { name: "Fermentation", slug: "fermentation" },
    ],
  },
  {
    name: "Gardening & Sustainability",
    color: "#AED9A0",
    slug: "gardening-sustainability",
    subcategories: [
      { name: "Urban Gardening", slug: "urban-gardening" },
      { name: "Composting", slug: "composting" },
      { name: "Permaculture", slug: "permaculture" },
      { name: "Zero Waste Living", slug: "zero-waste-living" },
    ],
  },
  {
    name: "Parenting & Family",
    color: "#FFD3B5",
    slug: "parenting-family",
    subcategories: [
      { name: "Pregnancy", slug: "pregnancy" },
      { name: "Early Childhood", slug: "early-childhood" },
      { name: "Homeschooling", slug: "homeschooling" },
      { name: "Parenting Tips", slug: "parenting-tips" },
    ],
  },
  {
    name: "Board Games & Roleplay",
    color: "#CABBE9",
    slug: "board-games-roleplay",
    subcategories: [
      { name: "Dungeons & Dragons", slug: "dungeons-dragons" },
      { name: "Card Games", slug: "card-games" },
      { name: "Strategy Games", slug: "strategy-games" },
      { name: "Miniature Painting", slug: "miniature-painting" },
    ],
  },
  {
    name: "Event Planning",
    color: "#FFB6B9",
    slug: "event-planning",
    subcategories: [
      { name: "Wedding Planning", slug: "wedding-planning" },
      { name: "Birthday Ideas", slug: "birthday-ideas" },
      { name: "Corporate Events", slug: "corporate-events" },
      { name: "Themed Parties", slug: "themed-parties" },
    ],
  },
  {
    name: "Pet Care & Training",
    color: "#FFE4C4",
    slug: "pet-care-training",
    subcategories: [
      { name: "Dog Training", slug: "dog-training" },
      { name: "Cat Behavior", slug: "cat-behavior" },
      { name: "Pet Nutrition", slug: "pet-nutrition" },
      { name: "Adoption & Rescue", slug: "adoption-rescue" },
    ],
  },
];

const seed = async () => {
  const payload = await getPayload({
    config,
  });

  const stripeAccount = await stripe.accounts.create({});

  const adminTenant = await payload.create({
    collection: "tenants",
    data: {
      name: "admin",
      slug: "admin",
      stripeAccountId: stripeAccount.id,
    },
  });

  await payload.create({
    collection: "users",
    data: {
      email: process.env.ADMIN_EMAIL!,
      password: process.env.ADMIN_PASSWORD!,
      roles: ["super-admin"],
      username: process.env.ADMIN_USERNAME!,
      tenants: [
        {
          tenant: adminTenant.id,
        },
      ],
    },
  });

  for (const category of categories) {
    const parentCategory = await payload.create({
      collection: "categories",
      data: {
        name: category.name,
        slug: category.slug,
        color: category.color,
        parent: null,
      },
    });

    for (const subCategory of category.subcategories || []) {
      await payload.create({
        collection: "categories",
        data: {
          name: subCategory.name,
          slug: subCategory.slug,
          parent: parentCategory.id,
        },
      });
    }
  }
};

try {
  await seed();
  console.log("Seed completed successfully.");
  process.exit(0);
} catch (error) {
  console.log("Error during seeding:", error);
  process.exit(1);
}
