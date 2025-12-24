const URL_MAP = {
  // Diamond tools
  "||miniblox.*textures/items/diamond_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/diamond_axe.png",
  "||miniblox.*textures/items/diamond_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/diamond_hoe.png",
  "||miniblox.*textures/items/diamond_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/diamond_pickaxe.png",
  "||miniblox.*textures/items/diamond_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/diamond_shovel.png",
  "||miniblox.*textures/items/diamond_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/diamond_sword.png",

  // Gold tools
  "||miniblox.*textures/items/gold_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/gold_axe.png",
  "||miniblox.*textures/items/gold_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/gold_hoe.png",
  "||miniblox.*textures/items/gold_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/gold_pickaxe.png",
  "||miniblox.*textures/items/gold_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/gold_shovel.png",
  "||miniblox.*textures/items/gold_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/gold_sword.png",

  // Iron tools
  "||miniblox.*textures/items/iron_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/iron_axe.png",
  "||miniblox.*textures/items/iron_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/iron_hoe.png",
  "||miniblox.*textures/items/iron_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/iron_pickaxe.png",
  "||miniblox.*textures/items/iron_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/iron_shovel.png",
  "||miniblox.*textures/items/iron_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/iron_sword.png",

  // Stone tools
  "||miniblox.*textures/items/stone_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/stone_axe.png",
  "||miniblox.*textures/items/stone_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/stone_hoe.png",
  "||miniblox.*textures/items/stone_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/stone_pickaxe.png",
  "||miniblox.*textures/items/stone_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/stone_shovel.png",
  "||miniblox.*textures/items/stone_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/stone_sword.png",

  // Wood tools
  "||miniblox.*textures/items/wood_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/wood_axe.png",
  "||miniblox.*textures/items/wood_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/wood_hoe.png",
  "||miniblox.*textures/items/wood_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/wood_pickaxe.png",
  "||miniblox.*textures/items/wood_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/wood_shovel.png",
  "||miniblox.*textures/items/wood_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/wood_sword.png"
};

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": { "type": "redirect", "redirect": { "url": dst } },
    "condition": { "urlFilter": src, "resourceTypes": ["image"] }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  { addRules: rules, removeRuleIds: rules.map(rule => rule.id) },
  () => {
    if (chrome.runtime.lastError) console.error("Error updating:", chrome.runtime.lastError);
    else console.log("Tool textures applied!");
  }
);
