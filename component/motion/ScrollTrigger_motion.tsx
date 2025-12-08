"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";

/**
 * 스크롤 애니메이션 학습 컴포넌트
 *
 * 핵심 개념:
 * 1. whileInView: 요소가 뷰포트에 보일 때 애니메이션 실행
 * 2. viewport: 애니메이션 트리거 조건 설정
 * 3. variants: 재사용 가능한 애니메이션 상태 정의
 */
export default function ScrollTrigger_motion() {
  return (
    <div className="my-24 mx-auto max-w-2xl pb-24 w-full">
      {/* 스크롤 애니메이션 카드 */}
      <ScrollCard />
    </div>
  );
}

/**
 * 스크롤 시 애니메이션되는 카드 컴포넌트
 */
function ScrollCard() {
  return (
    <motion.div
      className="overflow-hidden flex justify-center items-center relative pt-5"
      // initial: 초기 상태 (화면 밖에 있을 때)
      initial="offscreen"
      // whileInView: 뷰포트에 보일 때 적용할 상태
      whileInView="onscreen"
      // viewport: 언제 애니메이션을 트리거할지 설정
      viewport={{
        once: false, // false: 스크롤할 때마다 애니메이션 실행, true: 한 번만 실행
        amount: 0.8, // 0.8 = 요소의 80%가 보일 때 트리거 (0~1 사이 값)
      }}
    >
      {/* 배경 그라데이션 효과 */}
      <div
        className="absolute inset-0 rounded-t-[100px]"
        style={{
          background:
            "linear-gradient(306deg, hsl(340, 100%, 50%), hsl(10, 100%, 50%))",
        }}
      />

      {/* 실제 카드 - variants를 사용한 애니메이션 */}
      <motion.div
        className="relative text-[164px] w-[300px] h-[430px] flex justify-center items-center rounded-[20px] bg-gray-100 shadow-2xl"
        // variants: 애니메이션 상태들을 정의한 객체
        variants={cardVariants}
        // transformOrigin: 회전/변형의 기준점 설정
        style={{ transformOrigin: "10% 60%" }}
      >
        🍅
      </motion.div>
    </motion.div>
  );
}

/**
 * 카드 애니메이션 Variants
 *
 * Variants는 애니메이션 상태를 재사용 가능하게 정의하는 패턴입니다.
 * initial과 whileInView에서 문자열로 참조할 수 있습니다.
 */
const cardVariants: Variants = {
  // offscreen: 화면 밖에 있을 때의 상태
  offscreen: {
    y: 300, // 아래로 300px 이동
    opacity: 0, // 투명하게
  },
  // onscreen: 화면에 보일 때의 상태
  onscreen: {
    y: 50, // 위로 올라오기 (최종 위치)
    opacity: 1, // 불투명하게
    rotate: -10, // 시계 반대방향으로 10도 회전
    transition: {
      type: "spring", // 스프링 애니메이션 (탄성 효과)
      bounce: 0.4, // 튕김 정도 (0~1, 높을수록 많이 튕김)
      duration: 0.8, // 애니메이션 지속 시간 (초)
    },
  },
};

/**
 * 학습 포인트:
 *
 * 1. whileInView vs animate:
 *    - animate: 컴포넌트가 마운트되면 즉시 실행
 *    - whileInView: 스크롤해서 요소가 보일 때 실행
 *
 * 2. viewport 옵션:
 *    - once: true면 한 번만, false면 스크롤할 때마다
 *    - amount: 0.5 = 50% 보일 때, 1 = 100% 보일 때
 *    - margin: "100px" = 뷰포트 경계를 100px 확장
 *
 * 3. variants 패턴의 장점:
 *    - 코드 재사용성
 *    - 부모-자식 간 애니메이션 조율 가능
 *    - 가독성 향상
 *
 * 4. 실험해보기:
 *    - amount 값을 0.3, 0.5, 1로 변경해보세요
 *    - bounce 값을 0.1, 0.7로 변경해보세요
 *    - rotate 값을 10, -30으로 변경해보세요
 *    - once를 true로 변경해보세요
 */
