import Scroll_motion from "@/component/motion/Scroll_motion";
import Start_motion from "@/component/motion/Start_motion";
import Card_motion from "@/component/motion/Card_motion";
import Edu from "@/component/Edu";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
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
        <Scroll_motion />
      </div>

      <div className="mt-16 mb-20">
        <h2 className="text-xl font-semibold mb-4 text-center">4. 응용 연습</h2>
        <Edu />
      </div>
    </div>
  );
}
