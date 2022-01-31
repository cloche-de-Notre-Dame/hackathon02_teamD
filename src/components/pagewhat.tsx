import Image from 'next/image';

export default function Pagewhat() {
  return (
    <div className='px-40 py-5'>
      <div className='my-10'>
        <h2 className='my-5 text-4xl'>何をやるか</h2>
      </div>

      <div className='flex justify-center'>
        <div className='container'>
          <Image
            src='/amy-hirschi-JaoVGh5aJ3E-unsplash.jpg'
            width={500}
            height={300}
            alt='future'
          />
        </div>

        <p className='justifytify-center flex items-center text-3xl'>
          小学校の先生向けにプログラミング授業の企画・運営のサポートを提供します。
          政府による導入補助金事業を活用し、カリキュラム作成のサポートからスタート。その後、教材の提供とTA派遣事業へと拡大して参ります。
        </p>
      </div>
    </div>
  );
}
