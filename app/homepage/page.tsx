'use client'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

import React, { useState } from "react"
import "./flashcards.css"

//   export default function Home() {

  
//     return (
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <div className="homepage">
//             <div className="menu">
//             <Menubar className="MenubarRoot">
//                 <MenubarMenu>
//                 <MenubarTrigger className="MenubarTrigger">Vocabulary</MenubarTrigger>
//                 <MenubarContent className="MenubarContent">
//                     <MenubarItem className="MenubarItem">
//                     New Tab <MenubarShortcut>⌘T</MenubarShortcut>
//                     </MenubarItem>
//                     <MenubarItem>New Window</MenubarItem>
//                     <MenubarSeparator />
//                     <MenubarItem>Share</MenubarItem>
//                     <MenubarSeparator />
//                     <MenubarItem>Print</MenubarItem>
//                 </MenubarContent>
//                 </MenubarMenu>
//             </Menubar>
//             </div>

//             <div className="page">
//                 <p>Welcome,</p>
//             </div>
//         </div>
//       </main>
//     )
//   }
  

function Card(props: {frontside?: string, backside?: string}) {
    const [text, setText] = useState(props.frontside)
    function handleClick() {
        setText(function(oldstate) {
            if (oldstate== props.frontside) {
            return props.backside
            }
        else {
            return props.frontside
        }})
    }
    return <div className="flash-card" onClick={handleClick}>{text}</div>
}

export default function App() {
    return (
        <div className="App">
                <h1>FLASHCARDS</h1>
            <Card frontside="HELLO" backside="goodbye" />
            <Card frontside="Slay" backside="GAAAAA"/>
            <Card frontside="AAAAA" backside="BBBB"/>
        </div>
    )
}