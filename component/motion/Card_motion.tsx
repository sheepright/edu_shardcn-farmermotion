"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * shadcn/ui Card + Motion 애니메이션 결합 예제
 *
 * 핵심 개념:
 * 1. motion() 함수로 기존 컴포넌트를 애니메이션 가능하게 만들기
 * 2. shadcn/ui 컴포넌트에 애니메이션 적용하기
 * 3. 폼 요소에 순차적 애니메이션 적용하기 (stagger)
 */
export default function Card_motion() {
  return (
    <div className="flex gap-10 flex-wrap justify-center p-10">
      {/* 예제 1: 기본 페이드인 카드 */}
      <AnimatedCard1 />

      {/* 예제 2: 스케일 & 회전 카드 */}
      <AnimatedCard2 />

      {/* 예제 3: 호버 인터랙션 카드 */}
      <AnimatedCard3 />
    </div>
  );
}

/**
 * 예제 1: 기본 페이드인 애니메이션
 * - motion() 함수로 Card 컴포넌트를 래핑
 * - 부드러운 페이드인 효과
 */
function AnimatedCard1() {
  // motion() 함수로 Card를 애니메이션 가능한 컴포넌트로 변환
  const MotionCard = motion(Card);

  return (
    <MotionCard
      className="w-full max-w-sm"
      // 초기 상태: 투명하고 아래에 위치
      initial={{ opacity: 0, y: 50 }}
      // 최종 상태: 불투명하고 원래 위치
      animate={{ opacity: 1, y: 0 }}
      // 전환 설정
      transition={{ duration: 0.5 }}
    >
      <CardHeader>
        <CardTitle>페이드인 카드</CardTitle>
        <CardDescription>
          부드럽게 나타나는 기본 애니메이션 예제입니다
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          initial과 animate 속성을 사용하여 카드가 아래에서 위로 올라오면서
          나타납니다.
        </p>
      </CardContent>
    </MotionCard>
  );
}

/**
 * 예제 2: 스케일 & 회전 애니메이션
 * - 크기 변화와 회전을 결합
 * - 스프링 효과로 탄성 있는 움직임
 */
function AnimatedCard2() {
  const MotionCard = motion(Card);

  return (
    <MotionCard
      className="w-full max-w-sm"
      // 초기: 작고 회전된 상태
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      // 최종: 원래 크기와 각도
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        // 스프링 효과 적용
        type: "spring",
        bounce: 0.4,
      }}
    >
      <CardHeader>
        <CardTitle>스프링 카드</CardTitle>
        <CardDescription>
          통통 튀는 스프링 효과가 적용된 카드입니다
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          scale과 rotate를 함께 사용하고 spring 타입으로 탄성 효과를 줍니다.
        </p>
      </CardContent>
    </MotionCard>
  );
}

/**
 * 예제 3: 호버 인터랙션 + 폼 애니메이션
 * - 카드 호버 시 확대 효과
 * - 버튼에 인터랙티브 애니메이션
 * - 실제 로그인 폼 예제
 */
function AnimatedCard3() {
  const MotionCard = motion(Card);
  const MotionButton = motion(Button);

  return (
    <MotionCard
      className="w-full max-w-sm"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      // 호버 시 살짝 위로 올라가고 그림자 강화
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <CardHeader>
        <CardTitle>인터랙티브 로그인 카드</CardTitle>
        <CardDescription>
          마우스를 올려보세요! 호버 효과가 적용됩니다
        </CardDescription>
        <CardAction>
          <Button variant="link">회원가입</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">비밀번호</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  비밀번호 찾기
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {/* 버튼에도 애니메이션 적용 */}
        <MotionButton
          type="submit"
          className="w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          로그인
        </MotionButton>
        <MotionButton
          variant="outline"
          className="w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Google로 로그인
        </MotionButton>
      </CardFooter>
    </MotionCard>
  );
}

/**
 * 학습 포인트:
 *
 * 1. motion() 함수 사용법:
 *    const MotionCard = motion(Card)
 *    - 기존 React 컴포넌트를 Motion 컴포넌트로 변환
 *    - shadcn/ui 같은 서드파티 컴포넌트에도 적용 가능
 *
 * 2. 여러 속성 동시 애니메이션:
 *    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
 *    - 여러 속성을 한 번에 애니메이션 가능
 *
 * 3. delay로 순차 실행:
 *    transition={{ delay: 0.2 }}
 *    - 각 카드에 다른 delay를 주면 순차적으로 나타남
 *
 * 4. whileHover로 인터랙션:
 *    whileHover={{ y: -5 }}
 *    - 사용자 인터랙션에 반응하는 UI
 *    - 버튼, 카드 등에 적용하면 더 생동감 있는 UI
 *
 * 5. 실전 활용:
 *    - 로그인/회원가입 폼
 *    - 상품 카드 리스트
 *    - 대시보드 위젯
 *    - 모달/다이얼로그
 *
 * 6. 실험해보기:
 *    - delay 값을 0, 0.5, 1로 변경
 *    - whileHover의 y 값을 -10, -20으로 변경
 *    - 새로운 속성 추가: whileHover={{ scale: 1.05, y: -5 }}
 *    - Input에도 motion() 적용해보기
 */
