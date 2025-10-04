import { markRaw } from "vue";
import weixinLogo from "../../assets/images/weixin-logo.svg?component";
import { Github, Mail, Globe } from "lucide-vue-next";
export default {
  title: "I'm Nan Nan, based in Chengdu, embarking on a new chapter of life...",
  desc: [
    "Since I can remember, I've been curious about the world, preferring to explore and learn through trial and error, though I still heed my grandmother's advice.",
    "As I grew and entered society, I met many people—colleagues, sports buddies, and friends along my cycling journeys.",
    "I have diverse interests: from reading Keigo Higashino, enjoying sports, iced Americanos, to cherishing small adorable lives. Each teaches me something—Higashino reminds me that 'two things in the world are unbearable to look at directly: the sun and the human heart.' As for me? I choose to keep my heart towards the light. Exercise fuels my energy, and my three cats and a dog teach me responsibility.",
    "Today, I'm still a frontend developer. Writing code feels like solving puzzles and building with blocks—every line brings small surprises. The ever-evolving technology reminds me never to stand still. Embracing change and daring to experiment—that's the game for the brave.",
    "Sincere, responsible, proactive, and challenge-driven—these are not only my personal labels but also my compass in life.",
  ],
  list: [
    {
      type: "website",
      icon: markRaw(Globe),
      desc: "Website",
    },
    {
      type: "github",
      icon: markRaw(Github),
      desc: "GitHub",
      class: "alert-warning",
      message: "很抱歉，GitHub暂不开放！",
    },
    {
      type: "weixin",
      icon: markRaw(weixinLogo),
      desc: "NatNan045",
      class: "alert-success",
      border: true,
      message: "已复制到剪贴板：NatNan045",
      error: "复制失败",
    },
    { type: "mail", icon: markRaw(Mail), desc: "natnan0405@163.com" },
  ],
};
