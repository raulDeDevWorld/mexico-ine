'use client';

import Button from '@/components/Button'
import { useUser } from '@/context/Context.js'
import { useRouter } from 'next/navigation';

export default function Card({ i }) {

    const { user, userDB, distributorPDB, setUserDistributorPDB, setUserItem, item, setUserData, setUserSuccess, cart, setUserCart, modal, setModal } = useUser()
    const router = useRouter()
function redirect () {
    router.push('/Dataset')
}

    return (
        <div class="relative w-[250px] flex flex-col justify-center bg-white h-[480px] max-w-[500px] rounded-[15px] border border-gray-200 rounded-[20px] shadow mt-5 py-4 overflow-hidden" onClick={redirect}>
            <div className='absolute top-[-50px] right-[-50px] bg-[#B70073] w-[100px] h-[100px] rounded-full'></div>
            <div className='absolute bottom-[-50px] left-[-50px] bg-[#B70073] w-[100px] h-[100px] rounded-full'></div>
            <div className='p-10'>
                <img src={i.url} className='w-full' alt="" />
            </div>
            <div class=" p-4  flex flex-col justify-between leading-normal">
                <div class="">
                    <div class=" font-bold text-[16px] mb-2 text-gray-950">
                        {i.title}
                    </div>
                </div>
                <p class="text-gray-700 text-base py-[10px]">{i.subtitle}</p>
                <div class="">
                    <p class="text-gray-700 text-[14px]">{i.descripcion}</p>
                </div>
            </div>
            <div className='w-full flex justify-between  items-center p-2'>
                <span></span>
                <div className='flex justify-between align-center'>
                    <Button theme='MiniPrimary' >Button</Button>
                </div>
            </div>
        </div>
    )
}
