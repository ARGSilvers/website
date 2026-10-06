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
  description: string;
  highlight?: boolean;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  highlights?: string[];
  image?: string;
  caption?: string;
}

export const COMPANY_INFO = {
  name: "A.R.G SILVERS",
  tagline: "Traditional Silver Handicrafts",
  since: "1925",
  location: "Kumbakonam, Tamil Nadu",
  founder: "Rajamanikam",
  stats: "100+ Years · 3 Generations · Kumbakonam",
  phones: [
    { label: "+91 9952843287", href: "tel:+919952843287" },
    { label: "+91 9944654778", href: "tel:+919944654778" },
    { label: "+91 9087603033", href: "tel:+919087603033" }
  ],
  email: {
    label: "gajendrangnanasekaran@gmail.com",
    href: "mailto:gajendrangnanasekaran@gmail.com"
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
  generations: [
    {
      generation: "1st Generation (1925)",
      name: "Rajamanikam",
      role: "Founder & Master Craftsman",
      description: "Established the family workshop in Kumbakonam in 1925, handcrafting the very first Paladai, Uthirani, spoons, and Maikoodu supplied to local jewelers."
    },
    {
      generation: "2nd Generation",
      names: "Ganesan & Gnanasekaran",
      role: "Business Expansion & Amman Craft",
      description: "Expanded into large traditional vessels, Kuthu Villakku, Kudams, and introduced the signature Varalakshmi Amman faces in the 1970s."
    },
    {
      generation: "3rd Generation (Present)",
      names: "Ravindrakumar, Balakumar & Parthiban",
      role: "Current Custodians & Two Manufacturing Units",
      description: "Ganesan's sons (Ravindrakumar and Balakumar) and Gnanasekaran's son (Parthiban) carry forward the hundred-year legacy across two Kumbakonam units."
    }
  ],
  statesServed: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"],
  esteemedClients: [
    "GRT Jewellery",
    "Lalitha Jewellery",
    "Saravana Jewellery",
    "Gopal Das Diamond Merchants and Jewellery"
  ]
};

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "1925",
    title: "Where It Started",
    description: "Rajamanikam began making traditional silver products by hand in Kumbakonam. The early range included Paladai, Uthirani, spoons, Maikoodu and other small articles. These were supplied to jewellery shops in Kumbakonam.",
    highlights: ["Handcrafted in Kumbakonam", "Paladai & Uthirani specialists", "Supplied to local jewellery houses"]
  },
  {
    year: "1960s",
    title: "The Range Grows",
    description: "The family continued the business and expanded the range of traditional silver products. We began making Round and Oval Thatu, Sombhu, Kudams, Kuthu Villakku, Malayala Villakku and other traditional articles by hand.",
    highlights: ["Vessels & Dining Plates (Thatu)", "Kudams & Sombhu", "Traditional Kuthu & Malayala Villakku"]
  },
  {
    year: "1970s",
    title: "A Product That Became Our Identity",
    description: "During the 1970s, we began manufacturing the Varalakshmi Amman. It became one of our special products and was supplied to dealers in Chennai. Through these dealers, our products reached customers across Tamil Nadu, Karnataka, Andhra Pradesh and Kerala.",
    highlights: ["Varalakshmi Amman craftsmanship", "Chennai dealer network", "Reach across 4 South Indian states"],
    image: "/images/products/amman-mugam-silver.png",
    caption: "The handcrafted Varalakshmi Amman face that shaped our legacy."
  },
  {
    year: "Today",
    title: "Continuing the Same Work",
    description: "Today, we continue to make traditional silver products for temples, jewellery businesses, dealers and individual customers. The family operates two manufacturing units in Kumbakonam, continuing the work that began with our grandfather more than 100 years ago.",
    highlights: ["Two active manufacturing units", "Third generation master artisans", "Supplying premier jewellery brands"],
    image: "/images/manufacturing/heritage-craftsmen-vintage.jpeg",
    caption: "Generations of family artisans working with traditional machinery in Kumbakonam."
  }
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'temple', label: 'Temple & Devotional' },
  { id: 'traditional', label: 'Traditional Silver Articles' },
  { id: 'lamps', label: 'Traditional Lamps' },
  { id: 'coins-custom', label: 'Custom & Ritual Silver' }
] as const;

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "varalakshmi-amman-mugam",
    name: "Varalakshmi Amman Silver Face",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/amman-mugam-silver.png",
    aspectRatio: "portrait",
    description: "Our signature heirloom Varalakshmi Amman face, crafted with intricate facial ornamentation and traditional divine countenance."
  },
  {
    id: "silver-kuthuvilaku",
    name: "Handcrafted Silver Kuthu Villakku",
    category: "lamps",
    categoryLabel: "Traditional Lamps",
    image: "/images/products/silver-kuthuvilaku.png",
    aspectRatio: "portrait",
    description: "Classic pair of multi-tiered ceremonial silver lamps crowned with traditional prabhai motifs for sanctums and ancestral homes."
  },
  {
    id: "customizable-silver-kavasam",
    name: "Customizable Silver Kavasam",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/customizable-silver-kavasam.png",
    aspectRatio: "portrait",
    description: "High-relief silver armour cladding made for temple deities, featuring intricate floral and repoussé embossing."
  },
  {
    id: "amman-gridam",
    name: "Amman Gridam (Crown)",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/amman-gridam-customizable-silver.png",
    aspectRatio: "portrait",
    description: "Ornate silver crown tailored for Goddess idols, sculpted with traditional South Indian architectural tiers."
  },
  {
    id: "kudam-silver",
    name: "Traditional Silver Kudam",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/kudam-silver.png",
    aspectRatio: "portrait",
    description: "Spun and beaten silver water pot with pure geometric proportions, essential for temple abhishekams and sacred rituals."
  },
  {
    id: "panjapathiram-with-uthirani",
    name: "Panjapathiram with Uthirani",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/panjapathiram-with-uthirani.png",
    aspectRatio: "square",
    description: "Handcrafted holy water vessel with accompanying ceremonial spoon (Uthirani), one of our workshop's founding 1925 articles."
  },
  {
    id: "vinayagar-kavasam",
    name: "Vinayagar Kavasam Cladding",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/vinayagar-kavasam-customizable-silver.png",
    aspectRatio: "portrait",
    description: "Artisan embossed silver armor specifically shaped for Lord Ganesha murtis, built with custom dimensions."
  },
  {
    id: "gridam-silver",
    name: "Sacred Silver Deity Gridam",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/gridam-silver.png",
    aspectRatio: "landscape",
    description: "Detailed crown with fine repoussé chasing, created for sanctum murtis across Tamil Nadu and South Indian temples."
  },
  {
    id: "sivan-gridam",
    name: "Sivan Gridam Silver Crown",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/sivan-gridam-silver.png",
    aspectRatio: "portrait",
    description: "Revered silver crown crafted for Lord Shiva deities with crescent moon and sacred iconographic carvings."
  },
  {
    id: "silver-sombhu-1",
    name: "Classic Silver Sombhu",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-sombhu1.png",
    aspectRatio: "portrait",
    description: "Traditional Kumbakonam-style silver vessel with flared rim and polished curvature, made from virgin silver sheet."
  },
  {
    id: "silver-sombhu-2",
    name: "Fluted Silver Sombhu",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-sombhu-2.png",
    aspectRatio: "landscape",
    description: "Artisan-turned silver sombhu featuring embossed floral ring accents and high mirror polish finish."
  },
  {
    id: "silver-plate",
    name: "Traditional Thatu (Silver Plate)",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-plate.png",
    aspectRatio: "landscape",
    description: "Substantial silver plate designed for devotional offerings, ceremonial poojas, and auspicious family occasions."
  },
  {
    id: "silver-leaf-plate",
    name: "Embossed Silver Leaf Thatu",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-leaf-plate.png",
    aspectRatio: "landscape",
    description: "Plantain-leaf inspired ceremonial silver serving plate with finely engraved vein textures and decorative rim."
  },
  {
    id: "santhana-chimil",
    name: "Santhana Chimil (Sandal Container)",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/santhana-chimil-silver.png",
    aspectRatio: "portrait",
    description: "Decorative silver pot with snug domed lid for holding sacred sandalwood paste, kumkum, and vibhuti."
  },
  {
    id: "silver-mani",
    name: "Ceremonial Silver Mani (Pooja Bell)",
    category: "temple",
    categoryLabel: "Temple & Devotional",
    image: "/images/products/silver-mani.png",
    aspectRatio: "portrait",
    description: "Resonant hand bell cast and turned in silver, surmounted by a traditional sacred finial."
  },
  {
    id: "padi-silver",
    name: "Auspicious Silver Padi",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/padi-silver.png",
    aspectRatio: "square",
    description: "Traditional grain measure crafted in pure silver, gifted during weddings and housewarmings as a symbol of abundance."
  },
  {
    id: "silver-maraka",
    name: "Silver Maraka Vessel",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-maraka.png",
    aspectRatio: "portrait",
    description: "Heritage measuring cylinder vessel wrought by hand, echoing century-old Thanjavur metalcraft standards."
  },
  {
    id: "silver-jadi",
    name: "Traditional Silver Jadi Urn",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-jadi.png",
    aspectRatio: "portrait",
    description: "Curved silver storage jar with snug lid, made for storing temple holy offerings and domestic heirloom essentials."
  },
  {
    id: "silver-jadi-1",
    name: "Silver Jadi Container (Model 1)",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-jadi-1.png",
    aspectRatio: "portrait",
    description: "Deep-drawn traditional silver urn with polished concentric lines and classic Kumbakonam bell silhouette."
  },
  {
    id: "silver-jadi-3",
    name: "Silver Jadi Container (Model 3)",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-jadi-3.png",
    aspectRatio: "landscape",
    description: "Sturdy lidded silver vessel showcasing clean joinery and rich lustrous hand polish."
  },
  {
    id: "silver-aruval",
    name: "Devotional Silver Aruval (Ayudham)",
    category: "coins-custom",
    categoryLabel: "Custom & Ritual Silver",
    image: "/images/products/silver-aruval.png",
    aspectRatio: "portrait",
    description: "Temple Ayudham blade crafted in solid silver for grama devata temples and ritual deity adornments."
  },
  {
    id: "silver-valli",
    name: "Traditional Silver Valli",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/silver-valli.png",
    aspectRatio: "portrait",
    description: "Ornamental silver container with hand-formed lid and fine floral engraving on the base and rim."
  },
  {
    id: "pana-valli-silver",
    name: "Silver Pana Valli",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/pana-valli-silver.png",
    aspectRatio: "portrait",
    description: "Heirloom ritual cup handcrafted for ancestral ceremonies and domestic deity offerings."
  },
  {
    id: "thirukaveri-silver",
    name: "Thirukaveri Silver Emblem",
    category: "coins-custom",
    categoryLabel: "Custom & Ritual Silver",
    image: "/images/products/thirukaveri-silver.png",
    aspectRatio: "landscape",
    description: "Handmade sacred silver emblem celebrating the Cauvery delta heritage of Kumbakonam."
  },
  {
    id: "customizable-panjapathiram",
    name: "Customizable Panjapathiram",
    category: "traditional",
    categoryLabel: "Traditional Silver Articles",
    image: "/images/products/customizable-panjapathiram.png",
    aspectRatio: "square",
    description: "Plain flared rim holy water vessel available in varied gauge weights according to customer specifications."
  }
];

export const MANUFACTURING_GALLERY: ManufacturingImage[] = [
  {
    id: "workshop-overview",
    title: "The Kumbakonam Workshop",
    category: "machinery",
    image: "/images/manufacturing/workshop-overview.jpeg",
    description: "A comprehensive look inside Unit 01 with spinning lathes, sheet rollers, and hydraulic stamping systems operated daily.",
    highlight: true
  },
  {
    id: "sheet-rolling-machine",
    title: "Heavy Silver Sheet Rolling Mill",
    category: "machinery",
    image: "/images/manufacturing/sheet-rolling-machine.jpeg",
    description: "Precision steel rolling cylinders transforming raw molten silver ingots into uniform sheets of exact gauge thickness.",
    highlight: true
  },
  {
    id: "amman-die-scale",
    title: "Weighing the Handcrafted Amman Face",
    category: "craftsmanship",
    image: "/images/manufacturing/amman-die-scale.jpg",
    description: "Every piece is calibrated for precision purity and exact weight (114.29g) following traditional embossing on master dies.",
    highlight: true
  },
  {
    id: "lathe-spinning-tools",
    title: "Traditional Metal Spinning Lathe & Wooden Moulds",
    category: "tools",
    image: "/images/manufacturing/lathe-spinning-tools.jpeg",
    description: "Ancient wooden and cast moulds aligned with precision spin tooling used to form vessels, sombhus, and kuthu vilakkus.",
    highlight: true
  },
  {
    id: "heritage-craftsmen",
    title: "Generations of Craftsmanship",
    category: "heritage",
    image: "/images/manufacturing/heritage-craftsmen-vintage.jpeg",
    description: "Archival record of the family elders at the rolling machine in Kumbakonam, continuing knowledge inherited since 1925.",
    highlight: true
  },
  {
    id: "artisan-machine-work",
    title: "Precision Calibration at the Rolling Mill",
    category: "craftsmanship",
    image: "/images/manufacturing/artisan-machine-work.jpeg",
    description: "Master artisan adjusting the roller clearance wheel by hand, ensuring consistent silver grain structure and tensile strength."
  },
  {
    id: "workshop-shelves-moulds",
    title: "Heirloom Moulds & Dies Collection",
    category: "tools",
    image: "/images/manufacturing/workshop-shelves-moulds.jpeg",
    description: "Shelves holding hundred-year-old wooden chucks, cast bronze dies, and specialized templates crafted over three generations."
  },
  {
    id: "hydraulic-press-machine",
    title: "Hydraulic Stamping & Forming Press",
    category: "machinery",
    image: "/images/manufacturing/hydraulic-press-machine.jpeg",
    description: "Heavy tonnage press used for embossing deep-relief temple motifs, kavasams, and Varalakshmi Amman features."
  },
  {
    id: "mfg-08",
    title: "Precision Die Fixtures",
    category: "tools",
    image: "/images/manufacturing/mfg-08.jpeg",
    description: "Tooling accessories and lathe mandrels utilized in turning concentric silver lids, plates, and ornamental rim details."
  },
  {
    id: "mfg-12",
    title: "Workshop Environment & Tooling Benches",
    category: "machinery",
    image: "/images/manufacturing/mfg-12.jpeg",
    description: "The working heartbeat of our Kumbakonam workshop where traditional hammering is complemented by mechanical precision."
  },
  {
    id: "mfg-16",
    title: "Metal Stamping & Shaping Bay",
    category: "machinery",
    image: "/images/manufacturing/mfg-16.jpeg",
    description: "The primary fabrication bay where sheet silver is transformed into sacred temple articles."
  },
  {
    id: "mfg-18",
    title: "Secondary Turning Station",
    category: "machinery",
    image: "/images/manufacturing/mfg-18.jpeg",
    description: "Dedicated turning station supporting our two production units on Mukkannar Street, Kumbakonam."
  }
];
