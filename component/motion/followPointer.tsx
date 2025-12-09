"use client";

import { frame, motion, useSpring } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

/**
 * ============================================================
 * 버전 1: 전체 화면에서 작동하는 마우스 포인터 (주석 처리)
 * ============================================================
 */
// export default function FollowPointer() {
//   // DOM 요소에 접근하기 위한 ref 생성
//   const ref = useRef<HTMLDivElement>(null);
//
//   // 커스텀 훅을 사용하여 마우스 위치를 추적하는 x, y 값 가져오기
//   const { x, y } = useFollowPointerGlobal(ref);
//
//   return (
//     <motion.div
//       ref={ref}
//       className="w-25 h-25 bg-[#ff0088] rounded-full"
//       style={{ x, y }} // 마우스 위치에 따라 동적으로 변하는 x, y 좌표
//     />
//   );
// }

/**
 * ============================================================
 * 버전 2: 컨테이너 범위 내에서만 작동하는 마우스 포인터 (현재 사용 중)
 * ============================================================
 */
/**
 * 마우스 포인터를 따라다니는 공 컴포넌트
 *
 * 이 컴포넌트는 사용자의 마우스 커서를 부드럽게 따라다니는 원형 요소를 렌더링합니다.
 * useSpring을 사용하여 자연스러운 스프링 애니메이션 효과를 적용합니다.
 * 컨테이너 범위 내에서만 작동합니다.
 */
export default function FollowPointer() {
  // 컨테이너 영역에 접근하기 위한 ref
  const containerRef = useRef<HTMLDivElement>(null);
  // 움직이는 공 요소에 접근하기 위한 ref
  const ballRef = useRef<HTMLDivElement>(null);

  // 커스텀 훅을 사용하여 마우스 위치를 추적하는 x, y 값 가져오기
  const { x, y } = useFollowPointer(containerRef, ballRef);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full border overflow-hidden"
    >
      <motion.div
        ref={ballRef}
        className="absolute w-15 h-15 bg-blue-300 rounded-full pointer-events-none"
        style={{ x, y }} // 마우스 위치에 따라 동적으로 변하는 x, y 좌표
      />
    </div>
  );
}

/**
 * 스프링 애니메이션 설정
 *
 * - damping: 감쇠 계수 (3) - 값이 클수록 빠르게 멈춤
 * - stiffness: 강성 계수 (50) - 값이 클수록 빠르게 반응
 * - restDelta: 정지 판단 임계값 (0.001) - 이 값 이하로 움직임이 작아지면 애니메이션 정지
 */
const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

/**
 * ============================================================
 * 버전 1: 전체 화면용 커스텀 훅 (주석 처리)
 * ============================================================
 */
/**
 * 마우스 포인터를 따라다니는 커스텀 훅 (전체 화면)
 *
 * @param ref - 추적할 DOM 요소의 ref
 * @returns x, y 좌표를 담은 MotionValue 객체
 */
// export function useFollowPointerGlobal(ref: RefObject<HTMLDivElement | null>) {
//   const x = useSpring(0, spring);
//   const y = useSpring(0, spring);
//
//   useEffect(() => {
//     if (!ref.current) return;
//
//     const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
//       const element = ref.current!;
//
//       frame.read(() => {
//         // 요소의 중심을 마우스 커서 위치로 이동
//         // clientX - element.offsetLeft: 요소의 부모 기준 상대 X 좌표
//         // - element.offsetWidth / 2: 요소의 중심점으로 보정
//         x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
//         y.set(clientY - element.offsetTop - element.offsetHeight / 2);
//       });
//     };
//
//     // 전역 window에 마우스 이동 이벤트 리스너 등록
//     window.addEventListener("pointermove", handlePointerMove);
//
//     return () => window.removeEventListener("pointermove", handlePointerMove);
//   }, []);
//
//   return { x, y };
// }

/**
 * ============================================================
 * 버전 2: 컨테이너 범위용 커스텀 훅 (현재 사용 중)
 * ============================================================
 */
/**
 * 마우스 포인터를 따라다니는 커스텀 훅 (컨테이너 범위 내에서만 작동)
 *
 * @param containerRef - 마우스 추적 범위를 제한할 컨테이너 요소의 ref
 * @param ballRef - 움직일 공 요소의 ref
 * @returns x, y 좌표를 담은 MotionValue 객체
 *
 * 이 훅은 다음과 같은 작업을 수행합니다:
 * 1. useSpring을 사용하여 부드러운 애니메이션을 위한 x, y 값 생성
 * 2. 컨테이너 내부에서만 마우스 이동 이벤트를 감지
 * 3. 컨테이너 기준 상대 좌표로 요소의 위치 업데이트
 * 4. frame.read()를 사용하여 성능 최적화 (브라우저의 렌더링 사이클과 동기화)
 */
export function useFollowPointer(
  containerRef: RefObject<HTMLDivElement | null>,
  ballRef: RefObject<HTMLDivElement | null>
) {
  // 스프링 애니메이션이 적용된 x, y 좌표 생성 (초기값 0)
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    // ref가 아직 연결되지 않았으면 early return
    if (!containerRef.current || !ballRef.current) return;

    const container = containerRef.current;
    const ball = ballRef.current;

    /**
     * 마우스 이동 이벤트 핸들러 (컨테이너 내부에서만 작동)
     *
     * @param clientX - 뷰포트 기준 마우스 X 좌표
     * @param clientY - 뷰포트 기준 마우스 Y 좌표
     */
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      /**
       * frame.read()를 사용하여 DOM 읽기 작업을 최적화
       * 브라우저의 렌더링 사이클과 동기화하여 레이아웃 thrashing 방지
       */
      frame.read(() => {
        // 컨테이너의 위치 정보 가져오기
        const containerRect = container.getBoundingClientRect();

        // 컨테이너 기준 상대 좌표 계산
        // clientX - containerRect.left: 컨테이너 내부의 X 좌표
        // - ball.offsetWidth / 2: 공의 중심점으로 보정
        const relativeX = clientX - containerRect.left - ball.offsetWidth / 2;
        const relativeY = clientY - containerRect.top - ball.offsetHeight / 2;

        // 계산된 상대 좌표로 위치 업데이트
        x.set(relativeX);
        y.set(relativeY);
      });
    };

    // 컨테이너에만 마우스 이동 이벤트 리스너 등록 (범위 제한)
    container.addEventListener("pointermove", handlePointerMove);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거 (메모리 누수 방지)
    return () =>
      container.removeEventListener("pointermove", handlePointerMove);
  }, []); // 빈 의존성 배열: 컴포넌트 마운트 시 한 번만 실행

  return { x, y };
}
