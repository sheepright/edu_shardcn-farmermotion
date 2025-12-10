// "use client";

import { Button } from "@/components/ui/button";
import { HiAcademicCap } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
// import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  // const router = useRouter();

  // const handleStudyClick = () => {
  //   router.push("/edu");
  // };

  return (
    <div className="flex justify-center items-center mt-10 gap-8">
      <Link href="/project">
        <Button variant="outline" size="lg">
          <HiHeart color="purple" /> Project Page
        </Button>
      </Link>

      {/* Router 방식으로 연결하는 방법 */}
      {/* <Button variant="outline" size="lg" onClick={handleStudyClick}>
        <HiAcademicCap /> Study Page
      </Button> */}

      <Link href="/edu">
        <Button variant="outline" size="lg">
          <HiAcademicCap /> Study Page
        </Button>
      </Link>
    </div>
  );
}
