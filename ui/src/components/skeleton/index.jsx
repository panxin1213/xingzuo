import { View } from "@tarojs/components";
import "./index.scss"

export default function Index(props) {
    const { backgroung = "#f2f3f5", marginBottom = "", marginRight = ""
        , marginTop = "", borderRadius = "", row = 0, width = "100%", height = 45 } = props;

    const heightIsArray = height instanceof Array;
    const widthIsArray = width instanceof Array;
    const rowArray = Array.from({
        length: row
    })

    return <>
        {rowArray.map((a, index) => {
            return <View class="shine" style={{ height: heightIsArray ? height[index] : height, width: widthIsArray ? width[index] : width, background: backgroung, marginBottom: marginBottom, marginRight: marginRight, marginTop: marginTop, borderRadius: borderRadius }} key={index}></View>
        })}
    </>

}