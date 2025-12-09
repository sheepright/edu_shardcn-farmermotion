import ScrollTrigger_motion from "@/component/motion/ScrollTrigger";
import Start_motion from "@/component/motion/Start";
import Card_motion from "@/component/motion/Card";
import Edu from "@/component/Edu";
import ScrollLinked_motion from "@/component/motion/ScrollLinked";
import LodingDot_motion from "@/component/motion/LodingDot";
import FollowPointer from "@/component/motion/followPointer";
import Number from "@/component/motion/Number";
import Onoff from "@/component/motion/Onoff";
import Otp from "@/component/shadcn/Otp";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <ScrollLinked_motion />
      <div className="mt-5">
        <div className="font-bold text-3xl">애니메이션 연습</div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-center">
          1. 기본 Motion 애니메이션
        </h2>
        <Start_motion />
      </div>

      <div className="flex flex-col justify-center items-center mt-16 gap-16">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            2. shadcn/ui Card + Motion 애니메이션
          </h2>
          <Card_motion />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            3. 스크롤 트리거 애니메이션
          </h2>
          <ScrollTrigger_motion />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            4. 응용 연습
          </h2>
          <Edu />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            5. 로딩 애니메이션
          </h2>
          <LodingDot_motion />
        </div>

        <div className="w-full h-50">
          <h2 className="text-xl font-semibold mb-4 text-center">
            6. 마우스 포인터 애니메이션
          </h2>
          <FollowPointer />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            7. 숫자 애니메이션
          </h2>
          <Number />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            8. 온 오프 스위치
          </h2>
          <Onoff />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            9. OTP 컴포넌트
          </h2>
          <Otp />
        </div>
      </div>
    </div>
  );
}
