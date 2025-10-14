import Image from 'next/image';

export default function IdCard() {
    return (
        <div className='flex items-end gap-3'>
            <div className='relative w-[50px] h-[50px] rounded-full overflow-hidden'>
                <Image 
                    src="/images/my-dp-image.jpg"
                    alt="ID Card"
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </div>
            <div className='space-y-1'>
                <h1 className='text-2xl hidden md:block'>Cédric Murairi</h1>
                <h1 className='text-2xl block md:hidden'>Cédric M.</h1>
                <p className='text-xs block md:hidden'>Founder of CodeXtreme</p>
                <p className='text-xs hidden md:block'>Founder and Head Honcho of CodeXtreme</p>
            </div>
        </div>
    );
}