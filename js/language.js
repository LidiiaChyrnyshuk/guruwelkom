
  const translations = {
		EN: {
			title: "welcome",
			titleBonus: "BONUS",
			promoSubtext: "up to",
			promoCurrency: "3000 USDT",
			bonus: "+ 100 Free spins",
			btnRegistration: "JOIN NOW",
			modalPercent: "Welcome bonus",
			modalPromoSubtext: "up to",
			modalPromoCurrency: "3000 USDT",
			modalBonus: "+ 100 Free spins",
			checkbox:
				"By ticking this box to register for this website, the user declares to be over 18 years old and to have read, understood and accepted",
			terms: "the Terms and Conditions",
			modalBtn: "Create an account",
			quantityCharacter: "Contain at least 6 characters",
			uppercaseCharacter: "Include at least 1 uppercase letter",
			numberCharacter: "Include at least 1 number",
			emailError: "Incorrect email format",
		},
		HU: {
			title: "Üdvözlő",
			titleBonus: "BONUS",
			promoSubtext: "up to",
			promoCurrency: "2 800 000 HUF",
			bonus: "+ 100 ingyenes pörgetés",
			btnRegistration: "CSATLAKOZZ MOST",
			modalPercent: "Üdvözlő bónusz",
			modalPromoSubtext: "up to",
			modalPromoCurrency: "2 800 000 HUF",
			modalBonus: "+ 50 ingyenes pörgetés",
			checkbox:
				"A jelölőnégyzet kipipálásával a felhasználó kijelenti, hogy elmúlt 18 éves, és elolvasta, megértette és elfogadta",
			terms: "a Felhasználási feltételeket",
			modalBtn: "Fiók létrehozása",
			quantityCharacter: "En az 6 karakter",
			uppercaseCharacter: "En az 1 büyük harf",
			numberCharacter: "En az 1 rakam",
			emailError: "Hibás email formátum",
		},
		PT: {
			title: "boas-vindas",
			titleBonus: "BÓNUS",
			promoSubtext: "up to",
			promoCurrency: "3000 USDT",
			bonus: "+ 100 rodadas grátis",
			btnRegistration: "PARTICIPE JÁ",
			modalPercent: "Bónus de boas-vindas",
			modalPromoSubtext: "up to",
			modalPromoCurrency: "3000 USDT",
			modalBonus: "+ 100 rodadas grátis",
			checkbox:
				"Ao marcar esta caixa para se registar neste site, o utilizador declara ser maior de 18 anos e ter lido, compreendido e aceite",
			terms: "os Termos e Condições",
			modalBtn: "Criar uma conta",
			quantityCharacter: "Conter pelo menos 6 caracteres",
			uppercaseCharacter: "Incluir pelo menos 1 letra maiúscula",
			numberCharacter: "Incluir pelo menos 1 número",
			emailError: "Formato de email incorreto",
		},
		RU: {
			title: "welcome",
			titleBonus: "BONUS",
			promoSubtext: "up to",
			promoCurrency: "700 000 RUB",
			bonus: "+ 100 фриспинов",
			btnRegistration: "ПРИСОЕДИНЯЙТЕСЬ",
			modalPercent: "Welcome bonus",
			modalPromoSubtext: "up to",
			modalPromoCurrency: "700 000 RUB",
			modalBonus: "+ 100 фриспинов",
			checkbox:
				"Ставя галочку в этом поле для регистрации на сайте, пользователь подтверждает, что ему больше 18 лет, и что он прочитал, понял и принял",
			terms: "Условия и положения",
			modalBtn: "Cоздать акаунт",
			quantityCharacter: "Не менее 6 символов",
			uppercaseCharacter: "Как минимум 1 заглавную букву",
			numberCharacter: "Как минимум 1 цифру",
			emailError: "Неверный формат email",
		},
		CZ: {
			title: "Uvítací",
			titleBonus: "BONUS",
			promoSubtext: "up to",
			promoCurrency: "6 800 EUR",
			bonus: "+ 100 roztočení zdarma",
			btnRegistration: "PŘIPOJTE SE NYNÍ",
			modalPercent: "Uvítací bonus",
			modalPromoSubtext: "up to",
			modalPromoCurrency: "6 800 EUR",
			modalBonus: "+ 100 roztočení zdarma",
			checkbox:
				"Zaškrtnutím tohoto políčka pro registraci na webu uživatel potvrzuje, že je mu více než 18 let, a že si přečetl, pochopil a přijal",
			terms: "Podmínky použití",
			modalBtn: "Vytvořit účet",
			quantityCharacter: "Mít alespoň 6 znaků",
			uppercaseCharacter: "Obsahovat alespoň 1 velké písmeno",
			numberCharacter: "Obsahovat alespoň 1 číslici",
			emailError: "Nesprávný formát e-mailu",
		},
		CA: {
			title: "welcome BONUS",
			title: "welcome",
			titleBonus: "BONUS",
			promoSubtext: "up to",
			promoCurrency: "10 000 CAD",
			bonus: "+ 100 Free spins",
			btnRegistration: "JOIN NOW",
			modalPercent: "Welcome bonus",
			modalPromoSubtext: "up to",
			modalPromoCurrency: "10 000 CAD",
			modalBonus: "+ 100 Free spins",
			checkbox:
				"By ticking this box to register for this website, the user declares to be over 18 years old and to have read, understood and accepted",
			terms: "the Terms and Conditions",
			modalBtn: "Create an account",
			quantityCharacter: "Contain at least 6 characters",
			uppercaseCharacter: "Include at least 1 uppercase letter",
			numberCharacter: "Include at least 1 number",
			emailError: "Incorrect email format",
		},
	};

  const btn = document.getElementById("lang-btn");
	const dropdown = document.getElementById("lang-dropdown");
	const currentLang = document.getElementById("current-lang");

	const fallbackLang = "EN";

	const applyLanguage = (lang) => {
		if (!translations[lang]) return;

		document.body.className = `lang-${lang}`;

		document.querySelectorAll("[data-translate]").forEach((el) => {
			const key = el.dataset.translate;
			const fallbackLang = "EN";
			const translation =
				translations[lang][key] ?? translations[fallbackLang][key];

			if (translation !== undefined) {
				el.textContent = translation;
			}
		});

		currentLang.textContent = lang;
		localStorage.setItem("selectedLang", lang);

		// Активна мова — підсвітка
		document.querySelectorAll("#lang-dropdown li").forEach((li) => {
			if (li.dataset.lang === lang) {
				li.classList.add("active");
			} else {
				li.classList.remove("active");
			}
		});
	};

	// Відкриття / закриття списку мов
	btn.addEventListener("click", () => {
		dropdown.classList.toggle("hidden");
		btn.classList.toggle("open");
	});

	// Обробка кліку по мові
	dropdown.querySelectorAll("li").forEach((item) => {
		item.addEventListener("click", () => {
			const lang = item.dataset.lang;
			applyLanguage(lang);
			dropdown.classList.add("hidden");
			btn.classList.remove("open");
		});
	});

	// Закриття випадаючого списку при кліку поза ним
	document.addEventListener("click", (e) => {
		if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
			dropdown.classList.add("hidden");
			btn.classList.remove("open");
		}
	});

	// Завантаження мови при відкритті сторінки
const supportedLanguages = Object.keys(translations);

function getBrowserLanguage() {
	const userLang = navigator.language || navigator.userLanguage;
	const language = userLang.split("-")[0].toUpperCase(); // <== Змінено на upperCase
	if (supportedLanguages.includes(language)) {
		return language;
	}
	return fallbackLang; // EN
}

window.addEventListener("DOMContentLoaded", () => {
	const savedLang = localStorage.getItem("selectedLang");
	const langToApply = savedLang || getBrowserLanguage();
	applyLanguage(langToApply);
});



	