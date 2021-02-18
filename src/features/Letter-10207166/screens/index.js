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
      <View style={styles.View_3_104}>
        <View style={styles.View_3_105}>
          <View style={styles.View_3_107} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd7e/ef11/194ee25f4cdd28a7d012919f2c078eaa"
            }}
            style={styles.ImageBackground_4_18}
          />
        </View>
        <View style={styles.View_4_19}>
          <View style={styles.View_3_109}>
            <Text style={styles.Text_3_109}>
              Crowdbotics goes where other low-code platforms can’t by offering
              fully configurable source code, infrastructure, and cloud hosting
              out of the box.
            </Text>
          </View>
          <View style={styles.View_3_111}>
            <Text style={styles.Text_3_111}>
              Bringing enterprise-grade security to everyone.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_1}>
        <View style={styles.View_3_2}>
          <View style={styles.View_3_29}>
            <View style={styles.View_3_28}>
              <Text style={styles.Text_3_28}>
                • Healthcare • Finance • Technology • Defense • Logistics •
                Energy • Transportation • Education
              </Text>
            </View>
            <View style={styles.View_3_7}>
              <Text style={styles.Text_3_7}>Key Industries</Text>
            </View>
          </View>
          <View style={styles.View_3_4} />
          <View style={styles.View_3_30}>
            <View style={styles.View_3_36}>
              <View style={styles.View_3_42}>
                <View style={styles.View_3_43}>
                  <Text style={styles.Text_3_43}>Secure data storage</Text>
                </View>
                <View style={styles.View_3_44}>
                  <Text style={styles.Text_3_44}>•</Text>
                </View>
              </View>
              <View style={styles.View_3_48}>
                <View style={styles.View_3_49}>
                  <Text style={styles.Text_3_49}>Workflow automation</Text>
                </View>
                <View style={styles.View_3_50}>
                  <Text style={styles.Text_3_50}>•</Text>
                </View>
              </View>
              <View style={styles.View_3_45}>
                <View style={styles.View_3_46}>
                  <Text style={styles.Text_3_46}>Business intelligence</Text>
                </View>
                <View style={styles.View_3_47}>
                  <Text style={styles.Text_3_47}>•</Text>
                </View>
              </View>
              <View style={styles.View_3_39}>
                <View style={styles.View_3_40}>
                  <Text style={styles.Text_3_40}>Regulatory compliance</Text>
                </View>
                <View style={styles.View_3_41}>
                  <Text style={styles.Text_3_41}>•</Text>
                </View>
              </View>
              <View style={styles.View_3_35}>
                <View style={styles.View_3_34}>
                  <Text style={styles.Text_3_34}>Digital transformation</Text>
                </View>
                <View style={styles.View_3_31}>
                  <Text style={styles.Text_3_31}>•</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3_32}>
              <Text style={styles.Text_3_32}>Use Cases</Text>
            </View>
          </View>
          <View style={styles.View_3_33} />
        </View>
        <View style={styles.View_3_63}>
          <View style={styles.View_3_53}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce17/3003/717f84e73f9a8438489fda2814a84d42"
              }}
              style={styles.ImageBackground_3_51}
            />
            <View style={styles.View_3_52}>
              <Text style={styles.Text_3_52}>
                Create screen layouts and data models with a visual editor
              </Text>
            </View>
          </View>
          <View style={styles.View_3_57}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce17/3003/717f84e73f9a8438489fda2814a84d42"
              }}
              style={styles.ImageBackground_3_58}
            />
            <View style={styles.View_3_59}>
              <Text style={styles.Text_3_59}>
                Generate Git commits from every action on your visual builder
              </Text>
            </View>
          </View>
          <View style={styles.View_3_54}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce17/3003/717f84e73f9a8438489fda2814a84d42"
              }}
              style={styles.ImageBackground_3_55}
            />
            <View style={styles.View_3_56}>
              <Text style={styles.Text_3_56}>
                Toggle on the built-in IDE to edit code manually
              </Text>
            </View>
          </View>
          <View style={styles.View_3_60}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2e1/d54a/bf91606efeb8dc324dcb1d2ab8a9df77"
              }}
              style={styles.ImageBackground_3_61}
            />
            <View style={styles.View_3_62}>
              <Text style={styles.Text_3_62}>
                Provision S3 storage and deploy to the cloud with a single click
              </Text>
            </View>
          </View>
          <View style={styles.View_3_6}>
            <Text style={styles.Text_3_6}>
              Every feature you need to build, deploy, and host custom software
              applications:
            </Text>
          </View>
          <View style={styles.View_3_5}>
            <Text style={styles.Text_3_5}>Build fast and deploy securely.</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_0}>
        <View style={styles.View_2_1}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f78/e249/6a09b5f635a17d4d2abacb72fa4bed64"
            }}
            style={styles.ImageBackground_1_14}
          />
          <View style={styles.View_2_0} />
        </View>
        <View style={styles.View_4_20}>
          <View style={styles.View_2_2}>
            <Text style={styles.Text_2_2}>
              The ease of low code. The power of pro code.
            </Text>
          </View>
          <View style={styles.View_2_3}>
            <Text style={styles.Text_2_3}>
              Build scalable, full-code apps — coding optional. Automatically
              generate fully hackable, cross-platform React and Django code as
              you build.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_13}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10a8/4e4e/94aa6cfabe903edb660f5582b8477bf2"
          }}
          style={styles.ImageBackground_1_8}
        />
        <View style={styles.View_1_11} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dca/8f15/10ef128ff7d51477de48cce1f9ae6052"
          }}
          style={styles.ImageBackground_1_9}
        />
        <View style={styles.View_1_10}>
          <Text style={styles.Text_1_10}>
            Secure Design-to-Development Platform
          </Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3_104: {
    width: 571,
    minWidth: 571,
    height: 164,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 602
  },
  View_3_105: {
    width: 276,
    minWidth: 276,
    height: 164,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 295,
    top: 0
  },
  View_3_107: {
    width: 276,
    minWidth: 276,
    height: 164,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(28, 11, 62, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_4_18: {
    width: 261,
    minWidth: 261,
    height: 147,
    minHeight: 147,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 9,
    resizeMode: "cover"
  },
  View_4_19: {
    width: 276,
    minWidth: 276,
    height: 145,
    minHeight: 145,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 10
  },
  View_3_109: {
    width: 267,
    minWidth: 267,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 65
  },
  Text_3_109: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_111: {
    width: 276,
    minWidth: 276,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_111: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 14,
    fontFamily: "OpenSans-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_1: {
    width: 572,
    minWidth: 572,
    height: 251,
    minHeight: 251,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 313
  },
  View_3_2: {
    width: 276,
    minWidth: 276,
    height: 237,
    minHeight: 237,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14
  },
  View_3_29: {
    width: 97,
    minWidth: 97,
    height: 167.24346923828125,
    minHeight: 167.24346923828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 15
  },
  View_3_28: {
    width: 96,
    minWidth: 96,
    minHeight: 132.69476318359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 34.54871368408203
  },
  Text_3_28: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_7: {
    width: 97,
    minWidth: 97,
    minHeight: 20.64461326599121,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_7: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_4: {
    width: 128,
    minWidth: 128,
    height: 237,
    minHeight: 237,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(67, 66, 66, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_3_30: {
    width: 97,
    minWidth: 97,
    height: 206.24346923828125,
    minHeight: 206.24346923828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 164,
    top: 14.756523132324219
  },
  View_3_36: {
    width: 97,
    minWidth: 97,
    height: 175,
    minHeight: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31.24347686767578
  },
  View_3_42: {
    width: 97,
    minWidth: 97,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 72
  },
  View_3_43: {
    width: 90.40776824951172,
    minWidth: 90.40776824951172,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.59222412109375,
    top: 0
  },
  Text_3_43: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_44: {
    width: 4.708737850189209,
    minWidth: 4.708737850189209,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_44: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_48: {
    width: 97,
    minWidth: 97,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 144
  },
  View_3_49: {
    width: 90.40776824951172,
    minWidth: 90.40776824951172,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.59222412109375,
    top: 0
  },
  Text_3_49: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_50: {
    width: 4.708737850189209,
    minWidth: 4.708737850189209,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_50: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_45: {
    width: 97,
    minWidth: 97,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108
  },
  View_3_46: {
    width: 90.40776824951172,
    minWidth: 90.40776824951172,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.59222412109375,
    top: 0
  },
  Text_3_46: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_47: {
    width: 4.708737850189209,
    minWidth: 4.708737850189209,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_47: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_39: {
    width: 97,
    minWidth: 97,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 36
  },
  View_3_40: {
    width: 90.40776824951172,
    minWidth: 90.40776824951172,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.59222412109375,
    top: 0
  },
  Text_3_40: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_41: {
    width: 4.708737850189209,
    minWidth: 4.708737850189209,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_41: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_35: {
    width: 97,
    minWidth: 97,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_3_34: {
    width: 90.40776824951172,
    minWidth: 90.40776824951172,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.59222412109375,
    top: 0
  },
  Text_3_34: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_31: {
    width: 4.708737850189209,
    minWidth: 4.708737850189209,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_31: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_32: {
    width: 97,
    minWidth: 97,
    minHeight: 18.669565200805664,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_32: {
    color: "rgba(67, 66, 66, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_33: {
    width: 128,
    minWidth: 128,
    height: 237,
    minHeight: 237,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(67, 66, 66, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_3_63: {
    width: 277,
    minWidth: 277,
    height: 245,
    minHeight: 245,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 295,
    top: 0
  },
  View_3_53: {
    width: 258,
    minWidth: 258,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 92
  },
  ImageBackground_3_51: {
    width: 24.00623321533203,
    minWidth: 24.00623321533203,
    height: 9.152263641357422,
    minHeight: 9.152263641357422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.991774559020996
  },
  View_3_52: {
    width: 232,
    minWidth: 232,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 0
  },
  Text_3_52: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_57: {
    width: 258,
    minWidth: 258,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 180
  },
  ImageBackground_3_58: {
    width: 24.00623321533203,
    minWidth: 24.00623321533203,
    height: 9.152263641357422,
    minHeight: 9.152263641357422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.9917755126953125
  },
  View_3_59: {
    width: 232,
    minWidth: 232,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 0
  },
  Text_3_59: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_54: {
    width: 258,
    minWidth: 258,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 136
  },
  ImageBackground_3_55: {
    width: 24.00623321533203,
    minWidth: 24.00623321533203,
    height: 9.152263641357422,
    minHeight: 9.152263641357422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.9917755126953125
  },
  View_3_56: {
    width: 232,
    minWidth: 232,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 0
  },
  Text_3_56: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_60: {
    width: 258,
    minWidth: 258,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 224
  },
  ImageBackground_3_61: {
    width: 24.006235122680664,
    minWidth: 24.006235122680664,
    height: 9.609875679016113,
    minHeight: 9.609875679016113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 5.241363525390625
  },
  View_3_62: {
    width: 232,
    minWidth: 232,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 0
  },
  Text_3_62: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_6: {
    width: 275,
    minWidth: 275,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 35
  },
  Text_3_6: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_5: {
    width: 276,
    minWidth: 276,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0
  },
  Text_3_5: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 14,
    fontFamily: "OpenSans-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_0: {
    width: 572,
    minWidth: 572,
    height: 164,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 111
  },
  View_2_1: {
    width: 276,
    minWidth: 276,
    height: 164,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 296,
    top: 0
  },
  ImageBackground_1_14: {
    width: 261,
    minWidth: 261,
    height: 147,
    minHeight: 147,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8,
    resizeMode: "cover"
  },
  View_2_0: {
    width: 276,
    minWidth: 276,
    height: 164,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(28, 12, 61, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_4_20: {
    width: 276,
    minWidth: 276,
    height: 164,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2_2: {
    width: 276,
    minWidth: 276,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_2_2: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 14,
    fontFamily: "OpenSans-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3: {
    width: 267,
    minWidth: 267,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 65
  },
  Text_2_3: {
    color: "rgba(28, 12, 61, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_13: {
    width: 615,
    minWidth: 615,
    height: 81,
    minHeight: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: -2
  },
  ImageBackground_1_8: {
    width: 615,
    minWidth: 615,
    height: 81,
    minHeight: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_11: {
    width: 612,
    minWidth: 612,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 2
  },
  ImageBackground_1_9: {
    width: 92,
    minWidth: 92,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 515,
    top: 10
  },
  View_1_10: {
    width: 508,
    minWidth: 508,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54,
    top: 41
  },
  Text_1_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0.72,
    textTransform: "none"
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
