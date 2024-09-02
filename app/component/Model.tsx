'use clinet'
import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { AnimationAction, Group } from "three"

useGLTF.preload('/medias/robot.glb')
const Model = ()=>{

    const group = useRef<Group>(null)

    const {nodes,materials,animations,scene} = useGLTF('/medias/robot.glb')


    const {actions,clips}= useAnimations(animations,scene)
    const scrolls = useScroll()

    const action = actions["Experiment"] as AnimationAction

    useEffect(()=>{

        

        action.play().paused=true
       

    },[action])

    useFrame(() => {
        if (action) {
            action.time = (action.getClip().duration * scrolls.offset) / 3
        }
    })

    return(
        <group ref={group}>
            <primitive object={scene}/>

        </group>
    )
}

export default Model