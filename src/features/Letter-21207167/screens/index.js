import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3fa/5100/38f6e1967473942d5e8eba20c98f6231"
        }}
        style={styles.ImageBackground_303_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bc4/7745/b2683db884f59726bbde102daf832fb5"
        }}
        style={styles.ImageBackground_303_18}
      />
      <View style={styles.View_303_6}>
        <Text style={styles.Text_303_6}>Crowdbotics</Text>
      </View>
      <View style={styles.View_303_7}>
        <Text style={styles.Text_303_7}>Rapid Application Generation</Text>
      </View>
      <View style={styles.View_303_11}>
        <Text style={styles.Text_303_11}>
          Crowdbotics allows nontechnical teams to build highly secure,
          containerized software applications integrating machine learning,
          visualization tools, and multiple off-the-shelf components, using a
          component-based model of application building that is radically faster
          than conventional methods of software engineering.
        </Text>
      </View>
      <View style={styles.View_303_13}>
        <Text style={styles.Text_303_13}>
          The commercial solution is uniquely suited for domains where data
          security is paramount: healthcare, finance, and defense. Because
          applications generated on the Crowdbotics platform generate full,
          transparent source code in well-known open frameworks like the
          RADStack, they can be readily audited or modified by end users.
        </Text>
      </View>
      <View style={styles.View_303_14}>
        <Text style={styles.Text_303_14}>
          Finally, because applications generated are self-contained and fully
          containerized after initial creation, they can be hardened and run in
          secure, on-premise settings where information security is a must. To
          date, over 1,000 organizations have used the Crowdbotics platform to
          develop their own applications, launching over 20,000 applications,
          with specialization in secure applications in healthcare, finance, and
          tech.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6810/dd4b/bb3575bfae74f1e7e790220d1643a412"
        }}
        style={styles.ImageBackground_303_20}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_303_5: {
    width: 1575,
    minWidth: 1575,
    height: 1649,
    minHeight: 1649,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -224,
    top: -165,
    resizeMode: "cover"
  },
  ImageBackground_303_18: {
    width: 719,
    minWidth: 719,
    height: 225,
    minHeight: 225,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -54,
    top: 588,
    resizeMode: "cover"
  },
  View_303_6: {
    width: 326,
    minWidth: 326,
    minHeight: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 112
  },
  Text_303_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_7: {
    width: 402,
    minWidth: 402,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 183
  },
  Text_303_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_11: {
    width: 525,
    minWidth: 525,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 351
  },
  Text_303_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_13: {
    width: 252,
    minWidth: 252,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 440
  },
  Text_303_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_14: {
    width: 253,
    minWidth: 253,
    minHeight: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316,
    top: 440
  },
  Text_303_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_303_20: {
    width: 378,
    minWidth: 378,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117,
    top: 648,
    resizeMode: "cover"
  },
  View_2: { height: 792 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
