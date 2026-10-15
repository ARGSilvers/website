export interface ProductItem {
  id: string;
  name: string;
  tamilName?: string;
  category: 'temple' | 'traditional' | 'lamps' | 'coins-custom';
  categoryLabel: string;
  image: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  description: string;
}

export interface ManufacturingImage {
  id: string;
  title: string;
  category: 'machinery' | 'tools' | 'craftsmanship' | 'heritage';
  image: string;
  caption: string;
  description: string;
  highlight?: boolean;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  image?: string;
  caption?: string;
}

export interface FamilyMember {
  name: string;
  role: string;
  description?: string;
  image: string;
}

export const COMPANY_INFO = {
  name: "A.R.G SILVERS",
  tagline: "Traditional Silver Handicrafts",
  since: "1925",
  location: "Kumbakonam, Tamil Nadu, India",
  founder: "Rajamanikam",
  stats: "100+ Years of Craftsmanship  |  Three Generations  |  Kumbakonam, Tamil Nadu",
  phones: [
    { label: "+91 9952843287", href: "tel:+919952843287" },
    { label: "+91 9944654778", href: "tel:+919944654778" },
    { label: "+91 9087603033", href: "tel:+919087603033" }
  ],
  email: {
    label: "argsilvers@gmail.com",
    href: "mailto:argsilvers@gmail.com"
  },
  units: [
    {
      unitNumber: "01",
      name: "Manufacturing Unit 01",
      street: "37/73 Mukkannar Street",
      city: "Kumbakonam – 612001",
      district: "Thanjavur District",
      state: "Tamil Nadu",
      mapsQuery: "37/73 Mukkannar Street, Kumbakonam, Tamil Nadu 612001"
    },
    {
      unitNumber: "02",
      name: "Manufacturing Unit 02",
      street: "104/65 Mukkannar Street",
      city: "Kumbakonam – 612001",
      district: "Thanjavur District",
      state: "Tamil Nadu",
      mapsQuery: "104/65 Mukkannar Street, Kumbakonam, Tamil Nadu 612001"
    }
  ],
  statesServed: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"],
  esteemedClients: [
    {
      name: "GRT Jewellers",
      location: "Chennai",
      logo: "/images/logo/grt-jewellers.png",
      alt: "GRT Jewellers Logo"
    },
    {
      name: "Lalitha Jewellery",
      location: "Chennai",
      logo: "/images/logo/lalithaa-jewellery.svg",
      alt: "Lalitha Jewellery Logo"
    },
    {
      name: "Saravana Jewellery",
      location: "Chennai",
      logo: "/images/logo/saravana-jewellery.png",
      alt: "Saravana Stores Elite Jewellery Logo"
    },
    {
      name: "Gopal Das Diamond Merchants and Jewellery",
      location: "Kumbakonam",
      logo: "/images/logo/gopaldas-jewellers.webp",
      alt: "Gopal Das Diamond Merchants and Jewellery Logo"
    }
  ]
};

export const FAMILY_MEMBERS: FamilyMember[] = [
  {
    name: "Late A. Rajamanikam",
    role: "Founder of the family craftsmanship tradition",
    description: "Began making traditional silver products by hand in Kumbakonam in 1925.",
    image: "/images/people/rajamanikam.jpeg"
  },
  {
    name: "Late A.R. Ganesan",
    role: "Next generation",
    description: "Continued the family’s silver manufacturing work and helped expand the range of traditional products.",
    image: "/images/people/ganesan.jpeg"
  },
  {
    name: "Late A.R. Gnanasekaran",
    role: "Next generation",
    description: "Continued the family tradition of traditional silver craftsmanship.",
    image: "/images/people/gnanasekaran.jpeg"
  },
  {
    name: "G. Ravindrakumar",
    role: "Family member continuing the craft",
    description: "Continuing the traditional silver work started by our grandfather.",
    image: "/images/people/ravindrakumar.png"
  },
  {
    name: "G. Balakumar",
    role: "Family member continuing the craft",
    description: "Continuing the traditional silver work started by our grandfather.",
    image: "/images/people/balakumar.jpeg"
  },
  {
    name: "G. Parthiban",
    role: "Family member continuing the craft",
    description: "Continuing the traditional silver work started by our grandfather.",
    image: "/images/people/parthiban.jpeg"
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "1925",
    title: "Where It All Began",
    description: "Our grandfather, Rajamanikam, began making traditional silver products by hand in Kumbakonam. The early range included Paladai, Uthirani, spoons, Maikoodu and other small articles, supplied to local jewellery shops.",
    image: "/images/people/rajamanikam.jpeg",
    caption: "Early traditional silver articles: holy water vessel with Uthirani."
  },
  {
    year: "1960s",
    title: "The Tradition Continues",
    description: "The next generation continued the family business and expanded the range to include Round and Oval Thatu, Sombhu, Kudams, Kuthu Villakku, Malayala Villakku and other traditional silver articles.",
    image: "/images/products/panjapathiram-with-uthirani.png",
    caption: "Traditional handcrafted Kuthu Villakku and devotional vessels."
  },
  {
    year: "1970s",
    title: "A Distinctive Product",
    description: "During the 1970s, the family manufactured the Varalakshmi Amman, which became one of its special products. Through dealers in Chennai, these products reached customers across Tamil Nadu, Karnataka, Andhra Pradesh and Kerala.",
    image: "/images/products/silver-kuthuvilaku.png ",
    caption: "Handcrafted Varalakshmi Amman silver face that defined our signature work."
  },
  {
    year: "Today",
    title: "Continuing the Work",
    description: "Today, the family continues to manufacture traditional silver products for temples, jewellery businesses, dealers and customers. Two manufacturing units in Kumbakonam carry forward the work that began in 1925.",
    image: "/images/products/amman-mugam-silver.png",
    caption: "Generations of family artisans working together in Kumbakonam."
  }
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'temple', label: 'Temple & Devotional' },
  { id: 'traditional', label: 'Traditional Silver Articles' },
  { id: 'lamps', label: 'Traditional Lamps' },
  { id: 'coins-custom', label: 'Silver Coins & Custom Work' }
] as const;

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "varalakshmi-amman-mugam",
    name: "Varalakshmi Amman Silver Face",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/amman-mugam-silver.png",
    aspectRatio: "portrait",
    description: "Signature handcrafted Varalakshmi Amman face created with traditional facial features and sacred ornamentation."
  },
  {
    id: "silver-kuthuvilaku",
    name: "Handcrafted Silver Kuthu Villakku",
    category: "lamps",
    categoryLabel: "Traditional Lamps",
    image: "/images/products/silver-kuthuvilaku.png",
    aspectRatio: "portrait",
    description: "Traditional ceremonial standing silver lamp pair crowned with prabhai finial motifs."
  },
  {
    id: "customizable-silver-kavasam",
    name: "Customizable Silver Kavasam",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/customizable-silver-kavasam.png",
    aspectRatio: "portrait",
    description: "Traditional embossed silver cladding created for temple sanctum murtis."
  },
  {
    id: "amman-gridam",
    name: "Amman Gridam (Crown)",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/amman-gridam-customizable-silver.png",
    aspectRatio: "portrait",
    description: "Traditional deity crown shaped for Goddess idols with intricate temple repoussé."
  },
  {
    id: "kudam-silver",
    name: "Traditional Silver Kudam",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/kudam-silver.png",
    aspectRatio: "portrait",
    description: "Spun and beaten silver water pot with classical proportions for temple abhishekams."
  },
  {
    id: "panjapathiram-with-uthirani",
    name: "Panjapathiram with Uthirani",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/panjapathiram-with-uthirani.png",
    aspectRatio: "square",
    description: "Ceremonial holy water vessel with accompanying spoon, part of our workshop's earliest 1925 work."
  },
  {
    id: "vinayagar-kavasam",
    name: "Vinayagar Kavasam Cladding",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/vinayagar-kavasam-customizable-silver.png",
    aspectRatio: "portrait",
    description: "Embossed silver deity armor fashioned to custom measurements for Lord Ganesha murtis."
  },
  {
    id: "gridam-silver",
    name: "Sacred Silver Deity Gridam",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/gridam-silver.png",
    aspectRatio: "landscape",
    description: "Handcrafted silver deity crown created for temple shrines across South India."
  },
  {
    id: "sivan-gridam",
    name: "Sivan Gridam Silver Crown",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/sivan-gridam-silver.png",
    aspectRatio: "portrait",
    description: "Silver deity crown hand-carved with traditional Lord Shiva iconographic motifs."
  },
  {
    id: "silver-sombhu-1",
    name: "Traditional Silver Sombhu",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-sombhu1.png",
    aspectRatio: "portrait",
    description: "Classical Kumbakonam-style silver vessel with flared rim and polished curvature."
  },
  {
    id: "silver-sombhu-2",
    name: "Fluted Silver Sombhu",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-sombhu-2.png",
    aspectRatio: "landscape",
    description: "Hand-turned silver sombhu featuring embossed ring accents and hand-polished surface."
  },
  {
    id: "silver-plate",
    name: "Traditional Thatu (Silver Plate)",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-plate.png",
    aspectRatio: "landscape",
    description: "Handmade silver plate designed for temple pooja offerings and auspicious family rituals."
  },
  {
    id: "silver-leaf-plate",
    name: "Embossed Silver Leaf Thatu",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-leaf-plate.png",
    aspectRatio: "landscape",
    description: "Traditional plantain-leaf inspired silver ceremonial platter with leaf vein engraving."
  },
  {
    id: "santhana-chimil",
    name: "Santhana Chimil (Sandal Container)",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/santhana-chimil-silver.png",
    aspectRatio: "portrait",
    description: "Traditional domed silver container for sacred sandalwood paste, kumkum, and vibhuti."
  },
  {
    id: "silver-mani",
    name: "Ceremonial Silver Mani (Pooja Bell)",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/silver-mani.png",
    aspectRatio: "portrait",
    description: "Traditional hand-cast silver pooja bell with sacred finial for temple rituals."
  },
  {
    id: "padi-silver",
    name: "Auspicious Silver Padi",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/padi-silver.png",
    aspectRatio: "square",
    description: "Traditional measure vessel crafted in pure silver, gifted during auspicious ceremonies."
  },
  {
    id: "silver-maraka",
    name: "Silver Maraka Vessel",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-maraka.png",
    aspectRatio: "portrait",
    description: "Traditional grain measure vessel wrought by hand according to century-old proportions."
  },
  {
    id: "silver-jadi",
    name: "Traditional Silver Jadi Urn",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-jadi.png",
    aspectRatio: "portrait",
    description: "Curved lidded silver storage urn made for sacred domestic poojas and temple offerings."
  },
  {
    id: "silver-jadi-1",
    name: "Silver Jadi Container (Model 1)",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-jadi-1.png",
    aspectRatio: "portrait",
    description: "Deep-drawn traditional silver urn with polished concentric lines."
  },
  {
    id: "silver-jadi-3",
    name: "Silver Jadi Container (Model 3)",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-jadi-3.png",
    aspectRatio: "landscape",
    description: "Sturdy lidded silver vessel showcasing clean joinery and rich lustrous finish."
  },
  {
    id: "silver-aruval",
    name: "Devotional Silver Aruval (Ayudham)",
    category: "coins-custom",
    categoryLabel: "Silver Coins & Custom Work",
    image: "/images/products/silver-aruval.png",
    aspectRatio: "portrait",
    description: "Traditional silver ayudham blade crafted for grama devata and temple requirements."
  },
  {
    id: "silver-valli",
    name: "Traditional Silver Valli",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-valli.png",
    aspectRatio: "portrait",
    description: "Ornamental silver container with hand-formed lid and delicate floral embossing."
  },
  {
    id: "pana-valli-silver",
    name: "Silver Pana Valli",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/pana-valli-silver.png",
    aspectRatio: "portrait",
    description: "Ritual silver cup handcrafted for ancestral ceremonies and deity offerings."
  },
  {
    id: "thirukaveri-silver",
    name: "Thirukaveri Silver Emblem",
    category: "coins-custom",
    categoryLabel: "Silver Coins & Custom Work",
    image: "/images/products/thirukaveri-silver.png",
    aspectRatio: "landscape",
    description: "Handcrafted silver emblem celebrating the Cauvery delta heritage of Kumbakonam."
  },
  {
    id: "customizable-panjapathiram",
    name: "Customizable Panjapathiram",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/customizable-panjapathiram.png",
    aspectRatio: "square",
    description: "Flared rim holy water vessel available in varied dimensions per temple specifications."
  }
];

export const MANUFACTURING_GALLERY: ManufacturingImage[] = [
  {
    id: "workshop-overview",
    title: "Inside the Workshop",
    caption: "Inside the Workshop",
    category: "machinery",
    image: "/images/manufacturing/workshop-overview.jpeg",
    description: "A wide look inside our Kumbakonam manufacturing unit with traditional machinery and workbenches.",
    highlight: true
  },
   {
    id: "lathe-spinning-tools",
    title: "Traditional Silver Work",
    caption: "Traditional Silver Work",
    category: "tools",
    image: "/images/manufacturing/lathe-spinning-tools.jpeg",
    description: "Metal spinning lathe, wooden moulds and tooling mandrels used for vessel shaping.",
    highlight: true
  },
  {
    id: "sheet-rolling-machine",
    title: "Tools of the Trade",
    caption: "Tools of the Trade",
    category: "machinery",
    image: "/images/manufacturing/sheet-rolling-machine.jpeg",
    description: "Heavy rolling mill turning raw silver sheets to exact gauge thicknesses for temple vessels.",
    highlight: true
  },
  {
    id: "artisan-machine-work",
    title: "Made in Kumbakonam",
    caption: "Made in Kumbakonam",
    category: "craftsmanship",
    image: "/images/manufacturing/artisan-machine-work.jpeg",
    description: "Master artisan adjusting the roller clearance wheel by hand for uniform silver tensile strength."
  },
  {
    id: "heritage-craftsmen",
    title: "Our Craftsmen",
    caption: "Our Craftsmen",
    category: "heritage",
    image: "/images/manufacturing/heritage-craftsmen-vintage.jpeg",
    description: "Family elders at the sheet rolling mill in Kumbakonam, continuing skills passed down since 1925.",
    highlight: true
  },
 
  {
    id: "workshop-shelves-moulds",
    title: "Tools of the Trade",
    caption: "Tools of the Trade",
    category: "tools",
    image: "/images/manufacturing/workshop-shelves-moulds.jpeg",
    description: "Shelves containing heirloom wooden chucks and bronze dies built over three generations."
  },
  {
    id: "hydraulic-press-machine",
    title: "Inside the Workshop",
    caption: "Inside the Workshop",
    category: "machinery",
    image: "/images/manufacturing/hydraulic-press-machine.jpeg",
    description: "Forming and stamping bay used for high-relief temple kavasams and Amman ornaments."
  },
  {
    id: "mfg-12",
    title: "Inside the Workshop",
    caption: "Inside the Workshop",
    category: "machinery",
    image: "/images/manufacturing/mfg-12.jpeg",
    description: "Traditional workbenches where hand-hammering and detailed silversmithing take place."
  },
  {
    id: "mfg-16",
    title: "Traditional Silver Work",
    caption: "Traditional Silver Work",
    category: "machinery",
    image: "/images/manufacturing/mfg-16.jpeg",
    description: "Active shaping bay on Mukkannar Street where sheet silver becomes sacred articles."
  },
  {
    id: "mfg-18",
    title: "Made in Kumbakonam",
    caption: "Made in Kumbakonam",
    category: "machinery",
    image: "/images/manufacturing/mfg-18.jpeg",
    description: "Secondary turning station supporting our two production units in Kumbakonam."
  }
];
