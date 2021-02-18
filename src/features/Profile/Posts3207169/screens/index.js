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
      <View style={styles.View_318_65} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241e/3884/6ca7988b7a199f886a271d24f482c687"
        }}
        style={styles.ImageBackground_318_66}
      />
      <View style={styles.View_318_251}>
        <View style={styles.View_318_274}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_318_275}
          />
          <View style={styles.View_318_280}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_318_281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_318_285}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_318_289}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1824/9aa5/06f6b9995237174c8b3aedbe446c444a"
            }}
            style={styles.ImageBackground_318_294}
          />
        </View>
      </View>
      <View style={styles.View_318_244}>
        <View style={styles.View_318_245}>
          <Text style={styles.Text_318_245}>Logout</Text>
        </View>
        <View style={styles.View_318_246}>
          <Text style={styles.Text_318_246}>Profile</Text>
        </View>
        <View style={styles.View_318_250}>
          <Text style={styles.Text_318_250}>Settings</Text>
        </View>
      </View>
      <View style={styles.View_318_69}>
        <View style={styles.View_318_70}>
          <Text style={styles.Text_318_70}>Victoria Robertson</Text>
        </View>
        <View style={styles.View_318_71}>
          <Text style={styles.Text_318_71}>A mantra goes here</Text>
        </View>
      </View>
      <View style={styles.View_318_213}>
        <View style={styles.View_318_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
            }}
            style={styles.ImageBackground_318_225}
          />
          <View style={styles.View_318_226}>
            <Text style={styles.Text_318_226}>Photos</Text>
          </View>
          <View style={styles.View_318_227}>
            <Text style={styles.Text_318_227}>Search</Text>
          </View>
          <View style={styles.View_318_228}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de28/df3c/29dd49642fec21b5baaf0ba4e6d193d7"
              }}
              style={styles.ImageBackground_318_229}
            />
            <View style={styles.View_318_230}>
              <Text style={styles.Text_318_230}>Posts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_318_207}>
        <View style={styles.View_318_208} />
        <View style={styles.View_318_209}>
          <Text style={styles.Text_318_209}>Header</Text>
        </View>
        <View style={styles.View_318_210}>
          <Text style={styles.Text_318_210}>8m ago</Text>
        </View>
        <View style={styles.View_318_211}>
          <Text style={styles.Text_318_211}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
          }}
          style={styles.ImageBackground_318_212}
        />
      </View>
      <View style={styles.View_318_201}>
        <View style={styles.View_318_202} />
        <View style={styles.View_318_203}>
          <Text style={styles.Text_318_203}>Header</Text>
        </View>
        <View style={styles.View_318_204}>
          <Text style={styles.Text_318_204}>8m ago</Text>
        </View>
        <View style={styles.View_318_205}>
          <Text style={styles.Text_318_205}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
          }}
          style={styles.ImageBackground_318_206}
        />
      </View>
      <View style={styles.View_318_195}>
        <View style={styles.View_318_196} />
        <View style={styles.View_318_197}>
          <Text style={styles.Text_318_197}>Header</Text>
        </View>
        <View style={styles.View_318_198}>
          <Text style={styles.Text_318_198}>8m ago</Text>
        </View>
        <View style={styles.View_318_199}>
          <Text style={styles.Text_318_199}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
          }}
          style={styles.ImageBackground_318_200}
        />
      </View>
      <View style={styles.View_318_189}>
        <View style={styles.View_318_190} />
        <View style={styles.View_318_191}>
          <Text style={styles.Text_318_191}>Header</Text>
        </View>
        <View style={styles.View_318_192}>
          <Text style={styles.Text_318_192}>8m ago</Text>
        </View>
        <View style={styles.View_318_193}>
          <Text style={styles.Text_318_193}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
          }}
          style={styles.ImageBackground_318_194}
        />
      </View>
      <View style={styles.View_318_177}>
        <View style={styles.View_318_178}>
          <View style={styles.View_318_179} />
          <View style={styles.View_318_180}>
            <View style={styles.View_318_181} />
          </View>
        </View>
        <View style={styles.View_318_182}>
          <View style={styles.View_318_183} />
          <View style={styles.View_318_184} />
          <View style={styles.View_318_185} />
          <View style={styles.View_318_186} />
          <View style={styles.View_318_187} />
        </View>
        <View style={styles.View_318_188} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_318_65: {
    flexGrow: 1,
    width: 376,
    height: 245,
    minHeight: 245,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 0,
    backgroundColor: "rgba(51, 15, 119, 1)"
  },
  ImageBackground_318_66: {
    width: 158,
    height: 158,
    minHeight: 158,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108,
    top: 128
  },
  View_318_251: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_318_274: {
    width: 375,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_318_275: {
    width: 375,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_318_280: {
    width: 66.661376953125,
    minWidth: 66.661376953125,
    height: 11.336018562316895,
    minHeight: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.3306884765625
  },
  ImageBackground_318_281: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.333251953125,
    top: 0.002685546875
  },
  ImageBackground_318_285: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027099609375,
    top: 0
  },
  ImageBackground_318_289: {
    width: 17,
    minWidth: 17,
    height: 10.666666984558105,
    minHeight: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.3359375
  },
  ImageBackground_318_294: {
    width: 28.42616844177246,
    minWidth: 28.42616844177246,
    height: 11.0888671875,
    minHeight: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_318_244: {
    flexGrow: 1,
    width: 343,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_318_245: {
    width: 54,
    minWidth: 54,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 8
  },
  Text_318_245: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_246: {
    width: 94,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 0
  },
  Text_318_246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_250: {
    width: 64,
    minWidth: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_318_250: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_69: {
    width: 272,
    minWidth: 272,
    height: 63,
    minHeight: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 302
  },
  View_318_70: {
    width: 272,
    minWidth: 272,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_318_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_71: {
    width: 151,
    minWidth: 151,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 44
  },
  Text_318_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_213: {
    flexGrow: 1,
    width: 343,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 389,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_318_224: {
    width: 343,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_318_225: {
    width: 343,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_318_226: {
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 16
  },
  Text_318_226: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_227: {
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 16
  },
  Text_318_227: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_228: {
    width: 171.5,
    minWidth: 171.5,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 2
  },
  ImageBackground_318_229: {
    flexGrow: 1,
    width: 171.5,
    height: 46,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_318_230: {
    width: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 14
  },
  Text_318_230: {
    color: "rgba(51, 15, 119, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_207: {
    flexGrow: 1,
    width: 343,
    height: 77.0000228881836,
    minHeight: 77.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 455,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_318_208: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_318_209: {
    width: 57,
    minWidth: 57,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_318_209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_210: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 2
  },
  Text_318_210: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_211: {
    flexGrow: 1,
    width: 269,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_318_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_318_212: {
    flexGrow: 1,
    width: 277,
    height: 0.000024216111341957003,
    minHeight: 0.000024216111341957003,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_318_201: {
    flexGrow: 1,
    width: 343,
    height: 77.0000228881836,
    minHeight: 77.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 548,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_318_202: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_318_203: {
    width: 57,
    minWidth: 57,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_318_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_204: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 2
  },
  Text_318_204: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_205: {
    flexGrow: 1,
    width: 269,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_318_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_318_206: {
    flexGrow: 1,
    width: 277,
    height: 0.000024216111341957003,
    minHeight: 0.000024216111341957003,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_318_195: {
    flexGrow: 1,
    width: 343,
    height: 77.0000228881836,
    minHeight: 77.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 641,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_318_196: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_318_197: {
    width: 57,
    minWidth: 57,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_318_197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_198: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 2
  },
  Text_318_198: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_199: {
    flexGrow: 1,
    width: 269,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_318_199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_318_200: {
    flexGrow: 1,
    width: 277,
    height: 0.000024216111341957003,
    minHeight: 0.000024216111341957003,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_318_189: {
    flexGrow: 1,
    width: 343,
    height: 77.0000228881836,
    minHeight: 77.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 734,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_318_190: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_318_191: {
    width: 57,
    minWidth: 57,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_318_191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_192: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 2
  },
  Text_318_192: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_193: {
    flexGrow: 1,
    width: 269,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_318_193: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_318_194: {
    flexGrow: 1,
    width: 277,
    height: 0.000024216111341957003,
    minHeight: 0.000024216111341957003,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_318_177: {
    flexGrow: 1,
    width: 375,
    height: 83.5,
    minHeight: 83.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 729,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_318_178: {
    width: 375,
    height: 83,
    top: 0.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_318_179: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_318_180: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_318_181: {
    width: 134,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_318_182: {
    width: 320,
    minWidth: 320,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 15
  },
  View_318_183: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(51, 15, 119, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_318_184: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_318_185: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_318_186: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 216,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_318_187: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_318_188: {
    flexGrow: 1,
    width: 375,
    height: 0.5,
    minHeight: 0.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(189, 197, 205, 1)"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
