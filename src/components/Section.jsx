'use client';
import { useEffect, useRef } from 'react'

import CardV from '@/components/CardV'

export default function Button({ data }) {
    const refFirst = useRef(null);

    const prev = () => {
        requestAnimationFrame(() => {
            const scrollLeft = refFirst.current.scrollLeft;
            const itemWidth = parseInt(
                getComputedStyle(refFirst.current.children[0]).width
            );
            refFirst.current.scrollLeft = scrollLeft - itemWidth * 3;
        });
    };

    const next = () => {
        requestAnimationFrame(() => {
            const scrollLeft = refFirst.current.scrollLeft;
            const itemWidth = parseInt(
                getComputedStyle(refFirst.current.children[0]).width
            );
            refFirst.current.scrollLeft = scrollLeft + itemWidth * 3;
        });
    };

    return (
        <div className='relative'>
            <button className='absolute text-[20px] text-gray-500 h-[50px] w-[50px] rounded-full inline-block left-[-25px] top-0 bottom-0 my-auto bg-[#00000010] z-20' onClick={prev}>{'<'}</button>
            <div className='relative grid gap-16 py-5 mb-20 overflow-x-scroll scroll-smooth' ref={refFirst} style={{ gridTemplateColumns: `repeat(${data.length}, 250px)` }}>
                {data.map((i, index) => <CardV i={i} />)}
            </div>
            <button className='absolute text-[20px] text-gray-500 h-[50px] w-[50px] rounded-full inline-block right-[-25px] top-0 bottom-0 my-auto bg-[#00000010] z-20' onClick={next}>{'>'}</button>
        </div>
    )
}
