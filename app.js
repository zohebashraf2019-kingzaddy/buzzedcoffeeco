/* ==========================================================
   Buzzed Coffee — site interactions
   Edit CONFIG / MENU / EVENTS below to update the site.
   ========================================================== */

const CONFIG = {
  // Online ordering link (Square, Toast, etc). Leave "" to show a "Call Ahead" button instead.
  orderUrl: "https://buzzedcoffeeco.square.site/s/order",
  phone: "+17753841777",
  // Contact + newsletter forms are delivered to this inbox via FormSubmit (formsubmit.co).
  // The very first submission sends a one-time activation email to this address — click it once.
  formEmail: "buzzedcoffeeco@gmail.com",
  timeZone: "America/Los_Angeles",
};

/* ---------- HOURS (0 = Sunday) ---------- */
const HOURS = [
  { day: "Sunday", open: "08:00", close: "16:00" },
  { day: "Monday", open: "07:00", close: "17:00" },
  { day: "Tuesday", open: "07:00", close: "17:00" },
  { day: "Wednesday", open: "07:00", close: "17:00" },
  { day: "Thursday", open: "07:00", close: "17:00" },
  { day: "Friday", open: "07:00", close: "17:00" },
  { day: "Saturday", open: "08:00", close: "16:00" },
];

/* ---------- MENU ---------- */
const MENU = [
  {
    id: "coffee",
    label: "Coffee",
    intro: "Iced, hot or blended. Add any syrup or swap your milk.",
    items: [
      { name: "Latte", price: "$4.75 – $7.55", desc: "espresso, steamed milk" },
      { name: "Caramel Macchiato", price: "$4.95 – $7.70", desc: "espresso, milk, vanilla syrup, caramel drizzle", tag: "Fan fave" },
      { name: "Mocha", price: "$4.75 – $7.55", desc: "espresso, mocha syrup, milk" },
      { name: "White Mocha", price: "$4.75 – $7.55", desc: "espresso, white chocolate syrup, milk" },
      { name: "Cappuccino", price: "$4.65 – $6.95", desc: "espresso, milk, foam" },
      { name: "Americano", price: "$4.55 – $6.15", desc: "espresso, hot water" },
      { name: "Double Espresso", price: "$3.00", desc: "two shots, straight up" },
      { name: "House Drip Coffee", price: "$3.00 – $4.50", desc: "fresh brewed coffee" },
      { name: "Iced Coffee", price: "$3.00 – $4.50", desc: "house coffee over ice" },
      { name: "Cold Brew", price: "Ask us", desc: "slow-steeped, smooth & strong" },
    ],
  },
  {
    id: "tea",
    label: "Tea, Matcha & Chai",
    intro: "Lattes, loose leaf and our flavored matcha & chai combos.",
    items: [
      { name: "Matcha", price: "$4.65 – $6.70", desc: "matcha tea, milk" },
      { name: "Chai Latte", price: "$4.75 – $6.80", desc: "chai tea, milk" },
      { name: "London Fog", price: "$4.95 – $6.15", desc: "earl grey, vanilla, steamed milk" },
      { name: "Earl Grey Tea", price: "$4.55 – $6.00", desc: "tea bag, hot water" },
      { name: "Black Tea", price: "$4.55 – $6.00", desc: "tea bag, hot water" },
      { name: "Green Tea", price: "$4.55 – $6.00", desc: "tea bag, hot water" },
      { name: "Lemon Ginger Tea", price: "$4.45 – $5.95", desc: "herbal, caffeine-free" },
      { name: "Mint Medley", price: "$3.95 – $5.60", desc: "herbal, caffeine-free" },
    ],
    flavors: [
      { title: "Matcha flavors", list: ["Pineapple", "Strawberry", "Lavender Vanilla", "Coconut Raspberry"] },
      { title: "Chai flavors", list: ["Maple", "Brown Sugar", "Hazelnut", "Salted Caramel"] },
      { title: "White Chai flavors", list: ["Apple", "Shortbread", "White Mocha", "White Peppermint"] },
    ],
  },
  {
    id: "refreshers",
    label: "Refreshers",
    intro: "Red Bull, Sugar-Free Red Bull or Yerba Mate + your pick of 21 flavors. Try the Refresher Lab below ⚡",
    items: [
      { name: "Red Bull Refresher (16oz)", price: "$6.05", desc: "pick your flavors" },
      { name: "SF Red Bull Refresher (16oz)", price: "$6.05", desc: "sugar-free, all the buzz" },
      { name: "SF Red Bull Refresher (24oz)", price: "$7.25", desc: "sugar-free, big buzz" },
      { name: "Yerba Mate Refresher (24oz)", price: "$7.00", desc: "plant-powered energy", tag: "Big cup" },
      { name: "Lemonade", price: "Ask us", desc: "classic or flavored — try it raspberry maple" },
    ],
    flavors: [
      {
        title: "Refresher flavors",
        list: ["Kiwi", "Rose", "Orange", "Mango", "Passion Fruit", "Peach", "Pineapple", "Pomegranate", "Raspberry", "Strawberry", "Blue Raspberry", "Apple", "Blackberry", "Blueberry", "Cranberry", "Cherry", "Coconut", "Guava", "Hibiscus", "Lavender", "Lime"],
      },
    ],
  },
  {
    id: "seasonal",
    label: "Seasonal 🍂",
    intro: "Here for a good time, not a long time.",
    items: [
      { name: "Pumpkin Maple Oat Chai", price: "Seasonal", desc: "chai, pumpkin, maple, oat milk", tag: "Fall" },
      { name: "Apple Caramel Macchiato", price: "Seasonal", desc: "espresso, apple, milk, caramel drizzle", tag: "Fall" },
      { name: "Raspberry Maple Lemonade", price: "Seasonal", desc: "lemonade, raspberry, maple", tag: "Fall" },
      { name: "Brown Sugar Honey Matcha", price: "Seasonal", desc: "matcha, brown sugar, honey, milk", tag: "Fall" },
      { name: "Banana Bread Chai", price: "New", desc: "chai + our NEW banana syrup", tag: "New" },
      { name: "Banana Mocha", price: "New", desc: "mocha + our NEW banana syrup", tag: "New" },
    ],
  },
  {
    id: "food",
    label: "Food & Deals",
    intro: "Sip & Snack Deal — any medium drink + a meal for $13.49.",
    items: [
      { name: "Sip & Snack Deal", price: "$13.49", desc: "any medium drink + one meal below", tag: "Deal" },
      { name: "Egg Bites", price: "Deal item", desc: "" },
      { name: "Caesar Salad Wrap", price: "Deal item", desc: "" },
      { name: "Fiesta Chicken Salad", price: "Deal item", desc: "" },
      { name: "Honey Mustard Chicken Wrap", price: "Deal item", desc: "" },
      { name: "Yogurt Parfait", price: "Deal item", desc: "" },
      { name: "Turkey Bacon Avocado Club", price: "Deal item", desc: "" },
    ],
  },
  {
    id: "other",
    label: "Other Drinks",
    intro: "Cans, cocoa and something for the pup.",
    items: [
      { name: "Hot Chocolate", price: "$4.65 – $6.35", desc: "rich & chocolatey" },
      { name: "Red Bull (Can Only)", price: "$3.05", desc: "grab & go" },
      { name: "SF Red Bull (Can Only)", price: "$3.05", desc: "sugar-free, grab & go" },
      { name: "Pup Cup", price: "$1.50", desc: "for the goodest customers 🐶", tag: "🐾" },
    ],
  },
];

const SYRUPS = ["Vanilla", "Caramel", "Hazelnut", "Raspberry", "Rose", "Mocha", "White Mocha", "Pistachio", "Cane Sugar", "Apple", "Lavender", "Brown Sugar Cinnamon", "Coconut", "Blackberry", "Peppermint", "Cinnamon", "Maple", "Salted Caramel"];
const NEW_SYRUPS = ["Banana"];
const MILKS = ["Whole", "Oat", "Almond", "Soy", "Non-Fat", "Coconut (when available)"];

/* ---------- EVENTS (YYYY-MM-DD, 24h time) — past events hide automatically ---------- */
const EVENTS = [
  { date: "2026-11-01", end: "2026-11-30", title: "Reno Coffee Crawl", detail: "All month · $5 credit with your pass", link: "https://coffeecrawls.com" },
  { date: "2026-11-18", time: "19:00", title: "Garage Babes Pilates Class", detail: "Wed · 7:00 PM" },
  { date: "2026-11-20", time: "13:30", title: "Garage Babes Pilates Class", detail: "Fri · 1:30 PM" },
  { date: "2026-11-20", time: "16:00", title: "Garage Babes Pilates Class", detail: "Fri · 4:00 PM" },
  { date: "2026-11-21", time: "13:00", title: "Garage Babes Pilates Class", detail: "Sat · 1:00 PM" },
  { date: "2026-11-28", time: "13:00", title: "Garage Babes Pilates Class", detail: "Sat · 1:00 PM" },
];

/* ---------- REFRESHER LAB ---------- */
const BASES = {
  rb: { name: "Red Bull", sizes: [{ oz: "16oz", price: 6.05 }] },
  sf: { name: "Sugar-Free Red Bull", sizes: [{ oz: "16oz", price: 6.05 }, { oz: "24oz", price: 7.25 }] },
  ym: { name: "Yerba Mate", sizes: [{ oz: "24oz", price: 7.0 }] },
};
const FLAVOR_COLORS = {
  Kiwi: "#8bc34a", Rose: "#f48fb1", Orange: "#ff9800", Mango: "#ffb300", "Passion Fruit": "#ff7043",
  Peach: "#ffab91", Pineapple: "#ffe066", Pomegranate: "#c2185b", Raspberry: "#e91e63", Strawberry: "#ef5350",
  "Blue Raspberry": "#2196f3", Apple: "#c5e1a5", Blackberry: "#6a1b9a", Blueberry: "#3f51b5", Cranberry: "#b71c1c",
  Cherry: "#d32f2f", Coconut: "#f5f5f5", Guava: "#ff8a80", Hibiscus: "#ad1457", Lavender: "#b39ddb", Lime: "#76ff03",
};
const NAME_WORDS = {
  start: ["Electric", "Thunder", "Neon", "Biggest Little", "Wolfpack", "Truckee", "Midtown", "Sierra", "High Desert", "Volt"],
  end: ["Buzz", "Bolt", "Jolt", "Spark", "Surge", "Zap", "Fizz", "Charge"],
};

/* ==========================================================
   helpers
   ========================================================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const money = (n) => `$${n.toFixed(2)}`;

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2600);
}

/** Current date/time parts in Reno, regardless of the visitor's own timezone. */
function renoNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CONFIG.timeZone, weekday: "short", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(new Date()).reduce((a, p) => ((a[p.type] = p.value), a), {});
  const dayIdx = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday);
  const hour = parts.hour === "24" ? "00" : parts.hour;
  return { dayIdx, date: `${parts.year}-${parts.month}-${parts.day}`, minutes: +hour * 60 + +parts.minute };
}
const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
const fmt12 = (hhmm) => { let [h, m] = hhmm.split(":").map(Number); const ap = h >= 12 ? "pm" : "am"; h = h % 12 || 12; return m ? `${h}:${String(m).padStart(2, "0")}${ap}` : `${h}${ap}`; };

/* ==========================================================
   nav
   ========================================================== */
function initNav() {
  const nav = $(".nav");
  const btn = $(".nav__toggle");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  $$(".nav__links a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); }));

  $$("[data-order-link]").forEach((a) => {
    if (CONFIG.orderUrl) { a.href = CONFIG.orderUrl; a.target = "_blank"; a.rel = "noopener"; if (!("keepText" in a.dataset)) a.textContent = "Order Ahead"; }
    else { a.href = `tel:${CONFIG.phone}`; if (!("keepText" in a.dataset)) a.textContent = "Call Ahead"; }
  });
  $("#year").textContent = new Date().getFullYear();

  // Logo → smooth scroll back to the very top of the page
  $$("[data-to-top]").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", location.pathname + location.search);
  }));
}

/* ==========================================================
   hours + open status
   ========================================================== */
function initHours() {
  const now = renoNow();
  const tbody = $("#hoursTable");
  const order = [1, 2, 3, 4, 5, 6, 0];
  tbody.innerHTML = order.map((i) => {
    const h = HOURS[i];
    return `<tr class="${i === now.dayIdx ? "is-today" : ""}"><td>${h.day}${i === now.dayIdx ? " · today" : ""}</td><td>${fmt12(h.open)} – ${fmt12(h.close)}</td></tr>`;
  }).join("");

  const update = () => {
    const n = renoNow();
    const today = HOURS[n.dayIdx];
    const el = $("[data-open-status]");
    const label = $("b", el);
    const o = toMin(today.open), c = toMin(today.close);
    el.classList.remove("is-open", "is-closed");
    if (n.minutes >= o && n.minutes < c) {
      el.classList.add("is-open");
      label.textContent = c - n.minutes <= 60 ? `Open · closes ${fmt12(today.close)}` : `Open now · till ${fmt12(today.close)}`;
    } else {
      el.classList.add("is-closed");
      const next = n.minutes < o ? today : HOURS[(n.dayIdx + 1) % 7];
      label.textContent = `Closed · opens ${n.minutes < o ? "" : "tmrw "}${fmt12(next.open)}`;
    }
  };
  update();
  setInterval(update, 60000);
}

/* ==========================================================
   menu
   ========================================================== */
function renderMenu() {
  const tabs = $("#menuTabs");
  const panels = $("#menuPanels");

  tabs.innerHTML = MENU.map((c, i) =>
    `<button class="tab" role="tab" id="tab-${c.id}" aria-controls="panel-${c.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(c.label)}</button>`
  ).join("");

  panels.innerHTML = MENU.map((c, i) => `
    <div class="panel ${i === 0 ? "is-active" : ""}" role="tabpanel" id="panel-${c.id}" aria-labelledby="tab-${c.id}">
      <p class="panel__intro">${esc(c.intro)}</p>
      <div class="items">
        ${c.items.map((it) => `
          <div class="item" data-search="${esc((it.name + " " + (it.desc || "") + " " + c.label).toLowerCase())}">
            <h4>${esc(it.name)}${it.tag ? `<span class="tag">${esc(it.tag)}</span>` : ""}</h4>
            <span class="price">${esc(it.price)}</span>
            ${it.desc ? `<p>${esc(it.desc)}</p>` : ""}
          </div>`).join("")}
      </div>
      ${(c.flavors || []).map((f) => `
        <div class="flavor-block" data-search="${esc((f.title + " " + f.list.join(" ")).toLowerCase())}">
          <h4>${esc(f.title)}</h4>
          <div class="chips">${f.list.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
        </div>`).join("")}
    </div>`).join("");

  $("#syrupChips").innerHTML =
    NEW_SYRUPS.map((s) => `<span class="chip chip--hit">🍌 ${esc(s)} · NEW</span>`).join("") +
    SYRUPS.map((s) => `<span class="chip">${esc(s)}</span>`).join("");
  $("#milkChips").innerHTML = MILKS.map((m) => `<span class="chip">${esc(m)}</span>`).join("");

  const select = (btn) => {
    $$(".tab", tabs).forEach((t) => { t.setAttribute("aria-selected", t === btn); t.tabIndex = t === btn ? 0 : -1; });
    $$(".panel", panels).forEach((p) => p.classList.toggle("is-active", p.id === btn.getAttribute("aria-controls")));
  };
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (!b) return;
    $("#menuSearch").value = "";
    runSearch("");
    select(b);
  });
  tabs.addEventListener("keydown", (e) => {
    const list = $$(".tab", tabs);
    const i = list.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const n = list[(i + (e.key === "ArrowRight" ? 1 : -1) + list.length) % list.length];
      n.focus(); select(n); e.preventDefault();
    }
  });

  // Search across ALL categories
  const runSearch = (q) => {
    q = q.trim().toLowerCase();
    const empty = $("#menuEmpty");
    if (!q) {
      $$(".item, .flavor-block", panels).forEach((el) => (el.hidden = false));
      $$(".panel__intro", panels).forEach((el) => (el.hidden = false));
      const sel = $(".tab[aria-selected='true']", tabs);
      $$(".panel", panels).forEach((p) => p.classList.toggle("is-active", p.id === sel.getAttribute("aria-controls")));
      tabs.style.opacity = "";
      empty.hidden = true;
      return;
    }
    let hits = 0;
    $$(".panel", panels).forEach((p) => {
      let any = 0;
      $$(".item, .flavor-block", p).forEach((el) => { const m = el.dataset.search.includes(q); el.hidden = !m; any += m; });
      $(".panel__intro", p).hidden = true;
      p.classList.toggle("is-active", any > 0);
      hits += any;
    });
    tabs.style.opacity = ".45";
    empty.hidden = hits > 0;
  };
  $("#menuSearch").addEventListener("input", (e) => runSearch(e.target.value));
}

/* ==========================================================
   refresher lab
   ========================================================== */
function initLab() {
  const form = $("#labForm");
  const flavorsEl = $("#labFlavors");
  const sizeEl = $("#labSize");
  const picked = [];
  const allFlavors = MENU.find((c) => c.id === "refreshers").flavors[0].list;

  flavorsEl.innerHTML = allFlavors.map((f) =>
    `<button type="button" class="flavor" aria-pressed="false" data-f="${esc(f)}" style="--c:${FLAVOR_COLORS[f] || "#ccc"}"><i></i>${esc(f)}</button>`
  ).join("");

  const base = () => $("input[name=base]:checked", form).value;

  const renderSizes = () => {
    const b = BASES[base()];
    const current = $("input[name=size]:checked", form)?.value;
    sizeEl.innerHTML = b.sizes.map((s, i) =>
      `<label><input type="radio" name="size" value="${s.oz}" ${current === s.oz || (!b.sizes.some((x) => x.oz === current) && i === 0) ? "checked" : ""}/><span>${s.oz} · ${money(s.price)}</span></label>`
    ).join("");
  };

  const nameFor = (list) => {
    if (!list.length) return "Pick some flavors!";
    const seed = list.join("").split("").reduce((a, c) => a + c.charCodeAt(0), 0) + base().charCodeAt(0);
    return `The ${NAME_WORDS.start[seed % NAME_WORDS.start.length]} ${NAME_WORDS.end[(seed >> 2) % NAME_WORDS.end.length]}`;
  };

  const update = () => {
    const b = BASES[base()];
    const size = $("input[name=size]:checked", form)?.value || b.sizes[0].oz;
    const price = b.sizes.find((s) => s.oz === size)?.price ?? b.sizes[0].price;
    $("#flavorCount").textContent = `(${picked.length}/3)`;
    $$(".flavor", flavorsEl).forEach((btn) => {
      const on = picked.includes(btn.dataset.f);
      btn.setAttribute("aria-pressed", on);
      btn.disabled = !on && picked.length >= 3;
    });
    const cols = picked.map((f) => FLAVOR_COLORS[f] || "#ccc");
    const liquid = $("#cupLiquid");
    if (!cols.length) liquid.style.background = base() === "ym" ? "linear-gradient(180deg,#e8f5a8,#b8d94a)" : "linear-gradient(180deg,#d9f1ff,#9fd7ff)";
    else if (cols.length === 1) liquid.style.background = `linear-gradient(180deg, ${cols[0]}cc, ${cols[0]})`;
    else liquid.style.background = `linear-gradient(180deg, ${cols.join(", ")})`;

    $("#labName").textContent = nameFor(picked);
    $("#labDesc").textContent = picked.length
      ? `${size} ${b.name} refresher with ${picked.join(", ").replace(/, ([^,]*)$/, " & $1")}`
      : `${size} ${b.name} refresher — choose up to 3 flavors.`;
    $("#labPrice").textContent = money(price);
  };

  flavorsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".flavor");
    if (!btn) return;
    const f = btn.dataset.f;
    const i = picked.indexOf(f);
    if (i >= 0) picked.splice(i, 1);
    else if (picked.length < 3) picked.push(f);
    update();
  });
  form.addEventListener("change", (e) => {
    if (e.target.name === "base") renderSizes();
    update();
  });
  $("#labRandom").addEventListener("click", () => {
    picked.length = 0;
    const pool = [...allFlavors];
    const n = 2 + Math.floor(Math.random() * 2);
    while (picked.length < n) picked.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    update();
  });
  $("#labCopy").addEventListener("click", async () => {
    if (!picked.length) return toast("Pick at least one flavor first ⚡");
    const text = `Hi! Can I get a ${$("#labDesc").textContent}? (${$("#labName").textContent} from the Refresher Lab ⚡)`;
    try { await navigator.clipboard.writeText(text); toast("Order copied — show it at the counter!"); }
    catch { toast(text); }
  });

  renderSizes();
  update();
}

/* ==========================================================
   events
   ========================================================== */
function initEvents() {
  const today = renoNow().date;
  const list = $("#eventList");
  const upcoming = EVENTS.filter((e) => (e.end || e.date) >= today).sort((a, b) => (a.date + (a.time || "")).localeCompare(b.date + (b.time || "")));
  if (!upcoming.length) {
    list.innerHTML = `<li class="event-row"><div class="event-row__date"><b>⚡</b><small>SOON</small></div><div><h4>New events dropping soon</h4><p>Follow <a href="https://www.instagram.com/buzzedcoffeeco/" target="_blank" rel="noopener" style="color:var(--yellow)">@buzzedcoffeeco</a> for the latest.</p></div></li>`;
    return;
  }
  list.innerHTML = upcoming.slice(0, 6).map((e) => {
    const d = new Date(e.date + "T12:00:00");
    const ongoing = e.date < today;
    const mon = ongoing ? "THRU " + new Date(e.end + "T12:00:00").getDate() : d.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const title = e.link ? `<a href="${esc(e.link)}" target="_blank" rel="noopener" style="color:#fff">${esc(e.title)}</a>` : esc(e.title);
    return `<li class="event-row"><div class="event-row__date"><b>${ongoing ? "NOW" : d.getDate()}</b><small>${mon}</small></div><div><h4>${title}</h4><p>${esc(e.detail)}</p></div></li>`;
  }).join("");
}

/* ==========================================================
   reels / videos
   ========================================================== */
function initVideos() {
  // Autoplay muted reels only when on screen (saves data on mobile)
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const v = en.target;
      if (en.isIntersecting) { v.preload = "auto"; v.play().catch(() => {}); }
      else v.pause();
    });
  }, { threshold: 0.35 });
  $$(".reel video, [data-autoplay]").forEach((v) => io.observe(v));

  $$(".reel").forEach((reel) => {
    const v = $("video", reel);
    const btn = $(".reel__sound", reel);
    reel.addEventListener("click", () => {
      const unmute = v.muted;
      $$(".reel video").forEach((o) => { o.muted = true; });
      $$(".reel__sound").forEach((b) => (b.textContent = "🔇"));
      v.muted = !unmute;
      btn.textContent = unmute ? "🔊" : "🔇";
      if (unmute) { v.currentTime = 0; v.play().catch(() => {}); }
    });
  });
}

/* ==========================================================
   forms (FormSubmit AJAX)
   ========================================================== */
async function sendForm(payload) {
  const res = await fetch(`https://formsubmit.co/ajax/${CONFIG.formEmail}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _template: "table", _captcha: "false", ...payload }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || String(data.success) === "false") throw new Error(data.message || "Send failed");
  return data;
}

function initForms() {
  const form = $("#contactForm");
  const status = $("#formStatus");

  // Buttons elsewhere on the page can preselect an inquiry type
  $$("[data-inquiry]").forEach((a) => a.addEventListener("click", () => {
    const sel = $("#inquirySelect");
    const opt = [...sel.options].find((o) => o.text === a.dataset.inquiry);
    if (opt) sel.value = opt.value;
  }));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form._honey.value) return;
    let ok = true;
    ["name", "email", "message"].forEach((n) => {
      const f = form[n];
      const bad = !f.value.trim() || (n === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
      f.classList.toggle("is-invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) { status.className = "form__status err"; status.textContent = "Please fill in your name, a valid email and a message."; return; }

    const btn = $("button[type=submit]", form);
    btn.disabled = true; btn.textContent = "Sending…";
    status.className = "form__status"; status.textContent = "";
    try {
      await sendForm({
        _subject: `Website inquiry: ${form.inquiry.value} — ${form.name.value}`,
        _replyto: form.email.value,
        Name: form.name.value,
        Email: form.email.value,
        Phone: form.phone.value || "—",
        Inquiry: form.inquiry.value,
        "Date needed": form.date.value || "—",
        Message: form.message.value,
      });
      form.reset();
      status.className = "form__status ok";
      status.textContent = "Got it! The Buzzed crew will get back to you soon ⚡";
    } catch {
      status.className = "form__status err";
      status.innerHTML = `Hmm, that didn't send. Email us at <a href="mailto:${CONFIG.formEmail}" style="color:inherit">${CONFIG.formEmail}</a> or call (775) 384-1777.`;
    } finally {
      btn.disabled = false; btn.textContent = "Send it ⚡";
    }
  });

  const news = $("#newsForm");
  const nStatus = $("#newsStatus");
  news.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (news._honey.value) return;
    const email = news.email.value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) { nStatus.className = "form__status err"; nStatus.textContent = "Please enter a valid email."; return; }
    const btn = $("button", news);
    btn.disabled = true;
    try {
      await sendForm({ _subject: "New newsletter signup — Buzzed Coffee website", Email: email, Source: "Website newsletter form" });
      news.reset();
      nStatus.className = "form__status ok"; nStatus.textContent = "You're on the list! ⚡";
    } catch {
      nStatus.className = "form__status err"; nStatus.textContent = "Couldn't sign you up right now — try again in a bit.";
    } finally { btn.disabled = false; }
  });
}

/* ==========================================================
   reveal on scroll
   ========================================================== */
function initReveal() {
  const els = $$(".section .title, .section .lead, .item, .mini-card, .reel, .event-feature, .event-list, .seasonal__photo, .lab__card, .social-card, .new-card");
  els.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHours();
  renderMenu();
  initLab();
  initEvents();
  initVideos();
  initForms();
  initReveal();
});
