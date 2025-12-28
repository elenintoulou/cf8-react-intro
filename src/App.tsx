// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";


function App() {
  return (
    <>
        {/*<ViteIntro/>*/}
        <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component With Props" />
        <ArrowFunctionalComponentWithProps title="This is the second title" />
        <ArrowFunctionalComponentWithPropsType title="Nah Nah" description="lorem ipsum" />
    </>
  )
}

export default App
