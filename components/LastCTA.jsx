import React from 'react';
import PaddedContainer from './Common/PaddedContainer';
import Button from './Common/Button';
import { useTranslation } from 'next-i18next';
import { IoIosChatboxes } from 'react-icons/io';

export default function LastCTA() {
    const { t, i18n } = useTranslation();
    return (
        <PaddedContainer
            biggerPadding
            className="flex items-center justify-center"
        >
            <div className="relative max-w-7xl rounded-lg w-full flex flex-col md:flex-row justify-around gap-4">
                <div className="z-10 w:full lg:w-1/3 grow p-4 md:p-8">
                    <IoIosChatboxes className="w-20 md:w-64 h-20 md:h-64 grow m-auto" />
                </div>
                <div className="flex flex-col z-10 h-1/2 w-full md:w-2/3 self-end p-4 md:p-8 text-center ">
                    <h4 className="mb-4 text-xl lg:text-4xl">{t('common:hero-text')}</h4>
                    <div className="flex w-full items-center justify-center">
                        <Button color="primary" moves className="w-full md:w-fit md:text-xl" cta>
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="bg-primary absolute w-full h-full md:h-[67.5%] bottom-0 left-0 opacity-50 rounded-lg"></div>
            </div>
        </PaddedContainer>
    );
}
