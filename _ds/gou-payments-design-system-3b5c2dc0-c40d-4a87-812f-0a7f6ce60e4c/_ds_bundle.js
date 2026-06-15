/* @ds-bundle: {"format":3,"namespace":"GOUPaymentsDesignSystem_3b5c2d","components":[{"name":"GouLogo","sourcePath":"components/brand/GouLogo.jsx"},{"name":"GouMark","sourcePath":"components/brand/GouMark.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MoneyAmount","sourcePath":"components/data/MoneyAmount.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"StatusPill","sourcePath":"components/data/StatusPill.jsx"},{"name":"TransactionRow","sourcePath":"components/data/TransactionRow.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"MobileApp","sourcePath":"ui_kits/mobile/MobileApp.jsx"},{"name":"MobileHome","sourcePath":"ui_kits/mobile/screens.jsx"},{"name":"MobileActivity","sourcePath":"ui_kits/mobile/screens.jsx"},{"name":"MobilePay","sourcePath":"ui_kits/mobile/screens.jsx"},{"name":"App","sourcePath":"ui_kits/platform/App.jsx"},{"name":"DashboardScreen","sourcePath":"ui_kits/platform/DashboardScreen.jsx"},{"name":"LoginScreen","sourcePath":"ui_kits/platform/LoginScreen.jsx"},{"name":"PagosMasivosScreen","sourcePath":"ui_kits/platform/PagosMasivosScreen.jsx"},{"name":"RecaudosScreen","sourcePath":"ui_kits/platform/RecaudosScreen.jsx"},{"name":"Topbar","sourcePath":"ui_kits/platform/parts.jsx"},{"name":"AccountChip","sourcePath":"ui_kits/platform/parts.jsx"},{"name":"PageSection","sourcePath":"ui_kits/platform/parts.jsx"},{"name":"AreaChart","sourcePath":"ui_kits/platform/parts.jsx"}],"sourceHashes":{"components/brand/GouLogo.jsx":"14244799edc4","components/brand/GouMark.jsx":"3e9356dc1acc","components/core/Avatar.jsx":"f4eb561a1e20","components/core/Badge.jsx":"6d21e8e24196","components/core/Button.jsx":"705679cc3129","components/core/Card.jsx":"0978243deaa2","components/core/GlassCard.jsx":"9046dc349adf","components/core/Icon.jsx":"de2f6a2da7a7","components/core/IconButton.jsx":"2e499e4cf443","components/data/MoneyAmount.jsx":"304c8749c5a2","components/data/StatCard.jsx":"d3728188b999","components/data/StatusPill.jsx":"191b2e14eee4","components/data/TransactionRow.jsx":"6746a776616f","components/feedback/ProgressBar.jsx":"94be28d22273","components/feedback/Toast.jsx":"c7e48e7aea3b","components/forms/Checkbox.jsx":"4c7484dcbdb2","components/forms/Input.jsx":"4331d8bfabf8","components/forms/SegmentedControl.jsx":"7be74582e9e9","components/forms/Select.jsx":"f2fa1e500e9f","components/forms/Switch.jsx":"cdcdc5f90565","components/navigation/SidebarNav.jsx":"793315e62dbc","components/navigation/Tabs.jsx":"dbcdfc1c2949","ui_kits/mobile/MobileApp.jsx":"ceb983b58307","ui_kits/mobile/screens.jsx":"78b4ae03e97a","ui_kits/platform/App.jsx":"d2c1aeb8a3cb","ui_kits/platform/DashboardScreen.jsx":"569cb0e7cba8","ui_kits/platform/LoginScreen.jsx":"3098341cfe20","ui_kits/platform/PagosMasivosScreen.jsx":"5a4cc9eb0625","ui_kits/platform/RecaudosScreen.jsx":"e22db7586acf","ui_kits/platform/parts.jsx":"437c44e1b0e9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GOUPaymentsDesignSystem_3b5c2d = window.GOUPaymentsDesignSystem_3b5c2d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GouLogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Official GOU "gou" mark path data (from the brand SVGs). viewBox 0 0 505.92 279.68.
const MARK_PATHS = ["M252.96,43.47c42.36,0,76.7,34.34,76.7,76.7,0,42.36-34.34,76.7-76.7,76.7-42.36,0-76.7-34.34-76.7-76.7,0-42.36,34.34-76.7,76.7-76.7ZM252.95,164.23c24.32,0,44.04-19.72,44.04-44.04,0-24.32-19.72-44.04-44.04-44.04-24.32,0-44.04,19.72-44.04,44.04,0,24.32,19.72,44.04,44.04,44.04Z", "M431.08,196.85c40.84-.97,74.08-34.39,74.83-75.24.52-28.07-14.05-52.77-36.14-66.54-10.55-6.58-24.23.88-24.23,13.32v1.3c0,5.47,2.89,10.46,7.49,13.42,12.57,8.09,20.76,22.4,20.21,38.58-.8,23.49-20.34,42.41-43.84,42.5-24.4.09-44.2-19.66-44.2-44.04,0-15.61,8.13-29.31,20.37-37.13,4.62-2.95,7.33-8.14,7.33-13.62h0c0-12.89-14.27-20.74-25.12-13.77-21.21,13.64-35.26,37.45-35.26,64.54,0,42.98,35.35,77.7,78.56,76.68Z", "M134.92,35.63c9.84,0,17.82-7.98,17.82-17.82S144.76,0,134.92,0s-17.82,7.98-17.82,17.82,7.98,17.82,17.82,17.82Z", "M134.28,170.82c11.9-13.51,19.13-31.23,19.13-50.65,0-42.36-34.34-76.7-76.7-76.7S0,77.81,0,120.17s34.34,76.7,76.7,76.7c.99,0,1.97-.04,2.95-.07h33.03c4.71,0,8.57,3.86,8.57,8.57,0,5.14-3.86,9-8.57,9H41.57C18.93,214.37.12,232.69,0,255.73v4.83c0,8.87,7.19,16.07,16.07,16.07h0c8.87,0,16.07-7.19,16.07-16.07v-4.83c.12-5.03,3.92-8.79,8.57-8.79h71.11c22.71,0,41.57-18.43,41.57-41.57,0-14.48-7.67-27.22-19.12-34.55ZM32.65,120.19c0-24.32,19.72-44.04,44.04-44.04s44.04,19.72,44.04,44.04-19.72,44.04-44.04,44.04-44.04-19.72-44.04-44.04Z"];
const PAY_PATHS = ["M207.89,217.9c3.38,3.21,5.07,7.62,5.07,13.24s-1.69,10.04-5.07,13.24c-3.38,3.21-8.02,4.81-13.91,4.81h-11.25v15.69h-6.5v-51.79h17.75c5.89,0,10.53,1.6,13.91,4.81ZM203.21,239.76c2.17-2,3.25-4.87,3.25-8.62s-1.08-6.62-3.25-8.62c-2.17-2-5.31-3-9.43-3h-11.05v23.23h11.05c4.12,0,7.26-1,9.43-3Z", "M252.68,225.67v39.21h-5.98v-6.22c-1.39,2.17-3.14,3.82-5.27,4.96-2.12,1.14-4.46,1.7-7.02,1.7-3.34,0-6.33-.84-8.97-2.52-2.64-1.68-4.71-4.03-6.21-7.07-1.5-3.03-2.24-6.52-2.24-10.47s.75-7.42,2.24-10.43c1.5-3.01,3.56-5.35,6.21-7.03,2.64-1.68,5.63-2.52,8.97-2.52,2.47,0,4.75.53,6.83,1.59,2.08,1.06,3.81,2.63,5.2,4.7v-5.92h6.24ZM240.85,257.37c1.78-1.16,3.16-2.79,4.16-4.88,1-2.1,1.5-4.5,1.5-7.21s-.5-5.12-1.5-7.21c-1-2.1-2.38-3.71-4.16-4.85-1.78-1.13-3.75-1.7-5.92-1.7s-4.19.57-5.95,1.7c-1.76,1.14-3.14,2.75-4.16,4.85-1.02,2.1-1.53,4.5-1.53,7.21s.51,5.12,1.53,7.21c1.02,2.1,2.41,3.72,4.16,4.88,1.75,1.16,3.74,1.74,5.95,1.74s4.14-.58,5.92-1.74Z", "M293.7,225.67l-16.71,43.14c-1.47,4-3.2,6.81-5.17,8.44-1.97,1.63-4.35,2.44-7.12,2.44-1.69,0-3.33-.31-4.91-.92-1.58-.62-2.89-1.52-3.93-2.7l2.67-5.33c1.78,1.92,3.83,2.89,6.18,2.89,1.52,0,2.78-.46,3.8-1.37,1.02-.91,1.94-2.48,2.76-4.7l1.11-2.74-15.21-39.14h6.5l12.03,31.37,11.9-31.37h6.11Z", "M352.57,228.55c2.58,2.96,3.87,7.42,3.87,13.39v22.94h-12.35v-20.64c0-2.81-.47-4.88-1.4-6.22-.93-1.33-2.24-2-3.93-2-1.86,0-3.36.74-4.49,2.22-1.13,1.48-1.69,3.72-1.69,6.73v19.9h-12.35v-20.64c0-5.48-1.78-8.21-5.33-8.21-1.91,0-3.42.74-4.55,2.22-1.13,1.48-1.69,3.72-1.69,6.73v19.9h-12.35v-40.1h11.77v4.22c1.3-1.63,2.85-2.85,4.65-3.66,1.8-.81,3.76-1.22,5.88-1.22,2.47,0,4.68.52,6.63,1.55,1.95,1.04,3.53,2.61,4.75,4.73,1.39-2.02,3.14-3.58,5.27-4.66,2.12-1.08,4.44-1.63,6.96-1.63,4.33,0,7.79,1.48,10.37,4.44Z", "M399.27,248.38h-25.61c.52,2.07,1.53,3.66,3.02,4.77s3.37,1.67,5.62,1.67c1.69,0,3.15-.27,4.39-.81,1.24-.54,2.48-1.43,3.74-2.66l6.5,7.69c-3.42,4.34-8.43,6.51-15.02,6.51-4.12,0-7.74-.89-10.86-2.66-3.12-1.78-5.54-4.24-7.25-7.4-1.71-3.16-2.57-6.73-2.57-10.73s.83-7.48,2.5-10.62c1.67-3.13,3.98-5.59,6.92-7.36,2.95-1.78,6.26-2.66,9.95-2.66s6.7.83,9.56,2.48c2.86,1.65,5.12,4.04,6.79,7.18,1.67,3.13,2.5,6.84,2.5,11.14,0,.1-.07,1.26-.2,3.48ZM375.9,235.95c-1.28,1.23-2.09,2.91-2.44,5.03h14.43c-.35-2.12-1.16-3.8-2.44-5.03-1.28-1.23-2.87-1.85-4.78-1.85s-3.5.62-4.78,1.85Z", "M437.4,228.55c2.67,2.96,4,7.42,4,13.39v22.94h-12.35v-20.64c0-5.48-1.93-8.21-5.79-8.21-2.12,0-3.83.79-5.1,2.37-1.28,1.58-1.92,3.95-1.92,7.1v19.39h-12.35v-40.1h11.77v4.37c1.39-1.63,3.03-2.87,4.94-3.74,1.91-.86,3.99-1.29,6.24-1.29,4.38,0,7.9,1.48,10.56,4.44Z", "M472.15,263.26c-1.04.74-2.31,1.31-3.8,1.7-1.5.39-3.09.59-4.78.59-4.59,0-8.13-1.28-10.6-3.85-2.47-2.56-3.71-6.39-3.71-11.47v-13.47h-5.14v-10.51h5.14v-10.43h12.35v10.43h8.06v10.51h-8.06v13.32c0,1.43.33,2.55,1.01,3.37.67.81,1.57,1.22,2.7,1.22,1.43,0,2.69-.42,3.77-1.26l3.05,9.84Z", "M479.69,264.4c-2.86-.76-5.16-1.76-6.89-3l3.71-9.62c1.6,1.14,3.51,2.03,5.72,2.7,2.21.67,4.4,1,6.57,1,1.99,0,3.41-.23,4.26-.7.85-.47,1.27-1.15,1.27-2.03s-.51-1.52-1.53-1.89c-1.02-.37-2.63-.73-4.84-1.07-2.82-.39-5.21-.91-7.18-1.55-1.97-.64-3.67-1.82-5.1-3.55-1.43-1.73-2.15-4.14-2.15-7.25,0-2.56.67-4.85,2.02-6.84,1.34-2,3.3-3.58,5.88-4.74,2.58-1.16,5.67-1.74,9.26-1.74,2.56,0,5.09.3,7.61.89,2.51.59,4.62,1.43,6.31,2.52l-3.71,9.54c-3.12-1.97-6.5-2.96-10.14-2.96-1.95,0-3.38.26-4.29.78s-1.37,1.2-1.37,2.03c0,.94.5,1.59,1.5,1.96,1,.37,2.64.75,4.94,1.15,2.9.49,5.31,1.06,7.22,1.7,1.91.64,3.56,1.81,4.97,3.51,1.41,1.7,2.11,4.08,2.11,7.14,0,2.52-.67,4.77-2.02,6.77-1.34,2-3.33,3.56-5.95,4.7-2.62,1.13-5.78,1.7-9.46,1.7-2.95,0-5.85-.38-8.71-1.15Z"];

/**
 * GouLogo — the official GOU Payments logotype, rendered from the brand vectors.
 * The "gou" mark ALWAYS appears with "payments" beneath it, and ALWAYS in a flat brand
 * color (never a gradient). The principal lockup is deep-blue with the cyan dot accent.
 * For a standalone symbol use <GouMark> (the isotipo).
 */
function GouLogo({
  variant = "principal",
  // "principal" | "deep" | "white" | "cyan"
  height = 56,
  title = "GOU Payments",
  className = "",
  style = {},
  ...rest
}) {
  // The logo is ALWAYS a flat brand color — never a gradient fill (brand rule).
  // "principal": deep-blue "gou" + "payments" with the signature cyan dot accent.
  const bodyFill = variant === "white" ? "#FFFFFF" : variant === "cyan" ? "var(--cyan-500, #00ACEC)" : "var(--deep-800, #0D1350)";
  // The floating dot is the cyan accent (except in fully-mono deep/cyan variants).
  const dotFill = variant === "deep" ? "var(--deep-800, #0D1350)" : "var(--cyan-500, #00ACEC)";

  // The lockup always shows the "gou" mark + "payments"; full-height viewBox keeps the g whole.
  const fullVB = "0 0 505.92 279.68";
  const ar = 505.92 / 279.68;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    height: height,
    width: height * ar,
    viewBox: fullVB,
    fill: "none",
    role: "img",
    "aria-label": title,
    style: {
      display: "block",
      ...style
    }
  }, rest), MARK_PATHS.map((d, i) =>
  /*#__PURE__*/
  // MARK_PATHS index 2 is the floating dot — render it as the accent.
  React.createElement("path", {
    key: "m" + i,
    d: d,
    fill: i === 2 ? dotFill : bodyFill
  })), PAY_PATHS.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: "p" + i,
    d: d,
    fill: bodyFill
  })));
}
Object.assign(__ds_scope, { GouLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GouLogo.jsx", error: String((e && e.message) || e) }); }

// components/brand/GouMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Official GOU isotipo ("g" mark with floating dot). viewBox 0 0 154 277.
const ISO_PATHS = ["M134.92 35.63C144.76 35.63 152.74 27.65 152.74 17.81C152.74 7.97 144.76 0 134.92 0C125.08 0 117.1 7.98 117.1 17.82C117.1 27.66 125.08 35.64 134.92 35.64V35.63Z", "M134.28 170.82C146.18 157.31 153.41 139.59 153.41 120.17C153.41 77.81 119.07 43.47 76.71 43.47C34.35 43.47 0 77.81 0 120.17C0 162.53 34.34 196.87 76.7 196.87C77.69 196.87 78.67 196.83 79.65 196.8H112.68C117.39 196.8 121.25 200.66 121.25 205.37C121.25 210.51 117.39 214.37 112.68 214.37H41.57C18.93 214.37 0.12 232.69 0 255.73V260.56C0 269.43 7.19 276.63 16.07 276.63C24.94 276.63 32.14 269.44 32.14 260.56V255.73C32.26 250.7 36.06 246.94 40.71 246.94H111.82C134.53 246.94 153.39 228.51 153.39 205.37C153.39 190.89 145.72 178.15 134.27 170.82H134.28ZM32.65 120.19C32.65 95.87 52.37 76.15 76.69 76.15C101.01 76.15 120.73 95.87 120.73 120.19C120.73 144.51 101.01 164.23 76.69 164.23C52.37 164.23 32.65 144.51 32.65 120.19Z"];

/**
 * GouMark — the GOU isotipo (the "g" symbol). App-icon / favicon mark.
 * Self-contained inline SVG rendered from the official vector.
 */
function GouMark({
  variant = "cyan",
  // "cyan" | "deep" | "white"
  size = 40,
  // height in px
  title = "GOU",
  className = "",
  style = {},
  ...rest
}) {
  // The isotipo is always a flat brand color — never a gradient fill (brand rule).
  const fill = variant === "deep" ? "var(--deep-800, #0D1350)" : variant === "white" ? "#FFFFFF" : "var(--cyan-500, #00ACEC)";
  const ar = 154 / 277;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    height: size,
    width: size * ar,
    viewBox: "0 0 154 277",
    fill: "none",
    role: "img",
    "aria-label": title,
    style: {
      display: "block",
      ...style
    }
  }, rest), ISO_PATHS.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fill: fill
  })));
}
Object.assign(__ds_scope, { GouMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GouMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular user/account token. Image, initials, or icon.
 */
function Avatar({
  src = null,
  name = "",
  size = 40,
  tone = "brand",
  // brand | deep | aqua | neutral
  ring = false,
  className = "",
  style = {},
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join("");
  const tones = {
    brand: ["var(--cyan-100)", "var(--cyan-700)"],
    deep: ["var(--deep-700)", "#fff"],
    aqua: ["var(--aqua-100)", "var(--aqua-700)"],
    neutral: ["var(--neutral-200)", "var(--neutral-700)"]
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `gou-avatar ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      flexShrink: 0,
      background: src ? "var(--neutral-200)" : tones[0],
      color: tones[1],
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: size * 0.4,
      letterSpacing: "0.01em",
      boxShadow: ring ? "0 0 0 2px var(--surface-card), 0 0 0 4px var(--cyan-400)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/label token. Soft (tinted) or solid fill.
 */
const TONES = {
  neutral: {
    soft: ["var(--neutral-100)", "var(--neutral-600)"],
    solid: ["var(--neutral-600)", "#fff"]
  },
  brand: {
    soft: ["var(--cyan-100)", "var(--cyan-700)"],
    solid: ["var(--cyan-500)", "#fff"]
  },
  blue: {
    soft: ["var(--blue-100)", "var(--blue-700)"],
    solid: ["var(--blue-500)", "#fff"]
  },
  success: {
    soft: ["var(--aqua-100)", "var(--aqua-700)"],
    solid: ["var(--aqua-700)", "#fff"]
  },
  warning: {
    soft: ["var(--warning-surface)", "#946100"],
    solid: ["var(--warning)", "#fff"]
  },
  danger: {
    soft: ["var(--danger-surface)", "#a3262a"],
    solid: ["var(--danger)", "#fff"]
  },
  deep: {
    soft: ["var(--deep-50)", "var(--deep-800)"],
    solid: ["var(--deep-800)", "#fff"]
  }
};
function Badge({
  tone = "neutral",
  // neutral | brand | blue | success | warning | danger | deep
  variant = "soft",
  // soft | solid
  dot = false,
  size = "md",
  // sm | md
  className = "",
  style = {},
  children,
  ...rest
}) {
  const [bg, fg] = TONES[tone][variant];
  const sm = size === "sm";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `gou-badge ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: sm ? 20 : 24,
      padding: sm ? "0 8px" : "0 10px",
      background: bg,
      color: fg,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: sm ? "var(--fs-overline)" : "var(--fs-caption)",
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: variant === "solid" ? "currentColor" : fg,
      opacity: variant === "solid" ? 0.9 : 1
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action element. Pill-shaped, Montserrat semibold.
 */
function Button({
  variant = "primary",
  // primary | brand | secondary | ghost | danger
  size = "md",
  // sm | md | lg
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  loading = false,
  type = "button",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      h: "var(--control-sm)",
      px: 16,
      fs: "var(--fs-body-sm)",
      gap: 6
    },
    md: {
      h: "var(--control-md)",
      px: 22,
      fs: "var(--fs-body)",
      gap: 8
    },
    lg: {
      h: "var(--control-lg)",
      px: 28,
      fs: "var(--fs-body-lg)",
      gap: 10
    }
  }[size];
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--action-on)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-glow-blue)"
    },
    brand: {
      background: "var(--action-brand)",
      color: "var(--action-on)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-glow-cyan)"
    },
    secondary: {
      background: "var(--action-secondary-fill)",
      color: "var(--text-strong)",
      border: "1px solid var(--action-secondary-border)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    danger: {
      background: "var(--danger)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  }[variant];
  const isDisabled = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    className: `gou-btn gou-btn--${variant} ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sizes.gap,
      height: sizes.h,
      padding: `0 ${sizes.px}px`,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: sizes.fs,
      letterSpacing: "0.005em",
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out)",
      whiteSpace: "nowrap",
      ...variants,
      ...style
    },
    onMouseDown: e => {
      if (!isDisabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft, children, !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      animation: "gou-spin 0.7s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "currentColor",
    strokeOpacity: "0.3",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes gou-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base content surface. White, soft cool shadow, generous radius.
 */
function Card({
  padding = "lg",
  // none | sm | md | lg
  interactive = false,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const pad = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)"
  }[padding];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `gou-card ${className}`,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-md)",
      padding: pad,
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.transform = "translateY(-2px)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
      e.currentTarget.style.transform = "translateY(0)";
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassCard — signature frosted-glass surface. Place over the brand
 * gradient / photography for the Cash-app-style depth.
 */
function GlassCard({
  tint = "light",
  // light | dark
  padding = "lg",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const pad = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)"
  }[padding];
  const light = {
    background: "var(--glass-fill)",
    border: "1px solid var(--glass-border)",
    color: "var(--text-strong)"
  };
  const dark = {
    background: "var(--glass-fill-dark)",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "#fff"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `gou-glass ${className}`,
    style: {
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--glass-shadow), var(--glass-inset)",
      backdropFilter: "blur(var(--glass-blur)) saturate(1.4)",
      WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(1.4)",
      padding: pad,
      ...(tint === "dark" ? dark : light),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper over the Lucide icon set (loaded via CDN as window.lucide).
 * Renders crisp stroke SVGs in currentColor. Accepts kebab or PascalCase names.
 */
function toPascal(name) {
  return String(name).split(/[-_\s]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  className = "",
  style = {},
  ...rest
}) {
  const [, force] = React.useReducer(x => x + 1, 0);
  const pascal = toPascal(name);
  const lucide = typeof window !== "undefined" ? window.lucide : undefined;
  const node = lucide && lucide.icons ? lucide.icons[pascal] : undefined;

  // Lucide UMD may load after first render — poll briefly until available.
  React.useEffect(() => {
    if (node) return;
    let tries = 0;
    const id = setInterval(() => {
      tries += 1;
      if (window.lucide && window.lucide.icons || tries > 20) {
        clearInterval(id);
        force();
      }
    }, 80);
    return () => clearInterval(id);
  }, [node, pascal]);
  if (!node) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: {
        display: "inline-block",
        width: size,
        height: size,
        ...style
      },
      "aria-hidden": "true"
    }, rest));
  }
  const children = Array.isArray(node) ? Array.isArray(node[2]) ? node[2] : [] : node.children || [];
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, rest), children.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — compact icon-only action. Circle or rounded-square.
 */
function IconButton({
  variant = "secondary",
  // primary | brand | secondary | ghost
  size = "md",
  // sm | md | lg
  shape = "circle",
  // circle | square
  ariaLabel,
  disabled = false,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const dim = {
    sm: 36,
    md: 44,
    lg: 52
  }[size];
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "#fff",
      border: "1px solid transparent"
    },
    brand: {
      background: "var(--action-brand)",
      color: "#fff",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    className: `gou-iconbtn ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out)",
      ...variants,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.94)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/MoneyAmount.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MoneyAmount — formatted currency with tabular figures and money semantics.
 */
function MoneyAmount({
  value = 0,
  currency = "COP",
  locale = "es-CO",
  signed = false,
  // show +/- and color by direction
  direction = "auto",
  // auto | in | out | neutral
  size = "md",
  // sm | md | lg | xl | display
  emphasize = true,
  // bold weight
  className = "",
  style = {},
  ...rest
}) {
  const dir = direction === "auto" ? value > 0 ? "in" : value < 0 ? "out" : "neutral" : direction;
  const sizes = {
    sm: "var(--fs-body-sm)",
    md: "var(--fs-body-lg)",
    lg: "var(--fs-h3)",
    xl: "var(--fs-h1)",
    display: "var(--fs-display-md)"
  };
  const colorMap = {
    in: "var(--money-in)",
    out: "var(--text-strong)",
    neutral: "var(--text-strong)"
  };
  let formatted;
  try {
    formatted = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0
    }).format(Math.abs(value));
  } catch {
    formatted = "$" + Math.abs(value).toLocaleString();
  }
  const sign = signed ? dir === "in" ? "+ " : dir === "out" ? "- " : "" : "";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `gou-money ${className}`,
    style: {
      fontFamily: "var(--font-tnum)",
      fontWeight: emphasize ? "var(--fw-bold)" : "var(--fw-medium)",
      fontSize: sizes[size],
      letterSpacing: size === "display" || size === "xl" ? "var(--ls-tighter)" : "var(--ls-tight)",
      fontVariantNumeric: "tabular-nums lining-nums",
      color: signed ? colorMap[dir] : "var(--text-strong)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), sign, formatted);
}
Object.assign(__ds_scope, { MoneyAmount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MoneyAmount.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — KPI tile: overline label, large value, optional delta + icon.
 */
function StatCard({
  label,
  value,
  icon = null,
  // lucide icon name
  iconTone = "brand",
  // brand | blue | aqua | deep
  delta = null,
  // e.g. "+12,4%"
  trend = "up",
  // up | down | flat
  footnote = null,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const tones = {
    brand: ["var(--cyan-100)", "var(--cyan-600)"],
    blue: ["var(--blue-100)", "var(--blue-600)"],
    aqua: ["var(--aqua-100)", "var(--aqua-700)"],
    deep: ["var(--deep-50)", "var(--deep-700)"]
  }[iconTone];
  const trendColor = trend === "down" ? "var(--danger)" : trend === "flat" ? "var(--text-muted)" : "var(--aqua-700)";
  const trendIcon = trend === "down" ? "trending-down" : trend === "flat" ? "minus" : "trending-up";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `gou-statcard ${className}`,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-sm)",
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "var(--radius-md)",
      background: tones[0],
      color: tones[1]
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-tnum)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h1)",
      letterSpacing: "var(--ls-tight)",
      color: "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), children, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      color: trendColor,
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trendIcon,
    size: 15,
    strokeWidth: 2.25
  }), delta)), footnote && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-subtle)"
    }
  }, footnote));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusPill — payment/transaction status with consistent tone + icon.
 */
const STATUS = {
  completed: {
    label: "Completado",
    tone: "success",
    icon: "check"
  },
  pending: {
    label: "Pendiente",
    tone: "warning",
    icon: "clock"
  },
  processing: {
    label: "En proceso",
    tone: "blue",
    icon: "loader"
  },
  scheduled: {
    label: "Programado",
    tone: "deep",
    icon: "calendar"
  },
  failed: {
    label: "Fallido",
    tone: "danger",
    icon: "x"
  },
  refunded: {
    label: "Devuelto",
    tone: "neutral",
    icon: "rotate-ccw"
  }
};
function StatusPill({
  status = "completed",
  label,
  size = "md",
  className = "",
  ...rest
}) {
  const s = STATUS[status] || STATUS.completed;
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, _extends({
    tone: s.tone,
    variant: "soft",
    size: size,
    className: className
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: size === "sm" ? 12 : 14,
    strokeWidth: 2
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/TransactionRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TransactionRow — one line in an activity / movements list.
 */
function TransactionRow({
  title,
  subtitle,
  icon = "arrow-up-right",
  iconTone = "deep",
  // deep | aqua | blue | brand
  amount,
  currency = "COP",
  signed = true,
  status = null,
  // optional StatusPill status
  onClick,
  className = "",
  style = {},
  ...rest
}) {
  const tones = {
    deep: ["var(--deep-50)", "var(--deep-700)"],
    aqua: ["var(--aqua-100)", "var(--aqua-700)"],
    blue: ["var(--blue-100)", "var(--blue-600)"],
    brand: ["var(--cyan-100)", "var(--cyan-700)"]
  }[iconTone];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `gou-txrow ${className}`,
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-2)",
      borderRadius: "var(--radius-md)",
      cursor: onClick ? "pointer" : "default",
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--surface-hover)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 42,
      height: 42,
      borderRadius: "var(--radius-md)",
      background: tones[0],
      color: tones[1],
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 4,
      flexShrink: 0
    }
  }, amount != null && /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
    value: amount,
    currency: currency,
    signed: signed,
    size: "md"
  }), status && /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    status: status,
    size: "sm"
  })));
}
Object.assign(__ds_scope, { TransactionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TransactionRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — determinate progress / utilisation. Gradient or flat fill.
 */
function ProgressBar({
  value = 0,
  // 0..100
  tone = "blue",
  // blue | brand | aqua | gradient
  size = "md",
  // sm | md
  showLabel = false,
  className = "",
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const h = size === "sm" ? 6 : 10;
  const fills = {
    blue: "var(--blue-500)",
    brand: "var(--cyan-500)",
    aqua: "var(--aqua-500)",
    gradient: "var(--gou-gradient-soft)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `gou-progress ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: h,
      background: "var(--neutral-200)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      width: `${pct}%`,
      height: "100%",
      background: fills[tone],
      borderRadius: "var(--radius-pill)",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-tnum)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      fontVariantNumeric: "tabular-nums",
      minWidth: 38,
      textAlign: "right"
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toast — transient notification. Status-coded with leading icon.
 * Presentational (render it where you manage visibility).
 */
const KINDS = {
  success: {
    icon: "check-circle",
    color: "var(--aqua-700)",
    surface: "var(--aqua-100)"
  },
  info: {
    icon: "info",
    color: "var(--cyan-700)",
    surface: "var(--cyan-100)"
  },
  warning: {
    icon: "alert-triangle",
    color: "#946100",
    surface: "var(--warning-surface)"
  },
  error: {
    icon: "alert-circle",
    color: "var(--danger)",
    surface: "var(--danger-surface)"
  }
};
function Toast({
  kind = "info",
  // success | info | warning | error
  title,
  description,
  onClose,
  action = null,
  className = "",
  style = {},
  ...rest
}) {
  const k = KINDS[kind] || KINDS.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: `gou-toast ${className}`,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      width: "100%",
      maxWidth: 400,
      padding: "14px 16px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      borderRadius: "var(--radius-sm)",
      background: k.surface,
      color: k.color,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 19,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      paddingTop: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: "var(--text-subtle)",
      cursor: "pointer",
      padding: 2,
      display: "inline-flex",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — square check with brand fill. Controlled or uncontrolled.
 */
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  className = "",
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  const box = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    className: `gou-checkbox ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      borderRadius: "var(--radius-xs)",
      border: on ? "1.5px solid var(--action-primary)" : "1.5px solid var(--border-strong)",
      background: on ? "var(--action-primary)" : "var(--surface-card)",
      color: "#fff",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      flexShrink: 0,
      padding: 0,
      ...style
    }
  }, rest), on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  }));
  if (!label) return box;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-body)"
    }
  }, box, label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, leading/trailing adornments, states.
 */
function Input({
  label,
  hint,
  error,
  leading = null,
  trailing = null,
  size = "md",
  // sm | md | lg
  id,
  className = "",
  style = {},
  disabled = false,
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const h = {
    sm: "var(--control-sm)",
    md: "var(--control-md)",
    lg: "var(--control-lg)"
  }[size];
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? "var(--danger)" : focused ? "var(--focus-ring)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    className: `gou-field ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 14px",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focused && !error ? "var(--ring-focus)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      opacity: disabled ? 0.6 : 1
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)"
    }
  })), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, trailing)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SegmentedControl — pill-track multi-option selector (filters, period switch).
 */
function SegmentedControl({
  options = [],
  // [{ value, label }]
  value,
  defaultValue,
  onChange,
  size = "md",
  // sm | md
  fullWidth = false,
  className = "",
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (options[0] && options[0].value));
  const active = isControlled ? value : internal;
  const h = size === "sm" ? 34 : 42;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `gou-segmented ${className}`,
    role: "tablist",
    style: {
      display: "inline-flex",
      width: fullWidth ? "100%" : "auto",
      padding: 4,
      gap: 2,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), options.map(opt => {
    const on = opt.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => select(opt.value),
      style: {
        flex: fullWidth ? 1 : "0 0 auto",
        height: h,
        padding: "0 18px",
        border: "none",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)",
        fontSize: size === "sm" ? "var(--fs-body-sm)" : "var(--fs-body)",
        whiteSpace: "nowrap",
        color: on ? "var(--text-strong)" : "var(--text-muted)",
        background: on ? "var(--surface-card)" : "transparent",
        boxShadow: on ? "var(--shadow-sm)" : "none",
        transition: "color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
      }
    }, opt.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native-backed dropdown styled to match Input.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  // [{ value, label }] or string[]
  placeholder,
  size = "md",
  id,
  className = "",
  style = {},
  disabled = false,
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const h = {
    sm: "var(--control-sm)",
    md: "var(--control-md)",
    lg: "var(--control-lg)"
  }[size];
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    className: `gou-field ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled
  }, rest, {
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: h,
      padding: "0 40px 0 14px",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1.5px solid ${error ? "var(--danger)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      outline: "none"
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none",
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle. Spring ease, brand-blue when on.
 */
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  // sm | md
  label,
  className = "",
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const dims = size === "sm" ? {
    w: 38,
    h: 22,
    k: 16
  } : {
    w: 46,
    h: 28,
    k: 22
  };
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  const knob = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    className: `gou-switch ${className}`,
    style: {
      position: "relative",
      width: dims.w,
      height: dims.h,
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      background: on ? "var(--action-primary)" : "var(--neutral-300)",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-base) var(--ease-out)",
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (dims.h - dims.k) / 2,
      left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 2px 4px rgba(13,19,80,0.25)",
      transition: "left var(--dur-base) var(--ease-spring)"
    }
  }));
  if (!label) return knob;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-body)"
    }
  }, knob, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SidebarNav — deep-blue product navigation rail (desktop platform).
 * Renders sections of items; highlights the active route.
 */
function SidebarNav({
  items = [],
  // [{ value, label, icon, badge? }] OR section: { section: "LABEL", items: [...] }
  active,
  onSelect,
  header = null,
  // brand lockup / logo node
  footer = null,
  className = "",
  style = {},
  ...rest
}) {
  // Normalize to sections
  const sections = items.length && items[0] && items[0].section ? items : [{
    section: null,
    items
  }];
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: `gou-sidebar ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      width: "var(--sidebar-w)",
      height: "100%",
      background: "var(--surface-deep)",
      color: "rgba(255,255,255,0.72)",
      padding: "var(--space-5) var(--space-3)",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 10px 4px"
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      flex: 1,
      overflow: "auto"
    }
  }, sections.map((sec, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, sec.section && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 12px 6px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-overline)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.4)"
    }
  }, sec.section), sec.items.map(it => /*#__PURE__*/React.createElement(NavButton, {
    key: it.value,
    it: it,
    on: it.value === active,
    onSelect: onSelect
  }))))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-3)",
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, footer));
}
function NavButton({
  it,
  on,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  const bg = on ? "rgba(255,255,255,0.12)" : hover ? "rgba(255,255,255,0.06)" : "transparent";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSelect && onSelect(it.value),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      padding: "10px 12px",
      border: "none",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body)",
      color: on ? "#fff" : "rgba(255,255,255,0.72)",
      background: bg
    }
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 20,
    strokeWidth: on ? 2.1 : 1.75
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-tnum)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-bold)",
      padding: "1px 7px",
      borderRadius: "var(--radius-pill)",
      background: "var(--cyan-500)",
      color: "#fff"
    }
  }, it.badge));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline tab bar for switching views.
 */
function Tabs({
  tabs = [],
  // [{ value, label, count? }]
  value,
  defaultValue,
  onChange,
  className = "",
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].value));
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: `gou-tabs ${className}`,
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.value),
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px 14px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--fs-body)",
        color: on ? "var(--text-strong)" : "var(--text-muted)",
        transition: "color var(--dur-base) var(--ease-out)"
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-tnum)",
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-bold)",
        padding: "1px 7px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--blue-100)" : "var(--neutral-100)",
        color: on ? "var(--blue-700)" : "var(--text-muted)"
      }
    }, t.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 8,
        right: 8,
        bottom: -1,
        height: 3,
        borderRadius: "3px 3px 0 0",
        background: on ? "var(--action-primary)" : "transparent",
        transition: "background var(--dur-base) var(--ease-out)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/screens.jsx
try { (() => {
function StatusBar({
  dark
}) {
  const c = dark ? "#fff" : "var(--text-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 24px 2px",
      color: c,
      fontWeight: 700,
      fontSize: 15,
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "signal",
    size: 16,
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "wifi",
    size: 16,
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "battery-full",
    size: 18,
    strokeWidth: 2
  })));
}
function QuickAction({
  icon,
  label,
  onClick,
  tone = "glass"
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 18,
      background: "rgba(255,255,255,0.18)",
      border: "1px solid rgba(255,255,255,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 23,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600
    }
  }, label));
}
function MobileHome({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gou-wash)",
      borderRadius: "0 0 28px 28px",
      paddingBottom: 22
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 22px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: "Isabel Mart\xEDnez",
    tone: "aqua",
    size: 40,
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      opacity: 0.85
    }
  }, "Hola,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, "Isabel"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 14,
      background: "rgba(255,255,255,0.16)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 9,
      right: 9,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--aqua-400)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "#fff",
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      fontWeight: 700,
      opacity: 0.85
    }
  }, "Saldo disponible"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-tnum)",
      fontSize: 42,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginTop: 4,
      fontVariantNumeric: "tabular-nums"
    }
  }, "$ 184.920.500")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      padding: "20px 18px 0"
    }
  }, /*#__PURE__*/React.createElement(QuickAction, {
    icon: "arrow-up-right",
    label: "Enviar",
    onClick: () => go("pay")
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "arrow-down-to-line",
    label: "Cobrar",
    onClick: () => go("pay")
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "repeat",
    label: "D\xE9bitos"
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "grid-3x3",
    label: "M\xE1s"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "18px 18px 90px"
    }
  }, /*#__PURE__*/React.createElement(GlassCardLite, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "22px 4px 6px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "Movimientos"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("activity"),
    style: {
      border: "none",
      background: "transparent",
      color: "var(--text-link)",
      fontWeight: 600,
      fontSize: 13.5,
      cursor: "pointer"
    }
  }, "Ver todo")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 18,
      border: "1px solid var(--border-subtle)",
      padding: 6,
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "arrow-down-left",
    iconTone: "aqua",
    title: "Recaudo \u2014 Cliente 4821",
    subtitle: "Hoy \xB7 10:24",
    amount: 320000,
    status: "completed"
  }), /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "arrow-up-right",
    title: "Pago \u2014 Log\xEDstica S.A.",
    subtitle: "Hoy \xB7 09:02",
    amount: -2300000,
    status: "completed"
  }), /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "repeat",
    iconTone: "blue",
    title: "D\xE9bito \u2014 Suscripci\xF3n",
    subtitle: "Ayer \xB7 23:00",
    amount: -89900,
    status: "completed"
  }))));
}
function GlassCardLite() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gou-gradient-soft)",
      borderRadius: 20,
      padding: 18,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "var(--shadow-glow-blue)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      opacity: 0.9,
      fontWeight: 600
    }
  }, "Recaudado este mes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-tnum)",
      fontSize: 24,
      fontWeight: 800,
      marginTop: 2
    }
  }, "$ 96.420.000")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "rgba(255,255,255,0.2)",
      borderRadius: 999,
      padding: "5px 10px",
      fontSize: 13,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "trending-up",
    size: 15,
    strokeWidth: 2.5
  }), " 15,2%"));
}
function MobileActivity() {
  const [seg, setSeg] = React.useState("todos");
  const all = [{
    icon: "arrow-down-left",
    tone: "aqua",
    t: "Recaudo — Cliente 4821",
    s: "Hoy · 10:24 · PSE",
    a: 320000,
    st: "completed",
    dir: "in"
  }, {
    icon: "arrow-up-right",
    tone: "deep",
    t: "Pago — Logística S.A.",
    s: "Hoy · 09:02",
    a: -2300000,
    st: "completed",
    dir: "out"
  }, {
    icon: "repeat",
    tone: "blue",
    t: "Débito — Suscripción",
    s: "Ayer · 23:00",
    a: -89900,
    st: "completed",
    dir: "out"
  }, {
    icon: "arrow-down-left",
    tone: "aqua",
    t: "Recaudo — Cliente 1190",
    s: "Ayer · 18:41",
    a: 1450000,
    st: "completed",
    dir: "in"
  }, {
    icon: "arrow-up-right",
    tone: "deep",
    t: "Pago — Nómina",
    s: "Ayer · 09:00",
    a: -18750000,
    st: "processing",
    dir: "out"
  }, {
    icon: "arrow-down-left",
    tone: "aqua",
    t: "Recaudo — Cliente 2087",
    s: "10 jun · 08:30",
    a: 890000,
    st: "pending",
    dir: "in"
  }];
  const rows = seg === "todos" ? all : all.filter(r => r.dir === (seg === "entrada" ? "in" : "out"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 14px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 14px",
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)"
    }
  }, "Movimientos"), /*#__PURE__*/React.createElement(__ds_scope.SegmentedControl, {
    fullWidth: true,
    value: seg,
    onChange: setSeg,
    options: [{
      value: "todos",
      label: "Todos"
    }, {
      value: "entrada",
      label: "Entradas"
    }, {
      value: "salida",
      label: "Salidas"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "0 14px 90px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 18,
      border: "1px solid var(--border-subtle)",
      padding: 6,
      boxShadow: "var(--shadow-sm)"
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    key: i,
    icon: r.icon,
    iconTone: r.tone,
    title: r.t,
    subtitle: r.s,
    amount: r.a,
    status: r.st
  })))));
}
function MobilePay({
  go
}) {
  const [amount, setAmount] = React.useState("0");
  const press = k => {
    setAmount(a => {
      if (k === "del") return a.length <= 1 ? "0" : a.slice(0, -1);
      if (a === "0") return k;
      if (a.replace(/\D/g, "").length >= 9) return a;
      return a + k;
    });
  };
  const fmt = new Intl.NumberFormat("es-CO").format(parseInt(amount.replace(/\D/g, "") || "0", 10));
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "del"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "8px 18px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      width: 40,
      height: 40,
      borderRadius: 14,
      border: "1px solid var(--border-default)",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-left",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: "var(--text-strong)"
    }
  }, "Enviar dinero")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: "Banco BBVA",
    tone: "deep",
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "BBVA \u2014 Proveedores"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      fontFamily: "var(--font-tnum)"
    }
  }, "Cuenta \u2022\u2022\u2022\u2022 0192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-tnum)",
      fontSize: 52,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: amount === "0" ? "var(--neutral-300)" : "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "$ ", fmt), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "Disponible $ 184.920.500"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 4,
      padding: "0 24px"
    }
  }, keys.map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => press(k),
    style: {
      height: 58,
      border: "none",
      background: "transparent",
      fontFamily: "var(--font-tnum)",
      fontSize: 24,
      fontWeight: 600,
      color: "var(--text-strong)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, k === "del" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "delete",
    size: 24
  }) : k))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 22px 28px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => go("home")
  }, "Continuar")));
}
Object.assign(__ds_scope, { MobileHome, MobileActivity, MobilePay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MobileApp.jsx
try { (() => {
const TABS = [{
  value: "home",
  label: "Inicio",
  icon: "home"
}, {
  value: "activity",
  label: "Movimientos",
  icon: "arrow-left-right"
}, {
  value: "pay",
  label: "",
  icon: "plus",
  center: true
}, {
  value: "recaudos",
  label: "Recaudos",
  icon: "arrow-down-to-line"
}, {
  value: "perfil",
  label: "Perfil",
  icon: "user"
}];
function MobileApp() {
  const [screen, setScreen] = React.useState("home");
  let view;
  if (screen === "home") view = /*#__PURE__*/React.createElement(__ds_scope.MobileHome, {
    go: setScreen
  });else if (screen === "activity") view = /*#__PURE__*/React.createElement(__ds_scope.MobileActivity, null);else if (screen === "pay") view = /*#__PURE__*/React.createElement(__ds_scope.MobilePay, {
    go: setScreen
  });else view = /*#__PURE__*/React.createElement(MobilePlaceholder, {
    label: screen === "recaudos" ? "Recaudos" : "Perfil",
    go: setScreen
  });
  const hideTab = screen === "pay";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      overflow: "hidden",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflow: "hidden"
    }
  }, view), !hideTab && /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0 8px 10px",
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, TABS.map(t => {
    if (t.center) {
      return /*#__PURE__*/React.createElement("button", {
        key: t.value,
        onClick: () => setScreen("pay"),
        "aria-label": "Enviar",
        style: {
          width: 56,
          height: 56,
          marginTop: -18,
          borderRadius: "50%",
          border: "none",
          background: "var(--gou-gradient-soft)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "var(--shadow-glow-blue)"
        }
      }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: "plus",
        size: 26,
        strokeWidth: 2.4
      }));
    }
    const on = t.value === screen;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => setScreen(t.value),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: on ? "var(--blue-500)" : "var(--text-subtle)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 22,
      strokeWidth: on ? 2.3 : 1.9
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: on ? 700 : 500
      }
    }, t.label));
  })));
}
function MobilePlaceholder({
  label,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      background: "var(--surface-page)",
      color: "var(--text-muted)",
      textAlign: "center",
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 20,
      background: "var(--cyan-100)",
      color: "var(--cyan-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: label === "Recaudos" ? "arrow-down-to-line" : "user",
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 240,
      fontSize: 14
    }
  }, "Vista demostrativa del UI kit m\xF3vil."));
}
Object.assign(__ds_scope, { MobileApp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/LoginScreen.jsx
try { (() => {
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      height: "100%",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--gou-wash)",
      padding: "48px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GouLogo, {
    variant: "white",
    height: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-display-md)",
      fontWeight: "var(--fw-black)",
      letterSpacing: "var(--ls-tighter)",
      lineHeight: 1.02,
      textTransform: "uppercase"
    }
  }, "Simplificamos.", /*#__PURE__*/React.createElement("br", null), "Avanzamos."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-lg)",
      opacity: 0.9,
      marginTop: 18,
      maxWidth: 420,
      lineHeight: 1.5
    }
  }, "La plataforma de pagos del holding. Transacciones, recaudos y dispersiones \u2014 confianza en cada movimiento.")), /*#__PURE__*/React.createElement(__ds_scope.GlassCard, {
    tint: "dark",
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "rgba(255,255,255,0.16)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield-check",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-body)"
    }
  }, "Conexi\xF3n segura"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      opacity: 0.8
    }
  }, "Cifrado de extremo a extremo"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      width: "100%",
      maxWidth: 380,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h1)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-tight)",
      color: "var(--text-strong)"
    }
  }, "Bienvenido"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      color: "var(--text-muted)",
      fontSize: "var(--fs-body)"
    }
  }, "Ingresa a la plataforma GOU Payments.")), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Correo corporativo",
    type: "email",
    leading: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "mail",
      size: 18
    }),
    defaultValue: "tesoreria@bancoaval.co"
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Contrase\xF1a",
    type: "password",
    leading: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "lock",
      size: 18
    }),
    trailing: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "eye",
      size: 18
    }),
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    defaultChecked: true,
    label: "Recordarme"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-link)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      textDecoration: "none"
    }
  }, "\xBFOlvidaste tu contrase\xF1a?")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, "Ingresar"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-subtle)"
    }
  }, "Protegido por GOU \xB7 Habilitador del grupo"))));
}
Object.assign(__ds_scope, { LoginScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/parts.jsx
try { (() => {
/* Shared platform chrome pieces for the GOU desktop UI kit. */

function Topbar({
  title,
  subtitle,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--topbar-h)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 28px",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h4)",
      color: "var(--text-strong)",
      letterSpacing: "var(--ls-tight)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    size: "sm",
    leading: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "search",
      size: 16
    }),
    placeholder: "Buscar transacci\xF3n, NIT\u2026",
    onChange: onSearch
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    ariaLabel: "Ayuda"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "life-buoy"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    ariaLabel: "Notificaciones"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--cyan-500)",
      border: "2px solid var(--surface-card)"
    }
  })));
}
function AccountChip({
  name = "Banco Aval",
  role = "Tesorería"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 10px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    tone: "aqua",
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-sm)",
      color: "#fff",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "rgba(255,255,255,0.55)"
    }
  }, role)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevrons-up-down",
    size: 16
  }));
}
function PageSection({
  title,
  action,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, (title || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-tight)",
      color: "var(--text-strong)"
    }
  }, title), action), children);
}

/* Simple area chart (brand gradient) — data viz, not iconography. */
function AreaChart({
  data = [],
  height = 120,
  accent = "var(--blue-500)",
  id = "g"
}) {
  const w = 560,
    h = height,
    pad = 6;
  const max = Math.max(...data, 1),
    min = Math.min(...data, 0);
  const range = max - min || 1;
  const pts = data.map((d, i) => [pad + i * (w - pad * 2) / (data.length - 1), h - pad - (d - min) / range * (h - pad * 2)]);
  const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const area = line + ` L ${w - pad} ${h} L ${pad} ${h} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `area-${id}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: accent,
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: accent,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#area-${id})`
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: accent,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), pts.map((p, i) => i === pts.length - 1 && /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "4",
    fill: accent,
    stroke: "#fff",
    strokeWidth: "2"
  })));
}
Object.assign(__ds_scope, { Topbar, AccountChip, PageSection, AreaChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/DashboardScreen.jsx
try { (() => {
function DashboardScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "var(--gou-wash)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      fontWeight: "var(--fw-bold)",
      opacity: 0.8
    }
  }, "Saldo consolidado \xB7 3 cuentas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-tnum)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-display-md)",
      letterSpacing: "var(--ls-tighter)",
      marginTop: 6,
      fontVariantNumeric: "tabular-nums"
    }
  }, "$ 184.920.500"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    iconLeft: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 18
    }),
    onClick: () => go("masivos")
  }, "Nuevo pago masivo"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-down-to-line",
      size: 18
    }),
    onClick: () => go("recaudos")
  }, "Crear recaudo"))), /*#__PURE__*/React.createElement(__ds_scope.GlassCard, {
    tint: "dark",
    style: {
      minWidth: 230
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      fontWeight: "var(--fw-bold)",
      opacity: 0.75
    }
  }, "Movimiento neto \xB7 hoy"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--fs-body-sm)",
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-down-left",
    size: 15
  }), " Recaudos"), /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
    value: 4820000,
    signed: true,
    size: "sm",
    style: {
      color: "var(--aqua-300)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--fs-body-sm)",
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 15
  }), " Pagos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-tnum)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-body-lg)"
    }
  }, "- $ 18.750.000")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Recaudado hoy",
    icon: "arrow-down-left",
    iconTone: "aqua",
    value: /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
      value: 4820000,
      size: "lg"
    }),
    delta: "+12,4%",
    trend: "up",
    footnote: "vs. ayer"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Pagado hoy",
    icon: "arrow-up-right",
    iconTone: "deep",
    value: /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
      value: 18750000,
      size: "lg"
    }),
    delta: "+3,1%",
    trend: "up",
    footnote: "vs. ayer"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Pendientes",
    icon: "clock",
    iconTone: "blue",
    value: "38",
    delta: "-5",
    trend: "down",
    footnote: "por aprobar"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Tasa de \xE9xito",
    icon: "check-check",
    iconTone: "brand",
    value: "99,2%",
    delta: "+0,3%",
    trend: "up",
    footnote: "\xFAltimos 7 d\xEDas"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(__ds_scope.PageSection, {
    title: "Flujo de dinero",
    action: /*#__PURE__*/React.createElement(__ds_scope.SegmentedControl, {
      size: "sm",
      options: [{
        value: "7d",
        label: "7 días"
      }, {
        value: "30d",
        label: "30 días"
      }, {
        value: "12m",
        label: "12 meses"
      }],
      defaultValue: "7d"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
    value: 132400000,
    size: "xl"
  }), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "success",
    dot: true
  }, "+18,6%")), /*#__PURE__*/React.createElement(__ds_scope.AreaChart, {
    id: "flow",
    data: [18, 24, 20, 32, 28, 40, 38, 52, 46, 60],
    accent: "var(--blue-500)",
    height: 140
  }))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(__ds_scope.PageSection, {
    title: "Actividad reciente",
    action: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => go("recaudos")
    }, "Ver todo")
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "arrow-down-left",
    iconTone: "aqua",
    title: "Recaudo \u2014 Cliente 4821",
    subtitle: "Hoy \xB7 10:24 \xB7 PSE",
    amount: 320000,
    status: "completed"
  }), /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "arrow-up-right",
    title: "Pago masivo n\xF3mina",
    subtitle: "Hoy \xB7 09:02 \xB7 412 destinatarios",
    amount: -18750000,
    status: "processing"
  }), /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "repeat",
    iconTone: "blue",
    title: "D\xE9bito autom\xE1tico \u2014 Suscripci\xF3n",
    subtitle: "Ayer \xB7 23:00",
    amount: -89900,
    status: "completed"
  }), /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "arrow-down-left",
    iconTone: "aqua",
    title: "Recaudo \u2014 Cliente 1190",
    subtitle: "Ayer \xB7 18:41 \xB7 Bot\xF3n bancario",
    amount: 1450000,
    status: "completed"
  }), /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "arrow-up-right",
    title: "Pago proveedor \u2014 Log\xEDstica S.A.",
    subtitle: "Ayer \xB7 15:12",
    amount: -2300000,
    status: "failed"
  }))))));
}
Object.assign(__ds_scope, { DashboardScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/PagosMasivosScreen.jsx
try { (() => {
const BATCHES = [{
  id: "LM-2840",
  name: "Nómina quincena junio",
  n: 412,
  amount: 18750000,
  status: "processing",
  date: "Hoy · 09:02",
  prog: 68
}, {
  id: "LM-2839",
  name: "Pago proveedores",
  n: 86,
  amount: 42300000,
  status: "completed",
  date: "Hoy · 08:10"
}, {
  id: "LM-2835",
  name: "Reembolsos clientes",
  n: 23,
  amount: 1980000,
  status: "completed",
  date: "Ayer · 16:44"
}, {
  id: "LM-2831",
  name: "Bonificaciones Q2",
  n: 158,
  amount: 9450000,
  status: "scheduled",
  date: "12 jun · 06:00"
}, {
  id: "LM-2829",
  name: "Pago logística",
  n: 4,
  amount: 2300000,
  status: "failed",
  date: "Ayer · 15:12"
}];
function Th({
  children,
  align = "left",
  w
}) {
  return /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: align,
      padding: "0 16px 12px",
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-subtle)",
      width: w
    }
  }, children);
}
function Td({
  children,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: align,
      padding: "14px 16px",
      borderTop: "1px solid var(--border-subtle)",
      verticalAlign: "middle"
    }
  }, children);
}
function PagosMasivosScreen() {
  const [tab, setTab] = React.useState("todos");
  const rows = tab === "todos" ? BATCHES : BATCHES.filter(b => tab === "activos" ? ["processing", "scheduled"].includes(b.status) : b.status === "completed");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--fs-body)",
      maxWidth: 520
    }
  }, "Carga un archivo o crea un lote para dispersar pagos a m\xFAltiples destinatarios en una sola operaci\xF3n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "upload",
      size: 18
    })
  }, "Cargar archivo"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 18
    })
  }, "Nuevo lote"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Dispersado este mes",
    icon: "send",
    iconTone: "deep",
    value: /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
      value: 284500000,
      size: "lg"
    }),
    delta: "+22%",
    trend: "up",
    footnote: "vs. mayo"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Lotes en proceso",
    icon: "loader",
    iconTone: "blue",
    value: "2",
    footnote: "612 destinatarios"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Destinatarios activos",
    icon: "users",
    iconTone: "aqua",
    value: "1.284",
    delta: "+64",
    trend: "up",
    footnote: "este mes"
  })), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(__ds_scope.PageSection, {
    title: "Lotes recientes",
    action: /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
      value: tab,
      onChange: setTab,
      tabs: [{
        value: "todos",
        label: "Todos",
        count: BATCHES.length
      }, {
        value: "activos",
        label: "Activos"
      }, {
        value: "completados",
        label: "Completados"
      }]
    })
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "Lote"), /*#__PURE__*/React.createElement(Th, {
    align: "right",
    w: 120
  }, "Destinatarios"), /*#__PURE__*/React.createElement(Th, {
    align: "right",
    w: 160
  }, "Monto"), /*#__PURE__*/React.createElement(Th, {
    w: 150
  }, "Estado"), /*#__PURE__*/React.createElement(Th, {
    align: "right",
    w: 130
  }, "Fecha"), /*#__PURE__*/React.createElement(Th, {
    w: 44
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(b => /*#__PURE__*/React.createElement("tr", {
    key: b.id
  }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: b.name,
    tone: "deep",
    size: 38
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      fontSize: "var(--fs-body)"
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-tnum)"
    }
  }, b.id))), b.status === "processing" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: b.prog,
    size: "sm"
  }))), /*#__PURE__*/React.createElement(Td, {
    align: "right"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-tnum)",
      fontWeight: "var(--fw-semibold)",
      fontVariantNumeric: "tabular-nums"
    }
  }, b.n)), /*#__PURE__*/React.createElement(Td, {
    align: "right"
  }, /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
    value: -b.amount,
    size: "md"
  })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    status: b.status
  })), /*#__PURE__*/React.createElement(Td, {
    align: "right"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, b.date)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18
  })))))))));
}
Object.assign(__ds_scope, { PagosMasivosScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/PagosMasivosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/RecaudosScreen.jsx
try { (() => {
const CHANNELS = [{
  label: "PSE",
  pct: 54,
  tone: "blue"
}, {
  label: "Botón bancario",
  pct: 28,
  tone: "brand"
}, {
  label: "Débito automático",
  pct: 18,
  tone: "aqua"
}];
function RecaudosScreen({
  onToast
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Recaudado este mes",
    icon: "arrow-down-to-line",
    iconTone: "aqua",
    value: /*#__PURE__*/React.createElement(__ds_scope.MoneyAmount, {
      value: 96420000,
      size: "lg"
    }),
    delta: "+15,2%",
    trend: "up",
    footnote: "vs. mayo"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Links activos",
    icon: "link",
    iconTone: "blue",
    value: "47",
    footnote: "12 vencen hoy"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatCard, {
    label: "Conversi\xF3n",
    icon: "trending-up",
    iconTone: "brand",
    value: "84,6%",
    delta: "+2,1%",
    trend: "up",
    footnote: "pago completado"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.3fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(__ds_scope.PageSection, {
    title: "Nuevo recaudo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Concepto",
    placeholder: "Ej. Factura 0042 \u2014 junio"
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Monto",
    leading: /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, "$"),
    placeholder: "0",
    inputMode: "numeric",
    defaultValue: "1.450.000"
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "Canal de cobro",
    options: ["PSE", "Botón bancario", "Débito automático"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "var(--space-3) 0"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Switch, {
    defaultChecked: true,
    label: "Enviar recordatorio autom\xE1tico"
  }), /*#__PURE__*/React.createElement(__ds_scope.Switch, {
    label: "Permitir pago parcial"
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "link",
      size: 18
    }),
    onClick: () => onToast && onToast()
  }, "Generar link de cobro")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(__ds_scope.PageSection, {
    title: "Recaudo por canal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, CHANNELS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--fs-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)"
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-tnum)",
      color: "var(--text-muted)"
    }
  }, c.pct, "%")), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: c.pct,
    tone: c.tone,
    size: "sm"
  })))))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(__ds_scope.PageSection, {
    title: "Recaudos recientes",
    action: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "ghost",
      size: "sm"
    }, "Ver todo")
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "arrow-down-left",
    iconTone: "aqua",
    title: "Cliente 4821 \u2014 Factura 0042",
    subtitle: "Hoy \xB7 10:24 \xB7 PSE",
    amount: 320000,
    status: "completed"
  }), /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "arrow-down-left",
    iconTone: "aqua",
    title: "Cliente 1190 \u2014 Suscripci\xF3n",
    subtitle: "Hoy \xB7 09:58 \xB7 Bot\xF3n bancario",
    amount: 1450000,
    status: "completed"
  }), /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "clock",
    iconTone: "blue",
    title: "Cliente 2087 \u2014 Factura 0039",
    subtitle: "Hoy \xB7 08:30 \xB7 PSE",
    amount: 890000,
    status: "pending"
  }), /*#__PURE__*/React.createElement(__ds_scope.TransactionRow, {
    icon: "arrow-down-left",
    iconTone: "aqua",
    title: "Cliente 3340 \u2014 Mensualidad",
    subtitle: "Ayer \xB7 19:11 \xB7 D\xE9bito autom\xE1tico",
    amount: 210000,
    status: "completed"
  })))))));
}
Object.assign(__ds_scope, { RecaudosScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/RecaudosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/App.jsx
try { (() => {
const NAV = [{
  section: "PRINCIPAL",
  items: [{
    value: "home",
    label: "Inicio",
    icon: "layout-dashboard"
  }, {
    value: "tx",
    label: "Transacciones",
    icon: "arrow-left-right",
    badge: 3
  }]
}, {
  section: "PRODUCTOS",
  items: [{
    value: "masivos",
    label: "Pagos masivos",
    icon: "users"
  }, {
    value: "recaudos",
    label: "Recaudos",
    icon: "arrow-down-to-line"
  }, {
    value: "debitos",
    label: "Débitos automáticos",
    icon: "repeat"
  }]
}, {
  section: "CUENTA",
  items: [{
    value: "reportes",
    label: "Reportes",
    icon: "bar-chart-3"
  }, {
    value: "config",
    label: "Configuración",
    icon: "settings"
  }]
}];
const META = {
  home: {
    title: "Inicio",
    subtitle: "Resumen de tu operación · martes 10 de junio"
  },
  masivos: {
    title: "Pagos masivos",
    subtitle: "Dispersa pagos a múltiples destinatarios"
  },
  recaudos: {
    title: "Recaudos",
    subtitle: "Cobra y concilia en un solo lugar"
  }
};
function App() {
  const [logged, setLogged] = React.useState(false);
  const [route, setRoute] = React.useState("home");
  const [toast, setToast] = React.useState(null);
  const showToast = t => {
    setToast(t);
    setTimeout(() => setToast(null), 3200);
  };
  if (!logged) return /*#__PURE__*/React.createElement(__ds_scope.LoginScreen, {
    onLogin: () => setLogged(true)
  });
  const meta = META[route] || {
    title: "GOU Payments",
    subtitle: ""
  };
  let view;
  if (route === "home") view = /*#__PURE__*/React.createElement(__ds_scope.DashboardScreen, {
    go: setRoute
  });else if (route === "masivos") view = /*#__PURE__*/React.createElement(__ds_scope.PagosMasivosScreen, null);else if (route === "recaudos") view = /*#__PURE__*/React.createElement(__ds_scope.RecaudosScreen, {
    onToast: () => showToast({
      kind: "success",
      title: "Link de cobro generado",
      description: "Se copió al portapapeles y se envió por correo."
    })
  });else view = /*#__PURE__*/React.createElement(Placeholder, {
    route: route
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SidebarNav, {
    active: route,
    onSelect: setRoute,
    items: NAV,
    header: /*#__PURE__*/React.createElement(__ds_scope.GouLogo, {
      variant: "white",
      height: 32
    }),
    footer: /*#__PURE__*/React.createElement(__ds_scope.AccountChip, null)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Topbar, {
    title: meta.title,
    subtitle: meta.subtitle
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, view))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Toast, {
    kind: toast.kind,
    title: toast.title,
    description: toast.description,
    onClose: () => setToast(null)
  })));
}
function Placeholder({
  route
}) {
  const labels = {
    tx: "Transacciones",
    debitos: "Débitos automáticos",
    reportes: "Reportes",
    config: "Configuración"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: 420,
      gap: 12,
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 20,
      background: "var(--surface-sunken)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-subtle)",
      fontSize: 28,
      fontWeight: 800
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, labels[route] || route), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, "Vista demostrativa \u2014 este m\xF3dulo del UI kit a\xFAn no est\xE1 desarrollado. Usa Inicio, Pagos masivos y Recaudos."));
}
Object.assign(__ds_scope, { App });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/App.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GouLogo = __ds_scope.GouLogo;

__ds_ns.GouMark = __ds_scope.GouMark;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MoneyAmount = __ds_scope.MoneyAmount;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.TransactionRow = __ds_scope.TransactionRow;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.MobileApp = __ds_scope.MobileApp;

__ds_ns.MobileHome = __ds_scope.MobileHome;

__ds_ns.MobileActivity = __ds_scope.MobileActivity;

__ds_ns.MobilePay = __ds_scope.MobilePay;

__ds_ns.App = __ds_scope.App;

__ds_ns.DashboardScreen = __ds_scope.DashboardScreen;

__ds_ns.LoginScreen = __ds_scope.LoginScreen;

__ds_ns.PagosMasivosScreen = __ds_scope.PagosMasivosScreen;

__ds_ns.RecaudosScreen = __ds_scope.RecaudosScreen;

__ds_ns.Topbar = __ds_scope.Topbar;

__ds_ns.AccountChip = __ds_scope.AccountChip;

__ds_ns.PageSection = __ds_scope.PageSection;

__ds_ns.AreaChart = __ds_scope.AreaChart;

})();
