const URL_MAP = 
  "||miniblox.*textures/items/diamond_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_axe.png",
  "||miniblox.*textures/items/diamond_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_hoe.png",
  "||miniblox.*textures/items/diamond_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_pickaxe.png",
  "||miniblox.*textures/items/diamond_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_shovel.png",
  "||miniblox.*textures/items/diamond_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_sword.png",
  "||miniblox.*textures/items/gold_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_axe.png",
  "||miniblox.*textures/items/gold_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_hoe.png",
  "||miniblox.*textures/items/gold_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_pickaxe.png",
  "||miniblox.*textures/items/gold_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_shovel.png",
  "||miniblox.*textures/items/gold_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_sword.png",
  "||miniblox.*textures/items/iron_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_axe.png",
  "||miniblox.*textures/items/iron_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_hoe.png",
  "||miniblox.*textures/items/iron_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_pickaxe.png",
  "||miniblox.*textures/items/iron_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_shovel.png",
  "||miniblox.*textures/items/iron_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_sword.png",
  "||miniblox.*textures/items/stone_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_axe.png",
  "||miniblox.*textures/items/stone_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_hoe.png",
  "||miniblox.*textures/items/stone_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_pickaxe.png",
  "||miniblox.*textures/items/stone_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_shovel.png",
  "||miniblox.*textures/items/stone_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_sword.png"
  "||miniblox.*textures/items/wood_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_axe.png",
  "||miniblox.*textures/items/wood_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_hoe.png",
  "||miniblox.*textures/items/wood_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_pickaxe.png",
  "||miniblox.*textures/items/wood_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_shovel.png",
  "||miniblox.*textures/items/wood_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_sword.png"
};

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": {
      "type": "redirect",
      "redirect": { "url": dst }
    },
    "condition": {
      "urlFilter": src,
      "resourceTypes": src.endsWith(".otf") ? ["font"] : ["image"]
    }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: rules,
    removeRuleIds: rules.map(rule => rule.id)
  },
  () => {
    if (chrome.runtime.lastError) {
      console.error("Error updating:", chrome.runtime.lastError);
    } else {
      console.log("Rules updated");
    }
  }
);
