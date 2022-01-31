import Image from 'next/image';

export default function Pagehow() {
  return (
    <div className='px-40 py-5'>
      <div className='my-10'>
        <h2 className='my-5 text-4xl'>どのようにやるか</h2>
        <div className='flex justify-center'>
          <p className='container text-3xl'>
            まずは地元、岩手22校の小学校へサービス提供を開始。
            <br />
            （2022年10月 契約締結、2023年度カリキュラムより導入）
            <br />
            その後県下302校、全国へと展開します。
            <br />
            プログラミングカリキュラム作成のサポート事業
            <br />
            ・独自開発のアプリケーション●●を提供
            <br />
            ・教師の事前準備が簡単で、かつ子供の学習効率が高いカリキュラム提案
            <br />
            ・進捗管理のビジュアル化
            <br />
            学生の「プログラミングやりたい！」を引き出す授業のツール提供
            <br />
            ・漫画教材　プログラマー漫画家●●先生との独占契約
            <br />
            プログラミング授業のTA派遣事業
            <br />
            ・学校教育では「分からない」の早期解決が鍵
            <br />
            ・ハードルが高いトラブル対応を学校の先生が行うのは困難
            <br />
            ・先生、子供の両方をアシスト
            <br />
          </p>
          <div className='box items-center'>
            <Image src='/jason-sung-Ciz4lHr8Jgw-unsplash.jpg' width={600} height={430} alt='how1' />
            <Image
              src='/lagos-techie-IgUR1iX0mqM-unsplash.jpg'
              width={600}
              height={430}
              alt='how2'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
