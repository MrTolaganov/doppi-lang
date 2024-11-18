import { buttonVariants } from '@/components/ui/button'
import { page_routes } from '@/lib/routes-config'
import { MoveUpRightIcon, TerminalSquareIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex mt-[50px] sm:min-h-[92vh] gap-4 min-h-[auto] max-w-7xl mx-auto flex-col items-center justify-center text-center px-2 py-8'>
      <Link
        href='https://github.com/AnonymousDevelope'
        target='_blank'
        className='mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12'
      >
        Github sahifamizga obuna bo'lishni unutmang{' '}
        <MoveUpRightIcon className='w-4 h-4 font-extrabold' />
      </Link>
      <h1 className='text-3xl font-bold mb-4 sm:text-6xl'>
        Chet tilidan muammo bormi ?, dasturlash tilini o'rganishda muammo duch kelmoqdamiz ? unda bu
        til siz uchun
      </h1>
      <p className='mb-8 sm:text-xl max-w-[800px] text-muted-foreground'>
        O'zbek lug'atidan foydalangan holda ishlab chiqilgan dasturlash tillaridan biri doppi lang.
      </p>
      <div className='flex flex-col-reverse xl:md:flex-row items-center  w-[90%] gap-10 justify-between'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-semibold text-start mb-2'>Kelajakdagi maqsadlar:</h2>
          <ul className='list-disc pl-6 space-y-2 text-justify mb-6'>
            <li>
              <strong>O'quv dasturlarini rivojlantirish:</strong> Maktab va universitetlar uchun
              Doppi asosida maxsus o'quv dasturlari ishlab chiqiladi.
            </li>
            <li>
              <strong>Global maydonga chiqish:</strong> Doppi orqali o'zbek tilidagi dasturlashni
              xalqaro miqyosda tanitish.
            </li>
            <li>
              <strong>Jamoa rivoji:</strong> Yosh dasturchilarni birlashtiruvchi jamoat va
              platformalarni yaratish, ularga bilim almashish imkonini berish.
            </li>
          </ul>
          <div className=' flex flex-row gap-5'>
            <Link
              href={`/docs${page_routes[0].href}`}
              className={buttonVariants({ className: 'px-6', size: 'lg' })}
            >
              O'rganishni Boshlash
            </Link>
            <Link
              href='/blog'
              className={buttonVariants({
                variant: 'secondary',
                className: 'px-6',
                size: 'lg',
              })}
            >
              Blog O'qish
            </Link>
          </div>
        </div>
        <div className='flex'>
          <Image
            src='/doppi-logo-icon.png'
            alt='doppi'
            width={300}
            height={300}
            className='!w-full'
          />
        </div>
      </div>
      <span className='flex dark:bg-secondary px-6 py-4 rounded-lg flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 max-[800px]:mb-12 font-code text-base font-medium'>
        <TerminalSquareIcon className='w-5 h-5 mr-1 mt-0.5' />
        {'doppi salom-dunyo.doppi'}
      </span>
      <h1 className='text-3xl font-bold text-center mt-3'>Doppi dasturlash tili</h1>
      <div className='flex flex-col-reverse md:flex-row gap-10 w-full items-center mt-3'>
        <div className='content w-full'>
          {/* Doppi description content */}
          <span className='font-bold mb-4 text-justify '>
            <p className='mb-4 text-lg'>
              Doppi dasturlash tilining asosiy maqsadi dasturlashga endi kirib kelayotgan yoshlar
              orasida dasturlashni targ'ib qilish va ularga tushunarli, qiziqarli hamda milliy
              tilimizga moslashgan dasturlash muhitini taqdim etishdir. Bu til orqali yoshlarda
              dasturlashga bo'lgan qiziqishni oshirish va o'z ijodiy fikrlarini texnologik
              ishlanmalar orqali ifodalash imkoniyatini yaratish ko'zda tutilgan.
            </p>

            <h2 className='text-2xl font-semibold mb-4'>Doppi dasturlash tilining afzalliklari:</h2>
            <ol className='list-decimal pl-6 mb-6 space-y-2'>
              <li>
                <strong>Oson va intuitiv sintaksis:</strong> Dasturlash tili o'zbek tiliga
                moslashtirilgan bo'lib, foydalanuvchilarga kodni tez o'rganish va tushunish imkonini
                beradi.
              </li>
              <li>
                <strong>Milliylik elementi:</strong> Doppi milliy o'zligimizni aks ettirib,
                yoshlarda dasturlash tilini o'z ona tilida o'rganish imkoniyatini yaratadi.
              </li>
              <li>
                <strong>Qiziqarli amaliy mashg'ulotlar:</strong> Darsliklar va mashqlar dasturlashni
                yanada qiziqarli va interaktiv holga keltirish uchun mo'ljallangan.
              </li>
              <li>
                <strong>Yangi boshlovchilar uchun mos:</strong> Doppi oson sintaksisi va vizual
                yondashuv orqali dasturlashni yangi o'rganuvchilar uchun qulay qiladi.
              </li>
            </ol>

            <h2 className='text-2xl font-semibold mb-4'>Kelajakdagi maqsadlar:</h2>
            <ul className='list-disc pl-6 space-y-2 mb-6'>
              <li>
                <strong>O'quv dasturlarini rivojlantirish:</strong> Maktab va universitetlar uchun
                Doppi asosida maxsus o'quv dasturlari ishlab chiqiladi.
              </li>
              <li>
                <strong>Global maydonga chiqish:</strong> Doppi orqali o'zbek tilidagi dasturlashni
                xalqaro miqyosda tanitish.
              </li>
              <li>
                <strong>Jamoa rivoji:</strong> Yosh dasturchilarni birlashtiruvchi jamoat va
                platformalarni yaratish, ularga bilim almashish imkonini berish.
              </li>
            </ul>

            <p className='mb-4'>
              Doppi nafaqat dasturlashni o'rganish uchun qulay vosita, balki texnologiya sohasida
              o'zbek yoshlari uchun yangi ufqlarni ochuvchi ko'prik hamdir.
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}
