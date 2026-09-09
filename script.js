const slides = [...document.querySelectorAll('.slide')];

const translations = {
  '240 HIGH-PROTEIN RECIPES · INSTANT DOWNLOAD': '240 RECETAS ALTAS EN PROTEÍNA · DESCARGA INSTANTÁNEA',
  'Hit your protein goal with meals you actually crave.': 'Alcanza tu meta de proteína con comidas que realmente se te antojan.',
  'Easy, craveable meals with macros already done for you, so busy days can still taste this good.': 'Comidas fáciles y deliciosas con los macros calculados, para que los días ocupados también sepan así de bien.',
  '15-MINUTE MEALS': 'COMIDAS EN 15 MINUTOS', '25g+ PROTEIN': '25 g+ DE PROTEÍNA', 'MACROS INCLUDED': 'MACROS INCLUIDOS',
  '★★★★★ 4.9 from 3,100+ readers': '★★★★★ 4.9 de más de 3.100 lectores', 'YOUR NEW EVERYDAY ROUTINE': 'TU NUEVA RUTINA DIARIA',
  'Juicy chicken, vibrant veggies, and meals worth looking forward to.': 'Pollo jugoso, verduras llenas de color y comidas que te encantará esperar.',
  'You know you want more protein, but you also want food that feels fresh, flavorful, and satisfying. High-Protein Everyday brings delicious variety to every busy day, with simple recipes made to keep you energized and excited for your next meal.': 'Sabes que quieres más proteína, pero también quieres comida fresca, sabrosa y saciante. High-Protein Everyday aporta variedad deliciosa a cada día ocupado, con recetas sencillas para mantenerte con energía y con ganas de tu próxima comida.',
  'WHAT YOU WILL RECEIVE': 'LO QUE RECIBIRÁS', 'A 240-recipe library, ready when you are.': 'Una biblioteca de 240 recetas, lista cuando tú lo estés.',
  'INCLUDED': 'INCLUIDO', '240 recipes for every craving': '240 recetas para cada antojo', '60 recipes in each category': '60 recetas en cada categoría',
  'Read on your phone, tablet, laptop, or print your favorites.': 'Léelo en tu teléfono, tableta o portátil, o imprime tus favoritos.',
  'Know exactly what you are eating': 'Sabe exactamente lo que estás comiendo', 'Full macro table on every recipe': 'Tabla completa de macros en cada receta',
  'Get the complete digital cookbook with fast, satisfying ideas for breakfast, lunch, dinner, and savory snacks.': 'Obtén el recetario digital completo con ideas rápidas y saciantes para el desayuno, el almuerzo, la cena y los snacks salados.',
  'Every serving comes with calories, protein, carbs, and fat already calculated, so tracking takes seconds.': 'Cada porción incluye calorías, proteína, carbohidratos y grasa ya calculados, para que registrar tus comidas tome segundos.',
  'Download everything immediately after checkout and keep your cookbook forever on all your personal devices.': 'Descarga todo inmediatamente después del pago y conserva tu recetario para siempre en tus dispositivos personales.',
  'No apps, spreadsheets, or guesswork required.': 'Sin aplicaciones, hojas de cálculo ni suposiciones.', 'Instant download · lifetime access': 'Descarga instantánea · acceso de por vida',
  'Your next high-protein meal is always within reach.': 'Tu próxima comida alta en proteína siempre estará al alcance.', 'BUILT FOR REAL KITCHENS': 'DISEÑADO PARA COCINAS REALES',
  'Make eating well feel like the easy option.': 'Haz que comer bien sea la opción fácil.', 'See the complete offer': 'Ver la oferta completa',
  'Fast enough for weekdays': 'Lo bastante rápido para los días laborables', 'Normal grocery ingredients': 'Ingredientes fáciles de encontrar',
  'Most recipes take 30 minutes or less, with many ready in just 15.': 'La mayoría de las recetas tardan 30 minutos o menos, y muchas están listas en solo 15.',
  'Eight ingredients or fewer. No specialty store runs or mysterious powders.': 'Ocho ingredientes o menos. Sin tiendas especializadas ni polvos misteriosos.',
  'Every recipe delivers at least 25g of protein per serving.': 'Cada receta aporta al menos 25 g de proteína por porción.',
  'Build consistency with meals that feel rewarding, never restrictive.': 'Crea constancia con comidas gratificantes, nunca restrictivas.',
  'Protein you can count on': 'Proteína en la que puedes confiar', 'Flavor that keeps you going': 'Sabor que te mantiene constante',
  'FREE BONUSES · $30 TOTAL VALUE': 'BONOS GRATIS · VALOR TOTAL DE $30', 'Get 3 exclusive bonuses free with your Complete Edition.': 'Obtén 3 bonos exclusivos gratis con tu Edición Completa.',
  '30 RECIPES': '30 RECETAS', 'SMART PREP': 'PREPARACIÓN INTELIGENTE', '4 EASY STEPS': '4 PASOS FÁCILES', 'BONUS 01': 'BONO 01', 'BONUS 02': 'BONO 02', 'BONUS 03': 'BONO 03',
  'High-Protein Healthy Smoothies': 'Batidos saludables altos en proteína', 'Meal Storage & Reheating Guide': 'Guía para guardar y recalentar comidas', 'The 4-Step Meal Prep Workflow': 'El método de preparación de comidas en 4 pasos',
  '30 creamy, protein-packed smoothie recipes for rushed mornings, post-workout fuel, or an easy afternoon reset.': '30 recetas de batidos cremosos y ricos en proteína para mañanas con prisa, después de entrenar o para una pausa fácil por la tarde.',
  'Keep every batch fresh and tasting fresh with practical storage times, containers, and reheating tips.': 'Conserva cada preparación fresca y deliciosa con tiempos de almacenamiento, recipientes y consejos prácticos para recalentar.',
  'Prepare your meals faster, organize your week, and spend less time deciding what to eat.': 'Prepara tus comidas más rápido, organiza tu semana y pasa menos tiempo decidiendo qué comer.',
  'A TASTE OF THE BOOK': 'UN SABOR DEL LIBRO', 'See what is waiting inside.': 'Mira lo que te espera dentro.', 'LOVED BY 3,100+ READERS': 'ELEGIDO POR MÁS DE 3.100 LECTORES',
  'Real people. Real protein. Real fast.': 'Personas reales. Proteína real. De verdad rápido.', 'SPECIAL LIMITED OFFER': 'OFERTA ESPECIAL POR TIEMPO LIMITADO',
  'A savory, protein-rich breakfast built for busy mornings.': 'Un desayuno sabroso y rico en proteína, pensado para mañanas ocupadas.', 'A creamy, satisfying bowl with simple everyday ingredients.': 'Un bol cremoso y saciante con ingredientes sencillos de todos los días.',
  'Big flavor and crisp texture without a complicated prep.': 'Mucho sabor y textura crujiente sin una preparación complicada.', 'A colorful, high-protein meal with a fresh citrus finish.': 'Una comida colorida y alta en proteína con un toque final cítrico y fresco.',
  'I stopped skipping lunch. The 15-minute recipes mean I eat real protein now instead of grabbing chips.': 'Dejé de saltarme el almuerzo. Las recetas de 15 minutos hacen que ahora coma proteína de verdad en vez de picar papas fritas.',
  'Hitting 180g of protein a day used to be a chore. The meal prep bonus alone was worth it.': 'Llegar a 180 g de proteína al día era una tarea. El bono de preparación de comidas por sí solo valió la pena.',
  'I batch-cook Sundays and eat well all week. No more sad desk lunches or last-minute takeout.': 'Cocino por tandas los domingos y como bien toda la semana. Se acabaron los almuerzos tristes en el escritorio y la comida para llevar de última hora.',
  'Choose the level that fits your routine today.': 'Elige la opción que encaja con tu rutina de hoy.', 'Limited Time Offer: Expires in': 'Oferta por tiempo limitado: termina en',
  'BEST VALUE · MOST POPULAR': 'MEJOR VALOR · MÁS POPULAR', 'Complete Edition': 'Edición Completa', 'Starter Edition': 'Edición Inicial',
  '240 recipes + every bonus': '240 recetas + todos los bonos', '120 recipes, made simple': '120 recetas, de forma sencilla', '7-Day Money-Back Guarantee · Secure checkout': 'Garantía de devolución de 7 días · Pago seguro',
  'RISK-FREE GUARANTEE': 'GARANTÍA SIN RIESGO', 'Try it for 7 days. Decide with confidence.': 'Pruébalo durante 7 días. Decide con confianza.', 'QUESTIONS': 'PREGUNTAS',
  'Download High-Protein Everyday, cook from it for a full week, and see how it fits your routine. If you do not find recipes worth keeping, email us within 7 days for a full, no-questions-asked refund. The risk is on us.': 'Descarga High-Protein Everyday, cocina con él durante una semana y comprueba cómo encaja en tu rutina. Si no encuentras recetas que quieras conservar, escríbenos en un plazo de 7 días para recibir un reembolso completo, sin preguntas. El riesgo lo asumimos nosotros.',
  'Everything you need to know.': 'Todo lo que necesitas saber.', 'How do I receive the cookbook?': '¿Cómo recibo el recetario?', 'Are measurements in grams or cups?': '¿Las medidas están en gramos o tazas?',
  'Is payment secure?': '¿El pago es seguro?', 'Do I get lifetime access?': '¿Tengo acceso de por vida?', 'What if it is not right for me?': '¿Qué pasa si no es para mí?',
  'Right after checkout, you will receive instant access to the digital PDF by email. You can read it on your phone, tablet, or computer.': 'Justo después del pago, recibirás acceso instantáneo al PDF digital por correo electrónico. Puedes leerlo en tu teléfono, tableta u ordenador.',
  'Recipes include practical measurements designed for everyday kitchens, with nutrition information per serving so you can track what matters.': 'Las recetas incluyen medidas prácticas para cocinas cotidianas, con información nutricional por porción para que puedas registrar lo importante.',
  'Yes. Checkout is handled by Hotmart, a secure payment platform. Your payment details are protected throughout the purchase.': 'Sí. Hotmart, una plataforma de pago segura, gestiona el proceso. Tus datos de pago están protegidos durante toda la compra.',
  'Yes. This is a digital product you can download and keep forever, across your personal devices.': 'Sí. Es un producto digital que puedes descargar y conservar para siempre en tus dispositivos personales.',
  'You are covered by our 7-Day Money-Back Guarantee. Contact us within 7 days and we will issue a full refund.': 'Estás cubierto por nuestra garantía de devolución de 7 días. Contáctanos dentro de ese plazo y emitiremos un reembolso completo.',
  'Get access': 'Obtener acceso', 'Back to top ↑': 'Volver arriba ↑', 'Value $17 · Yours free': 'Valor $17 · Gratis para ti', 'Value $8 · Yours free': 'Valor $8 · Gratis para ti', 'Value $5 · Yours free': 'Valor $5 · Gratis para ti'
};

const htmlTranslations = { heroCta: 'Consíguelo ahora por $11.99 <span>→</span>', completeCta: 'Obtén acceso completo — $11.99 <span>→</span>', starterCta: 'Obtén acceso inicial — $4.99 <span>→</span>' };
const originalText = new WeakMap();
const originalHtml = new WeakMap();
document.querySelectorAll('body *').forEach((element) => {
  if (element.children.length === 0 && element.textContent.trim()) originalText.set(element, element.textContent);
  if (element.dataset.i18nHtml) originalHtml.set(element, element.innerHTML);
});

function setLanguage(language) {
  const isSpanish = language === 'es';
  document.documentElement.lang = language;
  document.title = isSpanish ? 'High-Protein Everyday | 240 Recetas Fáciles' : 'High-Protein Everyday | 240 Easy Recipes';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = isSpanish ? 'High-Protein Everyday: 240 recetas fáciles y altas en proteína para días ocupados.' : 'High-Protein Everyday: 240 easy, macro-friendly recipes for busy days.';
  document.querySelectorAll('body *').forEach((element) => {
    const source = originalText.get(element);
    if (source) element.textContent = isSpanish ? (translations[source.trim()] || source) : source;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = isSpanish ? htmlTranslations[element.dataset.i18nHtml] : originalHtml.get(element);
  });
  document.querySelectorAll('[data-en-url][data-es-url]').forEach((link) => { link.href = isSpanish ? link.dataset.esUrl : link.dataset.enUrl; });
  document.querySelectorAll('.language-button').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  localStorage.setItem('highProteinLanguage', language);
}
document.querySelectorAll('.language-button').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
const languageFromPath = window.location.pathname.match(/^\/(en|es)\/?$/)?.[1];
setLanguage(languageFromPath || localStorage.getItem('highProteinLanguage') || 'es');

const reviewAvatars = {
  'Jessica M.': 'imgs/jessica-avatar.webp',
  'Marcus T.': 'imgs/marcus-avatar.webp',
  'Priya R.': 'imgs/priya-avatar-photo.webp'
};
Object.entries(reviewAvatars).forEach(([name, source]) => {
  const avatar = document.querySelector(`img[alt="${name}"]`);
  if (avatar) avatar.src = source;
});
const dots = document.querySelector('.dots');
let currentSlide = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = `dot${index === 0 ? ' active' : ''}`;
  dot.type = 'button';
  dot.setAttribute('aria-label', `Show recipe preview ${index + 1}`);
  dot.addEventListener('click', () => showSlide(index));
  dots.appendChild(dot);
});

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === currentSlide));
  [...dots.children].forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentSlide));
}

document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));

const timerElement = document.getElementById('timer');
const timerKey = 'highProteinOfferEnd';
let offerEnd = Number(localStorage.getItem(timerKey));
if (!offerEnd || offerEnd <= Date.now()) {
  offerEnd = Date.now() + 15 * 60 * 1000;
  localStorage.setItem(timerKey, String(offerEnd));
}

function updateTimer() {
  const remaining = Math.max(0, offerEnd - Date.now());
  const minutes = String(Math.floor(remaining / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');
  timerElement.textContent = `${minutes}:${seconds}`;
}
updateTimer();
setInterval(updateTimer, 1000);

const reviews = [...document.querySelectorAll('.review-track .testimonial')];
const reviewDots = document.querySelector('.review-dots');
let currentReview = 0;
reviews.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = `dot${index === 0 ? ' active' : ''}`;
  dot.type = 'button';
  dot.setAttribute('aria-label', `Show review ${index + 1}`);
  dot.addEventListener('click', () => showReview(index));
  reviewDots.appendChild(dot);
});
function showReview(index) {
  currentReview = (index + reviews.length) % reviews.length;
  reviews.forEach((review, reviewIndex) => review.classList.toggle('active', reviewIndex === currentReview));
  [...reviewDots.children].forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentReview));
}
document.querySelector('.review-prev').addEventListener('click', () => showReview(currentReview - 1));
document.querySelector('.review-next').addEventListener('click', () => showReview(currentReview + 1));
