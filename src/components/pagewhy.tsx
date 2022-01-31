import Image from 'next/image';

export default function Pagewhy() {
  return (
    <div className='px-40 py-5'>
      <div className='my-10'>
        <h2 className='my-5 text-4xl'>なぜやるか</h2>
        <div className='flex justify-center'>
          <p className='container text-3xl'>
            　私の母は、公立小学校の教員として働いています。
            <br />
            　当時は、日頃から業務量が多く、なかなか母との時間がとれない
            <br />
            ことに寂しさを感じていました。
            <br />
            　さらに、プログラミング教育が必修科され、教員への負担は増す
            <br />
            一方です。文部科学省から提示される学習指導要領には、授業の内
            <br />
            容に関しては明確な記載がなく、それぞれの学校である程度自由に
            <br />
            実施することとなっています。しかし、ITについて今まで学ぶ必要
            <br />
            のなかった教員が、生徒にプログラミングを教えるのは難しいと考
            <br />
            えていますし、それぞれの学校でカリキュラムを設計するコストも
            <br />
            かかります。実際に私の母親も、年末年始、そのことで頭を悩ませ
            <br />
            ていました。
            <br />
            　これは、私の母だけに限ったことではなく、家庭を持つ教員の方
            <br />
            全てに当てはまる問題であると考えています。
            <br />
            　「このような状況下にある教員の負担を少しでも減らすお手伝い
            <br />
            がしたい」これが私たちがこの事業に取り組む理由です。
            <br />
          </p>
          <div className='box items-center'>
            <Image src='/pagewhy1.jpg' width={600} height={430} alt='bg-future' />
            <Image src='/pagewhy2.jpg' width={600} height={430} alt='bg-future' />
          </div>
        </div>
      </div>
    </div>
  );
}
