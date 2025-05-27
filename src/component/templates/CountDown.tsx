"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { CountDownCard } from "./TemplateStyle";
import { AnimatePresence, motion } from "framer-motion";

function getTimeDiff(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function AnimatedNumber({ value }: { value: number }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ display: "inline-block", minWidth: 24, textAlign: "center" }}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}

function FlipNumber({ value }: { value: number }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={value}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "inline-block",
          minWidth: 24,
          textAlign: "center",
          backfaceVisibility: "hidden",
        }}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}

function PopNumber({ value }: { value: number }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={value}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: "inline-block", minWidth: 24, textAlign: "center" }}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}

const CountDown = ({ date }: { date: string }) => {
  // date: "2026-09-19 11:00:00" 형식
  const targetDate = new Date(date.replace(/-/g, "/"));
  const [timeLeft, setTimeLeft] = useState(getTimeDiff(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeDiff(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <CountDownCard>
          <Typography fontSize={22} color="#444444">
            <AnimatedNumber value={timeLeft.days} />
          </Typography>
          <Typography fontSize={11} color="#ccc">
            DAYS
          </Typography>
        </CountDownCard>
        <CountDownCard>
          <Typography fontSize={22} color="#444444">
            <AnimatedNumber value={timeLeft.hours} />
          </Typography>
          <Typography fontSize={11} color="#ccc">
            HOURS
          </Typography>
        </CountDownCard>
        <CountDownCard>
          <Typography fontSize={22} color="#444444">
            <AnimatedNumber value={timeLeft.minutes} />
          </Typography>
          <Typography fontSize={11} color="#ccc">
            MINUTES
          </Typography>
        </CountDownCard>
        <CountDownCard>
          <Typography fontSize={22} color="#444444">
            <AnimatedNumber value={timeLeft.seconds} />
          </Typography>
          <Typography fontSize={11} color="#ccc">
            SECONDS
          </Typography>
        </CountDownCard>
      </Box>
    </>
  );
};

export default CountDown;
