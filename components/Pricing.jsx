import React from 'react'
import PaddedContainer from './Common/PaddedContainer';

export default function Pricing() {
  return (
      <PaddedContainer
          biggerPadding
          className="flex items-center justify-center"
      >
          <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Plans & Pricing
              </h2>
              <h3 className="text-lg md:text-xl mb-8">
                  The tool is 100% free! This is just a generic section.
              </h3>
              <div className="flex flex-col md:flex-row justify-between w-full gap-4 max-w-7xl">
                  <div className="flex flex-col-reverse justify-around items-center rounded-lg p-4 sm:p-8 shadow-md relative md:w-1/3 lg:w-1/6 grow">
                      <div className="flex flex-col items-center justify-around">
                          <h4 className="text-lg md:text-xl xl:text-3xl mb-4 font-bold z-10">
                              Tailor Your Language Journey to Your Preferences
                          </h4>
                          <p className="z-10 text-sm md:text-lg xl:text-2xl">
                              Customize your learning experience by selecting
                              preferred accents or dialects for conversation
                              practice. Adapt the app to suit your unique
                              language goals and preferences.
                          </p>
                      </div>
                      <div className="bg-primary absolute w-full h-full top-0 left-0 opacity-50 rounded-lg"></div>
                  </div>
                  <div className="flex flex-col-reverse justify-around items-center rounded-lg p-4 sm:p-8 shadow-md relative md:w-1/3 lg:w-1/6 grow">
                      <div className="flex flex-col items-center justify-around">
                          <h4 className="text-lg md:text-xl xl:text-3xl mb-4 font-bold z-10">
                              Tailor Your Language Journey to Your Preferences
                          </h4>
                          <p className="z-10 text-sm md:text-lg xl:text-2xl">
                              Customize your learning experience by selecting
                              preferred accents or dialects for conversation
                              practice. Adapt the app to suit your unique
                              language goals and preferences.
                          </p>
                      </div>
                      <div className="bg-primary absolute w-full h-full top-0 left-0 opacity-50 rounded-lg"></div>
                  </div>
                  <div className="flex flex-col-reverse justify-around items-center rounded-lg p-4 sm:p-8 shadow-md relative md:w-1/3 lg:w-1/6 grow">
                      <div className="flex flex-col items-center justify-around">
                          <h4 className="text-lg md:text-xl xl:text-3xl mb-4 font-bold z-10">
                              Tailor Your Language Journey to Your Preferences
                          </h4>
                          <p className="z-10 text-sm md:text-lg xl:text-2xl">
                              Customize your learning experience by selecting
                              preferred accents or dialects for conversation
                              practice. Adapt the app to suit your unique
                              language goals and preferences.
                          </p>
                      </div>
                      <div className="bg-primary absolute w-full h-full top-0 left-0 opacity-50 rounded-lg"></div>
                  </div>
              </div>
          </div>
      </PaddedContainer>
  );
}
