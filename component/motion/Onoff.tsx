"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

/**
 * 다크모드/라이트모드 토글 스위치 컴포넌트
 *
 * 다크모드 구현 방법 (Tailwind CSS v4 기준):
 *
 * 1. globals.css에 다크모드 설정 (이미 완료됨)
 *    - @custom-variant dark (&:is(.dark *))
 *    - 이 설정은 부모 요소에 'dark' 클래스가 있을 때 다크모드 스타일 적용
 *
 * 2. HTML 요소에 'dark' 클래스 추가/제거
 *    - document.documentElement.classList.add('dark')    // 다크모드 활성화
 *    - document.documentElement.classList.remove('dark') // 라이트모드 활성화
 *
 * 3. localStorage에 사용자 설정 저장 (선택사항)
 *    - localStorage.setItem('theme', 'dark' 또는 'light')
 *    - 페이지 새로고침 시에도 설정 유지
 *
 * 4. globals.css의 CSS 변수 활용
 *    - 라이트모드: :root에 정의된 변수 사용
 *    - 다크모드: .dark에 정의된 변수 사용
 *    - 예: bg-background, text-foreground 등의 클래스 사용
 */
export default function Onoff() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);

    // 방법 2: localStorage에 저장 + HTML 클래스 변경 (권장)
    // 페이지 새로고침 시에도 설정이 유지됨
    const newTheme = !isOn ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    // localStorage에서 저장된 테마 가져오기
    const savedTheme = localStorage.getItem("theme");

    // 저장된 테마가 있으면 적용, 없으면 시스템 설정 확인
    if (savedTheme === "dark") {
      setIsOn(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsOn(false);
      document.documentElement.classList.remove("dark");
    } else {
      // 저장된 설정이 없으면 시스템 다크모드 설정 확인
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsOn(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <button
        className={`w-23 h-13 bg-purple-200 rounded-full cursor-pointer flex p-2.5 ${
          isOn ? "justify-start" : "justify-end"
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          data-state={isOn}
          className="w-8 h-8 bg-[#9911ff] rounded-full"
          layout
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        />
      </button>
    </div>
  );
}
