// loadLocaleMessages.js
import i18n from "@/main";

export async function loadPageMessages(page) {
  const locale = i18n.global.locale.value; // 当前语言
  try {
    const messages = await import(`../data/${page}.${locale}.js`);
    const currentMessages = i18n.global.getLocaleMessage(locale) || {};
    // 挂载到 locale 下的 page key
    i18n.global.setLocaleMessage(locale, {
      ...currentMessages,
      [page]: messages.default,
    });
  } catch (e) {
    console.error(`[i18n]/// Failed to load ${page}.${locale}.js`, e);
  }
}
