// ============================================================
// SITE SETTINGS - edit these values, nothing else needs to change.
// ============================================================
window.SITE = {
  name: "Congress Trade Detective",
  tagline: "Every STOCK Act trade, tracked.",
  email: "hal@congresstradedetective.com",

  // Live tracker URL. Leave "" to show "launching soon" instead of an Open button.
  // Example once the app is published here: "/app/"
  appUrl: "",

  // Store links. Leave "" to hide each badge.
  // When Apple approves the app, paste its App Store URL into appStore: every iPad/app link and status label updates automatically.
  // Congress Trade Detective listing (App ID 6817971302): "https://apps.apple.com/us/app/id6817971302"
  appStore: "",
  playStore: "",

  social: {
    youtube: "https://www.youtube.com/@congresstradedetective",
    tiktok: "",
    x: ""
  },

  // MERCH (/shop/). Paste your print-on-demand store URL (Fourthwall, Printful/Shopify, Spring...).
  // Leave storeUrl "" to show "Merch drop coming soon".
  merch: {
    storeUrl: "",
    // Featured items. Each: { name, price, image (full URL or path), url (product link) }
    // Optional: options ("S-3XL · Black, Navy"), note (e.g. "Coming soon")
    // PLACEHOLDERS below - replace image/price/url/options with the real Printify listings.
    products: [
      { name: "Pelosi Act Tee", price: "From $32.99", url: "", note: "Coming soon",
        brand: "Comfort Colors 1717", options: "Sizes S-4XL",
        image: "../assets/img/merch/tee-pelosi-navy.webp",
        // colors: [label, image]. Clicking a swatch swaps the card photo.
        colors: [["True Navy", "../assets/img/merch/tee-pelosi-navy.webp"], ["Black", "../assets/img/merch/tee-pelosi-black.webp"],
                 ["Pepper", "../assets/img/merch/tee-pelosi-pepper.webp"], ["Graphite", "../assets/img/merch/tee-pelosi-graphite.webp"],
                 ["Red", "../assets/img/merch/tee-pelosi-red.webp"], ["Seafoam", "../assets/img/merch/tee-pelosi-seafoam.webp"],
                 ["Ivory", "../assets/img/merch/tee-pelosi-ivory.webp"], ["White", "../assets/img/merch/tee-pelosi-white.webp"]],
        sizeChart: "../assets/img/merch/tee-pelosi-sizechart.webp",
        description: "Soft, slubby, and lived-in \u2014 this garment-dyed tee carries a warm, tactile feel that invites you to wear it again and again. The front art shows a playful, cartoon-style robot and investigator under the line \u201cCONGRESS TRADE DETECTIVE,\u201d giving the shirt a cheeky, curious personality. Lightweight but substantial, the heavyweight cotton holds its shape while the relaxed fit and pre-shrunk fabric make it easy to layer or wear solo. Pick a color that feels like you; the dye-after-construction finish gives each shirt a unique, slightly vintage hue that deepens with time and wear. This is a quietly bold piece for people who like to spark conversation with clever graphics and a comfortable, slow-worn look.",
        features: ["100% ring-spun US cotton \u2014 soft, durable, pre-shrunk", "Garment-dyed finish for a vintage, lived-in color and texture",
                   "Heavyweight 6.1 oz fabric with relaxed, comfortable fit", "Tubular knit (no side seams) and double-needle stitching for durability",
                   "Size range S\u20134XL; sewn-in label",
                   "Prices (vary by color): S $32.99\u201333.99 \u00b7 M $33.99\u201334.99 \u00b7 L $33.99\u201334.99 \u00b7 XL $32.99\u201334.99 \u00b7 2XL $33.99\u201335.99 \u00b7 3XL $32.99\u201338.99 \u00b7 4XL $32.99\u201339.99"],
        care: ["Machine wash: cold (max 30C or 90F)", "Do not bleach", "Tumble dry: low heat", "Iron, steam or dry: low heat", "Do not dryclean"] },
      { name: "Crewneck Sweatshirt", price: "From $41.36", url: "", note: "Coming soon",
        brand: "Comfort Colors 1466", options: "Sizes S-3XL",
        image: "../assets/img/merch/sweat-white.webp",
        colors: [["White", "../assets/img/merch/sweat-white.webp"], ["Ivory", "../assets/img/merch/sweat-ivory.webp"],
                 ["Brown", "../assets/img/merch/sweat-brown.webp"], ["Charcoal", "../assets/img/merch/sweat-charcoal.webp"],
                 ["Blue", "../assets/img/merch/sweat-blue.webp"], ["Navy", "../assets/img/merch/sweat-navy.webp"]],
        sizeChart: "../assets/img/merch/sweat-sizechart.webp",
        description: "This lightweight crewneck sweatshirt carries a bold, tongue-in-cheek badge-style print centered on the chest. The artwork combines playful, vintage poster vibes with bright colors and a character-focused motif that reads like an ID card \u2014 it feels like a wink and a statement all at once. Wear it as a conversation starter during casual outings, rallies, or days when you want your wardrobe to show personality without shouting. The relaxed silhouette and soft ring-spun cotton keep the mood easy and comfortable, so the print takes center stage while you stay cozy. Soft, breathable fabric makes this sweatshirt easy to layer under a jacket or over a tee. The ribbed cuffs and hem give it a neat, secure fit that holds up to everyday movement. Clean, tubular construction keeps the sides smooth and the look streamlined. This piece works well for someone who likes graphic apparel with a retro-graphic feel and a touch of irreverence \u2014 wear it on weekends, at meetups, or whenever you want a relaxed piece that sparks a reaction.",
        features: ["100% ring-spun cotton for a smooth, durable print surface", "Lightweight fabric (6.4 oz/yd\u00b2) \u2014 breathable and easy to layer",
                   "1x1 ribbed cuffs and bottom hem for stretch-and-recovery fit", "Tubular (no side seams) construction for a clean, streamlined look",
                   "Shoulder and neck twill tape plus sewn-in label for added stability and comfort",
                   "Prices: S $41.36 \u00b7 M $43.68 \u00b7 L $44.01 \u00b7 XL $44.07 \u00b7 2XL $49.19 \u00b7 3XL $56.44",
                   "Width (in): S 20 \u00b7 M 22 \u00b7 L 24 \u00b7 XL 26 \u00b7 2XL 28 \u00b7 3XL 30",
                   "Length (in): S 27 \u00b7 M 28 \u00b7 L 29 \u00b7 XL 30 \u00b7 2XL 31 \u00b7 3XL 32",
                   "Sleeve from center back (in): S 33.5 \u00b7 M 34.5 \u00b7 L 35.5 \u00b7 XL 36.5 \u00b7 2XL 37.5 \u00b7 3XL 38.5",
                   "Size tolerance: \u00b11 in"],
        care: ["Machine wash: cold (max 30C or 90F)", "Do not bleach", "Tumble dry: low heat", "Iron, steam or dry: low heat", "Do not dryclean"] },
      { name: "Pelosi Act Hat", price: "$28.12", url: "", note: "Coming soon",
        brand: "Yupoong 6245CM", options: "One size \u00b7 Adjustable strap",
        image: "../assets/img/merch/hat-pelosi-front.webp",
        colors: [["White", "../assets/img/merch/hat-pelosi-front.webp"], ["Black", "../assets/img/merch/hat-pelosi-black.webp"],
                 ["Khaki", "../assets/img/merch/hat-pelosi-khaki.webp"], ["Stone", "../assets/img/merch/hat-pelosi-stone.webp"],
                 ["Green Camo", "../assets/img/merch/hat-pelosi-green-camo.webp"], ["Spruce", "../assets/img/merch/hat-pelosi-spruce.webp"],
                 ["Pink", "../assets/img/merch/hat-pelosi-pink.webp"]],
        description: "Introducing the classic dad cap, a timeless accessory crafted for both style and comfort. Made from 100% cotton, this cap offers a soft and breathable feel that's perfect for all-day wear. Its unstructured design and low-profile fit give it a laid-back vibe, while the antique brass buckle closure adds a touch of vintage charm. The matching undervisor and four-row stitching on the visor provide subtle yet stylish details. With six panels and a Permacurv\u00ae visor, this cap offers a perfect blend of durability and classic aesthetics.",
        features: ["Comfortable fit: unstructured body and low profile for everyday wear",
                   "Structure: 6 panels, an eyelet on each panel, Permacurv\u00ae visor with 4 rows of stitching",
                   "Visor: precurved, underbill matches the visor color",
                   "Adjustable closure: self-fabric hideaway strap with antique brass buckle and grommet",
                   "One size: circumference 20.87\u201324.80 in, crown height 3.12 in, visor length 2.91 in",
                   "For adults. Not for use by ages 0\u20133", "Blank product sourced from China"],
        care: ["Use warm water and dish soap to clean spots off your hat; no need to soak the whole item", "For hard-to-clean spots use a soft-bristled brush"] }
    ]
  },

  // Contact form delivery (free): https://web3forms.com
  // This key currently delivers to the PourlyMade inbox (xmlBabe@gmail.com).
  // For hal@congresstradedetective.com, request a new key with that address and paste it here.
  web3formsKey: "5f15686c-c08c-4fb1-be3f-6510e553019a"
};
