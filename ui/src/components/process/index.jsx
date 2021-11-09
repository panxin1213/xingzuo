import { View } from "@tarojs/components";
import "./index.scss"

export default function Index(props) {
    const { percent = 70, bg = "linear-gradient(#50E3D0,#0DD591)" } = props;

    return <View class="process-bg">
        <View class="porcess-inner" style={{ width: percent / 100 * 150, background: bg }}>{percent}%</View>
    </View >

}