import Image from 'next/image';
import Link from 'next/link';
// import logoImg from '/logo_white.png';
// import { Link as Scroll } from 'react-scroll';
const ITEMS = ['なぜやるか', '何をやるか', 'どのようにやるか', 'メンバーの紹介', '支援のお願い'];
export default function PageHeader() {
  return (
    <div className='-ml-16 w-screen bg-bg-green'>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <a>
            {/* <Image src={logoImg} alt='ロゴ' width={240} height={120} placeholder='blur' /> */}
            <Image src='/logo_white.png' alt='ロゴ' width={120} height={120} />
          </a>
        </Link>
        <nav>
          <ul className='-ml-32 flex text-text-green'>
            {ITEMS.map((item) => {
              return (
                <li key={item} className='mx-4 last:mr-0'>
                  <a href={`#${item}`} className='uppercase'>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
