import { getPayload } from "payload";
import config from "@payload-config";

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
    name: "Fashion & Apparel",
    slug: "fashion-apparel",
    color: "#E0BBE4",
    subcategories: [
      { name: "Women's Clothing", slug: "womens-clothing" },
      { name: "Men's Clothing", slug: "mens-clothing" },
      { name: "Kids' Clothing", slug: "kids-clothing" },
      { name: "Baby Clothing", slug: "baby-clothing" },
      { name: "Gender-Neutral Clothing", slug: "gender-neutral-clothing" },
      { name: "Costumes & Cosplay", slug: "costumes-cosplay" },
      { name: "Lingerie & Underwear", slug: "lingerie-underwear" },
      { name: "Swimwear", slug: "swimwear" },
      { name: "Outerwear", slug: "outerwear" },
    ],
  },
  {
    name: "Accessories",
    slug: "accessories",
    color: "#957DAD",
    subcategories: [
      { name: "Hats & Caps", slug: "hats-caps" },
      { name: "Scarves & Wraps", slug: "scarves-wraps" },
      { name: "Gloves & Mittens", slug: "gloves-mittens" },
      { name: "Belts & Suspenders", slug: "belts-suspenders" },
      { name: "Hair Accessories", slug: "hair-accessories" },
      { name: "Sunglasses & Eyewear", slug: "sunglasses-eyewear" },
      { name: "Wallets & Purses", slug: "wallets-purses" },
      { name: "Watches", slug: "watches" },
    ],
  },
  {
    name: "Jewelry",
    slug: "jewelry",
    color: "#D291BC",
    subcategories: [
      { name: "Necklaces", slug: "necklaces" },
      { name: "Earrings", slug: "earrings" },
      { name: "Bracelets", slug: "bracelets" },
      { name: "Rings", slug: "rings" },
      { name: "Anklets", slug: "anklets" },
      { name: "Brooches & Pins", slug: "brooches-pins" },
      { name: "Body Jewelry", slug: "body-jewelry" },
      { name: "Cufflinks & Tie Clips", slug: "cufflinks-tie-clips" },
    ],
  },
  {
    name: "Home & Living",
    slug: "home-living",
    color: "#FEC8D8",
    subcategories: [
      { name: "Home Décor", slug: "home-decor" },
      { name: "Furniture", slug: "furniture" },
      { name: "Bedding", slug: "bedding" },
      { name: "Bath Accessories", slug: "bath-accessories" },
      { name: "Lighting", slug: "lighting" },
      { name: "Storage & Organization", slug: "storage-organization" },
      { name: "Rugs & Carpets", slug: "rugs-carpets" },
      {
        name: "Curtains & Window Treatments",
        slug: "curtains-window-treatments",
      },
    ],
  },
  {
    name: "Art & Collectibles",
    slug: "art-collectibles",
    color: "#FFDFD3",
    subcategories: [
      { name: "Paintings", slug: "paintings" },
      { name: "Photography", slug: "photography" },
      { name: "Sculptures", slug: "sculptures" },
      { name: "Prints", slug: "prints" },
      { name: "Drawings & Illustrations", slug: "drawings-illustrations" },
      { name: "Collectible Figurines", slug: "collectible-figurines" },
      { name: "Antiques", slug: "antiques" },
      { name: "Memorabilia", slug: "memorabilia" },
    ],
  },
  {
    name: "Craft Supplies & Tools",
    slug: "craft-supplies-tools",
    color: "#CBAACB",
    subcategories: [
      { name: "Beads & Jewelry Making", slug: "beads-jewelry-making" },
      { name: "Fabric & Sewing", slug: "fabric-sewing" },
      { name: "Paper & Cardstock", slug: "paper-cardstock" },
      {
        name: "Painting & Drawing Supplies",
        slug: "painting-drawing-supplies",
      },
      { name: "Woodworking", slug: "woodworking" },
      { name: "Knitting & Crochet", slug: "knitting-crochet" },
      { name: "Embroidery & Cross-Stitch", slug: "embroidery-cross-stitch" },
      { name: "Crafting Tools", slug: "crafting-tools" },
    ],
  },
  {
    name: "Toys & Games",
    slug: "toys-games",
    color: "#FFB7B2",
    subcategories: [
      { name: "Stuffed Animals & Plushies", slug: "stuffed-animals-plushies" },
      { name: "Puzzles & Board Games", slug: "puzzles-board-games" },
      { name: "Educational Toys", slug: "educational-toys" },
      { name: "Action Figures", slug: "action-figures" },
      { name: "Dolls & Dollhouses", slug: "dolls-dollhouses" },
      { name: "Outdoor & Sports Toys", slug: "outdoor-sports-toys" },
      {
        name: "Building & Construction Toys",
        slug: "building-construction-toys",
      },
      { name: "Electronic Toys", slug: "electronic-toys" },
    ],
  },
  {
    name: "Books, Movies & Music",
    slug: "books-movies-music",
    color: "#FFDAC1",
    subcategories: [
      { name: "Books", slug: "books" },
      { name: "Movies", slug: "movies" },
      { name: "Music", slug: "music" },
      { name: "Magazines", slug: "magazines" },
      { name: "Comics & Graphic Novels", slug: "comics-graphic-novels" },
      { name: "Sheet Music", slug: "sheet-music" },
      { name: "Audiobooks", slug: "audiobooks" },
      { name: "Vinyl Records", slug: "vinyl-records" },
    ],
  },
  {
    name: "Electronics & Accessories",
    slug: "electronics-accessories",
    color: "#B5EAD7",
    subcategories: [
      { name: "Phone Cases", slug: "phone-cases" },
      { name: "Laptop Skins & Decals", slug: "laptop-skins-decals" },
      { name: "Headphones & Earbuds", slug: "headphones-earbuds" },
      { name: "Chargers & Cables", slug: "chargers-cables" },
      { name: "Smartwatch Accessories", slug: "smartwatch-accessories" },
      { name: "Camera Accessories", slug: "camera-accessories" },
      { name: "Gaming Accessories", slug: "gaming-accessories" },
      { name: "Wearable Technology", slug: "wearable-technology" },
    ],
  },
  {
    name: "Vintage",
    slug: "vintage",
    color: "#FFABAB",
    subcategories: [
      { name: "Vintage Clothing", slug: "vintage-clothing" },
      { name: "Vintage Jewelry", slug: "vintage-jewelry" },
      { name: "Vintage Home Décor", slug: "vintage-home-decor" },
      { name: "Vintage Electronics", slug: "vintage-electronics" },
      { name: "Vintage Books", slug: "vintage-books" },
      { name: "Vintage Toys", slug: "vintage-toys" },
      { name: "Vintage Art", slug: "vintage-art" },
      { name: "Vintage Collectibles", slug: "vintage-collectibles" },
    ],
  },
];

const seed = async () => {
  const payload = await getPayload({
    config,
  });

  const adminTenant = await payload.create({
    collection: "tenants",
    data: {
      name: "admin",
      slug: "admin",
      stripeAccountId: "admin",
    },
  });

  await payload.create({
    collection: "users",
    data: {
      email: "quetrea@demo.com",
      password: "demo",
      roles: ["super-admin"],
      username: "admin",
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
