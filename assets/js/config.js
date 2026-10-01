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
      { name: "Pelosi Act Tee", price: "", url: "", note: "Coming soon",
        brand: "Comfort Colors 1717", options: "Sizes S-4XL",
        image: "../assets/img/merch/tee-pelosi-navy.webp",
        // colors: [label, image]. Clicking a swatch swaps the card photo.
        colors: [["Navy", "../assets/img/merch/tee-pelosi-navy.webp"], ["Black", "../assets/img/merch/tee-pelosi-black.webp"],
                 ["Seafoam", "../assets/img/merch/tee-pelosi-seafoam.webp"], ["Ivory", "../assets/img/merch/tee-pelosi-ivory.webp"],
                 ["White", "../assets/img/merch/tee-pelosi-white.webp"]],
        sizeChart: "../assets/img/merch/tee-pelosi-sizechart.webp",
        description: "Soft, slubby, and lived-in \u2014 this garment-dyed tee carries a warm, tactile feel that invites you to wear it again and again. The front art shows a playful, cartoon-style robot and investigator under the line \u201cCONGRESS TRADE DETECTIVE,\u201d giving the shirt a cheeky, curious personality. Lightweight but substantial, the heavyweight cotton holds its shape while the relaxed fit and pre-shrunk fabric make it easy to layer or wear solo. Pick a color that feels like you; the dye-after-construction finish gives each shirt a unique, slightly vintage hue that deepens with time and wear. This is a quietly bold piece for people who like to spark conversation with clever graphics and a comfortable, slow-worn look.",
        features: ["100% ring-spun US cotton \u2014 soft, durable, pre-shrunk", "Garment-dyed finish for a vintage, lived-in color and texture",
                   "Heavyweight 6.1 oz fabric with relaxed, comfortable fit", "Tubular knit (no side seams) and double-needle stitching for durability",
                   "Size range S\u20134XL; sewn-in label"],
        care: ["Machine wash: cold (max 30C or 90F)", "Do not bleach", "Tumble dry: low heat", "Iron, steam or dry: low heat", "Do not dryclean"] },
      { name: "Hal Detective Sweatshirt", price: "", image: "../assets/img/merch/placeholder-tee.webp", url: "", options: "Sizes & colors coming soon", note: "Coming soon" },
      { name: "Pelosi Act Hat", price: "", url: "", note: "Coming soon",
        options: "Color: White · Adjustable strap",
        image: "../assets/img/merch/hat-pelosi-front.webp",
        // views: [label, image]. Same as colors, for angle shots.
        views: [["Front", "../assets/img/merch/hat-pelosi-front.webp"], ["Right", "../assets/img/merch/hat-pelosi-right.webp"],
                ["Left", "../assets/img/merch/hat-pelosi-left.webp"], ["Back", "../assets/img/merch/hat-pelosi-back.webp"]] }
    ]
  },

  // Contact form delivery (free): https://web3forms.com
  // This key currently delivers to the PourlyMade inbox (xmlBabe@gmail.com).
  // For hal@congresstradedetective.com, request a new key with that address and paste it here.
  web3formsKey: "5f15686c-c08c-4fb1-be3f-6510e553019a"
};
