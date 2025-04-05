import { HistoryItem } from "@/components/HistoryItem";
import { Animated, StyleSheet, Text, View } from "react-native";

type HistoryItem = {
  phoneNumber: string;
  timestamp: number;
};

export default function Tab() {
  const histArray: Array<HistoryItem> = [
    {
      phoneNumber: "+55 515 883 0061",
      timestamp: 1680590187000,
    },
    {
      phoneNumber: "+86 427 984 1199",
      timestamp: 1681220876000,
    },
    {
      phoneNumber: "+234 862 775 7283",
      timestamp: 1741744599000,
    },
    {
      phoneNumber: "+51 884 245 3119",
      timestamp: 1702158397000,
    },
    {
      phoneNumber: "+63 161 290 5608",
      timestamp: 1679170490000,
    },
    {
      phoneNumber: "+1 867 197 1733",
      timestamp: 1658631701000,
    },
    {
      phoneNumber: "+62 898 203 1776",
      timestamp: 1683525318000,
    },
    {
      phoneNumber: "+30 678 485 2245",
      timestamp: 1721108402000,
    },
    {
      phoneNumber: "+353 871 766 8891",
      timestamp: 1711319118000,
    },
    {
      phoneNumber: "+380 601 372 4346",
      timestamp: 1696794720000,
    },
    {
      phoneNumber: "+86 539 689 5874",
      timestamp: 1689199434000,
    },
    {
      phoneNumber: "+351 660 507 0097",
      timestamp: 1683177622000,
    },
    {
      phoneNumber: "+86 921 835 8045",
      timestamp: 1672884671000,
    },
    {
      phoneNumber: "+51 134 650 0091",
      timestamp: 1690114760000,
    },
    {
      phoneNumber: "+86 185 979 1980",
      timestamp: 1671329446000,
    },
    {
      phoneNumber: "+31 666 203 2476",
      timestamp: 1732338924000,
    },
    {
      phoneNumber: "+92 254 585 6267",
      timestamp: 1714779160000,
    },
    {
      phoneNumber: "+1 370 711 8416",
      timestamp: 1664129377000,
    },
    {
      phoneNumber: "+63 123 124 9860",
      timestamp: 1703795607000,
    },
    {
      phoneNumber: "+86 250 421 3550",
      timestamp: 1666992619000,
    },
    {
      phoneNumber: "+98 847 311 2346",
      timestamp: 1711635152000,
    },
    {
      phoneNumber: "+62 675 861 3103",
      timestamp: 1705618474000,
    },
    {
      phoneNumber: "+48 624 165 8588",
      timestamp: 1664967823000,
    },
    {
      phoneNumber: "+86 344 427 8088",
      timestamp: 1664474327000,
    },
    {
      phoneNumber: "+86 880 929 1657",
      timestamp: 1687559388000,
    },
    {
      phoneNumber: "+7 410 378 3708",
      timestamp: 1738508448000,
    },
    {
      phoneNumber: "+86 830 655 8120",
      timestamp: 1725372339000,
    },
    {
      phoneNumber: "+7 638 765 1388",
      timestamp: 1659179653000,
    },
    {
      phoneNumber: "+1 350 657 0814",
      timestamp: 1722145848000,
    },
    {
      phoneNumber: "+46 753 505 3358",
      timestamp: 1687203664000,
    },
    {
      phoneNumber: "+86 588 710 7312",
      timestamp: 1659670734000,
    },
    {
      phoneNumber: "+63 476 739 4672",
      timestamp: 1720099508000,
    },
    {
      phoneNumber: "+234 449 352 4518",
      timestamp: 1720773978000,
    },
    {
      phoneNumber: "+86 894 772 9699",
      timestamp: 1734666675000,
    },
    {
      phoneNumber: "+63 907 159 2330",
      timestamp: 1690148086000,
    },
    {
      phoneNumber: "+383 417 784 9506",
      timestamp: 1716051462000,
    },
    {
      phoneNumber: "+7 604 305 3334",
      timestamp: 1658697273000,
    },
    {
      phoneNumber: "+33 325 582 3107",
      timestamp: 1674904118000,
    },
    {
      phoneNumber: "+1 915 228 4799",
      timestamp: 1685295931000,
    },
    {
      phoneNumber: "+381 357 612 5566",
      timestamp: 1722876998000,
    },
    {
      phoneNumber: "+62 809 472 9465",
      timestamp: 1698648393000,
    },
    {
      phoneNumber: "+380 967 217 2181",
      timestamp: 1681311064000,
    },
    {
      phoneNumber: "+1 336 335 2591",
      timestamp: 1694506327000,
    },
    {
      phoneNumber: "+30 923 783 6390",
      timestamp: 1704713107000,
    },
    {
      phoneNumber: "+55 577 503 1669",
      timestamp: 1698420928000,
    },
    {
      phoneNumber: "+252 190 204 9710",
      timestamp: 1697871046000,
    },
    {
      phoneNumber: "+599 446 459 9690",
      timestamp: 1718658828000,
    },
    {
      phoneNumber: "+66 478 656 5944",
      timestamp: 1693649599000,
    },
    {
      phoneNumber: "+86 527 741 0403",
      timestamp: 1689606649000,
    },
    {
      phoneNumber: "+54 853 677 9904",
      timestamp: 1677304493000,
    },
    {
      phoneNumber: "+86 906 462 5376",
      timestamp: 1718969556000,
    },
    {
      phoneNumber: "+57 892 793 6398",
      timestamp: 1699613505000,
    },
    {
      phoneNumber: "+62 123 247 4928",
      timestamp: 1670791473000,
    },
    {
      phoneNumber: "+54 196 779 4520",
      timestamp: 1743711746000,
    },
    {
      phoneNumber: "+52 993 588 4252",
      timestamp: 1677167166000,
    },
    {
      phoneNumber: "+351 483 228 3080",
      timestamp: 1732727553000,
    },
    {
      phoneNumber: "+680 243 139 7998",
      timestamp: 1740238392000,
    },
    {
      phoneNumber: "+7 984 898 3420",
      timestamp: 1694590120000,
    },
    {
      phoneNumber: "+63 935 424 3862",
      timestamp: 1721289188000,
    },
    {
      phoneNumber: "+63 976 370 7435",
      timestamp: 1716584403000,
    },
    {
      phoneNumber: "+46 256 275 7818",
      timestamp: 1691897645000,
    },
    {
      phoneNumber: "+33 611 218 0917",
      timestamp: 1713997119000,
    },
    {
      phoneNumber: "+381 872 286 7808",
      timestamp: 1742550314000,
    },
    {
      phoneNumber: "+92 211 262 1545",
      timestamp: 1678917045000,
    },
    {
      phoneNumber: "+1 615 224 9009",
      timestamp: 1681431329000,
    },
    {
      phoneNumber: "+82 994 766 0090",
      timestamp: 1738889670000,
    },
    {
      phoneNumber: "+55 222 134 8267",
      timestamp: 1701486844000,
    },
    {
      phoneNumber: "+66 120 457 1987",
      timestamp: 1665715793000,
    },
    {
      phoneNumber: "+62 123 755 9971",
      timestamp: 1690549622000,
    },
    {
      phoneNumber: "+63 554 952 7202",
      timestamp: 1660280187000,
    },
    {
      phoneNumber: "+62 900 546 1915",
      timestamp: 1710427524000,
    },
    {
      phoneNumber: "+965 590 873 3888",
      timestamp: 1669393384000,
    },
    {
      phoneNumber: "+33 251 295 4651",
      timestamp: 1660804048000,
    },
    {
      phoneNumber: "+55 553 684 7937",
      timestamp: 1722830674000,
    },
    {
      phoneNumber: "+380 487 609 7971",
      timestamp: 1663267833000,
    },
    {
      phoneNumber: "+373 691 603 2849",
      timestamp: 1685110040000,
    },
    {
      phoneNumber: "+54 821 935 5906",
      timestamp: 1689495701000,
    },
    {
      phoneNumber: "+33 503 797 7070",
      timestamp: 1664446495000,
    },
    {
      phoneNumber: "+86 638 985 9697",
      timestamp: 1742377259000,
    },
    {
      phoneNumber: "+46 132 976 9229",
      timestamp: 1717412427000,
    },
    {
      phoneNumber: "+86 890 780 1869",
      timestamp: 1669354736000,
    },
    {
      phoneNumber: "+7 732 148 9383",
      timestamp: 1713052162000,
    },
  ];

  const histItems = histArray.map((item) => (
    <HistoryItem
      key={item.timestamp}
      phoneNumber={item.phoneNumber}
      timestamp={item.timestamp}
    />
  ));

  return (
    <View style={styles.container}>
      <Animated.ScrollView style={styles.scrollContainer}>
        <Text style={styles.pageTitle}>App History</Text>
        <View style={styles.itemContainer}>{histItems}</View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  pageTitle: {
    fontSize: 25,
  },
  itemContainer: {
    marginVertical: 5,
  },
});
