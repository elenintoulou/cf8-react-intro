import {Component} from "react";
// import ViteIntro from "./ViteIntro/ViteIntro.tsx";

class ClassComponent extends Component{
    render() {
    const title = 'Is a class component';
    return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>;
    }
}
export default ClassComponent;