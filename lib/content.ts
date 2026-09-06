export type Lang = "en" | "zh";

export type Product = {
  img: string;
  tag: { en: string; zh: string };
  name: { en: string; zh: string };
  sub: { en: string; zh: string };
  desc: { en: string; zh: string };
  origin: { en: string; zh: string };
  tall?: boolean;
};

export const products: Product[] = [
  {
    img: "blue-lobster",
    tall: true,
    tag: { en: "Signature", zh: "招牌" },
    name: { en: "European Blue Lobster", zh: "欧洲蓝龙虾" },
    sub: { en: "Homarus gammarus", zh: "招牌之选" },
    origin: { en: "Ireland · UK", zh: "爱尔兰 · 英国" },
    desc: {
      en: "Cold-water caught, deep blue-black shell, firm sweet meat. The centrepiece of any fine table — and the product we built the company on.",
      zh: "冷水深海生长，蓝黑色甲壳，肉质紧实弹牙，甜度与鲜度兼备，是高端餐桌的主角。",
    },
  },
  {
    img: "boston-lobster",
    tag: { en: "Classic", zh: "经典" },
    name: { en: "Boston Lobster", zh: "波士顿龙虾" },
    sub: { en: "Homarus americanus", zh: "经典之选" },
    origin: { en: "Canada · USA", zh: "加拿大 · 美国" },
    desc: {
      en: "Heavy meaty claws and generous yield — the versatile classic for grilling, steaming or lobster pasta.",
      zh: "大钳肥美，肉量充足，焗、蒸、意面皆宜的经典之选。",
    },
  },
  {
    img: "brown-crab",
    tag: { en: "Rich Roe", zh: "膏黄丰腴" },
    name: { en: "Brown Crab", zh: "面包蟹" },
    sub: { en: "Cancer pagurus", zh: "老饕心头好" },
    origin: { en: "UK · Ireland", zh: "英国 · 爱尔兰" },
    desc: {
      en: "Full-bodied with deep, buttery brown meat and rich roe — a connoisseur's favourite.",
      zh: "蟹身饱满，蟹膏丰腴，浓郁蟹黄是老饕心头好。",
    },
  },
  {
    img: "toothfish",
    tag: { en: "MSC", zh: "MSC 认证" },
    name: { en: "Toothfish", zh: "犬牙鱼" },
    sub: { en: "Chilean sea bass", zh: "智利海鲈" },
    origin: { en: "Antarctic · Chile", zh: "南极 · 智利" },
    desc: {
      en: "Deep cold-water fish, silky with fat, melts on the tongue. Available in ready-to-cook retail portions.",
      zh: "深海冷水鱼，油脂丰盈，入口即化，可即食零售规格供应。",
    },
  },
  {
    img: "salmon",
    tag: { en: "Cold Water", zh: "冷水海域" },
    name: { en: "Atlantic Salmon", zh: "冰鲜三文鱼" },
    sub: { en: "Salmo salar", zh: "生熟两宜" },
    origin: { en: "Norway · Faroe", zh: "挪威 · 法罗" },
    desc: {
      en: "Clean marbling and even fat — equally at home raw or cooked.",
      zh: "纹理清晰，油花均匀，生食熟制两相宜。",
    },
  },
  {
    img: "tiger-prawn",
    tag: { en: "Wild", zh: "野生" },
    name: { en: "Tiger Prawn", zh: "大虎虾" },
    sub: { en: "Penaeus monodon", zh: "白灼见真章" },
    origin: { en: "South America", zh: "南美" },
    desc: {
      en: "Large and plump, with a crisp, sweet bite — at its best simply blanched.",
      zh: "个头饱满，虾肉爽脆回甜，白灼最见真章。",
    },
  },
  {
    img: "coral-trout",
    tag: { en: "Premium", zh: "臻品" },
    name: { en: "Coral Trout", zh: "红斑 · 星斑" },
    sub: { en: "Plectropomus", zh: "清蒸本味" },
    origin: { en: "Deep sea", zh: "深海" },
    desc: {
      en: "Vivid red, fine-textured and near boneless — steam it to let the flavour speak.",
      zh: "体色艳红，肉质细嫩少刺，清蒸尽显本味。",
    },
  },
  {
    img: "wagyu",
    tag: { en: "Marbled", zh: "雪花" },
    name: { en: "Wagyu Beef", zh: "雪花和牛" },
    sub: { en: "Beyond the sea", zh: "海鲜之外" },
    origin: { en: "Australia", zh: "澳洲" },
    desc: {
      en: "Snow-white marbling, rich on the palate — our premium selection beyond the sea.",
      zh: "油花如雪，入口丰腴，为海鲜之外的臻选之选。",
    },
  },
];

type Dict = {
  meta: { title: string; description: string };
  nav: { story: string; products: string; quality: string; channels: string; contact: string };
  hero: { eyebrow: string; titleLines: string[]; lede: string; sub: string; ctaProducts: string; ctaContact: string; scroll: string };
  stats: { value: string; label: string; sub: string }[];
  story: { eyebrow: string; titleZh: string; titleEn: string; p: string[]; badgeNum: string; badgeCap: string };
  products: { eyebrow: string; title: string; lead: string };
  quality: { eyebrow: string; title: string; lead: string; items: { title: string; desc: string }[] };
  assure: { eyebrow: string; title: string; items: { title: string; desc: string }[] };
  channels: { eyebrow: string; title: string; items: { n: string; title: string; desc: string }[] };
  band: { kicker: string; title: string; p: string; cta: string };
  contact: {
    eyebrow: string; title: string;
    phoneK: string; phoneV: string;
    emailK: string; emailV: string;
    locK: string; locV: string;
    brandK: string; brandV: string;
    fName: string; fNameP: string;
    fPhone: string; fPhoneP: string;
    fInterest: string; fInterestP: string;
    fMsg: string; fMsgP: string;
    submit: string; sent: string;
  };
  footer: { tagline: string; nav: string; cats: string; partner: string; rights: string; motto: string };
  langLabel: string;
};

export const dict: Record<Lang, Dict> = {
  en: {
    meta: {
      title: "WAYTOP · Live Seafood, From the Deep Sea",
      description:
        "WAYTOP (蔚道商贸) — direct supply of live European blue lobster, Boston lobster, brown crab, toothfish and more. 100% live shipping, 98% survival rate, next-day cold-chain delivery, full customs clearance.",
    },
    nav: { story: "Our Story", products: "Selection", quality: "Standards", channels: "Partnership", contact: "Contact" },
    hero: {
      eyebrow: "Live Seafood Direct Supply · Since 2015",
      titleLines: ["From the deep sea,", "alive to your table"],
      lede: "Live seafood, direct from the source.",
      sub: "WAYTOP controls the core blue-lobster supply chain across the UK and Ireland, moving Europe's finest cold-water seafood alive, by the shortest possible route, to China's finest hotels, restaurants and tables.",
      ctaProducts: "Explore the Selection",
      ctaContact: "Talk Partnership",
      scroll: "Scroll",
    },
    stats: [
      { value: "100%", label: "Live Shipping", sub: "Guaranteed" },
      { value: "98%", label: "Survival Rate", sub: "In transit" },
      { value: "90%", label: "UK & Ireland", sub: "Supply chain" },
      { value: "24h", label: "Next-Day", sub: "Cold chain" },
    ],
    story: {
      eyebrow: "Our Story",
      titleZh: "A decade, one lobster,",
      titleEn: "all the way to the source",
      p: [
        "WAYTOP was founded in 2015, built around a single obsession: the European blue lobster. Drawing on our founder's years studying and working in Ireland, the company came to control roughly **ninety percent of the blue-lobster supply chain** across the UK and Ireland — securing both consistency and quality at the source.",
        "It began with a first order for the Peninsula Hotel Shanghai. From there we grew from high-end Western kitchens into premium Chinese dining and specialist retail, holding around **eighty percent of the market** in this niche.",
        "We don't trade as middlemen. We run the shortest, freshest line from origin to table — backed by a research partnership with Shanghai Ocean University, so the flavour and quality of every product is something we can prove.",
      ],
      badgeNum: "2015",
      badgeCap: "At the source ever since",
    },
    products: {
      eyebrow: "The Selection",
      title: "Alive, from cold-water seas",
      lead: "Every one customs-cleared and quarantine-certified, arriving alive with the cold and freshness of the deep sea still on it.",
    },
    quality: {
      eyebrow: "The Standard",
      title: "Alive is the only promise we make",
      lead: "From source to table, every step answers to one word: alive.",
      items: [
        { title: "100% Live Shipping", desc: "We ship live, with a 98% survival rate in transit. Please inspect on arrival." },
        { title: "Full Customs & Quarantine", desc: "Every shipment carries customs declarations and quarantine certificates — fully traceable." },
        { title: "Next-Day Cold Chain", desc: "Unbroken cold chain, dispatched same-day to next-day cities, locking in deep-sea freshness." },
        { title: "Direct-Controlled Supply", desc: "We hold the core UK & Ireland blue-lobster chain, with research from Shanghai Ocean University." },
      ],
    },
    assure: {
      eyebrow: "Handling Notes",
      title: "So it arrives exactly as alive as it left",
      items: [
        { title: "Inspect on arrival", desc: "Please check live seafood on delivery. In the rare case of a dead specimen, film it while the courier is present and contact us." },
        { title: "Water loss is normal", desc: "Seafood expels water in transit; expect around 10% weight loss on arrival — this is normal." },
        { title: "Store it right", desc: "If a live lobster isn't cooked immediately, rest it on a damp towel in the fridge (0–4°C)." },
        { title: "Cook it soon", desc: "For the best texture and flavour, cook and enjoy as soon as possible. Freshness waits for no one." },
      ],
    },
    channels: {
      eyebrow: "Partnership",
      title: "For people who care about quality",
      items: [
        { n: "01", title: "Hotels & Fine Dining", desc: "Stable, live, fully traceable seafood supply for five-star hotels and premium Chinese and Western restaurants." },
        { n: "02", title: "Premium Retail", desc: "Retail formats and packaged products that bring top-tier seafood to more discerning home tables." },
        { n: "03", title: "Distribution & Wholesale", desc: "A growing dealer network into second- and third-tier cities, sharing the stability and pricing of a source-controlled chain." },
      ],
    },
    band: {
      kicker: "Let's talk seafood.",
      title: "Bring the freshness of the source to your table",
      p: "Whether you're a hotel buyer, a restaurant partner or a distributor, we'll match you with the freshest product and the most reliable supply, for the long term.",
      cta: "Start the Conversation",
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk Partnership",
      phoneK: "Phone / WeChat", phoneV: "Send the form and we'll be in touch shortly",
      emailK: "Email", emailV: "info@waytop.com",
      locK: "Location", locV: "Shanghai, China",
      brandK: "Brand", brandV: "WAYTOP · Trademark 2026",
      fName: "Name", fNameP: "Your name / company",
      fPhone: "Phone / WeChat", fPhoneP: "Phone or WeChat ID",
      fInterest: "Interest", fInterestP: "Hotel supply / restaurant / distribution",
      fMsg: "Message", fMsgP: "Tell us briefly what you need",
      submit: "Send Enquiry", sent: "Received — we'll be in touch",
    },
    footer: {
      tagline: "A source-controlled importer of live global seafood — running only the shortest line from origin to table.",
      nav: "Navigate", cats: "Selection", partner: "Partnership",
      rights: "© 2026 WAYTOP. All rights reserved.",
      motto: "Live seafood direct supply · From the deep sea, alive to your table.",
    },
    langLabel: "中文",
  },

  zh: {
    meta: {
      title: "蔚道商贸 WAYTOP · 全球鲜活海鲜直供",
      description:
        "蔚道商贸 WAYTOP — 欧洲蓝龙虾、波士顿龙虾、面包蟹、犬牙鱼等全球鲜活海鲜直供。100% 鲜活发货，98% 成活率，顺丰次日达，报关检疫齐全。",
    },
    nav: { story: "品牌故事", products: "臻选品类", quality: "品质保障", channels: "合作渠道", contact: "联系我们" },
    hero: {
      eyebrow: "全球鲜活海鲜直供 · 始于 2015",
      titleLines: ["从深海到餐桌", "只为一口鲜活"],
      lede: "产地直采，全程鲜活。",
      sub: "蔚道商贸掌握英国及爱尔兰蓝龙虾核心供应链，将欧洲冷水海域的顶级鲜活海鲜，以最短的路径送达中国的星级酒店、高端餐饮与讲究的餐桌。",
      ctaProducts: "浏览臻选品类",
      ctaContact: "洽谈合作",
      scroll: "下滑",
    },
    stats: [
      { value: "100%", label: "鲜活发货", sub: "全程保障" },
      { value: "98%", label: "运输成活率", sub: "行业领先" },
      { value: "90%", label: "英爱蓝龙虾", sub: "核心供应链" },
      { value: "24h", label: "顺丰次日达", sub: "全程冷链" },
    ],
    story: {
      eyebrow: "品牌故事",
      titleZh: "十年一虾，",
      titleEn: "只做源头",
      p: [
        "蔚道商贸创立于 2015 年，专注欧洲蓝龙虾项目。凭借创始人在爱尔兰求学、工作的语言与人脉优势，公司逐步掌握了**英国与爱尔兰约九成的蓝龙虾供应链**，从源头确保货源的稳定与品质。",
        "从上海半岛酒店的第一单开始，我们将业务从高端西餐延伸至中式高端餐饮与精品商超，在这一细分品类中占据约**八成的市场份额**。",
        "我们不做中间商的生意，只做产地到餐桌的那条最短、最鲜的路。与上海海洋大学的科研合作，让我们对每一种产品的风味与品质，都有据可依。",
      ],
      badgeNum: "2015",
      badgeCap: "深耕源头至今",
    },
    products: {
      eyebrow: "臻选品类",
      title: "来自冷水海域的鲜活",
      lead: "每一只都经过报关检疫，带着深海的低温与鲜度，鲜活抵达。",
    },
    quality: {
      eyebrow: "品质保障",
      title: "鲜活，是我们唯一的承诺",
      lead: "从源头到餐桌，每一个环节都为“鲜活”二字负责。",
      items: [
        { title: "100% 鲜活发货", desc: "承诺鲜活发货，运输成活率达 98%，收货请当场验货。" },
        { title: "报关检疫齐全", desc: "每批货物均配备海关报关单与检验检疫证明，来源可溯。" },
        { title: "顺丰冷链次日达", desc: "全程冷链，顺丰次日可达的城市当日发运，锁住深海鲜度。" },
        { title: "产地直控供应", desc: "掌握英爱蓝龙虾核心供应链，与上海海洋大学科研共研。" },
      ],
    },
    assure: {
      eyebrow: "收货须知",
      title: "让鲜活，如实抵达",
      items: [
        { title: "当场验货", desc: "鲜活水产请务必当场验货；如遇死亡，请在送货员在场时拍摄产品视频并联系客服。" },
        { title: "正常吐水", desc: "运输途中海鲜会有吐水现象，收货后约有 10% 的失水率，属正常情况。" },
        { title: "妥善暂存", desc: "鲜活龙虾如未及时食用，可在下方垫湿毛巾，放入冰箱冷藏室（0–4℃）保存。" },
        { title: "尽快食用", desc: "为保证口感与品质，收货后请尽快烹制食用，鲜度不等人。" },
      ],
    },
    channels: {
      eyebrow: "合作渠道",
      title: "与讲究的人同行",
      items: [
        { n: "01", title: "星级酒店与高端餐饮", desc: "为五星酒店、高端中西餐厅提供稳定、鲜活、可溯源的海鲜食材直供。" },
        { n: "02", title: "精品商超与零售", desc: "提供零售规格与包装产品，让顶级海鲜进入更多讲究品质的家庭餐桌。" },
        { n: "03", title: "经销与批发", desc: "面向二三线城市拓展经销商网络，共享源头供应链的稳定与价格优势。" },
      ],
    },
    band: {
      kicker: "谈谈合作。",
      title: "把源头的鲜活，交给蔚道",
      p: "无论是酒店采购、餐饮合作，还是经销分销，我们都愿以最鲜活的产品与最稳定的供应，与您长期同行。",
      cta: "立即洽谈合作",
    },
    contact: {
      eyebrow: "联系我们",
      title: "洽谈合作",
      phoneK: "电话 / 微信", phoneV: "请填写表单，我们将尽快与您联系",
      emailK: "邮箱", emailV: "info@waytop.com",
      locK: "所在地", locV: "中国 · 上海",
      brandK: "品牌", brandV: "蔚道商贸 · 商标注册 2026",
      fName: "称呼", fNameP: "您的姓名 / 公司",
      fPhone: "联系方式", fPhoneP: "电话或微信号",
      fInterest: "合作类型", fInterestP: "酒店采购 / 餐饮合作 / 经销批发",
      fMsg: "留言", fMsgP: "请简述您的需求",
      submit: "提交合作意向", sent: "已收到，我们会尽快联系您",
    },
    footer: {
      tagline: "掌握源头供应链的全球鲜活海鲜直供商，只做产地到餐桌的最短一程。",
      nav: "导航", cats: "品类", partner: "合作",
      rights: "© 2026 蔚道商贸 WAYTOP. 保留所有权利。",
      motto: "全球鲜活海鲜直供 · 从深海到餐桌，只为一口鲜活。",
    },
    langLabel: "EN",
  },
};
