import { useTranslation } from 'next-i18next';
import Button from './Common/Button';
import PaddedContainer from './Common/PaddedContainer';

export default function Main() {
    const { t, i18n } = useTranslation();
    return (
        <PaddedContainer biggerPadding>
            <div className="h-full flex flex-col lg:flex-row justify-between items-center gap-12 max-w-7xl m-auto">
                <div className="flex flex-col gap-12 w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        {t('common:hero-text')}
                    </h2>
                    <p className="text-md sm:text-xl">{t('common:hero-subtext')}</p>
                    <div className="flex gap-4 flex-wrap items-center justify-center">
                        <Button
                            size="lg"
                            color="primary"
                            moves
                            className="w-full md:w-fit"
                            cta
                        >
                            Get Started
                        </Button>
                        <Button
                            size="lg"
                            color="secondary"
                            moves
                            className="w-full md:w-fit"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="text-text text-lg w-1/2 hidden lg:flex flex-col select-none gap-6">
                    <div className="p-4 max-w-lg mr-28 flex flex-col bg-primary rounded-lg">
                        <p className="">
                            Hallo! Wie geht es dir? Ich bin hier, um dir beim
                            Deutschlernen zu helfen. Mach dir keine Sorgen, wenn
                            du Fehler machst. Ich werde sie korrigieren und dir
                            dabei helfen, besser zu werden. <br />
                            Also, erzähl mir ein wenig über dich. Woher kommst
                            du und warum möchtest du Deutsch lernen?
                        </p>
                    </div>
                    <div className="flex flex-row-reverse bg-accent p-4 rounded-lg max-w-lg ml-28 self-end">
                        <p className="">
                            Ich lerne Deutsch, weil ich bald nach Deutschland
                            gehen möchte
                        </p>
                    </div>
                    <div className="p-4 max-w-lg mr-28 flex flex-col bg-primary rounded-lg">
                        <p className="">
                            Das ist großartig! Es freut mich zu hören, dass du
                            nach Deutschland gehen möchtest. Deutschland hat
                            eine reiche Kultur, interessante Städte und viele
                            spannende Möglichkeiten. Welche Stadt in Deutschland
                            möchtest du besuchen oder wo möchtest du vielleicht
                            sogar leben?
                        </p>
                    </div>
                </div>
            </div>
        </PaddedContainer>
    );
}
