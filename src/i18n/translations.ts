export type Lang = "ru" | "ua" | "en" | "es";

export const langNames: Record<Lang, string> = {
  ru: "Русский",
  ua: "Українська",
  en: "English",
  es: "Español",
};

export const translations: Record<Lang, Record<string, string>> = {
  ru: {
    nav_home: "Главная",
    nav_services: "Услуги",
    nav_about: "О нас",
    nav_reviews: "Отзывы",
    nav_contact: "Связаться",
    call_us: "Позвоните нам",

    hero_title: "Профессиональный диспетчерский сервис для автоперевозчиков",
    hero_subtitle:
      "Высокий гросс, стабильные рейсы и персональный подход к каждому водителю. Присоединяйтесь к команде LCF Services!",
    hero_cta: "Начать сотрудничество",
    hero_learn: "Подробнее",

    services_title: "Условия работы",
    services_subtitle:
      "Всё максимально просто и открыто — никаких подводных камней",
    service_1_title: "12%",
    service_1_desc:
      "88% дохода остаётся у вас. Наша комиссия всего 12% и покрывает полный комплекс диспетчерских услуг. Страхование оплачивается отдельно.",
    service_2_title: "Без депозита",
    service_2_desc:
      "Мы не требуем залог — начинайте работать без стартовых вложений. Наши отношения основаны на взаимном уважении и открытости.",
    service_3_title: "$300 страховка",
    service_3_desc:
      "Еженедельная оплата страхования — $300. В нерабочие недели оплата не взимается. Всё предельно справедливо.",
    service_4_title: "Быстрые выплаты",
    service_4_desc:
      "Расчёт по пик-апам каждую пятницу утром следующей недели. Чёткий график без сбоев и задержек.",

    about_title: "О нашей компании",
    about_text:
      "LCF Services — это команда опытных диспетчеров, которые знают индустрию автоперевозок изнутри. Мы стремимся к долгосрочному сотрудничеству и максимальной выгоде для каждого партнёра.",
    trailers_title: "Типы трейлеров",
    trailer_enclosed: "Enclosed",
    trailer_enclosed_desc:
      "Закрытый трейлер — премиальный вариант с высокой оплатой, пользующийся стабильным спросом.",
    trailer_open36: "Open 36+",
    trailer_open36_desc:
      "Открытая платформа на два авто — идеальный выбор для тех, кто ценит простоту.",
    trailer_open50: "Open 50+",
    trailer_open50_desc:
      "Открытый трейлер на три авто — отличная доходность и постоянный поток заказов.",
    trailer_semi: "Semi",
    trailer_semi_desc:
      "Самый доходный формат работы. Необходимо наличие коммерческих прав (CDL).",

    how_title: "Процесс сотрудничества",
    how_step1_title: "Консультация",
    how_step1_desc:
      "Связываемся в удобное время и детально разбираем все нюансы: условия, график, предпочтения по маршрутам.",
    how_step2_title: "Оформление",
    how_step2_desc:
      "Подписание контракта через DocuSign — всё цифровое, быстрое и юридически защищённое.",
    how_step3_title: "Старт",
    how_step3_desc:
      "Вас подключают к персональному диспетчеру — и работа начинается в тот же день!",

    why_title: "Наши преимущества",
    why_1_title: "Открытость",
    why_1_desc:
      "Никаких скрытых комиссий, штрафов и депозитов. Всё на виду с первого дня.",
    why_2_title: "Лучшие маршруты",
    why_2_desc:
      "Находим самые доходные рейсы, учитывая ваши пожелания по направлениям.",
    why_3_title: "Надёжные выплаты",
    why_3_desc:
      "Выплаты каждую пятницу утром без исключений — стабильность, которой можно доверять.",

    team_badge: "Команда",
    team_title: "Наши специалисты",
    team_role: "Диспетчер",
    team_member1: "Андрей",
    team_member1_desc:
      "Составляю маршруты с учётом всех предпочтений водителя. Каждый рейс планируется так, чтобы вам было максимально удобно и выгодно работать.",
    team_member2: "Виктор",
    team_member2_desc:
      "Мой приоритет — максимальная доходность. Подбираю рейсы с лучшим гроссом, чтобы каждая неделя приносила отличный результат.",
    team_member3: "Максим",
    team_member3_desc:
      "Всегда на связи с водителем — понимаю потребности и создаю комфортные условия для эффективного и приятного сотрудничества.",

    stats_drivers: "Водителей",
    stats_trips: "Рейсов",
    stats_experience: "Лет опыта",

    reviews_title: "Что говорят наши партнёры",
    review_1_name: "Игорь",
    review_1_role: "Owner-Operator",
    review_1_text:
      "Сотрудничаю с LCF Services уже более года — по-настоящему профессиональная команда. Рейсы стабильные, гросс всегда на уровне, загрузка без задержек.",
    review_2_name: "Владимир",
    review_2_role: "Owner-Operator",
    review_2_text:
      "В LCF Services чувствуешь, что тебя ценят. Диспетчеры работают грамотно, направления отличные, доход стабильно высокий. Поддержка круглосуточная и реально помогает.",
    review_3_name: "Олег",
    review_3_role: "Owner-Operator",
    review_3_text:
      "Подход в этой компании — на высшем уровне. Условия понятные, рейсы доходные, коммуникация всегда оперативная. В кархолинге это большая редкость.",
    review_4_name: "Руслан",
    review_4_role: "Owner-Operator",
    review_4_text:
      "Работаю третий месяц и очень доволен стартом. Сразу дали хорошие рейсы, нормальный график и высокий гросс. Рекомендую всем, кто ищет надёжную диспетчерскую.",
    review_5_name: "Павел",
    review_5_role: "Owner-Operator",
    review_5_text:
      "С LCF Services работается легко. Оплата стабильная, маршруты продуманные, логистика на уровне. Если нужна стабильность — вам сюда.",
    review_6_name: "Тарас",
    review_6_role: "Owner-Operator",
    review_6_text:
      "Объездил полстраны и могу уверенно сказать — LCF Services знают своё дело. Всегда выгодные рейсы, постоянно на связи, уважительное отношение к водителям.",

    contact_title: "Готовы начать? Оставьте заявку!",
    contact_subtitle: "Или позвоните — (509) 768-4532. Мы всегда на связи!",
    contact_name: "Ваше имя",
    contact_phone: "Номер телефона",
    contact_truck: "У вас есть трак?",
    contact_truck_yes: "Да",
    contact_truck_no: "Нет",
    contact_experience: "Ваш опыт в сфере",
    contact_submit: "Отправить заявку",
    contact_success: "Благодарим! Мы свяжемся с вами в самое ближайшее время.",
    contact_sending: "Отправляем…",
    contact_error:
      "Заявку не удалось отправить. Позвоните нам: (509) 768-4532.",

    footer_address: "522 W Riverside Ave #6439, Spokane, WA 99201",
    footer_call: "Позвоните нам",
    footer_privacy: "Политика конфиденциальности",
    footer_rights: "Все права защищены",
    footer_map_title: "Наш офис",

    privacy_title: "Политика конфиденциальности",
    privacy_back: "На главную",
    privacy_intro:
      'LCF Services ("мы", "наш") обязуется обеспечить защиту вашей конфиденциальности. Данная Политика разъясняет порядок сбора, использования и защиты вашей персональной информации при посещении сайта или обращении к нашим услугам.',
    privacy_collect_title: "Какие данные мы собираем",
    privacy_collect_text:
      "Мы можем собирать информацию, которую вы добровольно предоставляете через контактную форму: имя, номер телефона, сведения о транспортном средстве и опыте работы.",
    privacy_use_title: "Как используется ваша информация",
    privacy_use_text:
      "Собранные данные используются для связи с вами по вопросам наших диспетчерских услуг, обработки обращений и улучшения сервиса. Мы не продаём и не передаём ваши данные третьим лицам.",
    privacy_security_title: "Защита данных",
    privacy_security_text:
      "Мы применяем надлежащие технические и организационные меры для защиты вашей информации от несанкционированного доступа, изменения или уничтожения.",
    privacy_contact_title: "Связаться с нами",
    privacy_contact_text:
      "По вопросам о данной Политике обращайтесь по телефону (509) 768-4532 или по адресу 522 W Riverside Ave #6439, Spokane, WA 99201.",

    faq_badge: "FAQ",
    faq_title: "Частые вопросы",
    faq_1_q: "Какой размер комиссии за диспетчерские услуги?",
    faq_1_a:
      "Мы берём всего 12% от гросса. 88% — ваш чистый заработок. Комиссия покрывает весь спектр услуг, за исключением страхования груза.",
    faq_2_q: "Требуется ли депозит для начала?",
    faq_2_a:
      "Нет. Мы не берём залоговых платежей. Сотрудничество строится на доверии и прозрачных договорённостях.",
    faq_3_q: "Сколько стоит страхование и как оно оплачивается?",
    faq_3_a:
      "Стоимость страхования груза — $300 в неделю. Если вы не работали — оплата не взимается.",
    faq_4_q: "Каков порядок и сроки выплат?",
    faq_4_a:
      "Выплаты по пик-апам приходят каждую пятницу утром следующей недели. Строго по графику.",
    faq_5_q: "Можно ли выбирать направления?",
    faq_5_a:
      "Конечно! Мы всегда учитываем пожелания водителя при подборе маршрутов. Ваш комфорт — наш приоритет.",
    faq_6_q: "С какими типами трейлеров работает компания?",
    faq_6_a:
      "Мы работаем со всеми основными форматами: Enclosed, Open 36+, Open 50+ и Semi. Для Semi необходимы коммерческие права (CDL).",
    faq_7_q: "Как быстро можно приступить к работе?",
    faq_7_a:
      "Весь процесс от звонка до первого рейса занимает 1–2 дня: консультация → подписание контракта → подключение к диспетчеру.",
    faq_8_q: "Есть ли поддержка круглосуточно?",
    faq_8_a:
      "Да, наша команда доступна 24/7. Мы готовы помочь в любое время — в рейсе и на стоянке.",
  },

  ua: {
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_about: "Про нас",
    nav_reviews: "Відгуки",
    nav_contact: "Контакти",
    call_us: "Зателефонуйте",

    hero_title: "Професійний диспетчерський сервіс для автоперевізників",
    hero_subtitle:
      "Високий грос, стабільні рейси та індивідуальний підхід до кожного водія. Приєднуйтесь до LCF Services!",
    hero_cta: "Почати співпрацю",
    hero_learn: "Детальніше",

    services_title: "Умови роботи",
    services_subtitle:
      "Все максимально просто та відкрито — жодних підводних каменів",
    service_1_title: "12%",
    service_1_desc:
      "88% доходу залишається вам. Наша комісія лише 12% та покриває повний комплекс диспетчерських послуг. Страхування оплачується окремо.",
    service_2_title: "Без депозиту",
    service_2_desc:
      "Ми не вимагаємо заставу — починайте працювати без стартових вкладень. Наші відносини базуються на взаємній повазі.",
    service_3_title: "$300 страховка",
    service_3_desc:
      "Щотижнева оплата страхування — $300. У неробочі тижні оплата не стягується. Все гранично справедливо.",
    service_4_title: "Швидкі виплати",
    service_4_desc:
      "Розрахунок по пік-апам щоп'ятниці вранці наступного тижня. Чіткий графік без збоїв.",

    about_title: "Про нашу компанію",
    about_text:
      "LCF Services — це команда досвідчених диспетчерів, які знають індустрію автоперевезень зсередини. Ми прагнемо до довгострокової співпраці та максимальної вигоди для кожного партнера.",
    trailers_title: "Типи трейлерів",
    trailer_enclosed: "Enclosed",
    trailer_enclosed_desc:
      "Закритий трейлер — преміальний варіант з високою оплатою та стабільним попитом.",
    trailer_open36: "Open 36+",
    trailer_open36_desc:
      "Відкрита платформа на два авто — ідеальний вибір для тих, хто цінує простоту.",
    trailer_open50: "Open 50+",
    trailer_open50_desc:
      "Відкритий трейлер на три авто — відмінна дохідність та постійний потік замовлень.",
    trailer_semi: "Semi",
    trailer_semi_desc:
      "Найдохідніший формат роботи. Необхідна наявність комерційних прав (CDL).",

    how_title: "Процес співпраці",
    how_step1_title: "Консультація",
    how_step1_desc:
      "Зв'язуємось у зручний час та детально розбираємо всі нюанси: умови, графік, побажання щодо маршрутів.",
    how_step2_title: "Оформлення",
    how_step2_desc:
      "Підписання контракту через DocuSign — все цифрове, швидке та юридично захищене.",
    how_step3_title: "Старт",
    how_step3_desc:
      "Вас підключають до персонального диспетчера — і робота починається того ж дня!",

    why_title: "Наші переваги",
    why_1_title: "Відкритість",
    why_1_desc:
      "Жодних прихованих комісій, штрафів та депозитів. Все на виду з першого дня.",
    why_2_title: "Найкращі маршрути",
    why_2_desc:
      "Знаходимо найдохідніші рейси з урахуванням ваших побажань щодо напрямків.",
    why_3_title: "Надійні виплати",
    why_3_desc:
      "Виплати щоп'ятниці вранці без винятків — стабільність, якій можна довіряти.",

    team_badge: "Команда",
    team_title: "Наші спеціалісти",
    team_role: "Диспетчер",
    team_member1: "Андрій",
    team_member1_desc:
      "Складаю маршрути з урахуванням усіх побажань водія. Кожен рейс планується так, щоб вам було максимально зручно та вигідно.",
    team_member2: "Віктор",
    team_member2_desc:
      "Мій пріоритет — максимальна дохідність. Підбираю рейси з найкращим гросом для відмінного результату щотижня.",
    team_member3: "Максим",
    team_member3_desc:
      "Завжди на зв'язку з водієм — розумію потреби та створюю комфортні умови для ефективної співпраці.",

    stats_drivers: "Водіїв",
    stats_trips: "Рейсів",
    stats_experience: "Років досвіду",

    reviews_title: "Що кажуть наші партнери",
    review_1_name: "Ігор",
    review_1_role: "Owner-Operator",
    review_1_text:
      "Співпрацюю з LCF Services вже понад рік — справжні професіонали. Рейси стабільні, грос завжди на рівні, завантаження без затримок.",
    review_2_name: "Володимир",
    review_2_role: "Owner-Operator",
    review_2_text:
      "В LCF Services відчуваєш, що тебе цінують. Диспетчери працюють грамотно, напрямки чудові, дохід стабільно високий.",
    review_3_name: "Олег",
    review_3_role: "Owner-Operator",
    review_3_text:
      "Підхід у цій компанії — на вищому рівні. Умови зрозумілі, рейси дохідні, комунікація завжди оперативна.",
    review_4_name: "Руслан",
    review_4_role: "Owner-Operator",
    review_4_text:
      "Працюю третій місяць і дуже задоволений стартом. Відразу дали гарні рейси, нормальний графік і високий грос.",
    review_5_name: "Павло",
    review_5_role: "Owner-Operator",
    review_5_text:
      "З LCF Services працюється легко. Оплата стабільна, маршрути продумані, логістика на рівні.",
    review_6_name: "Тарас",
    review_6_role: "Owner-Operator",
    review_6_text:
      "Об'їздив пів країни і можу впевнено сказати — LCF Services знають свою справу. Завжди вигідні рейси та поважне ставлення.",

    contact_title: "Готові розпочати? Залиште заявку!",
    contact_subtitle:
      "Або зателефонуйте — (509) 768-4532. Ми завжди на зв'язку!",
    contact_name: "Ваше ім'я",
    contact_phone: "Номер телефону",
    contact_truck: "У вас є трак?",
    contact_truck_yes: "Так",
    contact_truck_no: "Ні",
    contact_experience: "Ваш досвід у сфері",
    contact_submit: "Надіслати заявку",
    contact_success: "Дякуємо! Ми зв'яжемося з вами найближчим часом.",
    contact_sending: "Надсилаємо…",
    contact_error:
      "Заявку не вдалося надіслати. Зателефонуйте нам: (509) 768-4532.",

    footer_address: "522 W Riverside Ave #6439, Spokane, WA 99201",
    footer_call: "Зателефонуйте",
    footer_privacy: "Політика конфіденційності",
    footer_rights: "Усі права захищені",
    footer_map_title: "Наш офіс",

    privacy_title: "Політика конфіденційності",
    privacy_back: "На головну",
    privacy_intro:
      'LCF Services ("ми", "наш") зобов\'язується забезпечити захист вашої конфіденційності. Ця Політика роз\'яснює порядок збору, використання та захисту вашої інформації.',
    privacy_collect_title: "Які дані ми збираємо",
    privacy_collect_text:
      "Ми можемо збирати інформацію, яку ви добровільно надаєте через контактну форму: ім'я, номер телефону, відомості про транспорт та досвід.",
    privacy_use_title: "Як використовується ваша інформація",
    privacy_use_text:
      "Зібрані дані використовуються для зв'язку з вами щодо наших послуг, обробки звернень та покращення сервісу. Ми не продаємо і не передаємо ваші дані третім особам.",
    privacy_security_title: "Захист даних",
    privacy_security_text:
      "Ми застосовуємо належні технічні та організаційні заходи для захисту вашої інформації.",
    privacy_contact_title: "Зв'язатися з нами",
    privacy_contact_text:
      "З питань щодо цієї Політики звертайтесь за телефоном (509) 768-4532 або за адресою 522 W Riverside Ave #6439, Spokane, WA 99201.",

    faq_badge: "FAQ",
    faq_title: "Часті запитання",
    faq_1_q: "Який розмір комісії за диспетчерські послуги?",
    faq_1_a:
      "Ми беремо лише 12% від гросу. 88% — ваш чистий заробіток. Комісія покриває весь спектр послуг, окрім страхування вантажу.",
    faq_2_q: "Чи потрібен депозит для початку?",
    faq_2_a:
      "Ні. Ми не беремо заставних платежів. Співпраця будується на довірі та прозорих домовленостях.",
    faq_3_q: "Скільки коштує страхування?",
    faq_3_a:
      "Вартість страхування вантажу — $300 на тиждень. Якщо ви не працювали — оплата не стягується.",
    faq_4_q: "Який порядок виплат?",
    faq_4_a:
      "Виплати по пік-апам надходять щоп'ятниці вранці наступного тижня. Строго за графіком.",
    faq_5_q: "Чи можна обирати напрямки?",
    faq_5_a:
      "Звісно! Ми завжди враховуємо побажання водія при підборі маршрутів.",
    faq_6_q: "З якими типами трейлерів працює компанія?",
    faq_6_a:
      "Ми працюємо з усіма основними форматами: Enclosed, Open 36+, Open 50+ та Semi. Для Semi потрібні комерційні права (CDL).",
    faq_7_q: "Як швидко можна почати?",
    faq_7_a:
      "Весь процес від дзвінка до першого рейсу займає 1–2 дні: консультація → підписання контракту → підключення до диспетчера.",
    faq_8_q: "Чи є підтримка цілодобово?",
    faq_8_a:
      "Так, наша команда доступна 24/7. Ми готові допомогти у будь-який час.",
  },

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    call_us: "Call Us",

    hero_title: "Professional Dispatch Service for Auto Transporters",
    hero_subtitle:
      "High gross, consistent loads, and a personal approach to every driver. Join the LCF Services team!",
    hero_cta: "Get Started",
    hero_learn: "Learn More",

    services_title: "Our Terms",
    services_subtitle:
      "Everything is straightforward and transparent — no hidden catches",
    service_1_title: "12%",
    service_1_desc:
      "You keep 88% of the revenue. Our 12% commission covers the full range of dispatch services. Insurance is billed separately.",
    service_2_title: "No Deposit",
    service_2_desc:
      "No upfront deposit required — start working without initial investment. Our partnership is built on mutual respect and openness.",
    service_3_title: "$300 Insurance",
    service_3_desc:
      "Weekly cargo insurance is $300. No charge for weeks you don't work. Completely fair.",
    service_4_title: "Fast Payouts",
    service_4_desc:
      "Pick-up payments every Friday morning the following week. A reliable schedule with zero delays.",

    about_title: "About Our Company",
    about_text:
      "LCF Services is a team of seasoned dispatchers who know the auto transport industry inside out. We focus on long-term partnerships and maximum profitability for every driver.",
    trailers_title: "Trailer Types",
    trailer_enclosed: "Enclosed",
    trailer_enclosed_desc:
      "Enclosed trailer — a premium, high-paying option with steady demand.",
    trailer_open36: "Open 36+",
    trailer_open36_desc:
      "Open platform for two cars — the perfect choice for those who value simplicity.",
    trailer_open50: "Open 50+",
    trailer_open50_desc:
      "Open trailer for three cars — excellent returns and a steady flow of orders.",
    trailer_semi: "Semi",
    trailer_semi_desc:
      "The highest-earning format. Commercial driving license (CDL) required.",

    how_title: "How It Works",
    how_step1_title: "Consultation",
    how_step1_desc:
      "We connect at a time that works for you and go over every detail: terms, schedule, and route preferences.",
    how_step2_title: "Contract",
    how_step2_desc:
      "Sign the contract via DocuSign — fully digital, fast, and legally secure.",
    how_step3_title: "Launch",
    how_step3_desc:
      "You're paired with a dedicated dispatcher and start working the same day!",

    why_title: "Why Choose Us",
    why_1_title: "Full Transparency",
    why_1_desc:
      "No hidden fees, penalties, or deposits. Everything is clear from day one.",
    why_2_title: "Best Routes",
    why_2_desc:
      "We find the most profitable loads tailored to your preferred lanes.",
    why_3_title: "Reliable Payments",
    why_3_desc:
      "Payouts every Friday morning without exception — stability you can count on.",

    team_badge: "Team",
    team_title: "Our Specialists",
    team_role: "Dispatcher",
    team_member1: "Andrew",
    team_member1_desc:
      "I plan routes around every driver's preferences. Each trip is designed for maximum comfort and profitability.",
    team_member2: "Victor",
    team_member2_desc:
      "My priority is maximum revenue. I select loads with the best gross so every week delivers great results.",
    team_member3: "Max",
    team_member3_desc:
      "Always in touch with the driver — I understand your needs and create the conditions for smooth, effective teamwork.",

    stats_drivers: "Drivers",
    stats_trips: "Trips",
    stats_experience: "Years of Experience",

    reviews_title: "What Our Partners Say",
    review_1_name: "Igor",
    review_1_role: "Owner-Operator",
    review_1_text:
      "I've been with LCF Services for over a year — truly professional team. Loads are consistent, gross is always solid, pick-ups are on time.",
    review_2_name: "Vladimir",
    review_2_role: "Owner-Operator",
    review_2_text:
      "At LCF Services you feel valued. Dispatchers are sharp, routes are great, income is consistently high. Around-the-clock support that actually helps.",
    review_3_name: "Oleg",
    review_3_role: "Owner-Operator",
    review_3_text:
      "The approach at this company is top-notch. Terms are clear, loads are profitable, communication is always prompt. A rare find in car hauling.",
    review_4_name: "Ruslan",
    review_4_role: "Owner-Operator",
    review_4_text:
      "Three months in and very happy with the start. Good loads right away, a normal schedule, and high gross. Highly recommend.",
    review_5_name: "Pavel",
    review_5_role: "Owner-Operator",
    review_5_text:
      "Working with LCF Services is easy. Payments are stable, routes are well-planned, logistics are top-tier. If you want consistency — this is the place.",
    review_6_name: "Taras",
    review_6_role: "Owner-Operator",
    review_6_text:
      "I've driven across half the country and can say with confidence — LCF Services knows the business. Great loads, always reachable, and respectful treatment.",

    contact_title: "Ready to Start? Leave a Request!",
    contact_subtitle: "Or call — (509) 768-4532. We're always available!",
    contact_name: "Your Name",
    contact_phone: "Phone Number",
    contact_truck: "Do you have a truck?",
    contact_truck_yes: "Yes",
    contact_truck_no: "No",
    contact_experience: "Your experience in the field",
    contact_submit: "Submit Request",
    contact_success: "Thank you! We'll get back to you very soon.",
    contact_sending: "Sending…",
    contact_error: "Could not send the request. Call us: (509) 768-4532.",

    footer_address: "522 W Riverside Ave #6439, Spokane, WA 99201",
    footer_call: "Call Us",
    footer_privacy: "Privacy Policy",
    footer_rights: "All rights reserved",
    footer_map_title: "Our Office",

    privacy_title: "Privacy Policy",
    privacy_back: "Back to Home",
    privacy_intro:
      'LCF Services ("we", "our") is committed to protecting your privacy. This Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.',
    privacy_collect_title: "Information We Collect",
    privacy_collect_text:
      "We may collect information you voluntarily provide through the contact form: name, phone number, vehicle details, and experience level.",
    privacy_use_title: "How We Use Your Information",
    privacy_use_text:
      "Collected data is used to contact you about our dispatch services, handle inquiries, and improve our service. We do not sell or share your data with third parties.",
    privacy_security_title: "Data Security",
    privacy_security_text:
      "We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, or destruction.",
    privacy_contact_title: "Contact Us",
    privacy_contact_text:
      "For questions about this Policy, call (509) 768-4532 or visit 522 W Riverside Ave #6439, Spokane, WA 99201.",

    faq_badge: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_1_q: "What is the dispatch commission?",
    faq_1_a:
      "We charge just 12% of gross. 88% is your net earnings. The commission covers all dispatch services except cargo insurance.",
    faq_2_q: "Is a deposit required?",
    faq_2_a:
      "No. We don't charge any deposit. Our partnership is built on trust and transparent agreements.",
    faq_3_q: "How much is insurance?",
    faq_3_a:
      "Cargo insurance is $300 per week. No charge for weeks you don't work.",
    faq_4_q: "When are payments made?",
    faq_4_a:
      "Pick-up payments arrive every Friday morning the following week. Strictly on schedule.",
    faq_5_q: "Can I choose my routes?",
    faq_5_a:
      "Absolutely! We always consider driver preferences when selecting loads. Your comfort is our priority.",
    faq_6_q: "What trailer types do you work with?",
    faq_6_a:
      "We work with all major types: Enclosed, Open 36+, Open 50+, and Semi. Semi requires a CDL.",
    faq_7_q: "How quickly can I start?",
    faq_7_a:
      "The entire process from call to first load takes 1–2 days: consultation → contract signing → dispatcher assignment.",
    faq_8_q: "Is 24/7 support available?",
    faq_8_a:
      "Yes, our team is available around the clock. We're ready to help anytime — on the road or at the yard.",
  },

  es: {
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_about: "Nosotros",
    nav_reviews: "Reseñas",
    nav_contact: "Contacto",
    call_us: "Llámenos",

    hero_title: "Servicio Profesional de Dispatch para Transportistas",
    hero_subtitle:
      "Alto gross, cargas estables y un enfoque personalizado para cada conductor. ¡Únase a LCF Services!",
    hero_cta: "Comenzar",
    hero_learn: "Más Información",

    services_title: "Nuestras Condiciones",
    services_subtitle:
      "Todo es directo y transparente — sin letras pequeñas",
    service_1_title: "12%",
    service_1_desc:
      "Usted se queda con el 88%. Nuestra comisión del 12% cubre todos los servicios de dispatch. El seguro se factura por separado.",
    service_2_title: "Sin Depósito",
    service_2_desc:
      "No se requiere depósito inicial — comience a trabajar sin inversión. Nuestra asociación se basa en el respeto mutuo.",
    service_3_title: "Seguro $300",
    service_3_desc:
      "Seguro de carga semanal: $300. Sin cargo en semanas sin trabajo. Totalmente justo.",
    service_4_title: "Pagos Rápidos",
    service_4_desc:
      "Pagos por pick-ups cada viernes por la mañana de la semana siguiente. Calendario confiable sin retrasos.",

    about_title: "Sobre Nuestra Empresa",
    about_text:
      "LCF Services es un equipo de despachadores experimentados que conocen la industria del transporte de autos a fondo. Nos enfocamos en asociaciones a largo plazo y máxima rentabilidad.",
    trailers_title: "Tipos de Tráiler",
    trailer_enclosed: "Enclosed",
    trailer_enclosed_desc:
      "Tráiler cerrado — opción premium con alta paga y demanda estable.",
    trailer_open36: "Open 36+",
    trailer_open36_desc:
      "Plataforma abierta para dos autos — la opción más simple de operar.",
    trailer_open50: "Open 50+",
    trailer_open50_desc:
      "Tráiler abierto para tres autos — excelentes retornos y flujo constante de pedidos.",
    trailer_semi: "Semi",
    trailer_semi_desc:
      "El formato más rentable. Se requiere licencia comercial (CDL).",

    how_title: "Cómo Funciona",
    how_step1_title: "Consulta",
    how_step1_desc:
      "Nos conectamos en el momento que le convenga y revisamos cada detalle: condiciones, horario y preferencias de rutas.",
    how_step2_title: "Contrato",
    how_step2_desc:
      "Firma del contrato por DocuSign — totalmente digital, rápido y legalmente seguro.",
    how_step3_title: "Inicio",
    how_step3_desc:
      "Se le asigna un despachador dedicado y comienza a trabajar el mismo día.",

    why_title: "¿Por Qué Elegirnos?",
    why_1_title: "Transparencia Total",
    why_1_desc:
      "Sin comisiones ocultas, multas ni depósitos. Todo claro desde el primer día.",
    why_2_title: "Mejores Rutas",
    why_2_desc:
      "Encontramos las cargas más rentables adaptadas a sus rutas preferidas.",
    why_3_title: "Pagos Confiables",
    why_3_desc:
      "Pagos cada viernes por la mañana sin excepción — estabilidad en la que puede confiar.",

    team_badge: "Equipo",
    team_title: "Nuestros Especialistas",
    team_role: "Despachador",
    team_member1: "Andrés",
    team_member1_desc:
      "Planifico rutas según las preferencias de cada conductor. Cada viaje está diseñado para máxima comodidad y rentabilidad.",
    team_member2: "Víctor",
    team_member2_desc:
      "Mi prioridad es máximos ingresos. Selecciono cargas con el mejor gross para que cada semana sea excelente.",
    team_member3: "Max",
    team_member3_desc:
      "Siempre en contacto con el conductor — entiendo sus necesidades y creo las condiciones para un trabajo eficaz.",

    stats_drivers: "Conductores",
    stats_trips: "Viajes",
    stats_experience: "Años de Experiencia",

    reviews_title: "Lo Que Dicen Nuestros Socios",
    review_1_name: "Igor",
    review_1_role: "Owner-Operator",
    review_1_text:
      "Llevo más de un año con LCF Services — equipo verdaderamente profesional. Cargas estables, gross sólido, pick-ups puntuales.",
    review_2_name: "Vladimir",
    review_2_role: "Owner-Operator",
    review_2_text:
      "En LCF Services te sientes valorado. Despachadores eficientes, rutas excelentes, ingresos consistentemente altos.",
    review_3_name: "Oleg",
    review_3_role: "Owner-Operator",
    review_3_text:
      "El enfoque de esta empresa es de primera. Condiciones claras, cargas rentables, comunicación siempre rápida.",
    review_4_name: "Ruslan",
    review_4_role: "Owner-Operator",
    review_4_text:
      "Tres meses trabajando y muy contento con el inicio. Buenas cargas desde el principio, horario normal y gross alto.",
    review_5_name: "Pavel",
    review_5_role: "Owner-Operator",
    review_5_text:
      "Trabajar con LCF Services es fácil. Pagos estables, rutas bien planificadas, logística de primer nivel.",
    review_6_name: "Taras",
    review_6_role: "Owner-Operator",
    review_6_text:
      "He recorrido medio país y puedo decir con confianza — LCF Services sabe lo que hace. Cargas rentables, siempre disponibles, trato respetuoso.",

    contact_title: "¿Listo para Empezar? ¡Deje una Solicitud!",
    contact_subtitle:
      "O llame — (509) 768-4532. ¡Siempre estamos disponibles!",
    contact_name: "Su Nombre",
    contact_phone: "Número de Teléfono",
    contact_truck: "¿Tiene camión?",
    contact_truck_yes: "Sí",
    contact_truck_no: "No",
    contact_experience: "Su experiencia en el campo",
    contact_submit: "Enviar Solicitud",
    contact_success: "¡Gracias! Nos pondremos en contacto pronto.",
    contact_sending: "Enviando…",
    contact_error:
      "No se pudo enviar la solicitud. Llámenos: (509) 768-4532.",

    footer_address: "522 W Riverside Ave #6439, Spokane, WA 99201",
    footer_call: "Llámenos",
    footer_privacy: "Política de Privacidad",
    footer_rights: "Todos los derechos reservados",
    footer_map_title: "Nuestra Oficina",

    privacy_title: "Política de Privacidad",
    privacy_back: "Volver al Inicio",
    privacy_intro:
      'LCF Services ("nosotros", "nuestro") se compromete a proteger su privacidad. Esta Política explica cómo recopilamos, usamos y protegemos su información personal.',
    privacy_collect_title: "Información que Recopilamos",
    privacy_collect_text:
      "Podemos recopilar información que usted proporciona voluntariamente a través del formulario de contacto: nombre, teléfono, detalles del vehículo y experiencia.",
    privacy_use_title: "Cómo Usamos Su Información",
    privacy_use_text:
      "Los datos recopilados se utilizan para contactarlo sobre nuestros servicios, procesar consultas y mejorar el servicio. No vendemos ni compartimos sus datos.",
    privacy_security_title: "Seguridad de Datos",
    privacy_security_text:
      "Implementamos medidas técnicas y organizativas apropiadas para proteger su información.",
    privacy_contact_title: "Contáctenos",
    privacy_contact_text:
      "Para preguntas sobre esta Política, llame al (509) 768-4532 o visite 522 W Riverside Ave #6439, Spokane, WA 99201.",

    faq_badge: "FAQ",
    faq_title: "Preguntas Frecuentes",
    faq_1_q: "¿Cuál es la comisión de dispatch?",
    faq_1_a:
      "Cobramos solo el 12% del gross. El 88% es su ganancia neta. La comisión cubre todos los servicios excepto seguro de carga.",
    faq_2_q: "¿Se requiere depósito?",
    faq_2_a:
      "No. No cobramos ningún depósito. Nuestra asociación se basa en confianza y acuerdos transparentes.",
    faq_3_q: "¿Cuánto cuesta el seguro?",
    faq_3_a:
      "El seguro de carga es $300 por semana. Sin cargo en semanas sin trabajo.",
    faq_4_q: "¿Cuándo se realizan los pagos?",
    faq_4_a:
      "Los pagos por pick-ups llegan cada viernes por la mañana. Estrictamente según calendario.",
    faq_5_q: "¿Puedo elegir mis rutas?",
    faq_5_a:
      "¡Por supuesto! Siempre consideramos las preferencias del conductor. Su comodidad es nuestra prioridad.",
    faq_6_q: "¿Con qué tipos de tráiler trabajan?",
    faq_6_a:
      "Trabajamos con todos los tipos principales: Enclosed, Open 36+, Open 50+ y Semi. Semi requiere CDL.",
    faq_7_q: "¿Qué tan rápido puedo empezar?",
    faq_7_a:
      "Todo el proceso toma 1–2 días: consulta → firma de contrato → asignación de despachador.",
    faq_8_q: "¿Hay soporte 24/7?",
    faq_8_a:
      "Sí, nuestro equipo está disponible las 24 horas. Listos para ayudar en cualquier momento.",
  },
};
