"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "motion/react";

export default function Edu() {
  return <MotionCard />;
}

function MotionCard() {
  const MotionButton = motion(Button);

  return (
    // * Radix UI 컴포넌트는 직접 motion() 적용이 어려움
    // motion.div를 통해서 전체를 감싸는 형식
    <HoverCard>
      <HoverCardTrigger asChild>
        <MotionButton
          className="border rounded-xl"
          variant="link"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          @nextjs
        </MotionButton>
      </HoverCardTrigger>
      <CardContent />
    </HoverCard>
  );
}

function CardContent() {
  const MotionAvatar = motion(Avatar);

  return (
    <HoverCardContent className="w-80">
      <motion.div
        className="flex justify-between gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <MotionAvatar
          whileHover={{
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.2 },
          }}
          className="cursor-pointer"
        >
          <AvatarImage src="https://github.com/vercel.png" />
          <AvatarFallback>VC</AvatarFallback>
        </MotionAvatar>

        <motion.div
          className="space-y-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.h4
            className="text-xl font-bold"
            whileHover={{ scale: 1.05, color: "purple" }}
            transition={{ duration: 0.2 }}
          >
            @Next.JS
          </motion.h4>
          <p className="text-sm font-semibold">
            The React Framework created and maintained by @vercel.
          </p>
          <div className="text-muted-foreground text-xs">
            Joined December 2021
          </div>
        </motion.div>
      </motion.div>
    </HoverCardContent>
  );
}
