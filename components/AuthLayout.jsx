import Layout from '@/components/Layout';

export default function AuthLayout({children}) {
    return (
        <div className="relative flex items-center justify-center bg-background text-text h-screen">
            <div className="m-auto rounded-lg w-full h-full sm:w-4/5 sm:h-3/4 grid lg:grid-cols-2">
                <div className="hidden lg:flex items-center justify-center p-6 bg-secondary rounded-s-lg">
                    <div className="text-text text-sm hidden lg:flex flex-col select-none gap-6">
                        <div className="p-4 max-w-lg mr-28 flex flex-col bg-primary rounded-lg">
                            <p className="">
                                Hallo! Wie geht es dir? Ich bin hier, um dir
                                beim Deutschlernen zu helfen. Mach dir keine
                                Sorgen, wenn du Fehler machst. Ich werde sie
                                korrigieren und dir dabei helfen, besser zu
                                werden. <br />
                                Also, erzähl mir ein wenig über dich. Woher
                                kommst du und warum möchtest du Deutsch lernen?
                            </p>
                        </div>
                        <div className="flex flex-row-reverse bg-accent p-4 rounded-lg max-w-lg ml-28 self-end">
                            <p className="">
                                Ich lerne Deutsch, weil ich bald nach
                                Deutschland gehen möchte
                            </p>
                        </div>
                        <div className="p-4 max-w-lg mr-28 flex flex-col bg-primary rounded-lg">
                            <p className="">
                                Das ist großartig! Es freut mich zu hören, dass
                                du nach Deutschland gehen möchtest. Deutschland
                                hat eine reiche Kultur, interessante Städte und
                                viele spannende Möglichkeiten. Welche Stadt in
                                Deutschland möchtest du besuchen oder wo
                                möchtest du vielleicht sogar leben?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly bg-background sm:bg-white rounded-lg lg:rounded-s-none">
                    <div className="text-center md:py-10 text-background">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
