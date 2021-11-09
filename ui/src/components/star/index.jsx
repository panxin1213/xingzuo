import { View } from "@tarojs/components";

import "./index.scss"
export default function Index(props) {
    const { count = 0, type = "default" } = props;

    return <>
        <View class={`star ${type} ${count >= 1 ? '' : 'default'}`}></View>
        <View class={`star ${type} ${count >= 2 ? '' : 'default'}`}></View>
        <View class={`star ${type} ${count >= 3 ? '' : 'default'}`}></View>
        <View class={`star ${type} ${count >= 4 ? '' : 'default'}`}></View>
        <View class={`star ${type} ${count >= 5 ? '' : 'default'}`}></View>
    </>
}