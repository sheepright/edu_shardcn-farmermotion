"use client";

import { motion } from "motion/react";

/**
 * 기본 Motion 애니메이션 학습 컴포넌트
 *
 * 핵심 개념:
 * 1. animate: 자동으로 실행되는 애니메이션
 * 2. initial + animate: 시작 상태에서 끝 상태로 전환
 * 3. whileHover / whileTap: 사용자 인터랙션 애니메이션
 */
export default function Start_motion() {
  return (
    <div className="flex gap-10">
      {/* 
        예제 1: 회전 애니메이션 (Rotate Animation)
        - animate: 목표 상태를 정의하면 자동으로 애니메이션 실행
        - rotate: 회전 각도 (단위: degree)
        - transition.duration: 애니메이션 지속 시간 (단위: 초)
      */}
      <motion.div
        className="w-24 h-24 bg-red-500 rounded-md"
        animate={{ rotate: 720 }} // 720도 회전 (2바퀴)
        transition={{ duration: 3 }} // 3초 동안 실행
      />

      {/* 
        예제 2: 페이드인 & 스케일 애니메이션 (Fade-in & Scale)
        - initial: 애니메이션 시작 전 초기 상태
        - animate: 애니메이션 목표 상태
        - opacity: 투명도 (0 = 투명, 1 = 불투명)
        - scale: 크기 배율 (0 = 안보임, 1 = 원본 크기, 2 = 2배)
        - type: "spring": 스프링 물리 효과 (탄성 있는 움직임)
        - bounce: 튕김 정도 (0 = 튕김 없음, 1 = 최대 튕김)
      */}
      <motion.div
        className="w-24 h-24 bg-blue-500 rounded-full"
        initial={{ opacity: 0, scale: 0 }} // 시작: 투명하고 크기 0
        animate={{ opacity: 1, scale: 1 }} // 끝: 불투명하고 원본 크기
        transition={{
          duration: 0.4, // 전체 애니메이션 0.4초
          scale: {
            type: "spring", // 스프링 애니메이션 (통통 튀는 효과)
            visualDuration: 0.4, // 시각적 지속 시간
            bounce: 0.5, // 50% 튕김 효과
          },
        }}
      />

      {/* 
        예제 3: 인터랙티브 애니메이션 (Interactive Animation)
        - whileHover: 마우스를 올렸을 때 적용되는 애니메이션
        - whileTap: 클릭(터치)했을 때 적용되는 애니메이션
        - 인터랙션이 끝나면 자동으로 원래 상태로 복귀
        - cursor-pointer: 마우스 커서를 포인터로 변경 (클릭 가능함을 표시)
      */}
      <motion.div
        className="w-24 h-24 bg-green-500 rounded-md cursor-pointer"
        whileHover={{ scale: 1.2 }} // 호버 시 1.2배 확대
        whileTap={{ scale: 0.8 }} // 클릭 시 0.8배 축소
      />
    </div>
  );
}

/**
 * 학습 포인트:
 *
 * 1. animate vs initial + animate:
 *    - animate만 사용: 마운트되자마자 애니메이션 시작
 *    - initial + animate: 특정 시작 상태에서 목표 상태로 전환
 *
 * 2. transition 타입:
 *    - 기본 (tween): 부드러운 선형 전환
 *    - spring: 물리 기반 탄성 효과 (더 자연스러움)
 *    - inertia: 관성 효과
 *
 * 3. 애니메이션 가능한 속성들:
 *    - 위치: x, y (픽셀 단위)
 *    - 크기: scale, width, height
 *    - 회전: rotate, rotateX, rotateY, rotateZ
 *    - 투명도: opacity
 *    - 색상: backgroundColor, color
 *
 * 4. 제스처 애니메이션:
 *    - whileHover: 마우스 호버
 *    - whileTap: 클릭/터치
 *    - whileFocus: 포커스
 *    - whileDrag: 드래그 중
 *
 * 5. 실험해보기:
 *    - rotate를 360, 1080으로 변경
 *    - duration을 0.5, 5로 변경
 *    - bounce를 0.1, 0.9로 변경
 *    - whileHover scale을 1.5, 2로 변경
 *    - 새로운 속성 추가: animate={{ rotate: 360, x: 100 }}
 */
