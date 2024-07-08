
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


export default function Membership() {
    
  return (
    <div className="w-screen h-screen ">
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row  px-10 justify-center gap-20 mx-auto items-center z-20 ">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
         Membership
        </h3>
        <h4 className="text-2xl md:text-4xl lg:w-4/5 font-semibold text-center cursor-default">
        Becoming a member of <span className="text-[#F7AB0A] cursor-default">Societas Arcana</span> means stepping into a world of exceptional security and intelligence services. <br/> <br/> Our community includes individuals who demand the highest standards of <span className="text-[#F7AB0A] cursor-default">protection and discretion.</span> <br/><br/>As a member, you gain <span className="text-[#F7AB0A] cursor-default">access to a network of experts from military, special forces, and intelligence backgrounds.</span> <br/><br/>These professionals provide<span className="text-[#F7AB0A] cursor-default"> bespoke security and intelligence solutions</span> tailored to your unique needs.
        </h4>
     
     {/* <BentoGrid className="w-full mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
         
        />
      ))}
    </BentoGrid> */}
    </div>
    </div>
 
  );
}

