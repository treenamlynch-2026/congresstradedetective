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
      { name: "Hal Detective Tee", price: "", image: "../assets/img/merch/placeholder-tee.webp", url: "", options: "Sizes & colors coming soon", note: "Coming soon" },
      { name: "Hal Detective Sweatshirt", price: "", image: "../assets/img/merch/placeholder-tee.webp", url: "", options: "Sizes & colors coming soon", note: "Coming soon" },
      { name: "Congress Trade Detective Hat", price: "", image: "../assets/img/merch/placeholder-hat.webp", url: "", options: "Colors coming soon", note: "Coming soon" }
    ]
  },

  // Contact form delivery (free): https://web3forms.com
  // This key currently delivers to the PourlyMade inbox (xmlBabe@gmail.com).
  // For hal@congresstradedetective.com, request a new key with that address and paste it here.
  web3formsKey: "5f15686c-c08c-4fb1-be3f-6510e553019a"
};
