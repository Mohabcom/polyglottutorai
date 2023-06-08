import React from 'react'
import PaddedContainer from './PaddedContainer'
import ScrollToTop from 'react-scroll-to-top';
import { AiOutlineUp } from 'react-icons/ai';

export default function ScrollTop() {
    return (
        <PaddedContainer className="h-0">
            <ScrollToTop
                smooth
                className="scrolltotop text-background"
                component={
                    <div className="bg-primary rounded-full flex items-center justify-center w-full h-full">
                        <AiOutlineUp className="mx-auto w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                }
            />
        </PaddedContainer>
    );
}
