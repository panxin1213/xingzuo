import { View } from "@tarojs/components";

import "./index.scss"
export default function Index(props) {
    const { items = ["item1", "item2", "item3", "item4"], width = 690, height = 120, textColor = "#777777", textSize = 32, selectColor = "#000000", selected = 0, dataCus = [], bg = "#F8DC3E" } = props;

    const onItemTap = (index) => {
        props.itemtap(index);
    }
    return <>
        <View class="tabs component cus tab-box-inner">
            <View class="content" style={{ height: height }}>
                {props.children}
                <View class="content-inner" style={{ fontSize: textSize }}>
                    {items.map((item, index) => {
                        return <View onClick={() => { onItemTap(index) }} class={"item " + (selected == index ? 'act' : '')} style={{ height: height }} key={index}>{item}
                            {selected == index ? <View class="bottom-bar" style={{ background: bg }}></View> : ""}
                        </View>
                    }
                    )}
                </View>
            </View>
        </View>

    </>
}