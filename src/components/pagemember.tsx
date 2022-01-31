import Image from 'next/image';

export default function PageMember() {
  return (
    <>
      <div>
        <div className='flex justify-center'>
          <div className='text-center'>
            <div className='mx-auto flex justify-center text-center'>
              <h2 className='my-auto text-4xl'>メンバーの紹介</h2>
            </div>

            <div className='mx-auto flex justify-center'>
              <div className='w-[1000px]'>
                <div className='flex'>
                  <div className='m-1 mt-5'>
                    <div className='text-center'>
                      <Image src='/menber1.jpeg' width={300} height={300} alt='menber1' />
                    </div>
                    <p className='my-2 text-center text-3xl'>中島健輔</p>
                    <p className='flex w-[330px] px-10 text-2xl'>代表取締役ＣＥＯ兼ＣＴＯ</p>
                    <p className='flex w-[330px] px-10 text-2xl'>岩手県出身、創業者</p>
                  </div>

                  <div className='m-1 mt-5'>
                    <div className='text-center'>
                      <Image src='/menber2.jpg' width={300} height={300} alt='menber2' />
                    </div>
                    <p className='my-2 text-center text-3xl'>遠藤慶子</p>
                    <p className='flex w-[330px] px-10 text-2xl'>取締役ＣＦＯ</p>
                    <p className='flex w-[330px] px-10 text-2xl'>岩手県出身、前職：ライター</p>
                  </div>

                  <div className='m-1 mt-5'>
                    <div className='text-center'>
                      <Image src='/member3.jpeg' width={300} height={300} alt='menber3' />
                    </div>
                    <p className='my-2 text-center text-3xl'>浅井健一郎</p>
                    <p className='flex w-[330px] px-10 text-2xl'>ＣＭＯ兼営業統括</p>
                    <p className='flex w-[330px] px-10 text-2xl'>愛知県出身、前職：事業開発</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
