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
    <div className="w-screen h-auto py-20 border-t border-white">
      <div className="flex flex-col relative text-center md:text-left px-6 md:px-10 justify-center gap-10 mx-auto items-center z-20">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-10">
          Membership
        </h3>
        <h4 className="text-xl md:text-4xl lg:w-4/5 font-semibold text-center md:text-left cursor-default leading-relaxed">
          Becoming a member of <span className="text-[#F7AB0A] cursor-default">Societas Arcana</span> means stepping into a world of exceptional security and intelligence services.
          <br /> <br />
          Our community includes individuals who demand the highest standards of <span className="text-[#F7AB0A] cursor-default">protection and discretion.</span>
          <br /><br />
          As a member, you gain <span className="text-[#F7AB0A] cursor-default">access to a network of experts from military, special forces, and intelligence backgrounds.</span>
          <br /><br />
          These professionals provide <span className="text-[#F7AB0A] cursor-default">bespoke security and intelligence solutions</span> tailored to your unique needs.
        </h4>
      
      </div>
    </div>
  );
}
