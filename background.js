const URL_MAP = {
  "||miniblox.*textures/spritesheet.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/spritesheet-t%20(6)%20(7)%20(1).png"
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
    else console.log("All tool textures applied successfully!");
  }
);
