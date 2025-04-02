import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import {
  Linking,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

type SubmissionData = {
  countryPrefix: string;
  phoneNumber: string;
};

export function ContactForm() {
  function sanitizeNumber(phoneNumber: string) {
    return phoneNumber.replaceAll(" ", "");
  }

  function openWhatsApp(data: SubmissionData) {
    const baseURL = "https://wa.me/";

    console.log(data);
    data.phoneNumber = sanitizeNumber(data.phoneNumber);
    const phoneNumberComplete = `${data.countryPrefix}${data.phoneNumber}`;
    console.log(phoneNumberComplete);

    const whatsAppURL = baseURL + phoneNumberComplete;
    console.log(whatsAppURL);
    Linking.openURL(whatsAppURL);
  }

  return (
    <View>
      <Formik
        initialValues={{ countryPrefix: "+44", phoneNumber: "" }}
        onSubmit={(values: SubmissionData) => openWhatsApp(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.inputContainer}>
              <Picker
                onValueChange={handleChange("countryPrefix")}
                onBlur={handleBlur("countryPrefix")}
                selectedValue={values.countryPrefix}
                style={styles.multiSelect}
              >
                <Picker.Item label="Afghanistan (+93)" value="+93" />
                <Picker.Item label="Aland Islands (+358)" value="+358" />
                <Picker.Item label="Albania (+355)" value="+355" />
                <Picker.Item label="Algeria (+213)" value="+213" />
                <Picker.Item label="AmericanSamoa (+1684)" value="+1684" />
                <Picker.Item label="Andorra (+376)" value="+376" />
                <Picker.Item label="Angola (+244)" value="+244" />
                <Picker.Item label="Anguilla (+1264)" value="+1264" />
                <Picker.Item label="Antarctica (+672)" value="+672" />
                <Picker.Item
                  label="Antigua and Barbuda (+1268)"
                  value="+1268"
                />
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
                <Picker.Item
                  label="Bosnia and Herzegovina (+387)"
                  value="+387"
                />
                <Picker.Item label="Botswana (+267)" value="+267" />
                <Picker.Item label="Brazil (+55)" value="+55" />
                <Picker.Item
                  label="British Indian Ocean Territory (+246)"
                  value="+246"
                />
                <Picker.Item label="Brunei Darussalam (+673)" value="+673" />
                <Picker.Item label="Bulgaria (+359)" value="+359" />
                <Picker.Item label="Burkina Faso (+226)" value="+226" />
                <Picker.Item label="Burundi (+257)" value="+257" />
                <Picker.Item label="Cambodia (+855)" value="+855" />
                <Picker.Item label="Cameroon (+237)" value="+237" />
                <Picker.Item label="Canada (+1)" value="+1" />
                <Picker.Item label="Cape Verde (+238)" value="+238" />
                <Picker.Item label="Cayman Islands (+ 345)" value="+ 345" />
                <Picker.Item
                  label="Central African Republic (+236)"
                  value="+236"
                />
                <Picker.Item label="Chad (+235)" value="+235" />
                <Picker.Item label="Chile (+56)" value="+56" />
                <Picker.Item label="China (+86)" value="+86" />
                <Picker.Item label="Christmas Island (+61)" value="+61" />
                <Picker.Item
                  label="Cocos (Keeling) Islands (+61)"
                  value="+61"
                />
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
                <Picker.Item
                  label="Falkland Islands (Malvinas) (+500)"
                  value="+500"
                />
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
                <Picker.Item label="Guinea (+224)" value="+224" />
                <Picker.Item label="Guinea-Bissau (+245)" value="+245" />
                <Picker.Item label="Guyana (+595)" value="+595" />
                <Picker.Item label="Haiti (+509)" value="+509" />
                <Picker.Item
                  label="Holy See (Vatican City State) (+379)"
                  value="+379"
                />
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
                <Picker.Item label="Israel (+972)" value="+972" />
                <Picker.Item label="Italy (+39)" value="+39" />
                <Picker.Item label="Jamaica (+1876)" value="+1876" />
                <Picker.Item label="Japan (+81)" value="+81" />
                <Picker.Item label="Jordan (+962)" value="+962" />
                <Picker.Item label="Kazakhstan (+77)" value="+77" />
                <Picker.Item label="Kenya (+254)" value="+254" />
                <Picker.Item label="Kiribati (+686)" value="+686" />
                <Picker.Item
                  label="Korea, Democratic Peoples Republic of Korea (+850)"
                  value="+850"
                />
                <Picker.Item
                  label="Korea, Republic of South Korea (+82)"
                  value="+82"
                />
                <Picker.Item label="Kuwait (+965)" value="+965" />
                <Picker.Item label="Kyrgyzstan (+996)" value="+996" />
                <Picker.Item label="Laos (+856)" value="+856" />
                <Picker.Item label="Latvia (+371)" value="+371" />
                <Picker.Item label="Lebanon (+961)" value="+961" />
                <Picker.Item label="Lesotho (+266)" value="+266" />
                <Picker.Item label="Liberia (+231)" value="+231" />
                <Picker.Item
                  label="Libyan Arab Jamahiriya (+218)"
                  value="+218"
                />
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
                <Picker.Item
                  label="Northern Mariana Islands (+1670)"
                  value="+1670"
                />
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
                <Picker.Item
                  label="Saint Kitts and Nevis (+1869)"
                  value="+1869"
                />
                <Picker.Item label="Saint Lucia (+1758)" value="+1758" />
                <Picker.Item label="Saint Martin (+590)" value="+590" />
                <Picker.Item
                  label="Saint Pierre and Miquelon (+508)"
                  value="+508"
                />
                <Picker.Item
                  label="Saint Vincent and the Grenadines (+1784)"
                  value="+1784"
                />
                <Picker.Item label="Samoa (+685)" value="+685" />
                <Picker.Item label="San Marino (+378)" value="+378" />
                <Picker.Item
                  label="Sao Tome and Principe (+239)"
                  value="+239"
                />
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
                <Picker.Item
                  label="Trinidad and Tobago (+1868)"
                  value="+1868"
                />
                <Picker.Item label="Tunisia (+216)" value="+216" />
                <Picker.Item label="Turkey (+90)" value="+90" />
                <Picker.Item label="Turkmenistan (+993)" value="+993" />
                <Picker.Item
                  label="Turks and Caicos Islands (+1649)"
                  value="+1649"
                />
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
                <Picker.Item
                  label="Virgin Islands, British (+1284)"
                  value="+1284"
                />
                <Picker.Item
                  label="Virgin Islands, U.S. (+1340)"
                  value="+1340"
                />
                <Picker.Item label="Wallis and Futuna (+681)" value="+681" />
                <Picker.Item label="Yemen (+967)" value="+967" />
                <Picker.Item label="Zambia (+260)" value="+260" />
                <Picker.Item label="Zimbabwe (+263)" value="+263" />
              </Picker>

              <TextInput
                keyboardType="number-pad"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                style={styles.numInput}
              />
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  numInput: {
    width: 300,
    height: 30,
    borderColor: "#202020",
    borderWidth: 2,
    borderRadius: 3,
    padding: 2,
    marginVertical: 5,
  },
  inputContainer: {
    display: "flex",
    marginVertical: 10,
  },
  multiSelect: {
    width: 300,
    height: 60,
    marginVertical: 5,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "rgb(41, 163, 55)",
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 5,
    borderWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 1)",
  },
  submitButtonText: {
    color: "rgb(230, 230, 230)",
  },
});
