export default function Loading({ ativo }: { ativo: boolean }) {

    if (!ativo) return null

    if (ativo) {
        return (
            <div className="bg-white/80 fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center">

                <div className="">
                    <div className="w-full gap-x-2 flex justify-center items-center animate-pulse">
                        <div
                            className="w-7 bg-[#d991c2]  h-7 rounded-full animate-bounce"
                        ></div>
                        <div
                            className="w-7 h-7 [animation-delay:200ms] bg-[#9869b8] rounded-full animate-bounce"
                        ></div>
                        <div
                            className="w-7 h-7 [animation-delay:400ms] bg-[#6756cc] rounded-full animate-bounce"
                        ></div>
                    </div>
                    <p className="animate-pulse [animation-delay:100ms] text-2xl mt-4 ">Carregando....</p>
                </div>


            </div>
        )
    }
}