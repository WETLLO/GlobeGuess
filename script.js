 const countriesData = {
    "Polska": {
        year: "966",
        population: "38 milionów",
        continent: "Europa",
        area: "312 696 km²",
        borders: "Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa, Rosja"
    },
    "Niemcy": {
        year: "1871",
        population: "83 miliony",
        continent: "Europa",
        area: "357 022 km²",
        borders: "Polska, Czechy, Austria, Szwajcaria, Francja, Luksemburg, Belgia, Holandia, Dania"
    },
    "Francja": {
        year: "843",
        population: "67 milionów",
        continent: "Europa",
        area: "551 695 km²",
        borders: "Belgia, Luksemburg, Niemcy, Szwajcaria, Włochy, Hiszpania, Andora, Monako"
    },
    "Chiny": {
        year: "2070 p.n.e.",
        population: "1.4 miliarda",
        continent: "Azja",
        area: "9 596 961 km²",
        borders: "Afganistan, Bhutan, Indie, Kazachstan, Korea Północna, Kirgistan, Laos, Mongolia, Mjanma, Nepal, Pakistan, Rosja, Tadżykistan, Wietnam"
    },
    "Stany Zjednoczone": {
        year: "1776",
        population: "331 milionów",
        continent: "Ameryka Północna",
        area: "9 525 067 km²",
        borders: "Kanada, Meksyk"
    },
    "Brazylia": {
        year: "1822",
        population: "212 milionów",
        continent: "Ameryka Południowa",
        area: "8 515 767 km²",
        borders: "Argentyna, Boliwia, Kolumbia, Gujana, Paragwaj, Peru, Surinam, Urugwaj, Wenezuela"
    },
    "Rosja": {
        year: "1991",
        population: "146 milionów",
        continent: "Europa, Azja",
        area: "17 098 242 km²",
        borders: "Azerbejdżan, Białoruś, Chiny, Estonia, Finlandia, Gruzja, Kazachstan, Korea Północna, Łotwa, Litwa, Mongolia, Norwegia, Polska, Ukraina"
    },
    "Indie": {
        year: "1947",
        population: "1.4 miliarda",
        continent: "Azja",
        area: "3 287 263 km²",
        borders: "Bangladesz, Bhutan, Chiny, Mjanma, Nepal, Pakistan"
    },
    "Australia": {
        year: "1901",
        population: "25 milionów",
        continent: "Australia",
        area: "7 692 024 km²",
        borders: "Brak granic lądowych"
    },
    "Kanada": {
        year: "1867",
        population: "38 milionów",
        continent: "Ameryka Północna",
        area: "9 984 670 km²",
        borders: "Stany Zjednoczone"
    },
    "Afganistan": {
        year: "1919",
        population: "40 milionów",
        continent: "Azja",
        area: "652 230 km²",
        borders: "Chiny, Iran, Pakistan, Tadżykistan, Turkmenistan, Uzbekistan"
    },
    "Angola": {
        year: "1975",
        population: "33 miliony",
        continent: "Afryka",
        area: "1 246 700 km²",
        borders: "Zambia, Namibia, Kongo, Demokratyczna Republika Konga"
    },
    "Antigua i Barbuda": {
        year: "1981",
        population: "100 000",
        continent: "Ameryka Środkowa",
        area: "442 km²",
        borders: "Brak granic lądowych"
    },
    "Argentyna": {
        year: "1816",
        population: "45 milionów",
        continent: "Ameryka Południowa",
        area: "2 780 400 km²",
        borders: "Boliwia, Brazylia, Chile, Paragwaj, Peru, Urugwaj"
    },
    "Armenia": {
        year: "1991",
        population: "3 miliony",
        continent: "Azja",
        area: "29 743 km²",
        borders: "Azerbejdżan, Gruzja, Iran, Turcja"
    },
    "Austria": {
        year: "1955",
        population: "9 milionów",
        continent: "Europa",
        area: "83 879 km²",
        borders: "Czechy, Niemcy, Węgry, Liechtenstein, Szwajcaria, Słowacja, Włochy"
    },
    "Azerbejdżan": {
        year: "1991",
        population: "10 milionów",
        continent: "Azja",
        area: "86 600 km²",
        borders: "Armenia, Gruzja, Iran, Rosja, Turcja"
    },
    "Bahamy": {
        year: "1973",
        population: "400 000",
        continent: "Ameryka Północna",
        area: "13 880 km²",
        borders: "Brak granic lądowych"
    },
    "Bahrajn": {
        year: "1971",
        population: "1.5 miliona",
        continent: "Azja",
        area: "765 km²",
        borders: "Brak granic lądowych"
    },
    "Bangladesz": {
        year: "1971",
        population: "170 milionów",
        continent: "Azja",
        area: "147 570 km²",
        borders: "Birma, Chiny, Indie"
    },
    "Barbados": {
        year: "1966",
        population: "300 000",
        continent: "Ameryka Środkowa",
        area: "430 km²",
        borders: "Brak granic lądowych"
    },
    "Belgia": {
        year: "1830",
        population: "11 milionów",
        continent: "Europa",
        area: "30 528 km²",
        borders: "Francja, Luksemburg, Niemcy, Holandia"
    },
    "Belize": {
        year: "1981",
        population: "400 000",
        continent: "Ameryka Środkowa",
        area: "22 966 km²",
        borders: "Gwatemala, Meksyk"
    },
    "Benin": {
        year: "1960",
        population: "12 milionów",
        continent: "Afryka",
        area: "112 622 km²",
        borders: "Burkina Faso, Togo, Nigeria"
    },
    "Białoruś": {
        year: "1991",
        population: "9.5 miliona",
        continent: "Europa",
        area: "207 600 km²",
        borders: "Polska, Litwa, Łotwa, Rosja, Ukraina"
    },
    "Birma": {
        year: "1948",
        population: "54 miliony",
        continent: "Azja",
        area: "676 578 km²",
        borders: "Bangladesz, Chiny, Indie, Laos, Tajlandia"
    },
    "Boliwia": {
        year: "1825",
        population: "11 milionów",
        continent: "Ameryka Południowa",
        area: "1 098 581 km²",
        borders: "Argentyna, Brazylia, Chile, Paragwaj, Peru"
    },
    "Bośnia i Hercegowina": {
        year: "1992",
        population: "3.3 miliona",
        continent: "Europa",
        area: "51 197 km²",
        borders: "Chorwacja, Czarnogóra, Serbia"
    },
    "Botswana": {
        year: "1966",
        population: "2.5 miliona",
        continent: "Afryka",
        area: "581 730 km²",
        borders: "Namibia, RPA, Zimbabwe"
    },
    "Brazylia": {
        year: "1822",
        population: "212 milionów",
        continent: "Ameryka Południowa",
        area: "8 515 767 km²",
        borders: "Argentyna, Boliwia, Kolumbia, Gujana, Paragwaj, Peru, Surinam, Urugwaj, Wenezuela"
    },
    "Brunei": {
        year: "1984",
        population: "430 000",
        continent: "Azja",
        area: "5 765 km²",
        borders: "Malezja"
    },
    "Bułgaria": {
        year: "681",
        population: "7 milionów",
        continent: "Europa",
        area: "110 994 km²",
        borders: "Grecja, Rumunia, Serbia, Turcja, Macedonia Północna"
    },
    "Burkina Faso": {
        year: "1960",
        population: "21 milionów",
        continent: "Afryka",
        area: "272 967 km²",
        borders: "Benin, Wybrzeże Kości Słoniowej, Ghana, Mali, Niger, Togo"
    },
	    "Burundi": {
        year: "1962",
        population: "12 milionów",
        continent: "Afryka",
        area: "27 834 km²",
        borders: "Rwanda, Tanzania, Zair"
    },
    "Chad": {
        year: "1960",
        population: "16 milionów",
        continent: "Afryka",
        area: "1 284 000 km²",
        borders: "Libia, Nigier, Sudan, Kamerun, Nigeria, Czad"
    },
    "Chile": {
        year: "1818",
        population: "19 milionów",
        continent: "Ameryka Południowa",
        area: "756 102 km²",
        borders: "Boliwia, Argentyna, Peru"
    },
    "Chiny": {
        year: "2070 p.n.e.",
        population: "1.4 miliarda",
        continent: "Azja",
        area: "9 596 961 km²",
        borders: "Afganistan, Bhutan, Indie, Kazachstan, Korea Północna, Kirgistan, Laos, Mongolia, Mjanma, Nepal, Pakistan, Rosja, Tadżykistan, Wietnam"
    },
    "Cypr": {
        year: "1960",
        population: "1 milion",
        continent: "Europa",
        area: "9 251 km²",
        borders: "Brak granic lądowych"
    },
    "Czarnogóra": {
        year: "2006",
        population: "620 000",
        continent: "Europa",
        area: "13 812 km²",
        borders: "Chorwacja, Kosowo, Serbia, Albania"
    },
    "Czechy": {
        year: "1993",
        population: "10 milionów",
        continent: "Europa",
        area: "78 867 km²",
        borders: "Polska, Niemcy, Austria, Słowacja"
    },
    "Demokratyczna Republika Konga": {
        year: "1960",
        population: "85 milionów",
        continent: "Afryka",
        area: "2 344 858 km²",
        borders: "Angola, Burundi, Centralna Afryka, Kongo, Rwanda, Sudan, Uganda, Zambia, Tanzania"
    },
    "Dania": {
        year: "10 wiek",
        population: "5.8 miliona",
        continent: "Europa",
        area: "43 094 km²",
        borders: "Brak granic lądowych (łączy się mostami z Niemcami)"
    },
    "Dominika": {
        year: "1978",
        population: "70 000",
        continent: "Ameryka Środkowa",
        area: "751 km²",
        borders: "Brak granic lądowych"
    },
    "Dominikana": {
        year: "1844",
        population: "10 milionów",
        continent: "Ameryka Środkowa",
        area: "48 442 km²",
        borders: "Haiti"
    },
    "Ekwador": {
        year: "1830",
        population: "18 milionów",
        continent: "Ameryka Południowa",
        area: "283 561 km²",
        borders: "Kolumbia, Peru"
    },
    "Erytrea": {
        year: "1993",
        population: "6 milionów",
        continent: "Afryka",
        area: "117 600 km²",
        borders: "Czadu, Etiopia, Sudan"
    },
    "Estonia": {
        year: "1991",
        population: "1.3 miliona",
        continent: "Europa",
        area: "45 227 km²",
        borders: "Łotwa, Rosja"
    },
    "Eswatini": {
        year: "1968",
        population: "1.2 miliona",
        continent: "Afryka",
        area: "17 364 km²",
        borders: "RPA, Mozambik"
    },
    "Etiopia": {
        year: "1 000 p.n.e.",
        population: "120 milionów",
        continent: "Afryka",
        area: "1 104 300 km²",
        borders: "Djibuti, Eritrea, Kenia, Somalia, Sudan, Sudan Południowy"
    },
    "Fidżi": {
        year: "1970",
        population: "900 000",
        continent: "Oceania",
        area: "18 274 km²",
        borders: "Brak granic lądowych"
    },
    "Filipiny": {
        year: "1946",
        population: "113 milionów",
        continent: "Azja",
        area: "300 000 km²",
        borders: "Brak granic lądowych"
    },
    "Finlandia": {
        year: "1917",
        population: "5.5 miliona",
        continent: "Europa",
        area: "338 424 km²",
        borders: "Norwegia, Rosja, Szwecja"
    },
    "Francja": {
        year: "843",
        population: "67 milionów",
        continent: "Europa",
        area: "551 695 km²",
        borders: "Belgia, Luksemburg, Niemcy, Szwajcaria, Włochy, Hiszpania, Andora, Monako"
    },
    "Gabon": {
        year: "1960",
        population: "2.3 miliona",
        continent: "Afryka",
        area: "267 668 km²",
        borders: "Gwinea Równikowa, Kamerun, Kongo"
    },
    "Gambia": {
        year: "1965",
        population: "2.4 miliona",
        continent: "Afryka",
        area: "11 295 km²",
        borders: "Senegal"
    },
    "Ghana": {
        year: "1957",
        population: "31 milionów",
        continent: "Afryka",
        area: "238 533 km²",
        borders: "Burkina Faso, Wybrzeże Kości Słoniowej, Togo"
    },
    "Grenada": {
        year: "1974",
        population: "110 000",
        continent: "Ameryka Środkowa",
        area: "344 km²",
        borders: "Brak granic lądowych"
    },
    "Grecja": {
        year: "8 wiek p.n.e.",
        population: "11 milionów",
        continent: "Europa",
        area: "131 957 km²",
        borders: "Albania, Bułgaria, Macedonia, Turcja"
    },
    "Grenlandia": {
        year: "1721",
        population: "56 000",
        continent: "Ameryka Północna",
        area: "2 166 086 km²",
        borders: "Brak granic lądowych"
    },
    "Guatemala": {
        year: "1821",
        population: "18 milionów",
        continent: "Ameryka Środkowa",
        area: "108 889 km²",
        borders: "Belize, Honduras, Meksyk"
    },
    "Guinea": {
        year: "1958",
        population: "13 milionów",
        continent: "Afryka",
        area: "245 857 km²",
        borders: "Liberia, Mali, Senegal, Sierra Leone, Wybrzeże Kości Słoniowej"
    },
    "Guinea Bissau": {
        year: "1974",
        population: "2 miliony",
        continent: "Afryka",
        area: "36 125 km²",
        borders: "Gambia, Senegal"
    },
    "Gwatemala": {
        year: "1821",
        population: "18 milionów",
        continent: "Ameryka Środkowa",
        area: "108 889 km²",
        borders: "Belize, Honduras, Meksyk"
    },
	    "Gwinea Równikowa": {
        year: "1968",
        population: "1.4 miliona",
        continent: "Afryka",
        area: "28 051 km²",
        borders: "Gabon, Kamerun"
    },
    "Gwinea-Bisau": {
        year: "1974",
        population: "2 miliony",
        continent: "Afryka",
        area: "36 125 km²",
        borders: "Gambia, Senegal"
    },
    "Haiti": {
        year: "1804",
        population: "11 milionów",
        continent: "Ameryka Środkowa",
        area: "27 750 km²",
        borders: "Dominikana"
    },
    "Honduras": {
        year: "1821",
        population: "10 milionów",
        continent: "Ameryka Środkowa",
        area: "112 492 km²",
        borders: "Gwatemala, Salwador, Nikaragua"
    },
    "Hongkong": {
        year: "1997",
        population: "7.5 miliona",
        continent: "Azja",
        area: "1 104 km²",
        borders: "Chiny"
    },
    "Węgry": {
        year: "1000",
        population: "9.6 miliona",
        continent: "Europa",
        area: "93 028 km²",
        borders: "Austria, Słowacja, Ukraina, Rumunia, Serbia, Chorwacja, Słowenia"
    },
    "Islandia": {
        year: "930",
        population: "360 000",
        continent: "Europa",
        area: "103 000 km²",
        borders: "Brak granic lądowych"
    },
    "Indie": {
        year: "1947",
        population: "1.4 miliarda",
        continent: "Azja",
        area: "3 287 263 km²",
        borders: "Bangladesz, Bhutan, Chiny, Mjanma, Nepal, Pakistan"
    },
    "Indonezja": {
        year: "1945",
        population: "276 milionów",
        continent: "Azja",
        area: "1 904 569 km²",
        borders: "Brak granic lądowych"
    },
    "Irak": {
        year: "1921",
        population: "42 miliony",
        continent: "Azja",
        area: "438 317 km²",
        borders: "Iran, Jordania, Kuwejt, Arabia Saudyjska, Syria, Turcja"
    },
    "Irlandia": {
        year: "1922",
        population: "5 milionów",
        continent: "Europa",
        area: "70 273 km²",
        borders: "Wielka Brytania"
    },
    "Iran": {
        year: "550 p.n.e.",
        population: "85 milionów",
        continent: "Azja",
        area: "1 648 195 km²",
        borders: "Afganistan, Armenia, Azerbejdżan, Bahrajn, Irak, Kazachstan, Kuwejt, Pakistan, Rosja, Arabia Saudyjska, Syria, Turcja, Zjednoczone Emiraty Arabskie"
    },
    "Islandia": {
        year: "930",
        population: "360 000",
        continent: "Europa",
        area: "103 000 km²",
        borders: "Brak granic lądowych"
    },
    "Izrael": {
        year: "1948",
        population: "9 milionów",
        continent: "Azja",
        area: "22 072 km²",
        borders: "Egipt, Jordania, Liban, Syria"
    },
    "Jamajka": {
        year: "1962",
        population: "2.8 miliona",
        continent: "Ameryka Środkowa",
        area: "10 991 km²",
        borders: "Brak granic lądowych"
    },
    "Japonia": {
        year: "660 p.n.e.",
        population: "125 milionów",
        continent: "Azja",
        area: "377 975 km²",
        borders: "Brak granic lądowych"
    },
    "Jemen": {
        year: "1990",
        population: "30 milionów",
        continent: "Azja",
        area: "527 968 km²",
        borders: "Oman, Arabia Saudyjska"
    },
    "Jordania": {
        year: "1946",
        population: "10 milionów",
        continent: "Azja",
        area: "89 342 km²",
        borders: "Irak, Izrael, Arabia Saudyjska, Syria"
    },
    "Jorzy": {
        year: "1991",
        population: "4 miliony",
        continent: "Europa",
        area: "69 700 km²",
        borders: "Armenia, Azerbejdżan, Rosja, Turcja"
    },
    "Kambodża": {
        year: "1953",
        population: "17 milionów",
        continent: "Azja",
        area: "181 035 km²",
        borders: "Laos, Tajlandia, Wietnam"
    },
    "Kamerun": {
        year: "1960",
        population: "27 milionów",
        continent: "Afryka",
        area: "475 442 km²",
        borders: "Czad, Gwinea Równikowa, Kongo, Nigeria, Republika Środkowoafrykańska"
    },
    "Kanada": {
        year: "1867",
        population: "38 milionów",
        continent: "Ameryka Północna",
        area: "9 984 670 km²",
        borders: "Stany Zjednoczone"
    },
    "Kapsztad": {
        year: "1910",
        population: "1.5 miliona",
        continent: "Afryka",
        area: "10 400 km²",
        borders: "Brak granic lądowych"
    },
    "Katar": {
        year: "1971",
        population: "2.8 miliona",
        continent: "Azja",
        area: "11 437 km²",
        borders: "Brak granic lądowych"
    },
    "Kazachstan": {
        year: "1991",
        population: "18 milionów",
        continent: "Azja",
        area: "2 724 900 km²",
        borders: "Chiny, Kirgistan, Rosja, Tadżykistan, Turkmenistan, Uzbekistan"
    },
    "Kenia": {
        year: "1963",
        population: "53 miliony",
        continent: "Afryka",
        area: "580 367 km²",
        borders: "Etiopia, Somalia, Tanzania, Uganda"
    },
    "Kirgistan": {
        year: "1991",
        population: "6.5 miliona",
        continent: "Azja",
        area: "199 951 km²",
        borders: "Kazachstan, Kirgistan, Uzbekistan"
    },
    "Korea Północna": {
        year: "1948",
        population: "25 milionów",
        continent: "Azja",
        area: "120 538 km²",
        borders: "Chiny, Korea Południowa, Rosja"
    },
	 "Korea Południowa": {
        year: "1948",
        population: "51 milionów",
        continent: "Azja",
        area: "100 210 km²",
        borders: "Korea Północna"
    },
    "Kostaryka": {
        year: "1821",
        population: "5 milionów",
        continent: "Ameryka Środkowa",
        area: "51 100 km²",
        borders: "Panama, Nikaragua"
    },
    "Kuba": {
        year: "1902",
        population: "11 milionów",
        continent: "Ameryka Północna",
        area: "109 884 km²",
        borders: "Brak granic lądowych"
    },
    "Kuwejt": {
        year: "1961",
        population: "4 miliony",
        continent: "Azja",
        area: "17 818 km²",
        borders: "Irak, Arabia Saudyjska"
    },
    "Laos": {
        year: "1954",
        population: "7 milionów",
        continent: "Azja",
        area: "236 800 km²",
        borders: "Chiny, Kambodża, Myanmar, Tajlandia, Wietnam"
    },
    "Lesotho": {
        year: "1966",
        population: "2 miliony",
        continent: "Afryka",
        area: "30 355 km²",
        borders: "Południowa Afryka"
    },
    "Liban": {
        year: "1943",
        population: "6 milionów",
        continent: "Azja",
        area: "10 452 km²",
        borders: "Izrael, Syria"
    },
    "Liberia": {
        year: "1847",
        population: "5 milionów",
        continent: "Afryka",
        area: "111 369 km²",
        borders: "Gwinea, Wybrzeże Kości Słoniowej"
    },
    "Libia": {
        year: "1951",
        population: "6.8 miliona",
        continent: "Afryka",
        area: "1 759 541 km²",
        borders: "Algieria, Czad, Egipt, Niger, Sudan, Tunezja"
    },
    "Liechtenstein": {
        year: "1719",
        population: "39 000",
        continent: "Europa",
        area: "160 km²",
        borders: "Szwajcaria, Austria"
    },
    "Litwa": {
        year: "1236",
        population: "2.8 miliona",
        continent: "Europa",
        area: "65 300 km²",
        borders: "Łotwa, Polska, Rosja, Białoruś"
    },
    "Luksemburg": {
        year: "963",
        population: "634 000",
        continent: "Europa",
        area: "2 586 km²",
        borders: "Belgia, Francja, Niemcy"
    },
    "Łotwa": {
        year: "1918",
        population: "1.8 miliona",
        continent: "Europa",
        area: "64 589 km²",
        borders: "Estonia, Litwa, Rosja, Białoruś"
    },
    "Madagaskar": {
        year: "1960",
        population: "28 milionów",
        continent: "Afryka",
        area: "587 041 km²",
        borders: "Brak granic lądowych"
    },
    "Malawi": {
        year: "1964",
        population: "19 milionów",
        continent: "Afryka",
        area: "118 484 km²",
        borders: "Mozambik, Tanzania, Zambia"
    },
    "Malediwy": {
        year: "1965",
        population: "400 000",
        continent: "Azja",
        area: "298 km²",
        borders: "Brak granic lądowych"
    },
    "Malezja": {
        year: "1957",
        population: "33 miliony",
        continent: "Azja",
        area: "330 803 km²",
        borders: "Brunei, Indonezja, Tajlandia"
    },
    "Malta": {
        year: "1964",
        population: "514 000",
        continent: "Europa",
        area: "316 km²",
        borders: "Brak granic lądowych"
    },
    "Maroko": {
        year: "1956",
        population: "37 milionów",
        continent: "Afryka",
        area: "710 850 km²",
        borders: "Algieria, Mauretania, Hiszpania (przez Ceutę i Melillę)"
    },
    "Mauritius": {
        year: "1968",
        population: "1.3 miliona",
        continent: "Afryka",
        area: "2 040 km²",
        borders: "Brak granic lądowych"
    },
    "Maurytania": {
        year: "1960",
        population: "4.5 miliona",
        continent: "Afryka",
        area: "1 030 700 km²",
        borders: "Algieria, Mali, Senegal, Sahara Zachodnia"
    },
    "Mozambik": {
        year: "1975",
        population: "32 miliony",
        continent: "Afryka",
        area: "801 590 km²",
        borders: "Tanzania, Malawi, Zambia, Zimbabwe, Południowa Afryka, Eswatini"
    },
    "Namibia": {
        year: "1990",
        population: "2.5 miliona",
        continent: "Afryka",
        area: "825 615 km²",
        borders: "Angola, Botswana, Południowa Afryka, Zambia"
    },
    "Nauru": {
        year: "1968",
        population: "10 000",
        continent: "Oceania",
        area: "21 km²",
        borders: "Brak granic lądowych"
    },
    "Nepal": {
        year: "1951",
        population: "30 milionów",
        continent: "Azja",
        area: "147 516 km²",
        borders: "Chiny, Indie"
    },
    "Niger": {
        year: "1960",
        population: "24 miliony",
        continent: "Afryka",
        area: "1 267 000 km²",
        borders: "Algieria, Benin, Burkina Faso, Czad, Kamerun, Gwinea, Mali, Nigeria, Libia"
    },
	  "Nigeria": {
        year: "1960",
        population: "206 milionów",
        continent: "Afryka",
        area: "923 769 km²",
        borders: "Benin, Czad, Kamerun, Niger"
    },
    "Nikaragua": {
        year: "1838",
        population: "6 milionów",
        continent: "Ameryka Środkowa",
        area: "130 375 km²",
        borders: "Kostaryka, Honduras"
    },
    "Niemcy": {
        year: "1871",
        population: "83 miliony",
        continent: "Europa",
        area: "357 022 km²",
        borders: "Polska, Czechy, Austria, Szwajcaria, Francja, Luksemburg, Belgia, Holandia, Dania"
    },
    "Nikaragua": {
        year: "1838",
        population: "6 milionów",
        continent: "Ameryka Środkowa",
        area: "130 375 km²",
        borders: "Kostaryka, Honduras"
    },
    "Norwegia": {
        year: "1905",
        population: "5.4 miliona",
        continent: "Europa",
        area: "148 729 km²",
        borders: "Szwecja, Finlandia, Rosja"
    },
    "Nowa Zelandia": {
        year: "1840",
        population: "5 milionów",
        continent: "Oceania",
        area: "268 021 km²",
        borders: "Brak granic lądowych"
    },
    "Nurnberga": {
        year: "1050",
        population: "500,000",
        continent: "Europa",
        area: "138,000 km²",
        borders: "Polska, Czechy, Slovakia"
    },
    "Oman": {
        year: "1970",
        population: "5 milionów",
        continent: "Azja",
        area: "309 500 km²",
        borders: "Arabia Saudyjska, Zjednoczone Emiraty Arabskie, Jemen"
    },
    "Pakistan": {
        year: "1947",
        population: "227 milionów",
        continent: "Azja",
        area: "881 913 km²",
        borders: "Afganistan, Chiny, Indie, Iran"
    },
    "Panama": {
        year: "1903",
        population: "4 miliony",
        continent: "Ameryka Środkowa",
        area: "75 517 km²",
        borders: "Kostaryka, Kolumbia"
    },
    "Papua Nowa Gwinea": {
        year: "1975",
        population: "9 milionów",
        continent: "Oceania",
        area: "462 840 km²",
        borders: "Indonezja"
    },
    "Paragwaj": {
        year: "1811",
        population: "7 milionów",
        continent: "Ameryka Południowa",
        area: "406 752 km²",
        borders: "Argentyna, Brazylia, Boliwia"
    },
    "Peru": {
        year: "1821",
        population: "33 miliony",
        continent: "Ameryka Południowa",
        area: "1 285 216 km²",
        borders: "Ekwador, Kolumbia, Brazylia, Boliwia, Chile"
    },
    "Polska": {
        year: "966",
        population: "38 milionów",
        continent: "Europa",
        area: "312 696 km²",
        borders: "Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa, Rosja"
    },
    "Portugalia": {
        year: "1139",
        population: "10 milionów",
        continent: "Europa",
        area: "92 090 km²",
        borders: "Hiszpania"
    },
    "Ruanda": {
        year: "1962",
        population: "13 milionów",
        continent: "Afryka",
        area: "26 338 km²",
        borders: "Burundi, Demokratyczna Republika Konga, Uganda, Tanzania"
    },
    "Rumunia": {
        year: "1859",
        population: "19 milionów",
        continent: "Europa",
        area: "238 397 km²",
        borders: "Bułgaria, Węgry, Mołdawia, Ukraina, Serbia"
    },
    "Rosja": {
        year: "1991",
        population: "146 milionów",
        continent: "Europa, Azja",
        area: "17 098 242 km²",
        borders: "Azerbejdżan, Białoruś, Chiny, Estonia, Finlandia, Gruzja, Kazachstan, Korea Północna, Łotwa, Litwa, Mongolia, Norwegia, Polska, Ukraina"
    },
    "Rwanda": {
        year: "1962",
        population: "12 milionów",
        continent: "Afryka",
        area: "26 338 km²",
        borders: "Burundi, Tanzania, Uganda, Zaire"
    },
    "Samoa": {
        year: "1962",
        population: "200 000",
        continent: "Oceania",
        area: "2 944 km²",
        borders: "Brak granic lądowych"
    },
    "San Marino": {
        year: "301",
        population: "33 000",
        continent: "Europa",
        area: "61 km²",
        borders: "Włochy"
    },
    "Sao Tome i Principe": {
        year: "1975",
        population: "200 000",
        continent: "Afryka",
        area: "964 km²",
        borders: "Brak granic lądowych"
    },
	"Sao Tome i Principe": {
        year: "1975",
        population: "200 000",
        continent: "Afryka",
        area: "964 km²",
        borders: "Brak granic lądowych"
    },
    "Szwecja": {
        year: "1523",
        population: "10.5 miliona",
        continent: "Europa",
        area: "450 295 km²",
        borders: "Norwegia, Finlandia"
    },
    "Syria": {
        year: "1946",
        population: "17 milionów",
        continent: "Azja",
        area: "185 180 km²",
        borders: "Irak, Izrael, Jordania, Liban, Turcja"
    },
    "Słowacja": {
        year: "1993",
        population: "5.4 miliona",
        continent: "Europa",
        area: "49 035 km²",
        borders: "Austria, Czechy, Polska, Ukraina, Węgry"
    },
    "Słowenia": {
        year: "1991",
        population: "2 miliony",
        continent: "Europa",
        area: "20 273 km²",
        borders: "Austria, Chorwacja, Węgry, Włochy"
    },
    "Tadżykistan": {
        year: "1991",
        population: "9 milionów",
        continent: "Azja",
        area: "143 100 km²",
        borders: "Afganistan, Chiny, Kirgistan, Uzbekistan"
    },
    "Tajlandia": {
        year: "1238",
        population: "70 milionów",
        continent: "Azja",
        area: "513 120 km²",
        borders: "Laos, Kambodża, Malezja, Birma"
    },
    "Tanzania": {
        year: "1961",
        population: "61 milionów",
        continent: "Afryka",
        area: "945 087 km²",
        borders: "Burundi, Kenia, Malawi, Mozambik, Rwanda, Uganda, Zambia, Zambia"
    },
    "Timor Wschodni": {
        year: "2002",
        population: "1.3 miliona",
        continent: "Azja",
        area: "14 874 km²",
        borders: "Indonezja"
    },
    "Togo": {
        year: "1960",
        population: "8 milionów",
        continent: "Afryka",
        area: "56 785 km²",
        borders: "Ghana, Benin, Burkina Faso"
    },
    "Tonga": {
        year: "1970",
        population: "100 000",
        continent: "Oceania",
        area: "747 km²",
        borders: "Brak granic lądowych"
    },
    "Trynidad i Tobago": {
        year: "1962",
        population: "1.3 miliona",
        continent: "Ameryka Południowa",
        area: "5 128 km²",
        borders: "Brak granic lądowych"
    },
    "Tunezja": {
        year: "1956",
        population: "12 milionów",
        continent: "Afryka",
        area: "163 610 km²",
        borders: "Algieria, Libia"
    },
    "Turcja": {
        year: "1923",
        population: "83 miliony",
        continent: "Azja, Europa",
        area: "783 356 km²",
        borders: "Armenia, Azerbejdżan, Bułgaria, Gruzja, Iran, Irak, Syria"
    },
    "Turkmenistan": {
        year: "1991",
        population: "6 milionów",
        continent: "Azja",
        area: "491 210 km²",
        borders: "Kazachstan, Uzbekistan, Afganistan, Iran"
    },
    "Tuvalu": {
        year: "1978",
        population: "12 000",
        continent: "Oceania",
        area: "26 km²",
        borders: "Brak granic lądowych"
    },
    "Uganda": {
        year: "1962",
        population: "45 milionów",
        continent: "Afryka",
        area: "241 038 km²",
        borders: "Burundi, Demokratyczna Republika Konga, Kenia, Ruanda, Sudan Południowy, Tanzania"
    },
    "Urugwaj": {
        year: "1825",
        population: "3.5 miliona",
        continent: "Ameryka Południowa",
        area: "176 215 km²",
        borders: "Argentyna, Brazylia"
    },
    "Uzbekistan": {
        year: "1991",
        population: "34 miliony",
        continent: "Azja",
        area: "447 400 km²",
        borders: "Kazachstan, Kirgistan, Tadżykistan, Turkmenistan, Afganistan"
    },
    "Vanuatu": {
        year: "1980",
        population: "300 000",
        continent: "Oceania",
        area: "12 189 km²",
        borders: "Brak granic lądowych"
    },
    "Wenezuela": {
        year: "1811",
        population: "33 miliony",
        continent: "Ameryka Południowa",
        area: "916 445 km²",
        borders: "Kolumbia, Brazylia, Gujana"
    },
    "Wielka Brytania": {
        year: "1707",
        population: "67 milionów",
        continent: "Europa",
        area: "243 610 km²",
        borders: "Brak granic lądowych (wyspa)"
    },
    "Wietnam": {
        year: "1945",
        population: "97 milionów",
        continent: "Azja",
        area: "331 210 km²",
        borders: "Chiny, Laos, Kambodża"
    },
    "Włochy": {
        year: "1861",
        population: "60 milionów",
        continent: "Europa",
        area: "301 340 km²",
        borders: "Francja, Szwajcaria, Austria, Słowenia"
    },
    "Zambia": {
        year: "1964",
        population: "18 milionów",
        continent: "Afryka",
        area: "752 612 km²",
        borders: "Angola, Demokratyczna Republika Konga, Tanzania, Malawi, Mozambik, Zimbabwe, Botswana, Namibia"
    },
    "Zielony Przylądek": {
        year: "1975",
        population: "531 000",
        continent: "Afryka",
        area: "4 033 km²",
        borders: "Brak granic lądowych"
    },
    "Zimbabwe": {
        year: "1980",
        population: "15 milionów",
        continent: "Afryka",
        area: "390 757 km²",
        borders: "Zambia, Mozambik, RPA, Botswana"
    },
	

        };

let attempts = 5;
let currentHintIndex = 0;
let randomCountry;
let hints;
const countries = Object.keys(countriesData);

const hintContainer = document.getElementById('hint-container');
const feedback = document.getElementById('feedback');
const inputField = document.getElementById('word-input');
const restartButton = document.getElementById('restart-button');
const countryHint = document.getElementById('country-hint');

const updateHint = () => {
    hintContainer.textContent = hints[currentHintIndex];
};

const startGame = () => {
    randomCountry = countries[Math.floor(Math.random() * countries.length)];
    hints = [
        `Rok powstania: ${countriesData[randomCountry].year}`,
        `Liczba ludności: ${countriesData[randomCountry].population}`,
        `Kontynent: ${countriesData[randomCountry].continent}`,
        `Powierzchnia: ${countriesData[randomCountry].area}`,
        `Sąsiedzi: ${countriesData[randomCountry].borders}`
    ];
    attempts = 5;
    currentHintIndex = 0;
    feedback.textContent = '';
    updateHint();
    inputField.value = '';
    restartButton.style.display = 'none';
    countryHint.textContent = "_".repeat(randomCountry.length);  // Create a hint with underscores for each letter
};

const checkGuess = () => {
    const guess = inputField.value.trim();
    if (!guess) {
        feedback.textContent = 'Wpisz nazwę kraju!';
        feedback.style.color = 'orange';
        return;
    }

    if (guess === randomCountry) {
        feedback.textContent = `Brawo! Odgadłeś kraj: ${randomCountry}.`;
        feedback.style.color = 'green';
        restartButton.style.display = 'inline-block';
        return;
    }

    attempts--;
    currentHintIndex++;

    // Add a letter to the hint on each incorrect guess
    if (currentHintIndex <= randomCountry.length) {
        countryHint.textContent = randomCountry.slice(0, currentHintIndex) + "_".repeat(randomCountry.length - currentHintIndex);
    }

    if (attempts > 0) {
        feedback.textContent = `Niepoprawne. Pozostało prób: ${attempts}.`;
        feedback.style.color = 'red';
        if (currentHintIndex < hints.length) {
            updateHint();
        }
    } else {
        feedback.textContent = `Koniec prób! Szukany kraj to: ${randomCountry}.`;
        feedback.style.color = 'red';
        restartButton.style.display = 'inline-block';
    }

    inputField.value = '';
};

document.getElementById('submit-button').addEventListener('click', checkGuess);

// Obsługa Entera
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

restartButton.addEventListener('click', startGame);

// Start the game when the page loads
startGame();


// Firebase configuration (zastąp swoimi danymi z konsoli Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyDdrwDwaw48w1BQVf17u_SEW6kJMdHxoyY", 
  authDomain: "globeguess-42dcc.firebaseapp.com",
  projectId: "globeguess-42dcc",
  storageBucket: "globeguess-42dcc.firebasestorage.app",
  messagingSenderId: "494943387602",
  appId: "1:494943387602:web:37a76e7720d86cadb5920b",
  measurementId: "G-D79VNBEQ41"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

// Zmienne formularzy
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Funkcja rejestracji użytkownika
document.getElementById('register-button').addEventListener('click', () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Zarejestrowano: ', user.email);
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        })
        .catch((error) => {
            console.error('Błąd rejestracji: ', error.message);
        });
});

// Funkcja logowania użytkownika
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Zalogowano: ', user.email);
            startGame();  // Uruchamiamy grę po udanym logowaniu
        })
        .catch((error) => {
            console.error('Błąd logowania: ', error.message);
        });
});

// Pokazanie formularza rejestracji
document.getElementById('show-register').addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Pokazanie formularza logowania
document.getElementById('show-login').addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

// Funkcja logowania po załadowaniu strony (jeśli użytkownik jest już zalogowany)
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Użytkownik zalogowany: ', user.email);
        startGame();  // Uruchamiamy grę po zalogowaniu
    } else {
        console.log('Brak zalogowanego użytkownika');
    }
});

const saveUserData = (userId, correctAnswers) => {
    firestore.collection('users').doc(userId).set({
        correctAnswers: correctAnswers
    }, { merge: true }); // merge: true umożliwia dodanie nowych danych bez nadpisywania całego dokumentu
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const userId = user.uid;
        console.log(`Zalogowano użytkownika: ${userId}`);
        // Możesz tutaj załadować dane użytkownika z Firestore, np. jego statystyki
    } else {
        console.log("Brak zalogowanego użytkownika");
    }
});

// Przykład zapisania poprawnych odpowiedzi po zakończeniu gry
if (userId) {
    saveUserData(userId, correctAnswers); // Tutaj 'correctAnswers' to zmienna z liczbą poprawnych odpowiedzi
}
const checkGuess = () => {
    const guess = inputField.value.trim();
    if (!guess) {
        feedback.textContent = 'Wpisz nazwę kraju!';
        feedback.style.color = 'orange';
        return;
    }

    if (guess === randomCountry) {
        feedback.textContent = `Brawo! Odgadłeś kraj: ${randomCountry}.`;
        feedback.style.color = 'green';

        // Zapisz dane użytkownika, gdy odgadnie kraj
        const userId = firebase.auth().currentUser ? firebase.auth().currentUser.uid : null;
        if (userId) {
            saveUserData(userId, correctAnswers); // Przykładowa liczba poprawnych odpowiedzi
        }

        restartButton.style.display = 'inline-block';
        return;
    }

    attempts--;
    currentHintIndex++;

    // Dodaj literę do wskazówki przy każdej niepoprawnej odpowiedzi
    if (currentHintIndex <= randomCountry.length) {
        countryHint.textContent = randomCountry.slice(0, currentHintIndex) + "_".repeat(randomCountry.length - currentHintIndex);
    }

    if (attempts > 0) {
        feedback.textContent = `Niepoprawne. Pozostało prób: ${attempts}.`;
        feedback.style.color = 'red';
        if (currentHintIndex < hints.length) {
            updateHint();
        }
    } else {
        feedback.textContent = `Koniec prób! Szukany kraj to: ${randomCountry}.`;
        feedback.style.color = 'red';
        restartButton.style.display = 'inline-block';
    }

    inputField.value = '';
};
