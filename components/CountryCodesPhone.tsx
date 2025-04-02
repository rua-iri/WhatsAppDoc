import { Picker } from "@react-native-picker/picker";
import { Text } from "react-native";

export function CountryCodesPhone() {
  const codes = [
    {
      name: "Afghanistan",
      dial_code: "+93",
      code: "AF",
    },
    {
      name: "Aland Islands",
      dial_code: "+358",
      code: "AX",
    },
    {
      name: "Albania",
      dial_code: "+355",
      code: "AL",
    },
    {
      name: "Algeria",
      dial_code: "+213",
      code: "DZ",
    },
    {
      name: "AmericanSamoa",
      dial_code: "+1684",
      code: "AS",
    },
    {
      name: "Andorra",
      dial_code: "+376",
      code: "AD",
    },
    {
      name: "Angola",
      dial_code: "+244",
      code: "AO",
    },
    {
      name: "Anguilla",
      dial_code: "+1264",
      code: "AI",
    },
    {
      name: "Antarctica",
      dial_code: "+672",
      code: "AQ",
    },
    {
      name: "Antigua and Barbuda",
      dial_code: "+1268",
      code: "AG",
    },
    {
      name: "Argentina",
      dial_code: "+54",
      code: "AR",
    },
    {
      name: "Armenia",
      dial_code: "+374",
      code: "AM",
    },
    {
      name: "Aruba",
      dial_code: "+297",
      code: "AW",
    },
    {
      name: "Australia",
      dial_code: "+61",
      code: "AU",
    },
    {
      name: "Austria",
      dial_code: "+43",
      code: "AT",
    },
    {
      name: "Azerbaijan",
      dial_code: "+994",
      code: "AZ",
    },
    {
      name: "Bahamas",
      dial_code: "+1242",
      code: "BS",
    },
    {
      name: "Bahrain",
      dial_code: "+973",
      code: "BH",
    },
    {
      name: "Bangladesh",
      dial_code: "+880",
      code: "BD",
    },
    {
      name: "Barbados",
      dial_code: "+1246",
      code: "BB",
    },
    {
      name: "Belarus",
      dial_code: "+375",
      code: "BY",
    },
    {
      name: "Belgium",
      dial_code: "+32",
      code: "BE",
    },
    {
      name: "Belize",
      dial_code: "+501",
      code: "BZ",
    },
    {
      name: "Benin",
      dial_code: "+229",
      code: "BJ",
    },
    {
      name: "Bermuda",
      dial_code: "+1441",
      code: "BM",
    },
    {
      name: "Bhutan",
      dial_code: "+975",
      code: "BT",
    },
    {
      name: "Bolivia, Plurinational State of",
      dial_code: "+591",
      code: "BO",
    },
    {
      name: "Bosnia and Herzegovina",
      dial_code: "+387",
      code: "BA",
    },
    {
      name: "Botswana",
      dial_code: "+267",
      code: "BW",
    },
    {
      name: "Brazil",
      dial_code: "+55",
      code: "BR",
    },
    {
      name: "British Indian Ocean Territory",
      dial_code: "+246",
      code: "IO",
    },
    {
      name: "Brunei Darussalam",
      dial_code: "+673",
      code: "BN",
    },
    {
      name: "Bulgaria",
      dial_code: "+359",
      code: "BG",
    },
    {
      name: "Burkina Faso",
      dial_code: "+226",
      code: "BF",
    },
    {
      name: "Burundi",
      dial_code: "+257",
      code: "BI",
    },
    {
      name: "Cambodia",
      dial_code: "+855",
      code: "KH",
    },
    {
      name: "Cameroon",
      dial_code: "+237",
      code: "CM",
    },
    {
      name: "Canada",
      dial_code: "+1",
      code: "CA",
    },
    {
      name: "Cape Verde",
      dial_code: "+238",
      code: "CV",
    },
    {
      name: "Cayman Islands",
      dial_code: "+ 345",
      code: "KY",
    },
    {
      name: "Central African Republic",
      dial_code: "+236",
      code: "CF",
    },
    {
      name: "Chad",
      dial_code: "+235",
      code: "TD",
    },
    {
      name: "Chile",
      dial_code: "+56",
      code: "CL",
    },
    {
      name: "China",
      dial_code: "+86",
      code: "CN",
    },
    {
      name: "Christmas Island",
      dial_code: "+61",
      code: "CX",
    },
    {
      name: "Cocos (Keeling) Islands",
      dial_code: "+61",
      code: "CC",
    },
    {
      name: "Colombia",
      dial_code: "+57",
      code: "CO",
    },
    {
      name: "Comoros",
      dial_code: "+269",
      code: "KM",
    },
    {
      name: "Congo",
      dial_code: "+242",
      code: "CG",
    },
    {
      name: "Congo, The Democratic Republic of the Congo",
      dial_code: "+243",
      code: "CD",
    },
    {
      name: "Cook Islands",
      dial_code: "+682",
      code: "CK",
    },
    {
      name: "Costa Rica",
      dial_code: "+506",
      code: "CR",
    },
    {
      name: "Cote d'Ivoire",
      dial_code: "+225",
      code: "CI",
    },
    {
      name: "Croatia",
      dial_code: "+385",
      code: "HR",
    },
    {
      name: "Cuba",
      dial_code: "+53",
      code: "CU",
    },
    {
      name: "Cyprus",
      dial_code: "+357",
      code: "CY",
    },
    {
      name: "Czech Republic",
      dial_code: "+420",
      code: "CZ",
    },
    {
      name: "Denmark",
      dial_code: "+45",
      code: "DK",
    },
    {
      name: "Djibouti",
      dial_code: "+253",
      code: "DJ",
    },
    {
      name: "Dominica",
      dial_code: "+1767",
      code: "DM",
    },
    {
      name: "Dominican Republic",
      dial_code: "+1849",
      code: "DO",
    },
    {
      name: "Ecuador",
      dial_code: "+593",
      code: "EC",
    },
    {
      name: "Egypt",
      dial_code: "+20",
      code: "EG",
    },
    {
      name: "El Salvador",
      dial_code: "+503",
      code: "SV",
    },
    {
      name: "Equatorial Guinea",
      dial_code: "+240",
      code: "GQ",
    },
    {
      name: "Eritrea",
      dial_code: "+291",
      code: "ER",
    },
    {
      name: "Estonia",
      dial_code: "+372",
      code: "EE",
    },
    {
      name: "Ethiopia",
      dial_code: "+251",
      code: "ET",
    },
    {
      name: "Falkland Islands (Malvinas)",
      dial_code: "+500",
      code: "FK",
    },
    {
      name: "Faroe Islands",
      dial_code: "+298",
      code: "FO",
    },
    {
      name: "Fiji",
      dial_code: "+679",
      code: "FJ",
    },
    {
      name: "Finland",
      dial_code: "+358",
      code: "FI",
    },
    {
      name: "France",
      dial_code: "+33",
      code: "FR",
    },
    {
      name: "French Guiana",
      dial_code: "+594",
      code: "GF",
    },
    {
      name: "French Polynesia",
      dial_code: "+689",
      code: "PF",
    },
    {
      name: "Gabon",
      dial_code: "+241",
      code: "GA",
    },
    {
      name: "Gambia",
      dial_code: "+220",
      code: "GM",
    },
    {
      name: "Georgia",
      dial_code: "+995",
      code: "GE",
    },
    {
      name: "Germany",
      dial_code: "+49",
      code: "DE",
    },
    {
      name: "Ghana",
      dial_code: "+233",
      code: "GH",
    },
    {
      name: "Gibraltar",
      dial_code: "+350",
      code: "GI",
    },
    {
      name: "Greece",
      dial_code: "+30",
      code: "GR",
    },
    {
      name: "Greenland",
      dial_code: "+299",
      code: "GL",
    },
    {
      name: "Grenada",
      dial_code: "+1473",
      code: "GD",
    },
    {
      name: "Guadeloupe",
      dial_code: "+590",
      code: "GP",
    },
    {
      name: "Guam",
      dial_code: "+1671",
      code: "GU",
    },
    {
      name: "Guatemala",
      dial_code: "+502",
      code: "GT",
    },
    {
      name: "Guernsey",
      dial_code: "+44",
      code: "GG",
    },
    {
      name: "Guinea",
      dial_code: "+224",
      code: "GN",
    },
    {
      name: "Guinea-Bissau",
      dial_code: "+245",
      code: "GW",
    },
    {
      name: "Guyana",
      dial_code: "+595",
      code: "GY",
    },
    {
      name: "Haiti",
      dial_code: "+509",
      code: "HT",
    },
    {
      name: "Holy See (Vatican City State)",
      dial_code: "+379",
      code: "VA",
    },
    {
      name: "Honduras",
      dial_code: "+504",
      code: "HN",
    },
    {
      name: "Hong Kong",
      dial_code: "+852",
      code: "HK",
    },
    {
      name: "Hungary",
      dial_code: "+36",
      code: "HU",
    },
    {
      name: "Iceland",
      dial_code: "+354",
      code: "IS",
    },
    {
      name: "India",
      dial_code: "+91",
      code: "IN",
    },
    {
      name: "Indonesia",
      dial_code: "+62",
      code: "ID",
    },
    {
      name: "Iran, Islamic Republic of Persian Gulf",
      dial_code: "+98",
      code: "IR",
    },
    {
      name: "Iraq",
      dial_code: "+964",
      code: "IQ",
    },
    {
      name: "Ireland",
      dial_code: "+353",
      code: "IE",
    },
    {
      name: "Isle of Man",
      dial_code: "+44",
      code: "IM",
    },
    {
      name: "Israel",
      dial_code: "+972",
      code: "IL",
    },
    {
      name: "Italy",
      dial_code: "+39",
      code: "IT",
    },
    {
      name: "Jamaica",
      dial_code: "+1876",
      code: "JM",
    },
    {
      name: "Japan",
      dial_code: "+81",
      code: "JP",
    },
    {
      name: "Jersey",
      dial_code: "+44",
      code: "JE",
    },
    {
      name: "Jordan",
      dial_code: "+962",
      code: "JO",
    },
    {
      name: "Kazakhstan",
      dial_code: "+77",
      code: "KZ",
    },
    {
      name: "Kenya",
      dial_code: "+254",
      code: "KE",
    },
    {
      name: "Kiribati",
      dial_code: "+686",
      code: "KI",
    },
    {
      name: "Korea, Democratic People's Republic of Korea",
      dial_code: "+850",
      code: "KP",
    },
    {
      name: "Korea, Republic of South Korea",
      dial_code: "+82",
      code: "KR",
    },
    {
      name: "Kuwait",
      dial_code: "+965",
      code: "KW",
    },
    {
      name: "Kyrgyzstan",
      dial_code: "+996",
      code: "KG",
    },
    {
      name: "Laos",
      dial_code: "+856",
      code: "LA",
    },
    {
      name: "Latvia",
      dial_code: "+371",
      code: "LV",
    },
    {
      name: "Lebanon",
      dial_code: "+961",
      code: "LB",
    },
    {
      name: "Lesotho",
      dial_code: "+266",
      code: "LS",
    },
    {
      name: "Liberia",
      dial_code: "+231",
      code: "LR",
    },
    {
      name: "Libyan Arab Jamahiriya",
      dial_code: "+218",
      code: "LY",
    },
    {
      name: "Liechtenstein",
      dial_code: "+423",
      code: "LI",
    },
    {
      name: "Lithuania",
      dial_code: "+370",
      code: "LT",
    },
    {
      name: "Luxembourg",
      dial_code: "+352",
      code: "LU",
    },
    {
      name: "Macao",
      dial_code: "+853",
      code: "MO",
    },
    {
      name: "Macedonia",
      dial_code: "+389",
      code: "MK",
    },
    {
      name: "Madagascar",
      dial_code: "+261",
      code: "MG",
    },
    {
      name: "Malawi",
      dial_code: "+265",
      code: "MW",
    },
    {
      name: "Malaysia",
      dial_code: "+60",
      code: "MY",
    },
    {
      name: "Maldives",
      dial_code: "+960",
      code: "MV",
    },
    {
      name: "Mali",
      dial_code: "+223",
      code: "ML",
    },
    {
      name: "Malta",
      dial_code: "+356",
      code: "MT",
    },
    {
      name: "Marshall Islands",
      dial_code: "+692",
      code: "MH",
    },
    {
      name: "Martinique",
      dial_code: "+596",
      code: "MQ",
    },
    {
      name: "Mauritania",
      dial_code: "+222",
      code: "MR",
    },
    {
      name: "Mauritius",
      dial_code: "+230",
      code: "MU",
    },
    {
      name: "Mayotte",
      dial_code: "+262",
      code: "YT",
    },
    {
      name: "Mexico",
      dial_code: "+52",
      code: "MX",
    },
    {
      name: "Micronesia, Federated States of Micronesia",
      dial_code: "+691",
      code: "FM",
    },
    {
      name: "Moldova",
      dial_code: "+373",
      code: "MD",
    },
    {
      name: "Monaco",
      dial_code: "+377",
      code: "MC",
    },
    {
      name: "Mongolia",
      dial_code: "+976",
      code: "MN",
    },
    {
      name: "Montenegro",
      dial_code: "+382",
      code: "ME",
    },
    {
      name: "Montserrat",
      dial_code: "+1664",
      code: "MS",
    },
    {
      name: "Morocco",
      dial_code: "+212",
      code: "MA",
    },
    {
      name: "Mozambique",
      dial_code: "+258",
      code: "MZ",
    },
    {
      name: "Myanmar",
      dial_code: "+95",
      code: "MM",
    },
    {
      name: "Namibia",
      dial_code: "+264",
      code: "NA",
    },
    {
      name: "Nauru",
      dial_code: "+674",
      code: "NR",
    },
    {
      name: "Nepal",
      dial_code: "+977",
      code: "NP",
    },
    {
      name: "Netherlands",
      dial_code: "+31",
      code: "NL",
    },
    {
      name: "Netherlands Antilles",
      dial_code: "+599",
      code: "AN",
    },
    {
      name: "New Caledonia",
      dial_code: "+687",
      code: "NC",
    },
    {
      name: "New Zealand",
      dial_code: "+64",
      code: "NZ",
    },
    {
      name: "Nicaragua",
      dial_code: "+505",
      code: "NI",
    },
    {
      name: "Niger",
      dial_code: "+227",
      code: "NE",
    },
    {
      name: "Nigeria",
      dial_code: "+234",
      code: "NG",
    },
    {
      name: "Niue",
      dial_code: "+683",
      code: "NU",
    },
    {
      name: "Norfolk Island",
      dial_code: "+672",
      code: "NF",
    },
    {
      name: "Northern Mariana Islands",
      dial_code: "+1670",
      code: "MP",
    },
    {
      name: "Norway",
      dial_code: "+47",
      code: "NO",
    },
    {
      name: "Oman",
      dial_code: "+968",
      code: "OM",
    },
    {
      name: "Pakistan",
      dial_code: "+92",
      code: "PK",
    },
    {
      name: "Palau",
      dial_code: "+680",
      code: "PW",
    },
    {
      name: "Palestinian Territory, Occupied",
      dial_code: "+970",
      code: "PS",
    },
    {
      name: "Panama",
      dial_code: "+507",
      code: "PA",
    },
    {
      name: "Papua New Guinea",
      dial_code: "+675",
      code: "PG",
    },
    {
      name: "Paraguay",
      dial_code: "+595",
      code: "PY",
    },
    {
      name: "Peru",
      dial_code: "+51",
      code: "PE",
    },
    {
      name: "Philippines",
      dial_code: "+63",
      code: "PH",
    },
    {
      name: "Pitcairn",
      dial_code: "+872",
      code: "PN",
    },
    {
      name: "Poland",
      dial_code: "+48",
      code: "PL",
    },
    {
      name: "Portugal",
      dial_code: "+351",
      code: "PT",
    },
    {
      name: "Puerto Rico",
      dial_code: "+1939",
      code: "PR",
    },
    {
      name: "Qatar",
      dial_code: "+974",
      code: "QA",
    },
    {
      name: "Romania",
      dial_code: "+40",
      code: "RO",
    },
    {
      name: "Russia",
      dial_code: "+7",
      code: "RU",
    },
    {
      name: "Rwanda",
      dial_code: "+250",
      code: "RW",
    },
    {
      name: "Reunion",
      dial_code: "+262",
      code: "RE",
    },
    {
      name: "Saint Barthelemy",
      dial_code: "+590",
      code: "BL",
    },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      dial_code: "+290",
      code: "SH",
    },
    {
      name: "Saint Kitts and Nevis",
      dial_code: "+1869",
      code: "KN",
    },
    {
      name: "Saint Lucia",
      dial_code: "+1758",
      code: "LC",
    },
    {
      name: "Saint Martin",
      dial_code: "+590",
      code: "MF",
    },
    {
      name: "Saint Pierre and Miquelon",
      dial_code: "+508",
      code: "PM",
    },
    {
      name: "Saint Vincent and the Grenadines",
      dial_code: "+1784",
      code: "VC",
    },
    {
      name: "Samoa",
      dial_code: "+685",
      code: "WS",
    },
    {
      name: "San Marino",
      dial_code: "+378",
      code: "SM",
    },
    {
      name: "Sao Tome and Principe",
      dial_code: "+239",
      code: "ST",
    },
    {
      name: "Saudi Arabia",
      dial_code: "+966",
      code: "SA",
    },
    {
      name: "Senegal",
      dial_code: "+221",
      code: "SN",
    },
    {
      name: "Serbia",
      dial_code: "+381",
      code: "RS",
    },
    {
      name: "Seychelles",
      dial_code: "+248",
      code: "SC",
    },
    {
      name: "Sierra Leone",
      dial_code: "+232",
      code: "SL",
    },
    {
      name: "Singapore",
      dial_code: "+65",
      code: "SG",
    },
    {
      name: "Slovakia",
      dial_code: "+421",
      code: "SK",
    },
    {
      name: "Slovenia",
      dial_code: "+386",
      code: "SI",
    },
    {
      name: "Solomon Islands",
      dial_code: "+677",
      code: "SB",
    },
    {
      name: "Somalia",
      dial_code: "+252",
      code: "SO",
    },
    {
      name: "South Africa",
      dial_code: "+27",
      code: "ZA",
    },
    {
      name: "South Sudan",
      dial_code: "+211",
      code: "SS",
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      dial_code: "+500",
      code: "GS",
    },
    {
      name: "Spain",
      dial_code: "+34",
      code: "ES",
    },
    {
      name: "Sri Lanka",
      dial_code: "+94",
      code: "LK",
    },
    {
      name: "Sudan",
      dial_code: "+249",
      code: "SD",
    },
    {
      name: "Suriname",
      dial_code: "+597",
      code: "SR",
    },
    {
      name: "Svalbard and Jan Mayen",
      dial_code: "+47",
      code: "SJ",
    },
    {
      name: "Swaziland",
      dial_code: "+268",
      code: "SZ",
    },
    {
      name: "Sweden",
      dial_code: "+46",
      code: "SE",
    },
    {
      name: "Switzerland",
      dial_code: "+41",
      code: "CH",
    },
    {
      name: "Syrian Arab Republic",
      dial_code: "+963",
      code: "SY",
    },
    {
      name: "Taiwan",
      dial_code: "+886",
      code: "TW",
    },
    {
      name: "Tajikistan",
      dial_code: "+992",
      code: "TJ",
    },
    {
      name: "Tanzania, United Republic of Tanzania",
      dial_code: "+255",
      code: "TZ",
    },
    {
      name: "Thailand",
      dial_code: "+66",
      code: "TH",
    },
    {
      name: "Timor-Leste",
      dial_code: "+670",
      code: "TL",
    },
    {
      name: "Togo",
      dial_code: "+228",
      code: "TG",
    },
    {
      name: "Tokelau",
      dial_code: "+690",
      code: "TK",
    },
    {
      name: "Tonga",
      dial_code: "+676",
      code: "TO",
    },
    {
      name: "Trinidad and Tobago",
      dial_code: "+1868",
      code: "TT",
    },
    {
      name: "Tunisia",
      dial_code: "+216",
      code: "TN",
    },
    {
      name: "Turkey",
      dial_code: "+90",
      code: "TR",
    },
    {
      name: "Turkmenistan",
      dial_code: "+993",
      code: "TM",
    },
    {
      name: "Turks and Caicos Islands",
      dial_code: "+1649",
      code: "TC",
    },
    {
      name: "Tuvalu",
      dial_code: "+688",
      code: "TV",
    },
    {
      name: "Uganda",
      dial_code: "+256",
      code: "UG",
    },
    {
      name: "Ukraine",
      dial_code: "+380",
      code: "UA",
    },
    {
      name: "United Arab Emirates",
      dial_code: "+971",
      code: "AE",
    },
    {
      name: "United Kingdom",
      dial_code: "+44",
      code: "GB",
    },
    {
      name: "United States",
      dial_code: "+1",
      code: "US",
    },
    {
      name: "Uruguay",
      dial_code: "+598",
      code: "UY",
    },
    {
      name: "Uzbekistan",
      dial_code: "+998",
      code: "UZ",
    },
    {
      name: "Vanuatu",
      dial_code: "+678",
      code: "VU",
    },
    {
      name: "Venezuela, Bolivarian Republic of Venezuela",
      dial_code: "+58",
      code: "VE",
    },
    {
      name: "Vietnam",
      dial_code: "+84",
      code: "VN",
    },
    {
      name: "Virgin Islands, British",
      dial_code: "+1284",
      code: "VG",
    },
    {
      name: "Virgin Islands, U.S.",
      dial_code: "+1340",
      code: "VI",
    },
    {
      name: "Wallis and Futuna",
      dial_code: "+681",
      code: "WF",
    },
    {
      name: "Yemen",
      dial_code: "+967",
      code: "YE",
    },
    {
      name: "Zambia",
      dial_code: "+260",
      code: "ZM",
    },
    {
      name: "Zimbabwe",
      dial_code: "+263",
      code: "ZW",
    },
  ];


  return (
    <>
      <Picker.Item label="Afghanistan (+93)" value="+93" />
      <Picker.Item label="Aland Islands (+358)" value="+358" />
      <Picker.Item label="Albania (+355)" value="+355" />
      <Picker.Item label="Algeria (+213)" value="+213" />
      <Picker.Item label="AmericanSamoa (+1684)" value="+1684" />
      <Picker.Item label="Andorra (+376)" value="+376" />
      <Picker.Item label="Angola (+244)" value="+244" />
      <Picker.Item label="Anguilla (+1264)" value="+1264" />
      <Picker.Item label="Antarctica (+672)" value="+672" />
      <Picker.Item label="Antigua and Barbuda (+1268)" value="+1268" />
      <Picker.Item label="Argentina (+54)" value="+54" />
      <Picker.Item label="Armenia (+374)" value="+374" />
      <Picker.Item label="Aruba (+297)" value="+297" />
      <Picker.Item label="Australia (+61)" value="+61" />
      <Picker.Item label="Austria (+43)" value="+43" />
      <Picker.Item label="Azerbaijan (+994)" value="+994" />
      <Picker.Item label="Bahamas (+1242)" value="+1242" />
      <Picker.Item label="Bahrain (+973)" value="+973" />
      <Picker.Item label="Bangladesh (+880)" value="+880" />
      <Picker.Item label="Barbados (+1246)" value="+1246" />
      <Picker.Item label="Belarus (+375)" value="+375" />
      <Picker.Item label="Belgium (+32)" value="+32" />
      <Picker.Item label="Belize (+501)" value="+501" />
      <Picker.Item label="Benin (+229)" value="+229" />
      <Picker.Item label="Bermuda (+1441)" value="+1441" />
      <Picker.Item label="Bhutan (+975)" value="+975" />
      <Picker.Item
        label="Bolivia, Plurinational State of (+591)"
        value="+591"
      />
      <Picker.Item label="Bosnia and Herzegovina (+387)" value="+387" />
      <Picker.Item label="Botswana (+267)" value="+267" />
      <Picker.Item label="Brazil (+55)" value="+55" />
      <Picker.Item label="British Indian Ocean Territory (+246)" value="+246" />
      <Picker.Item label="Brunei Darussalam (+673)" value="+673" />
      <Picker.Item label="Bulgaria (+359)" value="+359" />
      <Picker.Item label="Burkina Faso (+226)" value="+226" />
      <Picker.Item label="Burundi (+257)" value="+257" />
      <Picker.Item label="Cambodia (+855)" value="+855" />
      <Picker.Item label="Cameroon (+237)" value="+237" />
      <Picker.Item label="Canada (+1)" value="+1" />
      <Picker.Item label="Cape Verde (+238)" value="+238" />
      <Picker.Item label="Cayman Islands (+ 345)" value="+ 345" />
      <Picker.Item label="Central African Republic (+236)" value="+236" />
      <Picker.Item label="Chad (+235)" value="+235" />
      <Picker.Item label="Chile (+56)" value="+56" />
      <Picker.Item label="China (+86)" value="+86" />
      <Picker.Item label="Christmas Island (+61)" value="+61" />
      <Picker.Item label="Cocos (Keeling) Islands (+61)" value="+61" />
      <Picker.Item label="Colombia (+57)" value="+57" />
      <Picker.Item label="Comoros (+269)" value="+269" />
      <Picker.Item label="Congo (+242)" value="+242" />
      <Picker.Item
        label="Congo, The Democratic Republic of the Congo (+243)"
        value="+243"
      />
      <Picker.Item label="Cook Islands (+682)" value="+682" />
      <Picker.Item label="Costa Rica (+506)" value="+506" />
      <Picker.Item label="Cote dIvoire (+225)" value="+225" />
      <Picker.Item label="Croatia (+385)" value="+385" />
      <Picker.Item label="Cuba (+53)" value="+53" />
      <Picker.Item label="Cyprus (+357)" value="+357" />
      <Picker.Item label="Czech Republic (+420)" value="+420" />
      <Picker.Item label="Denmark (+45)" value="+45" />
      <Picker.Item label="Djibouti (+253)" value="+253" />
      <Picker.Item label="Dominica (+1767)" value="+1767" />
      <Picker.Item label="Dominican Republic (+1849)" value="+1849" />
      <Picker.Item label="Ecuador (+593)" value="+593" />
      <Picker.Item label="Egypt (+20)" value="+20" />
      <Picker.Item label="El Salvador (+503)" value="+503" />
      <Picker.Item label="Equatorial Guinea (+240)" value="+240" />
      <Picker.Item label="Eritrea (+291)" value="+291" />
      <Picker.Item label="Estonia (+372)" value="+372" />
      <Picker.Item label="Ethiopia (+251)" value="+251" />
      <Picker.Item label="Falkland Islands (Malvinas) (+500)" value="+500" />
      <Picker.Item label="Faroe Islands (+298)" value="+298" />
      <Picker.Item label="Fiji (+679)" value="+679" />
      <Picker.Item label="Finland (+358)" value="+358" />
      <Picker.Item label="France (+33)" value="+33" />
      <Picker.Item label="French Guiana (+594)" value="+594" />
      <Picker.Item label="French Polynesia (+689)" value="+689" />
      <Picker.Item label="Gabon (+241)" value="+241" />
      <Picker.Item label="Gambia (+220)" value="+220" />
      <Picker.Item label="Georgia (+995)" value="+995" />
      <Picker.Item label="Germany (+49)" value="+49" />
      <Picker.Item label="Ghana (+233)" value="+233" />
      <Picker.Item label="Gibraltar (+350)" value="+350" />
      <Picker.Item label="Greece (+30)" value="+30" />
      <Picker.Item label="Greenland (+299)" value="+299" />
      <Picker.Item label="Grenada (+1473)" value="+1473" />
      <Picker.Item label="Guadeloupe (+590)" value="+590" />
      <Picker.Item label="Guam (+1671)" value="+1671" />
      <Picker.Item label="Guatemala (+502)" value="+502" />
      <Picker.Item label="Guernsey (+44)" value="+44" />
      <Picker.Item label="Guinea (+224)" value="+224" />
      <Picker.Item label="Guinea-Bissau (+245)" value="+245" />
      <Picker.Item label="Guyana (+595)" value="+595" />
      <Picker.Item label="Haiti (+509)" value="+509" />
      <Picker.Item label="Holy See (Vatican City State) (+379)" value="+379" />
      <Picker.Item label="Honduras (+504)" value="+504" />
      <Picker.Item label="Hong Kong (+852)" value="+852" />
      <Picker.Item label="Hungary (+36)" value="+36" />
      <Picker.Item label="Iceland (+354)" value="+354" />
      <Picker.Item label="India (+91)" value="+91" />
      <Picker.Item label="Indonesia (+62)" value="+62" />
      <Picker.Item
        label="Iran, Islamic Republic of Persian Gulf (+98)"
        value="+98"
      />
      <Picker.Item label="Iraq (+964)" value="+964" />
      <Picker.Item label="Ireland (+353)" value="+353" />
      <Picker.Item label="Isle of Man (+44)" value="+44" />
      <Picker.Item label="Israel (+972)" value="+972" />
      <Picker.Item label="Italy (+39)" value="+39" />
      <Picker.Item label="Jamaica (+1876)" value="+1876" />
      <Picker.Item label="Japan (+81)" value="+81" />
      <Picker.Item label="Jersey (+44)" value="+44" />
      <Picker.Item label="Jordan (+962)" value="+962" />
      <Picker.Item label="Kazakhstan (+77)" value="+77" />
      <Picker.Item label="Kenya (+254)" value="+254" />
      <Picker.Item label="Kiribati (+686)" value="+686" />
      <Picker.Item
        label="Korea, Democratic Peoples Republic of Korea (+850)"
        value="+850"
      />
      <Picker.Item label="Korea, Republic of South Korea (+82)" value="+82" />
      <Picker.Item label="Kuwait (+965)" value="+965" />
      <Picker.Item label="Kyrgyzstan (+996)" value="+996" />
      <Picker.Item label="Laos (+856)" value="+856" />
      <Picker.Item label="Latvia (+371)" value="+371" />
      <Picker.Item label="Lebanon (+961)" value="+961" />
      <Picker.Item label="Lesotho (+266)" value="+266" />
      <Picker.Item label="Liberia (+231)" value="+231" />
      <Picker.Item label="Libyan Arab Jamahiriya (+218)" value="+218" />
      <Picker.Item label="Liechtenstein (+423)" value="+423" />
      <Picker.Item label="Lithuania (+370)" value="+370" />
      <Picker.Item label="Luxembourg (+352)" value="+352" />
      <Picker.Item label="Macao (+853)" value="+853" />
      <Picker.Item label="Macedonia (+389)" value="+389" />
      <Picker.Item label="Madagascar (+261)" value="+261" />
      <Picker.Item label="Malawi (+265)" value="+265" />
      <Picker.Item label="Malaysia (+60)" value="+60" />
      <Picker.Item label="Maldives (+960)" value="+960" />
      <Picker.Item label="Mali (+223)" value="+223" />
      <Picker.Item label="Malta (+356)" value="+356" />
      <Picker.Item label="Marshall Islands (+692)" value="+692" />
      <Picker.Item label="Martinique (+596)" value="+596" />
      <Picker.Item label="Mauritania (+222)" value="+222" />
      <Picker.Item label="Mauritius (+230)" value="+230" />
      <Picker.Item label="Mayotte (+262)" value="+262" />
      <Picker.Item label="Mexico (+52)" value="+52" />
      <Picker.Item
        label="Micronesia, Federated States of Micronesia (+691)"
        value="+691"
      />
      <Picker.Item label="Moldova (+373)" value="+373" />
      <Picker.Item label="Monaco (+377)" value="+377" />
      <Picker.Item label="Mongolia (+976)" value="+976" />
      <Picker.Item label="Montenegro (+382)" value="+382" />
      <Picker.Item label="Montserrat (+1664)" value="+1664" />
      <Picker.Item label="Morocco (+212)" value="+212" />
      <Picker.Item label="Mozambique (+258)" value="+258" />
      <Picker.Item label="Myanmar (+95)" value="+95" />
      <Picker.Item label="Namibia (+264)" value="+264" />
      <Picker.Item label="Nauru (+674)" value="+674" />
      <Picker.Item label="Nepal (+977)" value="+977" />
      <Picker.Item label="Netherlands (+31)" value="+31" />
      <Picker.Item label="Netherlands Antilles (+599)" value="+599" />
      <Picker.Item label="New Caledonia (+687)" value="+687" />
      <Picker.Item label="New Zealand (+64)" value="+64" />
      <Picker.Item label="Nicaragua (+505)" value="+505" />
      <Picker.Item label="Niger (+227)" value="+227" />
      <Picker.Item label="Nigeria (+234)" value="+234" />
      <Picker.Item label="Niue (+683)" value="+683" />
      <Picker.Item label="Norfolk Island (+672)" value="+672" />
      <Picker.Item label="Northern Mariana Islands (+1670)" value="+1670" />
      <Picker.Item label="Norway (+47)" value="+47" />
      <Picker.Item label="Oman (+968)" value="+968" />
      <Picker.Item label="Pakistan (+92)" value="+92" />
      <Picker.Item label="Palau (+680)" value="+680" />
      <Picker.Item
        label="Palestinian Territory, Occupied (+970)"
        value="+970"
      />
      <Picker.Item label="Panama (+507)" value="+507" />
      <Picker.Item label="Papua New Guinea (+675)" value="+675" />
      <Picker.Item label="Paraguay (+595)" value="+595" />
      <Picker.Item label="Peru (+51)" value="+51" />
      <Picker.Item label="Philippines (+63)" value="+63" />
      <Picker.Item label="Pitcairn (+872)" value="+872" />
      <Picker.Item label="Poland (+48)" value="+48" />
      <Picker.Item label="Portugal (+351)" value="+351" />
      <Picker.Item label="Puerto Rico (+1939)" value="+1939" />
      <Picker.Item label="Qatar (+974)" value="+974" />
      <Picker.Item label="Romania (+40)" value="+40" />
      <Picker.Item label="Russia (+7)" value="+7" />
      <Picker.Item label="Rwanda (+250)" value="+250" />
      <Picker.Item label="Reunion (+262)" value="+262" />
      <Picker.Item label="Saint Barthelemy (+590)" value="+590" />
      <Picker.Item
        label="Saint Helena, Ascension and Tristan Da Cunha (+290)"
        value="+290"
      />
      <Picker.Item label="Saint Kitts and Nevis (+1869)" value="+1869" />
      <Picker.Item label="Saint Lucia (+1758)" value="+1758" />
      <Picker.Item label="Saint Martin (+590)" value="+590" />
      <Picker.Item label="Saint Pierre and Miquelon (+508)" value="+508" />
      <Picker.Item
        label="Saint Vincent and the Grenadines (+1784)"
        value="+1784"
      />
      <Picker.Item label="Samoa (+685)" value="+685" />
      <Picker.Item label="San Marino (+378)" value="+378" />
      <Picker.Item label="Sao Tome and Principe (+239)" value="+239" />
      <Picker.Item label="Saudi Arabia (+966)" value="+966" />
      <Picker.Item label="Senegal (+221)" value="+221" />
      <Picker.Item label="Serbia (+381)" value="+381" />
      <Picker.Item label="Seychelles (+248)" value="+248" />
      <Picker.Item label="Sierra Leone (+232)" value="+232" />
      <Picker.Item label="Singapore (+65)" value="+65" />
      <Picker.Item label="Slovakia (+421)" value="+421" />
      <Picker.Item label="Slovenia (+386)" value="+386" />
      <Picker.Item label="Solomon Islands (+677)" value="+677" />
      <Picker.Item label="Somalia (+252)" value="+252" />
      <Picker.Item label="South Africa (+27)" value="+27" />
      <Picker.Item label="South Sudan (+211)" value="+211" />
      <Picker.Item
        label="South Georgia and the South Sandwich Islands (+500)"
        value="+500"
      />
      <Picker.Item label="Spain (+34)" value="+34" />
      <Picker.Item label="Sri Lanka (+94)" value="+94" />
      <Picker.Item label="Sudan (+249)" value="+249" />
      <Picker.Item label="Suriname (+597)" value="+597" />
      <Picker.Item label="Svalbard and Jan Mayen (+47)" value="+47" />
      <Picker.Item label="Swaziland (+268)" value="+268" />
      <Picker.Item label="Sweden (+46)" value="+46" />
      <Picker.Item label="Switzerland (+41)" value="+41" />
      <Picker.Item label="Syrian Arab Republic (+963)" value="+963" />
      <Picker.Item label="Taiwan (+886)" value="+886" />
      <Picker.Item label="Tajikistan (+992)" value="+992" />
      <Picker.Item
        label="Tanzania, United Republic of Tanzania (+255)"
        value="+255"
      />
      <Picker.Item label="Thailand (+66)" value="+66" />
      <Picker.Item label="Timor-Leste (+670)" value="+670" />
      <Picker.Item label="Togo (+228)" value="+228" />
      <Picker.Item label="Tokelau (+690)" value="+690" />
      <Picker.Item label="Tonga (+676)" value="+676" />
      <Picker.Item label="Trinidad and Tobago (+1868)" value="+1868" />
      <Picker.Item label="Tunisia (+216)" value="+216" />
      <Picker.Item label="Turkey (+90)" value="+90" />
      <Picker.Item label="Turkmenistan (+993)" value="+993" />
      <Picker.Item label="Turks and Caicos Islands (+1649)" value="+1649" />
      <Picker.Item label="Tuvalu (+688)" value="+688" />
      <Picker.Item label="Uganda (+256)" value="+256" />
      <Picker.Item label="Ukraine (+380)" value="+380" />
      <Picker.Item label="United Arab Emirates (+971)" value="+971" />
      <Picker.Item label="United Kingdom (+44)" value="+44" />
      <Picker.Item label="United States (+1)" value="+1" />
      <Picker.Item label="Uruguay (+598)" value="+598" />
      <Picker.Item label="Uzbekistan (+998)" value="+998" />
      <Picker.Item label="Vanuatu (+678)" value="+678" />
      <Picker.Item
        label="Venezuela, Bolivarian Republic of Venezuela (+58)"
        value="+58"
      />
      <Picker.Item label="Vietnam (+84)" value="+84" />
      <Picker.Item label="Virgin Islands, British (+1284)" value="+1284" />
      <Picker.Item label="Virgin Islands, U.S. (+1340)" value="+1340" />
      <Picker.Item label="Wallis and Futuna (+681)" value="+681" />
      <Picker.Item label="Yemen (+967)" value="+967" />
      <Picker.Item label="Zambia (+260)" value="+260" />
      <Picker.Item label="Zimbabwe (+263)" value="+263" />
    </>
  );
}
