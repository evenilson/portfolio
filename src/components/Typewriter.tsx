import { useTypeWriter } from "@/hooks";
import { ABOUT_ME_LIST } from "@/utils/constants";

export function TypeWriter() {
  
  const displayed = useTypeWriter({
    texts: ABOUT_ME_LIST,
    writeSpeed: 50,
    loop: true
  })

  return <>
    {displayed}
    {
      <div className="max-h-full h-14 w-1 ml-4 bg-blue-800 dark:bg-blue-400 inline-block animate-pulseFull"></div>
    }
  </>
}