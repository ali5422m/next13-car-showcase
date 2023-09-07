import {Dialog, Transition} from "@headlessui/react";
import {Fragment} from "react";
import Image from "next/image";


interface LoginProps {
    isOpen: boolean;
    closeModal: () => void;
}


const Login = ({isOpen, closeModal}: LoginProps) => {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25'/>
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-out duration-300'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel
                                className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                <button
                                    type='button'
                                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                    onClick={closeModal}
                                >
                                    <Image
                                        src='/close.svg'
                                        alt='close'
                                        width={20}
                                        height={20}
                                        className='object-contain'
                                    />
                                </button>
                                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                        <div className="">
                                            <Image
                                                src='/logo.svg'
                                                alt='logo'
                                                width={118}
                                                height={18}
                                                className='object-contain'
                                            />
                                        </div>
                                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                            Sign in to your account
                                        </h2>
                                    </div>

                                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <form className="space-y-6" action="#" method="POST">
                                            <div>
                                                <label htmlFor="email"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Email address
                                                </label>
                                                <div className="mt-2">
                                                    <input id="email" name="email" type="email"
                                                           autoComplete="email" required
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="password"
                                                           className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                                    <div className="text-sm">
                                                        <a href="#"
                                                           className="font-semibold text-[#2B59FF] hover:text-[#2B59CC]">Forgot
                                                            password?</a>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <input id="password" name="password" type="password"
                                                           autoComplete="current-password" required
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <button type="submit"
                                                        className="flex w-full justify-center rounded-md bg-[#2B59FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2B59CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                                    in
                                                </button>
                                            </div>
                                        </form>

                                        <p className="mt-10 text-center text-sm text-gray-500">
                                            Not a member?
                                            <a href="#"
                                               className="font-semibold leading-6 text-[#2B59FF] hover:text-[#2B59CC]">
                                                Register
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Login;