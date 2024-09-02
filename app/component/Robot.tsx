'use client'
import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress,Html, ScrollControls } from "@react-three/drei"


function Loader(){
    const {progress,active}=useProgress()

    return <Html center>{progress.toFixed(1)}</Html>
}

const Robot = ()=>{
    return(
        <Canvas gl={{antialias:true}} dpr={[1,1.5]} className="relative h-svh" style={{backgroundColor:"black"}}>

            <directionalLight position={[-5,-5,5]} intensity={4}/>
            <Suspense fallback={<Loader/>}>
                <ScrollControls damping={0.2} pages={2}>
                    <Model/>
                </ScrollControls>
            </Suspense>

        </Canvas>
    )
}

export default Robot