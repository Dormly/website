import Image from "next/image";
import TitleContentBox from "../components/TitleContentBox";
import DescriptionText from "../components/DescriptionText"
import { dmSerif, geistSans, inter } from "../ui/fonts";

export default function About() {
  return (
    <div className="">
      <div className="mt-2 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Login Easier</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Sign In Fast, On Your Terms
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Login to our products using your organizations SSO, or any of our commonly supported Oauth intergrations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          < div key="Google SSO" className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    {/*
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                    */}
                  </div>
                  Google Oauth
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">Enables Google OAuth sign in.</dd>
              </div>
          </dl>
        </div>
      </div>
    </div>
  );
}