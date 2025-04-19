
        // Country and currency data
        const countryList = {
            AED: { code: "AE", name: "درهم إماراتي" },
            AFN: { code: "AF", name: "أفغاني" },
            ALL: { code: "AL", name: "ليك ألباني" },
            AMD: { code: "AM", name: "درام أرميني" },
            ANG: { code: "AN", name: "جلدر أنتيلي هولندي" },
            AOA: { code: "AO", name: "كوانزا أنغولي" },
            ARS: { code: "AR", name: "بيزو أرجنتيني" },
            AUD: { code: "AU", name: "دولار أسترالي" },
            AWG: { code: "AW", name: "فلورن أروبي" },
            AZN: { code: "AZ", name: "مانات أذربيجاني" },
            BAM: { code: "BA", name: "مارك قابل للتحويل" },
BBD: { code: "BB", name: "دولار بربادوسي" },
            BDT: { code: "BD", name: "تاكا بنغلاديشي" },
            BGN: { code: "BG", name: "ليف بلغاري" },
            BHD: { code: "BH", name: "دينار بحريني" },
            BIF: { code: "BI", name: "فرنك بروندي" },
            BMD: { code: "BM", name: "دولار برمودي" },
            BND: { code: "BN", name: "دولار بروني" },
            BOB: { code: "BO", name: "بوليفيانو" },
            BRL: { code: "BR", name: "ريال برازيلي" },
            BSD: { code: "BS", name: "دولار باهامي" },
            BTN: { code: "BT", name: "نولترم بوتاني" },
            BWP: { code: "BW", name: "بولا بتسواني" },
            BYN: { code: "BY", name: "روبل بيلاروسي" },
            BZD: { code: "BZ", name: "دولار بليزي" },
            CAD: { code: "CA", name: "دولار كندي" },
            CDF: { code: "CD", name: "فرنك كونغولي" },
            CHF: { code: "CH", name: "فرنك سويسري" },
            CLP: { code: "CL", name: "بيزو تشيلي" },
            CNY: { code: "CN", name: "يوان صيني" },
            COP: { code: "CO", name: "بيزو كولومبي" },
            CRC: { code: "CR", name: "كولون كوستاريكي" },
            CUP: { code: "CU", name: "بيزو كوبي" },
            CVE: { code: "CV", name: "اسكودو الرأس الأخضر" },
            CZK: { code: "CZ", name: "كرونة تشيكية" },
            DJF: { code: "DJ", name: "فرنك جيبوتي" },
            DKK: { code: "DK", name: "كرونة دنماركية" },
            DOP: { code: "DO", name: "بيزو دومينيكي" },
            DZD: { code: "DZ", name: "دينار جزائري" },
            EGP: { code: "EG", name: "جنيه مصري" },
            ERN: { code: "ER", name: "ناكفا إريتري" },
            ETB: { code: "ET", name: "بير إثيوبي" },
            EUR: { code: "EU", name: "يورو" },
            FJD: { code: "FJ", name: "دولار فيجي" },
            FKP: { code: "FK", name: "جنيه جزر فوكلاند" },
            GBP: { code: "GB", name: "جنيه إسترليني" },
            GEL: { code: "GE", name: "لاري جورجي" },
            GHS: { code: "GH", name: "سيدي غاني" },
            GIP: { code: "GI", name: "جنيه جبل طارق" },
            GMD: { code: "GM", name: "دالاسي غامبي" },
            GNF: { code: "GN", name: "فرنك غيني" },
            GTQ: { code: "GT", name: "كويتزال غواتيمالي" },
            GYD: { code: "GY", name: "دولار غوياني" },
            HKD: { code: "HK", name: "دولار هونغ كونغ" },
            HNL: { code: "HN", name: "لمبيرا هندوراسي" },
            HRK: { code: "HR", name: "كونا كرواتية" },
            HTG: { code: "HT", name: "جورد هايتي" },
            HUF: { code: "HU", name: "فورنت مجري" },
            IDR: { code: "ID", name: "روبية إندونيسية" },
            ILS: { code: "IL", name: "شيكل إسرائيلي جديد" },
            INR: { code: "IN", name: "روبية هندية" },
            IQD: { code: "IQ", name: "دينار عراقي" },
            IRR: { code: "IR", name: "ريال إيراني" },
            ISK: { code: "IS", name: "كرونة آيسلندية" },
            JMD: { code: "JM", name: "دولار جامايكي" },
            JOD: { code: "JO", name: "دينار أردني" },
            JPY: { code: "JP", name: "ين ياباني" },
            KES: { code: "KE", name: "شيلينغ كيني" },
            KGS: { code: "KG", name: "سوم قرغيزستاني" },
            KHR: { code: "KH", name: "ريال كمبودي" },
            KMF: { code: "KM", name: "فرنك جزر القمر" },
            KPW: { code: "KP", name: "وون كوري شمالي" },
            KRW: { code: "KR", name: "وون كوري جنوبي" },
            KWD: { code: "KW", name: "دينار كويتي" },
            KYD: { code: "KY", name: "دولار جزر كايمان" },
            KZT: { code: "KZ", name: "تينغ كازاخستاني" },
            LAK: { code: "LA", name: "كيب لاوي" },
            LBP: { code: "LB", name: "ليرة لبنانية" },
            LKR: { code: "LK", name: "روبية سريلانكية" },
            LRD: { code: "LR", name: "دولار ليبيري" },
            LSL: { code: "LS", name: "لوتي ليسوتو" },
            LYD: { code: "LY", name: "دينار ليبي" },
            MAD: { code: "MA", name: "درهم مغربي" },
            MDL: { code: "MD", name: "ليو مولدوفي" },
            MGA: { code: "MG", name: "أرياري مدغشقري" },
            MKD: { code: "MK", name: "دينار مقدوني" },
            MMK: { code: "MM", name: "كيات ميانماري" },
            MNT: { code: "MN", name: "توجريك منغولي" },
            MOP: { code: "MO", name: "باتاكا ماكاوي" },
            MRU: { code: "MR", name: "أوقية موريتانية" },
            MUR: { code: "MU", name: "روبية موريشيوسية" },
            MVR: { code: "MV", name: "روفية مالديفية" },
            MWK: { code: "MW", name: "كواشا ملاوية" },
            MXN: { code: "MX", name: "بيزو مكسيكي" },
            MYR: { code: "MY", name: "رينغيت ماليزي" },
            MZN: { code: "MZ", name: "متكال موزمبيقي" },
            NAD: { code: "NA", name: "دولار ناميبي" },
            NGN: { code: "NG", name: "نيرة نيجيرية" },
            NIO: { code: "NI", name: "كوردوبا نيكاراغوا" },
            NOK: { code: "NO", name: "كرونة نرويجية" },
            NPR: { code: "NP", name: "روبية نيبالية" },
            NZD: { code: "NZ", name: "دولار نيوزيلندي" },
            OMR: { code: "OM", name: "ريال عماني" },
            PAB: { code: "PA", name: "بالبوا بنمي" },
            PEN: { code: "PE", name: "سول بيروفي" },
            PGK: { code: "PG", name: "كينا بابوا غينيا" },
            PHP: { code: "PH", name: "بيزو فلبيني" },
            PKR: { code: "PK", name: "روبية باكستانية" },
            PLN: { code: "PL", name: "زلوتي بولندي" },
            PYG: { code: "PY", name: "غواراني باراغواي" },
            QAR: { code: "QA", name: "ريال قطري" },
            RON: { code: "RO", name: "ليو روماني" },
            RSD: { code: "RS", name: "دينار صربي" },
            RUB: { code: "RU", name: "روبل روسي" },
            RWF: { code: "RW", name: "فرنك رواندي" },
            SAR: { code: "SA", name: "ريال سعودي" },
            SBD: { code: "SB", name: "دولار جزر سليمان" },
            SCR: { code: "SC", name: "روبية سيشلية" },
            SDG: { code: "SD", name: "جنيه سوداني" },
            SEK: { code: "SE", name: "كرونة سويدية" },
            SGD: { code: "SG", name: "دولار سنغافوري" },
            SHP: { code: "SH", name: "جنيه سانت هيلينا" },
            SLL: { code: "SL", name: "ليون سيراليوني" },
            SOS: { code: "SO", name: "شيلينغ صومالي" },
            SRD: { code: "SR", name: "دولار سورينامي" },
            STN: { code: "ST", name: "دوبرا ساو تومي" },
            SVC: { code: "SV", name: "كولون سلفادوري" },
            SYP: { code: "SY", name: "ليرة سورية" },
            SZL: { code: "SZ", name: "ليلانجيني سوازي" },
            THB: { code: "TH", name: "باخت تايلاندي" },
            TJS: { code: "TJ", name: "سوموني طاجيكي" },
            TMT: { code: "TM", name: "مانات تركمانستاني" },
            TND: { code: "TN", name: "دينار تونسي" },
            TOP: { code: "TO", name: "بانغا تونغا" },
            TRY: { code: "TR", name: "ليرة تركية" },
            TTD: { code: "TT", name: "دولار ترينيداد وتوباغو" },
            TWD: { code: "TW", name: "دولار تايواني" },
            TZS: { code: "TZ", name: "شيلينغ تنزاني" },
            UAH: { code: "UA", name: "هريفنيا أوكرانية" },
            UGX: { code: "UG", name: "شيلينغ أوغندي" },
            USD: { code: "US", name: "دولار أمريكي" },
            UYU: { code: "UY", name: "بيزو أوروغواي" },
            UZS: { code: "UZ", name: "سوم أوزبكستاني" },
            VES: { code: "VE", name: "بوليفار فنزويلي" },
            VND: { code: "VN", name: "دونغ فيتنامي" },
            VUV: { code: "VU", name: "فاتو فانواتو" },
            WST: { code: "WS", name: "تالا ساموا" },
            XAF: { code: "CM", name: "فرنك وسط أفريقي" },
            XCD: { code: "AG", name: "دولار شرق الكاريبي" },
            XDR: { code: "IMF", name: "حقوق سحب خاصة" },
            XOF: { code: "BJ", name: "فرنك غرب أفريقي" },
            XPF: { code: "PF", name: "فرنك بولينيزي" },
            YER: { code: "YE", name: "ريال يمني" },
            ZAR: { code: "ZA", name: "راند جنوب أفريقي" },
            ZMW: { code: "ZM", name: "كواشا زامبية" },
            ZWL: { code: "ZW", name: "دولار زيمبابوي" }
        };

        // Exchange rates based on USD (as of 15/4/2025)
        const exchangeRates = {
            AED: 3.673,    // UAE Dirham
            AFN: 86.5,     // Afghan Afghani
            ALL: 104.5,    // Albanian Lek
            AMD: 420.5,    // Armenian Dram
            ANG: 1.79,     // Netherlands Antillean Guilder
            AOA: 850.25,   // Angolan Kwanza
            ARS: 980.5,    // Argentine Peso
            AUD: 1.45,     // Australian Dollar
            AWG: 1.79,     // Aruban Florin
            AZN: 1.7,      // Azerbaijani Manat
            BAM: 1.8,      // Bosnia-Herzegovina Convertible Mark
BBD: 2,        // Barbadian Dollar
            BDT: 110.5,    // Bangladeshi Taka
            BGN: 1.8,      // Bulgarian Lev
            BHD: 0.376,    // Bahraini Dinar
            BIF: 2850,     // Burundian Franc
            BMD: 1,        // Bermudian Dollar
            BND: 1.35,     // Brunei Dollar
            BOB: 6.91,     // Bolivian Boliviano
            BRL: 5.05,     // Brazilian Real
            BSD: 1,        // Bahamian Dollar
            BTN: 83.5,     // Bhutanese Ngultrum
            BWP: 13.5,     // Botswana Pula
            BYN: 2.52,     // Belarusian Ruble
            BZD: 2,        // Belize Dollar
            CAD: 1.35,     // Canadian Dollar
            CDF: 2500,     // Congolese Franc
            CHF: 0.92,     // Swiss Franc
            CLP: 950,      // Chilean Peso
            CNY: 7.1,      // Chinese Yuan
            COP: 3900,     // Colombian Peso
            CRC: 535,      // Costa Rican Colón
            CUP: 24,       // Cuban Peso
            CVE: 102.5,    // Cape Verdean Escudo
            CZK: 23.5,     // Czech Koruna
            DJF: 177.5,    // Djiboutian Franc
            DKK: 6.9,      // Danish Krone
            DOP: 58.5,     // Dominican Peso
            DZD: 135.5,    // Algerian Dinar
            EGP: 30.9,     // Egyptian Pound
            ERN: 15,       // Eritrean Nakfa
            ETB: 56.5,     // Ethiopian Birr
            EUR: 0.93,     // Euro
            FJD: 2.25,     // Fijian Dollar
            FKP: 0.79,     // Falkland Islands Pound
            GBP: 0.79,     // British Pound
            GEL: 2.65,     // Georgian Lari
            GHS: 12.5,     // Ghanaian Cedi
            GIP: 0.79,     // Gibraltar Pound
            GMD: 65.5,     // Gambian Dalasi
            GNF: 8600,     // Guinean Franc
            GTQ: 7.85,     // Guatemalan Quetzal
            GYD: 209,      // Guyanese Dollar
            HKD: 7.83,     // Hong Kong Dollar
            HNL: 24.5,     // Honduran Lempira
            HRK: 7,        // Croatian Kuna
            HTG: 132.5,    // Haitian Gourde
            HUF: 360,      // Hungarian Forint
            IDR: 15500,    // Indonesian Rupiah
            ILS: 3.65,     // Israeli New Shekel
            INR: 83.5,     // Indian Rupee
            IQD: 1310,     // Iraqi Dinar
            IRR: 42000,    // Iranian Rial
            ISK: 135,      // Icelandic Króna
            JMD: 155.5,    // Jamaican Dollar
            JOD: 0.709,    // Jordanian Dinar
            JPY: 151.5,    // Japanese Yen
            KES: 130.5,    // Kenyan Shilling
            KGS: 89.5,     // Kyrgyzstani Som
            KHR: 4100,     // Cambodian Riel
            KMF: 460,      // Comorian Franc
            KPW: 900,      // North Korean Won
            KRW: 1350,     // South Korean Won
            KWD: 0.307,    // Kuwaiti Dinar
            KYD: 0.83,     // Cayman Islands Dollar
            KZT: 460,      // Kazakhstani Tenge
            LAK: 21000,    // Lao Kip
            LBP: 15000,    // Lebanese Pound
            LKR: 320,      // Sri Lankan Rupee
            LRD: 190,      // Liberian Dollar
            LSL: 18.5,     // Lesotho Loti
            LYD: 4.85,     // Libyan Dinar
            MAD: 9.85,     // Moroccan Dirham
            MDL: 18.5,     // Moldovan Leu
            MGA: 4500,     // Malagasy Ariary
            MKD: 57.5,     // Macedonian Denar
            MMK: 2100,     // Myanmar Kyat
            MNT: 3400,     // Mongolian Tögrög
            MOP: 8,        // Macanese Pataca
            MRU: 40,       // Mauritanian Ouguiya
            MUR: 45.5,     // Mauritian Rupee
            MVR: 15.4,     // Maldivian Rufiyaa
            MWK: 1700,     // Malawian Kwacha
            MXN: 16.8,     // Mexican Peso
            MYR: 4.75,     // Malaysian Ringgit
            MZN: 64,       // Mozambican Metical
            NAD: 18.5,     // Namibian Dollar
            NGN: 1500,     // Nigerian Naira
            NIO: 36.5,     // Nicaraguan Córdoba
            NOK: 10.5,     // Norwegian Krone
            NPR: 133.5,    // Nepalese Rupee
            NZD: 1.65,     // New Zealand Dollar
            OMR: 0.385,    // Omani Rial
            PAB: 1,        // Panamanian Balboa
            PEN: 3.75,     // Peruvian Sol
            PGK: 3.65,     // Papua New Guinean Kina
            PHP: 56.5,     // Philippine Peso
            PKR: 280,      // Pakistani Rupee
            PLN: 4,        // Polish Złoty
            PYG: 7300,     // Paraguayan Guaraní
            QAR: 3.64,     // Qatari Rial
            RON: 4.6,      // Romanian Leu
            RSD: 110,      // Serbian Dinar
            RUB: 90.5,     // Russian Ruble
            RWF: 1300,     // Rwandan Franc
            SAR: 3.75,     // Saudi Riyal
            SBD: 8.25,     // Solomon Islands Dollar
            SCR: 13.5,     // Seychellois Rupee
            SDG: 600,      // Sudanese Pound
            SEK: 10.5,     // Swedish Krona
            SGD: 1.35,     // Singapore Dollar
            SHP: 0.79,     // Saint Helena Pound
            SLL: 21000,    // Sierra Leonean Leone
            SOS: 570,      // Somali Shilling
            SRD: 35,       // Surinamese Dollar
            STN: 23,       // São Tomé and Príncipe Dobra
            SVC: 8.75,     // Salvadoran Colón
            SYP: 13000,    // Syrian Pound
            SZL: 18.5,     // Swazi Lilangeni
            THB: 36.5,     // Thai Baht
            TJS: 11,       // Tajikistani Somoni
            TMT: 3.5,      // Turkmenistani Manat
            TND: 3.1,      // Tunisian Dinar
            TOP: 2.35,     // Tongan Paʻanga
            TRY: 32.5,     // Turkish Lira
            TTD: 6.8,      // Trinidad and Tobago Dollar
            TWD: 32,       // New Taiwan Dollar
            TZS: 2500,     // Tanzanian Shilling
            UAH: 39.5,     // Ukrainian Hryvnia
            UGX: 3700,     // Ugandan Shilling
            USD: 1,        // US Dollar
            UYU: 38.5,     // Uruguayan Peso
            UZS: 12500,    // Uzbekistani Som
            VES: 36,       // Venezuelan Bolívar
            VND: 25000,    // Vietnamese Đồng
            VUV: 120,      // Vanuatu Vatu
            WST: 2.75,     // Samoan Tala
            XAF: 610,      // CFA Franc BEAC
            XCD: 2.7,      // East Caribbean Dollar
            XDR: 0.75,     // Special Drawing Rights
            XOF: 610,      // CFA Franc BCEAO
            XPF: 110,      // CFP Franc
            YER: 250,      // Yemeni Rial
            ZAR: 18.5,     // South African Rand
            ZMW: 25,       // Zambian Kwacha
            ZWL: 360       // Zimbabwean Dollar
        };

        // Popular currencies to display
        const popularCurrencies = [
            'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 
            'AED', 'SAR', 'EGP', 'KWD', 'QAR', 'OMR', 'JOD', 'TRY'
        ];

        // DOM Elements
        const amountInput = document.getElementById('amount');
        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');
        const fromFlag = document.getElementById('fromFlag');
        const toFlag = document.getElementById('toFlag');
        const resultText = document.getElementById('resultText');
        const rateText = document.getElementById('rateText');
        const convertBtn = document.getElementById('convertBtn');
        const swapBtn = document.getElementById('swapBtn');
        const converterForm = document.getElementById('converterForm');
        const popularCurrenciesContainer = document.getElementById('popularCurrencies');
        const themeToggle = document.getElementById('themeToggle');
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        const chartContainer = document.getElementById('chartContainer');

        // Chart variables
        let exchangeRateChart;

        // Initialize the app
        function init() {
            populateCurrencySelects();
            populatePopularCurrencies();
            setDefaultCurrencies();
            getExchangeRate();
            setupEventListeners();
            setupThemeToggle();
        }

        // Populate currency dropdowns
        function populateCurrencySelects() {
            for (const currencyCode in countryList) {
                const option1 = document.createElement('option');
                option1.value = currencyCode;
                option1.textContent = `${currencyCode} - ${countryList[currencyCode].name}`;
                fromCurrencySelect.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = currencyCode;
                option2.textContent = `${currencyCode} - ${countryList[currencyCode].name}`;
                toCurrencySelect.appendChild(option2);
            }
        }

        // Populate popular currencies grid
        function populatePopularCurrencies() {
            popularCurrencies.forEach(currencyCode => {
                if (countryList[currencyCode]) {
                    const currencyItem = document.createElement('div');
                    currencyItem.className = 'currency-item';
                    currencyItem.innerHTML = `
                        <img src="https://flagsapi.com/${countryList[currencyCode].code}/flat/64.png" class="currency-flag" alt="${currencyCode}">
                        <div>
                            <div class="currency-code">${currencyCode}</div>
                            <div class="currency-name">${countryList[currencyCode].name}</div>
                        </div>
                    `;
                    currencyItem.addEventListener('click', () => {
                        toCurrencySelect.value = currencyCode;
                        toFlag.src = `https://flagsapi.com/${countryList[currencyCode].code}/flat/64.png`;
                        getExchangeRate();
                    });
                    popularCurrenciesContainer.appendChild(currencyItem);
                }
            });
        }

        // Set default currencies
        function setDefaultCurrencies() {
            fromCurrencySelect.value = 'USD';
            toCurrencySelect.value = 'EGP';
            fromFlag.src = `https://flagsapi.com/US/flat/64.png`;
            toFlag.src = `https://flagsapi.com/EG/flat/64.png`;
        }

        // Setup event listeners
        function setupEventListeners() {
            fromCurrencySelect.addEventListener('change', () => {
                              fromFlag.src = `https://flagsapi.com/${countryList[fromCurrencySelect.value].code}/flat/64.png`;
                getExchangeRate();
            });

            toCurrencySelect.addEventListener('change', () => {
                toFlag.src = `https://flagsapi.com/${countryList[toCurrencySelect.value].code}/flat/64.png`;
                getExchangeRate();
            });

            amountInput.addEventListener('input', getExchangeRate);
            
            swapBtn.addEventListener('click', swapCurrencies);
            
            converterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                getExchangeRate();
            });
        }

        // Setup theme toggle
        function setupThemeToggle() {
            // Check for saved theme preference or use preferred color scheme
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                document.body.classList.add(savedTheme + '-mode');
                updateThemeToggle(savedTheme);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode');
                updateThemeToggle('dark');
            }

            // Add event listener for theme toggle button
            themeToggle.addEventListener('click', () => {
                if (document.body.classList.contains('dark-mode')) {
                    document.body.classList.remove('dark-mode');
                    localStorage.setItem('theme', 'light');
                    updateThemeToggle('light');
                } else {
                    document.body.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark');
                    updateThemeToggle('dark');
                }
            });

            // Watch for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                if (!localStorage.getItem('theme')) {
                    if (e.matches) {
                        document.body.classList.add('dark-mode');
                        updateThemeToggle('dark');
                    } else {
                        document.body.classList.remove('dark-mode');
                        updateThemeToggle('light');
                    }
                }
            });
        }

        // Update theme toggle button
        function updateThemeToggle(theme) {
            if (theme === 'dark') {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i> الوضع النهاري';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i> الوضع الليلي';
            }
        }

        // Swap currencies
        function swapCurrencies() {
            const temp = fromCurrencySelect.value;
            fromCurrencySelect.value = toCurrencySelect.value;
            toCurrencySelect.value = temp;
            
            fromFlag.src = `https://flagsapi.com/${countryList[fromCurrencySelect.value].code}/flat/64.png`;
            toFlag.src = `https://flagsapi.com/${countryList[toCurrencySelect.value].code}/flat/64.png`;
            
            getExchangeRate();
        }

        // Get exchange rate from fixed rates
        function getExchangeRate() {
            const amount = parseFloat(amountInput.value) || 1;
            const fromCurrency = fromCurrencySelect.value;
            const toCurrency = toCurrencySelect.value;
            
            // Show loading state
            convertBtn.disabled = true;
            convertBtn.innerHTML = '<i class="fas fa-spinner loading"></i> جاري التحميل...';
            
            try {
                // Calculate rate based on USD (all rates are relative to USD)
                const fromRate = exchangeRates[fromCurrency];
                const toRate = exchangeRates[toCurrency];
                
                if (fromRate && toRate) {
                    const rate = toRate / fromRate;
                    const convertedAmount = (amount * rate).toFixed(2);
                    
                    resultText.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
                    rateText.textContent = `1 ${fromCurrency} = ${rate.toFixed(6)} ${toCurrency}`;
                    
                    // Show success notification
                    showNotification('تم تحديث سعر الصرف بنجاح', 'success');
                    
                    // Update chart
                    updateChart(fromCurrency, toCurrency);
                } else {
                    throw new Error('Currency not found in exchange rates');
                }
            } catch (error) {
                console.error('Error calculating exchange rate:', error);
                resultText.textContent = 'فشل في حساب سعر الصرف';
                rateText.textContent = 'العملة غير مدعومة في قاعدة البيانات';
                
                // Show error notification
                showNotification('فشل في حساب سعر الصرف', 'error');
            } finally {
                // Restore button state
                convertBtn.disabled = false;
                convertBtn.innerHTML = '<i class="fas fa-calculator"></i> تحويل';
            }
        }

        // Show notification
        function showNotification(message, type) {
            notificationText.textContent = message;
            notification.className = `notification ${type} show`;
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Update chart with historical data (simulated)
        function updateChart(fromCurrency, toCurrency) {
            try {
                // Simulate historical data for the last 30 days
                const dates = [];
                const rates = [];
                
                const fromRate = exchangeRates[fromCurrency];
                const toRate = exchangeRates[toCurrency];
                const baseRate = toRate / fromRate;
                
                // Generate random fluctuations around the base rate
                for (let i = 30; i >= 0; i--) {
                    const date = new Date();
                    date.setDate(date.getDate() - i);
                    dates.push(date.toLocaleDateString());
                    
                    // Add small random fluctuation
                    const fluctuation = 1 + (Math.random() * 0.1 - 0.05);
                    rates.push(baseRate * fluctuation);
                }
                
                renderChart(dates, rates, fromCurrency, toCurrency);
            } catch (error) {
                console.error('Error generating chart data:', error);
                chartContainer.innerHTML = '<p>لا تتوفر بيانات تاريخية حالياً</p>';
            }
        }

        // Render chart using Chart.js
        function renderChart(dates, rates, fromCurrency, toCurrency) {
            // Destroy previous chart if exists
            if (exchangeRateChart) {
                exchangeRateChart.destroy();
            }
            
            const ctx = document.createElement('canvas');
            chartContainer.innerHTML = '';
            chartContainer.appendChild(ctx);
            
            exchangeRateChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: `${fromCurrency} إلى ${toCurrency}`,
                        data: rates,
                        borderColor: '#2a52be',
                        backgroundColor: 'rgba(42, 82, 190, 0.1)',
                        borderWidth: 2,
                        pointRadius: 3,
                        pointBackgroundColor: '#2a52be',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            rtl: true,
                            labels: {
                                font: {
                                    family: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
                                }
                            }
                        },
                        tooltip: {
                            rtl: true,
                            callbacks: {
                                label: function(context) {
                                    return `1 ${fromCurrency} = ${context.raw.toFixed(6)} ${toCurrency}`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    


async function convertCurrency(from, to, amount) {
    const fromRate = exchangeRates[from];
    const toRate = exchangeRates[to];
    if (fromRate && toRate) {
        const rate = toRate / fromRate;
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('result').textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
    } else {
        document.getElementById('result').textContent = "العملة غير مدعومة في قاعدة البيانات";
    }
}

document.getElementById('convert-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount)) {
        convertCurrency(from, to, amount);
    }
});



    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
