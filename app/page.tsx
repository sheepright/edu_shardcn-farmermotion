import ScrollTrigger_motion from "@/component/motion/ScrollTrigger_motion";
import Start_motion from "@/component/motion/Start_motion";
import Card_motion from "@/component/motion/Card_motion";
import Edu from "@/component/Edu";
import ScrollLinked_motion from "@/component/motion/ScrollLinked_motion";
import LodingDot_motion from "@/component/motion/LodingDot_motion";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
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

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4 text-center">
          2. shadcn/ui Card + Motion 애니메이션
        </h2>
        <Card_motion />
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4 text-center">
          3. 스크롤 기반 애니메이션
        </h2>
        <ScrollTrigger_motion />
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4 text-center">4. 응용 연습</h2>
        <Edu />
      </div>

      <div className="m-16">
        <h2 className="text-xl font-semibold mb-4 text-center">
          5. 로딩 애니메이션
        </h2>
        <LodingDot_motion />
      </div>
    </div>
  );
}
