import Image from 'next/image';

export default function Pagefooter() {
  return (
    <div className='my-5 w-screen bg-bg-black'>
      <div className='flex items-center justify-evenly pt-4 text-white'>
        <p className='px-2 text-xs tracking-widest'>お問い合わせ</p>
        <p className='px-2 text-xs tracking-widest'>助成金について</p>
      </div>
      <div className='flex items-center justify-evenly py-3 text-white'>
        <p className='px-2 text-xs tracking-widest'>特定商取引法に基づく表記</p>
        <p className='px-2 text-xs tracking-widest'>プライバシーポリシー</p>
      </div>
      {/* ロゴ */}
      <div className='flex items-center justify-center py-8'>
        <Image src='/logo_white.png' width={100} height={120} alt='logo_white' />
      </div>
      {/* SNS */}
      <div className='flex items-center justify-center py-8'>
        <div className='mx-4'>
          <Image src='/twitter.png' width={24} height={20} alt='twitter' />
        </div>
        <div className='mx-4'>
          <Image src='/facebook.png' width={24} height={24} alt='facebook' />
        </div>
      </div>
      {/* コピーライト */}
      <p className='flex items-center justify-center py-4 text-xs tracking-widest text-white'>
        @ 2022 TEAM-D
      </p>
    </div>
  );
}
