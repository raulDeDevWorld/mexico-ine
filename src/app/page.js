'use client'
// import { readUserAllData, updateUserData } from '@/supabase/utils'
import { useUser } from '@/context/Context.js'

import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Card from '@/components/Card'
import CardV from '@/components/CardV'

import CardM from '@/components/CardM'
// import QRreader from '@/components/QRreader'
import Tag from '@/components/Tag'
import Cart from '@/components/Cart'
import Modal from '@/components/Modal'

import { useRouter } from 'next/navigation';

// import { WithAuth } from '@/HOCs/WithAuth'
import { useEffect } from 'react'
// import QrcodeDecoder from 'qrcode-decoder';
// import { QRreaderUtils } from '@/utils/QRreader'
import { useState } from 'react'

function Home() {
    const { user, userDB, cart, modal, setModal, productDB, setUserProduct, setUserItem, item, filter, setFilter, filterQR, setTienda, setFilterQR, recetaDBP, setRecetaDBP, tienda } = useUser()
    const [disponibilidad, setDisponibilidad] = useState('Todas')
    const [categoria, setCategoria] = useState('Todas')
    const router = useRouter()
    const [filterNav, setFilterNav] = useState(false)

    function handlerRedirect() {
        router.push('/Home')
    }


    return (

        <main className="p-5 bg-purple-100 lg:p-[100px] h-screen">
            <h1 className='font-bold text-[25px]'>Gobierno de datos <span className='block mt-5 w-[80px] h-[15px] bg-[#B70073]'></span></h1>
            <br />
            <br />
            <br />
            <br />
            <h2>Se define de tres sencillos conceptos</h2>
            <br />
            <div className='grid grid-cols-2'>
                <div className='pl-[50px]'>

                    <h3 className='flex items-center font-bold'>
                        <span className='inline-block text-white bg-violet-700 h-[35px] w-[35px] mr-5 rounded-full text-center py-1'>1</span>
                        Gestión y administración
                    </h3>
                    <br />
                    <h3 className='flex items-center font-bold'>
                        <span className='inline-block text-white bg-violet-700 h-[35px] w-[35px] mr-5 rounded-full text-center py-1'>2</span>
                        Transformación
                    </h3>
                    <br />

                    <h3 className='flex items-center font-bold'>
                        <span className='inline-block text-white bg-violet-700 h-[35px] w-[35px] mr-5 rounded-full text-center py-1'>3</span>
                        Conocimiento
                    </h3>

                </div>
                <div className='flex items-center'>
                    <button className='bg-[#B70073] text-white px-5 py-3' onClick={handlerRedirect}>Datos maestros</button>
                </div>
            </div>
            <br />
            <p>
                !Los datos son el activo mas importante de una organizacion y,
                <b>sin norma y calidad de datos, la organización no funciona!</b>.  Valeh Nazemoff.
            </p>
            <br />
            <br />
            <button className='bg-[#B70073] text-white px-5 py-3'>Ver estrategia</button>

        </main>
    )
}

export default Home











































// 'use client'
// import { useUser } from '@/context/Context'
// // import { onAuth, signInWithEmailAndPassword } from '@/supabase/utils'
// import { useEffect, useState, useRef } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Button from '@/components/Button'
// import Input from '@/components/Input'
// import Error from '@/components/Error'
// import Video from '@/components/Video'
// import { useRouter } from 'next/navigation';


// export default function Home() {
//   const { user, introVideo, setIntroVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

//   const router = useRouter()



//   const signInHandler = (e) => {
//     e.preventDefault()
//     router.push('/Home')

//   }

//   // useEffect(() => {
//   //   // createIndexedDB()
//   //   introVideo == undefined ? readIndexedDB() : ''
//   //   user === undefined && onAuth(setUserProfile)
//   //   if (user !== undefined && user !== null) router.replace('/Cliente')
//   // }, [user])

//   return (
//     <div className="w-screen flex min-h-screen items-end justify-between"
//       style={{
//         backgroundImage: 'url(/bg.svg)',
//         backgroundPosition: 'center top',
//         backgroundAttachment: 'fixed',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover'

//       }}
//     >
//       <form className={`fixed bottom-[35px] space-y-3 lg:space-y-3 w-[100%] rounded-[30px]  h-auto py-8 lg:p-10 p-5`} onSubmit={signInHandler} >
//         <h5 className="text-[24px] text-center text-white">Iniciar Sesión</h5>
//         <div>
//           <label htmlFor="email" className="block mb-2 text-[14px] text-left font-medium text-white">Email</label>
//           <Input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
//         </div>
//         <div>
//           <label htmlFor="password" className="block mb-2 text-[14px] text-left  font-medium text-white">Contraseña</label>
//           <Input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
//         </div>
//         <div className="flex items-start">
//           <a href="#" className="ml-auto text-white text-[14px] text-gray-100 hover:underline">Olvidaste tu contraseña?</a>
//         </div>
//         <Button type="submit" theme="Transparent">Iniciar Sesión</Button>
//         <div className="text-[14px] text-center font-medium text-white">No tienes una cuenta? <Link href="/SignUp" className="text-gray-100 hover:underline">Registrate</Link ></div>
//         <Button type="submit" theme="Google">Continuar con Google</Button>
//       </form>
//     </div>
//   )
// }